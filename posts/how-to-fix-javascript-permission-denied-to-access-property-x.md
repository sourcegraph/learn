---
title: How to troubleshoot JavaScript Error Permission denied to access property "x"
author: nick-keers
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 4th, 2021
description: Learn how to handle the JavaScript Error, Permission denied to access property "x"
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: Error Permission denied to access property "x" in JavaScript error handling
type: posts
---

If you are reading this then you have come across an error of the form:

```
Error: Permission denied to access property "x"
```

Or you may see it in a slightly more verbose form:

```
Uncaught DOMException: Permission denied to access property "document" on cross-origin object
```

This error usually occurs when you try to access an object for which you have no permission, the most common
case is when you try to access a property of an `<iframe>` loaded from another domain for which you violated
the [same origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).

## Reproducing the error

An example which causes the above error is this example document:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example code</title>
    <meta charset="utf-8" />
    <script>
      window.onload = function() {
        console.log(window.frames[0].document);
      }
    </script>
  </head>
  <body>
    <iframe src="http://example.com"></iframe>
  </body>
</html>
```

## Solution

The easiest way to solve this error is to only try and access properties of an iframe which point to a domain that you control,
this means that your code will obey the same-origin policy.

If you want to communicate with the iframe, you can use `window.postMessage` - however, the embedded website must have an
event listener to handle the `message` event and that must be a written in a way to allow communication cross-origin.

For example, if your website embeds the below html page - imagine it's hosted online at `https://thirdparty.com`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Third party website</title>
    <meta charset="utf-8" />
    <script>
      window.addEventListener("message", (event) => {
          if (event.origin !== "https://mywebsite.com") {
            return;
          }

          event.source.postMessage("Hello, " + event.data, event.origin)
      }, false)
    </script>
  </head>
  <body>
    <p>Hello world</p>
  </body>
</html>
```

And your website is hosted on `https://mywebsite.com` and the source is like below:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My website</title>
    <meta charset="utf-8" />
    <script>
      window.addEventListener("message", (event) => {
        if (event.origin !== "https://thirdparty.com") {
          // we don't trust the sender of the message
          return
        }

        const replyText = document.createElement("p");
        const textContent = document.createTextNode(event.data);
        replyText.appendChild(textContent);

        document.body.appendChild(replyText);
      }, false)

      window.onload = () => {
        const iframe = window.frames[0];
        iframe.postMessage("world!", "https://thirdparty.com");
      }
    </script>
  </head>
  <body>
    <iframe src="https://thirdparty.com"></iframe>
    <p>My very cool website</p>
  </body>
</html>
```

Notice how there has to be specific code to check who the message sender is, this would require an agreement
with the owner of `https://thirdparty.com` to allow you to communicate in a secure way.

## Learn more

Search across open source JavaScript repositories that have the `Error: Permission denied to access property "x"` to understand the message more.

<SourcegraphSearch query="Error: Permission denied to access property x" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).
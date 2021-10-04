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
    <iframe src="http://example.com"></iframe>
    <script>
      window.onload = function() {
        console.log(window.frames[0].document);
      }
    </script>
  </head>
  <body></body>
</html>
```

## Solution

The easiest way to solve this error is to only try and access properties of an iframe which point to a domain that you control,
this means that your code will obey the same-origin policy.

If you want to communicate with the iframe, you can use `window.postMessage` - however, the embedded website must have an
event listener to handle the `message` event and that must be a written in a way to allow communication cross-origin.

An [example is here](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#example) from Mozilla Developer Network.

## Learn more

Search across open source JavaScript repositories that have the `Error: Permission denied to access property "x"` to understand the message more.

<SourcegraphSearch query="Error: Permission denied to access property x" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).
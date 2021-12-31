---
title: How to troubleshoot JavaScript Error Permission denied to access property "x"
authorSlug: nick-keers
authorDisplayName: Nick Keers
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 4th, 2021
description: Learn how to handle the JavaScript Error, Permission denied to access property "x"
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-3.png
imageAlt: Sourcegraph Learn
browserTitle: Error Permission denied to access property "x" in JavaScript error handling
type: posts
---

When you are working in JavaScript, you may come across an error similar to the following.

<PrismSyntaxHighlighter
input='Error: Permission denied to access property "x"'
language='javascript'
/>

Or, you may receive the error in a slightly more verbose form, like the following.

<PrismSyntaxHighlighter
input='Uncaught DOMException: Permission denied to access property "document" on cross-origin object'
language='javascript'
/>

This error usually occurs when you try to access an object for which you have no permission, the most common
case is when you try to access a property of an `<iframe>` loaded from another domain for which you violated
the [same origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).

## Reproducing the error

An example which causes the above error is this example document:

<PrismSyntaxHighlighter
input={`<!DOCTYPE html>
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
    <iframe src="http://sourcegraph.com"></iframe>
  </body>
</html>`}
language='html'
/>

Depending on the browser you are using, you may receive a warning or a blank box where the site would normally be loaded.

![Iframe output error rendered on Firefox](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/iframe-javascript-firefox-error.png)
![Iframe output error, blank iframe in browser](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/iframe-javascript-browser-error.png)

Now that we have reproduced the error, let's discuss possible solutions. 

## Solution

The recommended way to solve this error is to access properties that you control via an iframe. This will ensure that your code obeys the same-origin policy.

If you want to communicate with the iframe, you can use `window.postMessage()` if the embedded website has an event listener to handle the `message` event. Additionally, that message must be written in a way to allow communication cross-origin. 

_Please be sure to review the terms of service of websites you intend to incorporate onto your own domains. This tutorial is for demonstration purposes only._

For example, you can use the following HTML if you would like your website, `https://www.my-sourcegraph-website.com/` to be able to embed an html page hosted online at `https://www.a-third-party-page.com/`, you could write the file below. 


<PrismSyntaxHighlighter
input={`<!DOCTYPE html>
<html>
  <head>
    <title>A third party website</title>
    <meta charset="utf-8" />
    <script>
      window.addEventListener("message", (event) => {
          if (event.origin !== "https://www.my-sourcegraph-website.com/") {
            return;
          }
  
          event.source.postMessage("Hello, " + event.data, event.origin)
      }, false)
    </script>
  </head>
  <body>
    <p>Hello world</p>
  </body>
</html>`}
language='html'
/>

Your website hosted on `https://www.my-sourcegraph-website.com/` will have the soucecode below. 

<PrismSyntaxHighlighter
input={`<!DOCTYPE html>
<html>
  <head>
    <title>My Sourcegraph website</title>
    <meta charset="utf-8" />
    <script>
      window.addEventListener("message", (event) => {
        if (event.origin !== "https://www.a-third-party-page.com/") {
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
        iframe.postMessage("world!", "https://www.a-third-party-page.com/");
      }
    </script>
  </head>
  <body>
    <iframe src="https://www.a-third-party-page.com/"></iframe>
    <p>My very cool website</p>
  </body>
</html>`}
language='html'
/>

Notice how there is specific code to check who the message sender is, this would require an agreement with the owner of `https://www.a-third-party-page.com/` to allow you to communicate in a secure way. 

## Learn more

Search across open source JavaScript repositories that have the `Permission denied to access property "x"` error to understand the message more.

<SourcegraphSearch query="Permission denied to access property x" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).
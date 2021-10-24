---
title: How to troubleshoot JavaScript URIError URI malformed
author: your name
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: today's date
description: Learn how to error handle JavaScript URIError URI malformed
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: URIError URI malformed in JavaScript error handling
type: posts
---

`URIError: URI malformed` is an error that you get when the URI encoding or decoding of an argument wasn't successful. It occurs when the argument given to either the `encodeURI`, `decodeURI`, `encodeURIComponent`,  or `decodeURIComponent` function was not valid, which makes the function unable encode or decode properly.  In this tutorial, we will learn how to solve this problem.


## Reproducing the error

To start with, we will attempt to recreate the error. Let us consider the `encodeURIComponent` function. Encoding replaces one, two, three, or four escape sequences with the character's UTF-8 encoding. If a surrogate that is not part of a high-low pair is attempted to be encoded, a `URIError: URI malformed` will be thrown, such as:

<Highlighter
input={`encodeURI('\uD800');`}
language='javascript'
/>

Another possible cause of `URIError: URI malformed` is during decoding. Each escape sequence in an encoded URI component is replaced with the character it represents during decoding. If such a character does not exist, an error will be thrown:

<Highlighter
input={`decodeURIComponent('%E0%A4%A');`}
language='javascript'
/>
How do we solve this problem then? Here are several ways of doing that.

## Ensure the Argument is valid

If you are trying to encode or decode an input, you should ensure that the input argument isn't corrupted, truncated or contains unsupported charcters in any way. An example is the solution to the above `decodeURIComponent` error. The function runs without error when the code becomes.
<Highlighter
    input={`decodeURIComponent('JS_%E5%8D%98%20%E7%B4%94');`}
    language='javascript'
/> 
This returns `JS_単 純`, the correct output without any error.

## Solution 2

Provide another solution.

## Learn more

Search across open source JavaScript repositories that have the `URIError` to understand the message more.

<SourcegraphSearch query="URIError: URI malformed" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

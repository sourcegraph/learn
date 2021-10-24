---
title: How to troubleshoot JavaScript URIError URI malformed
author: taiwo-yusuf
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 24, 2021
description: Learn how to error handle JavaScript URIError URI malformed
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: URIError URI malformed in JavaScript error handling
type: posts
---

`URIError: URI malformed` is an error that you get when the URI encoding or decoding of an argument wasn't successful. It occurs when the argument given to either the `encodeURI`, `decodeURI`, `encodeURIComponent` or `decodeURIComponent` function was not valid, which makes the function unable to encode or decode the argument properly.  In this tutorial, we will learn how to solve this problem.


## Reproducing the error

To start with, we will attempt to recreate the error. A possible point of encounter of the error is during decoding. Each escape sequence in an encoded URI component is replaced with the character it represents during decoding. If such a character does not exist, an error will be thrown. The code below will throw an `URIError: URI malformed` error.

<Highlighter
input={`decodeURIComponent('%E0%A4%A');`}
language='javascript'
/> 

How do we solve this problem then? Here are several ways of doing that.


## Ensure the Argument is valid

If you are trying to encode or decode an input, you should ensure that the input argument isn't corrupted, truncated or contain unsupported charcters in any way. An example is the solution to the above `decodeURIComponent` error. The function runs without error when the code becomes.

<Highlighter
    input={`decodeURIComponent('JS_%E5%8D%98%20%E7%B4%94');`}
    language='javascript'
/> 

This returns `JS_単 純`, the correct output without any error.

## Catch and Handle the error

If you are not in control of the text that you feed into the functions, the best you can do might be to catch and handle the error appropriately without breaking the code. One could return an appropriate error message. An example is shown below.

<Highlighter
    input={
        `function DecodeInput(encoded_text){
            try {
                return decodeURI(encoded_text);
            } catch(e) {
                console.error("Wrongly Formatted Input.");
            }
        }`
    }
    language='javascript'
/> 

## Learn more

Search across open source JavaScript repositories that have the `URIError` to understand the message more.

<SourcegraphSearch query="URIError: URI malformed" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

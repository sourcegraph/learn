---
title: How to troubleshoot JavaScript RangeError Invalid code point
authorSlug: anja-bender
authorDisplayName: Anja Bender
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 30,2021
description: Learn how to error handle JavaScript RangeError, Invalid code point
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: RangeError, Invalid code point in JavaScript error handling
type: posts
---

If you are working in JavaScript, and receive the following error, your code is using an invalid value with the method `String.fromCodePoint()`.

<PrismSyntaxHighlighter
input={`RangeError: {0} is not a valid code point
RangeError: Invalid code point {0}`}
language='javascript'
/>

The `{0}` output in the message above is a placeholder for the value you used as an argument in the `String.fromCodePoint()` method. The argument passed to the method needs to be a value in the [Unicode](https://en.wikipedia.org/wiki/Unicode) codespace, which is in the range of integers from `0` to `0x10FFFF` (or `1114111`).

Depending on the web browser you are using, the message of the error will vary from the specifc output described before.

In this tutorial, we'll reproduce the issue and then go over some solutions.

## Reproducing the error

Let's execute the following code in a JavaScript console. In this example, we will pass `-1` to the method, which will throw the error.

<PrismSyntaxHighlighter
input={`String.fromCodePoint(-1); //RangeError: -1 is not a valid code point`}
language='javascript'
/>

We receive the `RangeError` message because `-1` is less than `0`, and is therefore out of the range described above.

In this second example, we will use `9733` as the argument, and a star will appear as expected because it is in-range and represents a [Unicode character](https://www.fileformat.info/info/unicode/char/2605/index.htm).

<PrismSyntaxHighlighter
input={`String.fromCodePoint(9733); //★`}
language='javascript'
/>

Now that we have been able to reproduce the error, let's go over possible solutions.

## Check before passing

We can avoid the exception by checking the value of the `codePoint` inside of an `if` statement.

<PrismSyntaxHighlighter
input={`var codePoint = 1114111;
 
if(codePoint >= 0 && codePoint < 1114112){
String.fromCodePoint(codePoint); 
}
 
else{
console.log("The argument passed to fromCodePoint() method is not in the valid range(0 to 1114111)")
}`}
language='javascript'
/>

If the `codePoint` variable was initalized as a number not within the valid range, the log message inside of the `else` statement will be printed to the console. Depending on your program's requirements, you could also enclose the `if`-`else` statement in a loop, so that the user can then enter a valid code point.   

## Exception handling

A second approach is to handle the exception with a `try`-`catch` clause that catches the error.

<PrismSyntaxHighlighter
input={`var x = -1;
 
try{
console.log(String.fromCodePoint(x)); 
}
 
catch(error){
  console.log("The argument passed to fromCodePoint() method is not in the valid range(0 to 1114111)")
}`}
language='javascript'
/>

This program will throw the `RangeError invalid code point` and then fetch it in the `catch` clause. The described log message will be shown to the user. 

## Learn more

Search across open source JavaScript repositories that have the `RangeError invalid code point` to understand how developers are catching unicode errors.

<SourcegraphSearch query="RangeError: Invalid code point lang:js" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

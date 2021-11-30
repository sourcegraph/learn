---
title: How to troubleshoot JavaScript InternalError too much recursion
authorSlug: abhinav-sharma
authorDisplayName: Abhinav Sharma
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 3, 2021
description: Learn how to error handle JavaScript InternalError too much recursion
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: InternalError, too much recursion in JavaScript error handling
type: posts
---

If you are working in JavaScript, and receive the following output, the JavaScript engine detects an excessive level of recursion in your code.

<PrismSyntaxHighlighter
input='InternalError: too much recursion'
language='javascript'
/>

A recursive function is a function that calls itself repeatedly. When a condition is met, the function stops calling itself. This is called a base case. If somehow the condition does not meet that condition, then the function continues calling itself and the above error occurs.

In this tutorial, we'll reproduce the issue and then go over some solutions.

## Reproducing the error

Let's write the following program, `factorial.js`.

<PrismSyntaxHighlighter
input='function factorial(x) {
  return x * factorial(x - 1)
}
num = 5
console.log(factorial(num))'
language='javascript'
/>

This small program calculates the factorial of number `num` which is initialized as `5` in this case. This recursive function is missing a base case. As there is no exit condition, the function will call itself infinitely.

<PrismSyntaxHighlighter
input={`factorial.js:1
function factorial(x) {
                  ^
RangeError: Maximum call stack size exceeded
    at factorial (factorial.js:1:19)
    at factorial (/runtime/javascript/3xdbg257u/factorial.js:3:12)
    at factorial (/runtime/javascript/3xdbg257u/factorial.js:3:12)
    at factorial (/runtime/javascript/3xdbg257u/factorial.js:3:12)
    at factorial (/runtime/javascript/3xdbg257u/factorial.js:3:12)
    at factorial (/runtime/javascript/3xdbg257u/factorial.js:3:12)
    at factorial (/runtime/javascript/3xdbg257u/factorial.js:3:12)
    at factorial (/runtime/javascript/3xdbg257u/factorial.js:3:12)
    at factorial (/runtime/javascript/3xdbg257u/factorial.js:3:12)
    at factorial (/runtime/javascript/3xdbg257u/factorial.js:3:12)
...`}
language='javascript'
/>

Now that we have been able to reproduce the error, let's go over possible solutions.

## Specifying a base case condition

We know that in mathematics, a factorial of negative numbers is not defined, so we can use this as our base case condition.

<PrismSyntaxHighlighter
input='function factorial(x) {
  if (x === 0) {
    return 1
  }
  return x * factorial(x - 1)
}
num = 5
console.log(factorial(num))'
language='javascript'
/>

In this example, `factorial(5)` asks for `factorial(4)`, `factorial(4)` asks for `factorial(3)` and so on. At some point we arrive at `factorial(0)` which returns `1`. The following is the output we receive.

<PrismSyntaxHighlighter
input='Output: 120'
language='javascript'
/>

Hence, by explicitly providing the condition where the recursion will stop, we won't receive the `too much recursion` error.

## Using a `while` loop

We can also implement the following program using a `while` loop. In this example, we are calculating the factorial of number using while loop.

<PrismSyntaxHighlighter
input={`num = 5
factorial = 1
 
while (num > 0) {
  factorial = factorial * num
  num--
}
  
console.log(factorial)`}
language='javascript'
/>

In each iteration we are multiplying the current value `num` with `factorial` and then decrementing `num` by 1.

<PrismSyntaxHighlighter
input='Output: 120'
language='javascript'
/>

Since the base condition that will stop the recursion is also specified here (`num > 0`), we avoid the `too much recursion` error.

## Learn more

Search across open source JavaScript repositories that have the `InternalError` to further understand and explore the error message.

<SourcegraphSearch query="InternalError: too much recursion" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

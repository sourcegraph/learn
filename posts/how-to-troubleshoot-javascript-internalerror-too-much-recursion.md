---
title: How to troubleshoot JavaScript InternalError too much recursion
author: Abhinav Sharma
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 3, 2021
description: Learn how to error handle JavaScript InternalError too much recursion
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: InternalError, too much recursion in JavaScript error handling
type: posts
---

If you are working in JavaScript, and receive the the following output, the JavaScript engine detects an excessive level of recursion in your code.

```javascript
InternalError: too much recursion
```

A recursive function is a function that calls itself repeatedly. When a condition is met, the function stops calling itself. This is called a base case. If somehow the condition does not meet then the function continues calling itself and the above error occurs.

In this tutorial, we'll reproduce the issue and then go over some solutions.

## Reproducing the error

Let's write the following program, `factorial.js`.

```javascript
function factorial(x) {
  return x * factorial(x - 1)
}
num = 5
console.log(factorial(num))
```

This small program calculates factorial of number `num` which is `5` in this case. This recursive function is missing a base case. As there is no exit condition, the function will call itself infinitely.

```javascript
factorial.js:1
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

```

Now that we have been able to reproduce the error, let's go over possible solutions.

## Specifying Base Case Condition

We know that factorial of negative numbers is not defined, so we can use this as our base case condition.

```javascript
function factorial(x) {
  if (x === 0) {
    return 1
  }
  return x * factorial(x - 1)
}
num = 5
console.log(factorial(num))
```

In this example, `factorial(5)` asks for `factorial(4)`, `factorial(4)` asks for `factorial(3)` and so on. At some point we arrive at `factorial(0)` which simply returns 1. The following is the output we get.

```javascript
Output: 120
```

Hence by explicitly providing the stopping condition, we don't have to worry about `too much recursion` error.

## Using For/While Loop

We can also implement the following program using for/while loop. Here we are calculating the factorial of number using while loop.

```javascript
num = 5
factorial = 1

while (num > 0) {
  factorial = factorial * num
  num--
}

console.log(factorial)
```

In each iteration we are multiplying the current value `num` with `factorial` and then decrementing `num` by 1.

```javascript
Output: 120
```

Since the stopping condition is also specified here (`num > 0`), we avoid
`too much recursion` error.

## Learn more

Search across open source JavaScript repositories that have the `InternalError` to understand the message more.

<SourcegraphSearch query="InternalError: too much recursion" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

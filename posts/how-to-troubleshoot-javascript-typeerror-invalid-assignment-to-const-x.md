---
title: How to troubleshoot JavaScript TypeError invalid assignment to const "x"
author: shubham-bhatt
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 28, 2021
description: Learn how to error handle JavaScript TypeError invalid assignment to const "x"
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: TypeError invalid assignment to const "x" in JavaScript error handling
type: posts
---

The following JavaScript exception occurs when it was attempted to alter a constant value. In JavaScript, constants are declared using the `const` keyword. The message will vary depending on the browser you are using with some examples below. 

<Highlighter
    input={`TypeError: invalid assignment to const "x" // Firefox
TypeError: Assignment to constant variable. // Chrome
TypeError: Assignment to const // Edge
TypeError: Redeclaration of const 'x' // IE`}  
    language='bash'
/>

You are likely receiving this error because JavaScript `const` variable declarations can't be re-assigned or redeclared. A constant in JavaScript is a value that cannot be altered by the program during normal execution. It cannot change through re-assignment, and it can't be redeclared. 

## Reproducing the error

There are some common mistakes that can raise this exception. One way to reproduce this error is through assigning a value to the same constant name in the same block-scope.

<Highlighter
    input={`const x = 80;
x = 120;`}  
    language='javascript'
/>

Here, the program is written in a way that asks for `x` to be reassigned to a constant, which cannot be done. When you attempt to run this program, you may receive output similar to the following.

<Highlighter
    input={`Uncaught TypeError: invalid assignment to const 'x'`}  
    language='bash'
/>

Now that we have reproduced the error, let's consider the approaches you can use to recover from this error. It's important to think through what was intended to be achieved with the constant in question.

## Rename the variable name

<Highlighter
    input={`const x = 80;
const y = 120;`}  
    language='javascript'
/>

## Solution 2

### Use let or var instead of const

```js
let x = 80;
let x = 120;
```

## (optional) Solution 3

### Scoping

```js
const x = 80;

function setupBigScreenEnvironment() {
  const x = 120;
}
```

### const and immutability

// This is plagiarized from Moz Docs

The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. For instance, in case the content is an object, this means the object itself can still be altered. This means that you can't mutate the value stored in a variable:

```js
const obj = {foo: 'bar'};
obj = {foo: 'baz'}; // TypeError: invalid assignment to const `obj'
```

But you can mutate the properties in a variable:

```js
obj.foo = 'baz';
obj; // Object { foo: "baz" }
```

## Learn more

Search across open source JavaScript repositories that have the `TypeError` to understand the message more.

<SourcegraphSearch query="TypeError: invalid assignment to const x" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

---
title: How to troubleshoot JavaScript TypeError invalid assignment to const "x"
author: Shubham Bhatt
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 22, 2021
description: Learn how to error handle JavaScript TypeError invalid assignment to const "x"
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: TypeError invalid assignment to const "x" in JavaScript error handling
type: posts
---

The JavaScript exception ```js invalid assignment to const ``` occurs when it was attempted to alter a constant value. JavaScript const declarations can't be re-assigned or redeclared.

## Message

```js
TypeError: invalid assignment to const "x" (Firefox)
TypeError: Assignment to constant variable. (Chrome)
TypeError: Assignment to const (Edge)
TypeError: Redeclaration of const 'x' (IE)
```

### Error type
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

## What went wrong?

If you are working in Javascript and receive the following output, it means you are redeclaring the const value, a constant is a value that cannot be altered by the program during normal execution. It cannot change through re-assignment, and it can't be redeclared. In JavaScript, constants are declared using the const keyword.

## Example

### Invalid redeclaration

```js
TypeError: invalid assignment to const x
```

## Reproducing the error
There are some common mistakes that can raise this exception.

### Assigning a value to the same constant name in the same block-scope will throw.

```js
const x = 80;
x = 120; // TypeError: invalid assignment to const x
```

## Fixing the error
There are multiple options to fix this error. Check what was intended to be achieved with the constant in question.

## Solution 1

### Rename the variable name

```js
const x = 80;
const y = 120;
```

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

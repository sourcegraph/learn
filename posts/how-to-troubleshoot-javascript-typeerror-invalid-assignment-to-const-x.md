---
title: How to troubleshoot JavaScript TypeError invalid assignment to const "x"
author: Shubham Bhatt
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: 19/10/2021
description: Learn how to error handle JavaScript TypeError invalid assignment to const "x"
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: TypeError invalid assignment to const "x" in JavaScript error handling
type: posts
---

If you are working in Javascript and receive the following output, it means you are redeclaring the const value.

```js
TypeError: invalid assignment to const `x'
```

## Reproducing the error
There are some common mistakes that can raise this exception.

### Assigning a value to the same constant name in the same block-scope will throw.

```js
const x = 80;
x = 120; // TypeError: invalid assignment to const x
```

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

## Learn more

Search across open source JavaScript repositories that have the `TypeError` to understand the message more.

<SourcegraphSearch query="TypeError: invalid assignment to const "x"" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

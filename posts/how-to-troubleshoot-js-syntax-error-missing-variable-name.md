---
title: How to troubleshoot JavaScript SyntaxError missing variable name
author: angelina-tresca
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 19, 2021
description: Learn how to error handle JavaScript SyntaxError missing variable name
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: SyntaxError missing variable name in JavaScript error handling
type: posts
---

If you are working in Javascript, and receive the following output, your code probably has a typo or you forgot to give a name to a variable.

```js
SyntaxError: missing variable name
SyntaxError: Unexpected token = 
```

Depending on the browser, the message of the error will vary between the two outputs described before.

## Reproducing the error and its solutions
There are some common mistakes that can raise this exception.

### You forgot to write the variable name:
```js
var = "foo";

// SyntaxError: missing variable name
```

**Solution**
```js
var description = "foo";
```

### You are using a reserved keyword as the variable name:
```js
var debugger = "foo";

// SyntaxError: missing variable name
```

**Solution**
```js
var debug_variable = "foo";
```

### When declaring multiple variables at the same time, you ended the previous line with a comma instead of a semi-colon:
```js
var a, b = "foo",
var c, = "bar"

// SyntaxError: missing variable name
```

**Solution**

```js
var a, b = "foo";
var c = "bar";
```

### When creating an array you forgot to write the square brackets around the values:
```js
var array = 1, 2, 3, 4, 5;

// SyntaxError: missing variable name
```
**Solution**
```js
var array = [1, 2, 3, 4, 5];
```

## Learn more

Search across open source JavaScript repositories that have the `SyntaxError` to understand the message more.

<SourcegraphSearch query="SyntaxError: missing variable name" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).
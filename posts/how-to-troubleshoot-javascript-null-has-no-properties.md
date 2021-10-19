---
title: How to troubleshoot JavaScript TypeError null has no properties
author: angelina-tresca
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 19, 2021
description: Learn how to error handle JavaScript TypeError null has no properties
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: TypeError null has no properties in JavaScript error handling
type: posts
---

If you are working in Javascript, and receive one of the following outputs, your code is attempting to access properties of `null` and `undefined`.

```js
TypeError: null has no properties 
TypeError: undefined has no properties 
TypeError: Cannot read property {x} of null
TypeError: Cannot read property {x} of undefined
TypeError: Unable to get property {x} of undefined or null reference
```

In Javascript, `null` and `undefined` have no properties. This is why this error is being raised.

Depending on the browser, the message of the error will vary between the outputs described before.

In this tutorial, we'll reproduce the issue and then go over some solutions.

## Reproducing the error

Let's execute the following in a Javascript console:

```js
console.log(null.name);  // TypeError: Cannot read property 'name' of null
```

```js
console.log(undefined.name);  // TypeError: Cannot read property 'name' of undefined
```

Now that we have been able to reproduce the error, let's go over possible solutions.

## Review your code

In the example showed before, it is pretty clear that we are trying to access a property of `null` or `undefined`. But let's see this example:
```js
let person = null;

if (Date.now() < new Date(2021,11,01)) {
    person = {
        "name": "Michelle"
    }
}

console.log(person.name);
```

**What about this code?** If you run this before November 1, 2021 it will work ok. The output will be `Michelle`. 
But if you run this code after that date, the variable `person` won't be changed and it will be `null`, so we are going to receive the TypeError.

So, we need to be careful about this kind of code that can have different values.

## Check before accessing

If we have a code like the one we just saw, we can avoid this exception to be raised by checking if the variable is what we are expecting, before using it:

```js
let person = null;

if (Date.now() < new Date(2021,11,01)) {
    person = {
        "name": "Michelle"
    }
}

if (person != null) {
    console.log(person.name);
} else {
    console.error("I don't know the person's name :( ")
}
```

*Note that when comparing this way: `!= null` the result will be `true` only if the variable is not null and not undefined. See more about this [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null#difference_between_null_and_undefined).*

This way we can let the user know that something is missing but with a nicer message.

## Exception handling

A third approach is to handle the exception with a `try` / `catch` clause that gets the `TypeError` and shows a nicer message for the user.

```js
let person = null;

if (Date.now() < new Date(2021,11,01)) {
    person = {
        "name": "Michelle"
    }
}

try {
    console.log(person.name);
} catch (error) {
    if (error instanceof TypeError) {
        console.error("I don't know the person's name :( ")
    }
}
```

## Learn more

Search across open source JavaScript repositories that have the `TypeError` to understand the message more.

<SourcegraphSearch query="TypeError: null has no properties" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).
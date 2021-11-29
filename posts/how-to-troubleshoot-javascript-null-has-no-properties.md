---
title: How to troubleshoot JavaScript TypeError null has no properties
authorSlug: angelina-tresca
authorDisplayName: Angelina Tresca
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 19, 2021
description: Learn how to error handle JavaScript TypeError null has no properties
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: TypeError null has no properties in JavaScript error handling
type: posts
---

If you are working in JavaScript, and receive one of the following outputs, your code is attempting to access properties of `null` and `undefined`.

<Highlighter
input='TypeError: null has no properties 
TypeError: undefined has no properties 
TypeError: Cannot read property {x} of null
TypeError: Cannot read property {x} of undefined
TypeError: Unable to get property {x} of undefined or null reference'
/>

In JavaScript, `null` and `undefined` have no properties. This is why this error is being raised.

Depending on the browser, the message of the error will vary between the outputs described before.

In this tutorial, we'll reproduce the issue and then go over some solutions.

## Reproducing the error

Let's execute the following in a JavaScript console. In this first example, we will use `null`.

<PrismSyntaxHighlighter
input={`console.log(null.name);  // TypeError: Cannot read property 'name' of null`}
language='javascript'
/>

In this second example, we will use `undefined`.

<PrismSyntaxHighlighter
input={`console.log(undefined.name);  // TypeError: Cannot read property 'name' of undefined`}
language='javascript'
/>

Now that we have been able to reproduce the error, let's go over possible solutions.

## Review your code

In the examples above, it is pretty clear that we are trying to access a property of `null` or `undefined`. But in other cases this will be less obvious. Let's consider another example.

<PrismSyntaxHighlighter
input={`let person = null;
 
if (Date.now() < new Date(2022,11,01)) {
    person = {
        "name": "Michelle"
    }
}
 
console.log(person.name);`}
language='javascript'
/>

**What about this code?** If you run this program before November 1, 2022 it will work as expected. The output will be `Michelle`. 
But if you run this code after that date, the variable `person` won't be changed and it will have a property of `null`, so we are going to receive the `TypeError`.

So, we need to be careful about this kind of code that can have different values.

## Check before accessing

If we have a program like the one in the previous section, we can avoid this exception being raised by checking if the variable is what we are expecting, before using it.

<PrismSyntaxHighlighter
input={`let person = null;
 
if (Date.now() < new Date(2021,11,01)) {
    person = {
        "name": "Michelle"
    }
}
 
if (person != null) {
    console.log(person.name);
} else {
    console.error("I don't know the person's name :( ")
}`}
language='javascript'
/>

*Note that when comparing this way: `!= null` the result will be `true` only if the variable is not null and not undefined. See more about this in the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null#difference_between_null_and_undefined).*

This way we can let the user know that something is missing but with a more human-readable message.

## Exception handling

A third approach is to handle the exception with a `try` / `catch` clause that catches the `TypeError` and shows a human-readable message for the user.

<PrismSyntaxHighlighter
input={`let person = null;
 
if (Date.now() < new Date(2022,11,01)) {
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
}`}
language='javascript'
/>

Exception handling with `try` / `catch` can help the program continue to run when exceptions occur, and can help your user understand program output more clearly.

## Learn more

Search across open source JavaScript repositories that have the `TypeError` to understand the message more.

<SourcegraphSearch query="TypeError: null has no properties lang:js" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

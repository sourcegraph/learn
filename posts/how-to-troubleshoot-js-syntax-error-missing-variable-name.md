---
title: How to troubleshoot JavaScript SyntaxError missing variable name
authorSlug: angelina-tresca
authorDisplayName: Angelina Tresca
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 22, 2021
description: Learn how to error handle JavaScript SyntaxError missing variable name
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-10.png
imageAlt: Sourcegraph Learn
browserTitle: SyntaxError missing variable name in JavaScript error handling
type: posts
---

If you are working in JavaScript, and receive the following output, your code probably has a typo or you forgot to give a name to a variable.

<Highlighter
input='SyntaxError: missing variable name
SyntaxError: Unexpected token ='
/>

Depending on the browser you are using, the message of the error will vary between the two outputs described before.

## Reproducing the error and its solutions

There are some common mistakes that can raise this exception.

### Missing variable name

In this example, we have initialized a variable but did not pass a name to that variable.

<PrismSyntaxHighlighter
input='var = "foo";'
language='javascript'
/>

We'll receive output that the name for that variable is missing.

<Highlighter
input='SyntaxError: missing variable name'
/>

To solve this isse, we will need to ensure that we have declared our variable with a name in addition to passing a value for that variable.
           
<PrismSyntaxHighlighter
input='var description = "foo";'
language='javascript'
/>

With our variable now declared with the name `description`, we will no longer receive an error message.

### Using a reserved keyword as the variable name:

Some words are reserverd in JavaScript, and you can't use them as variable, label, or function names. You can review the [list of reserved JavaScript words at W3Schools](https://www.w3schools.com/js/js_reserved.asp). 

In this example, when we use the reserved word `debugger` to initialize our variable, we receive an error that the name is missing. 

<PrismSyntaxHighlighter
input='var debugger = "foo";'
language='javascript'
/>

<Highlighter
input='SyntaxError: missing variable name'
/>

We can solve this issue by using an alternate name. 

<PrismSyntaxHighlighter
input='var debug_variable = "foo";'
language='javascript'
/>

We were able to still gesture towards the debugging functionality we intended but without using the reserved keyword. This way, we don't receive an error when we run this code. 

### Ending the previous line with a comma instead of a semicolon

When declaring multiple variables at the same time, you may erroneously end a line with a comma or some other punctuation instead of a semicolon.

Here, we initialize two variables — `a` and `b` — with the value `"foo"`, and a third variable — `c` — with the value `"bar"`. 

<PrismSyntaxHighlighter
input='var a, b = "foo",
var c = "bar"'
language='javascript'
/>

Again, you will encounter the `SyntaxError`.

<Highlighter
input='SyntaxError: missing variable name'
/>

To remedy this issue, be sure to use semicolons to end your lines. 

<PrismSyntaxHighlighter
input='var a, b = "foo";
var c = "bar";'
language='javascript'
/>

With this solution, we will no longer encounter an error. 

### Missing brackets around arrays

When creating an array you may forget to write the square brackets around the values, as in the example below.

<PrismSyntaxHighlighter
input='var array = 1, 2, 3, 4, 5;'
language='javascript'
/>

Array syntax requires square brackets — `[]` — around values in order for it to be read by JavaScript. Running the above code will cause you to run into the `SyntaxError`. 

<Highlighter
input='SyntaxError: missing variable name'
/>

The solution to this is to be sure you are following correct JavaScript syntax. In the case of arrays, be sure to use square brackets.

<PrismSyntaxHighlighter
input='var array = [1, 2, 3, 4, 5];'
language='javascript'
/>

With the square brackets in place, the syntax for the array is corrected and your code will run as expected.

## Learn more

Search across open source JavaScript repositories that have the `SyntaxError` to understand the message more.

<SourcegraphSearch query="SyntaxError: missing variable name" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

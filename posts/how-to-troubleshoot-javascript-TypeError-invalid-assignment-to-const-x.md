---
title: How to troubleshoot JavaScript TypeError invalid assignment to const "x"
authorSlug: yashesvinee-v
authorDisplayName: Yashesvinee V
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: November 30, 2021
description: Learn how to error handle JavaScript TypeError invalid assignment to const "x"
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-2.png
imageAlt: Sourcegraph Learn
browserTitle: TypeError invalid assignment to const "x" in JavaScript error handling
type: posts
---

JavaScript allows three ways to declare a variable:

- `var`
- `const`
- `let`

The `invalid assignment to const "x"` exception occurs when the user tries to change the value of a variable declared as a constant or `const`. This is because `const` variables cannot be re-declared or re-assigned. Once declared, they cannot be altered during program execution.

## Reproducing the error

We are able to reproduce the error by declaring a `const` variable and then attempting to re-use and re-assign the variable later on in our code.

<PrismSyntaxHighlighter
input={`const num1 = 10;
...
...
...
num1 = 30;`}
language='javascript'
/>

On running the above code we get the following result. Please note that depending on your JavaScript console, your specific output wording may vary slightly. 

<Highlighter
input={`TypeError: invalid assignment to const "num1"`}
/>

Initializing a variable as a constant renders it to be read-only. This means that we cannot change the value stored in the variable, but we can mutate the properties in the variable. For example:

<PrismSyntaxHighlighter
input={`const my_obj = {graph: 'bar'};
my_obj = {graph: 'histogram'}; `}
language='javascript'
/>

The above would throw a `TypeError`. 

Alternatively, if we try to alter the object itself as shown below, instead of receiving an error we may get a warning stating that it expects an expression or function call. 

<PrismSyntaxHighlighter
input={`my_obj.graph = 'baz';
my_obj;`}
language='javascript'
/>

We can review and choose to set aside warnings if we are satisfied with how our program is running and our program's execution is not impacted.

## Using `let` or `var`

Initializing variables with the keyword`let` allows users to declare a variable only once while also enabling the variable to be reassigned any number of times. Here is an example.

<PrismSyntaxHighlighter
input={`let x = 10;
x = 5;  
function func1()
{
let x = 20;
}`}
language='javascript'
/>

The variable `x` above can be declared inside the function without any error as `let` is block-scoped.

Alternately, the variable `var` allows users to re-assign and re-declare variables any number of times.

<PrismSyntaxHighlighter
input={`var x = "Hello";
var x = 10;
function func1()
{
var x = 1;
}`}
language='javascript'
/>

JavaScript `var` variables have global scope and due to this, re-declaring a variable inside a block will re-declare the variable outside the block. The final value of `x` from the above code is `1` even when prompted to print `x` from outside the `func1()` function.

## Scoping

JavaScript's `const`, like `let`, is block-scoped so, if we want to re-declare a `const` variable we may do so in a newly created function.

<PrismSyntaxHighlighter
input={`const x = 10;
function func1()
{
const x = 20;
}`}
language='javascript'
/>

Running the above code will result in no errors due to the scoping.

## Renaming

The last way to troubleshoot this error is by renaming the variable itself.

<PrismSyntaxHighlighter
input={`const x = 10;
const y = 20;`}
language='javascript'
/>

Here, we were able to declare two constants using two different variables. 

## Learn more

Search across open source JavaScript repositories that have this error message to understand how others are debugging.

<SourcegraphSearch query="invalid assignment to const x" patternType="literal"/>

From here, you can learn more about JavaScript's [`var` variable](https://www.w3schools.com/js/js_variables.asp), [`let` variable](https://www.w3schools.com/js/js_let.asp), and [`const` variable](https://www.w3schools.com/js/js_const.asp), or take a look at more [JavaScript tutorials](https://learn.sourcegraph.com/tags/javascript). 

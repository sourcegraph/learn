---
title: How to troubleshoot JavaScript TypeError invalid assignment to const "x"
author: Yashesvinee V
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: December 1, 2021
description: Learn how to error handle JavaScript TypeError invalid assignment to const "x"
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: TypeError invalid assignment to const "x" in JavaScript error handling
type: posts
---

JavaScript allows three ways to declare a variable :

- `var`
- `const`
- `let`

The *invalid assignment to const "x"* exception occurs when the user tries to change the value of a variable declared as *const*. This is because *const* variables can not be re-declared or re-assigned. Once declared, they can not be altered during program execution.

## Reproducing the error

```javascript
const num1 = 10;
...
...
...
num1 = 30;
```
On running the above code we get the following result.
```
TypeError: invalid assignment to const "num1" 
```
The use of *const* on a variable renders it to be read-only. This means that we can not change the value stored in the variable but we can surely mutate the properties in the variable. For example:

```
const my_obj = {graph: 'bar'};
my_obj = {graph: 'histogram'}; 
```
This would throw a *TypeError*. Alternatively, if we try to alter the object itself as shown below, instead of receiving an error we may get a warning stating that it expects an expression or function call. This can be ignored as it does not affect the execution of our program.
```
my_obj.graph = 'baz';
my_obj;
```
## Using `var` or `let`

`let` allows users to declare a variable only once but can be reassigned any number of times. Here is an example.
```
let x = 10;
x = 5;  
function func1()
{
let x = 20;
}
```
The variable x can be declared inside the function without any error as `let` is block-scoped.

`var` allows users to re-assign and re-declare variables any number of times.
```
var x = "Hello";
var x = 10;
function func1()
{
var x = 1;
}
```
*var* variables have global scope and due to this, re-declaring a variable inside a block will re-declare the variable outside the block. The final value of *x* from the above code is 1 even when prompted to print *x* from outside the function *func1()*.

## Scoping

`const` like `let` is block-scoped so, if we want to re-declare a *const* variable we may do so in a newly created function.
```
const x = 10;
function func1()
{
const x = 20;
}
```

## Rename

The last but obvious way to troubleshoot this error is by renaming the variable itself.
```
const x = 10;
const y = 20;
```

## Learn more

Search across open source JavaScript repositories that have the `TypeError` to understand the message more.

<SourcegraphSearch query="TypeError: invalid assignment to const "x"" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

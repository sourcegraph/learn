---
title: How to troubleshoot JavaScript SyntaxError missing } after function body
author: Oussama Salahouelhadj
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 07, 2021
description: Learn how to error handle JavaScript SyntaxError missing } after function body
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: SyntaxError missing } after function body in JavaScript error handling
type: posts
---

When encountering a `SyntaxError` in Javascript, That means the interpreter got to a point where it didn't understand the code, Or in other words, The token or part of the code that got the interpreter stuck did not look like valid syntax.

The `SyntaxError: missing } after function body` error is thrown by the JavaScript interpreter when it encounters a syntax error while creating a function. Most of the time, This is because the function's closing curly bracket, A block statement (conditional block for example) closing curly bracket or some curly brackets or parenthesis are missing or not in the correct order.

In this tutorial, We will help you figure out how to solve this problem.

## Reproducing the error

To demonstrate the error, Let us first reproduce it.
The following are two examples where the error can occur.

### 1. A function without a closing bracket:

let's take a look at this `coffee` function:

```javascript
function coffee(){
  /* Script that makes a cup of cappuccino
   without parameters. */

```

Observe that we did not close the function body with a curly bracket, And this is what is causing the error. The interpreter is extremely strict, It expects anything opening with curly brackets or parentheses to be closed.

As you can see in the example, It failed to find that closing bracket so it returns an error:

```
Uncaught SyntaxError: missing } after function body 4:0
note: { opened at line 1, column 16
```

### 2. A function with a closing bracket? hmm... really?

Consider the following example:

```javascript
function coffe(water){
    if(water.isHot){
        /* Make a cup of cappuccino
        if water is hot*/
}

```

output:

```
Uncaught SyntaxError: missing } after function body 6:0
note: { opened at line 1, column 27
```

You may be asking yourself "wait a minute, I swear I closed the curly bracket of that function, What is wrong with your interpreter?", Well, Let's not be too hard on that interpreter, He is simply doing his job.

The curly bracket at the end is considered as closing the `if(water.isHot)` conditional block. In other words, The interpreter uses the Last-In-First-Out (LIFO) technique; therefore, The last closed curly bracket in the example above closes the last opened curly bracket, Which is the conditional block statement, So we can write it this way:

```javascript
function coffe(water){
    if(water.isHot){
        /* Make a cup of cappuccino
        if water is got*/
    }
/* missing "}" here */
```

This is what causes the error.

## Make sure that block statements are closed

Fortunately, This error is pretty simple to fix, Plus, Javascript errors are easy to understand and helpful for debugging, So always try to read them for more information. In the error messages, You'll always see the line number where the error occurred, Like this one:

```
Uncaught SyntaxError: missing } after function body 4:0
note: { opened at line 1, column 16
```

See that the error message mentions the line where the error occurred (line 4). Try to parse your code from that line and figure out which curly bracket closes which, Or you can start from the first line of the function where the error occurred.

## First close, Then write code

A good tip that will help you avoid this kind of error when writing code is that when opening a block statement, Such as a function or some parentheses, Try always to open and close the body first, Then write your code inside it, So it should look similar to this:

```javascript
function coffee() {}
```

By doing so, You avoid forgetting or missing to close the brackets.

## Format code, Indentation

Formatting your code using indentation or spaces is another way to locate errors. By doing this you will be able to visualise the code better and find the error faster.

IDEs (code editors) have extensions that can help you do the formatting automatically. A good example of such an extension is [Prettier](https://prettier.io/). There is also an option like [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2), Which colourizes each pair of matching brackets with the same colour so you can identify them.

## Learn more

Read this official [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_function_body) about this error.

<SourcegraphSearch query="SyntaxError: missing } after function body" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

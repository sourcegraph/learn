---
title: How to troubleshoot JavaScript SyntaxError missing } after function body
author: oussama-salahouelhadj
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 07, 2021
description: Learn how to error handle JavaScript SyntaxError missing } after function body
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: SyntaxError missing } after function body in JavaScript error handling
type: posts
---

When encountering a `SyntaxError` in Javascript, the interpreter got to a point where it didn't understand the code. In other words, the token or part of the code that got the interpreter stuck did not look like valid syntax.

The `SyntaxError: missing } after function body` error is thrown by the JavaScript interpreter when it encounters a syntax error while creating a function. Most of the time, this is because the function's closing curly bracket (`}`), a block statement (conditional block for example) closing curly bracket or some curly brackets or parentheses are missing or not in the correct order.

In this tutorial, we will help you figure out how to solve this problem.

## Reproducing the error

To demonstrate the error, let us first reproduce it. The following are two examples where the error can occur.

Let's consider this `coffee` function:

```javascript
function coffee(){
  /* Script that makes a cup of cappuccino
   without parameters. */

```

Observe that we did not close the function body with a curly bracket; this is what is causing the error. The interpreter is extremely strict, so it expects anything opened with curly brackets or parentheses to be closed.

In the example, the interpreter failed to find the expected closing bracket so it returns an error:

```
Uncaught SyntaxError: missing } after function body 4:0
note: { opened at line 1, column 16
```

In a short program like the one above, it may appear clear that a curly bracket is missing, but as code increasing in complexity with many nested statements, it can be more difficult to find the error in your code prior to running it. 

Consider the following example:

```javascript
function coffe(water){
    if(water.isHot){
        /* Make a cup of cappuccino
        if water is hot*/
}

```

When you run the above, you'll receive the following output.

```
Uncaught SyntaxError: missing } after function body 6:0
note: { opened at line 1, column 27
```

The curly bracket at the end of our example program — that returned an error message — is considered to be closing the nested `if(water.isHot)` conditional block. The interpreter follows the **l**ast-**i**n-**f**irst-**o**ut (LIFO) order: the last closed curly bracket in the example above closes the last opened curly bracket, which is the conditional block statement. This version of the program makes the purpose of the single closed curly bracket clearer.

```javascript
function coffe(water){
    if(water.isHot){
        /* Make a cup of cappuccino
        if water is got*/
    }
/* missing "}" here */
```

This is what causes the error.

## Ensure that block statements are closed

JavaScript error messages tend to be helpful for debugging, so always try to read them for more information. In the error messages, you'll receive the line number where the error occurred in the output.

```
Uncaught SyntaxError: missing } after function body 4:0
note: { opened at line 1, column 16
```

In the example above, the line where the error occurred is line 4. Try to parse your code from that line and figure out which curly bracket closes which statement. Alternately, you can start debugging from the first line of the function where the error occurred.

## First close, then write code

A recommended practice that will help you avoid this kind of error when writing code is, when opening a block statement — such as a function or some parentheses — try to always open and close the body first, then write your code inside it. Using this approach, the sample code above would start out like the following.

```javascript
function coffee() {}
```

By taking this approacb, you can avoid forgetting or missing to close the brackets.

## Format code with indentation

Formatting your code using indentation or spaces is another way to locate errors. By doing this, you will be able to visualize the code better and find the error faster.

IDEs (code editors) have extensions that can help you do the formatting automatically. One example of such an extension is [Prettier](https://prettier.io/). There is also an option like [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2), which colorizes each pair of matching brackets with the same color so you can identify them and avoid errors.

## Learn more

Read this official [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_function_body) about this error.

<SourcegraphSearch query="SyntaxError: missing } after function body" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).
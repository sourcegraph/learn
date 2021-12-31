---
title: How to troubleshoot PHP syntax error unexpected end of file, expecting ';' or ','
authorSlug: tom-benevides
authorDisplayName: Tom Benevides
tags: [tutorial, PHP, troubleshooting]
publicationDate: October 15, 2021
description: Learn how to error handle PHP syntax error, unexpected end of file, expecting ';' or ','
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-9.png
imageAlt: Sourcegraph Learn
browserTitle: Syntax error, unexpected end of file, expecting ';' or ',' in PHP error handling
type: posts
---

When you are working with PHP, you may receive this message:

<Highlighter
input={`unexpected end of file, expecting ';' or ','`}
/>

This means that you haven't finished your command or haven't written it completely. Programming languages ​​like PHP use a specific character to define the end of a command (`;`), so they can understand what to run at what time. When you don't enter this character, the PHP interpreter thinks it's an unfinished command and throws an error.

## Reproducing the error

Let's consider this in practice. Assuming that you have PHP installed on your machine, write this little piece of code in a `hello.php` file:

<PrismSyntaxHighlighter
input={`<?php
 
echo 'Hello World'`}
language='php'
/>

Now, you can run the file on terminal in the same path of the file. 

<PrismSyntaxHighlighter
input='php hello.php'
language='bash'
/>

Then you'll receive the error on output:

<Highlighter
input='Parse error:  syntax error, unexpected end of file, expecting "," or ";" in /path/to/hello.php on line 4'
/>

Now that we reproduced the error, let's find out how to fix it.

## Finish the command with `;`

As we saw before, the PHP programming language uses some characters to define the end of a command or a concatenation of commands. So, in our `hello.php` file, add `;` at the end of the `echo` command:

<PrismSyntaxHighlighter
input={`<?php
 
echo 'Hello World';`}
language='php'
/>

If you run this file, the output of will now be `Hello World`. 

## When to use ","? 

You may have noticed that the error message suggests two characters that may have been missing in the code: `syntax error, unexpected end of file, expecting "," or ";"`. So, if we put a `;` at the end of the `echo` expression works, what happens when we put a `,`? Let's run this experiment by writing the program with a comma at the end of the expression.

<PrismSyntaxHighlighter
input={`<?php
 
echo 'Hello World',`}
language='php'
/>

Run the command with `php`.

<PrismSyntaxHighlighter
input='php hello.php'
language='bash'
/>

You'll now receive a new error message.

<Highlighter
input='Parse error:  syntax error, unexpected end of file in /path/to/hello.php on line 4'
/>

This experiment didn't work at all, but why? 

Because in PHP, the `,` character is used to concatenate expressions in the `echo` command. That's why the first error suggests `;` or `,` — because the interpreter doesn't know if you intended to write that code or concatenate it with more expressions

So, let's review a program that uses both characters (`,` and `;`):

<PrismSyntaxHighlighter
input={`<?php
 
$name = 'Sourcegraph';
 
echo 'Hello ', $name;`}
language='php'
/>

Run the program again.

<PrismSyntaxHighlighter
input='php hello.php'
language='bash'
/>

The output of the file execution will be the following.

<Highlighter
input='Hello Sourcegraph'
/>

You have now solved the error message and can be sure to end your expressions as needed. If you encounter this error again, check the end of your file. 

## Learn more

Search across open source PHP repositories that have this `SyntaxError` to understand the message more.

<SourcegraphSearch query="&quot;unexpected end of file, expecting ';' or ','&quot; lang:php" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [PHP](https://learn.sourcegraph.com/tags/php).
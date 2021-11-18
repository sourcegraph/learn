---
title: How to troubleshoot Java error class X is public should be declared in a file named X
authorSlug: grace-mcnerney
authorDisplayName: Grace McNerney
tags: [tutorial, Java, troubleshooting]
publicationDate: October 26, 2021
description: Learn how to error handle the Java error class X is public, should be declared in a file named X
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: error class X is public, should be declared in a file named X in Java error handling
type: posts
---

In Java, it is necessary that the names of the public classes match the file names. For example, if a file contains the public class `Main`, the file itself should also be named `Main.java`, or else it won’t compile. 

It’s also important to remember that Java is a “strongly typed” language, which means it’s case-sensitive. The compiler therefore recognizes `main` and `Main` as two different objects and will handle them as such. 

This tutorial will help you resolve the following error message.

<OutputHighlighter
input='error: class X is public, should be declared in a file named X.java'
/>

When encountering this error, it’s important to make sure not only that our public classes match those of their file names, but also that there are no spelling errors or unintended white spaces (as in `Main Activity` instead of `MainActivity`). We'll go through approaches to ensuring you can recover from this error quickly. 

## Reproducing the error

If we create a program called `Main.java` and write the following code inside of the program, we will encounter the `error: class X is public, should be declared in a file named “test”` message as output.

<PrismSyntaxHighlighter
input={`public class test {
    public static void main (String[] args) {
    //…
    }
}`}
language='java'
/>

Because we have called this file `Main.java` with a public class of `test`, it will not compile, because the file name and the public class name don’t match. 

## Change the file or class name

If the name of the public class and the file name don’t match, one of them must be renamed

In our example, either `Main.java` should be changed to `test.java`, or `public class test` must be renamed to `public class Main`. Your choice would likely depend on the full specifications of the program you are building. 

Remember to be consistent with capitalization and spelling, as the Java compiler will not recognize `main` and `Main`, or `test` and `Test` as the same objects. 

For example, saving the above example code as `test.java` would allow it to compile. 

<PrismSyntaxHighlighter
input={`public class test {
    public static void main (String[] args) {
    //…
    }
}`}
language='java'
/>

We can alternatively rename our file on the command line with the `cp` command, passing the data from the first file to a second file. 

<PrismSyntaxHighlighter
input='cp Main.java test.java'
language='bash'
/>

When we renaming the file or the class name we also need to remember to keep changes consistent throughout the rest of our program. 

## Case counts

Something else to note about the Java language is its practice of using “camelCase” or “PascalCase” in its naming conventions. It’s common for variables and methods to be named using camelCase (only the second word is capitalized), and class names and constructors to be typed using PascalCase (both words are capitalized). 

Because of this naming convention, it should be noted that the compiler will also recognize `Mainactivity.java` and `MainActivity.java` as two separate objects, so any use of capitalization should be noted and made consistent throughout the program. 

## Make a new file

There is also the possibility that if we are creating a program with multiple files, we can leave `Main.java` as our primary file, and create a new file (`test.java`) for our public class test. 

This allows the test class to be referenced from the main file, and will keep things better organized while also avoiding the compiler error. 

## Learn more

Search across open source Java repositories that have the `error: class X is public, should be declared in a file named X.java` to understand the message more.

<SourcegraphSearch query="error: class is public, should be declared in a file named .java lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).
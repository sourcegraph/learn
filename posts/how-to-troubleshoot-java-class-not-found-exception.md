---
title: How to troubleshoot Java ClassNotFoundException
author: cristian-vera
tags: [tutorial, Java, troubleshooting]
publicationDate: October 23, 2021
description: Learn how to error handle the Java ClassNotFoundException
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: ClassNotFoundException in Java error handling
type: posts
---

If you are working in Java, and receive the following output, your code is trying load a class but it does not find it in the classpath, which specifies the location of user-defined classes and packages to the Java compiler or Java virtual machine (JVM).

<Highlighter
input='java.lang.ClassNotFoundException: foo.Foo'
language='bash'
/>

This exception is thrown when your code tries to load a class through its string name using one of the following approaches.

- The `forName()` method in class `Class`.
- The `findSystemClass()` method in class `ClassLoader`.
- The `loadClass()` method in class `ClassLoader`.

However, no definition for the class with the specified name could be found when compiling or running the given program.

This may happen when you are programming something that has a dependency that you did not create yet as you are still working. This error message can be handled, however, so that you can continue to move forward with your work and compile and run code while your program isn't entirely finished yet.

In this tutorial, we'll reproduce the error and go through a few solutions so you can continue coding without being blocked by this error.

## Reproducing the error

To reproduce this error, let's create a program with a class called `Main` that tries to load the `Foo` class.

<Highlighter
input={`// main/Main.java
package main;
public class Main {
    public static final void main(String argv[]) {
        System.out.println("Loading foo.Foo class ");
        try{
            Class.forName("foo.Foo");
            System.out.println("foo.Foo loaded");
        } catch(Throwable ex) {
            ex.printStackTrace();
        }
    }
}`}
language='java'
/>

Compile and execute the Main class. We'll pass the `-cp` flag to Java to tell the JVM which class to use for the main thread and where to find relevant libraries.

<Highlighter
input={`javac main/Main.java
java -cp . main/Main`}
language='bash'
/>

Once we run these commands, we'll receive the following exception.

<Highlighter
input={`Loading Foo class
java.lang.ClassNotFoundException: foo.Foo
        at java.net.URLClassLoader.findClass(URLClassLoader.java:382)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:424)
        at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:349)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:357)
        at java.lang.Class.forName0(Native Method)
        at java.lang.Class.forName(Class.java:264)
        at main.Main.main(Main.java:7)`}
language='bash'
/>

Now that we have been able to reproduce the `ClassNotFoundException` error, let's go over possible solutions.

## Create the class that the compiler tried to load

From the output, we can understand that the exception is raised because we did not create the class `Foo` yet. One solution to avoiding this error is to create all relevant classes before attempting to compile and run our Java programs.

<Highlighter
input={`// foo/Foo.java
package foo;
public class Foo{}`}
language='java'
/>

Here, we have initialized the class without giving it any functionality, which can be useful to have a placeholder class while working on other parts of our software.

Now, let's compile the `Foo` class:

<Highlighter
input='javac foo/Foo.java'
language='bash'
/>

With the `Foo` class compiled, we can compile and execute the `Main` class again so that the JVM can find the `Foo` class we initialized.

<Highlighter
input={`javac main/Main
java -cp . main/Main`}
language='bash'
/>

Now `Main` will compile and run without any errors as it has loaded the `Foo` class.

<Highlighter
input={`Loading foo.Foo class
foo.Foo loaded`}
language='bash'
/>

At this point you have resolved the `ClassNotFoundException` and continue working on your program.

## Explicitly catch the exception

An alternate approach is to catch the error that JVM will throw with a `try` ... `catch` block.

In our example, we can modify our `Main` class to explicitly catch the `ClassNotFoundException` and print a message to warn the user to ensure that the class they are trying to load exists.

<Highlighter
input={`// main/Main.java
package main;
public class Main {
    public static final void main(String argv[]) {
        System.out.println("Loading bar.Foo class ");
        try{
            Class.forName("bar.Foo");
            System.out.println("bar.Foo loaded");
        } catch(ClassNotFoundException ex) {
            System.out.println("bar.Foo class not found. Please ensure that the class exists.");
        }
    }
}`}
language='java'
/>

In this case we modified the package name of the class to `bar` so that it is not found if you have previously created the class `foo.Foo`.

Now, compile and execute the Main class.

<Highlighter
input={`javac main/Main.java
java -cp . main.Main`}
language='bash'
/>

Because we have explictly caught the error message in our `try` ... `catch` logic, we will not run into errors that prevent the program from compiling and running. Instead, the user receives a helpful message so that they know they still need to create the `bar.Foo` class.

<Highlighter
input={`Loading bar.Foo class
bar.Foo class not found. Please ensure that the class exists.`}
language='bash'
/>

With `try` and `catch` statements we are able to recover quickly without exiting the program or preventing compiling. This enables us to continue working while we are still figuring out all the design decisions we want to make for our program.

## Learn more

Search across open source Java repositories that have the `ClassNotFoundException` to understand the message more and learn how others are working with the error.

<SourcegraphSearch query="ClassNotFoundException lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).

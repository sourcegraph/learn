---
title: How to troubleshoot Java ClassNotFoundException
author: Cristian Vera
tags: [tutorial, Java, troubleshooting]
publicationDate: October 21, 2021
description: Learn how to error handle the Java ClassNotFoundException
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: ClassNotFoundException in Java error handling
type: posts
---

If you are working in Java, and receive the following output, your code is trying load a class but it does not find it in the classpath.

```java
java.lang.ClassNotFoundException: foo.Foo
```

This exception is thrown when your code tries to load a class through its string name using:

- The `forName` method in class `Class`.
- The `findSystemClass` method in class `ClassLoader`.
- The `loadClass` method in class `ClassLoader`.

but no definition for the class with the specified name could be found.

## Reproducing the error

Let's create one class called `Main` who tries to load the `Foo` class:

```java
// main/Main.java
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
}
```

Compile and execute the Main class:

```bash
javac main/Main.java
java -cp . main/Main
```

And then we will get the exception:

```bash
Loading Foo class
java.lang.ClassNotFoundException: foo.Foo
        at java.net.URLClassLoader.findClass(URLClassLoader.java:382)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:424)
        at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:349)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:357)
        at java.lang.Class.forName0(Native Method)
        at java.lang.Class.forName(Class.java:264)
        at main.Main.main(Main.java:7)
```

Now that we have been able to reproduce the error, let's go over possible solutions.

## Create the class tried to load

As we can see the exception is raised because we did not create the class Foo yet. So let`s create it.

```java
// foo/Foo.java
package foo;

public class Foo{}
```

Compile the `Foo` class:

```bash
javac foo/Foo.java
```

And now we execute the `Main` class again:

```bash
java -cp . main/Main
```

Finally our class is right executed:

```bash
Loading foo.Foo class
foo.Foo loaded
```

## Catch explicitly the exception

We could modify our `Main` class to explicitly catch the `ClassNotFoundException` and print a message to warn to user to ensure that the class trying to loaded exists.

```java
// main/Main.java
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
}
```

In this case we modified the package name of the class to `bar` so that it is not found.
Compile an execute the Main class:

```bash
javac main/Main.java
java -cp . main.Main
```

And then our program is right executed:

```bash
Loading foo.Foo class
foo.Foo class not found. Please ensure that the class exists.
```

## Learn more

Search across open source Java repositories that have the `ClassNotFoundException` to understand the message more.

<SourcegraphSearch query="ClassNotFoundException lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).

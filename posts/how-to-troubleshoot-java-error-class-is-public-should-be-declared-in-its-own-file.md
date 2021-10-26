---
title: How to troubleshoot Java error: class X is public, should be declared in a file named X.java
author: Grace McNerney
tags: [tutorial, Java, troubleshooting]
publicationDate: today's date
description: Learn how to error handle the Java error: class X is public, should be declared in a file named X.java
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: error: class X is public, should be declared in a file named X.java in Java error handling
type: posts
---

In Java, it is necessary that the names of the public classes match the file names. For example, if a file contains the public class “Main,” the file itself should also be named “Main.java” or it won’t compile. It’s also important to remember that Java is a “strongly typed” language, which means it’s case-sensitive. The compiler recognizes “main” and “Main” as two different objects, and will handle them as such. When handling  an “error: class X is public, should be declared in a file named X.java” error, it’s important to make sure not only that our public classes match those of their file names, but also that there are no spelling errors or unintended white spaces (“Main Activity” instead of “MainActivity”).

## Reproducing the error

The following program “Main.java” should give us the “error: class X is public, should be declared in a file named “test” message:

```
public class test {
    public static void main (String[] args) {
    //…
    }
}
```
If we write this code within the file “Main.java,” it will not compile, because the file name and the public class name don’t match, so we will end up with a resulting `error: class X is public, should be declared in a file named X.java`. 

## Change the File or Class Name

If the name of the public class and the file name don’t match, one of them must be renamed (either “Main.java” should be changed to “test.java” or “public class test” must be renamed to “public class Main.” Remember to be consistent with capitalization and spelling, as the Java compiler will not recognize “main” and “Main” or “test” and “Test” as the same objects. 

For example, saving the above code as “test.java” would allow it to compile. I could also change it to:

```
public class test {
    public static void main (String[] args) {
    //…
    }
}
```

Which would also allow it to compile. Renaming the file or the class is fairly simple, as long as we also remember to keep changes consistent throughout the rest of our program. 

## CapitalizationCounts

Something else to note about the Java language is its practice of using “camelCase” or “PascalCase” in its naming schemes. It’s common for variables and methods to be named using camelCase (only the second word is capitalized) capitalization, and class names and constructors to be typed using PascalCase (both words are capitalized). Because of this naming convention, it should be noted that the compiler will also recognize “Mainactivity.java” and “MainActivity.java” as two separate objects, so any use of capitalization should be noted and made consistent throughout the program. 

## Make a New File

There is also the possibility that if we are creating a program with multiple files, we can leave “Main.java” as our primary file, and create a new file (“test.java”) for our public class test. This allows the test class to be referenced from the main file, and will keep things better organized while also avoiding the compiler error. 

## Learn more

Search across open source Java repositories that have the `error: class X is public, should be declared in a file named X.java` to understand the message more.

<SourcegraphSearch query="error: class is public, should be declared in a file named .java lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).
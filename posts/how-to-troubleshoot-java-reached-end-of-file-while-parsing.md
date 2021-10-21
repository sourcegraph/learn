---
title: How to troubleshoot Java error: reached end of file while parsing
author: M.L. Narayana Rao
tags: [tutorial, Java, troubleshooting]
publicationDate: Oct 20,2021
description: Learn how to handle the Java 
error: reached end of file while parsing
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: error: reached end of file while parsing in Java error handling
type: posts
---

Parsing is the process by which a compiler analyses the code for correct syntax and then converts it into the machine language. In java, "reached end of the file while parsing" is an error that occurs when a closing curly bracket is missing for a block of code.

The error appears as-
```java
Main.java:13: error: reached end of file while parsing
	}
	 ^
1 error
```

 OR

```java
java: reached end of file while parsing
```

The error is usually thrown at that line of the code where the compiler interprets the last part of the code.
## Reproducing the error

The different occasions in which this error can arise are as follows-

1.**Class or main( ) code block**

The compiler throws the error if a closing curly bracket of a   *class,main method or any other method* is missed while writing the code. 

The below blocks of code all result in this error..

```java
 class hello_world
{
	public static void main(String[] args) 
	{
		System.out.println("Hello World");
	}//this closes the main method
    //notice how a closing curly bracket "}" for the class is missing
```
In the above code, the class "hello_world" opens with a curly bracket but doesn't end with one, thus the "java: reached end of file while parsing" occurs. The same error occurs when the closing curly bracket is missed for the main() method.

In the following example, although the **world()** method has only the opening curly bracket, the compiler considers the nearest closing curly bracket to enclose the **world()** code block, and thus the class "**Main**" doesn't end with one.

```java
 class hello_readers
{
    public static void main(String[] args)
    {
        System.out.println(world());
    }
    static String world()
    {
        String greeting= "Hello Readers 👋";
    return greeting;
}
```
The error is encountered at line 11 as follows...
```java
hello_readers.java:11: error: reached end of file while parsing
}
 ^
1 error
```

2.**Loops and in a decision making code block**

The error is thrown by the compiler if a closing curly bracket in a   **loop**, or a decision-making block such as **if & if else** is missed while writing the code.

The code block below generates this error as the code in the **for-loop** is not properly enclosed within the curly brackets, and thus the nearest closing curly bracket is used to enclose the statements of the loop and this results in the "**reached end of file while parsing**" error.
```java
class hello_readers
{
    public static void main(String[] args) 
    {
        world();
    }
    static void world()
    {
        String greeting = "Hello Readers 👋";
        for(int i=0;i<10;i++)
        {
            System.out.println(greeting);
    }
}
```
The error-
```java
hello_readers.java:14: error: reached end of file while parsing
}
 ^
1 error
```
Similarly in an **if** (shown below) and **if-else** code structure this error is common, and can be produced as follows-

```java
class hello_readers
{
    String readers="good";
    public static void main(String[] args)
    {
        world();
    } // closes main method.
    static void world()
    {
        String greeting = "hello Readers 👋";
        if(readers.equals("good"))
         {
           for(int i=0;i<10;i++)
           {
              System.out.println(greeting);
           } // closes the for-loop
    }
}
```
The error-
```java
 hello_readers.java:18: error: reached end of file while parsing
}
 ^
1 error
```
## The Solution

To solve this error, checking for the opening-closing pairs of the curly brackets makes it easier to identify the error, and adding the closing bracket to the code removes the error as shown below.
```java
class hello_readers
{
    public static void main(String[] args)
    {
        System.out.println(world());
    }//closes the main method

    static String world()
    {
        String greeting = "Hello Readers👋";
        return greeting;
    } //closes the world() method
}//added the missing bracket here to close the class
```
The output-
```java
Hello Readers👋
```
It's important to remember that every opening bracket '{' requires a closing bracket '}'.

## Another solution

Another way to avoid this error is to use IDEs that autoformat the code. These IDEs will automatically input a closing bracket when you enter an opening one to finish the pair.



## Learn more

Search across open source Java repositories that have the `error: reached end of file while parsing` to understand the message more.

<SourcegraphSearch query="error: reached end of file while parsing lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).

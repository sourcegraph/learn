---
title: How to troubleshoot Java error reached end of file while parsing
authorSlug: ml-narayana-rao
authorDisplayName: M.L. Narayana Rao
tags: [tutorial, Java, troubleshooting]
publicationDate: October 22, 2021
description: Learn how to handle the Java error reached end of file while parsing
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: error reached end of file while parsing in Java error handling
type: posts
---

Parsing is the process by which a compiler analyses the code for correct syntax and then converts it into the machine language. In Java, `reached end of the file while parsing` is an error that occurs when a closing curly bracket is missing for a block of code.

The error may appear as the following.

<Highlighter
input='Main.java:13: error: reached end of file while parsing
    }
     ^
1 error'
/>

Or, the error may read as follows. 

<Highlighter
input='java: reached end of file while parsing'
/>

The error is usually thrown at the line of code where the compiler interprets the last part of the code.

## Reproducing the error

The different occasions in which this error can arise are as follows-

### Class or `main()` code block

The compiler throws the error if a closing curly bracket of a   *class,main method or any other method* is missed while writing the code. 

The below blocks of code all result in this error..

<PrismSyntaxHighlighter
input={`class HelloWorld
{
    public static void main(String[] args)
    {
        System.out.println("Hello World");
    } //this closes the main method
    //notice how a closing curly bracket "}" for the class is missing`}
language='java'
/>

In the above code, the class "`HelloWorld` opens with a curly bracket but doesn't end with one, thus the `java: reached end of file while parsing` error occurs. The same error would occur if the closing curly bracket is missed for the `main()` method.

In the following example, although the `world()` method has only the opening curly bracket, the compiler considers the nearest closing curly bracket to enclose the `world()` code block, and thus the main class doesn't end with a curly bracket.

<PrismSyntaxHighlighter
input={`class HelloReaders
{
    public static void main(String[] args)
    {
        System.out.println(world());
    }
    static String world()
    {
        String greeting = "Hello Readers";
    return greeting;
}`}
language='java'
/>

The error is encountered at line 11 as follows.

<Highlighter
input='HelloReaders.java:11: error: reached end of file while parsing
}
 ^
1 error'
/>

The error message provides us with a relevant line number where we can start to figure out a solution. 

### Loops and in a decision-making code block

The error is also thrown by the compiler if a closing curly bracket in a loop or a flow control decision-making block such as `if` and `if else` clauses. This can occur when a curly bracket is missed while writing code.

The code block below generates this error as the code in the `for` loop is not properly enclosed within the curly brackets, and thus the nearest closing curly bracket is used to enclose the statements of the loop and this results in the `reached end of file while parsing` error.

<PrismSyntaxHighlighter
input={`class HelloReaders
{
    public static void main(String[] args)
    {
        world();
    }
    static void world()
    {
        String greeting = "Hello Readers";
        for(int i=0;i<10;i++)
        {
            System.out.println(greeting);
    }
}`}
language='java'
/>

If you compile or run the program above, you'll receive the following error. 

<Highlighter
input='HelloReaders.java:14: error: reached end of file while parsing
}
 ^
1 error'
/>

Similarly, in an `if` (shown below) or `if else` code structure, this error is common and can be produced as follows.

<PrismSyntaxHighlighter
input={`class HelloReaders
{
    String readers="good";
    public static void main(String[] args)
    {
        world();
    } // closes main method
    static void world()
    {
        String greeting = "hello Readers";
        if(readers.equals("good"))
         {
           for(int i=0;i<10;i++)
           {
              System.out.println(greeting);
           } // closes the for-loop
    }
}`}
language='java'
/>

Here, you'll receive the same error message, with guidance that the error occurred at line 18 of the program.

## Enclose all relevant statements in curly brackets

To solve this error, check for the opening and closing pairs of the curly brackets in order to identify the error. One way to be sure that you are doing this is to always type the curly bracket pair prior to filling in the bracket. This way you can tell that you have properly closed all relevant statements before committing all of your code to the program.

Adding the closing bracket removes the errors we received above, as shown in the example below.

<PrismSyntaxHighlighter
input={`class HelloReaders
{
    public static void main(String[] args)
    {
        System.out.println(world());
    } //closes the main method
 
    static String world()
    {
        String greeting = "Hello Readers";
        return greeting;
    } //closes the world() method
} //added the missing bracket here to close the class`}
language='java'
/>

When you run and compile the above program, you'll receive the following expected output. 

<Highlighter
input='Hello Readers'
/>

It's important to remember that every opening bracket `{` requires a closing bracket `}`.

## Use IDEs to autoformat code

Another way to avoid this error is to use IDEs that autoformat the code. These IDEs will automatically input a closing bracket when you enter an opening one to finish the pair.

## Learn more

Search across open source Java repositories that have the `error: reached end of file while parsing` message to understand the message more and learn how others are testing the error. 

<SourcegraphSearch query="error: reached end of file while parsing lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).

---
title: How to troubleshoot Java StackOverflowError
authorSlug: yashesvinee-v
authorDisplayName: Yashesvinee V
tags: [tutorial, Java, troubleshooting]
publicationDate: October 16, 2021
description: Learn how to error handle the Java StackOverflowError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: StackOverflowError in Java error handling
type: posts
---

The `StackOverflowError` is one of the most common runtime errors one can encounter in Java. This error occurs when we haven’t provided the proper terminating condition to our recursive function that results in an infinite loop.

When we call a method, a new stack frame is created on the call stack. This stack frame holds parameters of the called method, mostly the local variables and the return address of the method. The creation of these stack frames is iterative. During this process, if the Java Virtual Machine (JVM) runs out of space for the new stack frames, it throws a `StackOverflowError`.

## Reproducing the error

In our example Java file, we’ll define a recursive method, called `recursion()` that prints an integer and then calls itself with the successive integer as its argument. 

<PrismSyntaxHighlighter
input={`public class Main {
     
    public static void recursion(int num) {
        System.out.println("Number: " + num);
         
        if(num == 0)
            return;
        else
            recursion(++num);
    }
     
    public static void main(String[] args) {
        Main.recursion(1);
    }
}`}
language='java'
/>

When we compile and run the program, it starts printing numbers starting from 1 on, and thus the recursion never terminates. Depending on the JVM, the results may differ, but eventually the `StackOverflowError` is thrown.

<OutputHighlighter
input='Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
...
Number: 5152
Number: 5153
Exception in thread "main" java.lang.StackOverflowError
    at java.base/java.io.Writer.write(Writer.java:249)
    at java.base/java.io.PrintStream.write(PrintStream.java:604)
    at java.base/java.io.PrintStream.print(PrintStream.java:745)
    at java.base/java.io.PrintStream.println(PrintStream.java:882)
    at Main.recursion(Main.java:4)
    at Main.recursion(Main.java:9)
    ...
    at Main.recursion(Main.java:9)'
/>

You may need to scroll through considerable output to find the error. 

A program that has cyclic relationships between classes is also another situation where the `StackOverflowError` commonly occurs. Here's an example:

<PrismSyntaxHighlighter
input={`public class A {
	public B type2;
	public A()
	{
		type2 = new B();    // Constructor of B is called hence object of A is created
	}
 
	public static void main(String[] args)
	{
			A type1 = new A();    // Cycle is started by invoking constructor of class A
	}
}
 
class B {
	public A type1;
	public B()
	{
		type1 = new A();    // Constructor of A is called hence object of A is created
	}
}`}
language='java'
/>

Once we compile and run the above program, we'll receive output similar to the following. 

<OutputHighlighter
input='...
Exception in thread "main" java.lang.StackOverflowError
	at B.<init>(A.java:18)
	at A.<init>(A.java:5)
	at B.<init>(A.java:18)
...'
/>

Cyclic relationships between classes is the result of two different classes instantiating each other inside their constructors. In the example, classes A and B instantiate each other in their contructors repeatedly until we get a `StackOverflowError`. 

Now, let's review the solution to prevent this error. 

## Add a terminating condition 

We must carefully inspect the stack, trace and detect the repetitive calls and try to introduce a proper terminating condition to ensure that the recursion terminates. We can avoid the error in the first example by adding a terminating condition.

<PrismSyntaxHighlighter
input={`public class Main {
  
    public static void recursion(int num) {
        System.out.println("Number: " + num);
         
        if(num == 0)
            return;
        if(num == 5)
            return;
        else
            recursion(++num);
    }
      
    public static void main(String[] args) {
        Main.recursion(1);
    }
}`}
language='java'
/>

This program will print the numbers from 1 to 5:

<OutputHighlighter
input='Number: 1
Number: 2
Number: 3
Number: 4
Number: 5'
/>

Your terminating condition should make sense for the program you are building. Thinking through what would stop a given loop will make your program more effective and help you avoid the `StackOverflowError`. 

## Avoid unnecessary constructor calls

In our second example of cyclic relationships, the error is mainly due to unecessary constructor calls, so work to avoid introducing them in your code.
Another way of resolving this is to specify one as the parent and the other as the dependent. We can construct class `A` as the parent class and make class B the child, as demonstrated in the rewrite of the program below.

<PrismSyntaxHighlighter
input={`public class A {
	public B type2;
	public A()
	{
		this.type2 = new B(this);  
        }  
	public static void main(String[] args)
	{
		A type1 = new A();    
        }
}
class B {
	public A type1;
	public B(A parent)
	{
		this.type1 = parent;    
        }
}`}
language='java'
/>

This solution prevents the recursive constructor calls and avoids the error.

## Increasing the stack size

If we expect we will need a lot of compute power ro tun our program, and anticipate a high number of loops or other ongoing processes, we can increase the stack’s size in order to allow a larger number of invocations. The default thread stack size may vary depending on the JVM installed. We can increase this stack size by using the `-Xss` flag.

The format of the `-Xss` argument is as follows. 

<PrismSyntaxHighlighter
input='-Xss<size>[g|G|m|M|k|K]'
language='bash'
/>

This introduces the flag, and expects the size of the stack to be in gigabytes, megabytes, or kilobytes. 

For example, the following command sets the default stack size to 10 megabytes. 

<PrismSyntaxHighlighter
input='java -Xss:10m myJavaApp.java'
language='bash'
/>

This argument needs to be passed when you start the application and can be specified either via the project’s configuration, or the command line. 

It is worth noting that computer memory is finite and it is generally recommended to focus on optimizing your program over increasing stack size unless you have a specific use case. 

## Learn more

Search across open source Java repositories that have the `StackOverflowError` to understand the message more and review it in context. 

<SourcegraphSearch query="StackOverflowError lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).

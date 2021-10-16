---
title: How to troubleshoot Java StackOverflowError
author: Yashesvinee
tags: [tutorial, Java, troubleshooting]
publicationDate: October 16, 2021
description: Learn how to error handle the Java StackOverflowError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: StackOverflowError in Java error handling
type: posts
---

The StackOverflowError is one of the most common runtime errors one can encounter in Java. This error occurs when we haven’t provided the proper terminating condition to our recursive function that results in an infinite loop.<br>
When we call a method, a new stack frame is created on the call stack. This stack frame holds parameters of the called method, mostly the local variables and the return address of the method. The creation of these stack frames is iterative. During this process, if JVM runs out of space for the new stack frames, it throws a StackOverflowError.

## Reproducing the error
``` java
public class Main {
     
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
}
```

Output:
```
Number: 1
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
    at Main.recursion(Main.java:9)
```  


In the example shown above, we define a recursive method, called recursion that prints an integer and then, calls itself with the successive integer as its argument. It starts printing numbers starting from 1 and thus, the recursion never terminates. Depending on the JVM, the results may differ, but eventually the StackOverflowError is thrown.<br>

Having cyclic relationships between classes is also another situation where the StackOverFlowError commonly occurs. Here's an example:


```java
public class A {
	public B type2;
	public A()
	{
		type2 = new B();    // Constructor of B is called hence object of A2 is created
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
}
```


Cyclic Relationships between classes is the result of two different classes instantiating each other inside their constructors. In the example, classes A and B instantiate each other in their contructors repeatedly until we get a StackOverFlowError. This error is mainly due to unecessary constructor calls, so we can just avoid introducing them in the codes.<br>
Now, let's see the solution to prevent this error. 

## Fix your Code
We must carefully inspect the stack, trace and detect the repititive calls and try to introduce a proper terminating condition to ensure that the recursion terminates. We can avoid the error in the first example by adding a terminating condition.


```java
public class Main {
     
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
}
```

This will print only the numbers from 1 to 5.

## Increasing the Stack Size

We can increase the stack’s size, in order to allow a larger number of invocations. The default thread stack size may vary depending on the JVM installed. We can increase this stack size by using the ```-Xss``` flag.<br>
The format of the ```-Xss``` argument is: 
```-Xss<size>[g|G|m|M|k|K]```<br>

This argument needs to be passed when you start the application and can be specified either via the project’s configuration, or the command line.

## Learn more

Search across open source Java repositories that have the `StackOverflowError` to understand the message more.

<SourcegraphSearch query="StackOverflowError lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).

---
title: How to troubleshoot Java OutOfMemoryError
authorSlug: grace-mcnerney
authorDisplayName: Grace McNerney
tags: [tutorial, Java, troubleshooting]
publicationDate: October 26, 2021
description: Learn how to error handle the Java OutOfMemoryError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: OutOfMemoryError in Java error handling
type: posts
---

The `OutOfMemoryError` is an error message in the Java language, and is thrown by the compiler when the heap is full. The heap is where objects reside within the JVM (Java virtual machine). You can run out of memory either because the heap size is insufficient for the size of the program, or there is at least one process causing a memory leak. Typically, a stack trace will be printed with the exception, along with an explanatory statement at the end of the `java.lang.OutOfMemoryError`, which will indicate why it is being thrown. Here is an example of the error: 

<OutputHighlighter
input='Exception in thread "main" java.lang.OutOfMemoryError: Java heap space'
/>

The explanatory note at the end of the error message noted "heap space" as the culprit. And as we mentioned, there could be a number of reasons for the error, so how do we accuractly pinpoint the source? 

## Reproducing the error

An example of a short program that could cause an error similar to the one above, could be similar to the following. 

<PrismSyntaxHighlighter
input={`import java.util.ArrayList;
import java.util.List;
 
public class test {
 
    public static void main(String[] args) {
 
            List<byte[]> list = new ArrayList<>();
                while (true) {
                    byte[] n = new byte[7777777];
                    list.add(n);
            }
 
    }
}`}
language='java'
/>

Now, the issue with this program is that we failed to give it an exit function, or something to tell it to stop adding bytes to the list after a certain amount of time. Therefore it will keep adding more and more until it eventually runs out of memory and causes the compiler to throw the `Exception in thread "main" java.lang.OutOfMemoryError: Java heap space` error message. 

## We're going to need a bigger heap

There are two possible methods of solving this. The first thing to do is to evaluate whether the right approach is making the heap bigger. If we decide that this is the appropriate next step, we can do this via a bash command in the command terminal:

<PrismSyntaxHighlighter input='java -Xmx1g -classpath ".:${THE_CLASSPATH}" ${PROGRAM_NAME}'
language='bash'
/>

Here, `1g` represents the amount of space we want to allocate to the heap, `1g` stands for 1GB. This amount is just an example, and can be modified to increase or decrease depending on individual cases. It’s important to remember, however, that it shouldn’t be greater than 75% of our device’s available storage.

If the cause is the heap size, like it was for our program, we may be able to increase the size of the heap on the command line with the following command: 

<PrismSyntaxHighlighter
input='java -Xmx2048m'
language='bash'
/>

The above command instructs the heap size to increase to 2048 MB (or 2GB) and is an example memory increase. We should check the current size of our heap using this command:

<PrismSyntaxHighlighter
input='java -XX:+PrintFlagsFinal -version | findstr /i "HeapSize"'
language='bash'
/>

It's important to note that the heap size can't exceed the capacity of our device's storage, so we need to keep those limitations in mind when attempting to increase our heap size. 

## Where's the leak?

But our example program doesn’t care about the size of the heap — it will keep adding integers to our list forever, and because we haven’t given it an exit function, it will hold onto the references interminably, so that the objects are never collected by the garbage collector. A logic error like this that continually fills up memory space is called a “memory leak.” Memory leaks can be difficult to diagnose in large and complex programs. Aside from manually digging through the code line-by-line to try to figure out the problem, it’s helpful to use a tool to automate the process.

Some IDEs have tools that allow users to monitor the lifetimes of objects added to and removed from the heap. The [Eclipse IDE](https://www.eclipse.org/downloads/packages/release/kepler/sr1/eclipse-ide-java-developers) is a very popular IDE for Java programmers, and has a tool called [Memory Analysis Tool (MAT)](https://www.eclipse.org/mat/) that is used to analyze heap dumps (snapshots) of objects currently residing in the heap. Heap dumps can be also be created and analyzed via another tool called Java VisualVM, which can be downloaded [from the VisualVM site](https://visualvm.github.io/). 

We can create a heap dump within the application window of VisualVM, then save the file locally. When examining the dump file, VisualVM provides the user with the option to view **Summary**, **Classes**, and **Instances** pages. **Summary** contains information such as the current running environment when the snapshot was taken.**Classes** contains a list of the classes and related subclasses within the program, as well as the number and percentage of references within the program to those classes. By selecting a class, we are able to get a detailed list of those instances that refer to that class. The **Instances** page provides detailed information regarding a selected instance, such as fields and references to particular classes, in addition to the nearest garbage collection root object.

You can review more details of how to use VisualVM to effectively troubleshoot memory issues by reading the official [VisualVM documentation](https://visualvm.github.io/documentation.html).

## Learn more

Although the `OutOfMemoryError` is fairly common, the good news is there are a number of ways to troubleshoot it successfully. You can read more [garbage collection basics with this tutorial from Oracle](https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html).

Search across open source Java repositories that have the `OutOfMemoryError` to understand the message more and learn how others have approached catching this error.

<SourcegraphSearch query="OutOfMemoryError lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).

---
title: How to troubleshoot Java OutOfMemoryError
author: grace-mcnerney
tags: [tutorial, Java, troubleshooting]
publicationDate: today's date
description: Learn how to error handle the Java OutOfMemoryError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: OutOfMemoryError in Java error handling
type: posts
---

The `OutOfMemoryError` is an error message in the Java language, and is thrown by the compiler when the heap is full. The heap is where objects reside within the JVM (Java virtual machine). You can run out of memory either because the heap size is insufficient for the size of the program, or there is at least one process causing a memory leak. Typically, a stack trace will be printed with the exception, along with an explanatory statement at the end of the `java.lang.OutOfMemoryError`, which will indicate why it is being thrown. Here is an example of the error: 

<Highlighter
input='Exception in thread "main" java.lang.OutOfMemoryError: Java heap space'
language='bash'
/>

The explanatory note at the end of the error message noted "heap space" as the culprit. And as we mentioned, there could be a number of reasons for the error, so how do we accuractly pinpoint the source? 

## Reproducing the error

An example of a short program that could cause an error similar to the one above, could be similar to the following. 

<Highlighter
input={`public class OutOfMemoryTest {

    public static void main(String[] args) {
        Integer[] newArray = new Integer[1000 * 1000 * 1000];
    }
}`}
language='java'
/>

The issue here is that we are trying to work with very large objects; they take up a lot of room, and the JVM doesn't have enough room to initialize an array of so many integers (certainly not `1^9` of them). Thus, it throws the `Exception in thread "main" java.lang.OutOfMemoryError: Java heap space` error message. 

## Monitoring garbage collection

First, it is a good idea to enable garbage collection (GC) monitoring, so that more precise diagnostics can be run when this type of error is thrown. GC monitoring provides logs of garbage collection activity by the JVM that we can view to determine what's going on with the objects on the heap. This will allow us to more accurately define the cause of the error so we can remedy it. 

## We're going to need a bigger heap

If the cause is the heap size, like it was for our program, we may be able to increase the size of the heap on the command line with the following command: 

<Highlighter
input='java -Xmx2048m'
language='bash'
/>

The above command instructs the heap size to increase to 2048 MB (or 2GB) and is an example memory increase. We should check the current size of our heap using this command:

<Highlighter
input='java -XX:+PrintFlagsFinal -version | findstr /i "HeapSize"'
language='bash'
/>

It's important to note that the heap size can't exceed the capacity of our device's storage, so we need to keep those limitations in mind when attempting to increase our heap size. 

## Finding the leak

If the issue is not with the heap size but a matter of our program causing what is known as _memory leaks_, this can be a little harder to fix. A memory leak is when a program continually consumes more and more memory space by creating more objects that it never releases to be collected in GC, so these objects end up sitting on the heap forever. This doesn't leave enough room for new objects.

In this case, there are a multitude of good performance evaluation tools to use that can help identify where in the program the issue is being caused. One of these is [VisualVM](https://visualvm.github.io/), which is part of the JDK package, and can be used in both development and production environments to monitor performance of a Java program. 

To use a tool like VisualVM to diagnose a memory leak issue, we must first perform what is called a "heap dump," which essentially causes the JVM to produce a record of all the "live" objects that currently reside on the heap. This can either be done manually through VisualVM's user interface, or set to trigger when an `OutOfMemoryError` occurs. For the latter, we can use the following command: 

``` java -XX:+HeapDumpOnOutOfMemoryError ``` 

This commandn instructs the machine to produce these logs the next time it throws an `OutOfMemoryError`, which can then be analyzed via VisualVM. 

## Learn more

Although the `OutOfMemoryError` is fairly common, the good news is there are a number of ways to troubleshoot it successfully. You can read more [garbage collection basics with this tutorial from Oracle](https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html).

Search across open source Java repositories that have the `OutOfMemoryError` to understand the message more and learn how others have approached catching this error.

<SourcegraphSearch query="OutOfMemoryError lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).

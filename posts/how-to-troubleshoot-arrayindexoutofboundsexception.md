---
title: How to troubleshoot Java ArrayIndexOutOfBoundsException
author: William Bezuidenhout
tags: [tutorial, Java, troubleshooting]
publicationDate: Oct 11, 2021
description: Learn how to error handle the Java ArrayIndexOutOfBoundsException
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: ArrayIndexOutOfBoundsException in Java error handling
type: posts
---

In Java to access an element in an array you an index that does not exist in the array, you'll get the following exception `ArrayIndexOutOfBoundsException`
```
```
Array's in Java are zero indexed, which means, the first position of an array is at index 0 and the last index is the length of the array minus one. So a valid index is any value between 0 and the length of the array. All other values will lead to a `ArrayIndexOutOfBoundsException`!

## Reproducing the error
Let's write a small program to see when the exception occurs
```
```
The program asks the user how many values from the number array should be printed and then prints that many values if the exist. The array is initialized with size of 7 and filled with random values. After the values have been generated, the user is the prompted to determine how many values we should print. If the user enters 0 and 7 (inclusive) then the correct of amount of values is printed out as per the output below

When the user enters unexpected values like -1 or 8, then they'll be able to reproduce the `ArrayIndexOutOfBoundsException` since those values lie outside the "boundaries" of our fixed size array!

## Solution 1

Provide a possible solution.

take the min between the max length of the array and the user value

## Solution 2

use flow control to check whether the value is less than or equal to the size of the array

## (optional) Solution 3

Optionally provide a third solution.

## Learn more

Search across open source Python repositories that have the `ArrayIndexOutOfBoundsException` to understand the message more.

<SourcegraphSearch query="ArrayIndexOutOfBoundsException lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).


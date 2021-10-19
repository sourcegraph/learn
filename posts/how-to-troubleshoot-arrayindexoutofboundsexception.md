---
title: How to troubleshoot Java ArrayIndexOutOfBoundsException
author: william-bezuidenhout
tags: [tutorial, Java, troubleshooting]
publicationDate: Oct 11, 2021
description: Learn how to error handle the Java ArrayIndexOutOfBoundsException
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: ArrayIndexOutOfBoundsException in Java error handling
type: posts
---

In Java, to access an element in an array you use an index. However, if that index does not exist in the array, you'll get the following exception.

<Highlighter
input={`Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 7 out of bounds for length 7`}
language='java'
/>

Arrays in Java are zero-based, which means the first position of an array is at index `0` and the last index is the length of the array minus one. So a valid index is any value between `0` and the length of the array. All other values will lead to an `ArrayIndexOutOfBoundsException`.

## Reproducing the error

Let's write a small program called `NumberPrinter.java` to understand when the exception occurs.

<Highlighter
input={`import java.util.Scanner;
   
public class NumberPrinter {
    public static void main(String[] args) {
        int numbers[] = new int[]{7,6,5,4,3,2,1};
   
        System.out.print(
            "There are " + numbers.length + 
            " numbers in the array. How many numbers should be printed ? "
            );
        Scanner scanner = new Scanner(System.in);
   
        int value = scanner.nextInt();
  
        for (int index = 0; index < value; index++) {
            System.out.println(
                "Index " + index +" has value "+ numbers[index]
                );
        }
        System.out.println(
            "Printed " + value + " numbers out of " + numbers.length
            );
    }
}`}
language='java'
/>
The program initializes the `numbers[]` array with 7 integers and then asks the user how many values from the array should be printed. 

If the user enters a valid number, then the program enters a `for` loop which will increase the index from 0 by one and print the number at that index until the index is larger than the user-provided number.

Below is the output of our program printing out all the numbers after we entered the value `7`. Notice that the index starts at 0 and ends at 6 (the length of the array minus one).

<Highlighter
input='There are 7 numbers in the array. How many numbers should be printed ? 7
Index 0 has value 7
Index 1 has value 6
Index 2 has value 5
Index 3 has value 4
Index 4 has value 3
Index 5 has value 2
Index 6 has value 1
Printed 7 numbers out of 7'
language='bash'
/>

If, instead, the user enters a value outside of the array, such as `8`, our program will print all the numbers up until it tries to print the number at index `7`. At this point, it will fail with `ArrayIndexArrayIndexOutOfBoundsException`.

<Highlighter
input={`There are 7 numbers in the array. How many numbers should be printed ? 8
Index 0 has value 7
Index 1 has value 6
Index 2 has value 5
Index 3 has value 4
Index 4 has value 3
Index 5 has value 2
Index 6 has value 1
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 7 out of bounds for length 7
	at NumberPrinter.main(NumberPrinter.java:13)`}
language='bash'
/>

Our program failed because the index `8` value is outside the "boundaries" of our `numbers[]` array. The boundary for our array restricts the value of the index according to the following criteria:

* The index value should be greater than or equal to `0`.
* The index value cannot be larger than the length of the array. In our example, the index value cannot be larger than `7`.

Regardless of the array type in Java, the index value must adhere to the above restrictions. 

Let's go over how we can ensure that the index value is always valid.

## Check that the user-provided value is within the array boundaries

By using flow control and `if`-`else` statements, we can check that the value provided by the user adheres to the index value criteria discussed above.

<Highlighter
input={`import java.util.Scanner;
   
public class NumberPrinter {
    public static void main(String[] args) {
        int numbers[] = new int[]{7, 6, 5, 4, 3, 2, 1};
   
        System.out.print(
            "There are " + numbers.length + 
            " numbers in the array. How many numbers should be printed ? "
            );
        Scanner scanner = new Scanner(System.in);
  
        int value = scanner.nextInt();
        if (value < 0) {
            System.out.println(
                "Only positive values are allowed!"
                );
            System.exit(1);
        } else if (value > numbers.length) {
            System.out.println(
                "The given value of " + value + 
                " is too large! Value has to be less than or equal to " + 
                numbers.length
                );
            System.exit(1);
        }
  
        for (int index = 0; index < value; index++) {
            System.out.println(
                "Index " + index + " has value " + 
                numbers[index]
                );
        }
        System.out.println(
            "Printed " + value + 
            " numbers out of " + numbers.length
            );
    }
}`}
language='java'
/>

In the code above, before we print the amount of values the user opted to be printed, we perform some validation. 

We first check that the value adheres to the first index value restriction, which is "The index value should be greater than or equal to 0". If the value doesn't adhere to this restriction, we print out a message telling the user that we only accept positive values.

If the value is positive, we then check that the value isn't too large by comparing the value to the length of the `numbers[]` array, since the second restriction states that "The index value cannot be larger than the length of the array." Once again, if the value doesn't adhere to this restriction, we print out an informative message to the user.

In the output below, we are given the result of a user entering the invalid values of first `-1` and then `8`.

<Highlighter
input='There are 7 numbers in the array. How many numbers should be printed ? -1
Only positive values are allowed!'
language='bash'
/>

<Highlighter
input='There are 7 numbers in the array. How many numbers should be printed ? 8
The given value of 8 is too large! Value has to be less than or equal to 7'
language='bash'
/>

These two user feedback strings are loaded into the `System.out.println()` methods within the `if` and `else if` statements, respectively. 

You could further iterate on this solution so that the program does not quit following the user inputting a value that is out of bounds by enclosing the program in a loop. 

## Pick the lowest value between the user value and the array size

We can take the solution above further to solve for these user-input concerns by translating all inputs to fit within our parameters.

First, we will use `Math.abs()`, which returns the absolute value of a given argument, to take care of the first restriction since it will force any value given by the user to always be positive.

With regard to the second restriction, if we say that when a user inputs a number that is larger than the length of our array, we can then take that to mean that the user wants all the numbers to be printed. We can accomplish that by taking the smallest value between the user given input and the length of the array.

Ultimately, we prefer the lower value, be it the user given value or the length of the array. In the program below this approach is implemented.

<Highlighter
input={`import java.util.Scanner;
  
public class NumberPrinter {
    public static void main(String[] args) {
        int numbers[] = new int[]{7,6,5,4,3,2,1};
  
        System.out.print(
            "There are " + numbers.length + 
            " numbers in the array. How many numbers should be printed ? "
            );
        Scanner scanner = new Scanner(System.in);
  
        int userVal = Math.abs(scanner.nextInt());
  
        int value = Math.min(userVal, numbers.length);
  
        for (int index = 0; index < value; index++) {
            System.out.println(numbers[index]);
        }
        System.out.println(
            "Printed " + value + " numbers out of " + 
            numbers.length
            );
    }
}`}
language='java'
/>

Below is the output of the above program for if a user enters the value of `999` or `-1`, respectively.

<Highlighter
input='There are 7 numbers in the array. How many numbers should be printed ? 999
Index 0 has value 7
Index 1 has value 6
Index 2 has value 5
Index 3 has value 4
Index 4 has value 3
Index 5 has value 2
Index 6 has value 1
Printed 7 numbers out of 7'
language='bash'
/>

<Highlighter
input='There are 7 numbers in the array. How many numbers should be printed ? -1
Index 0 has value 7
Printed 1 numbers out of 7'
language='bash'
/>

Now, whether the user gives the program negative numbers or large numbers outside of the array, it doesn't fail or throw `ArrayIndexOutOfBoundsException` since our program is resillient to invalid index numbers.

## Learn more

Search across open source Java repositories that have the `ArrayIndexOutOfBoundsException` to understand the message more. Through this search, you will uncover some ways that developers have caught this exception. 

<SourcegraphSearch query="ArrayIndexOutOfBoundsException lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).


---
title: How to troubleshoot Java error NegativeArraySizeException
authorSlug: ml-narayana-rao
authorDisplayName: M.L. Narayana Rao
tags: [tutorial, Java, troubleshooting]
publicationDate: November 12, 2021
description: Learn how to error handle the Java error NegativeArraySizeException
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: NegativeArraySizeException in Java error handling
type: posts
---

The Java `NegativeArraySizeException` is a runtime exception thrown by the compiler if the array size is initialized with a negative integer. As the input given while initializing the array size is an integer, a negative integer is also a valid input as the compiler only checks if the given input is an integer or not. The compiler throws this exception during the runtime as an array size cannot be less than zero. 

You may encounter the exception as follows.

<PrismSyntaxHighlighter
input={`Exception in thread "main" java.lang.NegativeArraySizeException: -2
at example.main(example.java:6) 
`}
language='bash'
/>

This error can arise either when the user inputs a negative integer for the array size or the array size is the result of a mathematical expression(or an arithmetic operation). Let’s consider both cases.

## Reproducing the error — user input

This error arises when the array length is initialized with a negative input by the user.

The following program accepts the size of an array and the array elements from the user and then returns a sorted array.

<PrismSyntaxHighlighter
input={`import java.util.Arrays;
import java.io.*; 
 
    class sorting
      {
        public static void main(String [] args) throws IOException
        {
          System.out.println(
            "The sorted array is " + Arrays.toString(
              input())
          );
        }
            static int[] input()throws IOException // A function to accept input from the user
              {
                BufferedReader br=new BufferedReader(
                  new InputStreamReader(System.in)
                );
                System.out.println("Enter the array size");
                int size=Integer.parseInt(
                  br.readLine()
                ); // Accepting the size of the array from the user
                int[] arr= new int[size];
                
                System.out.println(
                  "Now Enter the elements one by one that are to be sorted"
                );
                for(int i=0;i<size;i++)
                  { arr[i]=Integer.parseInt(br.readLine()); }
                Arrays.sort(arr);
              return arr;
              }
      }
 `}
language='java'
/>

This is a program that accepts an array from the user and will sort and output the array. Now, let's enter a negative input for the array size, this produces the **NegativeArraySizeException** as below.
 
 <PrismSyntaxHighlighter
input={`Enter the array size
-5
Exception in thread "main" java.lang.NegativeArraySizeException: -5
at sorting.input(sorting.java:14)
at sorting.main(sorting.java:7)`}
language='bash'
/>

This program has thrown an error due to input from the user not having been anticipated by the program. 

## Reproducing the error — arithmetic input

This error arises when the array size is initialized with an arithmetic result. Let's consider an example to understand.

We'll write a program to store the speeds of a body in the uniform intervals of 2M from the starting to the ending positions during its journey in either direction of `X` and `Y` axes.

<PrismSyntaxHighlighter
input={`import java.util.Arrays;
import java.io.*;
 
class speeds
{
    public static void main(String [] args) throws IOException
    {
    System.out.println(
      "The speeds in m/s are\n " + Arrays.toString(speed_input())
    );
    }
    static int[] speed_input()throws IOException // A function to accept input from the user
    {
      BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
      System.out.println("Enter the starting position and ending position");
      int start=Integer.parseInt(br.readLine()); // accepting the starting position
      int end=Integer.parseInt(br.readLine());  // and ending position from the user
    
      int size=((end-start)/2)+1;
        if((end-start)%2 !=0)  // If the input is an even-odd pair
            size++;
      int[] speed= new int[size];
      System.out.println("Now Enter the speeds in m/s one after the other ");
      for(int i=0;i<size;i++)
      { speed[i]=Integer.parseInt(br.readLine()); }
 
      return speed;
      } // closes speed_input method
}
`}
language='java'
/>

The compiler throws the `NegativeArraySizeException` when the input for either *start and end* or only *end* is negative. The negative input signifies that the body translated in the negative sense of the axis, so it is a valid input but the arithmetic for the size results in a negative integer too, thus the array length of ‘speed’ is initialized with the negative integer. This makes the compiler throw the error as indicated below.

<PrismSyntaxHighlighter
input={`Enter the starting position and ending position
-1
-7
Exception in thread "main" java.lang.NegativeArraySizeException:-2
at speeds.speed_input(speeds.java:19)
at speeds.main(speeds.java:7)`}
language='bash'
/>

It is worth noting that the above code logic can also result in an arithmetic error which is usually not thrown by the compiler for inputs with an absolute value difference of `5` (such as `(7, 2)` or `(-10, -5)`), because the array length is initialized with zero in such cases.

## Solution — use `Math.abs()`

The `Math` class of the `Java.lang` package contains the `abs()` method, which returns the absolute value of the input. Using the `abs()` function while initializing the array size eliminates this error as in the example below.

A user may only enter a negative input unknowingly, thus ignoring the sign while initializing the array size is a good way to troubleshoot this, for example.

To solve the first example via `abs()`, let's rewrite `sorting.java` to be the following.

<PrismSyntaxHighlighter
input={`import java.util.Arrays;
import java.io.*;
 
class sorting
{
    public static void main(String [] args) throws IOException
    {
        System.out.println(
          "The sorted array is " + Arrays.toString(input())
        );
    }
        static int[] input()throws IOException // Accepts input from user
        {
            BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Enter the array size");
            int size=Math.abs( Integer.parseInt(br.readLine()) ); // Accepts size of the array from user
            int[] arr= new int[size];
              
            System.out.println("Now Enter the elements one by one that are to be sorted");
            for(int i=0;i<size;i++)
                { arr[i]=Integer.parseInt(br.readLine()); }
            Arrays.sort(arr);
        return arr;
        }
    }
`}
language='java'
/>

Here, by using `Math.abs()`, if the user enters a negative number for the size of the array, it is converted to a positive one and the array is initialized with the absolute value of that number.

Now, if we test the above program with a negative number for the array length, we get a valid output.

<PrismSyntaxHighlighter
input={`Enter the array size
-5
Now Enter the elements one by one that are to be sorted
-100
0
55000
45
2
The sorted array is[-100, 0, 2, 45, 55000]
`}
language='bash'
/>

For the second example, `speeds.java`, we will be using the `abs()` function in the arithmetic expression in order to troubleshoot this error.

<PrismSyntaxHighlighter
input={`import java.util.Arrays;
import java.io.*;
 
class speeds
{
    public static void main(String [] args) throws IOException
    {
    System.out.println("The speeds in m/s are\n" + Arrays.toString(speed_input()));
    }
 
    static int[] speed_input()throws IOException // Function to accept input from the user
    {
        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter the starting position and ending position");
        int start=Integer.parseInt(br.readLine()); // Accepts the starting position
        int end=Integer.parseInt(br.readLine());  // and ending position from the user
 
        int size=(Math.abs(end-start)/2)+1;
            if((end-start)%2 !=0)  // Checks if the input is an even-odd pair
                size++;
        int[] speed= new int[size];
        System.out.println("Now Enter the speeds in m/s one after the other");
        for(int i=0;i<size;i++)
            { speed[i]=Integer.parseInt(br.readLine()); }
      
        return speed;
    } // closes speed_input() method
}
`}
language='java'
/>

Here, we have converted the start and end positions to their absolute values in order to handle a negative number input from the user. 

<PrismSyntaxHighlighter
input={`Enter the starting position and ending position
-1
-7
Now Enter the speeds in m/s one after the other
0
20
40
80
The speeds in m/s are
[0, 20, 40, 80]
`}
language='bash'
/>

This user entered a starting position of `-1`, which was converted to `1`, and an ending position of `-7` which was converted to `7`, thus resolving the issue in the previous version of this code.

## Solution — use `try`-`catch` block

Using a `try` and `catch` block for the user input is often the recommended way to handle many exceptions such as the `NegativeArraySizeException`. This logic allows the program to continue to run depsite encountering errors.

<PrismSyntaxHighlighter
input={`import java.util.Arrays;
import java.io.*;
 
class sorting
{
    public static void main(String [] args) throws IOException
    {
        try {
            System.out.println("The sorted array is " + Arrays.toString(input()));
        } 
        catch (NegativeArraySizeException e)
        {
            System.out.println("Array size cannot be negative, please try again");
            System.out.println("The sorted array is " + Arrays.toString(input()));
        }
    }
        static int[] input()throws IOException //A function to accept input from the user
        {
            BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Enter the array size");
            int size=Integer.parseInt(br.readLine()); //Accepting the size of the array from the user
            int[] arr= new int[size];
            
            System.out.println("Now, enter the elements one by one that are to be sorted");
            for(int i=0;i<size;i++)
                { arr[i]=Integer.parseInt(br.readLine()); }
            Arrays.sort(arr);
        return arr;
        }
  }
`}
language='java'
/>

The `catch` block we have above states gives the guidance to the user that the `Array size cannot be negative` and that they should please try again. Below is the output when the user attempts to enter `-5` for the size of the array.

input={`Enter the array size
-5
Array size cannot be negative, please try again
Enter the array size
5
Now, enter the elements one by one that are to be sorted
-100
0
55000
45
2
The sorted array is [-100, 0, 2, 45, 55000]
`}
language='bash'
/>

The compiler terminates the execution of the code when it encounters the `NegativeArraySizeException` in the `try` block at line 8 and executes the `catch` block which will print a message to the user and continue execution by taking the input again.

This solution can be further developed to have a loop in case the user enters a negative number for the array size more than once.

## Learn more

Search across open source Java repositories that have the `NegativeArraySizeException` to understand the message more. Many developers use `try` and `catch` blocks in order to handle the error.

<SourcegraphSearch query="NegativeArraySizeException lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).

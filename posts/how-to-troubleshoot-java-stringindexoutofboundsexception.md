---
title: How to troubleshoot Java StringIndexOutOfBoundsException
author: william-bezuidenhout
tags: [tutorial, Java, troubleshooting]
publicationDate: October 6, 2021
description: Learn how to error handle the Java StringIndexOutOfBoundsException
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: StringIndexOutOfBoundsException in Java error handling
type: posts
---

In Java, whenever you try to get a character from a string and you specify a character index that is not within the string, you will get the following exception.

<Highlighter
input='Exception in thread "main" java.lang.StringIndexOutOfBoundsException: String index out of range:'
language='shell'
/>

A String in Java is an array of characters and each character can be accessed by an index using the `.charAt()` method. When we use the `.charAt()` method and specify an index that does not exist in the underlying array of characters, Java will raise the above exception.

## Reproducing the error
Let's write the following Java program `ShowChar.java`.

<Highlighter
input={`import java.util.Scanner;   
    
public class ShowChar {   
   
    public static void main(String[] args) {
        String word = "sourcegraph";
        Scanner scanner = new Scanner(System.in);   
   
        System.out.println("The word is: '" + word + "'");
        System.out.print("show character at index? ");   
  
        int index = scanner.nextInt();     
    
        System.out.println(word + " has '" + word.charAt(index) + "' at index " + index);   
    }    
}`}
language='java'
/>

The program displays the word `sourcegraph` and allows the user to call a character at a given index that they input. Once an index has been given, the character at that index is displayed.

If the user enters `5` as the index, they won't encounter the `StringIndexOutOfBoundsException` as per the following output.

<Highlighter
input={`The word is: 'sourcegraph'
show character at index? 5
sourcegraph has 'e' at index 5`}
language='shell'
/>

The length of the word `sourcegraph` is 11, which means there are 11 characters in the string.

A string consists of an array of characters and at each index is a character. Arrays in Java are zero indexed, which means the first index and consequently the first character in a string is at index 0 and the last character is at index 10. So if a user were to enter an index value larger than 10 or less than 0, like 12, they would be able to repoduce the `StringIndexOutOfBboundsException`.

<Highlighter
input='Exception in thread "main" java.lang.StringIndexOutOfBoundsException: String index out of range: 12
	at java.base/java.lang.StringLatin1.charAt(StringLatin1.java:47)
	at java.base/java.lang.String.charAt(String.java:693)
	at ShowChar.main(ShowChar.java:14)'
language='shell'
/>

Now that we've been able to reproduce the error, let's go over possible solutions.

## Provide the user with the expected minimum and maximum values of an index

By using flow control and `if`-`else` statements, we can check that the index lies within the string. If the index does not lie within the string we can tell the user the minimum and maximum values we're expecting.

<Highlighter
input={`import java.util.Scanner;
   
public class ShowChar {
     
    public static void main(String[] args) {
        String word = "sourcegraph";
        Scanner scanner = new Scanner(System.in);  
   
        System.out.println("The word is '" + word + "' and has " + word.length() + " characters");
        System.out.print("Show character at index? ");  
   
        int index = scanner.nextInt();   
   
        int min = 0;
        int max = word.length() - 1;
        if (index >= min && index <= max) {
            char wordChar = word.charAt(index);
            System.out.println(word + " has the character '" + wordChar + "' at index " + index);
        } else {
            System.out.println("The given index " + index + " is incorrect.");
            System.out.println("The index can have a minimum value of 0 and a maximum value of " + max);
        }   
   
    }
}`}
language='java'
/>

In the above program, we get the index value from the user and then we check that the index is greater than or equal to our minimum (0) and less than or equal to our maximum (11). We subtract 1 from the word length since arrays are zero indexed, so the first position is at 0 and last index is at 10.

If the user gives us an index value that is not within our minimum and maximum range, we print a message informing them what the minimum and maximum values are as indicated in the output below.

<Highlighter
input={`The word is 'sourcegraph' and has 11 characters
Show character at position? -1
The given index -1 is incorrect.
The index can have a minimum value of 0 and a maximum value of 10`}
language='shell'
/>

Here we have handled the exception through providing feedback to the user via flow control.

## Use the absolute value and mod operator

We can use the modulus operator `%` to ensure the given index is always within our minimum and maximum range.

If we mod the given index with the length of the word, we can ensure that a given index is within the word. For example, say the index is 12 and the length of the word is 11 ex. `12 mod 11 = 1` the index is 1.

We can also ensure that the given index is always positive by taking the absolute value of the index using `Math.abs`.

<Highlighter
input={`import java.util.Scanner;  
  
public class ShowChar {  
  
    public static void main(String[] args) {
        String word = "sourcegraph";
        Scanner scanner = new Scanner(System.in);  
  
        System.out.println("The word is '" + word + "' and has " + word.length() + " characters");
        System.out.print("Show character at index? ");   
  
        int value = scanner.nextInt();
        int max = word.length();
        value = Math.abs(value);  
  
        int index = value % max;
        char wordChar = word.charAt(index);
        System.out.println(word + " has the character '" + wordChar + "' at index " + index);
  
    }
}`}
language='java'
/>

The above program is able to handle positive and negative values for the given index. We ensure the given value is positive with `Math.abs`. The modulus operator is used to ensure that the value is less than our maximum. 

<Highlighter
input={`The word is 'sourcegraph' and has 11 characters
Show character at index? 12
sourcegraph has the character 'o' at index 1
   
The word is 'sourcegraph' and has 11 characters
Show character at index? -1
sourcegraph has the character 'o' at index 1`}
language='shell'
/>

As per the output above, an index larger than our maximum is wrapped around, which happens because `12 % 11` is `1`.

## Learn more

Search across open source Java repositories that have the `StringIndexOutOfBoundsException` to understand the message more.

<SourcegraphSearch query="StringIndexOutOfBoundsException lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).

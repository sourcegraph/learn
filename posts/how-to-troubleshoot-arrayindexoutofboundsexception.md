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

In Java to access an element in an array you use an index, if that index does not exist in the array, you'll get the following exception.
```
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 7 out of bounds for length 7
```
Arrays in Java are zero indexed, which means, the first position of an array is at index `0` and the last index is the length of the array minus one. So a valid index is any value between `0` and the length of the array. All other values will lead to a `ArrayIndexOutOfBoundsException`!

## Reproducing the error
Let's write a small program to see when the exception occurs
```
import java.util.Scanner;

public class NumberPrinter {
    public static void main(String[] args) {
        int numbers[] = new int[]{7,6,5,4,3,2,1};

        System.out.print("There are " + numbers.length + " numbers in the array. How many numbers should be printed ? ");
        Scanner scanner = new Scanner(System.in);

        int value = scanner.nextInt();

        for (int index = 0; index < value; index++) {
            System.out.println("Index " + index +" has value "+ numbers[index]);
        }
        System.out.println("Printed " + value + " numbers out of " + numbers.length);
    }
```
The program initializes the numbers array with `7` numbers and then asks the user how many values from the number array should be printed. If the user enters a valid number, then the program enters a for-loop which will increase the index from 0 by one and print the number at that index until the index is larger than the user given number.

Below is the output of our program printing out all the numbers after we entered the value `7`. Notice that the index starts a 0 and ends at 6 (the length of the array minus one).
```
There are 7 numbers in the array. How many numbers should be printed ? 7
Index 0 has value 7
Index 1 has value 6
Index 2 has value 5
Index 3 has value 4
Index 4 has value 3
Index 5 has value 2
Index 6 has value 1
Printed 7 numbers out of 7
```

When we enter a value 8, which is larger than our number array, out program will print all the numbers but when it tries to print the number at index `7`, it will fail with `ArrayIndexArrayIndexOutOfBoundsException`.
```
There are 7 numbers in the array. How many numbers should be printed ? 8
Index 0 has value 7
Index 1 has value 6
Index 2 has value 5
Index 3 has value 4
Index 4 has value 3
Index 5 has value 2
Index 6 has value 1
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 7 out of bounds for length 7
	at NumberPrinter.main(NumberPrinter.java:13)
```
Our program failed since the index `7` value is outside the "boundaries" of our numbers array! The boundary for our number array restricts the value of the index according to the following criteria:
* The index value should be greater than or equal to `0`.
* The index value cannot be larger than the length of the array. In our example, the index value cannot be larger than `7`.

Regardless of the array type in Java, the index value must adhere to the above restrictions. Let's take a look how we can ensure that the index value is always valid.

## Ensure the user provided value is within the array boundaries
By using flow control and `if-else` statements we can check that the value provided by the user adheres to the index value criteria discussed above.
```
import java.util.Scanner;

public class NumberPrinter {
    public static void main(String[] args) {
        int numbers[] = new int[]{7, 6, 5, 4, 3, 2, 1};

        System.out.print("There are " + numbers.length + " numbers in the array. How many numbers should be printed ? ");
        Scanner scanner = new Scanner(System.in);

        int value = scanner.nextInt();
        if (value < 0) {
            System.out.println("Only positive values are allowed!");
            System.exit(1);
        } else if (value > numbers.length) {
            System.out.println("The given value " + value + " is too large! Value has to be less than or equal to " + numbers.length);
            System.exit(1);
        }

        for (int index = 0; index < value; index++) {
            System.out.println("Index " + index + " has value " + numbers[index]);
        }
        System.out.println("Printed " + value + " numbers out of " + numbers.length);
    }
}
```
In the code above, before we print the amount of values the user opted to be printed, we perform some validation. We first check that the value adheres to the first index value restriction, which is "The index value should be greater than or equal to `0`". If the value doesn't adhere to this restriction we print out a message telling the user that we only accept positive values.

If the value is positive, we then check that the value isn't too large by comparing the value to the length of the numbers array, since the second restriction states that "The index value cannot be larger than the length of the array". Once again, if the value doesn't adhere to this restriction, we print out a informative message to the user.

In the output below, we can see the result of a user entering the invalid values `-1` and `8`.
```
There are 7 numbers in the array. How many numbers should be printed ? -1
Only positive values are allowed!
---
There are 7 numbers in the array. How many numbers should be printed ? 8
The given value 8 is too large! Value has to be less than or equal to 7
```

## Pick the lowest value between the user value and the array size
By using `Math.abs` we can take care of the first restriction since it will force any value given by the user to always be positive.

With regard to the second restriction, if we say that when a user puts in a number that is larger than the length of our array, then we can take that to mean that the user wants all the numbers to be printed. We can accomplish that by taking taking the smallest value between the user given input and the length of the array.

Ultimately, we prefer the lower value, be it the user given value or the length of the array. In the program below this approach is implemented.
```
import java.util.Scanner;

public class NumberPrinter {
    public static void main(String[] args) {
        int numbers[] = new int[]{7,6,5,4,3,2,1};

        System.out.print("There are " + numbers.length + " numbers in the array. How many numbers should be printed ? ");
        Scanner scanner = new Scanner(System.in);

        int userVal = Math.abs(scanner.nextInt());

        int value = Math.min(userVal, numbers.length);

        for (int index = 0; index < value; index++) {
            System.out.println(numbers[index]);
        }
        System.out.println("Printed " + value + " numbers out of " + numbers.length);
    }
}
```
Below is the output of the above program.We can see that whether we give the program negative numbers or even large numbers it doesn't fail or throw `ArrayIndexOutOfBoundsException` since our program is resillient to invalid index numbers.
```
There are 7 numbers in the array. How many numbers should be printed ? 999
Index 0 has value 7
Index 1 has value 6
Index 2 has value 5
Index 3 has value 4
Index 4 has value 3
Index 5 has value 2
Index 6 has value 1
Printed 7 numbers out of 7
There are 7 numbers in the array. How many numbers should be printed ? -1
Index 0 has value 7
Printed 1 numbers out of 7
```

## Learn more

Search across open source Python repositories that have the `ArrayIndexOutOfBoundsException` to understand the message more.

<SourcegraphSearch query="ArrayIndexOutOfBoundsException lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).


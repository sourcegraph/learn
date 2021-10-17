---
title: How to troubleshoot Java NullPointerException
author: William Bezuidenhout
tags: [tutorial, Java, troubleshooting]
publicationDate: today's date
description: Learn how to error handle the Java NullPointerException
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: NullPointerException in Java error handling
type: posts
---

NullPointerException (NPE) is quite a common and dreaded exception that you'll often encounter in Java when you try to use an object whose reference is `null`. That is to say, the reference does not point (pointer) to an actual object but points to nothing ie. `null`.

## Reproducing the error
Below is a program which will recreate a NullPointerException.
```
import java.time.Year;

public class Program {
    public static class Company {
        public final String name;
        public final int yearFounded;

        public Company(String name, int year) {
            this.name = name;
            this.yearFounded = year;
        }

        public int yearsInBusiness() {
            return Year.now().getValue() - this.yearFounded;
        }
    }

    public static void main(String[] args) {
        Company c1 = new Company("Sourcegraph", 2013);
        Company c2 = new Company("Personal", 2000);
        Company companies[] = new Company[]{c1, c2};

        for (int i = 0; i < companies.length; i++) {
            System.out.println(companies[i].name + " has been in business for " + companies[i].yearsInBusiness() + " years.");
        }
    }
}
```
When we execute the above program, we will encounter a NullPointerException in our `for` loop, once the loop tries to print how long the **second** (c2) company has been in for it fails and prints the exception below.
```
Sourcegraph has been in business for 8 years.
Exception in thread "main" java.lang.NullPointerException
	at Program.main(Program.java:26)
```
We can see that our `companies` array is made up of two companies `c1` and `c2`. When the `for` loop starts, it prints out information about he first company and then progresses to the next company, c2. Unfortunately, `c2` has a `null` value so when we try to access anything that we expect an company object to have like a `name` we'll encounter a NullPointerException since `c2` does not point to _anything_.

## Solution 1
We can make our `for` loop a little bit more robust by informing the user that a company whose value is `null` is not valid, otherwise, we print our usual statement. We can do this through the use of flow control by adding an `if-else` statement to our `for` loop.
```
import java.time.Year;

public class Program {
    public static class Company {
        public final String name;
        public final int yearFounded;

        public Company(String name, int year) {
            this.name = name;
            this.yearFounded = year;
        }

        public int yearsInBusiness() {
            return Year.now().getValue() - this.yearFounded;
        }
    }

    public static void main(String[] args) {
        Company c1 = new Company("Sourcegraph", 2013);
        Company c2 = null;
        Company companies[] = new Company[]{c1, c2};

        for (int i = 0; i < companies.length; i++) {
            if (companies[i] == null) {
                System.out.println("Company at index " + i + " is null. Cannot print any information on null company");
            } else {
                System.out.println(companies[i].name + " has been in business for " + companies[i].yearsInBusiness() + " years.");
            }
        }
    }
```
In the output below we can see that when our program executes, it prints out a message to the user when it reaches a company whose value is `null` instead of throwing a `NullPointerException`.
```
Sourcegraph has been in business for 8 years.
Company at index 1 is null. Cannot print any information on null company
```

## Solution 2
We can also avoid the NullPointerException by ensuring that all the values that we use in our program are initialized.
```
import java.time.Year;

public class Program {
    public static class Company {
        public final String name;
        public final int yearFounded;

        public Company(String name, int year) {
            this.name = name;
            this.yearFounded = year;
        }

        public int yearsInBusiness() {
            return Year.now().getValue() - this.yearFounded;
        }
    }

    public static void main(String[] args) {
        Company c1 = new Company("Sourcegraph", 2013);
        Company c2 = new Company("Y2K!", 2000);
        Company companies[] = new Company[]{c1, c2};

        for (int i = 0; i < companies.length; i++) {
                System.out.println(companies[i].name + " has been in business for " + companies[i].yearsInBusiness() + " years.");
        }
    }
}

```
In our earlier programs, our second company `c2` had a `null` value, but in our above program, we initialize `c2` to a proper company object. With all our values in our program being initialized, we don't encounter the NullPointerException anymore as can be seen in the output below.
```
Sourcegraph has been in business for 8 years.
Y2K! has been in business for 21 years.
```
## Learn more

Search across open source Java repositories that have the `NullPointerException` to understand the message more.

<SourcegraphSearch query="NullPointerException lang:java" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Java](https://learn.sourcegraph.com/tags/java).


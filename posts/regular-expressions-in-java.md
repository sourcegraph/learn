---
title: Regular expressions in Java
authorSlug: grace-mcnerney
authorDisplayName: Grace McNerney
tags: [java, regex, tutorial]
publicationDate: December 23, 2021
description: Create an email validation program in Java with regular expressions
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-10.png
imageAlt: Sourcegraph Learn
browserTitle: Java Regex
type: posts
---

Regular expressions — also called “regexp” or “regex” — are a series of unicode and/or ASCII characters that are grouped together in such a way as to represent a search pattern for a program to find a matching sequence. Use cases can include searching for a string in a program or removing whitespaces, or something more complex like an email or password validation program. Regex is also commonly used for web crawlers and scrapers.

At first glance, a regular expression can appear similar to Ancient Hieroglyphics. An example regex sequence might be something like this: `^(.+)@(.+)$` . But what does this mean? Let’s break it down a bit:

* `^` — this character designates the beginning of the string.
* `(.+)` — this particular grouping represents the idea of any single character. The placement of this group on either side of the `@` symbol means that the program will look for any single character on either side of the `@` for a match.
* `@` — this tells the program to look for an `@` in the email address.
* `$` — this designates the end of the string.

All together, this expression represents a basic pattern against which the program will look for a match wherein an `@` symbol can be found with a single character on either side, representative of an email address. This simple example has some logic issues to it, and it’s not suitable or safe to be used in a production environment. So, how _would_ we write a stronger email validation program? 

## Set up

We’ll be using a language framework into which we’ll plug our regular expressions. For this tutorial, we’re using Java. Java regex is used fairly frequently for email and password validation programs. 

The Java language doesn’t have a built-in class for regular expressions, but importing the `java.util.regex` package will allow us to create the interface and classes necessary for writing a program that uses regular expressions. Those classes are:

* `Pattern` — this class creates the static `compile()` methods used to create and return `Pattern` objects.
* `Matcher` — this class creates the `matcher()` method which matches the pattern created by the “Pattern” class to a given string. Neither this class nor the “Pattern” class provide public constructors. 
* `PatternSyntaxException` — this class is used to define a syntax error within the regex pattern.
* `MatchResult Interface` — this interface produces the results of the pattern matching. 

Now that we know what package to import, we can start working to create our program. 

First, we’ll need to import our packages, as mentioned earlier. For this tutorial, we’ll use “Scanner,” “Pattern,” and “Matcher.” From there, we will add some boilerplate to add our name, the date, and the title of our program. Then, we’ll initialize the `Main` class. 

<PrismSyntaxHighlighter
input={`package com.company;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
 
// author: 
// date: 
// title: Java Regex for Email Validation
 
public class Main {
    public static void main(String[] args) {
 
        System.out.println("Please enter a valid email address: ");
        Scanner sc = new Scanner(System.in);
        String email = sc.nextLine();
        // now that we've told the program to save user input as an "email" String object, 
        // we can add our regex pattern
    }
}`}
language='java'
/>

In our `Main` class, we are providing output to guide the user to enter an email address. Then we are having Java take in user input from the next line, and assigning that input to the `email` string. 

With this initialized, we will move onto setting up the regular expression to validate emails.
## Adding `Pattern` and `Matcher`
Next, we’ll need to enter our regex pattern with the `Pattern` class. The regex we’re using for email validation is the [RFC 5322 “General Email Regex” Official Standard](https://www.ietf.org/rfc/rfc5322.txt). We’ll copy it here, as it’s fairly long:

<Highlighter
input='^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$'
/>

This statement can be overwhelming if you don’t have much experience with regular expressions. You can review the “[Email Validation Summary](https://emailregex.com/email-validation-summary/)” from _Almost Perfect Email Regex_ to learn more. 

Now, we’ll add this statement into our `Pattern` method, and tell the `Matcher` method to match our `email` object to that pattern. We’ll be building off the program we started above, working within the `Main` class.

<PrismSyntaxHighlighter
input={`...
public class Main {
    public static void main(String[] args) {
 
        System.out.println("Please enter a valid email address: ");
        Scanner sc = new Scanner(System.in);
        String email = sc.nextLine();
        Pattern pattern = Pattern.compile("^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$", Pattern.CASE_INSENSITIVE);
        // now we'll tell the matcher method to match the email object to the regex pattern
        Matcher matcher = pattern.matcher(email);
    }
}`}
language='java'
/>

It’s important to include the `Pattern.CASE_INSENSITIVE` qualifier at the end so the Java compiler knows not to enforce case. 

Finally, we want some feedback so we know our program is doing what we expect. We’ll add an `if`-`else` statement to let us know if our email object is a valid match or not. 

<PrismSyntaxHighlighter
input={`...
        // now we'll tell the matcher method to match the email object to the regex pattern
        Matcher matcher = pattern.matcher(email);
        // now we'll ask the program to let us know if the input is a valid match or not
        if (matcher.matches()) {
            System.out.println("Email is valid.");
        } else {
            System.out.println("Email is invalid.");
        }
    }
}`}
language='java'
/>

This conditional statement will let us check that our email regex program is working as expected; if no `@` is present with characters on either side, then we will not expect the program to tell us the input entered is a valid email.

## Validating the program

Now we’ll run our program, `Main.java`, and confirm that it works! 

Once you run the program with the `java Main.java` command, you’ll receive the following output.

<Highlighter
input='Please enter a valid email address: '
/>

Let’s enter `me@me.com` as the email address, or your own personal email address.

<PrismSyntaxHighlighter
input='Please enter a valid email address:
me@me.com
Email is valid.'  
language='bash'
matcher='me@me.com'
/>

By running the above, we receive the feedback that `me@me.com` is a valid match against the regex pattern we established. Let’s try something else.

<PrismSyntaxHighlighter
input='Please enter a valid email address:
abcdef
Email is invalid..'  
language='bash'
matcher='abcdef'
/>

As expected, `abcdef` is not a valid match against our email regex pattern, so the program reported back to us that it’s invalid!

## Cheat sheet

While it’s a good idea to learn regex thoroughly, it’s never a bad thing to have some notes to refer back to. Here are some commonly used symbols to get started:

| Symbol | Meaning                               |
|-----------|----------------------------------|
| `.`          | Anything (wildcard)            |
| `\`          | Escape character                  |
| `^`         | Beginning of an expression |
| `$`         | End of an expression           | 
| `|`          | _or_                                     |
| `[...]`     | A class delimiter                 |
| `\s`       | Add whitespace                    |


Things to remember:

* The expression should begin with the `^` symbol and end with the `$` symbol.
* The “escape” character — `\` — is used for characters with multiple meanings in order to include the literal meaning of the character when desired.
* Quantifiers only apply to a single character unless otherwise specified by parentheses to determine scope.

A more complete list of characters can be found at the [Regular Expression Language Quick Reference](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference) from Microsoft Docs.

## Conclusion and resources

At first, regex can be a little intimidating. When it is broken down into its composite pieces, however, it becomes possible to consume and understand. A positive aspect of regular expressions is that the syntax doesn’t change between languages; only the way the expressions are brought into programs may change based on the programming language you’re using, whether it’s Perl, .NET, JavaScript, C#, Ruby, or others.

To dive deeper into regular expressions, freeCodeCamp has a full [regex course](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/), with [videos available on YouTube](https://www.youtube.com/watch?v=ZfQFUJhPqMM). 


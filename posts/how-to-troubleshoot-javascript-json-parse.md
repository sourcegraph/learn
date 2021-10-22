---
title: How to troubleshoot JavaScript SyntaxError JSON.parse
author: william-bezuidenhout
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: October 22, 2021
description: Learn how to error handle JavaScript SyntaxError JSON.parse
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: SyntaxError JSON.parse in JavaScript error handling
type: posts
---

JSON (JavaScript Object Notation) is a convenient text format that allows us to describe objects and transfer data. Per its name, it has its origins in JavaScript, but various programming languages have methods which parse JSON strings into objects. 

In JavaScript, we use the method `JSON.parse` to parse JSON text into an object. If the JSON text given to the method is invalid, the method will throw a `SyntaxError: JSON.parse` error, as in the output below.

<Highlighter
input={`SyntaxError: Unexpected token = in JSON at position 8
    at JSON.parse (<anonymous>)
    at printInfo (/home/user/programming/javascript/test.js:2:17)
    at Object.<anonymous> (/home/user/programming/javascript/test.js:5:14)
    at Module._compile (node:internal/modules/cjs/loader:1095:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1124:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:816:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)
    at node:internal/main/run_main_module:17:47`}
language='javascript'
/>

There are a multitude of reasons on why `JSON.parse` can fail with `SyntaxError` but ultimately, it means the JSON you're trying to parse is invalid. 

In the example above there is a reason provided for why `JSON.parse` failed. The reason states that the `JSON.parse` method encountered an unexpected `=` character at position 8. If, for instance, we gave `JSON.parse` an empty string, the `SyntaxError` reason would be `Unexpected end of JSON input`.

## Reproducing the error

`JSON.parse` expects valid JSON, and will throw `SyntaxError` as soon as it encounters any character which does not make the given text valid JSON. 

Let's write a small JavaScript program that parses some JSON and prints out the value of the name property from the parsed JSON object.

<Highlighter
input='function printInfo(text) {
    let person = JSON.parse(text);
    console.log(`${person.name} lives in ${person.country}`);
}
let person = "{ "name" = "William", "country" = "South Africa" }";
printInfo(person);'
language='javascript'
/>

Our program tries to parse the JSON text `'{ "name" = "William", "country" = "South Africa" }'` and print the name value of the resulting object parsed from the JSON. Unfortunately, our program fails and exits with `SyntaxError`.

<Highlighter
input={`Uncaught SyntaxError: JSON.parse: expected ':' after property name in object at line 1 column 10 of the JSON data`}
language='bash'
/>

The JSON we are trying to parse is invalid JSON since keys and values should be separated by `:` characters and not with `=` characters, hence the reason our method encounters the `SyntaxError` above.

## Catch the error

Since we know there is a possibility that `JSON.parse` can throw an error, we can catch the error and check whether it is an instance of Syntax Error and notify the user about the invalid JSON. Otherwise, if the error is something we do not expect, we can also let the user know we encountered an unexpected error. 

Below, our program has been updated to do just this.

<Highlighter
input='function printInfo(text) {
    try {
        let person = JSON.parse(text);
        console.log(`${person.name} lives in ${person.country}`);
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log(`The text "${text}" is not valid JSON.`);
        } else {
            console.log(`Unexpected error: ${error}`);
        }
    }
}
let person = "{ "name" = "William", "country" = "South Africa" }";
printInfo(person);'
language='javascript'
/>

When we run our program now, we get the following output as soon as the `printInfo()` function encounters `SyntaxError` due to malformed JSON.

<Highlighter
input={`The text "{ "name" = "William", "country" = "South Africa" }" is not valid JSON.`}
language='bash'
/>

In this example, we have caught the error and alerted our user of this issue.

## Fix the JSON

Depending on where the JSON is malformed, the `SyntaxError` will tell you what character caused it to fail. In our example above, the reason was `Unexpected token = in JSON at position 8`, which means we need to fix the character `=` at position 8 of our JSON text.

We can use this guidance to fix the JSON where the error occurred.

<Highlighter
input='function printInfo(text) {
    let person = JSON.parse(text);
    console.log(`${person.name} lives in ${person.country}`);
}
let person = "{ "name" : "William", "country": "South Africa" }";
printInfo(person);'
language='javascript'
/>

In our program above we fixed the JSON by changing the `=` character to a `:` character and now we're able to use `JSON.parse` to parse the given text! Below is the output of our program after we have parsed the JSON. 

<Highlighter
input='William lives in South Africa'
language='bash'
/>

With this fix in the JSON syntax, we're able to access the name property of the JSON object.

## Learn more

Search across open source JavaScript repositories that have the `SyntaxError` to understand the message more, review different versions of the error, and learn how others have recovered from the error.

<SourcegraphSearch query="SyntaxError: JSON.parse" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

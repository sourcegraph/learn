---
title: How to troubleshoot JavaScript SyntaxError JSON.parse
author: William Bezuidenhout
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: 17 October, 2021
description: Learn how to error handle JavaScript SyntaxError JSON.parse
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: SyntaxError JSON.parse in JavaScript error handling
type: posts
---

Whenever you try to parse some text in Javascript as JSON using `JSON.parse` and the JSON is malformed, you'll get a variation of the following error.
```
SyntaxError: Unexpected token = in JSON at position 8
    at JSON.parse (<anonymous>)
    at json_to_person_obj (/home/william/programming/javascript/test.js:2:17)
    at Object.<anonymous> (/home/william/programming/javascript/test.js:5:14)
    at Module._compile (node:internal/modules/cjs/loader:1095:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1124:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:816:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)
    at node:internal/main/run_main_module:17:47
```
There are a multitude of reasons on why `JSON.parse` will fail with `SyntaxError` but ultimately, it means the JSON you're trying to parse is invalid. In our example, we can see that `JSON.parse` encountered an unexpected `=` character at position 8. If for instance we gave `JSON.parse` an empty string, the `SyntaxError` reason would be `Unexpected end of JSON input`.

## Reproducing the error
`JSON.parse` naturally expects valid JSON, and will throw an `SyntaxError` as soon as it encounters any character which does not make the given text valid JSON. In the program below, we have a small function that calls `JSON.parse` for any text given to it
```
function printName(text) {
    let person = JSON.parse(text);
    console.log(`The name of the person is: ${person.name}`);
}

let person = '{ "name" = "William" }';
printName(person);
```
We call `printName` with the following text `'{ "name" = "William"}'`. The text is invalid JSON since properties and values should be separated by a `:` not by a `=`, hence our `SyntaxError` reason above.

## Catch the error
We can catch the SyntaxError in our method and print out that the given text is not valid JSON.
```
function printName(text) {
    try {
        let person = JSON.parse(text);
        console.log(`The name of the person is: ${person.name}`);
    } catch (error) {
        console.log(`The text "${text}" is not valid JSON.`);
    }
}

let person = '{ "name" = "William" }';
printName(person);
```
When we run the above program we get the following output as soon as `jsonToObject` encounters a `SyntaxError` due to malformed JSON.
```
The text "{ "name" = "William" }" is not valid JSON.
```
## Fix the JSON
`SyntaxError` depending on where the JSON is malformed, the error will tell you what character caused it to fail. In our example above, the reason was `Unexpected token = in JSON at position 8`, which means we need to fix the character `=` which appears at position 8.
```
function printName(text) {
    let person = JSON.parse(text);
    console.log(`The name of the person is: ${person.name}`);
}

let person = '{ "name" : "William" }';
printName(person);
```
In our program above we fixed the JSON by changing the `=` character to a `:` character and now we're able to use `JSON.parse` to parse the given text! Below is the output of our program after we have parsed the JSON and we're able to access the name property of the JSON object.

```
The name of the person is: William
```

## Learn more

Search across open source JavaScript repositories that have the `SyntaxError` to understand the message more.

<SourcegraphSearch query="SyntaxError: JSON.parse" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).

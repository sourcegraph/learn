---
title: Introduction to types in TypeScript
authorSlug: arash-afghahi
authorDisplayName: Arash Afghahi
tags: [tutorial, TypeScript, environment]
publicationDate: November 18, 2021
description: In this tutorial, we will introduce types in TypeScript
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-12.png
imageAlt: Sourcegraph Learn
alternateTitle: Initialize a TypeScript development environment
type: posts
---
 
Unlike many programming languages, JavaScript is a loosely typed language. That means that you do not have to declare what the properties of a variable are before using it. Furthermore, you can pass any type of data to a function or component that you wish. This feature makes JavaScript incredibly flexible. 

However, it also means that there is no built-in mechanism for when you pass in the wrong variable type into a function. For example, we may have a function in JavaScript that only works if you pass in an array, but the function would in no way indicate this and would not send you an error if you were to pass in a type that was not an array — like a string or integer — into the function. The only way you would know that there was an issue would be upon running the function, at which point you would see an error.  

Many programmers prefer to use TypeScript (TS) for its access to strong typing, which requires you to define what a variable’s or function’s properties are. Specifically, it gives you the ability to explicitly use any of JavaScript’s built-in basic types and to also create your own. Due to having enforced typing, TypeScript also has a transpiler which shows you compile errors when you have syntax errors. In this article, we are going to go through what the basic data TypeScript types are and then use them in some examples. 

## Overview of types

Let’s start by answering the question, what is a _type_? 

A _type_ essentially means any property or function that helps define what a value or variable is. This has quite a range of meaning: it could be from what functions an object has or it could mean what data type a variable is. However, we can broadly generalize all of the types into three broad categories. These three types are: **Any**, **Built-In** types, and **User-Defined** types. Let’s go through each of these categories.

**Any** — This type is the super for all data types. By super, we mean that it is the data type from which all other data types derive their meaning. Like its name, if you designate a variable as `any` then you are saying that all data types are allowed to be passed into it. By doing this, you’re essentially opting out of using a type structure. You could think of using `any` as a form of dynamic typing, meaning that its data structure is defined at runtime. 

**Built-In** types — These are the basic data types that TypeScript provides you with. The basic data types include `boolean`, string, number, `undefined`, `null`, and `void`. If you’ve worked with JavaScript before, then these should be familiar to you. The only one that might be new is numbers, and it is worth noting that the term _numbers_ is used for both integers and floats. In fact, TypeScript has no built-in type for either integer or float. 

**User-Defined** types — These include Arrays, Tuples, Enumerations, and objects. We will spend more time on these in a later article, but for now we can define a user-defined type as one that is derived from or uses a basic data type. These are used to extend data types or to make a custom data type. 

Now that we have defined what a type is, let’s write some examples using the basic data types.

## Setting up the first component 

To begin using data types in practice, let’s return to the project that we started in the [previous article](https://learn.sourcegraph.com/how-to-set-up-a-typescript-programming-environment). We are building a life tracker for the game Magic the Gathering, using React Native and TypeScript. In the previous article, we created the repository, installed TypeScript, and set up the environment. If you would like to pull down this state of the project, you can [clone this branch on GitHub](https://github.com/sourcegraph-community/LifeCounter/tree/installingTypescript).

In this article, we are going to be creating the first component, which will be the Player component. 

We’ll create a `src/components` directory path within the root directory and will be working within a file called `Player.tsx`.

Within this file, we need to import what we need and instantiate the component.

<Highlighter
input={`import React from 'react';
import {View, Text } from ‘react-native’;
 
const Player = () => {
 
    return(
        <View>
        <TextInput />
        </View>
    )
}
 
export default Player
 `}
language='javascript'
/>

Currently, this component is basically empty. We have no other components so we cannot feed it any variables, and all that it is currently returning is an empty `View` that has a `TextInput` component in it. These are two components that React Native creates for us: `View` is the backbone of all React Native apps, it maps to whatever viewing platform your is currently running on; `TextInput` allows you to input text into an app via a keyboard. You can learn more about the [`View` component](https://reactnative.dev/docs/view) or [`TextInput` component](https://reactnative.dev/docs/textinput) from the React Native docs. 

## Adding the first type

Let’s flesh out this component. One of the functionalities that we want our app to have is to have players’ names displayed underneath their life total. To achieve this, we need to import `useState` from React. This will let us create and change the component’s name. Our first import statement will change to reflect this.

<Highlighter
input={`import React, { useState } from 'react';`}
language='javascript'
/>

Now, we can create a name that we can manipulate in the component’s state. 

<Highlighter
input={`...
const Player = () => {
    const [name, setName] = useState('player1')
 
    return(
        <View>
            <TextInput/>
        </View>
    )
}`}
language='javascript'
/>

This new addition is saying that we have a `name`, that we can change it with `setName`, and lastly that the default value of that name should be `player1`. 

Currently, this is pure JavaScript, with no TypeScript added. Using our definitions above, this is the `Any` data type, meaning that when we set the name of the player it can be anything ranging from an object or array or a number. That’s not ideal, because we really want the name to only be a string value. We can use TypeScript to solve this by rewriting the above constant and specifying the string type.

<Highlighter
input={`...
const Player = () => {
    const [name, setName] = useState<string>('player1')
 
    return(
        <View>
            <TextInput
                onChangeText={setName}
                value={name}
            />
        </View>
    )
}`}
language='javascript'
/>

_Ta-da_, we just used our first type! Here, we are declaring that the `name` variable always has to be a string. If we were to input a different data type into this variable, we would get a nice loud transpiler error. You can play around with this component in [this sandbox](https://codesandbox.io/s/boring-fermi-xbxgg?file=/src/App.tsx). 

You’ll notice that the sandbox code includes styling, allowing users to recognize the text input more clearly.

## Transpiler errors

Using the above example, if we wanted to use the `setName` function with anything other than a string, the built-in TypeScript transpiler would give us a loud error; if you are using any responsive IDE then you would receive an error in your file with a type error on the component that is passing in the wrong data type. Furthermore, if you start a local server it will not render until you have resolved this issue. 

For example, instead of having `onChange` inline, let’s say that we wanted to create an `onChange` function. We could change the function to reflect the following.

<Highlighter
input={`...
const Player = () => {
    const [name, setName] = useState<string>('player1')
 
    const onChange = (value: string) => {
        setName(value)
    }
 
    return(
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(value:number) => onChange(value)}
                value={name}
            />
        </View>
    )
}`}
language='javascript'
/>

In the `onChangeText`, we are designating value as a number, but in the `onChange` function above it, we are designating value as a string. This will give us the following error message:

<Highlighter
input={`Argument of type 'number' is not assignable to parameter of type 'string'.`}
language='bash'
/>

If we run `npm start` and build a local server, on compilation it would also fail at this point and both our local port and our terminal would give us this exact same error. 

That’s great! We want our compiler to be telling us when we are trying to instantiate a function incorrectly. 

Now, this error was completely manufactured to showcase what the transpiler is doing, and normally you do not see a TypeScript error that is contained within a single component like this. Where TypeScript shines is when you start passing props between components in a larger React program. In vanilla JavaScript there is no way to tell what value a prop needs to be, but this issue is handled by TypeScript. As we flesh out our LifeCounter, we will see more of this in action. 

## Multiple types

So far, we have been working with only one declared type for each variable or function. This covers a fair amount of ground, but there are many times when a variable can have multiple basic types. The most common instance of this is if we have a variable that is sometimes null or undefined. Our `name` component could fall into this category if we do not give it a value until the user writes in their desired name. To account for this we would change the component to be as follows.

<Highlighter
input={`...
const Player = () => {
    const [name, setName] = useState<string | undefined>();
 
    return(
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder={'your name here'}
            />
        </View>
    )
 }
 `}
language='javascript'
/>

If you want to play around with this component more, feel free to use [this code sandbox](https://codesandbox.io/s/basic-types-otx3c?file=/src/App.tsx).

Essentially, what we are saying here is that `name` can be either a string, or it can be undefined. As long as it is either of these values, the component will render correctly. We could reuse this structure with any of the basic data types. For example, if you have an ID that could either be a string or an integer value we could account for that in a similar manner. You could also add any amount of data types to this designation, though it is recommended to keep it under three as, at that point, you could consider using the any data type. 

## Learn more

We now have a fundamental understanding of types, but this is just scratching the surface of how types work in TypeScript. In the next article we are going to look more deeply into user-defined types and the flexibility that they allow us. 

You can review the [final version of the `Player.tsx` file](https://github.com/sourcegraph-community/LifeCounter/blob/basicTypescriptTypes/src/components/Player.tsx) on the branch corresponding to this tutorial on our LifeCounter repository on GitHub.

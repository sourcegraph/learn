---
title: How to set up a TypeScript programming environment
authorSlug: arash-afghahi
authorDisplayName: Arash Afghahi
tags: [tutorial, TypeScript, environment]
publicationDate: November 15, 2021
description: In this tutorial, we will install TypeScript into a specific project
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-11.png
imageAlt: Sourcegraph Learn
browserTitle: Initialize a TypeScript development environment
type: posts
---
 
TypeScript, also referred to as TS, is a strongly typed superset of JavaScript, which means that it has all the functionality of the latter with the added benefit of static types. It was developed at Microsoft with the express intention of enhancing the Node.js development environment, and as such it is compatible with all JavaScript libraries. In addition to giving the option for static typing, TypeScript also has a [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler), or source-to-source compiler, that creates compile errors if there are any syntax errors. 

One of the benefits of TypeScript is that it is a version of JavaScript, and thus it works with and is installable in any environment that relies on Node.js. In this tutorial, we are going to be going through what you need to get started with TypeScript and how to set it up in a specific project, which is a recommended practice to avoid creating dependency issues.

## Prerequisites

TypeScript requires a Node.js development environment. There are many different ways of installing Node.js, all of them can be found on the official [Node.js docs](https://nodejs.org/en/). If you’re new to Node.js, then it is highly recommended that you download the newest LTS version. Installing Node.Js is crucial because we are going to make extensive use of Node’s package manager, npm, throughout this tutorial. 

If you are not sure if you have Node.js installed, you can open your terminal and type the following.

<Highlighter
input='npm -v'
language='javascript'
/>

This command checks the version of npm that is installed on your machine. If you have it previously installed you should receive output similar to the following.

<Highlighter
input='8.0.0'
language='javascript'
/>

If nothing comes up, that means that you don’t have Node.js and need to [install it](https://nodejs.org/en/). 

Lastly, if you’re using an IDE (**i**ntegrated **d**evelopment **e**nvironment), make sure that it has TypeScript enabled. All modern IDEs will include TypeScript support by default, but if you receive errors during the installation process it may be worth checking that your particular IDE can use TypeScript. For the purposes of this guide, we are going to be using [Visual Studio Code](https://code.visualstudio.com/) as our IDE. 

## Step 1 — Initializing your project

For this tutorial, we are going to begin working on a project that tracks a player’s life total in a game of [Magic](https://magic.wizards.com/en). We will be using [React Native](https://en.wikipedia.org/wiki/React_Native) for this small frontend app. Because it is frontend-only, we won’t be saving any of the user’s data to a database, and thus we won’t need a backend. 

To initialize this project, we are going to be using the React Native documentation that can be found at the official [React Native docs](https://reactnative.dev/docs/environment-setup). We are going to use [Expo CLI](https://docs.expo.dev/workflow/expo-cli/), which is a command line app that helps you build React Native projects. Expo CLI also has an attached phone app so that you can test your project on mobile devices.

To install Expo, type the following:

<Highlighter
input='npm install -g expo-cli'
language='bash'
/>

This is a global install, in fact that is what the `-g` is indicating. It is often recommended to avoid installing anything globally, but this is an exception because we need Expo to initialize projects across our machine.

Once we have Expo installed, navigate to the directory where you want your project to reside.

In this case, we will assume a `Projects` folder on the `Desktop`.

<Highlighter
input='cd ~Desktop/Projects'
language='bash'
/>

If you don’t have a directory for your projects already, you can create one with the `mkdir` command, as in `mkdir Projects`.

Once within the directory where you would like your project to be, use the Expo command line app to initialize the project. 


<Highlighter
input='expo init LifeCounter'
language='bash'
/>

Once you run the above command, you should receive output similar to the following.

<Highlighter
input={`? Choose a template: › - Use arrow-keys. Return to submit.
    ----- Managed workflow -----
❯   blank               a minimal app as clean as an empty canvas
    blank (TypeScript)  same as blank but with TypeScript configuration
    tabs (TypeScript)   several example screens and tabs using react-navigation and TypeScript
    ----- Bare workflow -----
    minimal             bare and minimal, just the essentials to get you started`}
language='bash'
/>

We are going to press `ENTER` to confirm that we would like to initialize a blank project. At this point, you could create a project with TypeScript already installed, but we are selecting the blank project so that we can go through that process ourselves within the scope of this tutorial.

Once you receive the following output, you’ll be ready to continue.

<Highlighter
input='✅ Your project is ready!'
language='bash'
/>

Let’s now list the contents of the directory that Expo initialized for us.

<Highlighter
input='ls LifeCounter'
language='bash'
/>

We should receive output with the following directories and files.

<Highlighter
input={`App.js        assets        node_modules    yarn.lock
app.json    babel.config.js    package.json`}
language='bash'
/>

We have successfully initialized our LifeCounter app and are ready to add TypeScript to it. 

## Step 2 — Installing TypeScript

With our app initialized, move into the `LifeCounter` directory. For our example, the full path is `~/Desktop/Projects/LifeCounter`.

<Highlighter
input='cd LifeCounter'
language='bash'
/>

At this point, we can install TypeScript with npm. 


<Highlighter
input='npm install --save-dev typescript'
language='bash'
/>

The `--save-dev` flag after the install is to ensure that the package, and more importantly the version of TypeScript that you are using, ends up in the `devDependencies` of your `package.json` file. Having the version number allows for either you or others to replicate your development environment.

To check that TypeScript was successfully installed, type the following.

<Highlighter
input='npx tsc -v'
language='bash'
/>

Once you run the above command, you should receive output with the relevant version number.

<Highlighter
input='Version 4.4.4'
language='bash'
/>

The package manager npx is automatically installed alongside npm when you set up Node.js. Essentially, it allows you to execute commands that a package may have. In this command, we are checking the version of our installed TypeScript package. As before, if it was installed correctly, a version number will appear in your output. One last thing to note is that the above method will install the latest version of TypeScript. If the project’s dependencies require you to install a specific version, amend the npm install command to target a specific version, as in the following command, `npm install typescript@3.4.7 --save-dev`.

If later on in the project you want to upgrade to the latest version of TypeScript you can do so by running:

<Highlighter
input='npm install typescript@latest'
language='bash'
/>

It is recommended to review project updates and to make relevant modifications to your codebase prior to updating versions to avoid issues in production environments. 

## Step 3 — Creating a `tsconfig.json` file

Before our environment is fully set up, we need to create a TypeScript configuration file. This is used by our IDE’s compiler to indicate that whatever directory that has the `tsconfig` file is the root of the TypeScript folder. Documentation on what the `tsconfig.json` file is used for and how it can be manipulated can be found in the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).  


To generate a `tsconfig.json`, we are going to once again use the `npx tsc` command. Be sure that you are in the root of your TypeScript project; the same directory that houses your `package.json` file. In this case it is our `LifeCounter` directory. 

<Highlighter
input='npx tsc --init'
language='bash'
/>

We’ll receive the following output.

<Highlighter
input='message TS6071: Successfully created a tsconfig.json file.'
language='bash'
/>

Let’s review the generated `tsconfig.json` file. You can open it up in VS Code or other IDE of choice, or inspect it on the command line with a text editor (for example, you can open it with `nano tsconfig.json`). 

Without the commented out lines (lines that begin with `//`), the generated configuration file will be similar to the following. 

<Highlighter
input={`{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
    /* Projects */
      ...
      /* Language and Environment */
    "target": "es5",
      ...
      /* Modules */
      "module": "commonjs", 
      ...
      /* Interop Constraints */
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
      ...
    /* Type Checking */
    "strict": true,  
      ...
    /* Completeness */
    "skipLibCheck": true                               
     }
}`}
language='bash'
/>

We are going to edit the file. Feel free to delete the lines currently in the file, and type or paste in the following.


<Highlighter
input={`{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "typeRoots": ["./node_modules/@types"],
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
  }
}`}
language='bash'
/>

Let’s briefly explore each relevant key. 

* The `target` sets the output of the compiler to be the latest version of JavaScript. 
* The `module` indicates that we are using Node.js. 
* The `typeRoots` tells the compiler that it should check the types in your project’s `node_modules` folder. If this line is not included, it will look for the typing globally, which can run into versioning issues. 

With this, you have everything that is needed to set up a TypeScript development environment. 

Your project should now be similar to the [`installingTypeScript` branch](https://github.com/sourcegraph-community/LifeCounter/tree/installingTypescript) of our project, which we will update in future tutorials.

## Learn more

Learn more about TypeScript from the [official documentation](https://www.typescriptlang.org/docs/). 

Learn more about React Native from the [official documentation](https://reactnative.dev/)

Learn more about what Expo CLI does from their [official docs](https://docs.expo.dev/workflow/expo-cli/)

Check out more tutorials at [Sourcegraph Learn](https://learn.sourcegraph.com/posts). 

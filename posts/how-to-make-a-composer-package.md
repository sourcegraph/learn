---
title: How to make a Composer package
authorSlug: tom-benevides
authorDisplayName: Tom Benevides
tags: [tutorial, PHP, composer]
publicationDate: November 14, 2021
description: Learn how to make a Composer package
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: Making a Composer package
type: posts
---

Composer packages are a way to organize your code and dependencies. They are used to create a library of code that can be used by other developers, but how to create one and make it available to others? This tutorial will show you how to make a package for getting quotes from famous people and publish it to the Composer registry.

## Getting Started

### Prerequisites

For this tutorial, we will be using some tools that will help us in this journey. First, we need GIT, which is a version control system (you can read more about it [here](https://git-scm.com/)). Then, we will need [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/). These are tools that help us to run our container because we will be using them to run PHP and composer without actually installing them on our machine.

### Configuring the environment

Since we have all the prerequisites, we can start by configuring our environment. First, we will create a directory for our project. So, let's create a directory called `said-quotes`. After that, we need a file called `sg` inside the created folder.

```bash
mkdir said-quotes
cd said-quotes/
touch sg
```
This `sg` file will contain the code that we will use to run our container. So, let's add the following code to our `sg` file:

```bash
#!/usr/bin/env bash

docker run -it --rm \
    --user $(id -u):$(id -g) \
    -v $PWD:/app \
    -w /app composer:latest "$@"
```

So, what this code does is run a composer container inside our project folder. The `-w` flag tells the container to run in the current directory. The `-v` flag tells the container to mount the current directory to the container and the `--user` flag tells the container to run as the current user. Now we just have to give the `sg` file the right permissions so that it can be executed.

```bash
chmod +x sg
```

## Initializing the project

Now we have our environment configured, we can start by creating our project. So, let's run the following command:

```bash
./sg init
```

This command will actually run a `composer init` inside the container. When we do that, the composer will ask a few questions about our project, like the name of the project, the description, and the author. So, let's answer those questions.

```bash
Welcome to the Composer config generator

This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [root/app]:
```

The package name usually has two parts: the vendor and the name. The vendor is the name of the company or organization that created the package. The name is the name of the package. Many people use their github username as the vendor name, because it is the place where they store their code. So, since we are doing a personal package, we should use our own github username as the vendor and the name of the package should be `said-quotes`.

```bash
Welcome to the Composer config generator

This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [root/app]: tombenevides/said-quotes
Description []:
```

In here, we will just add a simple description for our package.

```bash
Welcome to the Composer config generator

This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [root/app]: tombenevides/said-quotes
Description []: A simple package to get quotes
Author [, n to skip]:
```

In this case, we will add our name and email.

```bash
Welcome to the Composer config generator

This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [root/app]: tombenevides/said-quotes
Description []: A simple package to get quotes
Author [, n to skip]: Tom Benevides <eltonfelixbenevides@gmail.com>
Minimum Stability []: 
```

This is the minimum stability that we want our package to have. We can choose between `stable`, `RC`, `beta`, and `alpha`. The default is `stable`, so we don't need to specify it.

```bash
Welcome to the Composer config generator

This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [root/app]: tombenevides/said-quotes
Description []: A simple package to get quotes
Author [, n to skip]: Tom Benevides <eltonfelixbenevides@gmail.com>
Minimum Stability []:
Package Type (e.g. library, project, metapackage, composer-plugin) []:
```

The package type is the type of package that we are creating. We can choose between `library`, `project`, `metapackage`, `composer-plugin`, and `php`. It's not required, but in our case, we will choose `library`.

```bash
Welcome to the Composer config generator

This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [root/app]: tombenevides/said-quotes
Description []: A simple package to get quotes
Author [, n to skip]: Tom Benevides <eltonfelixbenevides@gmail.com>
Minimum Stability []:
Package Type (e.g. library, project, metapackage, composer-plugin) []: library
License []:
```

The license option will define which license our code project will have. The most common is MIT, so we will choose that, but you can choose any other license that you want.

```bash
Welcome to the Composer config generator

This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [root/app]: tombenevides/said-quotes
Description []: A simple package to get quotes
Author [, n to skip]: Tom Benevides <eltonfelixbenevides@gmail.com>
Minimum Stability []:
Package Type (e.g. library, project, metapackage, composer-plugin) []: library
License []: MIT

Define your dependencies.

Would you like to define your dependencies (require) interactively [yes]?
```

This option ask us to define our dependencies. We could choose `yes` if we want to define our dependencies interactively. In our case, we don't have any dependencies, so we will choose `no`.

```bash
Welcome to the Composer config generator

This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [root/app]: tombenevides/said-quotes
Description []: A simple package to get quotes
Author [, n to skip]: Tom Benevides <eltonfelixbenevides@gmail.com>
Minimum Stability []:
Package Type (e.g. library, project, metapackage, composer-plugin) []: library
License []: MIT

Define your dependencies.

Would you like to define your dependencies (require) interactively [yes]? no
Would you like to define your dev dependencies (require-dev) interactively [yes]?
```

The same thing for the dev dependencies.

```bash
Welcome to the Composer config generator

This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [root/app]: tombenevides/said-quotes
Description []: A simple package to get quotes
Author [, n to skip]: Tom Benevides <eltonfelixbenevides@gmail.com>
Minimum Stability []:
Package Type (e.g. library, project, metapackage, composer-plugin) []: library
License []: MIT

Define your dependencies.

Would you like to define your dependencies (require) interactively [yes]? no
Would you like to define your dev dependencies (require-dev) interactively [yes]? no
Add PSR-4 autoload mapping? Maps namespace "Tombenevides\SaidQuotes" to the entered relative path. [src/, n to skip]:
```

This option is interesting because it ask us to add a PSR-4 autoload mapping. We will choose `src/` because we want to concentrate our package code in one place and this config will also give us a namespace to reference in our classes.

```bash
Welcome to the Composer config generator

This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [root/app]: tombenevides/said-quotes
Description []: A simple package to get quotes
Author [, n to skip]: Tom Benevides <eltonfelixbenevides@gmail.com>
Minimum Stability []:
Package Type (e.g. library, project, metapackage, composer-plugin) []: library
License []: MIT

Define your dependencies.

Would you like to define your dependencies (require) interactively [yes]? no
Would you like to define your dev dependencies (require-dev) interactively [yes]? no
Add PSR-4 autoload mapping? Maps namespace "Tombenevides\SaidQuotes" to the entered relative path. [src/, n to skip]:

{
    "name": "tombenevides/said-quotes",
    "description": "A simple package to get quotes",
    "type": "library",
    "license": "MIT",
    "autoload": {
        "psr-4": {
            "Tombenevides\\SaidQuotes\\": "src/"
        }
    },
    "authors": [
        {
            "name": "Tom Benevides",
            "email": "eltonfelixbenevides@gmail.com"
        }
    ],
    "require": {}
}

Do you confirm generation [yes]? yes
Generating autoload files
Generated autoload files
PSR-4 autoloading configured. Use "namespace Tombenevides\SaidQuotes;" in src/
Include the Composer autoloader with: require 'vendor/autoload.php';
```

In the end, we will check the composer.json content and confirm that it's correct. Then, the composer will generate the autoload files. After that, we will have this structure in our project folder:

```
├── composer.json
├── sg
├── src/
└── vendor/
```

## Write tests

Now that our project was created, let's think about what we want to do. The mainly idea is that our package will provide a class with a `getQuote()` method that will return a random quote from specific person and an error message when no author is provided or it doesn't find any matching quotes for the given author. Finally, those quotes will come from an open API called [Quotable.io](https://api.quotable.io/). With that in mind, we will create a test file that will test this three cases for us, which means that we will simulate three scenarios and see if our code meets our expectations for each one of them. But first, we need to install a test framework. 

### Install PestPHP

We will use Pest, which is a PHPUnit test framework. An interesting thing about Pest is that we don't need class names for our tests. We can just write the test functions in the file. You can install and initialize Pest with the following commands:

```bash
./sg require pestphp/pest --dev --with-all-dependencies

./sg vendor/bin/pest --init
```

These commands, besides installing Pest, will also create a few files and folders. So, after running the commands, we will have this structure in our project folder:

```
├── composer.json
├── sg
├── phpunit.xml
├── vendor/
├── src/
├── tests/
├   └── Pest.php
├   └── ExampleTest.php
└── vendor/
```

The Pest.php file will contain the Pest global configuration. The ExampleTest.php file will contain a sample test and the phpunit.xml file will contain the base configuration for our tests. Now, we can run the tests like this:

```bash
./sg vendor/bin/pest
```

### Write tests

Now that we have a test framework, we can start writing our tests. We will rename the ExampleTest.php file to `QuoteTest.php` and write our tests in it. We will start preparing the environment for our tests. So, copy the following code to the beginning of our test file:

```php
<?php

use GuzzleHttp\Client;
use GuzzleHttp\Handler\MockHandler;

beforeEach(function () {
    $this->mockHandler = new MockHandler();

    $this->mockedClient = new Client([
        'handler' => $this->mockHandler,
    ]);
});
```

This code seems a bit verbose, but it's not. We will use the `beforeEach()` function to create a mock client because we don't want to make real requests to the API. So, we will use the `$this->mockedClient` variable to make fake requests. With the environment ready, let's describe our scenarios, starting with the first which is getting a random quote from a specific person. We will use the following test:

```php	
it('returns a Jane Austen quote', function() {
    $this->mockHandler->append(
        new Response(
            status: 200,
            body: '{"_id":"yHmYezfz4G","tags":["friendship"],"content":"Business, you know, may bring you money, but friendship hardly ever does.","author":"Jane Austen","authorSlug":"jane-austen","length":73,"dateAdded":"2021-02-12","dateModified":"2021-02-12"}'
        )
    );
    
    $quotes = new SaidQuote(author: 'jane austen', client: $this->mockedClient);

    $quote = $quotes->getQuote();

    expect($quote)->toEndWith('Business, you know, may bring you money, but friendship hardly ever does. by Jane Austen');
});
```	

In this test we will define a response for Guzzle client, which Pest will use to simulate a real request to the API. Using the `$this->mockHandler` variable to append the response to the mock handler, We will use the `$quotes` variable to instantiate our package class and use the `$quote` variable to store the response from `getQuote()`. The `expect()` function will be used to check if the quote returned by the API matches the expected one.

> Note: the content of the response body is in the same format as an actual response from the Quotable API.

The second scenario is to get an error message when no quote is found for a given author. We will use the following test:


```php	
it("returns a message when it doesn't find a matching quote.", function() {
    $this->mockHandler->append(
        new ClientException(
            '{"statusCode":404,"statusMessage":"Could not find any matching quotes"}', 
            new Request('GET', '/'),
            new Response(404)
        )
    );

    $quotes = new SaidQuote(author: 'Sourcegraph Tom', client: $this->mockedClient);

    $quote = $quotes->getQuote();

    expect($quote)
        ->toEqual('Error: Could not find any matching quotes for Sourcegraph Tom');
});
```

In this test, we will also define a response for the Guzzle client, but instead of a successful response, we will use a client exception. The rest have pretty much the same structure as the first test.

The last scenario is to get an error message when no author is provided. We will use the following test:

```php	
it('returns a message when was not given an author name', function() {
    $quotes = new SaidQuote('');

    $quote = $quotes->getQuote();

    expect($quote)->toContain('Error: An author name is required');
});
```

This is a more simple test, because we don't need a Guzzle client and the reason is because this variable needs to be checked before the call to the API.

## Implement the package class

Until now, we have only configured the package and written the tests. Now, we need to actual implement the package class. We will start by creating a new file in the `src/` folder and name it `SaidQuote.php`. After that, copy the following code to the beginning of the file:

```php
<?php

namespace Tombenevides\SaidQuotes;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;

class SaidQuote
{
    const BASE_ENDPOINT = "https://api.quotable.io/random";
    private Client $client;

    public function __construct(
        private ?string $author = null,
        ?Client $client = null
    )
    {
        $this->client = $client ?? new Client();
    }

    public function getQuote()
    {
        try{
            if(empty($this->author)){
                throw new \Exception("An author name is required");
            }

            $response = $this->client->get(self::BASE_ENDPOINT, [
                'query' => [
                    'author' => str_replace(' ', '-', $this->author)
                ]
            ])->getBody()->getContents();
    
            $quote = json_decode($response, true);
    
            return $quote['content'].' by '.ucwords($this->author);
        }catch(ClientException $e){
            return 'Error: Could not find any matching quotes for '.$this->author;
        }catch(\Exception $e){
            return 'Error: '.$e->getMessage();
        }	
    }

}
```

Calm down, we will explain the whole code in this section. First of all, we set the namespace using the same we defined in the composer.json file. Then, we create the class using `SaidQuote` as class name and in the class constructor we will receive 2 parameters. The first one is the author name and the second one is the Guzzle client. The class will also have a constant for the base endpoint of the API. 

After that, we have our `getQuote()` function. The try-catch inside the function will handle the exceptions to return an appropriate message. Inside the try block, we will check if the author name is empty. If it is, we will throw an exception. If it is not, we will make a request to the API using the Guzzle client. In this request, we pass the author name as a parameter using a snake-case format. Finally, we decode the response and return the content concatenated with the author name.

Now, if we run the tests, we will see that the package works as expected.

```bash
./sg vendor/bin/pest

 PASS  Tests\SaidQuoteTest
  ✓ it returns a Jane Austen quote
  ✓ it returns a message when it doesnt find a matching quote.
  ✓ it returns a message when was not given an author name

  Tests:  3 passed
  Time:   0.02s
```

Great! We have successfully implemented the package. Now, we can use it in any PHP project. But how can we do that?

## Publish the package

To make our package available via Composer, we will need to publish it. We will use the Github and Packagist platforms for that. First of all, we need to create a new repository that will contain the package code. If you don't know to do that, you can read more about it [here](https://docs.github.com/en/get-started/quickstart/create-a-repo) (just remember to give your repository the same name as the package). Then, we will follow the given instructions to push the code to the repository.

We also need to create a new tag for the package, using `v1.0.0` as the tag. So, after pushing the code to the repository, run the following commands:

```bash	
git tag v1.0.0 -m "First version"

git push origin v1.0.0
```

This commands will create a new tag and push it to the repository. This is important because each tag will be a version of the package. Since we have the tag, we can put our package on the Packagist platform (more info [here](https://packagist.org/)). To do that, register (or login) to the platform and then access the **Submit** page. Now, we just need to fill the _repository URL_ field with the github repository URL and click on **check** and then on **Submit** button. After a brief moment, you will see a new page with the package information, and that's it! Now we can use the package in any PHP project using composer, like this:

```bash
composer require tombenevides/said-quotes
```	

## Additional resources

You can read more about PHP [here](https://www.php.net/) in the official documentation and about Composer [here](https://getcomposer.org/doc/00-intro.md).




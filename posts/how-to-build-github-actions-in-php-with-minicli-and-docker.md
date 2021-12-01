---
title: How to build GitHub Actions in PHP with Minicli and Docker
authorSlug: erika-heidi
authorDisplayName: Erika Heidi
tags: [tutorial, GitHub, PHP, Docker]
publicationDate: November 18, 2021
description: Learn how to use GitHub Actions to periodocally run a PHP command line application built with Minicli. As demo, we'll build a GitHub action to update a project's CONTRIBUTORS file based on top contributors from a given project
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-03.png
imageAlt: Sourcegraph Learn
browserTitle: TypeError invalid assignment to const "x" in JavaScript error handling
type: posts
---

GitHub Actions facilitates creating CI/CD automated workflows that can be triggered by GitHub events, such as when a pull request is created, a merge is made, or a new comment is posted on an issue. What some people may not know is that you can also run GitHub Actions at scheduled times, based on `cron` expressions.

Public repositories get unlimited GitHub Actions for free, which makes this feature a valuable tool for open source and personal projects that must run scheduled tasks.

In this guide, you'll learn how to use GitHub Actions to periodically run a PHP command line application built with [Minicli](https://docs.minicli.dev). This application will update a `CONTRIBUTORS` file in the same repository where the workflow action is set, updating information about top contributors of a project. We'll implement the repository update portion using the [Update files on GitHub Action](https://github.com/marketplace/actions/update-files-on-github), which will generate a commit with the file change to the repository where the workflow is run.

### Prerequisites

To follow this tutorial you'll need access to:

- A PHP command line environment (`php-cli`, no need for web servers) and Composer installed. The [`php-curl` extension](https://www.php.net/manual/en/curl.requirements.php) is required to connect to the GitHub API. 

<PrismSyntaxHighlighter
input={`sudo apt-get install php-curl`}
language='bash'
/>

<PrismSyntaxHighlighter
input={`sudo apt install php7.4-cli`}
language='bash'
/>

<PrismSyntaxHighlighter
input={`sudo apt install composer`}
language='bash'
/>

<PrismSyntaxHighlighter
input={`sudo apt install docker.io`}
language='bash'
/>

- An empty GitHub repository where you're going to set up your action. For more info, check [this documentation](https://docs.github.com/en/articles/creating-a-new-repository).

## Step 1 — Bootstrapping the application

Start by bootstrapping a new Minicli application. This will be a single-command application, so we don't need to use the `minicli/application` template. Create a new folder and require `minicli/minicli` to start building your command:

<Highlighter
input={`cd ~
mkdir action-contributors
cd action-contributors
composer require minicli/minicli`}
/>

This will create a new `composer.json` file and download the base [minicli/minicli](https://github.com/minicli/minicli) package.

Updating dependencies (including require-dev)
Package operations: 1 install, 0 updates, 0 removals
  - Installing minicli/minicli (2.2.2): Downloading (100%)   

Next, you need to create the entry point script that runs your command. Using your code editor of choice, create a new file in the root of the application called `minicli` (or another name of your choice):

<Highlighter
input={`nano minicli`}
/>

Include the following code, which bootstraps a Minicli application with a single command defined as callback:

<PrismSyntaxHighlighter
input={`#!/usr/bin/php
<?php
 
if(php_sapi_name() !== 'cli') {
    exit;
}
 
require __DIR__ . '/vendor/autoload.php';
 
use Minicli\App;
 
$app = new App([
    'app_path' => __DIR__ . '/app/Command'
]);
 
$app->registerCommand('update-contributors', function () use ($app) {
    $app->getPrinter()->info('Fetching top contributors...');
});
 
$app->runCommand($argv);
 `}
language='php'
/>

Save and close the file. Then, run the following command to make this script executable:

<PrismSyntaxHighlighter
input={`chmod +x minicli`}
language='bash'
/>

Now you can test your command with:

<PrismSyntaxHighlighter
input={`./minicli update-contributors `}
language='bash'
/>

<Highlighter
input='Fetching top contributors...'
/>

In the next step, you'll update the example command to pull the top contributors of a GitHub project, and generate a markdown file with the list.

## Step 2 — Pulling contributors with the GitHub API

To make requests to the GitHub API, we'll use the [Curly](https://docs.minicli.dev/en/latest/xtras/extending-minicli/#miniclicurly) Minicli extension. You can import it to your project with the following command:

<PrismSyntaxHighlighter
input={`composer require minicli/curly`}
language='bash'
/>

Obtaining the top contributors for an open source project on GitHub doesn't require an authentication token. You only need to include a couple headers in your request:

- `Accept: application/vnd.github.v3+json`
- `User-Agent: My user agent v1.0`

You'll now edit the `update-contributors` command to query the GitHub API and save information about top contributors in the project of your choice.

Replace the current content in your `minicli` script with the following, updated code:

<Highlighter
input='nano minicli'
/>

<PrismSyntaxHighlighter
input={`#!/usr/bin/php
<?php
 
if(php_sapi_name() !== 'cli') {
    exit;
}
 
require __DIR__ . '/vendor/autoload.php';
 
use Minicli\App;
use Minicli\Curly\Client;
 
$app = new App([
    'app_path' => __DIR__ . '/app/Command',
    'repository' => getenv('CONTRIB_REPOSITORY') ?: 'minicli/minicli',
    'output_file' => getenv('CONTRIB_OUTPUT_FILE') ?: 'CONTRIBUTORS.md'
]);
 
$app->registerCommand('update-contributors', function () use ($app) {
    $app->getPrinter()->info('Fetching top contributors...');
 
    $client = new Client();
    $response = $client->get(
                "https://api.github.com/repos/" . $app->config->repository. "/contributors",
                ['Accept: application/vnd.github.v3+json', 'User-Agent: Curly']
    );
 
    if ($response['code'] != 200) {
            $app->getPrinter()->error("an error occurred: " . $response['code']);
            return 1;
    }
 
    $content = "#Contributors\n\n";
    $content .= "Shout out to our top contributors!\n\n";
 
    foreach (json_decode($response['body']) as $item) {
        $content .= "- [$item->login]($item->url)\n";
    }
 
    try {
            $contrib_file = fopen($app->config->output_file, 'w+');
            fwrite($contrib_file, $content);
            fclose($contrib_file);
    } catch (Exception $exception) {
            $app->getPrinter()->error("An error occurred while trying to save the contrib file.");
            return 1;
    }
 
    $app->getPrinter()->success("Finished updating contrib file.");
    return 0;
});
 
$app->runCommand($argv);`}
language='php'
/>

The updated code defines a couple configuration variables: `repository` and `output_file`, with default values set to `minicli/minicli` and `CONTRIBUTORS.md` respectively. When building your Action workflow, you can overwrite these default values with environment variables named `CONTRIB_REPOSITORY` and `CONTRIB_OUTPUT_FILE`, respectively.

The `update-contributors` method now uses a `Curly/Client` client to query the GitHub API using the endpoint `https://api.github.com/repos/owner/repo/contributors`. When the request is successful, the application builds a markdown text with the contributors that are returned as response, and writes it to the file defined by the  `output_file` configuration value.

Now run the application again with:

<PrismSyntaxHighlighter
input={`./minicli update-contributors`}
language='bash'
/>


<Highlighter
input={`Fetching top contributors...
 
Finished updating contrib file.`}
/>

If you check your repository files now, you should see a new `CONTRIBUTORS.md` file in the root of the repository.

<PrismSyntaxHighlighter
input={`cat CONTRIBTORS.md `}
language='bash'
/>

<Highlighter
input={`# Contributors
 
Shout out to our top contributors!
 
- [erikaheidi](https://api.github.com/users/erikaheidi)
- [syntaxseed](https://api.github.com/users/syntaxseed)
- [tombenevides](https://api.github.com/users/tombenevides)
- [ScullWM](https://api.github.com/users/ScullWM)
- [wandersonwhcr](https://api.github.com/users/wandersonwhcr)
- [lotfio](https://api.github.com/users/lotfio)
- [flug](https://api.github.com/users/flug)
- [mauriciofauth](https://api.github.com/users/mauriciofauth)
- [mrpc](https://api.github.com/users/mrpc)
- [peter279k](https://api.github.com/users/peter279k)
- [zaghadon](https://api.github.com/users/zaghadon)`}
/>

The application is now ready, but you still need to set up the environment that will execute it on the GitHub runtime. 

In the next step, you'll build a custom Docker image based on PHP 8.0 to install and execute the application.

## Step 3 — Setting up the application Dockerfile

GitHub offers a few different [runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners) to execute code as actions. For PHP applications, you'll need to provide the runner with a custom environment based on a Docker image, capable of executing your application code as a single command.

Create a new `Dockerfile` in the root of your application and copy the following code to the file:

<PrismSyntaxHighlighter
input={`FROM php:8.0-cli
 
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libxml2-dev \
    zip \
    unzip
 
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
 
# Install Composer and set up application
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN mkdir /application
COPY . /application/
RUN cd /application && composer install
 
ENTRYPOINT [ "php", "/application/minicli" ]
CMD ["update-contributors"]`}
language='bash'
/>

Save the file.

The example  `Dockerfile` starts by setting up the base image to PHP `8.0-cli`. Then, it will:

- set up a few required packages;
- install Composer by copying its executable from its official image;
- create a directory for the application inside the container;
- copy the application files from the current directory and into the container;
- run `composer install`;
- set up the container entry point and default command.

You may want to test if the application runs through Docker with this image. Use the following command to build the image under the tag `action-contributors`:

<PrismSyntaxHighlighter
input={`docker build . -t action-contributors`}
language='bash'
/>
To run the application in a disposable container using the newly built image, run:

<PrismSyntaxHighlighter
input={`docker container run --rm -v $(pwd) action-contributors`}
language='bash'
/>

You should be able to see the same output as before. However, the generated `CONTRIBUTORS.md` file will be confined to the container and won't show up in your application directory on the host machine. When setting up your workflow, you'll need to include an additional GitHub Action to either [commit the changes directly to the master branch](https://github.com/marketplace/actions/update-files-on-github), or [open a pull request with the changes](https://github.com/marketplace/actions/create-pull-request) so that you can review the update before merging.


## Step 4 — Creating the action file

With the application ready, you'll need to set up a YAML file to define your action. Create a new file called `action.yml` on the root of the project, and copy the following content to that file:

<PrismSyntaxHighlighter
input={`# action.yml
name: 'Update CONTRIBUTORS'
description: 'Updates contributors file'
outputs:
  response:
    description: 'Output from command'
runs:
  using: 'docker'
  image: 'Dockerfile' `}
language='bash'
/>

Save the file.

The file starts by defining the name and description of the action. Because our command doesn't require inputs, we don't need to set up an `inputs` section for this action. The `response` output will be available for logs that might refer to this information for debug purposes. Then, we get to the `runs` portion, where we define what the action will do. This action will build and execute the image defined by `Dockerfile`.

Your action is almost ready. You're encouraged to create a `README.md` file explaining how to use it, and including an example workflow. For now, you can create a simple README with some basic information about the action. You can use the following template for your README:

<Highlighter
input={`# My Action Title
 
A paragraph about my action, what it does and how it works.
 
 
## Example usage
Include an example of workflow using this action.
 
`}
/>
When you're finished with your README, you'll need to commit and push the files to the GitHub repository you've created:

<PrismSyntaxHighlighter
input={`git add action.yml composer.json composer.lock minicli Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags`}
language='bash'
/>

Once you have pushed your code (including the tag), the action is ready to be used by a workflow in any project on GitHub, referenced by `your_user_or_org/your_action_repo@v1`.

In the next step, you'll create a workflow to test this action.

## Step 5 — Setting up a workflow

When creating a workflow for a GitHub action, there are quite a few different things to consider: what triggers the action, which other actions are needed and in which order they should run, and what kinds of inputs or environment variables are required for the action to run. 

This action should run on a scheduled basis, without the need for a specific event to trigger it. It doesn't require inputs, but it uses two environment variables to define which repository is being pulled for contributors, and the name of the file that will be created with the list of contributors. 

We'll need to combine this action with another action to either commit the changes directly to the main project's branch, or open a pull request with the changes.

### Committing the updated `CONTRIBUTORS` file directly to the main branch

The following workflow will run once a month and commit an updated `CONTRIBUTORS.md` file directly into the default remote branch of the project where this workflow is set:


<PrismSyntaxHighlighter
input={`name: Update CONTRIBUTORS file
on:
  schedule:
    - cron: "0 0 1 * *"
  workflow_dispatch:
jobs:
  main:
    runs-on: ubuntu-latest
    steps:
      - uses: minicli/action-contributors@v3
        name: "Update a projects CONTRIBUTORS file"
        env:
          CONTRIB_REPOSITORY: 'minicli/minicli'
          CONTRIB_OUTPUT_FILE: 'CONTRIBUTORS.md'
      - name: Commit changes
        uses: test-room-7/action-update-file@v1
        with:
          file-path: 'CONTRIBUTORS.md'
          commit-msg: Update Contributors
          github-token: ${{ secrets.GITHUB_TOKEN }} `}
language='bash'
/>

Remember to change the `CONTRIB_REPOSITORY` environment variable to the project you want to pull contributors from, using the format `owner/repository`.

### Opening a pull request with the updated `CONTRIBUTORS` file

You can also opt to open a pull request instead of committing the changes directly into the main project's branch. For that, you'll need an additional action called [actions/checkout](https://github.com/actions/checkout). This action checks out the repository code to a location inside the container.

<PrismSyntaxHighlighter
input={`name: Update CONTRIBUTORS file
on:
  schedule:
    - cron: "0 0 1 * *"
  workflow_dispatch:
jobs:
  main:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: minicli/action-contributors@v3
        name: "Update a projects CONTRIBUTORS file"
        env:
          CONTRIB_REPOSITORY: 'minicli/docs'
          CONTRIB_OUTPUT_FILE: 'CONTRIBUTORS.md'
      - name: Create a PR
        uses: peter-evans/create-pull-request@v3
        with:
          commit-message: Update Contributors
          title: "[automated] Update Contributors File"
          token: ${{ secrets.GITHUB_TOKEN }} `}
language='bash'
/>

Copy your preferred workflow code to the following location, inside the project where you want the keep your CONTRIBUTORS file:

<PrismSyntaxHighlighter
input={`.github/workflows/contributors.yml`}
language='bash'
/>

Then, commit and push your changes to the repository where the workflow will run. Once you push the workflow file to that location, you'll be able to see the workflow listed in the **Actions** tab of your GitHub repository:

![Running a Github action manually](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/geq1zb198is30hbthgag.png)

Then, you can manually run the workflow by clicking on the `Run workflow` button on the right. 

If you choose to commit the changes directly into the main project's branch, once the workflow has finished running you should find the updated CONTRIBUTORS file in the root of the project. 

If you chose to create a pull request, you should find an open pull request in the "Pull requests" tab of your project's repository,  carrying the updated CONTRIBUTORS file.

![Pull request automatically created by this workflow + action](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ht57yas5q2qxr40a1b5b.png)


## Find more example workflows using these Actions

GitHub provides a large library of readily available actions you can integrate into your project, and you can also find user-contributed actions in the marketplace. However, because workflows are so flexible, sometimes it can be difficult to figure out how to combine multiple actions and which inputs or environment variables are required in certain scenarios. 

To find usage examples related to the actions used in this guide, you can use the following Sourcegraph search queries:

### Find more examples of the `actions/checkout` action

**Search Query:**
```
lang:YAML uses: actions/checkout@v2
```

**Search URL:**
https://sourcegraph.com/search?q=context:global+lang:YAML+uses:+actions/checkout%40v2&patternType=literal


### Find more examples of the `test-room-7/action-update-file` action

**Search Query:**
```
lang:YAML uses: test-room-7/action-update-file@v1
```

**Search URL:**
https://sourcegraph.com/search?q=context:global+lang:YAML+uses:+test-room-7/action-update-file%40v1&patternType=literal

### Find more examples of the `peter-evans/create-pull-request` action

**Search Query:**
```
lang:YAML uses: peter-evans/create-pull-request@v3
```

**Search URL:**
https://sourcegraph.com/search?q=context:global+lang:YAML+uses:+peter-evans/create-pull-request%40v3&patternType=literal

### Search for anything related to GitHub actions

**Search URL**
https://sourcegraph.com/search?q=context:global+github+actions&patternType=literal

**Search Query:**
```
github actions
```

## Conclusion

In this step-by-step tutorial, we've seen how to create a GitHub action to programmatically update a CONTRIBUTORS file for an open source project, using the [Minicli](https://docs.minicli.dev) framework for command line applications in PHP. If you'd like to use this action in one of your projects and don't want to build it from scratch, you can head over to the [minicli/action-contributors](https://github.com/minicli/action-contributors) repository on GitHub to set up this action within a workflow on your project. To find more about GitHub actions, you can check the [official documentation](https://docs.github.com/en/actions), and you can also search for practical examples of workflows using [Sourcegraph code search](https://sourcegraph.com/search).


---
title: How to install Sourcegraph on Windows with Docker
authorSlug: lisa-tagliaferri
authorDisplayName: Lisa Tagliaferri
tags: [tutorial, Docker, installation, Sourcegraph]
publicationDate: July 1, 2021
updatedDate: August 10, 2021
description: Learn how to install Sourcegraph on your Windows machine with Docker
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-4.png
imageAlt: Sourcegraph Learn
browserTitle: Installing Sourcegraph for code search testing on Windows with Docker
type: posts
---

Sourcegraph is a tool that can allow you to search all the code that is important to you, from your own local repositories, to the software you build together with a team, to all the code that is available through open source projects. You can get started using Sourcegraph by using [Sourcegraph cloud](https://sourcegraph.com/search) with your preferred web browser, or you may want to install Sourcegraph locally or on a cloud server or virtual machine.

By installing Sourcegraph on your own hardware, you’ll be able to manage your own instance of Sourcegraph, providing you with complete control over who has access to your code. Your own installation will also allow you to connect your local (or server-side) code as well as any relevant Git servers. Git servers that you can connect to include GitHub, GitHub Enterprise, GitLab, Bitbucket, AWS CodeCommit, Perforce, and more.

We’ll go through how to install Sourcegraph on your local Windows machine with Docker so that you can begin to use Sourcegraph on all of your code. 

---
**NOTE**:

Sourcegraph can only be tested on Windows 10 as data will not be retained after server restarts, due to a limitation of Docker on Windows.

---

This installation guide is appropriate for local testing and should be quick to set up. If you would like to use Sourcegraph in a production environment, you should follow our documentation on installing Sourcegraph with [Docker Compose](https://docs.sourcegraph.com/admin/install/docker-compose) on a single node, or on a [Kubernetes cluster](https://docs.sourcegraph.com/admin/install/kubernetes).

## Step 1 — Install Docker

_If you already have Docker installed, you can [skip to the next step](#step-2--install-sourcegraph)._

On a Windows machine, you can install Docker from the [Docker installation page for Windows](https://docs.docker.com/docker-for-windows/install/). Follow the guidance from the Docker installation.

With Docker fully installed, you’ll be ready to move onto the section below to install Sourcegraph. 

Please note that Sourcegraph can only be tested on Windows 10 as data will not be retained after server restarts, due to a limitation of Docker on Windows.

## Step 2 — Install Sourcegraph

Due to limitations with Docker for Windows, Sourcegraph can only be tested on Windows as data cannot persist on a Windows installation. Due to that, we won't be using the `--volume` argument in our command.

<Highlighter
input='docker run --publish 7080:7080 \
--publish 127.0.0.1:3370:3370 ` \
--rm sourcegraph/server:3.29.0'
language='bash'
/>

_The above command with backtick assumes use of PowerShell. If you're using the Windows Command Prompt, substitute `^` as below._

<Highlighter
input='docker run --publish 7080:7080 \
--publish 127.0.0.1:3370:3370 ^ \
--rm sourcegraph/server:3.29.0'
language='bash'
/>

This command is telling your computer to install and run Sourcegraph in port 7080 of your localhost (127.0.0.1) and is calling up the relevant files from the Docker image of Sourcegraph.

Once you run the command, you’ll receive some output indicating that Sourcegraph is getting set up. Sourcegraph will be ready when you receive output similar to the following:

<OutputHighlighter
input='✱ Sourcegraph is ready at: http://127.0.0.1:7080'
/>

At this point, you’ll be able to move onto the next section to verify your installation.

## Step 3 — Verify the installation

When Sourcegraph is fully installed and ready to be used, the Sourcegraph logo will appear and you should access the URL that is indicated in the Terminal output.

![Installation complete verification on command line](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-logo-terminal.png)

Open a browser and go to the URL indicated in the output. Keep in mind that if you are using a local machine, you’ll be directed to the localhost, but on a server you should go to the IP address of that server.

The first time you open Sourcegraph, the page that will be displayed will be the page to setup your administrative account.

![Sourcegraph create account and login page](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-login-page.png)

As this is a test installation, you can choose whether this page satisfies your testing needs, or continue to create a test account and explore further.

## Next steps

Congratulations! You have installed a test environment of Sourcegraph with Docker on Windows and can begin using Sourcegraph to search all of the code that is important to you.

Once you have Sourcegraph up and running, and your code repositories available to Sourcegraph, you can check our overview video on [Three ways to search code with Sourcegraph](/three-ways-to-search-code-with-sourcegraph) so that you can more effectively search your code.

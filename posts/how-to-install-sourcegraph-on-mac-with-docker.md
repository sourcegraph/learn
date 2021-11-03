---
title: How to install Sourcegraph on macOS with Docker
authorSlug: lisa-tagliaferri
authorDisplayName: Lisa Tagliaferri
tags: [tutorial, Docker, installation, Sourcegraph]
publicationDate: July 1, 2021
updatedDate: August 10, 2021
description: Learn how to install Sourcegraph on your Apple Mac with Docker
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-6.png
imageAlt: Sourcegraph Learn
browserTitle: Installing Sourcegraph to search code on a local instance with macOS and Docker
type: posts
---

Sourcegraph is a tool that can allow you to search all the code that is important to you, from your own local repositories, to the software you build together with a team, to all the code that is available through open source projects. You can get started using Sourcegraph by using [Sourcegraph Cloud](https://sourcegraph.com/search) with your preferred web browser, or you may want to install Sourcegraph locally or on a cloud server or virtual machine.

By installing Sourcegraph on your own hardware, you’ll be able to manage your own instance of Sourcegraph, providing you with complete control over who has access to your code. Your own installation will also allow you to connect your local (or server-side) code as well as any relevant Git servers. Git servers that you can connect to include GitHub, GitHub Enterprise, GitLab, Bitbucket, AWS CodeCommit, Perforce, and more.

We’ll go through how to install Sourcegraph on your local macOS machine with Docker so that you can begin to use Sourcegraph on all of your code. 

---
**NOTE**:

Sourcegraph does not provide support for machines with the Apple M1 chip. The below guidance provides suggestions for both Intel chips and M1 chips, but only the Intel chips are supported by Sourcegraph.

---

This installation guide is appropriate for local testing and should be quick to set up. If you would like to use Sourcegraph in a production environment, you should follow our documentation on installing Sourcegraph with [Docker Compose](https://docs.sourcegraph.com/admin/install/docker-compose) on a single node, or on a [Kubernetes cluster](https://docs.sourcegraph.com/admin/install/kubernetes).

## Step 1 — Install Docker

_If you already have Docker installed, you can [skip to the next step](#step-2--install-sourcegraph)._

On a macOS machine, you can install Docker from the [Docker installation page for Mac](https://docs.docker.com/docker-for-mac/install/). You’ll need to ensure that you are installing the right version for your machine’s respective chip.

You can determine what chip you have by navigating to the Apple menu in the top left corner of your screen, selecting `About This Mac` and reviewing what is displayed next to `Chip` in the window that appears.

Once you know which is the appropriate version to install, select either `Mac with Intel chip` for any macOS machine that is on an Intel chip, or `Mac with Apple chip` for any macOS machine that has an Apple M1 chip. Then follow the guidance from the Docker installation to complete the process.

With Docker fully installed, you’ll be ready to move onto the next section.

## Step 2 — Install Sourcegraph

Depending on the chip that you have, you’ll be able to run a Docker command to install Sourcegraph and get up and running with code search on your local repositories and beyond. 

The first section is for macOS machines with [Intel chips](#on-macos-with-intel-chip), and is currently the only macOS chip supported by Sourcegraph. The second option is a suggested workflow for macOS with [Apple M1 chips](#on-an-apple-m1-chip-on-macos), though this is not supported by Sourcegraph.

### On macOS with Intel chip

On local machines with an Intel chip, you’ll be able to install Sourcegraph by running the following Docker command.

<Highlighter
input='docker run --publish 7080:7080 --publish 127.0.0.1:3370:3370 \
--rm --volume ~/.sourcegraph/config:/etc/sourcegraph \
--volume ~/.sourcegraph/data:/var/opt/sourcegraph \
sourcegraph/server:3.29.0'
language='bash'
/>

This command is telling your computer to install and run Sourcegraph in port 7080 of your localhost (127.0.0.1) and is calling up the relevant files from the Docker image of Sourcegraph. It is also setting up a store for your Sourcegraph data.

Once you run the command, you’ll receive some output indicating that Sourcegraph is getting set up. Sourcegraph will be ready when you receive the output similar to the following:

<Highlighter
input='✱ Sourcegraph is ready at: http://127.0.0.1:7080'
language='bash'
/>

At this point, you’ll be able to move onto the next section to verify your installation.

### On an Apple M1 chip on macOS

On a macOS machine with an Apple M1 chip, you’ll need to add an extra argument to your Docker command so that the platform does not interfere with the installation and running of Sourcegraph. Run the following command with the `--platform linux/amd64` argument as demonstrated below.

<Highlighter
input='docker run \
--publish 7080:7080 --publish 127.0.0.1:3370:3370 \
--platform linux/amd64 \
--rm --volume ~/.sourcegraph/config:/etc/sourcegraph \
--volume ~/.sourcegraph/data:/var/opt/sourcegraph \
sourcegraph/server:3.30.4'
language='bash'
/>

This command is telling your computer to install and run Sourcegraph in port 7080 of your localhost (127.0.0.1) and is calling up the relevant files from the Docker image of Sourcegraph. It is also setting up a store for your Sourcegraph data.

Once you run the command, you’ll receive some output indicating that Sourcegraph is getting set up. Sourcegraph will be ready when you receive output similar to the following:

<Highlighter
input='✱ Sourcegraph is ready at: http://127.0.0.1:7080'
language='bash'
/>

At this point, you’ll be able to move onto the next section to verify your installation.

## Step 3 — Verify the installation

When Sourcegraph is fully installed and ready to be used, the Sourcegraph logo will appear and you should access the URL that is indicated in the Terminal output.

![Installation complete verification on command line](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-logo-terminal.png)

Open a browser and go to the URL indicated in the output. Keep in mind that if you are using a local machine, you’ll be directed to the localhost, but on a server you should go to the IP address of that server.

The first time you open Sourcegraph, the page that will be displayed will be the page to setup your administrative account.

![Sourcegraph create account and login page](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-login-page.png)

You can create the account now. This account will be tied to your own instance of Sourcegraph.

Once you set up your account, you’ll be able to add repositories and set up your preferences and configuration.

## Next steps

Congratulations! You have installed Sourcegraph with Docker and have created an account so that you can begin using Sourcegraph to search all of the code that is important to you.

Once you have Sourcegraph up and running, and your code repositories available to Sourcegraph, you can check our overview video on the [three ways to search with Sourcegraph](/three-ways-to-search-code-with-sourcegraph) so that you can more effectively search your code.

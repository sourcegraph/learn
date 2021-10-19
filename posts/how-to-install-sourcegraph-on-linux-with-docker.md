---
title: How to install Sourcegraph on Linux with Docker
author: lisa-tagliaferri
tags: [tutorial, Docker, installation, Sourcegraph]
publicationDate: July 1, 2021
updatedDate: August 10, 2021
description: Learn how to install Sourcegraph on your own machine with Docker
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-7.png
imageAlt: Sourcegraph Learn
browserTitle: Installing a self-hosted Sourcegraph test instance on Linux with Docker
type: posts
---

Sourcegraph is a tool that can allow you to search all the code that is important to you, from your own local repositories, to the software you build together with a team, to all the code that is available through open source projects. You can get started using Sourcegraph by using [Sourcegraph cloud](https://sourcegraph.com/search) with your preferred web browser, or you may want to install your own instance of Sourcegraph locally or on a cloud server or virtual machine.

By installing Sourcegraph on your own hardware, you’ll be able to manage your own instance of Sourcegraph, providing you with complete control over who has access to your code. Your own installation will also allow you to connect your local (or server-side) code as well as any relevant Git servers. Git servers that you can connect to include GitHub, GitHub Enterprise, GitLab, Bitbucket, AWS CodeCommit, Perforce, and more.

We’ll go through how to install Sourcegraph on your local Linux machine with Docker so that you can begin to use Sourcegraph on all of your code. This installation guide is appropriate for local testing and should be quick to set up. If you would like to use Sourcegraph in a production environment, you should follow our documentation on installing Sourcegraph with [Docker Compose](https://docs.sourcegraph.com/admin/install/docker-compose) on a single node, or on a [Kubernetes cluster](https://docs.sourcegraph.com/admin/install/kubernetes).

## Step 1 — Install Docker

_If you already have Docker installed, you can [skip to the next step](#step-2--install-sourcegraph)._

On a Linux cloud server or local computer, you can install Docker via the command line as long as you are a user with super user privileges. We’ll go over how to install Docker across [Ubuntu and Debian](#ubuntu-and-debian), [Fedora](#fedora), and [CentOs](#centos) Linux distributions in this section. Skip down to the section that is relevant for the machine you’re using to install Sourcegraph.

### Ubuntu and Debian

Ensure that you have the [snap package manager](https://snapcraft.io/) installed by running the following commands in your terminal for **Ubuntu or Debian Linux**:

<Highlighter
input='sudo apt update
sudo apt install snapd
sudo snap install core'
language='shell'
/>

Once snap is fully installed, you can install Docker using snap.

<Highlighter
input='sudo snap install docker'
language='shell'
/>

Alternatively, you can install Docker through its packages available through the Docker installation page for [Ubuntu](https://docs.docker.com/engine/install/ubuntu/) or for [Debian](https://docs.docker.com/engine/install/debian/).

With Docker installed, you are ready to procceed to [Step 2](#step-2--install-sourcegraph).

### Fedora

If you are using **Fedora**, ensure that snap is installed by running the following command:

<Highlighter
input='sudo dnf install snapd'
language='shell'
/>

Once you confirm that snap is fully installed, you can install Docker using snap.

<Highlighter
input='sudo snap install docker'
language='shell'
/>

Alternatively, you can install Docker through its packages available through the [Docker installation page for Fedora](https://docs.docker.com/engine/install/fedora/).

With Docker installed, you are ready to procceed to [Step 2](#step-2--install-sourcegraph).

### CentOs

If you are using **CentOs**, you can ensure that snap is installed and ready by running the following commands. For more guidance on these commands, please visit snap’s [official documentation](https://snapcraft.io/install/docker/centos).

<Highlighter
input={`sudo yum install epel-release
sudo yum install snapd
sudo systemctl enable --now snapd.socket`}
language='shell'
/>

Once you confirm that snap is fully installed, you can install Docker using snap.

<Highlighter
input='sudo snap install docker'
language='shell'
/>

Alternatively, you can install Docker through its packages available through the [Docker installation page for CentOs](https://docs.docker.com/engine/install/centos/).

With Docker installed, you are ready to install Sourcegraph.

## Step 2 — Install Sourcegraph

Depending on the machine that you have, you’ll be able to run a Docker command to install Sourcegraph and get up and running with code search on your local repositories and beyond.

We’ll go over two approaches below; the first which is recommended for [Linux running on a local machine](#locally-on-linux), the second option is recommended for [Linux cloud servers](#on-a-linux-server).

### Locally on Linux

On local machines that use a Linux distribution, you’ll be able to install Sourcegraph by running the following Docker command.

<Highlighter
input='docker run --publish 7080:7080 --publish 127.0.0.1:3370:3370 \  
--rm --volume ~/.sourcegraph/config:/etc/sourcegraph \  
--volume ~/.sourcegraph/data:/var/opt/sourcegraph \  
sourcegraph/server:3.30.4'
language='shell'
/>

This command is telling your computer to install and run Sourcegraph in port 7080 of your localhost (127.0.0.1) and is calling up the relevant files from the Docker image of Sourcegraph. It is also setting up a store for your Sourcegraph data.

Once you run the command, you’ll receive some output indicating that Sourcegraph is getting set up. Sourcegraph will be ready when you receive the output similar to the following:

<Highlighter
input='✱ Sourcegraph is ready at: http://127.0.0.1:7080'
language='shell'
/>

At this point, you’ll be able to move onto the next section to verify your installation.

### On a Linux server

On a Linux cloud server, you can run the following command to keep your instance of Sourcegraph up and running even after you close your Terminal connection to the server.

<Highlighter
input='docker run -d --publish 80:7080 --publish 443:7443 \
--restart unless-stopped \
--volume /root/.sourcegraph/config:/etc/sourcegraph \
--volume /root/.sourcegraph/data:/var/opt/sourcegraph \
sourcegraph/server:3.30.4'
language='shell'
/>

This command is telling your server to install and run Sourcegraph in port 7080 of your server and is calling up the relevant files from the Docker image of Sourcegraph. It is also setting up a store for your Sourcegraph data.

Once you run the command, you’ll receive some output indicating that Sourcegraph is getting set up. Sourcegraph will be ready when you receive output similar to the following. Your server’s IP address will display in place of `your-server-ip-address`.

<Highlighter
input='✱ Sourcegraph is ready at: http://your-server-ip-address:7080'
language='shell'
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

Congratulations! You have installed Sourcegraph with Docker on your Linux machine and have created an account so that you can begin using Sourcegraph to search all of the code that is important to you.

If you have installed Sourcegraph on a Linux server rather than a local machine, you may want to secure your installation as a next step (to access Sourcegraph via `https` rather than `http`), which you can read more about through our official [Sourcegraph docs](https://docs.sourcegraph.com/admin/http_https_configuration#sourcegraph-single-instance-docker).

Once you have Sourcegraph up and running, and your code repositories available to Sourcegraph, you can check our overview video on the [three ways to search with Sourcegraph](/three-ways-to-search-code-with-sourcegraph) so that you can more effectively search your code.

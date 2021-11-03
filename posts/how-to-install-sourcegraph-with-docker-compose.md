---
title: How to install Sourcegraph with Docker Compose
tags: [Sourcegraph, Docker, Linux, installation, tutorial]
publicationDate: September 30, 2021
description: Install a self-hosted Sourcegraph instance for a production environment to search all of your code
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-10.png
imageAlt: Sourcegraph Learn
browserTitle: Install self-hosted Sourcegraph for a production environment
type: posts
---

Sourcegraph is a universal code search tool, allowing you to search across your own code or public open source repositories that you add to your instance. You can begin experimenting with Sourcegraph through [Sourcegraph Cloud](https://sourcegraph.com/search), which is available in-browser and has millions of open source repositories indexed.

Once you know that you would like to self-host your own instance of Sourcegraph to search across your local or cloud repositories, and you want it to be suitable for a production environment, you can follow along with this tutorial that will set you up with a Sourcegraph instance on Docker Compose. This tutorial will assume *nix commands on the command line. 

If, instead, you would like to perform a quick install of Sourcegraph with Docker, which is suitable for testing environments, you can do so by following one of our tutorials for [Linux](https://learn.sourcegraph.com/how-to-install-sourcegraph-on-linux-with-docker), [cloud Linux](https://learn.sourcegraph.com/how-to-install-sourcegraph-with-docker-on-a-linux-cloud-server), [macOS](https://learn.sourcegraph.com/how-to-install-sourcegraph-on-mac-with-docker), or [Windows](https://learn.sourcegraph.com/how-to-install-sourcegraph-on-windows-with-docker).

Installing Sourcegraph into your production environment can allow you to use advanced features of Sourcegraph. You can also review our [installation documentation](https://docs.sourcegraph.com/admin/install).

## Prerequisites and estimating your setup needs

To install Sourcegraph with Docker Compose, your setup will need to meet certain requirements. We recommend following the official documentation to install [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/).

* You have [Docker](https://docs.docker.com/engine/install/) installed, and it’s v20.10.0 or above. 
* You have [Docker Compose](https://docs.docker.com/compose/install/) installed, and it’s v1.22.0 or above.
* Your machine or server has an estimated minimum number of 8 CPU cores.

Use the [resource estimator](https://docs.sourcegraph.com/admin/install/resource_estimator) to ensure that your machine meets the minimum requirements for your Sourcegraph instance needs based on the number of code repositories and number of users you are planning to set up on your instance. 

## Step 1 — Fork the reference repository

First, you will need to create a fork of the [sourcegraph/deploy-sourcegraph-docker reference repository](https://github.com/sourcegraph/deploy-sourcegraph-docker/).

You can fork the reference repository from GitHub’s user interface. Having a GitHub account is required when forking repositories that are hosted on GitHub.

To fork the repository using GitHub’s user interface, navigate to the [reference repository](https://github.com/sourcegraph/deploy-sourcegraph-docker/). On the right-hand side of the top navigation pane, you will find a **Fork** button.

![GitHub interface showing the Fork button on the Deploy Sourcegraph with Docker repo](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/fork-deploy-sourcegraph-docker-repo.png)

When you click on the **Fork** button, GitHub will create a fork of the repository for you.

With the forked repository, you can make customizations that are tailored to your organization’s needs. The original repository will remain as a source of truth when you need to make updates or upgrades to your Sourcegraph instance.


## Step 2 — Clone the forked repository

After forking the reference repository, you may want to create a directory or move to a directory on your machine or host where the fork will live. Clone the forked repository into this directory, which is called the configuration directory.

For our example, we’ll move into a temporary directory, `~/tmp`.

<Highlighter
input='cd ~/tmp'
language='bash'
/>

Enter the following command on your terminal to clone your forked repository. Be sure to substitute _your username_ where we have `your-username` written out in the URL.

<Highlighter
input='git clone https://github.com/your_username/deploy-sourcegraph-docker/'
language='bash'
/>

You should receive output similar to the following:

<Highlighter
input={`Cloning into 'deploy-sourcegraph-docker'...
...
Resolving deltas: 100% (4418/4418), done.`}
language='bash'
/>

Once you clone the Git repository, all the relevant code lives locally on your machine or server. You now have a copy of the reference repository that you can configure to suit your needs.


## Step 3 — Add the reference repository as upstream remote

A connection to the upstream repository you forked in [Step 1](#step-1--fork-the-reference-repository) gives you the necessary connection to pull from the reference as needed. Remote repositories are versions of your project that are hosted online, in this case it is the main reference project maintained by Sourcegraph.

To set up your reference to the remote upstream repository, you’ll first need to move into the directory of your cloned repo. For our example, the path is the following, but be sure to use the path relevant to your machine and file structure. 

<Highlighter
input='cd ~/tmp/deploy-sourcegraph-docker/'
language='bash'
/>

From within the `/deploy-sourcegraph-docker` directory, use the following command that passes in the URL of the `sourcegraph/deploy-sourcegraph-docker` project to set up the remote upstream. 

<Highlighter
input='git remote add upstream https://github.com/sourcegraph/deploy-sourcegraph-docker'
language='bash'
/>


If everything was successful, you will be at a new line of your terminal, with no other output.

Because you have pull access, you can keep up with changes on the reference repository by pulling the main branch whenever there is an update.

## Step 4 — Install Sourcegraph on your host

Move to the configuration directory (the file path on your machine that contains the clone to the fork you created), and navigate to the Docker Compose folder.

<Highlighter
input='cd ~/tmp/deploy-sourcegraph-docker/docker-compose'
language='bash'
/>

Within this directory, you can spin up the Sourcegraph instance on your host with Docker Compose. Here, `up -d` refers to starting the containers in the background and leaving them running; the `-d` flag refers to running the containers in a **d**etached mode.

<Highlighter
input='sudo docker-compose up -d'
language='bash'
/>

Once you run this, you will know that your installation was successful when you receive output that generates `done` messaging, and output that notifies you that Sourcegraph is ready. This will display with your server or localhost IP address and the relevant port.


<Highlighter
input='Sourcegraph is ready at: [an-address-and-port-created-by-your-server]'
language='bash'
/>

You can access Sourcegraph using the relevant IP address and port number. 

## Step 5 — Check that the service is healthy

After receiving the message that Sourcegraph is ready, you will need to check that the service is healthy by running the Docker process command or `docker ps` for short.

Sometimes, a service may be running but cannot respond to requests because a required step is not complete. Running a health check lets you know the actual state of the service.

<Highlighter
input='docker ps'
language='bash'
/>

The instance is healthy when the `sourcegraph-frontend-0` image is running and is marked as “healthy” on your host’s terminal.

<Highlighter
input='[your-container-id]  sourcegraph-frontend-0  "/sbin/tini -- /usr/…"  Up 20 minutes(healthy)'
language='bash'
/>

A service will be marked as healthy if it has fulfilled all the checks that it needs to run.

## Step 6 — Access Sourcegraph with a browser

Copy the IP address created by your server and access it with a web browser of your choice. The link leads to a page that lets you create an account to start using Sourcegraph.

![Sourcegraph signup landing page](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-docker-compose-signup.png)

After successfully installing Sourcegraph with Docker Compose, you can [create a Sourcegraph Account](https://learn.sourcegraph.com/how-to-create-a-self-hosted-sourcegraph-account).

## Next steps

Now that you have Sourcegraph installed and you also have a Sourcegraph account, you can check out our [Sourcegraph resources](https://learn.sourcegraph.com/tags/sourcegraph) to find helpful guides on how to use Sourcegraph effectively. 

You can also learn more about Sourcegraph by reviewing our product [docs](https://docs.sourcegraph.com/).

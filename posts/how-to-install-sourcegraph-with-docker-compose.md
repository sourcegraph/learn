# How to Install Sourcegraph with Docker Compose

In production environments, it is [recommended](https://docs.sourcegraph.com/admin/install) to install Sourcegraph with Docker Compose or Kubernetes.

If you are not sure what version of Sourcegraph to install, check our product [docs](https://docs.sourcegraph.com/) to determine what version is best for you. Alternatively, you can use [Sourcegraph Cloud](https://sourcegraph.com/) if you are just getting started with Sourcegraph and would like to test it out.

This guide walks you through an on-premise installation of Sourcegraph using Docker Compose.

## Estimating your setup needs

To install Sourcegraph with Docker Compose, your setup will need to meet certain requirements.

Use our resource estimator to ensure that your machine meets the [minimum requirements](https://docs.sourcegraph.com/admin/install/resource_estimator) for installing Sourcegraph with Docker Compose.

## Step 1 — Fork the reference repository

Forking the repository allows you to make customizations that are tailored to your organization’s needs. That way, the original repository serves as a source of truth when you need to make updates or upgrades to your Sourcegraph’s instance.

You can fork the reference repository from GitHub’s user interface. Having a GitHub account is required when forking repositories that are hosted on GitHub.

To fork the repository using GitHub’s user interface, navigate to the [reference repository](https://github.com/sourcegraph/deploy-sourcegraph-docker/). On the right hand side of the top navigation pane, you will find a `fork` button.

![Fork a repository on GitHub](/tutorial-images/fork-a-repository-on-github.png)

When you click on the `fork` button, GitHub will create a fork of the repository for you.

## Step 2 — Clone the forked repository

After forking the reference repository, you may want to create a directory or move to a directory on your machine or host, where you will want the fork to live. Clone the forked repository into the directory you just created or any directory you choose.
This directory is called the configuration directory.

Enter the following command on your terminal to clone your forked repository:

```
git clone https://github.com/your_username/deploy-sourcegraph-docker/
```

Cloning the repository allows you to have the code on your machine. It also allows you to have a copy of the reference repository that you can configure to suit your needs.

## Step 3 — Add the reference repository as upstream remote

```
git remote add upstream https://github.com/sourcegraph/deploy-sourcegraph-docker
```

An upstream gives you access to pull from a reference repository from where you have created a fork. Because you have pull access, you can keep up with changes on the reference repository by pulling the main branch whenever there is an update.

## Step 4 — Install Sourcegraph on your host

Move to the configuration directory (the file path on your machine that contains the clone to the fork you created) and navigate to the Docker Compose folder.

```
cd path-to-the-cloned-fork/docker-compose
```

For example:
```
cd /Users/[your-username]/Documents/Projects/deploy-sourcegraph-docker/docker-compose
```

## Step 4 — Spin up the Sourcegraph instance

To spin up the Sourcegraph instance on your host, use the following command:

```
docker-compose up -d
```

A successful installation will include a message that tells you that Sourcegraph is ready. Along with the message, you will find an IP address and port that is created by your server.

```
Sourcegraph is ready at: [an-address-and-port-created-by-your-server]
```

![Sourcegraph Docker Compose Terminal](/tutorial-images/sourcegraph-docker-compose-terminal.png)

You can access Sourcegraph using the IP address and port number.

## Step 5 — Check that the service is healthy

Check that the service is healthy by running the Docker process command or `docker ps` for short.

```
docker ps
```

The instance is healthy when the `sourcegraph-frontend-0` image is up and running on your host.

```
[your-container-id]  sourcegraph-frontend-0  "/sbin/tini -- /usr/…"  Up 20 minutes(healthy)
```

## Step 6 — Access Sourcegraph with a browser

Copy the `ip` address created by your server and access it with a web browser of your choice. The link leads to a page that lets you create an account to start using Sourcegraph.

![Sourcegraph sign up and login page](/tutorial-images/sourcegraph-login-page.png)

After a successful installation of Sourcegraph with Docker Compose, you can [create a Sourcegraph Account](https://learn.sourcegraph.com/how-to-create-a-sourcegraph-account ).

## Next Steps:
Now that you have Sourcegraph installed and you also have a Sourcegraph account, you can start testing out Sourcegraph commands by looking at our [cheat sheet](https://learn.sourcegraph.com/sourcegraph-cheat-sheet), if you are not already familiar with Sourcegraph’s search commands.


Alternatively, you may want to [add your private repositories to Sourcegraph](https://learn.sourcegraph.com/how-to-add-private-code-repositories-to-sourcegraph).

Our tutorials [docs](https://learn.sourcegraph.com/) provide useful guides on how to use Sourcegraph effectively. You can learn more about Sourcegraph by looking at our product [docs](https://docs.sourcegraph.com/).

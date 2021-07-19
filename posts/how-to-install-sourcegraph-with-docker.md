---
title: How To Install Sourcegraph with Docker
author: lisa-tagliaferri
tags: [tutorial, Docker, installation, Sourcegraph]
description: Learn how to install Sourcegraph on your own machine with Docker
image: /headers/sourcegraph-learn-header-7.svg
socialImage: /headers/sourcegraph-learn-header-7.png
---

Sourcegraph is a tool that can allow you to search all the code that is important to you, from your own local repositories, to the software you build together with a team, to all the code that is available through open source projects. You can get started using Sourcegraph by using [Sourcegraph Cloud](https://sourcegraph.com/search) with your preferred web browser, or you may want to install Sourcegraph locally or on a cloud server or virtual machine.

By installing Sourcegraph on your own hardware, you’ll be able to manage your own instance of Sourcegraph, providing you with complete control over who has access to your code. Your own installation will also allow you to connect your local (or server-side) code as well as any relevant Git servers. Git servers that you can connect to include GitHub, GitHub Enterprise, GitLab, Bitbucket, AWS CodeCommit, Perforce, and more.

We’ll go through how to install Sourcegraph on your local machine with Docker so that you can begin to use Sourcegraph on all of your code. This installation guide is appropriate for local testing and should be quick to set up. If you would like to use Sourcegraph in a production environment, you should follow our documentation on installing Sourcegraph with [Docker Compose](https://docs.sourcegraph.com/admin/install/docker-compose) on a single node, or on a [Kubernetes cluster](https://docs.sourcegraph.com/admin/install/kubernetes).

## Step 1 — Install Docker

_If you already have Docker installed, you can [skip to the next step](/posts/how-to-install-sourcegraph-with-docker#step-2--install-sourcegraph)._

We’ll go over how to install Docker across [Linux](/posts/how-to-install-sourcegraph-with-docker#on-linux), [macOS](/posts/how-to-install-sourcegraph-with-docker#on-macos), and [Windows](/posts/how-to-install-sourcegraph-with-docker#on-windows) operating systems in this section. Skip down to the section that is relevant for the machine you’re using to install Sourcegraph.

### On Linux

On a Linux cloud server or local computer, you can install Docker via the command line as long as you are a user with super user privileges.

Ensure that you have the [snap package manager](https://snapcraft.io/) installed by running the following commands in your terminal for **Ubuntu or Debian Linux**:

```
sudo apt update
sudo apt install snapd
sudo snap install core
```

If you are using **Fedora**, ensure that snap is installed by running the following command:

```
sudo dnf install snapd
```

If you are using **CentOs**, you can ensure that snap is installed and ready by running the following commands. For more guidance on these commands, please visit snap’s [official documentation](https://snapcraft.io/install/docker/centos).

```
sudo yum install epel-release
sudo yum install snapd
sudo systemctl enable --now snapd.socket
```

Once snap is fully installed, you can install Docker using snap.

```
sudo snap install docker
```

Alternatively, you can install Docker through its `.deb` or `.rpm` packages through the [Docker installation page](https://docs.docker.com/engine/install/).

With Docker installed, you can continue to [Step 2](/posts/how-to-install-sourcegraph-with-docker#step-2--install-sourcegraph).

### On macOS

If you’re on a macOS machine, you can install Docker from the [Docker installation page for Mac](https://docs.docker.com/docker-for-mac/install/). You’ll need to ensure that you are installing the right version for your machine’s respective chip.

You can determine what chip you have by navigating to the Apple menu in the top left corner of your screen, selecting `About This Mac` and reviewing what is displayed next to `Chip` in the window that appears.

Once you know which is the appropriate version to install, select either `Mac with Intel chip` for any macOS machine that is on an Intel chip, or `Mac with Apple chip` for any macOS machine that has an Apple M1 chip. Then follow the guidance from the Docker installation to complete the process.

With Docker fully installed, you’ll be ready to move onto the next section of [installing Sourcegraph](/posts/how-to-install-sourcegraph-with-docker#step-2--install-sourcegraph).

### On Windows

If you’re on a Windows machine, you can install Docker from the [Docker installation page for Windows](https://docs.docker.com/docker-for-windows/install/). Follow the guidance from the Docker installation.

With Docker fully installed, you’ll be ready to move onto the section below to install Sourcegraph. Please note that Sourcegraph can only be tested on Windows 10 as data will not be retained after server restarts, due to a limitation of Docker on Windows.

## Step 2 — Install Sourcegraph

Depending on the machine that you have, you’ll be able to run a Docker command to install Sourcegraph and get up and running with code search on your local repositories and beyond.

We’ll go over four approaches below, the first which is recommended for many local machine use cases, inclusive of [Linux machines and macOS machines with Intel chips](/posts/how-to-install-sourcegraph-with-docker#locally-on-linux-or-on-macos-with-intel-chip). The second option is recommended for [Linux cloud servers](/posts/how-to-install-sourcegraph-with-docker#on-a-linux-server). The third option is for [macOS machines with Apple M1 chips](/posts/how-to-install-sourcegraph-with-docker#on-an-apple-m1-chip-on-macos). Finally, the fourth option is to be able to test Sourcegraph on [Windows machines](/posts/how-to-install-sourcegraph-with-docker#on-windows-1).

### Locally on Linux or on macOs with Intel Chip

On local machines that use a Linux distribution or macOS on an Intel chip, you’ll be able to install Sourcegraph by running the following Docker command.

```
docker run --publish 7080:7080 --publish 127.0.0.1:3370:3370 \
--rm --volume ~/.sourcegraph/config:/etc/sourcegraph \
--volume ~/.sourcegraph/data:/var/opt/sourcegraph \
sourcegraph/server:3.29.0
```

This command is telling your computer to install and run Sourcegraph in port 7080 of your localhost (127.0.0.1) and is calling up the relevant files from the Docker image of Sourcegraph. It is also setting up a store for your Sourcegraph data.

Once you run the command, you’ll receive some output indicating that Sourcegraph is getting set up. Sourcegraph will be ready when you receive the output similar to the following:

```
✱ Sourcegraph is ready at: http://127.0.0.1:7080
```

At this point, you’ll be able to move onto the next section to verify your installation.

### On a Linux Server

On a Linux cloud server, you can run the following command to keep your instance of Sourcegraph up and running even after you close your Terminal connection to the server.

```
docker run -d --publish 80:7080 --publish 443:7443 \
--restart unless-stopped \
--volume /root/.sourcegraph/config:/etc/sourcegraph \
--volume /root/.sourcegraph/data:/var/opt/sourcegraph \
sourcegraph/server:3.29.0
```

This command is telling your server to install and run Sourcegraph in port 7080 of your server and is calling up the relevant files from the Docker image of Sourcegraph. It is also setting up a store for your Sourcegraph data.

Once you run the command, you’ll receive some output indicating that Sourcegraph is getting set up. Sourcegraph will be ready when you receive output similar to the following. Your server’s IP address will display in place of `your-server-ip-address`.

```
✱ Sourcegraph is ready at: http://your-server-ip-address:7080
```

At this point, you’ll be able to move onto the next section to verify your installation.

### On an Apple M1 chip on macOS

On a macOS machine with an Apple M1 chip, you’ll need to add an extra argument to your Docker command so that the platform does not interfere with the installation and running of Sourcegraph. Run the following command with the `--platform linux/amd64` argument as demonstrated below.

```
docker run \
--publish 7080:7080 --publish 127.0.0.1:3370:3370 \
--platform linux/amd64 \
--rm --volume ~/.sourcegraph/config:/etc/sourcegraph \
--volume ~/.sourcegraph/data:/var/opt/sourcegraph \
sourcegraph/server:3.29.0
```

This command is telling your computer to install and run Sourcegraph in port 7080 of your localhost (127.0.0.1) and is calling up the relevant files from the Docker image of Sourcegraph. It is also setting up a store for your Sourcegraph data.

Once you run the command, you’ll receive some output indicating that Sourcegraph is getting set up. Sourcegraph will be ready when you receive output similar to the following:

```
✱ Sourcegraph is ready at: http://127.0.0.1:7080
```

At this point, you’ll be able to move onto the next section to verify your installation.

### On Windows

Due to limitations with Docker for Windows, Sourcegraph can only be tested on Windows as data cannot persist on a Windows installation. Due to that, we’ll remove the `--volume` arguments from the Docker commands above, and run the following command instead.

```
docker run --publish 7080:7080 --publish 127.0.0.1:3370:3370 `
--rm sourcegraph/server:3.29.0
```

_The above command with backtick assumes use of PowerShell. If you're using the Windows Command Prompt, substitute `^` as below._

```
docker run --publish 7080:7080 --publish 127.0.0.1:3370:3370 ^
--rm sourcegraph/server:3.29.0
```

This command is telling your computer to install and run Sourcegraph in port 7080 of your localhost (127.0.0.1) and is calling up the relevant files from the Docker image of Sourcegraph.

Once you run the command, you’ll receive some output indicating that Sourcegraph is getting set up. Sourcegraph will be ready when you receive output similar to the following:

```
✱ Sourcegraph is ready at: http://127.0.0.1:7080
```

At this point, you’ll be able to move onto the next section to verify your installation.

## Step 3 — Verify the Installation

When Sourcegraph is fully installed and ready to be used, the Sourcegraph logo will appear and you should access the URL that is indicated in the Terminal output.

![Installation complete verification on command line](/tutorial-images/sourcegraph-logo-terminal.png)

Open a browser and go to the URL indicated in the output. Keep in mind that if you are using a local machine, you’ll be directed to the localhost, but on a server you should go to the IP address of that server.

The first time you open Sourcegraph, the page that will be displayed will be the page to setup your administrative account.

![Sourcegraph create account and login page](/tutorial-images/sourcegraph-login-page.png)

You can create the account now. This account will be tied to your own instance of Sourcegraph.

Once you set up your account, you’ll be able to add repositories and set up your preferences and configuration.

## Next Steps

Congratulations! You have installed Sourcegraph with Docker and have created an account so that you can begin using Sourcegraph to search all of the code that is important to you.

If you have installed Sourcegraph on a Linux server rather than a local machine, you may want to secure your installation as a next step (to access Sourcegraph via `https` rather than `http`), which you can read more about through our official [Sourcegraph docs](https://docs.sourcegraph.com/admin/http_https_configuration#sourcegraph-single-instance-docker).

Once you have Sourcegraph up and running, and your code repositories available to Sourcegraph, you can check our overview video on the [three ways to search with Sourcegraph](https://learn.sourcegraph.com/posts/three-ways-to-search-video) so that you can more effectively search your code.

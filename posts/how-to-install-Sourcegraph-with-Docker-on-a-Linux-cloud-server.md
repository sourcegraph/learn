---
title: Video — How to install Sourcegraph with Docker on a Linux cloud server
author: lisa-tagliaferri
tags: [video, Sourcegraph, Docker, Linux, installation]
description: Install Sourcegraph onto a DigitalOcean Ubuntu cloud server with Docker.
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/add-oss-to-sourcegraph-cloud-screengrab.jpg
imageAlt: Demo of how to add install Sourcegraph with Docker on a Linux server
alternateTitle: Test a Sourcegraph installation with Docker on DigitalOcean to search your code
type: posts
---

<EmbeddedYoutubeVideo id="u_SmtOejFkg" />

## Transcript

Hi, I’m Lisa, Director of Developer Education at Sourcegraph, and I’m going to walk you through installing an instance of Sourcegraph on a Linux Ubuntu 20.04 cloud server. We’ll be using a [DigitalOcean Droplet](https://www.digitalocean.com/) with the recommended 4GB of RAM and 2 CPUs for this demo.

Sourcegraph is a tool that can allow you to search the code that is important to you. You can try out [Sourcegraph cloud](https://sourcegraph.com) on the web to search through open source repositories right now. In this video, we’ll discuss an installation instead. If you would like to use Sourcegraph to access local code, server-side code, or code from several different code hosts, an instance like this may be the right fit for you. 

Installing Sourcegraph with Docker is appropriate for testing and fairly quick to set up. If you would like to use Sourcegraph in a production environment, you should follow our documentation on installing [Sourcegraph with Docker Compose](https://docs.sourcegraph.com/admin/install/docker-compose) on a single node, or on a [Kubernetes cluster](https://docs.sourcegraph.com/admin/install/kubernetes). Let’s get started.

### Server setup

I set up this DigitalOcean Droplet with a [non-root sudo user](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04), Sammy. First, I want to make sure that everything is up to date by running the following command. 

```bash
sudo apt update
```

I’ll enter the password when prompted to use my sudo user. 

Now we know everything is up to date, and I can move ahead to installing Docker. I am going to use the snap package manager, so let’s make sure that’s installed. 

```bash
sudo apt install snapd
```

With that installed and set up, I want to make sure I have the core libraries I need, so I’ll run sudo snap install core.

```bash
sudo snap install core
```

Now that snap is installed, we’ll install Docker using snap.
```bash
sudo snap install docker
```

Now that we have Docker installed, we can move on to installing Sourcegraph with Docker.
### Installing Sourcegraph
We have a multi-line Docker command that we need to run, and we’ll demonstrate how to do that here. We’ll be using the sudo command and it’s going to take a little bit. 
We’ll run the following Docker run command:

```bash
sudo docker run -d --publish 80:7080 --publish 443:7443 \
--restart unless-stopped \
--volume /root/.sourcegraph/config:/etc/sourcegraph \
--volume /root/.sourcegraph/data:/var/opt/sourcegraph \
sourcegraph/server:3.30.4
```

This command is telling your server to install and run Sourcegraph, binding port 7080 to TCP port 80 of your server; it’s calling up the relevant files from the Docker image of Sourcegraph. Since this is a cloud server, we can keep our instance of Sourcegraph up and running even after closing our Terminal connection to the server, and that was one of the details we pass to this command. It is also setting up a store for your Sourcegraph data.
### Verify installation
With our installation complete, we can navigate to our web browser of choice and enter the IP address of the server with port 80. We’ll press enter and get the feedback that the installation is complete. We have validated that we have installed Sourcegraph with Docker on this Ubuntu server. At this point, you can create your account. 
Now we have verified that everything is working. For next steps, head on over to [Sourcegraph Learn](https://learn.sourcegraph.com). Or go ahead to read through our [documentation](https://docs.sourcegraph.com) to read more about Sourcegraph, the different installation methods, and how you can effectively search all of your code. Happy coding and happy searching!
__For a longer-form written tutorial of this guide, read “[How to install Sourcegraph on Linux with Docker](https://learn.sourcegraph.com/how-to-install-sourcegraph-on-linux-with-docker).”__

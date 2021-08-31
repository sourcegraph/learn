---
title: How to create an account on self-hosted Sourcegraph.
tags: [tutorial, Sourcegraph Cloud, Sourcegraph]
author: oluebube-princess-egbuna
description: Learn how to create an account on self-hosted instances of Sourcegraph.
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-4.png
imageAlt: Sourcegraph Learn
alternativeTitle: Signing up on Sourcegraph that is installed on your host with Docker, Docker Compose or Kubernetes.
type: posts
---

Sourcegraph is a tool that allows you to search code that is important to you across all repositories. These repositories can have code that is private to you or your team. They also include all open source repositories.

There are two versions of Sourcegraph, Sourcegraph cloud and an on-premises version.

On Sourcegraph cloud, you may not need to create an account to start testing out basic commands. There are cases, however, where you will need to create an account; you may want to save your search history or to work with your team’s instance of Sourcegraph.
If you are creating your own instance of Sourcegraph, you’ll need to create an account.

You can get started using Sourcegraph cloud by navigating to [sourcegraph.com](https://sourcegraph.com/) with your preferred web browser. Alternatively, you may want to install your own instance of Sourcegraph so you can search local code, or run advanced features like deployments or batch changes in production environments.

## Create an account on self-hosted Sourcegraph

Check our [tutorials](https://learn.sourcegraph.com/)  to find out how to install self hosted instances of Sourcegraph.

Whether you are doing an installation on a macOS, Windows, or Linux machine, you’ll know your installation was successful once you receive the Sourcegraph logo on the command line.

Along with the Sourcegraph logo, you will find a message that Sourcegraph is ready. You will also find an IP address created by your server, with which you can access Sourcegraph.

```
Sourcegraph is ready at: http://the-server-ip-address:7080
```

Using your preferred browser, you can navigate to the relevant IP address provided by your server. At this point, you should be at the sign up screen if you have not made an account already.

There is currently one way to create an account when you perform a self-installation of Sourcegraph. To create an account, you will have to provide an email address, create a username and also create a password.

### Create a Sourcegraph account with your email address

To create a Sourcegraph account by providing an email address, you need to make sure that the email address you will be using is valid. You will also need to ensure that that you have access to it. This is because after using an email to sign up, your account will be tied to that email address. If you need to recover your account, you will need access to this email to do so.

After you open the address provided by your server on your preferred web browser, you will find a form containing email, username and password fields with which you can create an account.

Enter the valid email address you want to use in the form input space labelled **Email**.

![Email field on Sourcegraph cloud sign up form](sourcegraph-cloud-signup-email-field.png)

An invalid email address will throw an error message and will not let you complete the account creation process.

![Email field error on Sourcegraph cloud sign up form](sourcegraph-cloud-email-field-error.png)

Choose a username that is unique. Every account on Sourcegraph is tied to a unique username.

Enter your preferred username in the form input section labelled **Username**.

![Username field on Sourcegraph cloud sign up form](username-field-sourcegraph-signup-form.png)

If the username you have chosen is taken or if you have used special characters while creating your username, you will find an error that indicates that the username is taken. When there is an error, you can modify your preferred username to continue.

![Username field error on Sourcegraph cloud sign up form](username-field-error-sourcegraph-signup-form.png)

Next, create a password. A password lets you add a layer of security to your account by preventing unauthorized access.

When creating a Sourcegraph account, your chosen password should be at least 12 characters to avoid having issues with creating a password. Enter your chosen password in the form input section labelled **Password** to create a password.

![Create a password on Sourcegraph](password-field-sourcegraph-signup-form.png)

After completing the three steps above completely, clicking on the **Register** button creates an account for you.

# Next steps

Now that you have created a Sourcegraph account, you can start using Sourcegraph to search all the code that is important to you by having a look at our [quick search guide](https://learn.sourcegraph.com/sourcegraph-cheat-sheet).

You may also want to check our video on the [three ways to search with Sourcegraph](http://learn.sourcegraph.com/three-ways-to-search-video) to have an insight into the different ways you can use Sourcegraph to search your code.

If you have installed your own instance of Sourcegraph and created an account and you want to upgrade to an enterprise version to allow your team to use more advanced code search features, you can look at our [docs](https://docs.sourcegraph.com) to help you get started.

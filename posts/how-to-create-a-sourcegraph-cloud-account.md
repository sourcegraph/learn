---
title: How to create an account on Sourcegraph cloud
tags: [tutorial, Sourcegraph Cloud, Sourcegraph]
author: oluebube-princess-egbuna
description: Learn how to create an account on Sourcegraph cloud to access advanced features of Sourcegraph.
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-2.png
imageAlt: Sourcegraph Learn
alternativeTitle: Signing up on Sourcegraph Cloud to access Sourcegraph's advanced features.
type: posts
---


Sourcegraph is a tool that allows you to search code that is important to you across all repositories. These repositories can have code that is private to you or your team. They also include all open source repositories.

There are two versions of Sourcegraph, Sourcegraph cloud and an on-premises version.

On Sourcegraph cloud, you may not need to create an account to start testing out basic commands. There are cases, however, where you will need to create an account; you may want to save your search history or to work with your team’s instance of Sourcegraph.
If you are creating your own instance of Sourcegraph, you’ll need to create an account.

You can get started using Sourcegraph cloud by navigating to [sourcegraph.com](https://sourcegraph.com/) with your preferred web browser. Alternatively, you may want to install your own instance of Sourcegraph so you can search local code, or run advanced features like deployments or batch changes in production environments.

## Creating an account on Sourcegraph cloud

This section will walk you through how to create an account on Sourcegraph cloud. Using your preferred browser, navigate to [Sourcegraph cloud](https://sourcegraph.com/search).

When the page is fully loaded, you’ll receive a page similar to the following, with Sourcegraph’s logo and a search bar:

![Sourcegraph cloud landing page](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-cloud-landing.png)

On the right hand side of the top navigation pane, there is a **Sign up** button that takes you to the [Sign up](https://sourcegraph.com/sign-up) page.

![Sourcegraph cloud sign up form](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-cloud-signup-landing.png)

Currently, there are three ways to sign up for Sourcegraph cloud. One of the options allows you to use your email address, along with a username and a password to create an account.

The other two sign up options allow you to optionally sign up using GitHub’s or GitLab’s authentication services, if you have an account with either of them.

### Create a Sourcegraph cloud account with GitHub

If you would like to use the GitHub's authentication service, you can do so at the  **Sign up** page of Sourcegraph cloud.

To create an account with GitHub, click on the **Continue with GitHub** button on the [Sign up](https://sourcegraph.com/sign-up) page. Clicking on the GitHub button will take you to GitHub’s login page if you are not already logged in.

![GitHub login page](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/github-login-to-access-sourcegraph.png)

Once you are logged in on GitHub,  you will receive  a page that requires you to authorize Sourcegraph. The authorization you will be giving to Sourcegraph from GitHub will allow Sourcegraph to use the GitHub data mentioned in the signup form for your account creation.

![Authorize Sourcegraph to access permitted data on GitHub](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/authorise-sourcegraph-on-github.png)

If you choose to authorize Sourcegraph, you will be redirected to Sourcegraph cloud’s welcome page.

By completing these steps, you have successfully created a Sourcegraph cloud account using GitHub.

### Create a Sourcegraph account with GitLab

If you have a GitLab account and would prefer to create a Sourcegraph account that is tied to your GitLab account, click on the **Continue with GitLab** button on Sourcegraph cloud’s [Sign up](https://sourcegraph.com/sign-up) page.

If you are not signed into your GitLab account, you will be redirected to log into GitLab to continue.

![GitLab Login page](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/gitlab-login.png)

If you are logged into GitLab, you will need to authorize Sourcegraph to create a Sourcegraph cloud account.

![Authorize Sourcegraph to access permitted data on GitLab](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/authorize-sourcegraph-on-gitlab.png)

Clicking on **Authorize**  will allow Sourcegraph to use the GitLab data mentioned in the signup form for your account creation.

### Create a Sourcegraph cloud account with your email address

To create a Sourcegraph account by providing an email address, you need to make sure that the email address you will be using is valid. You will also need to ensure that that you have access to it. This is because after using an email to sign up, your account will be tied to that email address. If you need to recover your account, you will need access to this email to do so.

On the **Sign up** page, there is a `continue with email` link below the **Continue with GitLab** button.
Clicking on the link takes you to a form with which you can create an account using an email address. Enter the valid email address you want to use in the form input space labelled **Email**.

![Email field on Sourcegraph cloud sign up form](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-cloud-signup-email-field.png)

An invalid email address will throw an error message and will not let you complete the account creation process.

![Email field error on Sourcegraph cloud sign up form](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-cloud-email-field-error.png)

Choose a username that is unique. Every account on Sourcegraph is tied to a unique username.

Enter your preferred username in the form input section labelled **Username**.

![Username field on Sourcegraph cloud sign up form](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/username-field-sourcegraph-signup-form.png)

If the username you have chosen is taken or if you have used special characters while creating your username, you will find an error that indicates that the username is taken. When there is an error, you can modify your preferred username to continue.

![Username field error on Sourcegraph cloud sign up form](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/username-field-error-sourcegraph-signup-form.png)

Next, create a password. A password lets you add a layer of security to your account by preventing unauthorized access.

When creating a Sourcegraph account, your chosen password should be at least 12 characters to avoid having issues with creating a password. Enter your chosen password in the form input section labelled **Password** to create a password.

![Create a password on Sourcegraph](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/password-field-sourcegraph-signup-form.png)

After completing the three steps above completely, clicking on the **Register** button creates an account for you.

### Security on Sourcegraph cloud
On Sourcegraph cloud, your private code is protected and no one has access to it. Sourcegraph uses the permissions on repositories from your GitHub and GitLab repositories to determine who has access to your code.

Sourcegraph does not also have access to your private repositories. Read more about Sourcegraph and privacy on our [privacy page](https://about.sourcegraph.com/privacy/).

# Next steps

Now that you have created a Sourcegraph account, you can start using Sourcegraph to search all the code that is important to you by having a look at our [quick search guide](https://learn.sourcegraph.com/sourcegraph-cheat-sheet).

You may also want to check our video on the [three ways to search with Sourcegraph](http://learn.sourcegraph.com/three-ways-to-search-video) to have an insight into the different ways you can use Sourcegraph to search your code.

If you have installed your own instance of Sourcegraph and created an account and you want to upgrade to an enterprise version to allow your team to use more advanced code search features, you can look at our [docs](https://docs.sourcegraph.com) to help you get started.

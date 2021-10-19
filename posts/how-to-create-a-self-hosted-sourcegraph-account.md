---
title: How to create a self-hosted Sourcegraph account
tags: [tutorial, Sourcegraph]
publicationDate: September 13, 2021
description: Create an account on self-hosted Sourcegraph to your code
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-05.png
imageAlt: Sourcegraph Learn
browserTitle: Search your code with a Sourcegraph account
type: posts
---

With a self-hosted instance of Sourcegraph, you can search your local code, and the code that you and your team collaborate on in repositories held within code hosts like GitHub and GitLab. 

In order to use a self-hosted instance of Sourcegraph, you’ll need to create an account. This tutorial will provide you with guidance on creating an account with Sourcegraph.

## Prerequisites

Before setting up an account on a self-hosted instance of Sourcegraph, you will need to set up your own instance of Sourcegraph, or be invited to join one. 

If you need to install and set up an instance of Sourcegraph, you can review our [installation guides on Sourcegraph Learn](https://learn.sourcegraph.com/tags/installation), or read through our [documentation on installation](https://docs.sourcegraph.com/admin/install). 

With access to a Sourcegraph instance, you can get started.

## Step 1 — Navigate to the URL of your instance of Sourcegraph

If you are invited to use an instance of Sourcegraph, ask an administrator to create an account for you, or set up a sign on process to access the instance.

If you have just set up your own instance of Sourcegraph, you should have received output on your terminal for the relevant IP address and port created to access Sourcegraph.

![Sourcegraph terminal output after installation](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-logo-terminal.png)

<Highlighter
input='Sourcegraph is ready at: http://the-server-ip-address:7080'
language='shell'
/>

Using your preferred browser, navigate to the relevant IP address or URL. At this point, you should be at the signup screen if you have not made an account already.

## Step 2 — Sign up with your email address

Once you have navigated to the IP address or URL of your Sourcegraph instance, you should be at the signup page if you don’t already have an account. 

![Sourcegraph self-hosted instance login page](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-login-page.png)

From this page, you’ll be able to sign up with your email address, then create a username and password. 

Note that if you have navigated to a Sourcegraph instance that you were not invited to, you will receive this page and will need to contact the administrator of the relevant instance.

![Sourcegraph instance login, need to contact site administrator if you don’t get the signup page](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-contact-site-admin.png)

You will need to use a valid email address that you can access. If you use an invalid email address, you will receive a descriptive error message to troubleshoot your account creation. Enter your email address in the **Email** field of the signup form. 

Once your email address is accepted, you can choose your preferred username in the form input section labeled **Username**. Only alphanumeric characters are permitted within the username.

Next, create a password. A password adds a layer of security to your account by preventing unauthorized access. Your chosen password should be at least 12 characters. Enter a secure password in the form input section labeled **Password**, and make a note of it.

After filling the form with a valid email address, username, and password, click on the button at the bottom of the form to create an account and continue.

## Step 3 — Verify that your account was created

Once you have created your account successfully, you will be taken to your account overview page. 

![Sourcegraph overview page after account creation](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-overview-page-after-account-creation.png)

From here, you can begin completing the onboarding process by adding repositories, searching your code, finding some references, and configuring SSO or adding teammates. You can review all of our [administration documentation](https://docs.sourcegraph.com/admin) to learn more.

## Next steps

Now that you have created a Sourcegraph account, you can start searching the code that is important to you.

For some introductory tips, check out our video on the [three ways to search with Sourcegraph](https://learn.sourcegraph.com/three-ways-to-search-code-with-sourcegraph). You can also review all of our [search tutorials](https://learn.sourcegraph.com/tags/search).

If you have installed your instance of Sourcegraph and created an account, and want to upgrade to an enterprise version to allow your team to use more advanced code search features, you can look at our [enterprise getting started guide](https://docs.sourcegraph.com/adopt/enterprise_getting_started_guide) to help you begin.

---
title: How To Add Open Source Software Projects to Sourcegraph
tags: [tutorial, search, Sourcegraph]
author: Lisa Tagliaferri
description: Learn how to add public, open source repositories to Sourcegraph.
alternateTitle: An additional seo title
image: /headers/sourcegraph-learn-header-4.svg
---

## Table of Contents

## Introduction

Sourcegraph is actively working to index open source software so that developers can search all of the code that they care about. Being able to search across public repositories can help you learn open source best practices, inspect the libraries you may have as dependencies on your projects, and provide you with real-world examples you can leverage while you’re programming.

This tutorial will guide you through how to add public, open source repositories from GitHub and GitLab to Sourcegraph so that these code bases are indexed by the platform. Once you have added and synched these public repositories, anyone using Sourcegraph Cloud will be able to see results from these projects when they search all the code that is available through Sourcegraph via its global context.

To add public repositories to Sourcegraph, you’ll need a free Sourcegraph account, which you can set up by following our documentation on [getting started with Sourcegraph](https://docs.sourcegraph.com/getting-started#how-do-i-start-using-sourcegraph).

## Step 1 — Access User Settings

Log into [Sourcegraph.com](https://sourcegraph.com) and click on your user icon on the top right corner of the page.

A drop-down menu will be displayed. From here, click on **Settings**.

![Sourcegraph home with user menu](/tutorial-images/sourcegraph-home-user-menu.png)

You’ll be taken to a page that indicates that you are in your settings with a header of **User Settings** displayed towards the top of the page, and a panel with options regarding your user account on the left hand side of the window.

## Step 2 — Add Repositories

From the panel on the left hand side of the interface, you can click on **Repositories** in order to be taken to the page where you can manage repositories. If you already have repositories added, you’ll need to click on the **Manage Repositories** button that is on this page in order to access this page.

![Sourcegraph manage repositories page](/tutorial-images/sourcegraph-manage-repositories.png)

Within the **Manage Repositories** page, you’ll be presented with a few options:

- In the **Your repositories** section, you can sync _your own_ public repositories using GitHub or GitLab.
- In the **Other public repositories** section, you can add any public repositories on GitHub and GitLab.

For now, we’ll focus on the second option, and click the checkbox next to `Sync specific public repositories by URL`. Choosing this option, you can add any public repositories of code from either GitHub or GitLab, whether you contribute to the project or not.

Once you have clicked the checkbox, a check mark sign will appear in the box, like so: &#9745;. At this point, a box will display, similar to the screenshot below.

![Sourcegraph other public repositories list](/tutorial-images/sourcegraph-other-public-repositories.png)

Within the box, you can type URLs of the public open source projects that you care about, one per line, with no separating characters other than the `ENTER` key.

The example above indexed the following two repositories, but you should choose repositories that are important to you, as these are already indexed:

- [github.com/prisma/women-world-wide](https://github.com/prisma/women-world-wide)
- [github.com/do-community/cloud_haiku](https://github.com/do-community/cloud_haiku)

When you are satisfied with the repositories that we have added for now (you can always add more later), you can click the **Save** button below.

## Step 3 — Search the repositories you added

At this point, you’re able to search the public repositories that you added. To verify this, you can scroll up to the top of the page where the Sourcegraph search bar is. To the left of the search bar it states `context:global`, which you can click on to limit it to your own username, to search the repositories you have added.

![Sourcegraph search with global context](/tutorial-images/sourcegraph-context.png)

From here, you can search a common keyword to ensure that the public code you added is available to you.

To ensure that the public code you just added is available to anyone using Sourcegraph (even those not logged in), you can open a new private or incognito window and search for a fairly unique string to the code bases you have just added. In this case, we’ll search for `women world wide` to ensure that the `prisma/women-world-wide` repository is indexed:

<SourcegraphSearch query="women world wide"/>

![Sourcegraph verification of OSS added](/tutorial-images/sourcegraph-anonymous-verification.png)

The screenshot above reveals output from the repository we just added to an anonymous user who is not logged in, which indicates that we have successfully added this public repository to Sourcegraph.

## Next Steps

From here, you may want to sync your GitHub or GitLab account to add your own public repositories or forks.

With open source projects that are important to you fully indexed by Sourcegraph, you will be able to use libraries and other dependencies more effectively, and be able to summon up effective examples quickly while you’re building.

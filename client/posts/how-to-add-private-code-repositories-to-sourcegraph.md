---
title: How to add private code repositories to Sourcegraph cloud
tags: [tutorial, security, Sourcegraph]
author: lisa-tagliaferri
publicationDate: August 19, 2021
description: Learn how to add private software repositories to Sourcegraph.
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-9.png
imageAlt: Sourcegraph Learn
alternateTitle: Adding private software repos to Sourcegraph cloud
type: posts
---

Sourcegraph is a universal code search tool that can help you search all the code that is meaningful to you, whether that code is public and open source, or private to you or your team. 

---
**NOTE**:

_Searching private code is currently in Public Beta._

---

This tutorial will guide you through adding private repositories from a code host to Sourcegraph cloud so that you can search within and across your private code. 

**Your security and privacy are very important to Sourcegraph; Sourcegraph will have no access to see your private code and will never sell your private code. Only _you_ and your teammates with access to a given private repository via your code host will be able to see the private code you have added to Sourcegraph.**

To add your private repositories to Sourcegraph, you’ll need a free Sourcegraph account, which you can set up by following our documentation on [getting started with Sourcegraph](https://docs.sourcegraph.com/getting-started#how-do-i-start-using-sourcegraph).

## Step 1 — Access user settings

Log into [Sourcegraph.com](https://sourcegraph.com) and click on your user icon on the top right corner of the page. 

A drop-down menu will be displayed. From here, click on **Settings**.

![Sourcegraph home with user menu](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-home-user-menu.png)



You’ll be taken to a page that indicates that you are in your settings with a header of **User Settings** displayed towards the top of the page, and a panel with options regarding your user account on the left hand side of the window.

## Step 2 — Add private repositories

From the panel on the left hand side of the interface, you can click on **Repositories** in order to be taken to the page where you can manage repositories. If you already have repositories added, you’ll need to click on the **Manage Repositories** button in order to access this page.

![Sourcegraph repositories section under settings](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-repositories-section.png)



If you have no repositories yet, click on **+ Add repositories**. You’ll be presented with the option to connect with a code host in the **Your repositories** section. Here, you can sync _your_ repositories using GitHub or GitLab. This will include both your public repositories and your private repositories.

We’ll focus on adding private repositories. Click the `Connect code hosts` link and add GitHub, GitLab or both in order to connect with your software repositories.

Once connected, you’ll be able to sync all of your repositories or selected ones. You’ll be presented with a display of the repositories you have access to via your codehost, and will be able to click on the checkboxes to the left of their names in order to add them to Sourcegraph.

Depending on the code repositories you have access to, you may receive a list of both private and public repos. The ones that are private will be labeled with a `Private` tag to the right of the repository name. 

If you are part of an organization on a code host, an administrator will need to grant you access to private repositories there. For more information about this, please review our [troubleshooting guidance](https://docs.sourcegraph.com/code_search/how-to/adding_repositories_to_cloud#troubleshooting). 

In the image below, the `medieval-data` repository is a private repository, as indicated by the `Private` label.

![Sourcegraph repo list showing private label](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-repo-list-private-label.png)

You can also search for repositories by name, using the search bar labeled `Search repositories…`. 

Click the checkbox next to the private repositories you would like to add. In the image above, the `medieval-data` repository represents a checked checkbox. Next, scroll down to press the `Save` button at the bottom of the page. 

Once Sourcegraph has fully saved your selections, you should receive an output page that confirms all of the repositories you have saved to your account, both public and private.

![Sourcegraph list displaying all saved repos](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-list-of-saved-repos.png)

The image above shows 2 private repositories labeled with the `Private` tag and 5 public open source repositories that were also saved. For guidance on how to add open source software to Sourcegraph, review our tutorial, [How To Add Open Source Software Projects to Sourcegraph](https://learn.sourcegraph.com/how-to-add-open-source-software-projects-to-sourcegraph).

## Step 3 — Search your private repositories

At this point, you’re able to search all the private repositories you have access to that you added. To verify this, you can scroll up to the top of the page where the Sourcegraph search bar is. To the left of the search bar it states `context:global`. Instead, click on your own username (`@your-username`) to limit the search to your own repositories. 

![Sourcegraph search with context choice](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-context.png)

Next, further limit the context down so that you are only searching your private repositories. You can do this with the `visibility` command set to `private`. 

Let’s perform a search for the term `html` with the context set to our own username, and the command `visibility:private`.

![Sourcegraph visibility private code search](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/sourcegraph-visibility-private-code-search.png)

The screenshot above reveals 15 results across the private repositories loaded into this Sourcegraph account.

You can perform a search similar to the one above with the Sourcegraph box below. Make sure you change the context to your own username:

<SourcegraphSearch query="visibility:private html"/>

Running a command like the one above across your own username will enable you to search across all of the private repositories that you have access to, providing you with all the benefits of universal code search.

## Next steps

You should now be able to search your private code in Sourcegraph cloud, a feature that is currently in public beta! If you had any issues in bringing in repositories, please review our [troubleshooting guidance](https://docs.sourcegraph.com/code_search/how-to/adding_repositories_to_cloud#troubleshooting). Note that organizations you are affiliated with will need to grant you relevant access. 

With your private code connected to Sourcegraph, you can learn more about how to search effectively by following along with our [Sourcegraph search series](https://learn.sourcegraph.com/how-to-search-code-with-sourcegraph-using-literal-patterns). You can also learn more about the product through reviewing Sourcegraph’s [product documentation](https://docs.sourcegraph.com/). 

For a video version of this tutorial, check out "[How to add private code repositories to Sourcegraph cloud (video)](/how-to-add-private-code-repositories-to-sourcegraph-video)."
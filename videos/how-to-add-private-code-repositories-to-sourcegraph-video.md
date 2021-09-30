---
title: How to add private code repositories to Sourcegraph cloud (video)
author: marek-zaluski
tags: [video, sourcegraph, cloud]
publicationDate: August 19, 2021
description: Learn about connecting your private code repositories to Sourcegraph cloud and searching your own code.
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/how-to-add-private-code-to-sourcegraph-thumbnail.jpg
imageAlt: Marek talking about adding private code repositories to Sourcegraph cloud.
alternateTitle: Connecting private software repos to your Sourcegraph cloud account
type: videos
---

<EmbeddedYoutubeVideo id="f4jEXHn3T74" />

## Transcript

Sourcegraph lets you search over the many repositories of public code that we're indexing on GitHub and GitLab.

If you want to search your own private repositories, you can now do that too by adding your private repositories to your Sourcegraph account.

---

**NOTE**:

_Searching private code is currently in Public Beta._

---

When you add private code to Sourcegraph, it remains private. So it won't show up in anybody else's search results, and you’ll only see it when you're logged in with your account, and no Sourcegraph employee can ever see any private code

My name is Marek, I'm an engineer at Sourcegraph, and I'm going to show you how you can add your own private repositories to Sourcegraph and start searching over your own code.

To start, open the menu in the top right, and go to “Repositories”. You can also find repositories on the “Settings” page. The “Repositories” page is where you can manage any synced repositories that you have. But first, we'll have to connect a code host. So I'll click on “Connect code hosts” to do that.

I happen to have all my repositories on GitHub, so that's the code host that I'd like to connect. I'll do that by clicking the connect button. In order to connect my GitHub account with Sourcegraph, I have to authorize by clicking on the green button here.

Now that I've connected GitHub, I can go to the next step and actually select the repositories that I want to add. And I'll do that by clicking add to your repositories. Now I want to select specific repositories to add. So I'll click on “Sync selected repositories”. And this will give me a list of my repositories that are available. I'm interested in two private repositories that I want to have in Sourcegraph, so I'll select these two. And then I'll click “Save” at the bottom.

Once my repositories are synced, I see them here on this page. I can now go back to the “Search” page to start doing some searches. On the search page, I can now search for code in my private repositories. I can specify that I'm interested in my own private repositories by switching the search context. The search context drop down on the left allows me to do that.

The `global` context is the default context. And that searches over all of the public repositories that have already been indexed by Sourcegraph. The context below is my own username. So, that refers to all the repositories that I've personally added to Sourcegraph. By selecting my username here, I'm going to switch to the context that searches specifically over the code that I added.

Now I can try this out with a search that includes a keyword that I know exists in my private repositories. On the results page, I'm getting results that are coming directly from these repositories that I've added. So now I know that I'm searching over my own private code. No one else will see these results because they are private, so I'm the only user who will be getting access to this repository.

I can click on search results and start browsing my codebase on Sourcegraph. This lets me use Sourcegraph features, like code intelligence when I hover over a token, and find references that show me where a particular symbol is being used.

If you want to learn more about the kinds of things that you can search for, and how to use different search features like filters and types of search, I invite you to take a look at the [documentation](https://docs.sourcegraph.com/) and learn more there.

_For a full tutorial, read "[How to add private code repositories to Sourcegraph cloud](/how-to-add-private-code-repositories-to-sourcegraph)."_
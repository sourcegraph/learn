---
title: How to add open source software to Sourcegraph cloud (video)
author: lisa-tagliaferri
tags: [video, Sourcegraph, open source]
publicationDate: August 30, 2021
description: Find out how to add open source repos to Sourcegraph cloud so you can search across all the code you care about.
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/install-sourcegraph-with-docker-screengrab.png
imageAlt: Demo of how to add open source repositories to Sourcegraph cloud for indexing
alternateTitle: Sourcegraph is indexing open source
type: posts
---

<EmbeddedYoutubeVideo id="_dGkagmwZqU" />

## Transcript

Reading and searching open source code really helps me understand my project dependencies, it helps me optimize my code, and it helps me figure out how to best implement a new feature. I also find that real-life examples in open source code help new developers learn effectively, and can encourage them to become contributors to open source, too!

I’m Lisa, Director of Developer Education at Sourcegraph, and the team here is working on indexing every open source repository on GitHub and GitLab with at least one star. You, too, can add open source repositories to Sourcegraph cloud to help others be able to search across many repos. I’ll walk you through the process.

### Manage repositories from your Sourcegraph cloud account

First, you’ll need to have an account on Sourcegraph cloud. Once you sign up or login, you’ll click on your user icon on the top right corner of the page. From the drop-down menu, click on **Repositories**. If you have repositories on your account already, click through to **Manage Repositories**.

From here you will be able to connect your own repositories to Sourcegraph, but for now, we’re going to scroll down to **Other public repositories**. We’ll click on the checkbox **Sync specific public repositories by URL**. 

### Add links to public repositories

In the box, you can add links to these public repos, whether you contribute to the project or not. These are probably open source projects that you care about. Add one URL per line with no separating characters other than the `ENTER` key.

I have identified two projects that I would like to have Sourcegraph index. One of them is this [Cloud Haiku repository](https://github.com/do-community/cloud_haiku), I’ll go through, copy, and paste. Then I’ll hit `ENTER` to start a new line — don’t put any characters in between. Then I’ll go through and copy paste for the second repository, which is an [archive of computational history](https://github.com/dhmit/computation_hist). When you are satisfied with the repositories that you have added, you can click the **Save** button below. You can always add more repos later!

### Verify that repositories have been added

Once I've clicked on **Save** I should see that these repositories are loaded in, preloaded to my account. And now I can actually check to make sure that Sourcegraph has in fact indexed these repositories by looking for a specific string that I know exists in one of them. So, first I’ll identify that string and share that with you really quickly.

In this Cloud Haiku repository, there is this line, “Like the octopuses’ minds” and a break. I suspect this is not a common line in open source repositories. So what I’m going to do next is open a private or incognito window and then I’m going to search Sourcegraph for this specific line to make sure that it is globally available. 

Now I have my private window, I’m going to go to sourcegraph.com and I’m going to search that line that I mentioned before. So this is “Like the octopuses’ minds” with a break. I am in the context:global search, I am not logged in, and I am going to hit the **Search**. So here we see that there are actually a few instances of this line, but it is limited to this repo. This repo is the one that I just added, so we know that that repository has been indexed by Sourcegraph. Now, even an anonymous user, not logged in, will be able to access the open source repos that I just added. 

Looking forward to seeing the open source repositories that you’ll add to Sourcegraph. Happy coding and happy searching through open source!

## Related links

To learn more about Sourcegraph cloud, check out our full written tutorial on [How to add open source software projects to Sourcegraph cloud](https://learn.sourcegraph.com/how-to-add-open-source-software-projects-to-sourcegraph-cloud) and our tutorial on [How to add private code repositories to Sourcegraph cloud](https://learn.sourcegraph.com/how-to-add-private-code-repositories-to-sourcegraph).

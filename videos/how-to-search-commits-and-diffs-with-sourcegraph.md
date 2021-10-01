---
title: How to search commits and diffs with Sourcegraph
tags: [video, search, sourcegraph]
publicationDate: September 17, 2021
description: Learn about using Sourcegraph to search commits and diffs.
author: marek-zaluski
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/commit-search-thumbnail.jpg
imageAlt: Searching commits and diffs.
type: videos
---

<EmbeddedYoutubeVideo id="w-RrDz9hyGI" />

## Transcript

Sourcegraph code search lets you search over public repositories or your own private code. It helps you answer questions that start with _where_. For example, where is this function used across all of our repositories? Where are we using these dependencies? Or, where are all the matches for this particular regular expression search?

But, what if you could search over space and time? Sourcegraph commit search helps you answer questions that start with _when_. When was a particular keyword mentioned in a commit message? When did we add or remove a specific string across our repositories? When did a commit or a diff contain an exact function name? 

My name is Marek. I'm an engineer at Sourcegraph. And I want to show you how to search over commits and diffs with Sourcegraph.

Suppose I'm looking for some particular commits that made some changes to our database logic. In this case, I will look for commits that have the keyword `database` in the commit message. To do this, I'll use the `type` filter to specify that I'm looking for commits, and I'll use the `message` filter to specify the keyword that I want to find, in this case, the keyword `database`. I'll also add a repository filter to narrow down the results.

In the results, I see a list of commits being returned. I can browse the commit messages and also see how long ago they were committed. If I click on a commit, I can also see the entire diff associated with it, so I can browse through the changes.

Now, it can be useful to narrow down my search if, for example, I know that the commits that I'm looking for occurred in a particular time range. I can add a `before` filter and provide a date and combine it with an `after` filter to specify a range of time. Now in some cases, I might be looking for commits from a particular author on my team. I can use the `author` filter and provide a name to narrow it down further.

I've shown you an example of searching over commit messages. But I can also search over the actual diff contents of every commit as well. This is helpful if I'm really looking for an exact string that was either added or removed in a particular change. To perform a diff search, I'll start with the `type:diff` filter. Now I can specify any search query that is supported by Sourcegraph. In this case, I could use a regular expression to find all matches that start with `user_`. And like before, I'll use a repository filter to narrow down the results.

In the results, I see matches in the diffs of commits that were made in this repository across time. Now, I'm seeing matches both in lines added and lines removed. Now I can improve my search. If I'm only looking for instances where this particular match was added, not removed in a commit, I can do that by adding a `select` filter, and providing `commits.diff.added` as the value. Now, I'm only getting results where this particular match was in the added content of a commit.

Other types of filters that are supported by regular Sourcegraph code search are supported in commit search as well, such as the language filter, or the file filter to help you narrow down by file path. With commit and diff search. Sourcegraph helps you find everything that you're looking for in your code, answering not just _where_ it is, but _when_ it happened. To learn more about the different ways that you can search with Sourcegraph check out the links below.

## Learn more

Browse our [learning resources about Sourcegraph search](/tags/search).

---
title: How to search code with Sourcegraph — a cheat sheet
author: oluebube-princess-egbuna
tags: [tutorial, search, Sourcegraph, cheat sheet]
description: A guide to help you get up to speed with Sourcegraph's commands quickly
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-2.png
imageAlt: Sourcegraph Learn
alternateTitle: Getting started with Sourcegraph universal code search
type: posts
---

Sourcegraph is a universal code search tool, enabling you to search across both open source and your own private code repositories. Code search can help you onboard onto new codebases, contribute to open source, find bugs and error messages, understand dependency libraries, and more.

This cheat sheet style guide can help you get up to speed with Sourcegraph commands quickly. For more thorough tutorials on using Sourcegraph, refer to our [tutorials](https://learn.sourcegraph.com/tags/sourcegraph) and our [documentation](https://docs.sourcegraph.com/). 

You can use these commands on either [Sourcegraph cloud](https://sourcegraph.com/search) or your own [Sourcegraph instance](https://docs.sourcegraph.com/admin/install).

## Searching an organization’s repository

By default, Sourcegraph lets you search globally, providing you with results from all the repositories you have access to. On Sourcegraph cloud, this includes all currently indexed open source repositories. The `repo` command lets you dial down to the single repository level.

### Searching for or within a repository

The `repo` keyword lets you search a specific repository in your organization or on the web.

```
repo:[repository-path]
repo:[regular-pattern]
```

Searching with `repo:^github\.com/ORGANIZATION` will return all repositories in a given organization, where `ORGANIZATION` can be `sourcegraph`, for example.

<SourcegraphSearch query="repo:^github\.com/sourcegraph/.*" />


The `repo` keyword contextualizes the searches you perform on Sourcegraph. 

### Repository search: command chaining

When searching a repository, command chaining can be used to return more specific results depending on the expected results.

**Search for a repository that contains a file**

If you are searching for a file in a repository, use `repo.contains.file`.

```
repo:[repository-path] repo.contains.file([file-path])
```

For example, when searching for the `package.json` file in a project, this search query will return the file.


<SourcegraphSearch query="repo:^github\.com/sourcegraph/.* repo:contains.file(package.json)" />


A similar example that uses the content query to search for files is shown below.


<SourcegraphSearch query="repo:contains(file:package\.json$ content:ts)" />


This query returns repositories that contain a `package.json` file and has content written in TypeScript.


**Search for a repository that contains some content**

Suppose you are searching for some content in a repository, such as a library. Use `repo.contains.content`.

```
repo:[repo-path] repo.contains.content([content])
repo:[repo-path] repo.contains.content([regular-pattern])
```

We can search for the `mdi-react` library in Sourcegraph, for example:

<SourcegraphSearch query="repo:^github\.com/sourcegraph/.* repo:contains.content(mdi-react)" />


The above query returns repos that have `mdi-react` among its contents.

## Language-specific search

Use `lang` when searching code to narrow the scope of your search to one programming language. 

```
lang:[programming language]
```

We can search for results within the C++ or Python programming languages.


<SourcegraphSearch query="lang:c++" />

<SourcegraphSearch query="lang:python" />


By default, searches are case insensitive.

Prepending a hyphen can exclude results from a particular programming language.

```
-lang:[programming-language]
```

To exclude Java, you can perform the following search.

<SourcegraphSearch query="​​-lang:java" />

Narrowing your search scope down to specific languages can ensure that you find the code that is most relevant to your needs.

## Searching based on time periods

If you are searching for code committed before or after a time period, you will use `before` and `after`

```
before:[time-period]
after:[time-period]
```

Sometimes the time period can be literal, like `last week`, `last year`, `3 months ago`, `february 10 2021` or have actual dates in the format `dd/mm/yyyy`.

```
before:last week
after:february 10 2021
before:02/01/2019
```

To search between dates, keywords like `and` can be combined with `before` or `after` to return dates within a given period.

<SourcegraphSearch query='repo:sourcegraph type:commit after:"july 9 2021" and before:"july 10 2021"' />

Time-based search is usually used along with other search commands to further narrow down search results.

Note that `before` and `after` only work in conjunction when combined with `type:diff` or `type:commit` commands.

## Search in archived repositories

The `archived` keyword will bring up those results from repositories that have been archived.

```
archived:[yes/only]
archived:yes
archived:only
```

We can surface only archived repositories within the Sourcegraph organization with the following query.

<SourcegraphSearch query="repo:sourcegraph archived:only" />

This can help us understand past decisions made within a given codebase. 

## Case sensitive search

Use `yes` or `no` with the `case` search query to specify if the search should be case sensitive or not. By default, searches are case insensitive.

```
case:[yes/no]
case:yes
case:no
```

Suppose you would like to check to align the style of a given codebase to help you bring all function calls in Python to be consistent with the [PEP 8](https://www.python.org/dev/peps/pep-0008/) guidance. You can use Sourcegraph to understand which functions are using camelCase rather than lowercase names with underscores between words (also called snake_case).

<SourcegraphSearch query="case:yes lang:python myFunction" />


If you would like to find all declared functions that use camelCase, you can try combining this query with regular expressions.

## Searching by types

Types define the scope of code search. A search scope consists of commits, diffs, symbols, repos, paths and files. It is typically used alongside other search commands to further narrow search results.

```
type:[commit|paths|diff|symbol|repo|files]
```

Here is an example to show us time-based commits on the Sourcegraph repo.

<SourcegraphSearch query="repo:sourcegraph after:yesterday type:commit" />

A `type` scope can use the following commands, which will restrict search to the following:
* `commit` — commits to a repository
* `diff` — show [diffs](https://git-scm.com/docs/git-diff), or changes, within a repository
*`repo` — repositories available to you
* `files` — returns files 
*`symbol` — returns files that contain names or keywords in a library.

Searching by type can help you find exactly what you need in a codebase by narrowing down the scope of your search. 

## Searching commit messages matching a string

If a commit message is known, it can be helpful to use the `message` keyword to bring up relevant commits.

```
message:[commit-message]
message:[string-regex-pattern]
```

We can find all commit messages with “fix” in the `sourcegraph/sourcegraph` repository by searching the following.

<SourcegraphSearch query="repo:^github\.com/sourcegraph/sourcegraph$ type:commit message:fix" />

Note that the message keyword only works for `type:diff` or `type:commit` queries.

## Searching code by commits and diffs 

The `author` keyword returns code search results that were created by a user. This keyword only works for `type:diff` or `type:commit` queries.


```
author:[author-name]
```

Adding a hyphen in front of the `author` keyword omits code content created by a given author.

```
-author:[author-name]
```

Search for all code diffs by the Renovate app within our Sourcegraph repository.

<SourcegraphSearch query="repo:^github\.com/sourcegraph/sourcegraph$ author:renovate type:diff" />

You can also search by `committer:git-email` with the same `type` constraints.

## Return a certain number of results

Sourcegraph returns pages filled with search results. To stop searching after a given number of results are returned, use the `count` command.

```
count:[number|all]
```

For example, `count:5` would return the first 5 results of a given query.

<SourcegraphSearch query="repo:sourcegraph/learn type:commit count:5" />

The `all` option returns all results from a search.

The `count` keyword may also be used to return _more_ results, not just  _fewer_ results. This can enable you to display more than the default 500 results that are returned.

## Searching for or within forks

The `fork` keyword restricts the scope of search results to either include, exclude, or return only  forks of a given repository.

```
fork:[yes|no|only]
```

The `yes` option includes forked repositories, the `no` option omits the results from forks, and the `only` option searches only forked repositories.

One use case for searching forked repositories is looking for how users personalize open source libraries.

## Timing out searches

To set the duration before a search times out, you’ll use the `timeout` keyword. Time units that can be used include nanoseconds (`ns`), microseconds (`us` or `µs`) , milliseconds (`ms`), seconds (`s`) or minutes (`m`).

```
timeout:[time-duration-with-unit]
```

This is useful when searching many repositories at the same time to give search more time to return useful results. By default, timeout is 10 seconds, however, when using the `timeout` command, timeouts can be set to over a minute. When this scope is provided, search is given more time to complete.

<SourcegraphSearch query="timeout:40s" />

Alternatively, if you are receiving too many results, you can decrease the time of search.

## Search by repository visibility

Restricting search by codebase visibility is done with the `visibility` command. You can restrict search to public or private repositories.

This is useful if you want the results of a search to be explicitly narrowed down to repositories that are private and accessible to you or repositories that are public. 

Except when explicitly set, all searches return results from both public and private repositories accessible to you.

```
 visibility:[any|private|public]
```

When logged into Sourcegraph, you can change your context to your username and then run the following command to show all of your available private repositories.

<SourcegraphSearch query="visibility:private" />

This can allow you to search across the code that is private to only you. _Please note that searching private code on Sourcegraph cloud is currently in Public Beta._

## Further resources

To learn more about how to search effectively with Sourcegraph, you can read through our Sourcegraph search series:
* [How To Search with Sourcegraph using Literal Patterns](https://learn.sourcegraph.com/literal-search-patterns)
* [How To Search with Sourcegraph using Regular Expression Patterns](https://learn.sourcegraph.com/regular-expression-patterns)
* [How To Search with Sourcegraph using Structural Patterns](https://learn.sourcegraph.com/structural-search-patterns)

You can also check out [Sourcegraph product documentation](https://docs.sourcegraph.com/) and [Sourcegraph tutorials](https://learn.sourcegraph.com/tags/sourcegraph).

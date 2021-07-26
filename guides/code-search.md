---
title: Code Search Guide
tags: [guide, open source, Sourcegraph]
author: quinn-slack
description: Learn the fundamentals of code search.
image: /headers/sourcegraph-learn-header-2.svg
imageAlt: Sourcegraph Learn
socialImage: /headers/sourcegraph-learn-header-2.png
type: guides
---

Code search is used by more and more companies, but still most devs and companies don't know about it! We made this guide because we love code search, tons of other companies and devs love it, and we want every dev and company to know why and to start using it in the future.

Disclaimer: Sourcegraph is a universal code search company, so of course we would say these things, right? But our intrinsic love for code search came first. It’s why we started/joined Sourcegraph and want to bring code search to every dev.

## What is code search?

A tool that's separate from, but integrated with, your code host and editor that lets you search, navigate, and understand all code. Usually this means your company's code, your own code, the code of projects you depend on and that depend on your code, and any other code that's relevant to you.

## List of common code search tools (OpenGrok, Hound, Etsy, Sourcegraph, etc.)

TODO(): also incorporate info from 's comparisons

* [OpenGrok](https://docs.google.com/document/d/1o2IuiZp1oJlengeLrKGk3zFHHvhpmqQH7eWRzLQGC1g/edit?usp=sharing)
* [FishEye](https://docs.google.com/document/d/1tPGLjiYYLE4ErayrqcuhZ_AKomGEO8xxqyh6UOWa4-c/edit?usp=sharing)
* [Hound](https://docs.google.com/document/d/1XywBMFyBGxBeDaUyp0BJr3QVecXrT2YT6Sia_0z8om4/edit?usp=sharing)
    * [Hound Notes](https://docs.google.com/document/d/1XywBMFyBGxBeDaUyp0BJr3QVecXrT2YT6Sia_0z8om4/edit)
* [LiveGrep](https://docs.google.com/document/d/1wGc46bkxIGkYPC0-v5rK-I665cCwXTlUqjX8cS4zFFs/edit?usp=sharing) (in progress)

### OpenGrok

OpenGrok is an open source code search engine created in 2005 by Chandan BN at Sun Microsystems. Coined the “wicked fast source browser,” OpenGrok was the first open source code search engine, and it was [originally created to make it easier to find security holes in software](https://github.com/oracle/opengrok/wiki/Story-of-OpenGrok#in-retrospect). Today, it is maintained by Oracle and offers a read-only web interface and requires Java to run. It supports a wide range of languages and formats and version control systems, including non-Git systems.

### FishEye

FishEye is a browser-based code search engine created by Atlassian in 2007. It is no longer actively developed and was relegated to basic maintenance mode at the beginning of 2020. It’s relatively inexpensive and known for it’s powerful advanced search interface that allows for fine grain control over search and supports fuzzy search logic. 

### [Hound](https://docs.google.com/document/d/1XywBMFyBGxBeDaUyp0BJr3QVecXrT2YT6Sia_0z8om4/edit) 

Hound is an open source code search tool developed by Etsy in 2015 with the intention of lowering the barrier to entry for cose search tools. It’s free to use and liked because it is easy to install and run. However, it lacks common enterprise features like authentication and permissions, and does not scale well to hundreds or thousands of repositories. 

### LiveGrep

LiveGrep is an open source code search tool run by Nelson Elhage. LiveGrep uses the RE2 library and allows you to search multiple repositories and link back to search results. It has full support for cross-repo searching and regular expressions but similar to Hound, does not support authentication or permissioning, nor does it integrate with code hosts. 

### Sourcegraph

## List of common features seen in code search tools

Code search UIs usually have three main areas: 

1. Search interface
2. Results page
3. Code browsing interface

### 1. Search interface

The purpose of the search page is to enable the user to jump as quickly as possible to a point (or points) in the code that they are interested in. The search page typically contains a query box, along with additional fields and toggles that can control the scoping and matching behavior. Toggles and additional fields can include:

* Selecting a particular type of result (line of text, symbol name, whole files)
* Scoping to a particular part of the codebase (e.g., by file prefix, file path pattern, or by top-level project(s))
* Scoping to a particular revision (usually the default branch is the default, but users often are interested in searching code at a particular point in time or commit)

The search syntax is a major feature area itself, and can include support for a variety of expressions:

* String literal queries
* Regular expressions
* Full word matching
* Other pattern-matching syntaxes (e.g., Comby)
* Keywords that would otherwise be toggles and dropdowns (e.g., filter by file, result type)
* Logical operators (AND/OR/NOT) that can be used to combine subqueries into more complex queries (e.g., "all functions that match this regular expression in files other than Markdown files")
* Autocompletion, which helps complete common queries and keywords. This is especially helpful if the query syntax is particularly expressive or powerful.

The search interface is the combination of the query syntax and the UI components surrounding and including the search box. It is the jumping-off point of most code search workflows and its primary purpose is to accept and interpret user intent for what should be displayed in the results interface.

### 2. Results interface

The purpose of the search results page is to surface the results that are most relevant to the user's intent, to enable easy scanning of the result set, and to serve as a jumping off point into the actual code that the results point to.

Important features are both visual and algorithmic:

* What data and metadata is displayed in each result (e.g., filename, section of code matched by the query, surrounding code, syntax highlighting, etc.)
* The ranking of the matches, which can incorporate a variety of factors like query similarity, project reputation, and user affinity (whether the user recently viewed or modified those files or surrounding files)
* Additional filter toggles or query refinement suggestions for refining the query and result set, or suggestions to deal with error cases (e.g., "no results found")
* Whether a total count is returned

Performance and scale are often not considered actual features, but they are first-order considerations for the results page. Ideally, you want code search that scales to the entire universe of code that you care about (including downstream dependencies and currently unused but potentially useful libraries) that returns useful results in as little time as possible. Time to first result and search scope of a single query are KPIs to evaluate for the overall usability and trustworthiness of code search.

### 3. Code browsing interface

Most code search engines include or are paired with some sort of code browsing interface. This code browsing interface is most often not the editor, but a web-based browsing interface. The reason for this is that opening up a result in an editor might be disruptive (causing a developer to "lose their place" in the code they're currently editing) or impossible (the code surfaced hasn't even been checked out to the developer's editor environment).

The browsing interface is important, because this is how the developer, having found the area of code of interest, now needs to dive into the code and build a working mental model of how it works and where it fits into the large codebase. 

Code browsing interfaces often have some subset of the following features:

* Jump to definition
* Find references
* Hover tooltips
* Line-level annotations that incorporate data from other tools. For example, highlighting lines as red or green using code coverage data.
* Authorship or "blame" information
* Recent history of changes to this particular file or section of code
* File browser / file tree
* A plugin system that allows third-party dev tools to inject their own annotations into the source code view

Code search engines that lack their own internal browsing interface often link to code hosts or dedicated code browsers (e.g., Cscope) that provide code navigation capabilities.

### Additional features

In addition to the three main areas above, some code search UIs also feature editing, code monitoring, and large-scale code modification. 

1. Editing

Most code search engines don't support direct editing. Editors, both native and cloud-based, are typically separate applications, though they may be linked to code search tools by an integration. Such integrations might be bidirectional: jumping from a file open in an editor to the file in the code search browsing interface or jumping from code search into the editor (provided the editor has access to the file being viewed).

2. Code monitoring

Code monitoring is an extension of the traditional code search functionality that lets a user specify a set of queries they wish to monitor or watch over time. These queries can specify patterns or anti-patterns in the code that a development team is trying to encourage or discourage.

3. Large-scale code modification

With large-scale code modification, the code search engine allows you to find all occurrences of the referenced code and allows you to make a batch change so that the code is updated in every place it exists. It’s a way to programmatically define changes, execute the specifications, and track the changeset lifecycle status across multiple code hosts. 


## Who uses code search?

_1 section for each of around 10 well-known companies (mostly can be our customers), and 2-3 open source projects (eg Kubernetes, Debian) with a good industry/size/age cross-section, in the following format:_

### _Company (eg: _Lyft_)_

_Intro paragraph, then answers to the following questions:_

* _When did (company) first set up a code search tool? Why? Ideal: include screenshots of emails and Slack messages announcing when code search was rolled out at Lyft, etc._
* _What problems did it solve? How were people solving those problems before code search?_
* _How did usage of code search change over time?_
* _How do developers use code search today? How many (DAU/WAU/MAU)?_
* _What would happen if code search was suddenly taken away?_

_Interspersed with quotes from developers, screenshots, links to docs on that company's own site or other information about that company's code search usage._

### Uber {#uber}

_(Same as above, and same for all other companies below. These companies aren't necessarily the ones to pick, they're just representative examples.)_

_(We used [https://docs.google.com/document/d/1rHDbbf5BASiKb5SxfbbaY-hZaRh9126M_VlwIdZia0U/edit#heading=h.mhz38zv132lm](https://docs.google.com/document/d/1rHDbbf5BASiKb5SxfbbaY-hZaRh9126M_VlwIdZia0U/edit#heading=h.mhz38zv132lm) at Uber to roll it out.)_

### Netflix

### Facebook

### Google 

### Airbnb

### GE

### Capital One

### Atlassian

### Citrix

### DoorDash

### Dropbox

## How do people use code search?

_List of use cases/problems that code search solves, with very specific instances, ideally that specifically tie back to companies/devs mentioned in the "Who uses code search?" section. A+++ for video of a dev quoted in the section above actually demoing how they use code search to solve a particular problem. TODO(__) other sources to draw from: _

* _[use cases from old slide deck](https://docs.google.com/presentation/d/1HmVEH5e9tqyCBOnpVG57JLZ4Fc7_Twpv50sT7wNKuPA/edit#slide=id.g7d940a9a99_0_0)_
* _[product tour](https://docs.sourcegraph.com/getting-started/tour)_
* _[Google research paper Table 1](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43835.pdf)_
* _ALSO CHECK OUT __'s RECENT DOC AT [https://docs.google.com/document/d/1JWR5tQrq8df6OMNdYFk6tPPdVDadZgcMQbB-kdaYKBk/edit#heading=h.ivm56981fogr](https://docs.google.com/document/d/1JWR5tQrq8df6OMNdYFk6tPPdVDadZgcMQbB-kdaYKBk/edit#heading=h.ivm56981fogr)_
* _'s doc _[https://docs.google.com/document/d/1OwY6u4FmhWK4hNy8vW0b71fEd4yNsRzUtrKQpYGMWRs/edit#](https://docs.google.com/document/d/1OwY6u4FmhWK4hNy8vW0b71fEd4yNsRzUtrKQpYGMWRs/edit#)

Code search helps developers with many kinds of tasks. If you aren't a heavy user of code search, you've probably found other, more cumbersome ways to get these things done. Here are X ways that developers use code search: \
 \
**Code search examples**

1. Understanding how code works
2. Learning how to use a library
3. Finding usage examples
4. Debugging an issue
5. Code review
6. Deprecating and removing code
7. Incident response
8. Onboarding to a new codebase
9. Answering a team member’s questions

### 1. Understanding how code works

Being able to understand code better is valuable because that's how you spend most of your time. A code search tool helps you find a specific piece of code quickly and understand how it works.

**Find code quickly:** A good code search tool will let you find or jump to a specific piece of code within 10-15 seconds every time. You can just open the code search tool (you have a hotkey for it, right?) and type your query. It'll help you narrow down to what you're looking for, with query filters or a refinement UI.

**Reading and understanding code better:** Once you're looking at the right piece of code, a code search tool will show all kinds of other context to help you understand the code: definitions, references, hovers (with type signatures and documentation), usage stats, authorship (such as Git blame), deployment info, code test coverage, and even information from other tools such as static analyzers and runtime tracing, logging, and profiling tools. 

**Why not just use an editor/IDE?** With a code search tool, you don't need to worry about cloning the code locally, checking out a different branch, reconfiguring your editor, or anything else like that. You can type in search queries with filters to narrow down to what you're looking for more quickly (vs. editors/IDEs, which have more rigid text and regexp search). When reading code, a code search tool can show many more kinds of context overlaid on code, and these types of context can be determined centrally by the repository maintainer or your company's dev tools team. (Also, many types of context, such as deployment or production error logging info, that are helpful when reading code would be distracting when editing code, so they wouldn't even make sense to enable in your editor.)

**For example:** Here's how a code search tool helped with ____ (TODO record a quick screencast of a specific instance of needing to understand code where code search helped, and write out the steps followed from the video)


### 2. Learning how to use a library

### 3. Finding usage examples

### 4. Debugging an issue

### 5. Code review

### 6. Deprecating and removing code

### 7. Incident response

[NOTE MIKE HAS A SECURITY USE CASE DOC](https://docs.google.com/document/d/1BVq3GPMVZih9NKa4UyVAQcsyThi4ye6m4CCQuwZAb80/edit#heading=h.bksus9krxyjy)

If a critical component of your application starts failing and you don't know where else to start investigating the problem, what do you do?

* You might ask in team chat, which only works if someone else around happens to have the right intuition.
* You can view the logs, which only works for errors that are clearly logged, not for many kinds of unanticipated bugs.
* You can check recent deployments, which might help you determine how to roll back in some scenarios.

For a code search tool to help you during incident response, it needs to have diff search, which lets you search through the diffs of all changes for specific terms. You can use this to figure out what code change caused the problem and who might be able to help fix it.

**For example:** Here's how diff search helped identify the cause of a bug in production at Sourcegraph. (TODO make screencast and write out the steps followed from the video)

**In the industry:** At Facebook, their internal code search tool [TODO link to section above about Facebook] early on added support for diff search. Facebook developers use diff search very frequently, especially when tracing down bugs. For some reason, diff search doesn't seem to be as commonly used at Google (if we can find out why, we'll add it here).

### 8. Onboarding to a new codebase

### 9. Answering a team member's question

## History of code search

* _Book index_
    * _ The search engine technology is not rocket science. It has been there, much before modern computers arrived. Take a book and turn the last few pages. Most likely you will find an "Index" section. That is an alphabetically sorted list of special terms and corresponding page numbers. If you are looking for some word in the whole book, (1) you would first look up the page numbers in the index, and then (2) look up the page and (3) scan through the page looking for your word. This is much faster than going page by page reading each line searching for your word._
    * _ All modern search engines do the same thing. For google, yahoo etc., the internet is a big book, each webpage is a page. They generate an Index, that for a given word gives you a list of pages that contain that word. It is called an inverted index since unlike seeing a document as a set of words, it sees as a set of documents for a given word._
* _How Microsoft Windows team used code search (apparently they had code search back in the 90s)_
    * _[https://devblogs.microsoft.com/windows-search-platform/the-evolution-of-windows-search/](https://devblogs.microsoft.com/windows-search-platform/the-evolution-of-windows-search/) _
* _LXR 1994 [https://en.wikipedia.org/wiki/LXR_Cross_Referencer](https://en.wikipedia.org/wiki/LXR_Cross_Referencer) _
* _CSCOPE [http://cscope.sourceforge.net/](http://cscope.sourceforge.net/) _
* _Sun Microsystems built OpenGrok in ~2004, interview with the creator_
    * _The name comes from the term grok, a jargon term used in computing to mean "profoundly understand". The term grok originated in a science fiction novel by Robert A. Heinlein called Stranger in a Strange Land._
    * _[https://medium.com/robloxro/opengrok-review-why-and-how-to-use-it-in-a-large-team-a572a31948b2](https://medium.com/robloxro/opengrok-review-why-and-how-to-use-it-in-a-large-team-a572a31948b2) _
    * _[https://web.archive.org/web/20101124021636/http://hub.opensolaris.org/bin/view/Project+opengrok/story](https://web.archive.org/web/20101124021636/http://hub.opensolaris.org/bin/view/Project+opengrok/story)   Chandan B N, Dec 2005_
    * _[https://www.academia.edu/35287824/GROKKING_THE_CODE_How_Science_Fiction_participates_to_Hacking_Practices?auto=download](https://www.academia.edu/35287824/GROKKING_THE_CODE_How_Science_Fiction_participates_to_Hacking_Practices?auto=download)  _
* _History and info of Google's CodeSearch tool (Brian Slesinsky, __knows him; and Steve Yegge, his blog posts are public)_
* _History and info of Facebook's TBGS/BigGrep tool (__knows people who could help)_
* _History and info about other code search tools: Krugle (__knows the founder), Livegrep, Hound, FishEye (Atlassian), grep.app, Google's public code search (shut down in 2011), GitHub code search (__can help get people to talk about these)_

Searching stores of knowledge is not a new phenomenon. The written record developed ways to find relevant information beginning with tables of contents two millennia ago, concordances (alphabetized topics) in the 5th century, and the book index as we know it today began to make an appearance as early as the 13th century. Physical libraries, too, have a long history of information architecture to support the retrieval of relevant knowledge, with some innovation highlights being with Swiss Polymath Konrad Gessner in the 16th century using paper slips to organize topics, then moving into ledger books in the mid-19th century, then physical card catalogues and now digital ones. As we continue to create, document, and share knowledge, we need to be able to search for and find knowledge that is relevant to us, and so that we too can participate in knowledge production. Code, too, is a place where information is stored, and as more code is created, we need to innovate across the way we search for and retrieve code so that we too can participate in the creation of technology. 

OpenGrok

“the wicked fast source browser that powers the OpenSolaris source browser.”

CSCOPE -> perl script rob.pl (revenge of the binaries) gigabytes of characters

Lucene text search [https://lucene.apache.org/](https://lucene.apache.org/) 

Programs have "symbol definitions", "symbol references", "human readable text", "path" and may be "revision history

_Universal Program Search Engine_

Confirm or deny existence of vulnerabilities \
Started with Perl but took too long, was able to move to Java and a newer release of Java allowed for some Perl functionality which in turn made for more efficient and faster code

OpenGrok is a fast and usable source code search and cross reference engine. It helps you search, cross-reference and navigate your source tree. It understands various program file formats and history from many Source Code Management systems. In other words it lets you grok (profoundly understand) source code and is developed in the open, hence the name OpenGrok. It is written in Java.

OpenGrok is an open source project and is distributed under CDDL. OpenGrok uses software libraries from Apache Software Foundation. This product includes software developed by CollabNet.

OpenGrok developers Idea enterprise licenses are supported by Jetbrains.

IntelliJ IDEA can be used to edit {OpenGrok sources.

Authors The project has been originally conceived in Sun Microsystems by Chandan B.N.

## Future of code search

_For each code search tool, summarize the product roadmap (Sourcegraph's will be by far the best :)_

_For any devs and companies, summarize what unmet needs they have from code search, their wishlist_

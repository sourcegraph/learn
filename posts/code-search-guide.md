---
title: Code search guide
tags: []
author: Quinn Slack
description: A survey of all code search tools and how they're used.
image: /headers/sourcegraph-learn-header-4.svg
socialImage: /headers/sourcegraph-learn-header-4.png
---

**Note:** This doc's content is just a placeholder to see how the structure of this doc looks in this template.

Code search is used by more and more companies, but still most devs and companies don't know about it! We made this guide because we love code search, tons of other companies and devs love it, and we want every dev and company to know why and to start using it in the future.

Disclaimer: Sourcegraph is a universal code search company, so of course we would say these things, right? But our intrinsic love for code search came first. It’s why we started/joined Sourcegraph and want to bring code search to every dev.

## What is code search?

A tool that's separate from, but integrated with, your code host and editor that lets you search, navigate, and understand all code. Usually this means your company's code, your own code, the code of projects you depend on and that depend on your code, and any other code that's relevant to you.

### Code search tools

#### OpenGrok

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta dui quis laoreet commodo. Maecenas venenatis faucibus sapien vel consectetur. Maecenas aliquet vestibulum semper. Ut venenatis eros quis lorem feugiat, vitae elementum velit venenatis. Phasellus consectetur, eros ut commodo pellentesque, quam velit maximus ante, ac consectetur orci ante in justo. Fusce suscipit leo at lacinia accumsan. Suspendisse elit nibh, pulvinar sed varius non, sodales non neque. Proin quis mollis sapien, eu fermentum dui. Fusce pellentesque, enim sed hendrerit fringilla, erat nisl faucibus libero, non blandit tortor neque eu lectus. Integer sit amet aliquet augue. Aliquam rutrum placerat dolor, id semper turpis fringilla in. Praesent aliquam rutrum leo elementum finibus.

#### FishEye

Ut egestas neque risus, quis scelerisque velit eleifend eu. Pellentesque at mauris id velit fermentum eleifend non sed purus. Duis pretium consequat risus sit amet mollis. Duis ut cursus dui, eget consectetur risus. Quisque nec ex quis neque consequat rutrum vel ut orci. Suspendisse eu mattis lorem. Morbi vel felis quam. Sed elementum, massa ac lacinia ultrices, tortor nisl volutpat eros, eget mollis neque est et lacus. Donec vitae lacus felis. Aliquam quis nunc et odio fermentum sollicitudin nec eu turpis. Donec ut pretium sapien. Ut nulla mauris, finibus vitae orci nec, suscipit posuere massa. Ut rhoncus nisi quis metus finibus, eget dapibus felis hendrerit. Proin a dictum ligula.

#### Hound

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

#### LiveGrep

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

#### Sourcegraph

Suspendisse convallis, risus et scelerisque lacinia, tortor ipsum egestas ante, vitae tincidunt sapien velit eget velit. Duis feugiat faucibus dui a lobortis. Fusce commodo, dui sed sodales vestibulum, leo sem faucibus tortor, dapibus tempus eros enim sit amet leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tincidunt tellus in cursus. Pellentesque dictum tincidunt massa, vel lobortis magna placerat a. Phasellus eget elit mi. Duis eu volutpat dolor, eu hendrerit tortor. Nam fringilla libero et metus molestie, vitae tincidunt ante aliquet. Vivamus facilisis tincidunt lectus eget blandit. Donec sed erat ipsum. Morbi vitae rutrum libero.

### Key features

Code search UIs usually have three main areas:

1. Search interface
2. Results page
3. Code browsing interface

#### 1. Search interface

The purpose of the search page is to enable the user to jump as quickly as possible to a point (or points) in the code that they are interested in. The search page typically contains a query box, along with additional fields and toggles that can control the scoping and matching behavior. Toggles and additional fields can include:

- Selecting a particular type of result (line of text, symbol name, whole files)
- Scoping to a particular part of the codebase (e.g., by file prefix, file path pattern, or by top-level project(s))
- Scoping to a particular revision (usually the default branch is the default, but users often are interested in searching code at a particular point in time or commit)

The search syntax is a major feature area itself, and can include support for a variety of expressions:

- String literal queries
- Regular expressions
- Full word matching
- Other pattern-matching syntaxes (e.g., Comby)
- Keywords that would otherwise be toggles and dropdowns (e.g., filter by file, result type)
- Logical operators (AND/OR/NOT) that can be used to combine subqueries into more complex queries (e.g., "all functions that match this regular expression in files other than Markdown files")
- Autocompletion, which helps complete common queries and keywords. This is especially helpful if the query syntax is particularly expressive or powerful.

The search interface is the combination of the query syntax and the UI components surrounding and including the search box. It is the jumping-off point of most code search workflows and its primary purpose is to accept and interpret user intent for what should be displayed in the results interface.

#### 2. Results interface

The purpose of the search results page is to surface the results that are most relevant to the user's intent, to enable easy scanning of the result set, and to serve as a jumping off point into the actual code that the results point to.

Important features are both visual and algorithmic:

- What data and metadata is displayed in each result (e.g., filename, section of code matched by the query, surrounding code, syntax highlighting, etc.)
- The ranking of the matches, which can incorporate a variety of factors like query similarity, project reputation, and user affinity (whether the user recently viewed or modified those files or surrounding files)
- Additional filter toggles or query refinement suggestions for refining the query and result set, or suggestions to deal with error cases (e.g., "no results found")
- Whether a total count is returned

Performance and scale are often not considered actual features, but they are first-order considerations for the results page. Ideally, you want code search that scales to the entire universe of code that you care about (including downstream dependencies and currently unused but potentially useful libraries) that returns useful results in as little time as possible. Time to first result and search scope of a single query are KPIs to evaluate for the overall usability and trustworthiness of code search.

#### 3. Code browsing interface

Most code search engines include or are paired with some sort of code browsing interface. This code browsing interface is most often not the editor, but a web-based browsing interface. The reason for this is that opening up a result in an editor might be disruptive (causing a developer to "lose their place" in the code they're currently editing) or impossible (the code surfaced hasn't even been checked out to the developer's editor environment).

The browsing interface is important, because this is how the developer, having found the area of code of interest, now needs to dive into the code and build a working mental model of how it works and where it fits into the large codebase.

Code browsing interfaces often have some subset of the following features:

- Jump to definition
- Find references
- Hover tooltips
- Line-level annotations that incorporate data from other tools. For example, highlighting lines as red or green using code coverage data.
- Authorship or "blame" information
- Recent history of changes to this particular file or section of code
- File browser / file tree
- A plugin system that allows third-party dev tools to inject their own annotations into the source code view

Code search engines that lack their own internal browsing interface often link to code hosts or dedicated code browsers (e.g., Cscope) that provide code navigation capabilities.

#### Additional features

In addition to the three main areas above, some code search UIs also feature editing, code monitoring, and large-scale code modification.

\

1. Editing

Most code search engines don't support direct editing. Editors, both native and cloud-based, are typically separate applications, though they may be linked to code search tools by an integration. Such integrations might be bidirectional: jumping from a file open in an editor to the file in the code search browsing interface or jumping from code search into the editor (provided the editor has access to the file being viewed).

2. Code monitoring

Code monitoring is an extension of the traditional code search functionality that lets a user specify a set of queries they wish to monitor or watch over time. These queries can specify patterns or anti-patterns in the code that a development team is trying to encourage or discourage.

3. Large-scale code modification

With large-scale code modification, the code search engine allows you to find all occurrences of the referenced code and allows you to make a batch change so that the code is updated in every place it exists. It’s a way to programmatically define changes, execute the specifications, and track the changeset lifecycle status across multiple code hosts.

## Who uses code search?

### Company 1

Ut egestas neque risus, quis scelerisque velit eleifend eu. Pellentesque at mauris id velit fermentum eleifend non sed purus. Duis pretium consequat risus sit amet mollis. Duis ut cursus dui, eget consectetur risus. Quisque nec ex quis neque consequat rutrum vel ut orci. Suspendisse eu mattis lorem. Morbi vel felis quam. Sed elementum, massa ac lacinia ultrices, tortor nisl volutpat eros, eget mollis neque est et lacus. Donec vitae lacus felis. Aliquam quis nunc et odio fermentum sollicitudin nec eu turpis. Donec ut pretium sapien. Ut nulla mauris, finibus vitae orci nec, suscipit posuere massa. Ut rhoncus nisi quis metus finibus, eget dapibus felis hendrerit. Proin a dictum ligula.

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

### Company 2

Ut egestas neque risus, quis scelerisque velit eleifend eu. Pellentesque at mauris id velit fermentum eleifend non sed purus. Duis pretium consequat risus sit amet mollis. Duis ut cursus dui, eget consectetur risus. Quisque nec ex quis neque consequat rutrum vel ut orci. Suspendisse eu mattis lorem. Morbi vel felis quam. Sed elementum, massa ac lacinia ultrices, tortor nisl volutpat eros, eget mollis neque est et lacus. Donec vitae lacus felis. Aliquam quis nunc et odio fermentum sollicitudin nec eu turpis. Donec ut pretium sapien. Ut nulla mauris, finibus vitae orci nec, suscipit posuere massa. Ut rhoncus nisi quis metus finibus, eget dapibus felis hendrerit. Proin a dictum ligula.

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

### Company 3

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

Suspendisse convallis, risus et scelerisque lacinia, tortor ipsum egestas ante, vitae tincidunt sapien velit eget velit. Duis feugiat faucibus dui a lobortis. Fusce commodo, dui sed sodales vestibulum, leo sem faucibus tortor, dapibus tempus eros enim sit amet leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tincidunt tellus in cursus. Pellentesque dictum tincidunt massa, vel lobortis magna placerat a. Phasellus eget elit mi. Duis eu volutpat dolor, eu hendrerit tortor. Nam fringilla libero et metus molestie, vitae tincidunt ante aliquet. Vivamus facilisis tincidunt lectus eget blandit. Donec sed erat ipsum. Morbi vitae rutrum libero.

### Company 4

Ut egestas neque risus, quis scelerisque velit eleifend eu. Pellentesque at mauris id velit fermentum eleifend non sed purus. Duis pretium consequat risus sit amet mollis. Duis ut cursus dui, eget consectetur risus. Quisque nec ex quis neque consequat rutrum vel ut orci. Suspendisse eu mattis lorem. Morbi vel felis quam. Sed elementum, massa ac lacinia ultrices, tortor nisl volutpat eros, eget mollis neque est et lacus. Donec vitae lacus felis. Aliquam quis nunc et odio fermentum sollicitudin nec eu turpis. Donec ut pretium sapien. Ut nulla mauris, finibus vitae orci nec, suscipit posuere massa. Ut rhoncus nisi quis metus finibus, eget dapibus felis hendrerit. Proin a dictum ligula.

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

### Company 5

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

Suspendisse convallis, risus et scelerisque lacinia, tortor ipsum egestas ante, vitae tincidunt sapien velit eget velit. Duis feugiat faucibus dui a lobortis. Fusce commodo, dui sed sodales vestibulum, leo sem faucibus tortor, dapibus tempus eros enim sit amet leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tincidunt tellus in cursus. Pellentesque dictum tincidunt massa, vel lobortis magna placerat a. Phasellus eget elit mi. Duis eu volutpat dolor, eu hendrerit tortor. Nam fringilla libero et metus molestie, vitae tincidunt ante aliquet. Vivamus facilisis tincidunt lectus eget blandit. Donec sed erat ipsum. Morbi vitae rutrum libero.

### Company 6

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta dui quis laoreet commodo. Maecenas venenatis faucibus sapien vel consectetur. Maecenas aliquet vestibulum semper. Ut venenatis eros quis lorem feugiat, vitae elementum velit venenatis. Phasellus consectetur, eros ut commodo pellentesque, quam velit maximus ante, ac consectetur orci ante in justo. Fusce suscipit leo at lacinia accumsan. Suspendisse elit nibh, pulvinar sed varius non, sodales non neque. Proin quis mollis sapien, eu fermentum dui. Fusce pellentesque, enim sed hendrerit fringilla, erat nisl faucibus libero, non blandit tortor neque eu lectus. Integer sit amet aliquet augue. Aliquam rutrum placerat dolor, id semper turpis fringilla in. Praesent aliquam rutrum leo elementum finibus.

Ut egestas neque risus, quis scelerisque velit eleifend eu. Pellentesque at mauris id velit fermentum eleifend non sed purus. Duis pretium consequat risus sit amet mollis. Duis ut cursus dui, eget consectetur risus. Quisque nec ex quis neque consequat rutrum vel ut orci. Suspendisse eu mattis lorem. Morbi vel felis quam. Sed elementum, massa ac lacinia ultrices, tortor nisl volutpat eros, eget mollis neque est et lacus. Donec vitae lacus felis. Aliquam quis nunc et odio fermentum sollicitudin nec eu turpis. Donec ut pretium sapien. Ut nulla mauris, finibus vitae orci nec, suscipit posuere massa. Ut rhoncus nisi quis metus finibus, eget dapibus felis hendrerit. Proin a dictum ligula.

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

Suspendisse convallis, risus et scelerisque lacinia, tortor ipsum egestas ante, vitae tincidunt sapien velit eget velit. Duis feugiat faucibus dui a lobortis. Fusce commodo, dui sed sodales vestibulum, leo sem faucibus tortor, dapibus tempus eros enim sit amet leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tincidunt tellus in cursus. Pellentesque dictum tincidunt massa, vel lobortis magna placerat a. Phasellus eget elit mi. Duis eu volutpat dolor, eu hendrerit tortor. Nam fringilla libero et metus molestie, vitae tincidunt ante aliquet. Vivamus facilisis tincidunt lectus eget blandit. Donec sed erat ipsum. Morbi vitae rutrum libero.

### Company 7

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

Suspendisse convallis, risus et scelerisque lacinia, tortor ipsum egestas ante, vitae tincidunt sapien velit eget velit. Duis feugiat faucibus dui a lobortis. Fusce commodo, dui sed sodales vestibulum, leo sem faucibus tortor, dapibus tempus eros enim sit amet leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tincidunt tellus in cursus. Pellentesque dictum tincidunt massa, vel lobortis magna placerat a. Phasellus eget elit mi. Duis eu volutpat dolor, eu hendrerit tortor. Nam fringilla libero et metus molestie, vitae tincidunt ante aliquet. Vivamus facilisis tincidunt lectus eget blandit. Donec sed erat ipsum. Morbi vitae rutrum libero.

## How code search is used

Code search helps developers with many kinds of tasks. If you aren't a heavy user of code search, you've probably found other, more cumbersome ways to get these things done. Here are X ways that developers use code search:

1. Understanding how code works
2. Learning how to use a library
3. Finding usage examples
4. Debugging an issue
5. Code review
6. Deprecating and removing code
7. Incident response
8. Onboarding to a new codebase
9. Answering a team member’s questions \

Let’s dive into each example.

### 1. Understanding how code works

Being able to understand code better is valuable because that's how you spend most of your time. A code search tool helps you find a specific piece of code quickly and understand how it works.

**Find code quickly:** A good code search tool will let you find or jump to a specific piece of code within 10-15 seconds every time. You can just open the code search tool (you have a hotkey for it, right?) and type your query. It'll help you narrow down to what you're looking for, with query filters or a refinement UI.

**Reading and understanding code better:** Once you're looking at the right piece of code, a code search tool will show all kinds of other context to help you understand the code: definitions, references, hovers (with type signatures and documentation), usage stats, authorship (such as Git blame), deployment info, code test coverage, and even information from other tools such as static analyzers and runtime tracing, logging, and profiling tools.

**Why not just use an editor/IDE?** With a code search tool, you don't need to worry about cloning the code locally, checking out a different branch, reconfiguring your editor, or anything else like that. You can type in search queries with filters to narrow down to what you're looking for more quickly (vs. editors/IDEs, which have more rigid text and regexp search). When reading code, a code search tool can show many more kinds of context overlaid on code, and these types of context can be determined centrally by the repository maintainer or your company's dev tools team. (Also, many types of context, such as deployment or production error logging info, that are helpful when reading code would be distracting when editing code, so they wouldn't even make sense to enable in your editor.)

**For example:** Here's how a code search tool helped with \_\_\_\_ (TODO record a quick screencast of a specific instance of needing to understand code where code search helped, and write out the steps followed from the video)

### 2. Learning how to use a library

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

### 3. Finding usage examples

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta dui quis laoreet commodo. Maecenas venenatis faucibus sapien vel consectetur. Maecenas aliquet vestibulum semper. Ut venenatis eros quis lorem feugiat, vitae elementum velit venenatis. Phasellus consectetur, eros ut commodo pellentesque, quam velit maximus ante, ac consectetur orci ante in justo. Fusce suscipit leo at lacinia accumsan. Suspendisse elit nibh, pulvinar sed varius non, sodales non neque. Proin quis mollis sapien, eu fermentum dui. Fusce pellentesque, enim sed hendrerit fringilla, erat nisl faucibus libero, non blandit tortor neque eu lectus. Integer sit amet aliquet augue. Aliquam rutrum placerat dolor, id semper turpis fringilla in. Praesent aliquam rutrum leo elementum finibus.

Ut egestas neque risus, quis scelerisque velit eleifend eu. Pellentesque at mauris id velit fermentum eleifend non sed purus. Duis pretium consequat risus sit amet mollis. Duis ut cursus dui, eget consectetur risus. Quisque nec ex quis neque consequat rutrum vel ut orci. Suspendisse eu mattis lorem. Morbi vel felis quam. Sed elementum, massa ac lacinia ultrices, tortor nisl volutpat eros, eget mollis neque est et lacus. Donec vitae lacus felis. Aliquam quis nunc et odio fermentum sollicitudin nec eu turpis. Donec ut pretium sapien. Ut nulla mauris, finibus vitae orci nec, suscipit posuere massa. Ut rhoncus nisi quis metus finibus, eget dapibus felis hendrerit. Proin a dictum ligula.

### 4. Debugging an issue

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

Suspendisse convallis, risus et scelerisque lacinia, tortor ipsum egestas ante, vitae tincidunt sapien velit eget velit. Duis feugiat faucibus dui a lobortis. Fusce commodo, dui sed sodales vestibulum, leo sem faucibus tortor, dapibus tempus eros enim sit amet leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tincidunt tellus in cursus. Pellentesque dictum tincidunt massa, vel lobortis magna placerat a. Phasellus eget elit mi. Duis eu volutpat dolor, eu hendrerit tortor. Nam fringilla libero et metus molestie, vitae tincidunt ante aliquet. Vivamus facilisis tincidunt lectus eget blandit. Donec sed erat ipsum. Morbi vitae rutrum libero.

### 5. Code review

Ut egestas neque risus, quis scelerisque velit eleifend eu. Pellentesque at mauris id velit fermentum eleifend non sed purus. Duis pretium consequat risus sit amet mollis. Duis ut cursus dui, eget consectetur risus. Quisque nec ex quis neque consequat rutrum vel ut orci. Suspendisse eu mattis lorem. Morbi vel felis quam. Sed elementum, massa ac lacinia ultrices, tortor nisl volutpat eros, eget mollis neque est et lacus. Donec vitae lacus felis. Aliquam quis nunc et odio fermentum sollicitudin nec eu turpis. Donec ut pretium sapien. Ut nulla mauris, finibus vitae orci nec, suscipit posuere massa. Ut rhoncus nisi quis metus finibus, eget dapibus felis hendrerit. Proin a dictum ligula.

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

### 6. Deprecating and removing code

Ut egestas neque risus, quis scelerisque velit eleifend eu. Pellentesque at mauris id velit fermentum eleifend non sed purus. Duis pretium consequat risus sit amet mollis. Duis ut cursus dui, eget consectetur risus. Quisque nec ex quis neque consequat rutrum vel ut orci. Suspendisse eu mattis lorem. Morbi vel felis quam. Sed elementum, massa ac lacinia ultrices, tortor nisl volutpat eros, eget mollis neque est et lacus. Donec vitae lacus felis. Aliquam quis nunc et odio fermentum sollicitudin nec eu turpis. Donec ut pretium sapien. Ut nulla mauris, finibus vitae orci nec, suscipit posuere massa. Ut rhoncus nisi quis metus finibus, eget dapibus felis hendrerit. Proin a dictum ligula.

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

Suspendisse convallis, risus et scelerisque lacinia, tortor ipsum egestas ante, vitae tincidunt sapien velit eget velit. Duis feugiat faucibus dui a lobortis. Fusce commodo, dui sed sodales vestibulum, leo sem faucibus tortor, dapibus tempus eros enim sit amet leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tincidunt tellus in cursus. Pellentesque dictum tincidunt massa, vel lobortis magna placerat a. Phasellus eget elit mi. Duis eu volutpat dolor, eu hendrerit tortor. Nam fringilla libero et metus molestie, vitae tincidunt ante aliquet. Vivamus facilisis tincidunt lectus eget blandit. Donec sed erat ipsum. Morbi vitae rutrum libero.

### 7. Incident response

If a critical component of your application starts failing and you don't know where else to start investigating the problem, what do you do?

- You might ask in team chat, which only works if someone else around happens to have the right intuition.
- You can view the logs, which only works for errors that are clearly logged, not for many kinds of unanticipated bugs.
- You can check recent deployments, which might help you determine how to roll back in some scenarios.

For a code search tool to help you during incident response, it needs to have diff search, which lets you search through the diffs of all changes for specific terms. You can use this to figure out what code change caused the problem and who might be able to help fix it.

**For example:** Here's how diff search helped identify the cause of a bug in production at Sourcegraph. (TODO make screencast and write out the steps followed from the video)

**In the industry:** At Facebook, their internal code search tool [TODO link to section above about Facebook] early on added support for diff search. Facebook developers use diff search very frequently, especially when tracing down bugs. For some reason, diff search doesn't seem to be as commonly used at Google (if we can find out why, we'll add it here).

### 8. Onboarding to a new codebase

Ut egestas neque risus, quis scelerisque velit eleifend eu. Pellentesque at mauris id velit fermentum eleifend non sed purus. Duis pretium consequat risus sit amet mollis. Duis ut cursus dui, eget consectetur risus. Quisque nec ex quis neque consequat rutrum vel ut orci. Suspendisse eu mattis lorem. Morbi vel felis quam. Sed elementum, massa ac lacinia ultrices, tortor nisl volutpat eros, eget mollis neque est et lacus. Donec vitae lacus felis. Aliquam quis nunc et odio fermentum sollicitudin nec eu turpis. Donec ut pretium sapien. Ut nulla mauris, finibus vitae orci nec, suscipit posuere massa. Ut rhoncus nisi quis metus finibus, eget dapibus felis hendrerit. Proin a dictum ligula.

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

Maecenas blandit pellentesque metus consequat vestibulum. Ut ante ex, placerat quis venenatis in, vestibulum id mauris. Integer a justo ut sem fermentum commodo. Curabitur in orci enim. Mauris sed odio porttitor, ullamcorper diam a, pharetra felis. Donec elit massa, pharetra eu mauris sed, rhoncus laoreet velit. Curabitur ultricies, enim sed dapibus convallis, lacus neque ullamcorper ipsum, id condimentum nibh lectus quis est. Aenean id ante odio. Aliquam erat volutpat. Suspendisse a eleifend tellus. Ut mollis rhoncus commodo. Nulla facilisi.

### 9. Answering a team member's question

Nulla porttitor urna ac aliquet iaculis. Maecenas semper dictum magna vel laoreet. Cras commodo maximus mollis. Sed malesuada gravida nunc id ultrices. Integer fermentum porta molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor metus ut ex sollicitudin elementum sit amet sed urna. Sed ut sodales odio. Quisque dapibus gravida mauris vitae gravida.

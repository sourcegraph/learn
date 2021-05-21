---
title: Searching with Sourcegraph using literal patterns
author: Marek Zaluski
tags: [tutorial, search]
---

Sourcegraph allows you to search code across your own repositories as well as across public open source code. It supports three kinds of search patterns: literal patterns, regular expression patterns, and structural patterns. In this article, we’ll explore literal search patterns and how to use them.

Performing a literal search is useful when you know the exact string that you’re looking for in a code base, like a particular function or variable name. You can find all occurrences of the name across multiple repositories by using your query as a literal pattern. It’s also useful for finding textual content in the code.

By default, all search queries on Sourcegraph are treated as literal patterns. In this article we’ll discuss a few use cases of literal search patterns to find useful results using Sourcegraph.

## Finding function calls and definitions

As a developer, there are many times that you may need to learn a new codebase, whether it is for understanding how best to use a new package, to be onboarded into an existing project, or to learn best practices from tried and tested software. A productive way to become familiar with a codebase is through selecting a function and understanding how it’s used throughout the code and in what contexts.

For example, if you’re learning how the Linux kernel works, one of the topics that you may want to understand is how Linux uses linked lists. Because linked lists are used throughout the Linux kernel and in driver code, they are a foundational starting point to familiarize yourself with the codebase.

The linked list data structure in Linux is called `list_head`. We can find all instances of the `list_head` structure by searching for it directly:

<SourcegraphSearch query="list_head"/>

As you review the results, you may notice that there are some common functions that are frequently used together with linked lists. One of these functions is `list_add_tail`. To explore further and find all instances of `list_add_tail`, we can start a new search for that specific function:

<SourcegraphSearch query="list_add_tail"/>

Literal search patterns can be used to find more than just functions or variables. They can also be used to find longer pieces of text, like error messages, as we’ll explore in the next section.

## Finding error messages

Literal search can help you find where a particular piece of text occurs within code. For example, if you’re seeing an error message while debugging, it can be helpful to find where that message is defined in the code to get a better idea of what is causing it. You can search for an exact match by copying the error into your search.

Let’s try an example. React is a framework used by many web apps, and its error messages are sometimes hard to debug. When a React component throws an error, it produces an error message like, “React caught an error thrown by Component.” When you get an error message like that, it isn’t always clear what is going on. To learn more about the source of the error, you can search for the error message itself:

<SourcegraphSearch query="React caught an error thrown"/>

By finding where an error message is defined, you can start to understand what conditions will cause this error. In this case, it happens when React catches an error that happened during the rendering phase in one of your components.

This kind of search also gives you a glimpse under the hood, and that can be really helpful to get a better mental model of how the codebase works.

## Finding sequences of words

By default, when searching for literal patterns in Sourcegraph, the entire string will be searched, even if the pattern consists of multiple worlds. You should not put your query in quotes: we’ll go into more detail about this in this section.

In other words, unlike a web search engine, if you search for two or more words, like `const counter`, then you’ll only get results for `const` immediately followed by `counter`, as in the example below.

<SourcegraphSearch query="const counter"/>

Returning to our example in the Linux kernel, we can narrow down our search for `list_head` to only the cases where it’s used as a simple structure (`struct`), by searching specifically for the `struct list_head` pattern:

<SourcegraphSearch query="struct list_head"/>

If you want to find all instances of those two words appearing in the same file but not necessarily in sequence, then you can use the `and` operator, or you can switch to [regular expression mode](#todo).

To use the `and` operator, add it to your search. The following query will find occurrences of `list_head` and `list_add_tail` when they are present anywhere in the same file.

<SourcegraphSearch query="list_head and list_add_tail"/>

If you try one of these examples with quotes around the search query, like `"const counter"`, you’ll notice that you get no results. This is because the quote characters are interpreted literally, so Sourcegraph will search for a string that includes those quote characters.

There are cases where searching for quote characters is useful. We’ll explore that in the next section.

## Finding quoted string constants

Because quote characters are treated like any other character when you’re in literal pattern mode, you can search for quoted strings by including the quotes in your search.

For example, the quoted string “ENOENT” represents the error when a file is not found in Linux, and it’s found in many codebases:

<SourcegraphSearch query='"ENOENT"'/>

By including the quotes in the search query, you can compare this search with the same string, but without quotes. You’ll receive other results, where the string isn’t necessarily in quotes.

<SourcegraphSearch query='ENOENT'/>

To go beyond literal patterns, you can use regular expressions or structural search patterns. Read more in the next article in the series: Regular expression patterns.

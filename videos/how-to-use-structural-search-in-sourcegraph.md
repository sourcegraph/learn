---
title: How to use structural search in Sourcegraph
tags: [video, search, sourcegraph]
publicationDate: September 17, 2021
description: Learn about Sourcegraph structural search patterns.
author: marek-zaluski
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/how-to-use-structural-search-in-sourcegraph-thumbnail.jpg
imageAlt: Sourcegraph structural search.
type: videos
---

<EmbeddedYoutubeVideo id="GnubTdnilbc" />

## Transcript

Structural search is one of the three ways that you can search code with Sourcegraph. 

My name is Marek. I'm an engineer at Sourcegraph, and in this video, I want to show you how you can use structural search in Sourcegraph. And I'll share examples of the kinds of things that you can do with it.

Structural search is a way to search code that takes into account the code’s syntactic structure. This means it goes beyond regular expressions, which are great for matching patterns of characters, and it lets you match patterns in the structure and the syntax of the code.

Let's jump into some examples. We can use a well-known codebase, the Linux kernel. It's mostly written in C, but you can use structural search with any programming language. You can search over any public repositories that are indexed by Sourcegraph. And you can also use Sourcegraph to search your own private code.

To enable structural search, click on the structural search toggle on the right side of the search box. It's represented by an icon of square brackets (`[]`). I'll begin to search with a `repo` filter to select the Linux kernel repository on GitHub that I want to use for these examples. I'll use the language filter to specify that I'm looking for files written in C. Because structural search takes into account the programming language in its matches, you'll get better results if you specify the language with the language filter.

Suppose I want to find all calls to a function with a particular first argument. Let's say I'm looking for the function `fprintf` and I want to find all cases where the first argument is the standard error stream, or `stderr`. Since I'm only interested in the first argument, I can use a placeholder for the remaining arguments. Placeholders in structural search are called holes in the pattern. The ellipses is a type of hole that matches any number of arguments. In the results, I get matches for the pattern of the function call I was looking for, followed by any various other arguments in the function call.

Now, suppose I want to do another search for instances of the `fprintf` function. But this time, I'm interested in matching a string argument. Structural search supports using placeholders or holes in the pattern inside of quoted strings. Here's a search where I use the ellipses hole to match any initial arguments, followed by a string that starts with `ERROR` and an ellipses within the string to match anything in the string after that, and finally, followed by another ellipses to match any remaining arguments. The results show instances of these function calls, where there is a string argument that matches this pattern.

Now, let me show you how to take this example further and demonstrate that structural search understands nested structures, too. Suppose I want to narrow my search to find instances where the last argument is a specific expression. Let's say it's a call to a function named `strerror`. I can use the ellipses hole in the brackets to find all calls that match this regardless of what the arguments actually are.

I can also flip this pattern around. Suppose that I know the name of the arguments that I want to find in this function call, but I want to match any function name. I can use the ellipses hole instead of the function name, but then specify the exact argument name that I'm looking for. For example, `errno`. Now I'll get results where this specific argument name matches, but the name of the function being called here can match anything.

Now I want to show you an example of a more advanced format for the holes in a pattern. In a structural search, the ellipses placeholder matches all patterns. But sometimes we want to narrow that down further, for example, to find identifiers that conform to a particular regular expression. I'll update this pattern with a hole in the final argument that will narrow down the matches by regular expression. This is part of the structural search syntax that lets you be more detailed in the matches that you're looking for. The colon and the square brackets indicate that this is a structural search hole pattern. The tilde (`~`) indicates the start of a regular expression. And then we have a regular expression that matches any identifier that starts with `opt_`. And in the results now we're getting matches where this final argument conforms to the regular expression in this pattern that we've provided.

I hope this gives you an idea of the kinds of things that you can do with Sourcegraph. Structural search is one of the three search modes supported by Sourcegraph, the others being literal search and regular expression search. To learn more about how you can use Sourcegraph to better search and better understand your code. Check out our documentation and our learning resources add the links below.

## Learn more

- Watch: [Three ways to search with Sourcegraph](/three-ways-to-search-code-with-sourcegraph)
- Read: [How to search code with Sourcegraph — a cheat sheet](/how-to-search-code-with-sourcegraph-a-cheat-sheet)
- Browse all [Sourcegraph search tutorials](/tags/search)
- [Sourcegraph search documentation](https://docs.sourcegraph.com/search)
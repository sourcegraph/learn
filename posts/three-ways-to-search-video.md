---
title: Three Ways to Search with Sourcegraph (Video)
tags: [video, search, sourcegraph]
author: marek-zaluski
image: /headers/three-ways-to-search-thumbnail.jpg
imageAlt: Marek Zaluski demos searching with Sourcegraph.
type: posts
---

<EmbeddedYoutubeVideo id="XLfE2YuRwvw" />

## In this video

- Literal search ([tutorial](/literal-search-patterns), [docs](https://docs.sourcegraph.com/code_search/reference/queries#literal-search-default))
- Regular expression search ([tutorial](/regular-expression-patterns), ([docs](https://docs.sourcegraph.com/code_search/reference/queries#regular-expression-search))
- Structural search ([docs](https://docs.sourcegraph.com/code_search/reference/structural))

## Transcript

Hi, my name is Marek. And I'm going to tell you about the different ways that you can search with Sourcegraph. So, Sourcegraph supports three different search modes: literal search, regular expressions, and structural search. I'll tell you a little bit about each one and how you can use them.

By default Sourcegraph searches in literal search mode. This is useful when you're looking to find an exact match. For example, if you're looking for a function name, or a variable name, or an exact string in your code. Let's say that I'm looking for a function called "ReadFile". I can search for directly, and it'll find exact matches. But I can also narrow this down by saying I'm only looking for results in the Go language. So I'm getting results from a variety of different repositories that match the exact query "ReadFile".

Sometimes you're not looking for an exact match, but you're looking for a pattern. Regular Expression search can help you find patterns in you in your code. Suppose I'm looking for CSS colors that are defined as six character hex codes. I know that the CSS color code format can be defined as a regular expression. And it starts with a hash symbol, followed by characters in the range between zero and nine and between A and F. And that's repeated six times. So I've just written that pattern as a regular expression. And I can also add the keyword that narrows this down to only CSS files. And I'll enable regular expression mode for this one. So now I'm getting results that are matching anything that looks like a hex color code. I could expand on this query by adding that I'm only looking for cases where background color is the property that's been set. So now with this search query, I will see only results that match background color, followed by a hex code.

Regular expressions are useful when you're looking for a pattern in your code. But sometimes you want to take into account the actual structure of your code. This is where structural search can help. Let me show you an example. I'll enable structural search. And let's say for example, I'm looking for a function call to a function called "WriteFile". And I know that the instance that I'm looking for is where the first argument is called "path". But I wanted that to match any other arguments after that. So I'm going to use the three dots that match any other arguments in a structural search. I'm also going to restrict this only to Go files. So now I'm getting matches that correspond to function calls where the first argument is path. But the other arguments could be anything. Notice that this is using matching brackets. So even if there are expressions in this function call that contain other brackets, the search will still take that into account and correctly match the entire function call.

Now, in some cases, I see that the constant that's used as the last argument here is relevant. So I may want to narrow the search down and actually search for only the calls where a particular constant is being used as the final argument here. So if I redo this search, the now I'm seeing that I'm getting results for this function call where the first argument is the one I've specified, as well as the last one, but I'm matching any arguments in between, and they can be any expressions in the code.

So I've given you an overview of the three different ways that you can search with Sourcegraph. With each of these modes, you can also filter down by a variety of criteria like programming language, repositories, and file names and a lot of other things too. So you can look at our search query docs to learn more.

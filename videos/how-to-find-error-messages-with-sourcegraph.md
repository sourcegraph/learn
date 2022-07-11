---
title: How to find error messages with Sourcegraph (video)
authorSlug: marek-zaluski
authorDisplayName: Marek Zaluski
tags: [video, search, Sourcegraph]
publicationDate: August 11, 2021
updatedDate: August 13, 2021
description: Learn about finding error messages in your code with Sourcegraph.
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/how-to-find-error-messages-with-sourcegraph-thumbnail.jpg
imageAlt: Marek talking about finding error messages with Sourcegraph.
browserTitle: Finding software error messages with Sourcegraph universal code search
type: videos
---

<EmbeddedYoutubeVideo id="r2CpLe1h89I" />

## Related links

- [Sourcegraph Cloud code search](https://sourcegraph.com/search)
- [Sourcegraph docs](https://docs.sourcegraph.com)
- [Read about literal search patterns](/how-to-search-code-with-sourcegraph-using-literal-patterns)
- [Watch: Three Ways to Search with Sourcegraph (Video)](/three-ways-to-search-code-with-sourcegraph)

## Transcript

Have you ever been faced with an error message and spent a really long time trying to figure out where it was coming from?

My name is Marek. I'm an engineer at Sourcegraph. And I'm going to share with you my own error message story.

A few months ago, I was working on a browser extension in Chrome. And I started seeing this unfamiliar message that I hadn't seen before. It looked something like this. "Extension context invalidated." What does that even mean? I didn't know where this error was being thrown. And I didn't know where to start looking. We were loading code from a few different repositories into this browser extension bundle. So I wasn't sure where this was coming from.

At first, I tried doing some searches right in my editor to try to find an exact match for the text of this error message. But I got nowhere. I didn't find any matches in the repository that I had open at all.

So I'll show you how I actually used Sourcegraph to do a code search that helped me find the answer. By default, Sourcegraph searches for code in literal search mode. That means it looks for an exact match. For an error message, this is pretty convenient. And I can show you by pasting that error message directly into the search box. Now, I don't need to surround this search with quotes, because literal search will by default already search for the entire thing.

As soon as I get results, there's a hint about where this is coming from. And that's in the name of this repository that I'm getting. So I'm seeing chromium as the repository. This gives me a hint that this is part of the Chrome browser itself and actually not at all a part of the code base that I was working on. The chromium source code is in a public GitHub repository, and Sourcegraph searches over public code. This helped me save a lot of time and a lot of struggle to get to the bottom of this error message. And it turns out it was an issue with the way that the browser extension was being reloaded for development.

Sourcegraph's default search mode is great for error messages like this, but if you're looking for patterns, you can also use regular expressions. And you can also use structural search. So you can take a look at our documentation to learn more about that.

## Creating and editing content

To create a new post, create a new markdown file with the `.md` extension in the [`posts/`](./posts) directory.

At the top of the file, copy the following markdown block as a template to get started:

```md
---
title: Your title
authorSlug: Desired slug for your author page
authorDisplayName: Name you want displayed on your post
tags: [relevant, tags]
publicationDate: Date of merge into project
image: [bucket URL]
imageAlt: Alternative information for header image
description: Your description
alternateTitle: Browser title
type: posts
---
```

More details about these fields are below.

## Markdown front-matter fields

The block at the top of each markdown file, delimited by `---` markers, is the front-matter data which is defined in YAML format.

The data fields that are supported in the front matter are:

| Field         | Type                       | Description                                                                                                                   |
| ------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `title`       | **string**                 | Title of the article, which is displayed in the `h1` tag and the html document title, and on the article's card.              |
| `authorDisplayName` | **string**           | Name of the author, which is displayed on the article page.                                                                   |
| `authorSlug`      | **string**             | Slug of the author page, where `authorDisplayName` links.                                                                     |
| `tags`        | **array of strings**       | List of tags which will be displayed on the article page and card. Each tag has an index page that lists all tagged articles. |
| `publicationDate` | **string**             | Date that the article is merged into the project to be public-facing. Written as a string in `Month, Day, Year` format in alignment with [strings: the Sourcegraph blog](https://about.sourcegraph.com/blog/). |
| `updatedDate` | **string**                 | If and when an article is updated, the date of the new merge should be recorded in this field., following the format of `publicationDate`. |
| `image`       | **string (URL)**           | Image to display in the article header, the article card, and social preview.              |
| `imageAlt`    | **string**                 | Alternative textual information for the header image.                           |
| `browserTitle` | **string**              | Browser title, which appears on the menu bar, with additional keywords.                                      |
| `type`        | **string**                 | Content type, currently we are only using `posts`.                           |

In the website code, the front-matter data is accessible as the [`frontMatter`](./util/FrontMatter.ts) field on the [`MarkdownFile`](./util/MarkdownFile.ts) object

## Code blocks

### Code

When working with code blocks, we use two components: `<PrismSyntaxHighlighter>` and `<Highlighter>`. `<PrismSyntaxHighlighter>` includes language syntax highlighting and copy functionality, so we use this when we want to add code to a tutorial in a particular programming language (including `bash`) that readers can copy. We can also pass a `matcher` prop to the component, to highlight particular parts of the code for emphasis (the emphasized code is styled as a `<mark>` element). 

The `<PrismSyntaxHighlighter>` component looks like this:

```
<PrismSyntaxHighlighter
    input='Your code here'  
    language='Your language here'
    matcher='The code you would like to highlight (optional)'
/>
```
When you have input with line spacing that you would like to preserve, use a template literal for your input and preserve the spacing there. To do this, add an additional blank space to any line where you would like to preserve spacing. For example:

```
<PrismSyntaxHighlighter
    input={`Your code input
     // Be sure to add a blank space by pressing the spacebar at least once here!
    with multiple lines`} 
    language='Your language here'
    matcher='The code you would like to highlight (optional)'
/>
```

### Special Characters

If you have a backslash `\` in your code input, be sure to escape it as follows:

```
use GuzzleHttp\\Client
```

This will output the desired single backslash:

```
use GuzzleHttp\Client
```

### Output

When displaying output, please use the `<Highlighter>` component. You do **not** need to specify a language when using this component, since it does not include language syntax highlighting. You can pass it a `matcher`, however, to draw attention to any code you would like to emphasize.

```
<Highlighter
    input='Your code here'
    matcher='The code you would like to highlight (optional)'
/>
```

The points about spacing above also apply to this component.

## Deploy previews (staging branches)

When a pull request is created in this repository, Netlify will automatically build and deploy the branch. You can find the link to the deploy preview in the Checks section of the pull request.
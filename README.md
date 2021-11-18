# Sourcegraph Learn

Sourcegraph Learn is Sourcegraph's developer education hub and learning center.

Public URL: [https://learn.sourcegraph.com](https://learn.sourcegraph.com)

**Hacktoberfest contributors**: read how to contribute to this repository in our [Hacktoberfest 2021 contributors' guide](https://github.com/sourcegraph/learn/blob/main/docs/hacktoberfest-2021.md).

## How the site is built

- The website consists of static content generated using [Next.js](https://nextjs.org) and hosted on [Netlify](https://www.netlify.com/).
- The website code is written in TypeScript and React.
- The content is written in Markdown.

## Getting started

### Node.js

First, make sure that you have Node.js installed. You can use [`nvm`](https://github.com/nvm-sh/nvm) to automatically use the version of Node.js which is specified in the repository's [`.nvmrc`](./.nvmrc) file:

```sh
nvm install
```

Alternatively, you can use [`n`](https://www.npmjs.com/package/n) to manage your Node versions. Use the following command to install the version of Node specified in the `.nvmrc` file:

```sh 
n <node version>
```

### Install Dependencies

This repository includes a bootstrap script, `./script/install.sh`, that is designed to get you up and running quickly. 

From the top level of the project, run the following command to install dependencies:

```sh
./script/install.sh
```
This script does two things:
- It installs the dependencies specified in the `package-lock.json` file with [`npm ci`](https://docs.npmjs.com/cli/v7/commands/npm-ci).
- It also creates a local `.env` file with environment variables for local development. 

### Running the Application

To run the application, type the following command from the top level of the project:

```sh
npm run dev
```
You can now navigate to `http://localhost:3000` to inspect the application in action.

## Commands

Below, please find a list of some of the other available `npm` commands not covered above:

| Command              | Description 
| -------------------- | -------------------------- | 
| `npm run build`      | Build the static site for production. This command exports the static site with `next export`. The output will be in the `out` directory. This is the build command which is run by the Netlify build process on every deployment (on production or on preview deploys).                      |
| `npm run prettier`   | Run the `prettier` formatter on the code to format it according to the formatting style.                                                                                                                                                                      |
| `npm run eslint`     | Run the `eslint` lint checker on the code to check for issues. See [`.eslintrc.json`](./.eslintrc.json) for the `eslint` configuration.         |
| `npm run eslint-fix` | Run `eslint` with automatic fixes (with the `--fix` option). This will modify files, if automatic fixes are found. It's a good idea to run this command before committing changes.                                                                                      |
| `npm start`          | _Not currently used_. This command is reserved for the dynamic version of the site which is planned.                                                                                                                                                                     |
| `npm run clean`      | Delete the NextJS cache and output directories (`.next` and `out`). If you are experiencing unexpected NextJS crashes, run this command to clean the cache.                                                                                                                              |


## Configure the `pre-commit` Githook

To enable our pre-commit hook, update the following git config setting:

```sh
git config core.hooksPath .githooks
```

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

When working with code blocks, we use two components: `<PrismSyntaxHighlighter>` and `<OutputHighlighter>`. `<PrismSyntaxHighlighter>` includes language syntax highlighting and copy functionality, so we use this when we want to add code to a tutorial in a particular programming language (including `bash`). We can also pass a `matcher` prop to the component, to highlight particular parts of the code for emphasis (the emphasized code is styled as a `<mark>` element). 

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

## Building the production version of the site

When the site is being deployed to production, the following build command is executed and the output is in the `out/` directory.

```sh
npm run build
```

## Learn about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).

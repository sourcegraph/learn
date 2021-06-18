# Sourcegraph Learn

Sourcegraph Learn is Sourcegraph's developer education hub and learning center.

Public URL: [https://learn.sourcegraph.com](https://learn.sourcegraph.com)

## How the site is built

- The website consists of static content generated using [Next.js](https://nextjs.org) and hosted on [Netlify](https://www.netlify.com/).
- The code of the website are written in TypeScript and React.
- The content is written in Markdown.

## Commands

Here are the available commands in this repository:

| Command            | Description                                                                                                                                                                                                                                                                             |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nvm install`      | Use `nvm` to set up the project's recommended Node.js version. The version is specified [`.nvmrc`](./.nvmrc) and is automatically loaded by `nvm`. It's recommended to run this command once before running `npm install`. It requires the [`nvm`](https://github.com/nvm-sh/nvm) tool. |
| `npm install`      | Install dependencies. Run this once to set up the project, before running any other `npm` commands below.                                                                                                                                                                               |
| `npm run dev`      | Run the development server. Once running, it can be viewed at [localhost:3000](http://localhost:3000). The development server should automatically load your changes while you edit files.                                                                                              |
| `npm run build`    | Build the static site for production. This command exports the static site with `next export`. The output will be in the `out` directory. This is the build command which is run by the Netlify build process on every deployment (on production or on preview deploys).                |
| `npm run prettier` | Run the `prettier` formatter on the code to format it according to the formatting style.                                                                                                                                                                                                |
| `npm run eslint`   | _Not yet implemented_. Run the `eslint` lint checker on the code to check for issues.                                                                                                                                                                                                   |
| `npm start`        | _Not currently used_. This command is reserved for the dynamic version of the site which is planned                                                                                                                                                                                     |
| `npm run clean`    | Delete the NextJS cache and output directories (`.next` and `out`). If you are experiencing unexpected NextJS crashes, run this command to clean the cache.                                                                                                                             |

## Node.js version

The site requires Node.js. You can use [`nvm`](https://github.com/nvm-sh/nvm) to automatically use the version of Node.js which is specified in the repository's [`.nvmrc`](./.nvmrc) file:

```
nvm install
```

## How to run the site locally

Install dependencies and run the development server:

```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating and editing content

To create a new post, create a new markdown file in [`posts/`](./posts) with the `.md` extension.

At the top of the file, copy the following markdown block as a template to get started

```md
---
title: Your Title Here
author: Your Name
tags: [tutorial, search, sourcegraph]
image: headers/sourcegraph-learn-header-2.svg
description: Learn how to search on Sourcegraph...
---
```

## Markdown front-matter fields

The block at the top of each markdown file, delimited by `---` markers, is the front-matter data which is defined in YAML format.

The data fields that are supported in the front-matter are:

| Field | Type | Description |
| --- | --- | --- |
| `title` | **string** | Title of the article, which is displayed in the `h1` tag and the html document title, and on the article's card. |
| `author` | **string** | Name of the author, which is displayed on the article page. |
| `tags` | **array of strings** | List of tags which will be displayed on the article page and card. Each tag has an index page that lists all tagged articles. |
| `unlisted` | **true** or **false** | If true, the article will not be listed on index pages, and will only be accessible by direct URL. Default is false. |
| `published` | **true** or **false** | If false, the article will not be listed or accessible on the website at all. Default is true. |

In the website code, the front-matter data is accessible as the [`frontMatter`](./util/FrontMatter.ts) field on the [`MarkdownFile`](./util/MarkdownFile.ts) object.

## Deploy previews (staging branches)

When a pull request is created in this repository, Netlify will automatically build and deploy the branch. You can find the link to the deploy preview in the Checks section of the pull request.

## Building the production version of the site

When the site is being deployed to production, the following build command is executed and the output is in the `out/` directory.

```
npm run build
```

## Learn about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).

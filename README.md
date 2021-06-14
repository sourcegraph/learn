# Sourcegraph Learn

Sourcegraph Learn is Sourcegraph's developer education hub and learning center.

Public URL: [https://learn.sourcegraph.com](https://learn.sourcegraph.com)

## How the site is built

- The website consists of static content generated using [Next.js](https://nextjs.org) and hosted on [Netlify](https://www.netlify.com/).
- The code of the website are written in TypeScript and React.
- The content is written in Markdown.

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

`TODO`

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

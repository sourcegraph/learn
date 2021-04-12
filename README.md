# Sourcegraph developer education site

This is work-in-progress prototype of the developer education website. It's a static site built with Next.js and markdown.

# Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting started

Install dependencies and run the development server:

```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Node.js version

To make sure that you're using the same version of Node.js as used in the production build of the website, use `nvm` to select the version that's specified in [`.nvmrc`](.nvmrc):

```
nvm install
```

## Building the production version of the site

When the site is being deployed to production, the following build command is executed and the output is in the `out/` directory.

```
npm run build
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

// @ts-check

/** @type {import("next/dist/next-server/server/config-shared").NextConfig} */
module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  future: {
    // Enable webpack5
    webpack5: true,
  },
  env: {
    NEXT_PUBLIC_URL: process.env.DEPLOY_URL,
  },
  redirects: async () => [{ source: '/posts/:slug', destination: '/:slug', permanent: true }]
}

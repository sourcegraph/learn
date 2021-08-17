// @ts-check
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import("next/dist/next-server/server/config-shared").NextConfig} */

module.exports = withBundleAnalyzer({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack5: true,
  env: {
    NEXT_PUBLIC_URL: process.env.DEPLOY_URL,
  }
})

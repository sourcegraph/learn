const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

// @ts-check
/** @type {import("next/dist/next-server/server/config-shared").NextConfig} */

module.exports = withBundleAnalyzer({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack5: true,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
})

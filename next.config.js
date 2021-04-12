const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  future: {
    // Enable webpack5 when it gets fixed to stop emitting:
    // "Caching failed for pack: Error: Can't resolve 'fsevents'"
    webpack5: false,
  },
})

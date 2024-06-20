const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  basePath: '/doc',
  assetPrefix: '/doc',
})

module.exports = withNextra()

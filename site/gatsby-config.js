const website = 'Test'
const description = 'Test'
module.exports = {
  siteMetadata: {
    title: website,
    description: '',
    author: `@positibelabs`,
    copyright: `email@example.com`
  },
  plugins: [
    `@positibelabs/gatsby-theme-positibe-mui`,
    `@positibelabs/gatsby-theme-positibe-api`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website,
        short_name: website,
        description: `The application does cool things and makes your life better.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: 'none'
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    }
  ],
}
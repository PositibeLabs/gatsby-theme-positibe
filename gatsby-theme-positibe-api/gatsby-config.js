const https = require('https')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    'gatsby-plugin-preload-link-crossorigin',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'PositibeApi',
        fieldName: 'positibe_api',
        url: process.env.API_ENTRY_POINT,
        // HTTP headers
        // Additional options to pass to node-fetch
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.API_APPLICATION_TOKEN}`,
        },
        fetchOptions: {
          agent: new https.Agent({rejectUnauthorized: false}),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ]
}

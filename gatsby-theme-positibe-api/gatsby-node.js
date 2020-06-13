require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

// const fs = require("fs")

// Make sure the data directory exists
exports.onPreBootstrap = ({reporter}) => {
  reporter.info(`installing positibe theme`)
  if (!process.env.API_APPLICATION_ID || !process.env.API_APPLICATION_TOKEN) {
    reporter.error(`You have to define API_APPLICATION_ID and API_APPLICATION_TOKEN.`)
  }

  // const contentPath = "env.production"
  // if (!fs.existsSync(contentPath)) {
  //   reporter.info(`creating the ${contentPath} directory`)
  //   fs.mkdirSync(contentPath)
  // }
}

// You can delete this file if you're not using it
exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const id = process.env.API_APPLICATION_ID
  const {data: {positibe_api: {application}}} = await graphql(`
        query ($id: ID!) {
          positibe_api {
            application(id: $id) {
              id
              name
              pages {
                edges {
                  node {
                    id
                    permalink
                    template
                  }
                }
              }
            }
          }
        }
      `, {id: id}
  )

  application.pages.edges.forEach(({node}) => {
    createPage({
      path: node.permalink,
      component: require.resolve(`./src/templates/${node.template !== null ? node.template : 'page'}.js`),
      context: {
        id: node.id,
      },
    })
  })
}
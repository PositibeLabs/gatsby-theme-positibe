require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const fsExtra = require('fs-extra')
const fs = require('fs')
const path = require('path')

const {createRemoteFileNode} = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions
  if (node.internal.type === 'File') {
    if (node.internal.mediaType.indexOf('image') !== 0) {
      createNodeField({
        node,
        name: `src`,
        value: `/media/${node.base}`
      })
      //create a fields src for all file
      const newPath = path.join(
          process.cwd(),
          'public',
          'media',
          '',
          node.base
      );

      fsExtra.copy(node.absolutePath, newPath, err => {
        if (err) {
          console.error('Error copying file', err);
        }
      });
    }

  }
};

exports.createResolvers = ({
                             actions,
                             cache,
                             createNodeId,
                             createResolvers,
                             store,
                             reporter,
                           }) => {
  const {createNode} = actions;

  //const imageUrlFieldName = "imageUrl";
  const imageUrlFieldName = "publicUrl";
  //const schemaName = "MUMDANCE";
  const schemaName = "PositibeApi";

  const state = store.getState();
  const schema = state.schemaCustomization.thirdPartySchemas.filter(s => s._typeMap[schemaName])[0]

  if (!schema) {
    throw new Error(`SCHEMA '${schemaName} NOT FOUND'`)
  } else {
    console.log(`Found schema '${schemaName}', traversing for fields with name '${imageUrlFieldName}'`)
  }

  const typeMap = schema._typeMap;
  const resolvers = {};

  for (const typeName in typeMap) {
    const typeEntry = typeMap[typeName];
    const typeFields = (typeEntry && typeEntry.getFields && typeEntry.getFields()) || {};
    const typeResolver = {};
    for (const fieldName in typeFields) {
      if (fieldName === imageUrlFieldName) {
        typeResolver[`${fieldName}Sharp`] = {
          type: 'File',
          resolve(source) {
            const url = source[imageUrlFieldName];
            if (url) {
              return createRemoteFileNode({
                url,
                store,
                cache,
                createNode,
                createNodeId,
                reporter
              });
            }
            return null;
          },
        };
      }
    }
    if (Object.keys(typeResolver).length) {
      resolvers[typeName] = typeResolver;
    }
  }

  if (Object.keys(resolvers).length) {
    createResolvers(resolvers);
  }
}

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
      component: getComponent(node),
      context: {
        id: node.id,
      },
    })
  })
}

function getComponent(node) {
  const templatePath = `./src/templates/${node.template !== null ? node.template : 'page'}.js`
  const file = path.resolve(templatePath)
  if (!fs.existsSync(file)) {
    return require.resolve(templatePath)
  }

  return file
}
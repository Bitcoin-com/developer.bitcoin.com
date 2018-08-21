/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
// const { fmImagesToRelative } = require('gatsby-remark-relative-images');

// Allow webpack to work with absolute paths
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}


// Generate GraphQL Schema
exports.onCreateNode = ({ node, getNode, actions }) => {
  // fmImagesToRelative(node);
  const { createNodeField } = actions

  // Deal with markdown files
  if (node.internal.type === `MarkdownRemark`) {

    const filePath = createFilePath({ node, getNode })

    const filename= filePath.split('/').slice(-2, -1)


    // Split by type;
    const isDoc = filePath.includes(`/docs/`)
    let slug = filePath;

    if(isDoc) {
      let product = 'other';

      const isBitbox = filePath.includes('/bitbox/')
      const isWormhole = filePath.includes('/wormhole/')
      const isGui = filePath.includes('/gui/')
      const isRest = filePath.includes('/rest/')

      if(isBitbox) {
        slug = `/bitbox/docs/${filename}`
        product = 'bitbox'
      }
      if(isWormhole) {
        slug = `/wormhole/docs/${filename}`
        product = 'wormhole'
      }
      if(isGui) {
        slug = `/gui/docs/${filename}`
        product = 'gui'
      }
      if(isRest) {
        slug = `/rest/docs/${filename}`
        product = 'rest'
      }

      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `type`,
        value: 'docs',
      })
      createNodeField({
        node,
        name: `product`,
        value: product,
      })


    }
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query graphQL data
  const result = await graphql(`
    {
      docs: allMarkdownRemark(
        filter: { fields: { type: { eq: "docs" } } }
      ) {
        edges {
          node {
            fields {
              slug
              product
            }
          }
        }
      }
    }
  `)
  const docs = result.data.docs.edges

  docs.forEach(({ node }) => {

    const { slug, product} = node.fields;
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/docPage.js`),
      context: {
        slug,
        product
      },
    })
  })
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

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
  const { createNodeField } = actions

  // Deal with markdown files
  if (node.internal.type === `MarkdownRemark`) {
    const filePath = createFilePath({ node, getNode })
    const filename = filePath.split('/').slice(-2, -1)

    // Split by type;
    const isDoc = filePath.includes(`/docs/`)
    const isTutorial = filePath.includes('/tutorials/')
    const isInsight = filePath.includes('/insights/')
    const isChapter = filePath.includes('/mastering-bitcoin-cash/')
    let slug = filePath

    if (isDoc) {
      let product = 'other'

      // get sdk
      const isBitbox = filePath.includes('/bitbox/')
      const isSlp = filePath.includes('/slp/')
      const isGui = filePath.includes('/gui/')
      const isRest = filePath.includes('/rest/')
      const isBadger = filePath.includes('/badger/')
      const isCashScript = filePath.includes('/cashscript/')

      // get platform
      const isJs = filePath.includes('/js/')
      const isAndroid = filePath.includes('/android/')
      const isiOS = filePath.includes('/ios/')

      if (isBitbox) {
        slug = `/bitbox/docs/${filename}`
        product = 'bitbox'
      }
      if (isSlp) {
        if (isJs) {
          slug = `/slp/docs/js/${filename}`
        } else if (isAndroid) {
          slug = `/slp/docs/android/${filename}`
        } else if (isiOS) {
          slug = `/slp/docs/ios/${filename}`
        } else {
          slug = `/slp/docs/${filename}`
        }
        product = 'slp'
      }
      if (isGui) {
        slug = `/gui/docs/${filename}`
        product = 'gui'
      }
      if (isRest) {
        slug = `/rest/docs/${filename}`
        product = 'rest'
      }
      if (isBadger) {
        slug = `/badger/docs/${filename}`
        product = 'badger'
      }
      if (isCashScript) {
        slug = `/cashscript/docs/${filename}`
        product = 'cashscript'
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

    if (isTutorial) {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `type`,
        value: 'tutorial',
      })
    }

    if (isInsight) {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `type`,
        value: 'insight',
      })
    }

    if (isChapter) {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `type`,
        value: 'chapter',
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query graphQL data
  const results = await graphql(`
    {
      docs: allMarkdownRemark(filter: { fields: { type: { eq: "docs" } } }) {
        edges {
          node {
            fields {
              slug
              product
            }
          }
        }
      }
      tutorials: allMarkdownRemark(
        filter: { fields: { type: { eq: "tutorial" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      insights: allMarkdownRemark(
        filter: { fields: { type: { eq: "insight" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      chapters: allMarkdownRemark(
        filter: { fields: { type: { eq: "chapter" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Generate doc pages
  const docs = results.data.docs.edges
  docs.forEach(({ node }) => {
    const { slug, product } = node.fields
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/docPage.js`),
      context: {
        slug,
        product,
      },
    })
  })

  // Generate tutorial pages
  const tutorials = results.data.tutorials.edges
  tutorials.forEach(({ node }) => {
    const { slug } = node.fields
    createPage({
      path: slug,
      component: path.resolve('./src/templates/tutorialPage.js'),
      context: {
        slug,
      },
    })
  })

  // Generate insight pages
  const insights = results.data.insights.edges
  insights.forEach(({ node }) => {
    const { slug } = node.fields
    createPage({
      path: slug,
      component: path.resolve('./src/templates/insightPage.js'),
      context: {
        slug,
      },
    })
  })

  // Generate mastering-bitcoin-cash pages
  const chapters = results.data.chapters.edges
  chapters.forEach(({ node }) => {
    const { slug } = node.fields
    createPage({
      path: slug,
      component: path.resolve('./src/templates/chapterPage.js'),
      context: {
        slug,
      },
    })
  })
}

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
  console.log('on Create Node')
  // console.log(node)
  // const slug = createFilePath({ node, getNode })

    // console.log(slug)

  // Deal with markdown files
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node)
    console.log('markdown file found')

    const filePath = createFilePath({ node, getNode })

    const filename= filePath.split('/').slice(-2, -1)

    console.log(filePath)
    console.log(filename)
    // console.log(crash)

    // Split by type;
    const isDoc = filePath.includes(`/docs/`)
    // const isTerm = slug.includes('/terms/')
    let slug = filePath;

    if(isDoc) {
      // let type = '';

      const isBitbox = filePath.includes('/bitbox/')
      const isWormhole = filePath.includes('/wormhole/')

      if(isBitbox) {
        slug = `/bitbox/docs/${filename}`
        // type = 'bitbox'
      }
      if(isWormhole) {
        slug = `/wormhole/docs/${filename}`
        // type = 'wormhole'
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


    }

    // console.log(slug)
    // console.log(filename)
    // console.log(crash)
    // if (isArticle) {
    //   // Remove #. from start of articles
    //   const cleanedSlug = slug.replace(/\d+\./, '')
    //   const fileNode = getNode(node.parent)

    //   createNodeField({
    //     node,
    //     name: `slug`,
    //     value: cleanedSlug,
    //   })
    //   createNodeField({
    //     node,
    //     name: `type`,
    //     value: 'article',
    //   })
    // }

    // }
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
            }
          }
        }
      }
    }
  `)


  console.log('result')
  console.log(result);
  console.log('result****')
  const docs = result.data.docs.edges
  // const terms = result.data.terms.edges

  // Uncomment to only deploy published to prod
  // const allowedArticles = articles.filter(article => {
  //   console.log('article')
  //   console.log(article)

  //   return (
  //     process.env.NODE_ENV === 'development' ||
  //     article.node.frontmatter.published
  //   )
  // })

  docs.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/docPage.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

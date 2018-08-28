// @flow
import * as React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import { graphql, push } from 'gatsby'
import Helmet from 'react-helmet'


import DefaultLayout from 'components/layouts/DefaultLayout.js'
import Container from 'components/Container'

import StyledLink from 'atoms/StyledLink'
import Text from 'atoms/Text'
import H2 from 'atoms/H2'

import spacing from 'styles/spacing'
import media from 'styles/media'
import { getTitleDisplay } from 'utils/formatting'
import { getIcon } from 'utils/icon-helpers'
import { standardTransforms } from 'utils/markdown-helpers'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    ...standardTransforms,
  },
}).Compiler

type Props = {
  data: Object,
  location: Object,
}

class ChapterTemplate extends React.PureComponent<Props> {
  render() {
    const { data, location } = this.props
    const chapter = data.markdownRemark

    return (
      <DefaultLayout location={location}>
        <Helmet
          title={`${chapter.frontmatter.title} - ${
            data.site.siteMetadata.title
          }`}
        />
        <Container>{renderAst(chapter.htmlAst)}</Container>
      </DefaultLayout>
    )
  }
}

export default ChapterTemplate

export const query = graphql`
  query ChapterQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        updatedAt(formatString: "MMMM Do, YYYY")
      }
      fields {
        slug
      }
    }
  }
`

// @flow
import * as React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import { graphql, push } from 'gatsby'
import Helmet from 'react-helmet'

import StyledLink, { SmartLink } from 'atoms/StyledLink'
import DefaultLayout from 'components/layouts/DefaultLayout.js'

import Text from 'atoms/Text'
import H2 from 'atoms/H2'
import Ul from 'atoms/Ul'
import Code from 'atoms/Code'
import Pre from 'atoms/Pre'
import Select from 'atoms/Select'

import { H1Md, H2Md, H3Md, H4Md, TextMd } from 'atoms/markdownAtoms'

import Container from 'components/Container'

import spacing from 'styles/spacing'
import media from 'styles/media'
import { getTitleDisplay } from 'utils/formatting'
import { getIcon } from 'utils/icon-helpers'

// Short use inline custom component, long use codeblock
const CodePreSplitter = ({ children }) => {
  if (children[0].length > 100) {
    return <Code fontSize={14}>{children}</Code>
  }
  return <Pre>{children}</Pre>
}

// Workaround as `CodePreSplitter` captures this case as well
const PrePassthrough = ({ children }) => <>{children}</>

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: TextMd,
    pre: PrePassthrough,
    code: CodePreSplitter,
    h1: H1Md,
    h2: H2Md,
    h3: H3Md,
    h4: H4Md,
    a: SmartLink,
    ul: Ul,
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
          title={`${chapter.frontmatter.title} - ${data.site.siteMetadata.title}`}
        />
        <Container>
          {renderAst(chapter.htmlAst)}
        </Container>
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

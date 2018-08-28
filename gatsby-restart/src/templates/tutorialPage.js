// @flow
import * as React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import { graphql, push } from 'gatsby'
import Helmet from 'react-helmet'
import { FaAngleLeft } from 'react-icons/fa'

import DefaultLayout from 'components/layouts/DefaultLayout.js'
import Container from 'components/Container'

import StyledLink from 'atoms/StyledLink'
import Text from 'atoms/Text'
import H2 from 'atoms/H2'
import H3 from 'atoms/H3'
import Select from 'atoms/Select'

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

const PageLayout = styled.div`
  display: grid;
  margin-top: ${spacing.medium};
  grid-gap: ${spacing.medium};
`

// too wide is hard to read, limit to some amount;
const ArticleHolder = styled.div`
  max-width: 820px;
  display: grid;
  overflow: scroll;
  grid-template-columns: 1fr;
  word-break: break-all;
  & > div {
    display: grid;
  }
  /* Remove margin from first element of markdown content */
  & > div > *:first-child {
    margin-top: 0 !important;
  }
`

type Props = {
  data: Object,
  location: Object,
}

class DocTemplate extends React.PureComponent<Props> {
  render() {
    const { data, location } = this.props
    const tutorial = data.markdownRemark

    return (
      <DefaultLayout location={location}>
        <Helmet
          title={`${tutorial.frontmatter.title} - ${
            data.site.siteMetadata.title
          }`}
        />
        <Container>
          <PageLayout>
            <StyledLink to="/tutorials">
              <H3 centerVertical>
                <FaAngleLeft /> Tutorials
              </H3>
            </StyledLink>
            <div>
              <H2>{tutorial.frontmatter.title}</H2>
              <Text muted2>
                {tutorial.frontmatter.updatedAt ||
                  tutorial.frontmatter.publishedAt}
              </Text>
            </div>
            <ArticleHolder>{renderAst(tutorial.htmlAst)}</ArticleHolder>
          </PageLayout>
        </Container>
      </DefaultLayout>
    )
  }
}

export default DocTemplate

export const query = graphql`
  query TutorialQuery($slug: String!) {
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
        publishedAt(formatString: "MMMM Do, YYYY")
        author
      }
      fields {
        slug
      }
    }
  }
`

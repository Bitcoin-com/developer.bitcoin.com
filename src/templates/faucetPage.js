// @flow
import * as React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import { FaAngleLeft } from 'react-icons/fa'

import HelmetPlus from 'components/HelmetPlus'
import DefaultLayout from 'components/layouts/DefaultLayout.js'
import Container from 'components/Container'

import StyledLink from 'atoms/StyledLink'
import H2 from 'atoms/H2'
import H3 from 'atoms/H3'

import spacing from 'styles/spacing'
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
const InsightHolder = styled.div`
  max-width: 820px;
  display: grid;
  grid-template-columns: 1fr;
  word-break: break-word;
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

class InsightTemplate extends React.PureComponent<Props> {
  render() {
    const { data, location } = this.props
    const insight = data.markdownRemark

    return (
      <DefaultLayout location={location}>
        <HelmetPlus
          location={location}
          title={`${insight.frontmatter.title} - ${
            data.site.siteMetadata.title
          }`}
        />
        <Container>
          <PageLayout>
            <StyledLink to="/faucets">
              <H3 centerVertical>
                <FaAngleLeft /> Faucets
              </H3>
            </StyledLink>
            <div>
              <H2>{insight.frontmatter.title}</H2>
            </div>
            <InsightHolder>{renderAst(insight.htmlAst)}</InsightHolder>
          </PageLayout>
        </Container>
      </DefaultLayout>
    )
  }
}

export default InsightTemplate

export const query = graphql`
  query FaucetQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        author
      }
      fields {
        slug
      }
    }
  }
`

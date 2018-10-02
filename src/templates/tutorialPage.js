// @flow
import * as React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import { FaAngleLeft } from 'react-icons/fa'

import DefaultLayout from 'components/layouts/DefaultLayout.js'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'

import StyledLink from 'atoms/StyledLink'
import Text from 'atoms/Text'
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
const TutorialHolder = styled.div`
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

class TutorialTemplate extends React.PureComponent<Props> {
  render() {
    const { data, location } = this.props
    const tutorial = data.markdownRemark

    return (
      <DefaultLayout location={location}>
        <HelmetPlus
          location={location}
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
              {/* <Text muted2>
                {tutorial.frontmatter.updatedAt ||
                  tutorial.frontmatter.publishedAt}
              </Text> */}
            </div>
            <TutorialHolder>{renderAst(tutorial.htmlAst)}</TutorialHolder>
          </PageLayout>
        </Container>
      </DefaultLayout>
    )
  }
}

export default TutorialTemplate

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

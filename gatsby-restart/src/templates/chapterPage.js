// @flow
import * as React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import DefaultLayout from 'components/layouts/DefaultLayout.js'
import Container from 'components/Container'
import MasteringBitcoinCashAttribution from 'components/MasteringBitcoinCashAttribution'

import StyledLink from 'atoms/StyledLink'
import Text from 'atoms/Text'
import H1 from 'atoms/H1'
import H2 from 'atoms/H2'

import spacing from 'styles/spacing'

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

const PageLayout = styled.div`
  display: grid;
  margin-top: ${spacing.medium};
  grid-gap: ${spacing.small};
`

const ChapterNav = styled.div`
  display: flex;
  border-top: 2px solid ${props => props.theme.primary};
  padding-top: ${spacing.medium};
  justify-content: space-between;
  max-width: 820px;
`

// TODO: DRY this AST holder div elsewhere
const ChapterHolder = styled.div`
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

class ChapterTemplate extends React.PureComponent<Props> {
  render() {
    const { data, location } = this.props
    const chapterNode = data.markdownRemark

    const allChapters = data.allMarkdownRemark.edges
    const currentChapter = chapterNode.frontmatter.chapter

    const prevChapter = allChapters.find(
      item => item.node.frontmatter.chapter === currentChapter - 1
    )
    const nextChapter = allChapters.find(
      item => item.node.frontmatter.chapter === currentChapter + 1
    )

    return (
      <DefaultLayout location={location}>
        <Helmet
          title={`${chapterNode.frontmatter.title} - ${
            data.site.siteMetadata.title
          }`}
        />
        <Container>
          <PageLayout>
            <div>
              <StyledLink to="/mastering-bitcoin-cash">
                <Text centerVertical bold>
                  <FaAngleLeft />
                  All Chapters
                </Text>
              </StyledLink>
              <H1>Mastering Bitcoin Cash</H1>
            </div>
            <MasteringBitcoinCashAttribution />
            <div>
              <H2>
                {chapterNode.frontmatter.chapter}.{' '}
                {chapterNode.frontmatter.title}
              </H2>
              <Text muted2>Updated: {chapterNode.frontmatter.updatedAt}</Text>
            </div>
            <ChapterHolder>{renderAst(chapterNode.htmlAst)}</ChapterHolder>
            <Text monospace muted2>
              Chapter {chapterNode.frontmatter.chapter} End.
            </Text>
            <ChapterNav>
              <div>
                {prevChapter && (
                  <StyledLink to={prevChapter.node.fields.slug}>
                    <Text centerVertical monospace>
                      <FaAngleLeft /> Chapter{' '}
                      {prevChapter.node.frontmatter.chapter}
                    </Text>
                  </StyledLink>
                )}
              </div>
              <div>
                {nextChapter && (
                  <StyledLink to={nextChapter.node.fields.slug}>
                    <Text centerVertical monospace>
                      Chapter {nextChapter.node.frontmatter.chapter}{' '}
                      <FaAngleRight />
                    </Text>
                  </StyledLink>
                )}
              </div>
            </ChapterNav>
          </PageLayout>
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
        chapter
        updatedAt(formatString: "MMMM Do, YYYY")
      }
      fields {
        slug
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___chapter], order: ASC }
      filter: { fields: { type: { eq: "chapter" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            chapter
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

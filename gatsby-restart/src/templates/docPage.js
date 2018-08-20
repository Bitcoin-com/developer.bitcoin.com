// @flow
import * as React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { FaAngleLeft } from 'react-icons/fa'

import DefaultLayout from 'components/layouts/DefaultLayout.js'

import Text from 'atoms/Text'
import Container from 'components/Container'
// import StyledLink, { SmartLink } from 'components/StyledLink'

// Markdown AST transforms;
// import { Text, Title, H1, H2, H3 } from 'components/typography'

import spacing from 'styles/spacing'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { p: Text },
}).Compiler

// Layout Components

const DocLayout = Container.extend`
  padding-top: ${spacing.medium};
  display: grid;
  grid-template-areas:
    '. breadcrumbs'
    'nav content';
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content 1fr;
`

const SideNavLayout = styled.div`
  grid-area: nav;
  background-color: pink;
`

const BreadCrumbLayout = styled.div`
  grid-area: breadcrumbs;
  background-color: yellow;
`

const ContentLayout = styled.div`
  grid-area: content;
  background-color: green;
`

type Props = {
  data: Object,
  location: Object,
}

class DocTemplate extends React.PureComponent<Props> {
  render() {
    const { data, location } = this.props
    const doc = data.markdownRemark

    return (
      <DefaultLayout location={location}>
        {/* <Helmet
          title={`${doc.fields.product} - ${data.site.siteMetadata.title}`}
        /> */}
        <DocLayout>
          <SideNavLayout>side</SideNavLayout>
          <BreadCrumbLayout>bread</BreadCrumbLayout>
          <ContentLayout>{renderAst(doc.htmlAst)}</ContentLayout>
        </DocLayout>

        {/* <Helmet
          title={`${post.frontmatter.title} - ${data.site.siteMetadata.title}`}
        />
        <Main> */}
        {/* <ArticleHero>
            <div style={{ gridArea: 'back' }}>
              <StyledLink to="/articles">
                <H3Articles thin size="large" nomargin>
                  <FaAngleLeft />
                  Articles
                </H3Articles>
              </StyledLink>
            </div>
            <Title area="title">{post.frontmatter.title}</Title>
            <MetaArea>
              <Text nomargin>{post.frontmatter.date}</Text>
              <Text nomargin> {post.timeToRead} min read</Text>
              <Text nomargin mutedMore>
                by: {post.frontmatter.author}
              </Text>
            </MetaArea>
          </ArticleHero> */}

        {/* </Main> */}
      </DefaultLayout>
    )
  }
}

export default DocTemplate

export const query = graphql`
  query DocQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___ordinal], order: DESC }
      filter: {
        fields: { type: { eq: "doc" } } # add another filter to just match current type, pass in context
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

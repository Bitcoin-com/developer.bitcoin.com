// @flow
import * as React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { FaAngleLeft } from 'react-icons/fa'

import DefaultLayout from 'components/layouts/DefaultLayout.js';

import Text from 'atoms/Text';
import Container from 'components/Container'
// import StyledLink, { SmartLink } from 'components/StyledLink'

// Markdown AST transforms;
// import { Text, Title, H1, H2, H3 } from 'components/typography'


import spacing from 'styles/spacing'


const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "p": Text }
}).Compiler

// const P = Text.extend`
//   opacity: 0.9;
//   max-width: 750px;
// `

// const renderAst = new rehypeReact({
//   createElement: React.createElement,
//   components: {
//     p: P,
//     h1: H1,
//     h2: H2,
//     h3: H3,
//     a: SmartLink,
//     // 'img': ImageSingle,
//     'click-counter': ClickCounter,
//     'art-box-1': ArtBox1,
//   },
// }).Compiler

// Layout Components
const Main = Container.extend`
  padding-top: ${spacing.small};
`

const H3Articles = Text.extend`
  display: grid;
  grid-template-columns: min-content min-content;
  align-items: center;
`

const ArticleHero = styled.div`
  padding: ${spacing.large} 0;
  display: grid;
  grid-template-areas:
    'back .'
    'title title'
    'meta meta';
  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(3, min-content);
`

const MetaArea = styled.div`
  grid-area: meta;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto min-content;
  grid-column-gap: ${spacing.medium};
  padding-left: ${spacing.small};
`

type Props = {
  data: Object,
  location: Object
}

class DocTemplate extends React.PureComponent<Props> {
  render() {
    const { data, location } = this.props
    const post = data.markdownRemark

    return (
      <DefaultLayout location={location}>
        <p>testtest</p>
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

          {renderAst(post.htmlAst)}
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
      timeToRead
      frontmatter {
        title
      }
    }
  }
`

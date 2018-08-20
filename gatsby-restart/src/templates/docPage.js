// @flow
import * as React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import StyledLink from 'atoms/StyledLink'
import DefaultLayout from 'components/layouts/DefaultLayout.js'

import Text from 'atoms/Text'
import H1 from 'atoms/H1'
import H2 from 'atoms/H2'
import H3 from 'atoms/H3'
import Code from 'atoms/Code'
import Container from 'components/Container'

import spacing from 'styles/spacing'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { p: Text, code: Code, h1: H1, h2: H2, h3: H3 },
}).Compiler

// Layout Components

const DocLayout = Container.extend`
  padding-top: ${spacing.medium} !important;
  display: grid;
  grid-gap: ${spacing.medium};
  grid-template-areas:
    '. breadcrumbs'
    'nav content';
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content 1fr;
`

const SideNavLayout = styled.div`
  grid-area: nav;
  /* background-color: pink; */
`

const BreadCrumbLayout = styled.div`
  grid-area: breadcrumbs;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-gap: ${spacing.medium};
  /* background-color: yellow; */
`

const ContentLayout = styled.div`
  grid-area: content;
  /* background-color: green; */
`

type Props = {
  data: Object,
  location: Object,
}

class DocTemplate extends React.PureComponent<Props> {
  render() {
    const { data, location } = this.props
    const doc = data.markdownRemark

    const relatedDocs = data.allMarkdownRemark.edges

    return (
      <DefaultLayout location={location}>
        <Helmet
          title={`${doc.fields.product} ${doc.frontmatter.title} - ${
            data.site.siteMetadata.title
          }`}
        />
        <DocLayout>
          <SideNavLayout>
            {relatedDocs.map(node => (
              <StyledLink to={node.node.fields.slug}>
                <H3 monospace>{node.node.frontmatter.title}</H3>
              </StyledLink>
            ))}
          </SideNavLayout>
          <BreadCrumbLayout>
            <StyledLink to={doc.fields.product}>
              <H2 style={{ textTransform: 'capitalize' }}>
                {doc.fields.product} Docs
              </H2>
            </StyledLink>{' '}
            <H2 style={{ display: 'flex', alignItems: 'center' }}>
              <FaAngleRight />
            </H2>{' '}
            <H2>{doc.frontmatter.title}</H2>
          </BreadCrumbLayout>
          <ContentLayout>{renderAst(doc.htmlAst)}</ContentLayout>
        </DocLayout>
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
      fields {
        product
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___ordinal] }
      filter: {
        fields: { type: { eq: "docs" } } # add another filter to just match current type, pass in context
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

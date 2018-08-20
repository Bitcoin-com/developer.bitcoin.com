// @flow
import * as React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

import { FaAngleLeft, FaAngleRight, FaEllipsisH, FaPlus, FaHome, FaTerminal } from 'react-icons/fa'

import StyledLink, { SmartLink } from 'atoms/StyledLink'
import DefaultLayout from 'components/layouts/DefaultLayout.js'

import Text from 'atoms/Text'
import H1 from 'atoms/H1'
import H2 from 'atoms/H2'
import H3 from 'atoms/H3'
import Ul from 'atoms/Ul';
import Code from 'atoms/Code'
import Pre from 'atoms/Pre'

import { H2Md, H3Md, TextMd } from 'atoms/markdownAtoms';

import Container from 'components/Container'

import spacing from 'styles/spacing'

// Short use inline custom component, long use codeblock
const CodePreSplitter = ({ children }) => {
  if (children[0].length > 100) {
    return <Code fontSize={14}>{children}</Code>
  }
  return <Pre>{children}</Pre>
}

// Workaround as `CodePreSplitter` captures this case as well
const PrePassthrough = ({children}) => (
  <>
  {children}
  </>
)

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: TextMd,
    pre: PrePassthrough,
    code: CodePreSplitter,
    h1: H1,
    h2: H2Md,
    h3: H3Md,
    a: SmartLink,
    ul: Ul,
  },
}).Compiler

// Layout Components
const DocLayout = styled.div`
  padding-top: ${spacing.medium} !important;
  display: grid;
  grid-column-gap: ${spacing.medium};
  grid-row-gap: ${spacing.small};
  grid-template-areas:
    'breadcrumbs .'
    'content nav';
  grid-template-columns: 1fr max-content;
  grid-template-rows: max-content max-content;
`

const SideNavLayout = styled.div`

  grid-area: nav;
`
const SideNavSticky = styled.div`
  position: sticky;
  top: 100px;
`

const BreadCrumbLayout = styled.div`
  grid-area: breadcrumbs;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-gap: ${spacing.small};
`

const ContentLayout = styled.div`
  grid-area: content;
  display: grid;
  overflow: scroll;
  grid-template-columns: 1fr;
  & > div {
    display: grid;
  }
  .docActive { 
    background-color: pink;

  }
`

// TODO: Fill this out for all the docs, might need another argument to identify doc product
const getIcon = (icon: string): React.Node => {
  const ItemIcon = {
    elipses: <FaEllipsisH />,
    plus: <FaPlus />,
    home: <FaHome/>,
    terminal: <FaTerminal />
  }[icon.toLowerCase()] || <FaAngleRight />

  return ItemIcon
}

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
        <Container>
        <DocLayout>
          <SideNavLayout>
            <SideNavSticky>
            {relatedDocs.map(node => (
              <StyledLink to={node.node.fields.slug} isActive={location.pathname === node.node.fields.slug}>
                <H3 monospace centerVertical>
                  {getIcon(node.node.frontmatter.icon)}
                  &nbsp;
                  {node.node.frontmatter.title}
                </H3>
              </StyledLink>
            ))}
            </SideNavSticky>
          </SideNavLayout>
          <BreadCrumbLayout>
            <StyledLink to={doc.fields.product}>
              <H2 style={{ textTransform: 'capitalize' }}>
                {doc.fields.product} Docs
              </H2>
            </StyledLink>{' '}
            <H2 centerVertical>
              {getIcon(doc.frontmatter.icon)}
            </H2>
            <H2>{doc.frontmatter.title}</H2>
          </BreadCrumbLayout>
          <ContentLayout>{renderAst(doc.htmlAst)}</ContentLayout>
        </DocLayout>
        </Container>
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
        icon
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
            icon
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

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

// Layout Components
const DocLayout = styled.div`
  padding-top: ${spacing.medium} !important;
  display: grid;
  grid-column-gap: ${spacing.medium};
  grid-row-gap: ${spacing.medium};
  grid-template-areas:
    'nav'
    'breadcrumbs'
    'content';
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content;

  ${media.medium`
    grid-template-areas:
      'nav breadcrumbs'
      'nav content';
    grid-template-columns: max-content 1fr;
    grid-template-rows: max-content max-content;

  `};
`

const SideNavLayout = styled.div`
  grid-area: nav;
  position: relative;
`
const SideNavSticky = styled.div`
  position: sticky;
  top: 75px;
  display: grid;
  grid-template-rows: min-content max-content min-content;
  grid-gap: ${spacing.medium};
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
  /* Remove margin from first element of markdown content */
  & > div > *:first-child {
    margin-top: 0 !important;
  }
`
const LinksLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
  ${media.medium`
    grid-gap: 0;
  `};
`
const NavFooter = styled.div`
  display: grid;
`

type NavProps = {
  location: Object,
  docs: Object[]
}
class NavLinks extends React.PureComponent<NavProps> {
  render() {
    const { docs, location } = this.props
    return (
      <LinksLayout>
        {docs.map(node => (
          <StyledLink
            key={node.node.fields.slug}
            to={node.node.fields.slug}
            isActive={location.pathname === node.node.fields.slug}
          >
            <Text monospace centerVertical size="small">
              {getIcon(node.node.frontmatter.icon)}
              &nbsp;
              {node.node.frontmatter.title}
            </Text>
          </StyledLink>
        ))}
      </LinksLayout>
    )
  }
}

type Props = {
  data: Object,
  location: Object,
}

class DocTemplate extends React.PureComponent<Props> {
  changeDocs(event: SyntheticEvent<onSelect>) {
    push(`/${event.target.value}`)
  }

  render() {
    const { data, location } = this.props
    const doc = data.markdownRemark

    const relatedDocs = data.allMarkdownRemark.edges

    return (
      <DefaultLayout location={location}>
        <Helmet
          title={`${getTitleDisplay(doc.fields.product)}: ${
            doc.frontmatter.title
          } - ${data.site.siteMetadata.title}`}
        />
        <Container>
          <DocLayout>
            <SideNavLayout>
              <SideNavSticky>
                <StyledLink isActive to={`/${doc.fields.product}`}>
                  <H2 isTitle>{getTitleDisplay(doc.fields.product)}</H2>
                </StyledLink>
                <NavLinks docs={relatedDocs} location={location} />

                <NavFooter>
                  <Select onChange={this.changeDocs} size="small">
                    <option
                      selected={'bitbox' === doc.fields.product}
                      value={'bitbox/docs/getting-started'}
                    >
                      {getTitleDisplay('bitbox')}
                    </option>
                    <option
                      selected={'wormhole' === doc.fields.product}
                      value={'wormhole/docs/getting-started'}
                    >
                      {getTitleDisplay('wormhole')}
                    </option>
                    <option
                      selected={'rest' === doc.fields.product}
                      value={'rest/docs/getting-started'}
                    >
                      {getTitleDisplay('rest')}
                    </option>
                    <option
                      selected={'gui' === doc.fields.product}
                      value={'gui/docs/getting-started'}
                    >
                      {getTitleDisplay('gui')}
                    </option>
                  </Select>
                </NavFooter>
              </SideNavSticky>
            </SideNavLayout>
            <BreadCrumbLayout>
              <H2 centerVertical>{getIcon(doc.frontmatter.icon)}</H2>
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
  query DocQuery($slug: String!, $product: String!) {
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
      filter: { fields: { type: { eq: "docs" }, product: { eq: $product } } }
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

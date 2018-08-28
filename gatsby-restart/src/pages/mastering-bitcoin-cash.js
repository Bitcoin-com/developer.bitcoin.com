// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H2 from 'atoms/H2'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import StyledLink, { SmartLink } from 'atoms/StyledLink'

import Ul from 'atoms/Ul'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/learn-bitcoin-cash-header.jpg'
import MasteringBitcoinCashAttribution from 'components/MasteringBitcoinCashAttribution';

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const PageLayout = styled.div`
  display: grid;
  margin-top: ${spacing.medium};
  grid-gap: ${spacing.small};
`

const ChapterLayout = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-row-gap: ${spacing.tiny};
  grid-column-gap: ${spacing.tiny};
`

type Props = {
  location: Object,
  data: Object,
}

const Learn = ({ location, data }: Props) => {
  const chapters = data.allMarkdownRemark.edges

  return (
    <DefaultLayout location={location}>
      <Hero image={HeroImg}>
        <HeroLayout>
          <StyledLink to="/learn">
            <H3 centerVertical>
              {' '}
              <FaAngleLeft />
              Learn
            </H3>
          </StyledLink>
          <H1 background>Mastering Bitcoin Cash</H1>
          <H3 background>Build a foundation of knowledge</H3>
        </HeroLayout>
      </Hero>
      <Container>
        <PageLayout>
          <MasteringBitcoinCashAttribution />
          <H2>Chapters</H2>
          <ChapterLayout>
            {chapters.map(chapter => (
              <React.Fragment key={chapter.node.frontmatter.slug}>
                <H3 monospace>{chapter.node.frontmatter.chapter}.</H3>
                <H3>
                  <StyledLink to={chapter.node.fields.slug}>
                    {chapter.node.frontmatter.title}
                  </StyledLink>
                </H3>
              </React.Fragment>
            ))}
          </ChapterLayout>
        </PageLayout>
      </Container>
    </DefaultLayout>
  )
}

export default Learn

export const query = graphql`
  query MasteringBookQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___chapter], order: ASC }
      filter: { fields: { type: { eq: "chapter" } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            chapter
            updatedAt(formatString: "MMMM Do, YYYY")
            publishedAt(formatString: "MMMM Do, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

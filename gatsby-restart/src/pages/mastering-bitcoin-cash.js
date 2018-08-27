// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'

import { FaAngleRight } from 'react-icons/fa'

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
  grid-gap: ${spacing.small};
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
          <H1 background>Mastering Bitcoin Cash</H1>
          <H3 primary>Build a foundation of knowledge</H3>
        </HeroLayout>
      </Hero>
      <Container>
        <PageLayout>
          <Text>
            The following is based on{' '}
            <SmartLink to="https://github.com/bitcoinbook/bitcoinbook">
              Mastering Bitcoin
            </SmartLink>{' '}
            by Andreas M. Antonopoulos
            <SmartLink to="https://github.com/bitcoinbook/bitcoinbook#mastering-bitcoin---first-edition">
              First Edition
            </SmartLink>{' '}
            which is licensed under{' '}
            <SmartLink to="https://creativecommons.org/licenses/by-sa/4.0/">
              Creative Commons Attribution-ShareAlike
            </SmartLink>
          </Text>
          <H2>Chapters</H2>
          <ChapterLayout>
            {chapters.map(chapter => (
              <H3>
                {chapter.node.frontmatter.chapter}.
                <StyledLink to={chapter.node.fields.slug}>
                  {chapter.node.frontmatter.title}
                </StyledLink>
              </H3>
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
      sort: { fields: [frontmatter___chapter], order: DESC }
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

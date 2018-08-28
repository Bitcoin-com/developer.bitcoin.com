// @flow

import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'

import { FaAngleRight } from 'react-icons/fa'

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H2 from 'atoms/H2'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import StyledLink from 'atoms/StyledLink'

import Ul from 'atoms/Ul'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/learn-bitcoin-cash-header.jpg'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const PreviewLayout = styled.div`
  margin-top: ${spacing.medium};
  display: grid;
  grid-gap: ${spacing.medium};
`

const PostPreviewLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`
const PostHeaderLayout = styled.div``

type Props = {
  location: Object,
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string,
            updatedAt: string,
            createdAt: string,
          },
        },
      },
    },
  },
}

const Insights = ({ location, data }: Props) => {
  console.log('Tutorials')
  console.log(data)
  const posts = data.allMarkdownRemark.edges

  return (
    <DefaultLayout location={location}>
      <Hero image={HeroImg}>
        <HeroLayout>
          <H1 background>Insights</H1>
          <H3 primary>
          Learn from developers who have shipped successful apps.
          </H3>
        </HeroLayout>
      </Hero>
      <Container>
          <PreviewLayout>
        {posts.map(tutorial => (
          <PostPreviewLayout>
            <PostHeaderLayout>
              <StyledLink to={tutorial.node.fields.slug}>
                <H3>{tutorial.node.frontmatter.title} </H3>
              </StyledLink>
              <Text size="tiny">{tutorial.node.frontmatter.updatedAt}</Text>
            </PostHeaderLayout>
            <Text>{tutorial.node.excerpt}</Text>
            <StyledLink to={tutorial.node.fields.slug}>
              <Text centerVertical>
                Read more <FaAngleRight />
              </Text>
            </StyledLink>
          </PostPreviewLayout>
        ))}
        </PreviewLayout>
      </Container>
    </DefaultLayout>
  )
}

export default Insights

export const query = graphql`
  query InsightsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___updatedAt], order: DESC }
      filter: { fields: { type: { eq: "insight" } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
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

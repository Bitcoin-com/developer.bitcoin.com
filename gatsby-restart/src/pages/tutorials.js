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

const TutorialPreviewLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`
const TutorialHeaderLayout = styled.div``

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

const Tutorials = ({ location, data }: Props) => {
  console.log('Tutorials')
  console.log(data)
  const tutorials = data.allMarkdownRemark.edges

  return (
    <DefaultLayout location={location}>
      <Hero image={HeroImg}>
        <HeroLayout>
          <H3 primary>
            Step by step instructions to build Bitcoin Cash apps from scratch
          </H3>
          <H1 background>Tutorials</H1>
          <H3 background>
            Real world examples to learn from and bootstrap your next Bitcoin
            Cash project
          </H3>
        </HeroLayout>
      </Hero>
      <Container>
          <PreviewLayout>
        {tutorials.map(tutorial => (
          <TutorialPreviewLayout>
            <TutorialHeaderLayout>
              <StyledLink to={tutorial.node.fields.slug}>
                <H3>{tutorial.node.frontmatter.title} </H3>
              </StyledLink>
              <Text size="tiny">{tutorial.node.frontmatter.updatedAt}</Text>
            </TutorialHeaderLayout>
            <Text>{tutorial.node.excerpt}</Text>
            <StyledLink to={tutorial.node.fields.slug}>
              <Text centerVertical>
                Read more <FaAngleRight />
              </Text>
            </StyledLink>
          </TutorialPreviewLayout>
        ))}
        </PreviewLayout>
      </Container>
    </DefaultLayout>
  )
}

export default Tutorials

export const query = graphql`
  query TutorialsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___updatedAt], order: DESC }
      filter: { fields: { type: { eq: "tutorial" } } }
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

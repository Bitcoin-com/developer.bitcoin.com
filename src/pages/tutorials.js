// @flow

import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'
import InfoCard from 'components/InfoCard'

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H1 from 'atoms/H1'
import StyledLink from 'atoms/StyledLink'

import spacing from 'styles/spacing'
import media from 'styles/media'

import HeroImg from 'images/learn-bitcoin-cash-header.jpg'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const PreviewLayout = styled.div`
  display: grid;
  padding-top: ${spacing.large};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: .7fr;
  `};
`

const TutorialPreviewLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
  padding-left: ${spacing.tiny};
  border-left: 2px solid ${props => props.theme.primary};
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
          excerpt: string,
        },
      },
    },
  },
}

const Tutorials = ({ location, data }: Props) => {
  const tutorials = data.allMarkdownRemark.edges

  return (
    <DefaultLayout location={location}>
      <HelmetPlus
        title={`Tutorials - developer.bitcoin.com`}
        description={
          'Tutorials for the building on Bitcoin Cash, utilizing the Bitbox and Wormhole SDKs'
        }
        keywords={
          'bitbox, tutorials, developer tools, bitcoin, bitcoin cash, BCH, wormhole, sdk, api'
        }
        location={location}
      />
      <Hero image={HeroImg}>
        <HeroLayout>
          <StyledLink to="/learn">
            <H3 centerVertical>
              {' '}
              <FaAngleLeft />
              Learn
            </H3>
          </StyledLink>
          <H1 background>Tutorials</H1>
          <H3 background>
            Real world examples to learn from and bootstrap your next Bitcoin
            Cash project
          </H3>
        </HeroLayout>
      </Hero>
      <Container>
        <PreviewLayout>
          {tutorials.map((tutorial, idx) => (
            <InfoCard
              to={tutorial.node.fields.slug}
              title={tutorial.node.frontmatter.title}
              text={tutorial.node.description || tutorial.node.excerpt}
              cta="Read"
            />
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
      sort: { fields: [frontmatter___ordinal], order: DESC }
      filter: { fields: { type: { eq: "tutorial" } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'

import InfoCard from 'components/InfoCard'

import H3 from 'atoms/H3'
import H1 from 'atoms/H1'

import media from 'styles/media'
import spacing from 'styles/spacing'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const SectionLayout = styled.div`
  display: grid;
  padding-top: ${spacing.medium};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: repeat(auto-fit, minmax(400px, .5fr));
  `};
`

type Props = {
  location: Object,
  data: { heroImage: any },
}

const Learn = ({ location, data }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`Learn - ${data.site.siteMetadata.title}`}
      description={
        'Learning center and resources for all of your Bitcoin Cash development needs'
      }
      keywords={
        'learn, bitbox, bitcoin cash tutorials, developer tools, bitcoin, bitcoin cash, bitcoin sdk, BCH, sdk, bitcoin cash api'
      }
      location={location}
    />
    <Hero image={data.heroImage}>
      <HeroLayout>
        <H1 background>Learn</H1>
        <H3 primary thin>
          Go from hobbyist to professional step-by-step
        </H3>
      </HeroLayout>
    </Hero>
    <Container>
      <SectionLayout>
        <InfoCard
          to="/tutorials"
          title="Tutorials"
          text="Step by step instructions to build Bitcoin Cash apps from scratch.
            See real world examples built and have your own working copies
            to bootstrap your project from."
          cta="View"
        />
        <InfoCard
          to="/insights"
          title="Insights"
          text="Learn from developers who have already shipped successful apps. What
            worked and what would they do different?"
          cta="View"
        />
        <InfoCard
          to="/mastering-bitcoin-cash"
          title="Mastering Bitcoin Cash"
          text="Based on Mastering Bitcoin by Andreas M. Antonopoulos, Mastering
            Bitcoin Cash is the ultimate guide to bring your knowledge from
            beginner to professional step by step."
          cta="Read"
        />
      </SectionLayout>
    </Container>
  </DefaultLayout>
)

export default Learn

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    heroImage: file(relativePath: { eq: "hero-learn.jpg" }) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#f9b016", shadow: "#191919" }
          maxWidth: 2000
          quality: 85
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

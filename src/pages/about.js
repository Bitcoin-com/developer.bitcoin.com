// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { FaCube } from 'react-icons/fa'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'

import Code from 'atoms/Code'
import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H1 from 'atoms/H1'
import { SmartLink } from 'atoms/StyledLink'

import media from 'styles/media'
import spacing from 'styles/spacing'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const AboutLayout = styled.div`
  display: grid;
  margin-top: ${spacing.large};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: 1fr 1fr;
  `};
`

const Item = styled.div``

const InstallCTA = styled.div`
  display: grid;
  grid-gap: ${spacing.small};
  align-content: end;
  justify-items: center;
`

type Props = {
  location: Object,
  data: { heroImage: any },
}

const About = ({ location, data }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`About  - developer.bitcoin.com`}
      description={
        'Bitcoin.com developer platform.  Developer Tooling, Resources, Cloud, and Marker'
      }
      keywords={
        'about, bitbox, tutorials, developer tools, bitcoin, bitcoin cash, BCH, wormhole, sdk, api'
      }
      location={location}
    />
    <Hero image={data.heroImage}>
      <HeroLayout>
        <H3 primary>Bitcoin.com's developer platform</H3>
        <H1 background>About</H1>
        <H3 background>Developer Tooling, Resources, Cloud, and Market</H3>
      </HeroLayout>
    </Hero>
    <Container>
      <AboutLayout>
        <Item>
          <H3>BITBOX</H3>
          <Text>
            Bitcoin.com’s developer platform is based on the popular BITBOX
            javascript framework. Offering utility methods for Mnemonics,
            HDNodes, ECPairs, Crypto, Address conversion, Transactions and much
            more.
          </Text>
        </Item>
        <InstallCTA>
          <H3 centerVertical>
            <FaCube />
            &nbsp; BITBOX SDK
          </H3>

          <SmartLink to="https://www.npmjs.com/package/bitbox-sdk">
            Install via NPM
          </SmartLink>
          <Code language="bash">npm install -g bitbox-sdk</Code>
        </InstallCTA>
        <Item>
          <H3>REST</H3>
          <Text>
            The BCH JSON RPC over HTTP including a fully documented and
            interactive GUI which developers can use to test their ideas and
            confirm their code is making proper API calls.
          </Text>
        </Item>
        <Item>
          <H3>Cloud</H3>
          <Text>
            Blockchain-as-a-Service. Infrastructure to deploy and scale your
            apps. An ecosystem of add-ons for data, monitoring, logging,
            metrics, testing and more all built w/ BITBOX.
          </Text>
        </Item>
        <Item>
          <H3>Market</H3>
          <Text>
            Paid downloads, streaming media, in-app purchases, tokens and more
            ways for you to monetize.
          </Text>
        </Item>
      </AboutLayout>
    </Container>
  </DefaultLayout>
)

export default About

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero.jpeg" }) {
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

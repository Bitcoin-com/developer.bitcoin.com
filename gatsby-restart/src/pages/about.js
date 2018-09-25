// @flow

import * as React from 'react'
import styled from 'styled-components'
import { FaCube } from 'react-icons/fa'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'

import Code from 'atoms/Code'
import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H2 from 'atoms/H2'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import StyledLink from 'atoms/StyledLink'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/hero.jpeg'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const AboutLayout = styled.div`
  display: grid;
  margin-top: ${spacing.medium};
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
}

const About = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <Hero image={HeroImg}>
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
            Bitcoin.com’s new developer plaform is based on the popular BITBOX
            javascript framework which has been downlaoded 42,000+ times from
            100+ countries. Offering utility methods for Mnemonics, HDNodes,
            ECPairs, Crypto, Address conversion, Transactions and much more.
          </Text>
        </Item>
        <InstallCTA>
          <H3 centerVertical>
            <FaCube />
            &nbsp; BITBOX SDK
          </H3>
          <Text>42,000+ downloads</Text>

          <Text>100+ countries</Text>

          <Text muted2>Install via NPM</Text>
          <Code language="bash">npm install -g bitbox-cli</Code>
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

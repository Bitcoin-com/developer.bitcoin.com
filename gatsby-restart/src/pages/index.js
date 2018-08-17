// @flow

import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H2 from 'atoms/H2'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import Code from 'atoms/Code'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/hero2.jpg'
import { FaCube, FaCogs, FaCreditCard, FaCartPlus } from 'react-icons/fa'

const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${spacing.large};
  ${media.medium`
    grid-template-columns: auto auto;
  `};
`

const HeroBlurbLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: ${spacing.medium};
`

const HeroButtonLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.medium};
  grid-template-columns: auto 1fr;
`
const SDKLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.small};
  grid-template-rows: repeat(5, min-content);
  align-content: end;
  justify-items: center;
`

const WhyDevelopLayout = styled.div`
  padding-top: ${spacing.large} !important;
  display: grid;
  grid-gap: ${spacing.medium};
  max-width: 900px;
`

const FeaturesLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: ${spacing.medium};
  margin-top: ${spacing.large};
`

const Feature = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  grid-gap: ${spacing.small};
`

const IndexPage = () => (
  <DefaultLayout>
    <Hero image={HeroImg}>
      <HeroLayout>
        <HeroBlurbLayout>
          <H3 primary> Bitcoin.com Developer Platform</H3>
          <H1 background>Change the world with Bitcoin Cash</H1>
          <H3 background>Developer Tooling, Cloud, and Market</H3>
          <HeroButtonLayout>
            <Link to="/">
              <Button round>BITBOX SDK</Button>
            </Link>
            <Link to="/">
              <Button round>Wormhole SDK</Button>
            </Link>
          </HeroButtonLayout>
        </HeroBlurbLayout>
        <SDKLayout>
          <H3 background>
            <FaCube />
            &nbsp; BitBox SDK
          </H3>
          <Text background>39,000+ downloads</Text>

          <Text background>100+ countries</Text>

          <Text background muted2>
            Install via NPM
          </Text>
          <Code>npm install -g bitbox-cli</Code>
        </SDKLayout>
      </HeroLayout>
    </Hero>

    <Container>
      <WhyDevelopLayout>
        <H2 title>Why develop on Bitcoin Cash?</H2>
        <Text>
          Money is critical to the Human Condition. Bitcoin Cash and Blockchain
          technology enable financial sovereignty in a way which is unique in
          history.
        </Text>
        <Text>
          Bitcoin Cash is the soundest money the world has ever known. As a
          developer you can make it available to all people, whatever their age,
          gender, nationality or financial status.
        </Text>
      </WhyDevelopLayout>
      <FeaturesLayout>
        <Feature>
          <H3><FaCogs />&nbsp; Build on BCH</H3>
          <Text>
            Leverage the blockchain to build decentralized and censorship
            resistant applications. Help bring financial sovereignty to every
            corner of the world.
          </Text>
        </Feature>
        <Feature>
          <H3><FaCreditCard/>&nbsp; Create Transactions</H3>
          <Text>
          BITBOX supports all standard transaction types including P2PK, P2PKH, P2MS, P2SH and nullData as well as having full support for all Bitcoin Cash OP codes. Send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction.
          </Text>
        </Feature>
        <Feature>
          <H3><FaCartPlus/>&nbsp; BCommerce Solutions</H3>
          <Text>
          Blockchain commerce is the future of online business. Bitcoin Cash is the money of the Internet Nation. Together they enable an entirely new class of application.
          </Text>
        </Feature>
        <Feature>
          <H3><FaCube/>&nbsp; On chain applications</H3>
          <Text>
          Distributed, immutable, decentralized—the blockchain offers capabilities which are extremely powerful. Take your application to the next level with Bitcoin Cash.
          </Text>
        </Feature>
      </FeaturesLayout>
    </Container>
    <Link to="/page-2/">Go to page 2</Link>
  </DefaultLayout>
)

export default IndexPage

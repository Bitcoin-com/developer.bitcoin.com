// @flow

import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container';

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H2 from 'atoms/H2';
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import Code from 'atoms/Code'


import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/hero2.jpg'
import { FaCube } from 'react-icons/fa'

const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${spacing.large};
  ${media.large`
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

const WhyDevelopLayout = Container.extend`
  padding-top: ${spacing.large} !important;
  display: grid;
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

          <Text background muted2>Install via NPM</Text>
          <Code>npm install -g bitbox-cli</Code>
        </SDKLayout>
      </HeroLayout>
    </Hero>

    <WhyDevelopLayout>
      <H2 title>Why develop on Bitcoin Cash?</H2>
      <Text>Money is critical to the Human Condition. Bitcoin Cash and Blockchain technology enable financial sovereignty in a way which is unique in history.</Text>
      <Text>Bitcoin Cash is the soundest money the world has ever known. As a developer you can make it available to all people, whatever their age, gender, nationality or financial status.</Text>
    </WhyDevelopLayout>
    <Link to="/page-2/">Go to page 2</Link>
  </DefaultLayout>
)

export default IndexPage

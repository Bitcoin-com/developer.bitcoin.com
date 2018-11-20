// @flow

import * as React from 'react'
import styled from 'styled-components'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'
import InfoCard from 'components/InfoCard'

import H3 from 'atoms/H3'
import H1 from 'atoms/H1'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/learn-bitcoin-cash-header.jpg'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const SectionLayout = styled.div`
  display: grid;
  padding-top: ${spacing.large};
  padding-bottom: ${spacing.large};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: repeat(auto-fit, minmax(400px, .5fr));
  `};
`

type Props = {
  location: Object,
}

const Faucet = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`Faucet - developer.bitcoin.com`}
      description={'Testnet BCH and WHC for developers'}
      keywords={
        'faucet, bitbox, tutorials, developer tools, bitcoin, bitcoin cash, BCH, wormhole, sdk, api'
      }
      location={location}
    />
    <Hero image={HeroImg}>
      <HeroLayout>
        <H1 background>Faucets</H1>
        <H3 primary>Testnet BCH and WHC for developers</H3>
      </HeroLayout>
    </Hero>
    <Container>
      <SectionLayout>
        <InfoCard
          to="/faucets/bch"
          title="BCH Testnet Faucet"
          text="Bitcoin Cash testnet faucet.  Get some testnet BCH for your development needs"
          cta="View"
        />
        <InfoCard
          to="/faucets/whc"
          title="WHC Testnet Faucet"
          text="Wormhole testnet faucet.  Get some testnet BCH for your development needs"
          cta="View"
        />
      </SectionLayout>
    </Container>
  </DefaultLayout>
)

export default Faucet

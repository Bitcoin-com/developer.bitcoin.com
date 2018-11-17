// @flow

import * as React from 'react'
import styled from 'styled-components'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'
import WhcFaucet from 'components/whc-faucet'

import H3 from 'atoms/H3'
import H1 from 'atoms/H1'

import spacing from 'styles/spacing'

import HeroImg from 'images/learn-bitcoin-cash-header.jpg'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

type Props = {
  location: Object,
}

const Faucet = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`Testnet WHC Faucet - developer.bitcoin.com`}
      description={'Testnet BCH for developers'}
      keywords={
        'faucet, bitbox, tutorials, developer tools, bitcoin, bitcoin cash, BCH, wormhole, sdk, api'
      }
      location={location}
    />
    <Hero image={HeroImg}>
      <HeroLayout>
        <H1 background>Testnet WHC Faucet</H1>
        <H3 primary>For developers</H3>
      </HeroLayout>
    </Hero>
    <Container>
      <WhcFaucet />
    </Container>
  </DefaultLayout>
)

export default Faucet

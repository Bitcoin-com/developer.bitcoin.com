// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'
import WhcFaucet from 'components/whc-faucet'

import H3 from 'atoms/H3'
import H1 from 'atoms/H1'

import spacing from 'styles/spacing'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

type Props = {
  location: Object,
  data: { heroImage: any },
}

const Faucet = ({ location, data }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`Testnet WHC Faucet - developer.bitcoin.com`}
      description={'Testnet BCH for developers'}
      keywords={
        'faucet, bitbox, tutorials, developer tools, bitcoin, bitcoin cash, BCH, wormhole, sdk, api'
      }
      location={location}
    />
    <Hero image={data.heroImage}>
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

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "learn-bitcoin-cash-header.jpg" }) {
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

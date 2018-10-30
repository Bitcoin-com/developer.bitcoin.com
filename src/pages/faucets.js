// @flow

import * as React from 'react'
import styled from 'styled-components'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'

import { FaAngleRight } from 'react-icons/fa'

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H1 from 'atoms/H1'
import StyledLink from 'atoms/StyledLink'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/learn-bitcoin-cash-header.jpg'

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

// const PreviewItem = styled.div`
const SectionItem = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
  grid-auto-rows: min-content;
  grid-template-rows: max-content 1fr max-content;
  grid-column: ${props => (props.full ? 'span 2' : 'auto')};
  border-left: 2px solid ${props => props.theme.primary};
  padding-left: ${spacing.tiny};
`

const CTASection = styled.div`
  display: flex;
  justify-content: flex-end;
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
        <SectionItem>
          <H3>BCH</H3>
          <Text>Bitcoin Cash testnet faucet</Text>
          <CTASection>
            <StyledLink to="/faucets/bch">
              <Text centerVertical bold>
                View <FaAngleRight />
              </Text>
            </StyledLink>
          </CTASection>
        </SectionItem>
        <SectionItem>
          <H3>WHC</H3>
          <Text>Wormhole testnet faucet</Text>

          <CTASection>
            <StyledLink to="/faucets/whc">
              <Text centerVertical bold>
                View <FaAngleRight />
              </Text>
            </StyledLink>
          </CTASection>
        </SectionItem>
      </SectionLayout>
    </Container>
  </DefaultLayout>
)

export default Faucet

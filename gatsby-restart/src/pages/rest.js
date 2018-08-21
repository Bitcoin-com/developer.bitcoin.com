// @flow

import * as React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import InfoCard from 'components/InfoCard'

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H2 from 'atoms/H2'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import Code from 'atoms/Code'
import Pre from 'atoms/Pre'
import StyledLink from 'atoms/StyledLink'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/hero.jpeg'

// import { FaCube, FaCogs, FaCreditCard, FaCartPlus, FaReddit, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const InstallCTA = styled.div`
  margin-top: ${spacing.medium};
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: max-content;
  grid-gap: ${spacing.small};
`

const PreviewLayout = styled.div`
  display: grid;
  padding-top: ${spacing.large};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: repeat(auto-fit, minmax(400px, .5fr));
  `};
`

// const PreviewItem = styled.div`
const ItemLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
  grid-auto-rows: min-content;
  grid-column: ${props => (props.full ? 'span 2' : 'auto')};
`

type ItemProps = {
  children: React.Node,
  to?: string,
  full?: boolean,
}

const PreviewItem = ({ children, to, full }: ItemProps) => (
  <ItemLayout full={full}>
    {children}
    {to && (
      <Link to={to}>
        <Button round>More</Button>
      </Link>
    )}
  </ItemLayout>
)

type Props = {
  location: Object,
}

const RestPage = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <Hero image={HeroImg}>
      <HeroLayout>
        <H3 primary>BCH RPC over HTTP</H3>
        <H1 background>REST</H1>
        <H3 background>REST layer for Bitcoin.com Cloud</H3>
        <InstallCTA>
          <Link to="/rest/docs/getting-started">
            <Button round>Start Here</Button>
          </Link>
        </InstallCTA>
      </HeroLayout>
    </Hero>
    <Container>
      <PreviewLayout>
        <PreviewItem full to="/rest/docs/getting-started">
          <H2>BCH RPC over HTTP</H2>
          <Text>
          100% of the Bitcoin Cash JSON RPC available over HTTP with proper REST semantics. BITBOX SDK integration lets you GET and POST requests to the BCH network with no further setup. Or create your own client which to speak to the blockchain over RESto the BCH network with no further setup. Or create your own client which to speak to the blockchain over REST.
          </Text>
        </PreviewItem>
        <PreviewItem to="/rest/docs/getting-started">
          <H2>Proper REST Semantics</H2>
          <Text>Instead of POSTing directly to bitcoind we've wrapped the BCH JSON RPC in REST semantics so you GET when reading and POST when writing from/to the chain.</Text>
        </PreviewItem>
        <PreviewItem to="/gui/docs/getting-started">
          <H2>Addresses, Blocks and Transactions</H2>
          <Text>
          Get details such as balance, utxo and unconfirmed transactions for an address. Get details about a block or transaction.
          </Text>
        </PreviewItem>
      </PreviewLayout>
    </Container>
  </DefaultLayout>
)

export default RestPage

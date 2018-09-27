// @flow

import * as React from 'react'
import styled from 'styled-components'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H2 from 'atoms/H2'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
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
  grid-column: span 2;
  ${media.medium`
    grid-column: ${props => (props.full ? 'span 2' : 'auto')};
  `};
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
      <StyledLink to={to}>
        <Button round>More</Button>
      </StyledLink>
    )}
  </ItemLayout>
)

type Props = {
  location: Object,
}

const GuiPage = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`GUI - developer.bitcoin.com`}
      description={'GUI based bitcoin.com developer platform and resources'}
      keywords={'GUI, developer tools, bitcoin, bitcoin cash, BCH, sdk, api'}
      location={location}
    />
    <Hero image={HeroImg}>
      <HeroLayout>
        <H3 primary>Your Personal Blockchain</H3>
        <H1 background>GUI</H1>
        <H3 background>
          Full BCH blockchain and BIP44 wallet for use during development.
        </H3>
        <InstallCTA>
          <StyledLink to="/gui/docs/getting-started">
            <Button round>Start Here</Button>
          </StyledLink>
        </InstallCTA>
      </HeroLayout>
    </Hero>
    <Container>
      <PreviewLayout>
        <PreviewItem full to="/gui/docs/getting-started">
          <H2>Instant Blockchain</H2>
          <Text>
            Your own Bitcoin Cash blockchain to configure however you choose.
            It’s recreated from scratch each time you restart GUI. It doesn’t
            connect to the real network and only consists of transactions and
            blocks which you create locally so it’s quick and responsive.
          </Text>
        </PreviewItem>
        <PreviewItem to="/gui/docs/wallet">
          <H2>BIP44 development wallet</H2>
          <Text>
            Create as many BIP44 accounts as you want on mainnet or testnet. See
            their address, WIF, XPub and XPriv.
          </Text>
        </PreviewItem>
        <PreviewItem to="/gui/docs/conversion">
          <H2>Address Conversion</H2>
          <Text>
            Paste in legacy, cashaddr, wif, xpub or xpriv and get address
            conversion and QR codes.
          </Text>
        </PreviewItem>
        <PreviewItem to="/gui/docs/sign-verify">
          <H2>Sign/Verify messages</H2>
          <Text>
            Sign messages in legacy or cashaddr with any address in your GUI.
            Verify messages in legacy or cashaddr from any wallet.
          </Text>
        </PreviewItem>
        <PreviewItem to="/gui/docs/configuration">
          <H2>Configured how you like it</H2>
          <Text>
            Create as many accounts as you need. Vary the entropy in the
            mnemonic. Supports 8 languages. Custom HD Paths. Add a password.
            Mainnet or Testnet.
          </Text>
        </PreviewItem>
      </PreviewLayout>
    </Container>
  </DefaultLayout>
)

export default GuiPage

// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'
import { FaAndroid, FaApple, FaJs } from 'react-icons/fa'
import InfoCard from 'components/InfoCard'

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import Code from 'atoms/Code'
import StyledLink from 'atoms/StyledLink'
import { SmartLink } from 'atoms/StyledLink'

import media from 'styles/media'
import spacing from 'styles/spacing'

const CardLayout = styled.div`
  display: grid;
  padding-top: ${spacing.large};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: repeat(auto-fit, minmax(400px, .5fr));
  `};
`

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const HeroButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const HeroButtonItem = styled.div`
  margin-right: ${spacing.small};
  margin-bottom: ${spacing.small};
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
    grid-column: 'span 2';
  `};
`

type ItemProps = {
  children: React.Node,
  to?: string,
}

const PreviewItem = ({ children, to }: ItemProps) => (
  <ItemLayout>
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
  data: { heroImage: any },
}

const SLPPage = ({ location, data }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`SLP - ${data.site.siteMetadata.title}`}
      description={'SLP based bitcoin.com developer platform and resources'}
      keywords={[
        'slp',
        'simple ledger protocol',
        'bitcoin cash tokens',
        'build with SLP',
        'slp resources',
        'slp development',
      ]}
      location={location}
    />
    <Hero image={data.heroImage}>
      <HeroLayout>
        <H3 primary thin>
          Tokenize anything
        </H3>
        <H1 background>SLP SDK</H1>
        <H3 background thin>
          Secure Tokens on Bitcoin Cash
        </H3>
        <HeroButtonLayout>
          <HeroButtonItem>
            <StyledLink to="/slp/docs/js/getting-started">
              <FaJs /> Javascript
            </StyledLink>
          </HeroButtonItem>
          <HeroButtonItem>
            <StyledLink to="/slp/docs/ios/getting-started">
              <FaAndroid /> Android
            </StyledLink>
          </HeroButtonItem>
          <HeroButtonItem>
            <StyledLink to="/slp/docs/android/getting-started">
              <FaApple /> iOS
            </StyledLink>
          </HeroButtonItem>
        </HeroButtonLayout>
      </HeroLayout>
    </Hero>
    <Container>
      <PreviewLayout>
        <PreviewItem>
          <H3>Simple Ledger Protocol</H3>
          <Text>
            <SmartLink to="https://simpleledger.cash/">
              Simple Ledger Protocol
            </SmartLink>{' '}
            is simple, robust and extensible. All transactions are 100% on the
            blockchain for full auditability by any party. The first and
            currently only BCH token system to support light wallets. You can
            use multi signature addresses and other Bitcoin script features with
            SLP tokens.
          </Text>
        </PreviewItem>
      </PreviewLayout>
    </Container>
    <Container>
      <PreviewLayout>
        <PreviewItem full to="/slp/docs/js/getting-started">
          <H3>
            <FaJs /> Javascript
          </H3>
          <Text>
            SLP SDK is a fully featured javascript framework powered by{' '}
            <StyledLink to="/bitbox">BITBOX</StyledLink>. Everything you need to
            easily issue, spend or trade your own token. Install via NPM and
            talk to Bitcoin.com's cloud with no further setup.{' '}
          </Text>
        </PreviewItem>
        <PreviewItem full to="/slp/docs/android/getting-started">
          <H3>
            <FaAndroid /> Android
          </H3>
          <Text>
            Install via Gradle. Convert between cash and slp address formats.
            Send tokens w/ balances, including both tokens and BCH, available as
            LiveData. Convenience methods to make it easier to display tokens.
            Timber for logging.
          </Text>
        </PreviewItem>
        <PreviewItem full to="/slp/docs/ios/getting-started">
          <H3>
            <FaApple /> iOS
          </H3>
          <Text>
            Install via CocoaPods. Generate mnemonics. Convert between cash and
            slp address formats. Send tokens and fetch token balances.
          </Text>
        </PreviewItem>
      </PreviewLayout>
    </Container>
  </DefaultLayout>
)

export default SLPPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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

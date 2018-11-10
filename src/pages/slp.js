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
import Code from 'atoms/Code'
import Pre from 'atoms/Pre'
import StyledLink from 'atoms/StyledLink'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/hero.jpeg'

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

const WormholePage = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`SLP - developer.bitcoin.com`}
      description={'SLP based bitcoin.com developer platform and resources'}
      keywords={
        'slp, simple ledger protocol, developer tools, bitcoin, bitcoin cash, BCH, sdk, api'
      }
      location={location}
    />
    <Hero image={HeroImg}>
      <HeroLayout>
        <H3 primary>Tokenize anything</H3>
        <H1 background>SLP SDK</H1>
        <H3 background>Secure Tokens on Bitcoin Cash</H3>
        <InstallCTA>
          <Text background>INSTALL VIA NPM</Text>
          <Code language="bash">{`npm install slp-sdk --global`}</Code>
          <StyledLink to="/slp/docs/getting-started">
            <Button round>Start Here</Button>
          </StyledLink>
        </InstallCTA>
      </HeroLayout>
    </Hero>
    <Container>
      <PreviewLayout>
        <PreviewItem full>
          <H2>Simple Ledger Protocol</H2>
          <Text>
            SLP SDK is a fully featured javascript framework powered by{' '}
            <StyledLink to="/bitbox">BITBOX</StyledLink>. Everything you need to
            easily issue, spend or trade your own token.
          </Text>
          <Text>
            Simple Ledger Protocol is simple, robust and extensible. All
            transactions are 100% on the blockchain for full auditability by any
            party. The first and currently only BCH token system to support
            light wallets. You can use multi signature addresses and other
            Bitcoin script features with SLP tokens.
          </Text>
        </PreviewItem>
        <PreviewItem to="/slp/docs/slp">
          <H2>List</H2>
          <Text>List all tokens</Text>
          <Code>
            {`
  (async () => {
    try {
      let list = await SLP.Utils.list();
      console.log(list);
    } catch (error) {
      console.error(error);
    }
  })();
  // returns
  [ { id: '545cba6f72a08cbcb08c7d4e8166267942e8cb9a611328805c62fa538e861ba4',
   timestamp: '2018-08-14 13:42',
   symbol: '',
   name: '',
   document: '' },
  { id: '83bfe019fcf976142c55e7c0ad4a429f4be1bc2cb138bd8d0bab8dd4cd4758c4',
   timestamp: '2018-08-14 13:57',
   symbol: '',
   name: '',
   document: '' },
  { id: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
   timestamp: '2018-08-14 17:53',
   symbol: '',
   name: '',
   document: ' } ]
   `}
          </Code>
          <Text>List single token by id</Text>
          <Code>
            {`
 (async () => {
    try {
      let list = await SLP.Utils.list(
        "323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35"
      );
      console.log(list);
    } catch (error) {
      console.error(error);
    }
  })();

  // returns
  { id: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
    timestamp: '2018-08-14 17:53',
    symbol: '',
    name: '',
    document: '' }
   `}
          </Code>
        </PreviewItem>
        <PreviewItem to="/slp/docs/conversion">
          <H2>Conversion</H2>
          <Text>Convert cashAddr or legacyAddr to slpAddr</Text>
          <Code>
            {`
SLP.Utils.toSLPAddress(
  "bitcoincash:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sgj0z0md6k"
);
// "simpleledger:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sg75f5wdyg"

SLP.Conversion.toSLPAddress("1KgRZzxLUvZqL8EuufmdxqSjh3tgURwD6d");
//"simpleledger:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sg75f5wdyg"
`}
          </Code>
          <Text>Convert slpAddr or legacyAddr to cashAddr</Text>
          <Code>
            {`
SLP.Utils.toCashAddress(
  "simpleledger:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sg75f5wdyg"
);
// 'bitcoincash:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sgj0z0md6k'

SLP.Conversion.toCashAddress("1KgRZzxLUvZqL8EuufmdxqSjh3tgURwD6d");
// 'bitcoincash:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sgj0z0md6k'
`}
          </Code>
          <Text>Convert cashAddr or legacyAddr to legacyAddr</Text>
          <Code>
            {`
SLP.Utils.toLegacyAddress(
  "simpleledger:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sg75f5wdyg"
);
//'1KgRZzxLUvZqL8EuufmdxqSjh3tgURwD6d'

SLP.Conversion.toLegacyAddress(
  "bitcoincash:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sgj0z0md6k"
);
// "1KgRZzxLUvZqL8EuufmdxqSjh3tgURwD6d"
`}
          </Code>
        </PreviewItem>
        <PreviewItem>
          <H2>Built-in console</H2>
          <Text>
            Custom REPL with the full BITBOX and Bitcoin Cash JSON RPC API built
            in. Test your ideas quickly with no overhead.
          </Text>
        </PreviewItem>
        <PreviewItem>
          <H2>100% Documented</H2>
          <Text>
            Every method, argument, data type and return value is documented in
            great detail.
          </Text>
        </PreviewItem>
        <PreviewItem>
          <H2>REST integration</H2>
          <Text>SLP SDK is coupled to REST with no further setup.</Text>
        </PreviewItem>
      </PreviewLayout>
    </Container>
  </DefaultLayout>
)

export default WormholePage

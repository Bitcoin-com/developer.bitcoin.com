// @flow

import * as React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'

import StyledLink from 'atoms/StyledLink'
import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H2 from 'atoms/H2'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import Code from 'atoms/Code'

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
      <StyledLink to={to}>
        <Button round>More</Button>
      </StyledLink>
    )}
  </ItemLayout>
)

type Props = {
  location: Object,
}

const BitboxPage = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <Hero image={HeroImg}>
      <HeroLayout>
        <H3 primary>Incredibly powerful. Easy to learn.</H3>
        <H1 background>BITBOX</H1>
        <H3 background>
          Powerful and intuitive APIs which will have you creating world class
          applications
        </H3>
        <InstallCTA>
          <Text background>INSTALL VIA NPM</Text>
          <Code language="bash">{`npm install bitbox-cli --global`}</Code>
          <StyledLink to='/bitbox/docs/getting-started'><Button round>Start Here</Button></StyledLink>
        </InstallCTA>
      </HeroLayout>
    </Hero>
    <Container>
      <PreviewLayout>
        <PreviewItem full>
          <H2>Powerful</H2>
          <Text>
            BITBOX is a fully featured javascript framework which offers
            Mnemonics, HDNodes, ECPairs, Crypto, Addresses, Transactions and
            much more. It’s powerful and intuitive APIs will have you creating
            world class applications.
          </Text>
          <Text>
            Expressive and intuitive, BITBOX is built with the latest javascript
            technologies so developers feel right at home. Create amazing and
            powerful Bitcoin Cash applications on the client or server with full
            mainnet and testnet support.
          </Text>
        </PreviewItem>
        <PreviewItem to="/bitbox/docs/mnemonic">
          <H2>Mnemonics</H2>
          <Text>
            Create mnemonics from 128 bits to 256 bits in 8 languages including
            english, chinese (traditional/simplified), korean, japanese,
            italian, french and spanish.
          </Text>
          <Code>
            {`// generate 24 word mnemonic
BITBOX.Mnemonic.generate(256);
// disagree tide elbow citizen jazz cinnamon bridge certain april settle pact film always inmate border inform solution that submit produce cloth balcony upper maid

// generate 12 french word mnemonic
BITBOX.Mnemonic.generate(128, BITBOX.Mnemonic.wordLists().french);
// annonce ampleur sanglier peser acheter cultiver abroger embellir résoudre dialogue grappin lanterne`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/bitbox/docs/hdnode">
          <H2>Transactions</H2>
          <Text>
            Pay to PubKey, Pay to PubKeyHash, Pay to MultiSig, Pay to ScriptHash
            and write data to the chain w/ OP_RETURN
          </Text>
          <Code>
            {`// decode raw transaction hex
              (async () => {
                let decodeRawTransaction = await BITBOX.RawTransactions.decodeRawTransaction('01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000');
              })()

              // send raw transactions to the network
              (async () => {
                let sendRawTransaction = await BITBOX.RawTransactions.sendRawTransaction("01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000");
              })()

              // get transaction details by txid
              (async () => {
                let details = await BITBOX.Transaction.details('a85fa3d831ab6b0305e7ff88d2d4941e25a810d4461635df51490653822071a8');
              })()`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/bitbox/docs/hdnode">
          <H2>Address conversion</H2>
          <Text>
            Convert between legacy and cash addresses on main or testnet.
          </Text>
          <Code>
            {`// cashaddr to legacy
BITBOX.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// legacy to cashaddr
BITBOX.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
// bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// detect legacy address
BITBOX.Address.isLegacyAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// detect cashaddr address
BITBOX.Address.isCashAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// detect mainnet address
BITBOX.Address.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// detect testnet address
BITBOX.Address.isTestnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/bitbox/docs/hdnode">
          <H2>Unit Conversion</H2>
          <Text>Convert between satoshis and whole units or bits.</Text>
          <Code>
            {`// convert 9 $BCH to satoshis
BITBOX.BitcoinCash.toSatoshi(9)
// 900000000

// convert 900000000 satoshis to $BCH
BITBOX.BitcoinCash.toBitcoinCash(900000000)
// 9

// convert 4242323400 satoshis to 42423234 bits
BITBOX.BitcoinCash.satsToBits(4242323400)
// 42423234`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/bitbotx/docs/hdnode">
          <H2>OP Codes</H2>
          <Text>
            100% support for OP codes including everything which was recently
            re-enabled.
          </Text>
          <Code>
            {` // list all op codes
BITBOX.Script.opcodes;
// { OP_FALSE: 0,
//   OP_0: 0,
//   OP_PUSHDATA1: 76,
//   OP_PUSHDATA2: 77,
//   OP_PUSHDATA4: 78,
//   OP_1NEGATE: 79,
//   OP_RESERVED: 80,
//   OP_TRUE: 81,
//   OP_1: 81,
//   OP_2: 82,
//   OP_3: 83,
//   OP_4: 84,
//   ...
// }

// get the op code for a word
BITBOX.Script.opcodes.OP_SPLIT
// 127
BITBOX.Script.opcodes.OP_NUM2BIN
// 128
BITBOX.Script.opcodes.OP_BIN2NUM
// 129`}
          </Code>
        </PreviewItem>
        <PreviewItem to="bitbox/docs/console">
          <H2>Built-in console</H2>
          <Text>
            Custom REPL with the full BITBOX and Bitcoin Cash JSON RPC API built
            in. Test your ideas quickly with no overhead.
          </Text>
        </PreviewItem>
        <PreviewItem>
          <H2>App Scaffolds</H2>
          <Text>
            Create basic BIP44 wallets in under a minute with the most popular
            frameworks. Angular, React, Node, Next and Vue currently supported
            and adding more regularly.
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
          <Text>
            Have your app talk to Cloud via REST with no further setup needed.
          </Text>
        </PreviewItem>
      </PreviewLayout>
    </Container>
  </DefaultLayout>
)

export default BitboxPage

// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import Code from 'atoms/Code'
import Pre from 'atoms/Pre'
import StyledLink from 'atoms/StyledLink'

import media from 'styles/media'
import spacing from 'styles/spacing'

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

const WormholePage = ({ location, data }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`Wormhole - developer.bitcoin.com`}
      description={
        'Wormhole based bitcoin.com developer platform and resources'
      }
      keywords={
        'wormhole, developer tools, bitcoin, bitcoin cash, BCH, sdk, api'
      }
      location={location}
    />
    <Hero image={data.heroImage}>
      <HeroLayout>
        <H3 primary>Experience a paradigm shift</H3>
        <H1 background>Wormhole SDK</H1>
        <H3 background>Tokens and Crowdsales on Bitcoin Cash</H3>
        <InstallCTA>
          <Text background>INSTALL VIA NPM</Text>
          <Code language="bash">{`npm install wormhole-sdk --global`}</Code>
          <StyledLink to="/wormhole/docs/getting-started">
            <Button round>Start Here</Button>
          </StyledLink>
        </InstallCTA>
      </HeroLayout>
    </Hero>
    <Container>
      <PreviewLayout>
        <PreviewItem>
          <H3>Paradigm Shift</H3>
          <Text>
            Create your own Token. Launch a Crowdsale. Raise funds to change the
            world. All on Bitcoin Cash.
          </Text>
          <Text>
            Wormhole SDK is a fully featured javascript framework powered by{' '}
            <StyledLink to="/bitbox">BITBOX</StyledLink>. It offers fixed and
            managed tokens, crowdsales and much more.
          </Text>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/utility">
          <H3>Tokens with managed supply</H3>
          <Code>
            {`(async () => {
    try {
      const mnemonic =
        'jewel rather question carpet collect mean flower hire such enroll frost wet'

      const rootSeed = Wormhole.Mnemonic.toSeed(mnemonic)

      // master HDNode
      const masterHDNode = Wormhole.HDNode.fromSeed(rootSeed, "testnet")

      // HDNode of BIP44 account
      const account = Wormhole.HDNode.derivePath(masterHDNode, "m/44'/145'/0'")

      const hdNode = Wormhole.HDNode.derivePath(account, "0/0")

      const managedToken = await Wormhole.Utility.createManagedToken(
        hdNode,
        1,
        1,
        0,
        "Examples",
        "Managed token",
        "MANAGED",
        "developer.bitcoin.com",
        "Powered by BITBOX"
      )
      console.log(managedToken)
    } catch (error) {
      console.error(error)
    }
  })()

  // { txid: '0352f0693ec2aa07c002ee5f3a584f7b31a3d1230fb5e040a30a489392726be0',
  //   fee: '500',
  //   sendingaddress: 'bchtest:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqkg3h8g6e',
  //   ismine: false,
  //   version: 0,
  //   type_int: 54,
  //   type: 'Create Property - Manual',
  //   precision: '1',
  //   ecosystem: 'main',
  //   category: 'Examples',
  //   subcategory: 'Managed token',
  //   propertyname: 'MANAGED',
  //   data: 'Powered by BITBOX',
  //   url: 'developer.bitcoin.com',
  //   amount: '0.0',
  //   confirmations: 0 }`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/utility">
          <H3>Issue amount of managed tokens</H3>
          <Code>
            {`(async () => {
    try {
      const mnemonic =
        'jewel rather question carpet collect mean flower hire such enroll frost wet'

      const rootSeed = Wormhole.Mnemonic.toSeed(mnemonic)

      // master HDNode
      const masterHDNode = Wormhole.HDNode.fromSeed(rootSeed, "testnet")

      // HDNode of BIP44 account
      const account = Wormhole.HDNode.derivePath(masterHDNode, "m/44'/145'/0'")

      const hdNode = Wormhole.HDNode.derivePath(account, "0/0")

      const issue = await Wormhole.Utility.issueManagedToken(hdNode, 530, 1000)
      console.log(issue)

    } catch (error) {
      console.error(error)
    }
  })()

  // { txid: '9fc8a29c4d3a62aaf45a1b856d9fbf0301966791739e430e3822a903441d3e25',
  //   fee: '500',
  //   sendingaddress: 'bchtest:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqkg3h8g6e',
  //   referenceaddress: 'bchtest:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqkg3h8g6e',
  //   ismine: false,
  //   version: 0,
  //   type_int: 55,
  //   type: 'Grant Property Tokens',
  //   propertyid: 530,
  //   precision: '1',
  //   amount: '1000.0',
  //   confirmations: 0 }`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/utility">
          <H3>Revoke amount of managed tokens</H3>
          <Code>
            {`(async () => {
    try {
      const mnemonic =
        'jewel rather question carpet collect mean flower hire such enroll frost wet'

      const rootSeed = Wormhole.Mnemonic.toSeed(mnemonic)

      // master HDNode
      const masterHDNode = Wormhole.HDNode.fromSeed(rootSeed, "testnet")

      // HDNode of BIP44 account
      const account = Wormhole.HDNode.derivePath(masterHDNode, "m/44'/145'/0'")

      const hdNode = Wormhole.HDNode.derivePath(account, "0/0")

      const revoke = await Wormhole.Utility.revokeManagedToken(
        hdNode,
        530,
        1000
      )
      console.log(revoke)

    } catch (error) {
      console.error(error)
    }
  })()

  // { txid: '3d473add1a4cc7bad85bcedc0cc4a2156693daa293df386f8685494578db3c13',
  //   fee: '500',
  //   sendingaddress: 'bchtest:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqkg3h8g6e',
  //   ismine: false,
  //   version: 0,
  //   type_int: 56,
  //   type: 'Revoke Property Tokens',
  //   propertyid: 530,
  //   precision: '1',
  //   amount: '1000.0',
  //   confirmations: 0 }`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/utility">
          <H3>Change issuer of managed tokens</H3>
          <Code>
            {`(async () => {
    try {
      const mnemonic =
        'jewel rather question carpet collect mean flower hire such enroll frost wet'

      const rootSeed = Wormhole.Mnemonic.toSeed(mnemonic)

      // master HDNode
      const masterHDNode = Wormhole.HDNode.fromSeed(rootSeed, "testnet")

      // HDNode of BIP44 account
      const account = Wormhole.HDNode.derivePath(masterHDNode, "m/44'/145'/0'")

      const hdNode = Wormhole.HDNode.derivePath(account, "0/0")

      const change = await Wormhole.Utility.changeManagedTokenIssuer(
        hdNode,
        530,
        "bchtest:qqptrcsdsy2g8nh7fsl2ynw883nq7ln7kul9tgcegm"
      )
      console.log(change)

    } catch (error) {
      console.error(error)
    }
  })()

  // { txid: 'e532588fb4b5c4f6245974dc282ceb96477b30c0ff3afdea4fd0d3ca44089d52',
  //   fee: '500',
  //   sendingaddress: 'bchtest:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqkg3h8g6e',
  //   referenceaddress: 'bchtest:qqptrcsdsy2g8nh7fsl2ynw883nq7ln7kul9tgcegm',
  //   ismine: false,
  //   version: 0,
  //   type_int: 70,
  //   type: 'Change Issuer Address',
  //   propertyid: 530,
  //   precision: '1',
  //   confirmations: 0 }`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/utility">
          <H3>Create fixed issuance token</H3>
          <Code>
            {`(async () => {
    try {
      const mnemonic =
        'jewel rather question carpet collect mean flower hire such enroll frost wet'

      const rootSeed = Wormhole.Mnemonic.toSeed(mnemonic)

      // master HDNode
      const masterHDNode = Wormhole.HDNode.fromSeed(rootSeed, "testnet")

      // HDNode of BIP44 account
      const account = Wormhole.HDNode.derivePath(masterHDNode, "m/44'/145'/0'")

      const hdNode = Wormhole.HDNode.derivePath(account, "0/0")

      const fixedToken = await Wormhole.Utility.createFixedToken(
        hdNode,
        1,
        8,
        0,
        "examples",
        "fixed issuance",
        "FIXED",
        "developer.bitcoin.com",
        "Made with BITBOX",
        "21000000"
      )
      console.log(fixedToken)

    } catch (error) {
      console.error(error)
    }
  })()

  // { txid: '056a1c428d75d46a8bcd1a1132524c64a66c9d3ce83daf0eb59e36db88cf2e6f',
  //   fee: '500',
  //   sendingaddress: 'bchtest:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqkg3h8g6e',
  //   ismine: false,
  //   version: 0,
  //   type_int: 50,
  //   type: 'Create Property - Fixed',
  //   ecosystem: 'main',
  //   precision: '8',
  //   category: 'examples',
  //   subcategory: 'fixed issuance',
  //   propertyname: 'FIXED',
  //   data: 'Made with BITBOX',
  //   url: 'developer.bitcoin.com',
  //   amount: '21000000.00000000',
  //   confirmations: 0 }`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/utility">
          <H3>Create crowd sale</H3>
          <Code>
            {`(async () => {
    try {
      const mnemonic =
        'jewel rather question carpet collect mean flower hire such enroll frost wet'

      const rootSeed = Wormhole.Mnemonic.toSeed(mnemonic)

      // master HDNode
      const masterHDNode = Wormhole.HDNode.fromSeed(rootSeed, "testnet")

      // HDNode of BIP44 account
      const account = Wormhole.HDNode.derivePath(masterHDNode, "m/44'/145'/0'")

      const hdNode = Wormhole.HDNode.derivePath(account, "0/0")

      const crowdsale = await Wormhole.Utility.createCrowdSale(
        hdNode,
        1,
        1,
        0,
        "examples",
        "crowd sale",
        "CROWDSALE",
        "developer.bitcoin.com",
        "Powered by BITBOX",
        1,
        "100",
        1543654799,
        1,
        1000
      )
      console.log(crowdsale)

    } catch (error) {
      console.error(error)
    }
  })()

  // { txid: '398ca646dfcaaa8a08e19e2ed33a837c298a1d8ea7b604a1e3e48401d34caa48',
  //  fee: '500',
  //  sendingaddress: 'bchtest:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqkg3h8g6e',
  //  ismine: false,
  //  version: 0,
  //  type_int: 51,
  //  type: 'Create Property - Variable',
  //  precision: '1',
  //  ecosystem: 'main',
  //  category: 'examples',
  //  subcategory: 'crowd sale',
  //  propertyname: 'CROWDSALE',
  //  data: 'Powered by BITBOX',
  //  url: 'developer.bitcoin.com',
  //  propertyiddesired: 1,
  //  tokensperunit: '100.00000000',
  //  deadline: 1543654799,
  //  earlybonus: 1,
  //  amount: '1000.0',
  //  confirmations: 0 }`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/utility">
          <H3>Check Balance</H3>
          <Code>
            {`(async () => {
    try {
      const address = 'bchtest:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqkg3h8g6e'

      const balance = await Wormhole.Utility.checkBalance(address)
      console.log(balance)

    } catch (error) {
      console.error(error)
    }
  })()

  // { legacyAddress: 'n3Kv3JrHnsWvfVY4RVjNUdMPXohAvstKbx',
  // cashAddress: 'bchtest:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqkg3h8g6e',
  // bch: 67.90115436,
  // satoshis: 6790115436,
  // tokens:
  //  [ { propertyid: 1,
  //      balance: '3506.59933049',
  //      reserved: '0.00000000' },
  //    { propertyid: 226, balance: '1000.0', reserved: '0.0' },
  //    { propertyid: 257,
  //      balance: '21000000.00000000',
  //      reserved: '0.00000000' },
  //    { propertyid: 342,
  //      balance: '100.00000000',
  //      reserved: '0.00000000' },
  //    { propertyid: 529,
  //      balance: '1000.00000000',
  //      reserved: '0.00000000' },
  //    { propertyid: 530, balance: '1000.0', reserved: '0.0' },
  //    { propertyid: 531,
  //      balance: '21000000.00000000',
  //      reserved: '0.00000000' } ] }`}
          </Code>
        </PreviewItem>
        <PreviewItem>
          <H3>Built-in console</H3>
          <Text>
            Custom REPL with the full BITBOX and Bitcoin Cash JSON RPC API built
            in. Test your ideas quickly with no overhead.
          </Text>
        </PreviewItem>
        <PreviewItem>
          <H3>100% Documented</H3>
          <Text>
            Every method, argument, data type and return value is documented in
            great detail.
          </Text>
        </PreviewItem>
        <PreviewItem>
          <H3>REST integration</H3>
          <Text>
            Have your app talk to <Pre>wormhold</Pre> via REST
          </Text>
        </PreviewItem>
      </PreviewLayout>
    </Container>
  </DefaultLayout>
)

export default WormholePage

export const query = graphql`
  query {
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

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

const BitboxPage = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <Hero image={HeroImg}>
      <HeroLayout>
        <H3 primary>Experience a paradigm shift</H3>
        <H1 background>Wormhole</H1>
        <H3 background>Tokens and Crowdsales on Bitcoin Cash</H3>
        <InstallCTA>
          <Text background>INSTALL VIA NPM</Text>
          <Code language="bash">{`npm install wormholecash --global`}</Code>
          <Link to="/wormhole/docs/getting-started">
            <Button round>Start Here</Button>
          </Link>
        </InstallCTA>
      </HeroLayout>
    </Hero>
    <Container>
      <PreviewLayout>
        <PreviewItem full>
          <H2>Paradigm Shift</H2>
          <Text>
            Create your own Token. Launch a Crowdsale. Raise funds to change the
            world. All on Bitcoin Cash.
          </Text>
          <Text>
            Wormhole is a fully featured javascript framework powered by{' '}
            <StyledLink to="/bitbox">BITBOX</StyledLink>. It offers fixed and
            managed tokens, crowdsales and much more. It’s powerful and
            intuitive APIs will have you creating tokens and ICOs on Bitcoin
            Cash.
          </Text>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/transactions">
          <H2>Tokens with fixed supply</H2>
          <Code>
            {`
// Create 1,000,000 Quantum Miner Tokens QMT
Wormhole.Transaction.fixed("bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", 1, 1, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "www.example.com", "Quantum Miner Tokens QMT", "1000000").then((result) => {
console.log(result);
}, (err) => {
console.log(err);
});

// Send an investor 1000 QMT
Wormhole.Transaction.send("bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", "bchtest:qr4g79cjapp02s3zs59gtu3dxu7sgwvp8gmnh9rw97", 111, "1000.0").then((result) => {
  console.log(result);
  }, (err) => {
  console.log(err);
`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/transaction">
          <H2>Crowdsales</H2>
          <Text>
            Create Crowdsales. Sell your own tokens for WHC. Launch an ICO on
            Bitcoin Cash
          </Text>
          <Text />
          <Code>
            {`// Start a crowdsale where 100,000 Life Extension Tokens LET 
// are going to be sold 100 LET for 1 WHC. 
Wormhole.Transaction.crowdSale("bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", 1, 1, 0, "Companies", "Singularity", "Life Extension", "www.example.com", "Life Extension Tokens LET", 1, "100", 1545696000, 30, 0, 100000).then((result) => {
console.log(result);
}, (err) => {
console.log(err);
});

// Purchase 100 LET for 1 WHC
Wormhole.Transaction.partiCrowSale("bchtest:qr4g79cjapp02s3zs59gtu3dxu7sgwvp8gmnh9rw97", "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", "1").then((result) => {
console.log(result);
}, (err) => {
console.log(err);
});
`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/transactions">
          <H2>Tokens with managed supply</H2>
          <Code>
{`// Grant and revoke Time Machine Coins TMC
Wormhole.Transaction.managed("bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", 1, 1, 0, "Companies", "Wormholes", "Time Machine", "www.example.com", "Time Machine Coins TMC").then((result) => {
  console.log(result);
}, (err) => {
  console.log(err);
});
  
// Grant 42 TMC to a time traveler
Wormhole.Transaction.grant("bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", "bchtest:qr4g79cjapp02s3zs59gtu3dxu7sgwvp8gmnh9rw97", 112, "42").then((result) => {
  console.log(result);
}, (err) => {
  console.log(err);
});

// Revoke 11 TMC from a time traveler
Wormhole.Transaction.revoke("bchtest:qr4g79cjapp02s3zs59gtu3dxu7sgwvp8gmnh9rw97", 112, "11").then((result) => {
  console.log(result);
}, (err) => {
  console.log(err);
});
`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/data-retrieval">
          <H2>Data Retrieval</H2>
          <Text>Over a dozen methods for checking balances, transactions, tokens and more.</Text>
          <Code>
            {`// Check the balances of all tokens for a single address
Wormhole.DataRetrieval.balancesForAddress("bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg").then((result) => {
  console.log(result);
}, (err) => {
  console.log(err);
})  ;

// [ { propertyid: 1, balance: '93.00105957', reserved: '0.00000000' },
//   { propertyid: 108, balance: '1496.0', reserved: '0.0' },
//   { propertyid: 109, balance: '10000.0', reserved: '0.0' },
//   { propertyid: 111, balance: '999000.0', reserved: '0.0' } ]`}
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
          <Text>
            Have your app talk to <Pre>wormhold</Pre> via wormholeREST
          </Text>
        </PreviewItem>
      </PreviewLayout>
    </Container>
  </DefaultLayout>
)

export default BitboxPage

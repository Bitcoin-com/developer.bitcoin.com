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
      title={`Wormhole - developer.bitcoin.com`}
      description={
        'Wormhold based bitcoin.com developer platform and resources'
      }
      keywords={
        'wormhold, developer tools, bitcoin, bitcoin cash, BCH, sdk, api'
      }
      location={location}
    />
    <Hero image={HeroImg}>
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
        <PreviewItem full>
          <H2>Paradigm Shift</H2>
          <Text>
            Create your own Token. Launch a Crowdsale. Raise funds to change the
            world. All on Bitcoin Cash.
          </Text>
          <Text>
            Wormhole SDK is a fully featured javascript framework powered by{' '}
            <StyledLink to="/bitbox">BITBOX</StyledLink>. It offers fixed and
            managed tokens, crowdsales and much more. It’s powerful and
            intuitive APIs will have you creating tokens and ICOs on Bitcoin
            Cash.
          </Text>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/raw-transactions">
          <H2>Tokens with fixed supply</H2>
          <Text>Create 1,000,000 Quantum Miner Tokens QMT</Text>
          <Code>
            {`
(async () => {
  try {
    let fixed = await Wormhole.PayloadCreation.fixed(1, 1, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "www.example.com", "Quantum Miner Tokens QMT", "1000000");
    let utxo = await BITBOX.Address.utxo([cashAddress]);
    let rawTx = await Wormhole.RawTransactions.create([utxo[0][0]], {});
    let opReturn = await Wormhole.RawTransactions.opReturn(rawTx, fixed);
    let ref = await Wormhole.RawTransactions.reference(opReturn, cashAddress);
    let changeHex = await Wormhole.RawTransactions.change(ref, [utxo[0][0]], cashAddress, 0.0006);

    let tx = Wormhole.Transaction.fromHex(changeHex)
    let tb = Wormhole.Transaction.fromTransaction(tx)

    let keyPair = Wormhole.HDNode.toKeyPair(change);
    let redeemScript;
    tb.sign(0, keyPair, redeemScript, 0x01, utxo[0][0].satoshis);
    let builtTx = tb.build()
    let txHex = builtTx.toHex();
    await BITBOX.RawTransactions.sendRawTransaction(txHex);
  } catch(error) {
   console.error(error)
  }
})()
// {
//   "txid": "8d2e358edcddadbaa4e0f7c9e3fe2ff7e128c4bed6d3a6a67af6aa5922c7bcd8",
//   "fee": "622",
//   "sendingaddress": "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg",
//   "ismine": true,
//   "version": 0,
//   "type_int": 50,
//   "type": "Create Property - Fixed",
//   "propertyid": 111,
//   "precision": "1",
//   "ecosystem": "main",
//   "category": "Companies",
//   "subcategory": "Bitcoin Mining",
//   "propertyname": "Quantum Miner",
//   "data": "Quantum Miner Tokens QMT",
//   "url": "www.example.com",
//   "amount": "1000000.0",
//   "valid": true,
//   "blockhash": "0000000000000207be3053b98a450daa4b6b3fef94039e940a2df34f17298906",
//   "blocktime": 1533864446,
//   "positioninblock": 2,
//   "block": 1251064,
//   "confirmations": 3
// }
`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/transactions">
          <Text>Send an investor 1000 QMT</Text>
          <Code>
            {`
(async () => {
  try {
    let ssPayload = await Wormhole.PayloadCreation.simpleSend(111, "1000.0");
    let utxo = await BITBOX.Address.utxo([cashAddress]);
    let rawTx = await Wormhole.RawTransactions.create([utxo[0][1]], {});
    let opReturn = await Wormhole.RawTransactions.opReturn(rawTx, ssPayload);
    let ref = await Wormhole.RawTransactions.reference(opReturn, cashAddress1);
    let changeHex = await Wormhole.RawTransactions.change(ref, [utxo[0][1]], cashAddress, 0.0006);

    let tx = Wormhole.Transaction.fromHex(changeHex)
    let tb = Wormhole.Transaction.fromTransaction(tx)

    let keyPair = Wormhole.HDNode.toKeyPair(change);
    let redeemScript;
    tb.sign(0, keyPair, redeemScript, 0x01, utxo[0][1].satoshis);
    let builtTx = tb.build()
    let txHex = builtTx.toHex();
    await BITBOX.RawTransactions.sendRawTransaction(txHex);
  } catch(error) {
   console.error(error)
  }
})()
// {
//   "txid": "f90c52d4d2fea37fcd73bb88f04d553495585b0b27bae4125f99d06ddb43777f",
//   "fee": "520",
//   "sendingaddress": "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg",
//   "referenceaddress": "bchtest:qr4g79cjapp02s3zs59gtu3dxu7sgwvp8gmnh9rw97",
//   "ismine": true,
//   "version": 0,
//   "type_int": 0,
//   "type": "Simple Send",
//   "propertyid": 111,
//   "precision": "1",
//   "amount": "1000.0",
//   "confirmations": 0
// }
`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/payload-creation/#crowdsale">
          <H2>Crowdsales</H2>
          <Text>
            Create Crowdsales. Sell your own tokens for WHC. Launch an ICO on
            Bitcoin Cash
          </Text>
          <Text>
            Start a crowdsale where 100,000 Life Extension Tokens LET are going
            to be sold 100 LET for 1 WHC.
          </Text>
          <Code>
            {`
(async () => {
  try {
    let crowdsale = await Wormhole.PayloadCreation.crowdsale(1, 1, 0, "Companies", "Singularity", "Life Extension", "www.example.com", "Life Extension Tokens LET", 1, "100", 1545696000, 0, 0, 10000);
    let utxo = await Wormhole.Address.utxo([cashAddress]);
    let rawTx = await Wormhole.RawTransactions.create([utxo[0][0]], {});
    let opReturn = await Wormhole.RawTransactions.opReturn(rawTx, crowdsale);
    let ref = await Wormhole.RawTransactions.reference(opReturn, cashAddress);
    let changeHex = await Wormhole.RawTransactions.change(ref, [utxo[0][0]], cashAddress, 0.0006);

    let tx = Wormhole.Transaction.fromHex(changeHex)
    let tb = Wormhole.Transaction.fromTransaction(tx)

    let keyPair = Wormhole.HDNode.toKeyPair(change);
    let redeemScript;
    tb.sign(0, keyPair, redeemScript, 0x01, utxo[0][0].satoshis);
    let builtTx = tb.build()
    let txHex = builtTx.toHex();
    await Wormhole.RawTransactions.sendRawTransaction(txHex);
  } catch(error) {
   console.error(error)
  }
})()

 // {
   // "txid": "aa5ed83708d0889d25691a27668fe5a6a406cab24191afae7d78bb867a324641",
   // "fee": "664",
   // "sendingaddress": "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg",
   // "ismine": true,
   // "version": 0,
   // "type_int": 51,
   // "type": "Create Property - Variable",
   // "precision": "1",
   // "ecosystem": "main",
   // "category": "Companies",
   // "subcategory": "Singularity",
   // "propertyname": "Life Extension",
   // "data": "Life Extension Tokens LET",
   // "url": "www.example.com",
   // "propertyiddesired": 1,
   // "tokensperunit": "100.00000000",
   // "deadline": 1545696000,
   // "earlybonus": 30,
   // "amount": "100000.0",
   // "valid": false,
   // "invalidreason": "Sender has an active crowdsale",
   // "blockhash": "000000008795bcff8e503ae1e2114ae006f8942d2b0840a0d7142f5255192349",
   // "blocktime": 1533867018,
   // "positioninblock": 6,
   // "block": 1251070,
   // "confirmations": 1
 // }
`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/transaction">
          <Text>Purchase 100 LET for 1 WHC</Text>
          <Code>
            {`
(async () => {
  try {
    let participateCrowdSale = await Wormhole.PayloadCreation.participateCrowdSale("1");

    let utxo = await Wormhole.Address.utxo([cashAddress]);
    let rawTx = await Wormhole.RawTransactions.create([utxo[0][0]], {});
    let opReturn = await Wormhole.RawTransactions.opReturn(rawTx, participateCrowdSale);
    let ref = await Wormhole.RawTransactions.reference(opReturn, cashAddress2);
    let changeHex = await Wormhole.RawTransactions.change(ref, [utxo[0][0]], cashAddress, 0.0006);

    let tx = Wormhole.Transaction.fromHex(changeHex)
    let tb = Wormhole.Transaction.fromTransaction(tx)

    let keyPair = Wormhole.HDNode.toKeyPair(change);
    let redeemScript;
    tb.sign(0, keyPair, redeemScript, 0x01, utxo.satoshis);
    let builtTx = tb.build()
    let txHex = builtTx.toHex();
    await Wormhole.RawTransactions.sendRawTransaction(txHex);
  } catch(error) {
   console.error(error)
  }
})()
// {
// "txid": "b8b26698c4d3783c1618253aa280ccbafd8912ef20ba1e7a3dcebd2d8d8915de",
// "fee": "520",
// "sendingaddress": "bchtest:qr4g79cjapp02s3zs59gtu3dxu7sgwvp8gmnh9rw97",
// "referenceaddress": "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg",
// "ismine": true,
// "version": 0,
// "type_int": 1,
// "type": "Crowdsale Purchase",
// "confirmations": 0
// }
`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/payload-creation/#managed">
          <H2>Tokens with managed supply</H2>
          <Text>Grant and revoke Time Machine Coins TMC</Text>
          <Code>
            {`
(async () => {
  try {
    let managed = await Wormhole.PayloadCreation.managed(1, 1, 0, "Companies", "Wormholes", "Time Machine", "www.example.com", "Time Machine Coins TMC");
    let utxo = await BITBOX.Address.utxo([cashAddress]);
    let rawTx = await Wormhole.RawTransactions.create([utxo[0][0]], {});
    let opReturn = await Wormhole.RawTransactions.opReturn(rawTx, managed);
    let ref = await Wormhole.RawTransactions.reference(opReturn, cashAddress);
    let changeHex = await Wormhole.RawTransactions.change(ref, [utxo[0][0]], cashAddress, 0.0006);

    let tx = Wormhole.Transaction.fromHex(changeHex)
    let tb = Wormhole.Transaction.fromTransaction(tx)

    let keyPair = Wormhole.HDNode.toKeyPair(change);
    let redeemScript;
    tb.sign(0, keyPair, redeemScript, 0x01, utxo[0][0].satoshis);
    let builtTx = tb.build()
    let txHex = builtTx.toHex();
    await BITBOX.RawTransactions.sendRawTransaction(txHex);
  } catch(error) {
   console.error(error)
  }
})()
// {
// "txid": "c55413fe980aca75da8853b38e7fe7f297f35f68e28f12e298c191b3b8680eab",
// "fee": "589",
// "sendingaddress": "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg",
// "ismine": true,
// "version": 0,
// "type_int": 54,
// "type": "Create Property - Manual",
// "propertyid": 112,
// "precision": "1",
// "ecosystem": "main",
// "category": "Companies",
// "subcategory": "Wormholes",
// "propertyname": "Time Machine",
// "data": "Time Machine Coins TMC",
// "url": "www.example.com",
// "amount": "0.0",
// "valid": true,
// "blockhash": "000000000000035e8b852479a65e3170fb7059d82e984d7f57cacae38062fcce",
// "blocktime": 1533865624,
// "positioninblock": 6,
// "block": 1251068,
// "confirmations": 1
// }
`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/payload-creation/#managed">
          <Text>Grant 42 TMC to a time traveler</Text>
          <Code>
            {`
(async () => {
  try {
    let grant = await Wormhole.PayloadCreation.grant(112, "42");
    let utxo = await BITBOX.Address.utxo([cashAddress]);
    let rawTx = await Wormhole.RawTransactions.create([utxo[0][3]], {});
    let opReturn = await Wormhole.RawTransactions.opReturn(rawTx, grant);
    let ref = await Wormhole.RawTransactions.reference(opReturn, cashAddress2);
    let changeHex = await Wormhole.RawTransactions.change(ref, [utxo[0][3]], cashAddress, 0.0006);

    let tx = Wormhole.Transaction.fromHex(changeHex)
    let tb = Wormhole.Transaction.fromTransaction(tx)

    let keyPair = Wormhole.HDNode.toKeyPair(change);
    let redeemScript;
    tb.sign(0, keyPair, redeemScript, 0x01, utxo.satoshis);
    let builtTx = tb.build()
    let txHex = builtTx.toHex();
    await BITBOX.RawTransactions.sendRawTransaction(txHex);
  } catch(error) {
   console.error(error)
  }
})()
// {
//   "txid": "2fdfe48825ce9cf4f2a885867f27903930aff055fd36345b9ba5edfd6f29c592",
//   "fee": "522",
//   "sendingaddress": "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg",
//   "referenceaddress": "bchtest:qr4g79cjapp02s3zs59gtu3dxu7sgwvp8gmnh9rw97",
//   "ismine": true,
// "version": 0,
//   "type_int": 55,
//   "type": "Grant Property Tokens",
//   "propertyid": 112,
//   "precision": "1",
//   "amount": "42.0",
//   "valid": true,
//   "blockhash": "000000008795bcff8e503ae1e2114ae006f8942d2b0840a0d7142f5255192349",
//   "blocktime": 1533867018,
//   "positioninblock": 5,
//   "block": 1251070,
//   "confirmations": 1
// }
`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/payload-creation/#revoke">
          <Text>Revoke 11 TMC from a time traveler</Text>
          <Code>
            {`
(async () => {
  try {
    let revoke = await Wormhole.PayloadCreation.revoke(112, "11");
    let utxo = await BITBOX.Address.utxo([cashAddress]);
    let rawTx = await Wormhole.RawTransactions.create([utxo[0][0]], {});
    let opReturn = await Wormhole.RawTransactions.opReturn(rawTx, revoke);
    let ref = await Wormhole.RawTransactions.reference(opReturn, cashAddress);
    let changeHex = await Wormhole.RawTransactions.change(ref, [utxo[0][0]], cashAddress, 0.0006);

    let tx = Wormhole.Transaction.fromHex(changeHex)
    let tb = Wormhole.Transaction.fromTransaction(tx)

    let keyPair = Wormhole.HDNode.toKeyPair(change);
    let redeemScript;
    tb.sign(0, keyPair, redeemScript, 0x01, utxo.satoshis);
    let builtTx = tb.build()
    let txHex = builtTx.toHex();
    await BITBOX.RawTransactions.sendRawTransaction(txHex);
  } catch(error) {
   console.error(error)
  }
})()
`}
          </Code>
        </PreviewItem>
        <PreviewItem to="/wormhole/docs/data-retrieval">
          <H2>Data Retrieval</H2>
          <Text>
            Over a dozen methods for checking balances, transactions, tokens and
            more.
          </Text>
          <Text>Check the balances of all tokens for a single address</Text>
          <Code>
            {`
(async () => {
  try {
    let balancesForAddress = await Wormhole.DataRetrieval.balancesForAddress("bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg");
    console.log(balancesForAddress);
  } catch(error) {
   console.error(error)
  }
})()

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

export default WormholePage

---
title: Utility
icon: cogs
ordinal: 6
---

### `checkBalance`

Return token and BCH balance for address

#### Arguments

1.  Address `String`: required. Can be either cashAddress or legacyAddress format

#### Result

balances `Object`

#### Examples

    (async () => {
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
    //      reserved: '0.00000000' } ] }

### `createManagedToken`

Create a token with managed issuance

#### Arguments

1. hdNode `HDNode`: required.
2. ecosystem `Number`: required.
3. precision `Number`: required.
4. predecessor `Number`: required.
5. category `String`: required.
6. subcategory `String`: required.
7. ticker `String`: required.
8. url `String`: required.
9. description `String`: required.

#### Result

managedToken `Object`

#### Examples

    (async () => {
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
    //   confirmations: 0 }

### `issueManagedToken`

Issue amount managed token

#### Arguments

1. hdNode `HDNode`: required.
2. propertyId `Number`: required. Property Id of token
3. tokenQuantity `Number`: required.

#### Result

issuance `Object`

#### Examples

    (async () => {
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
    //   confirmations: 0 }

### `revokeManagedToken`

Revoke amount managed token

#### Arguments

1. hdNode `HDNode`: required.
2. propertyId `Number`: required. Property Id of token
3. tokenQuantity `Number`: required.

#### Result

revoke `Object`

#### Examples

    (async () => {
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
    //   confirmations: 0 }

### `changeManagedTokenIssuer`

Change issuer of managed token

#### Arguments

1. hdNode `HDNode`: required.
2. propertyId `Number`: required. Property Id of token
3. address `string`: required. Address of new token issuer

#### Result

change `Object`

#### Examples

    (async () => {
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
    //   confirmations: 0 }

### `createFixedToken`

Create fixed issuance token

#### Arguments

1. hdNode `HDNode`: required.
2. ecosystem `Number`: required
3. precision `Number`: required
4. predecessor `Number`: required
5. category `String`: required
6. subcategory `String`: required
7. ticker `String`: required
8. url `String`: required
9. description `String`: required
10. amount `String`: required

#### Result

fixed `Object`

#### Examples

    (async () => {
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
    //   confirmations: 0 }

### `createCrowdSale`

Create crowd sale

#### Arguments

1. hdNode `HDNode`: required.
2. ecosystem `Number`: required
3. precision `Number`: required
4. predecessor `Number`: required
5. category `String`: required
6. subcategory `String`: required
7. ticker `String`: required
8. url `String`: required
9. description `String`: required
10. identifier `Number`: required
11. tokensGranted `String`: required
12. deadline `Number`: required
13. bonus `Number`: required
14. amount `Number`: required

#### Result

crowdsale `Object`

#### Examples

    (async () => {
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
    //  confirmations: 0 }

---
title: Wormhole Pt 1. Create Wallet
author: Gabriel Cardona
publishedAt: 2018-10-13
updatedAt: 2018-10-13
---

### Intro

Wormhole SDK has really matured and we wanted to revisit our tutorial series to help better on-ramp developers looking to create new tokens on Bitcoin Cash. You can now create fixed/managed issuance tokens, launch an ICO and do an airdrop all using Wormhole SDK and [rest.bitcoin.com](https://rest.bitcoin.com).

But before you can do any of that you need to create a very basic wallet to be used in further posts.

### Prerequisites

Wormhole SDK is a javaScript framework built on nodeJS. To get started head to the [NodeJS](https://nodejs.org/en/) homepage and download their Long Term Support (LTS) release. Currently that is v8.12.x.

![nodejs download version](/images/node-8-12.png)

This also comes bundled with `npm` which is the “Node Package Manager.” You can confirm everything downloaded correctly by opening your terminal and running `node --version` and `npm --version`.

![node and npm versions](/images/npm-6-4.png)

Next you’ll need a text editor to edit code. For that we suggest [Atom.io](http://atom.io/). It’s an open-source editor built and maintained by GitHub. It too is built with web tech so you can extend it with HTML, CSS and Javascript plugins and themes.

![atomIO logo](/images/atomio.png)

Finally you’re ready to install Wormhole SDK. You can do that with `npm install wormhole-sdk --global`. This will give you access to Wormhole `new` and `console`. To confirm it worked run `wormhole --version`. At the time of writing the latest version of Wormhole SDK is v1.0.4.

![bitbox version](/images/wormhole-1-0-4.png)

It should be noted that all of the above tools, NodeJS, NPM, AtomIO and Wormhole SDK all work on macOS, Windows and Linux. The screenshots show MacOS but Wormhole SDK works across all platforms.

### Create a wallet

### All together now

```javascript
const WH = require('wormhole-sdk/lib/Wormhole').default

const NETWORK = `testnet`
// Instantiate Wormhole based on the network.
let Wormhole
if (NETWORK === `mainnet`)
  Wormhole = new WH({ restURL: `https://rest.bitcoin.com/v1/` })
else Wormhole = new WH({ restURL: `https://trest.bitcoin.com/v1/` })

const fs = require('fs')

const lang = 'english'
let outStr = ''
const outObj = {}

// create 256 bit BIP39 mnemonic
const mnemonic = Wormhole.Mnemonic.generate(
  256,
  Wormhole.Mnemonic.wordLists()[lang]
)
console.log('BIP44 $BCH Wallet')
outStr += 'BIP44 $BCH Wallet\n'
console.log(`256 bit ${lang} BIP39 Mnemonic: `, mnemonic)
outStr += `\n256 bit ${lang} BIP32 Mnemonic:\n${mnemonic}\n\n`
outObj.mnemonic = mnemonic

// root seed buffer
const rootSeed = Wormhole.Mnemonic.toSeed(mnemonic)

// master HDNode
let masterHDNode
if (NETWORK === `mainnet`) masterHDNode = Wormhole.HDNode.fromSeed(rootSeed)
else masterHDNode = Wormhole.HDNode.fromSeed(rootSeed, 'testnet') // Testnet

// HDNode of BIP44 account
const account = Wormhole.HDNode.derivePath(masterHDNode, "m/44'/145'/0'")
console.log(`BIP44 Account: "m/44'/145'/0'"`)
outStr += `BIP44 Account: "m/44'/145'/0'"\n`

for (let i = 0; i < 10; i++) {
  const childNode = masterHDNode.derivePath(`m/44'/145'/0'/0/${i}`)
  console.log(
    `m/44'/145'/0'/0/${i}: ${Wormhole.HDNode.toCashAddress(childNode)}`
  )
  outStr += `m/44'/145'/0'/0/${i}: ${Wormhole.HDNode.toCashAddress(
    childNode
  )}\n`

  if (i === 0) {
    outObj.cashAddress = Wormhole.HDNode.toCashAddress(childNode)
    outObj.legacyAddress = Wormhole.HDNode.toLegacyAddress(childNode)
  }
}

// derive the first external change address HDNode which is going to spend utxo
const change = Wormhole.HDNode.derivePath(account, '0/0')

// get the cash address
Wormhole.HDNode.toCashAddress(change)

// Get the legacy address.

outStr += `\n\n\n`
fs.writeFile('wallet-info.txt', outStr, function(err) {
  if (err) return console.error(err)

  console.log(`wallet-info.txt written successfully.`)
})

// Write out the basic information into a json file for other apps to use.
fs.writeFile('wallet.json', JSON.stringify(outObj, null, 2), function(err) {
  if (err) return console.error(err)
  console.log(`wallet.json written successfully.`)
})
```

---
title: Getting Started
icon: home
ordinal: 0
---

### Dependencies

#### NodeJS

NodeJS is a javascript runtime build on Chrome’s V8 engine. npm is the package manager for NodeJS.

Use the official installer from [nodejs.org](https://nodejs.org/). Install the one which says “Recommended for Most Users”

### Command Line

To use commands like `new` and `console`:

    npm install bitbox-sdk --global

To use inside a command line script or client/server app:

    npm install bitbox-sdk --save

### Usage

Use the [scaffold generator](./new), or manually import BITBOX into your code:

    // require syntax
    let BITBOX = require('bitbox-sdk').BITBOX;
    let bitbox = new BITBOX();

    // import syntax
    import { BITBOX } from 'bitbox-sdk'
    let bitbox = new BITBOX();

All classes are able to be included via both `require` and `import`

    // require syntax
    const BitcoinCash = require("bitbox-sdk").BitcoinCash
    const Block = require("bitbox-sdk").Block
    const Blockchain = require("bitbox-sdk").Blockchain
    const Control = require("bitbox-sdk").Control
    const Generating = require("bitbox-sdk").Generating
    const HDNode = require("bitbox-sdk").HDNode
    const Mining = require("bitbox-sdk").Mining
    const Mnemonic = require("bitbox-sdk").Mnemonic
    const Price = require("bitbox-sdk").Price
    const RawTransactions = require("bitbox-sdk").RawTransactions
    const Script = require("bitbox-sdk").Script
    const Transaction = require("bitbox-sdkn").Transaction
    const Util = require("bitbox-sdk").Util
    const Schnorr = require("bitbox-sdk").Schnorr

    // import syntax
    import {
      Address,
      BitcoinCash,
      Block,
      Blockchain,
      Control,
      Crypto,
      ECPair,
      Generating,
      HDNode,
      Mining,
      Mnemonic,
      Price,
      RawTransactions,
      Schnorr,
      Script,
      Socket,
      Transaction,
      TransactionBuilder,
      Util,
      Wallet
     } from "bitbox-sdk"

---
title: Getting Started
icon: home
ordinal: 0
---

### Wallet API

A standard interface for blockchain connected applications to interact with 3rd party user wallets.

### Overview

The package will serve as a multi-provider interface for applications, with the first wallet provider being the Badger Chrome extension. In the near future, support will be added for Bitcoin.com mobile and desktop wallets as well.

The method interface will allow any web based application to interact with the Bitcoin Cash blockchain without requiring the users private keys. All methods high level operations which will request a specific transaction, such as sending BCH, and the wallet will take care of creating the transaction, getting the users signature, and broadcasting the transaction to the network. This way there is no need for the application developer to worry about how to safely manage a users keys or even about the complexities of blockchain transactions.

### Installation

In a browser - cdn [![](https://data.jsdelivr.com/v1/package/npm/bitcoin-wallet-api/badge)](https://www.jsdelivr.com/package/npm/bitcoin-wallet-api)

Install via npm [![npm version](https://badge.fury.io/js/bitcoin-wallet-api.svg)](https://badge.fury.io/js/bitcoin-wallet-api)

### Testbed

[Demo site](https://bitcoin-wallet-api-testbed.netlify.com/)

The document for each method on this page, has a live demo of the wallet api embeded for you to try out the code. For example, here is a interactive example of how to get the user's address. Simply click on the button at the top of the render section on the right hand side. In this case the button is labeled as `getAddress`. Please ensure you have the [Badger browser extension wallet](https://badger.bitcoin.com/) installed in order to use this interactive demo on your desktop computer.

<iframe height="475" style="width: 100%;" scrolling="no" title="Bitcoin Wallet API - getAddress" src="https://codepen.io/nicolasfujita/embed/xxGgrZm?height=265&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

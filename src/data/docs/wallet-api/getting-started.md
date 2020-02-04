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

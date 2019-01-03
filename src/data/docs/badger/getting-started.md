---
title: Getting Started
icon: home
ordinal: 0
---

### Badger Wallet

Install the extension for your browser from https://badger.bitcoin.com

### Local Development

Web pages must be served from an http server for Badger Wallet to inject its API for use in your app or site.

One easy to use server for local testing and development is [http-server](https://www.npmjs.com/package/http-server).

#### Install NodeJS and http-server

Use the official installer from [nodejs.org](https://nodejs.org/). Install the one which says “Recommended for Most Users”

To install http-server:

    npm install http-server -g

#### Running the API samples

Clone the badger-samples repository:

    git clone https://github.com/BadgerWallet/badger-samples.git

Start the http-server in the samples directory:

    http-server ./badger-samples

Navigate to http://localhost:8080/ to browse the samples
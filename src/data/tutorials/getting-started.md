---
title: Getting Started
author: Gabriel Cardona
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

The popularity of Bitcoin Cash is on the rise and BITBOX SDK aims to channel all the interest in to amazing applications. In this post we'll go over the basics needed to get started creating amazing applications with BITBOX SDK and Bitcoin Cash.

### Goal

BITBOX is an incredibly powerful and intuitive SDK which lets developers build world class applications quickly. It’s built with modern web tech which is familiar to developers all over the world. We launched [developer.bitcoin.com](https://developer.bitcoin.com/) to help beginners and old pros hone their blockchain dev skills. The goal of this article is to show the first steps needed to set up your development environment and start playing around with the BITBOX SDK.

In this post we’ll cover the following:

- Prerequisites
- Setting up your development environment
- Installing BITBOX SDK
- Running your first BITBOX code samples

### Prerequisites

BITBOX SDK is built around modern web technology. To hit the ground running you should have some basic HTML, CSS and Javascript skills. These technologies are cornerstones of the Modern Web and at the core of BITBOX SDK. If you’re unfamiliar with any of these technologies start by first going through these tutorials on [HTML](https://www.w3schools.com/htmL/), [CSS](https://www.w3schools.com/css/) and [Javascript](https://www.w3schools.com/jS/default.asp).

#### Development Environment

BITBOX SDK is a javascript framework built on nodeJS. To get started head to the [NodeJS](https://nodejs.org/en/) homepage and download their Long Term Support (LTS) release. Currently that is v8.3.11.

![nodejs download version](/images/node-version.png)

This also comes bundled with `npm` which is the “Node Package Manager”. You can confirm everything downloaded correctly by opening your terminal and running `node --version` and `npm --version`.

![node and npm versions](/images/npm-version.png)

Next you’ll need a text editor to edit code. For that we suggest [Atom.io](http://atom.io/). It’s an open-source editor built and maintained by GitHub. It too is built with web tech so you can extend it with HTML, CSS and Javascript plugins and themes.

![atomIO logo](/images/atomio.png)

Finally you’re ready to install BITBOX SDK. You can do that with `npm install bitbox-sdk --global`. This will give you access to BITBOX scaffolds, console, paper wallet generator and more. To confirm it worked run `bitbox --version`. At the time of writing the latest version of BITBOX SDK is v1.4.4.

![bitbox version](/images/bitbox-version.png)

It should be noted that all of the above tools, NodeJS, NPM, AtomIO and BITBOX SDK all work on MacOS, Windows and Linux. The screenshots show MacOS but BITBOX SDK works across all platforms.

### Tutorial

#### React Scaffold

Now that you have all the tools installed you’re ready to start playing around with the BITBOX SDK. We want to make it as easy as possible to go from idea to app so we offer scaffolds to bootstrap basic wallets in the popular [Angular](https://github.com/Bitcoin-com/bitbox-scaffold-angular), [React](https://github.com/Bitcoin-com/bitbox-scaffold-react), [Node](https://github.com/Bitcoin-com/bitbox-scaffold-node), [Next](https://github.com/Bitcoin-com/bitbox-scaffold-next) and [Vue](https://github.com/Bitcoin-com/bitbox-scaffold-vue) frameworks. These allow you to scaffold a basic BCH application in under a minute that you can build your app on. To see this in action run `bitbox new sampleApp --scaffold react`.

![react scaffold](/images/react-scaffold.png)

Next to run the app change directories to the newly created `sampleApp` directory and first install all the dependencies with `npm install`. Once that is complete run the app with `npm start`.

![hello bitbox](/images/hello-bitbox2.png)

Our scaffold app first create a 256 mnemonic in one of 8 languages (english, french, italian, spanish, korean, japanese and chinese simplified/traditional). Next it creates the first BIP44 account and generates the first 10 external change addresses for that account. Finally it creates a 1-to-1 Pay-to-PubKeyHash (P2PKH) transaction so you can see how the code flow works. Note that each time your refresh the page a new mnemonic and BIP44 wallet will be created.

#### BITBOX Console

BITBOX SDK also comes bundled with a development console which you can use to test your ideas with no setup involved. The BITBOX Console is a full nodeJS REPL with the entire BITBOX API built in. That means that you can leverage the entire Javascript API and all of BITBOX right from your terminal. To try this out confirm you’re in the `sampleApp` directory and run `bitbox console`.

![bitbox console](/images/bitbox-console.png)

Now that you have a BITBOX Console you can copy and paste any code sample from the [BITBOX SDK documentation](https://developer.bitcoin.com/bitbox/docs/getting-started) and it will work. This is a great way to play around with the SDK and test your ideas quickly with no ovehead.

### Summary

Bitcoin.com’s BITBOX SDK is incredibly powerful and intuitive. It’s built with modern web tech that is familiar to developers all over the world and has everything needed for you to hit the ground running and go from idea to app 10x faster than the competition.

---
title: Wormhole Pt 1. Setup
author: Gabriel Cardona
publishedAt: 2000-01-01
updatedAt: 2018-07-01
---

### Intro

Tokens and Crowdsales on Bitcoin Cash are a paradigm shift. They'll allow developers and entreprenuers to quickly and efficiently raise the funds they need to take change the world, directly on Bitcoin Cash. This will be at the heart of the next wave of utility for the BCH network. Utility drives the network effect and with the release of the [Wormhole](../wormhole.html) SDK, powered by [BITBOX](../bitbox.html), we're hoping to empower developers to create amazing tokens and crowdsales on Bitcoin Cash.

This tutorial will give you everything you need to start creating your own tokens and ICOs. It will consist of multiple parts. The first will be setting up your development environment. The second will be setting up a full node with `wormholed`. The last part will be creating tokens on testnet.

### Getting Started

The goal of this article is to show the first steps needed to set up your development environment and start checking out the Wormhole SDK.

In this post we’ll cover the following:

- Prerequisites
- Setting up your development environment
- Installing Wormhole SDK
- Running your first Wormhole code samples

---

### Prerequisites

Wormhole SDK is built around modern web technology. To hit the ground running you should have some basic Javascript skills. Javascript is a cornerstone of the Web and at the core of Wormhole SDK. If you’re unfamiliar start by first going through these tutorials on [Javascript](https://www.w3schools.com/jS/default.asp).

#### Development Environment

Wormhole SDK is a javascript framework built on nodeJS. To get started head to the [NodeJS](https://nodejs.org/en/) homepage and download their Long Term Support (LTS) release. Currently that is v8.11.3.

![nodejs download version](../img/tutorials/node-version.png)

This also comes bundled with `npm` which is the “Node Package Manager.” You can confirm everything downloaded correctly by opening your terminal and running `node --version` and `npm --version`.

![node and npm versions](../img/tutorials/npm-version.png)

Next you’ll need a text editor to edit code. For that we suggest [Atom.io](http://atom.io/). It’s an open-source editor built and maintained by Github. It too is built with web tech so you can extend it with HTML, CSS and Javascript plugins and themes.

![atomIO logo](../img/tutorials/atomio.png)

Finally you’re ready to install Wormhole SDK. You can do that with `npm install wormholecash --global`. This will give you access to Wormhole `new` and `console`. To confirm it worked run `wormhole --version`. At the time of writing the latest version of Wormhole SDK is v0.1.21.

![bitbox version](../img/tutorials/wormhole-version.png)

It should be noted that all of the above tools, NodeJS, NPM, AtomIO and Wormhole SDK all work on MacOS, Windows and Linux. The screenshots show MacOS but Wormhole SDK works across all platforms.

### Wormhole new

Now that you have all the tools installed you’re ready to start playing around with the Wormhole SDK. We want to make it as easy as possible for you to create a token or ICO on Bitcoin Cash so Wormhole has a `new` command which creates a basic directory structure and `wormhole.js` config file. To see it in action run `wormhole new lifeExtensionToken`.

![worhole new](../img/tutorials/wormhole-new.png)

You've now got your development environment set up, Wormhole SDK installed and can create new apps. You're gonna need a full node. In the next part we'll set up a Wormhole full node and configure [wormholeREST](https://github.com/Bitcoin-com/wormholerest.bitcoin.com).

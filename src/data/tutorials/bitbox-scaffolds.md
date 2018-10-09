---
title: BITBOX scaffolds
author: Gabriel Cardona
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

The goal of BITBOX is to accelerate how quickly $BCH devs can create their apps. With that in mind today we’re launching Scaffolds. This is a way to bootstrap a Bitcoin Cash application in under a minute.

When creating a new application on any platform too much time is spent setting everything up and configuring it. BITBOX scaffolds do the heavy lifting for you and let you focus on building your app.

#### Setup

1.  [Install `bitbox-sdk`](https://www.npmjs.com/package/bitbox-sdk) globally
    `npm install bitbox-sdk --global`

### React

To quickly create a [React app w/ BITBOX web bindings](https://github.com/Bitcoin-com/bitbox-scaffold-react) follow these steps.

#### Setup

1.  Scaffold a React app w/ BITBOX web bindings
    `bitbox new myApp --scaffold react`
2.  `cd` into new app
    `cd myApp/`
3.  Install dependencies
    `npm install`
4.  Start the app
    `npm start`
5.  Open a browser to `http://localhost:3000/` and confirm you are seeing a basic BIP44 wallet
6.  Win

![Hello BITBOX](/images/bip44.png)

### Angular

To quickly create an [Angular app w/ BITBOX web bindings](https://github.com/Bitcoin-com/bitbox-scaffold-angular) follow these steps.

#### Setup

1.  Scaffold an Angular app w/ BITBOX web bindings
    `bitbox new myApp --scaffold angular`
2.  `cd` into new app
    `cd myApp/`
3.  Install dependencies
    `npm install`
4.  Start the app
    `npm start`
5.  Open a browser to `http://localhost:4200/` and confirm you are seeing a basic BIP44 wallet
6.  Win

![Hello BITBOX](/images/bip44.png)

### Node

To quickly create a [Node JS app w/ BITBOX bindings](https://github.com/Bitcoin-com/bitbox-scaffold-node) follow these steps.

#### Setup

1.  Scaffold a NodeJS app w/ BITBOX bindings
    `bitbox new myApp --scaffold node`
2.  `cd` into new app
    `cd myApp/`
3.  Install dependencies
    `npm install`
4.  Start the app
    `npm start`
5.  Confirm you are seeing a basic BIP44 wallet
6.  Win

![Hello BITBOX](/images/nodebip44.png)

### Config

By default your new app will connect to BITBOX Cloud over [REST](https://rest.bitcoin.com/). If you want to connect to your own REST services pass in a config object when instantiating `bitbox-sdk`.

```
let BITBOX = new BITBOXSDK({
    restURL: 'my-rest-url'
});
```

### Summary

W/ BITBOX Scaffolds you can now create a $BCH app in under a munute. This should accelerate how quickly developers can create Bitcoin Cash apps. Go developers go!

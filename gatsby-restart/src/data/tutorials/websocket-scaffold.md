---
title: Websockets Scaffold
author: Gabriel Cardona
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

### Intro

Websockets make possible an entirely new generation of apps which depend on real-time data. BITBOX SDK has websockets built in. Our new scaffold enables you to bootstrap a Bitcoin Cash React app with BITBOX and websockets integration in under a minute. Accelerate your workflow with BITBOX Scaffolds.

---

### Donate BCH

[@porlybe](https://twitter.com/porlybe) created Donate BCH, which shows the power of websockets and let's you bootstrap your next great app. It's powered by [BITBOX](../bitbox.html) and lets you display logos and QR codes for donations.

![Websocket scaffold homepage](../img/tutorials/websocket-scaffold-3.png)

When a donation is made a modal appears showing the amount.

![EatBCH donation](../img/tutorials/websocket-scaffold-1.png)

![EatBCH_S S donation](../img/tutorials/websocket-scaffold-2.png)

---

### Scaffold

We created a scaffold from Donate BCH to quickly let you bootstrap a React app w/ BITBOX and websockets with no further setup. First run the `new` command and pass in the `--scaffold websockets` flag.

    bitbox new donateBCH --scaffold websockets

![websocket scaffold](../img/tutorials/websocket-scaffold-4.png)

Next `cd` into `donateBCH`, install the deps and start the app.

    cd donateBCH
    npm install
    npm start

Edit `src/donation.js` to add donation addresses, locations and logos. Both legacy and cash addresses are valid. You can add new logos to `src/assets/`.

---

### Leveraging BITBOX

Donate BCH shows very practical ways to leverage BITBOX when creating an app. It demonstrates unit and address conversion, calling REST and listening on a websocket.

#### Unit Conversion

BITBOX can convert whole BCH units [to satoshis](../bitbox/docs/bitcoincash.html#toSatoshi) as well as converting satoshis to [bits](../bitbox/docs/bitcoincash.html#toBits) and back to [whole units](../bitbox/docs/bitcoincash.html#toBitcoinCash). The scaffold [converts satoshis](https://github.com/Bitcoin-com/bitbox-scaffold-websockets/blob/master/src/App.js#L50) to whole BCH.

    const value = BITBOX.BitcoinCash.toBitcoinCash(curr.satoshi);

#### Address Conversion

BITBOX has methods for converting [cash address to legacy](../bitbox/docs/address.html#toLegacyAddress) and [legacy to cash](../bitbox/docs/address.html#toCashAddress). The scaffold [converts cash address to legacy address](https://github.com/Bitcoin-com/bitbox-scaffold-websockets/blob/master/src/App.js#L97).

    const cashaddr = BITBOX.Address.toCashAddress(address)

#### REST

BITBOX SDK has [REST](https://rest.bitcoin.com) integration bundled. The scaffold calls [Address.details](https://github.com/Bitcoin-com/bitbox-scaffold-websockets/blob/master/src/App.js#L121) to get back utxo for an address.

    BITBOX.Address.details(addr)
    .then((result) => {
      result.forEach(r => {
        Object.keys(donations).forEach(p => {
          if (p === r.legacyAddress) donations[p].balance = (r.unconfirmedBalance + r.balance).toFixed(8)
        })
      })
      this.setState({
        donations
      })
    }, (err) => {
      console.log(err)
    });

#### Socket

The `Socket` class lets you quickly get real-time blockchain data. First [create an instance](../bitbox/docs/socket.html#constructor) and then [call listen](../bitbox/docs/socket.html#listen). Here's how the scaffold [updates the UI](https://github.com/Bitcoin-com/bitbox-scaffold-websockets/blob/master/src/App.js#L81) after new tx data comes in.

    const socket = new BITBOX.Socket()
    socket.listen('transactions', this.handleNewTx)

---

### Summary

BITBOX SDK has websockets built in which enables real-time data in Bitcoin Cash apps. Our websocket scaffold lets you bootstrap a Bitcoin Cash React app with BITBOX and websockets integration in under a minute.

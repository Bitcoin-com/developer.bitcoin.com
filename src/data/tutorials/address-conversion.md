---
title: Address Conversion
author: Gabriel Cardona
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

When Bitcoin Cash began as a fork of $BTC on Aug 1st 2017 it kept the legacy address format. This ended up causing quite a bit of confusion and resulted in lost funds as users accidentally sent $BCH to $BTC addresses and vice versa.

To fix this [cashaddr](https://github.com/bitcoincashorg/spec/blob/master/cashaddr.md) was introduced. It’s a base32 encoding based on Bech32.

### Conversion Tool

BITBOX recently added its own conversion tool so you can quickly and easily convert legacy base58Check encoded Bitcoin Cash addresses in to the cashaddr format.

Simply paste in a legacy or cashaddr address and BITBOX will convert it to both formats and generate QR codes.

You can also paste in a private key in Wallet Import Format (WIF) to generate cashaddr/legacy addresses and QR codes.

![Converter](https://bigearth.github.io/bitblog/assets/converter.png)

We’re using [bchaddr.js](https://github.com/bitcoincashjs/bchaddrjs) along w/ [qrcode.react](https://github.com/zpao/qrcode.react).

```javascript
let wif = 'L3npdkC5BkLZP2d6orb5ZefXYZFzkiteDB5okSgyuYJeGXLH3QNA'
let ecpair = BITBOX.ECPair.fromWIF(wif)
let cashaddr = BITBOX.ECPair.toCashAddress(ecpair)
let base58Check = BITBOX.ECPair.toLegacyAddress(ecpair)
let cashaddrQR = <QRCode value={cashaddr} />
let base58CheckQR = <QRCode value={base58Check} />
let wifQR = <QRCode value={wif} />
```

### Sending actual funds

All the addresses in BITBOX are 100% legit on the $BCH network. However BITBOX doesn’t actually connect to the Bitcoin Cash network so if you were to send actual $BCH to one of these generated addresses you wouldn’t see it. You would be able to see it in a live block explorer.

You can safely sweep any funds sent to a BITBOX generated address into a wallet via the private key WIF. But we strongly advice against sending any actual funds to a BITBOX address. This is a development tool and not meant to handle actual funds.

If you want to send real coins to a BITBOX address and then sweep them back into a live wallet we suggest using the $BCH testnet.

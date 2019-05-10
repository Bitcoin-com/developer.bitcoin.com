---
title: BIP21
author: Gabriel Cardona
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

Bitcoin Cash is all about sending and receiving payments. [BIP21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) describes a way to encode payment request information such as address, amount, message etc as a URI. These URIs are a very popular way to share payment requests and you’ll often see them as links in a website or as QR codes. Today we’re releasing `encodeBIP21` and `decodeBIP21` to make it easy for your app to encode/decode BIP21 \$BCH URIs.

## encodeBIP21

To encode a BIP21 URI pass in the address as the first argument and an object of options as the 2nd argument. `encodeBIP21` will encode the options object as query string parameters. This works for addresses encoded in cashAddr w/ and w/out prefix and legacy base58Check.

```javascript
// cashaddr w/ prefix
let address = 'bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s'
let options = {
  amount: 1,
  label: '#BCHForEveryone',
}
bitbox.BitcoinCash.encodeBIP21(address, options)
// bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone

// cashaddr w/out prefix
let address = 'qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s'
let options = {
  amount: 1,
  label: '#BCHForEveryone',
}
bitbox.BitcoinCash.encodeBIP21(address, options)
// bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone

// works w/ legacy addresses too
let address = '1LPqVeYx4Xa96NYCm4X3jhGhPf2EY6ygna'
let options = {
  amount: 1,
  label: '#BCHForEveryone',
}
bitbox.BitcoinCash.encodeBIP21(address, options)
// bitcoincash:qr2tcpvsnca0gaw7jxngtmsvd4ffqdpkxqtfzcd8w3?amount=1&label=%23BCHForEveryone
```

### Error handling

`encodeBIP21` won’t accept strings or negative values as an `amount`.

```javascript
// won’t accept a string as an amount
let address = 'bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s'
let options = {
  amount: 'one',
  label: '#BCHForEveryone',
}
bitbox.BitcoinCash.encodeBIP21(address, options)
// TypeError: Invalid amount

// won't accept a negative value as an amount
let address = 'bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s'
let options = {
  amount: -1,
  label: '#BCHForEveryone',
}
bitbox.BitcoinCash.encodeBIP21(address, options)
// TypeError: Invalid amount
```

## decodeBIP21

To decode a BIP21 URI pass in a valid URI.

```javascript
let bip21 =
  'bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone'
bitbox.BitcoinCash.decodeBIP21(bip21)
// { address: 'qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s', options: { amount: 1, label: '#BCHForEveryone' } }
```

### Error handling

`decodeBIP21` won’t accept incorrectly encoded BIP21 URIs

```javascript
let bip21 =
  'qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone'
bitbox.BitcoinCash.decodeBIP21(bip21)
// Error: Invalid BIP21 URI: qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone
```

## Summary

BIP21 URIs are an extremely popular way to share payment requests. Now w/ `encodeBIP21` and `decodeBIP21` your app can create and process them.

### More info

Find out more info about [encodeBIP21](/bitbox/docs/bitcoincash/#encodebip21)

Find out more info about [decodeBIP21](/bitbox/docs/bitcoincash/#decodebip21)

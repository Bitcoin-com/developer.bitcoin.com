---
title: Send Wormhole Token
icon: coins
ordinal: 3
---

Send a specified amount of a Wormhole token to a destination address

#### Arguments

- txParams `Object` containing to, from, value and sendTokenData properties
  - to `String` cashaddr address of token destination
  - from `String` cashaddr address of user's address
  - value `String` token amount to send
  - sendTokenData `Object` containing tokenId and tokenProtocol properties
    - tokenId `String` id of token
      - _Wormhole_: The wormhole burn address "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqu08dsyxz98whc" followed by the property ID
      - _Example_: Nakamoto token's property ID is 227 which makes its tokenId "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqu08dsyxz98whc227"
  - tokenProtocol `String` protocol of the token
    - `wormhole` for Wormhole tokens
- `Callback` with error and response parameters

#### Result

`Success` txid contains the transaction id

`Failure` err will contain error details

#### Example

      if (typeof web4bch !== 'undefined') {
        web4bch = new Web4Bch(web4bch.currentProvider)

        var txParams = {
          to: "bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g",
          from: web4bch.bch.defaultAccount,
          value: "1000",
          sendTokenData: {
            tokenId: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqu08dsyxz98whc227',
            tokenProtocol: 'wormhole'
          }
        }
        web4bch.bch.sendTransaction(txParams, (err, res) => {
          if (err) {
            console.log('send err', err)
          } else {
            console.log('send success, transaction id:', res)
          }
        })
      }

#### Demo

[Demo Page](https://bitcoin-com.github.io/badger-samples/send-wormhole-token.html)

[Demo Source](https://github.com/bitcoin-com/badger-samples/blob/master/send-wormhole-token.html)

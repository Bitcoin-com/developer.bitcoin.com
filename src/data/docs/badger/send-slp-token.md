---
title: Send SLP Token
icon: coins
ordinal: 2
---

Send a specified amount of an SLP token to a destination address

#### Arguments

- txParams `Object` containing to, from, value and sendTokenData properties
  - to `string` cashaddr address of token destination
  - from `string` cashaddr address of user's address
  - value `string` token amount to send
  - sendTokenData `Object` containing tokenId and tokenProtocol properties
    - tokenId `string` id of token
      - _Simple Ledger_: The txid of the geneis transaction
  - tokenProtocol `string` protocol of the token
    - `slp` for Simple Ledger Protocol tokens
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
            tokenId: 'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
            tokenProtocol: 'slp'
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

[Demo Page](https://bitcoin-com.github.io/badger-samples/send-slp-token.html)

[Demo Source](https://github.com/bitcoin-com/badger-samples/blob/master/send-slp-token.html)

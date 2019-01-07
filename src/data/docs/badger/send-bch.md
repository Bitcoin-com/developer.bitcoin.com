---
title: Send BCH
icon: bitcoin
ordinal: 1
---

Send a specified amount of BCH to a destination address

#### Arguments

- txParams `Object` containing to, from, and value properties
  - to `String` cashaddr address of BCH destination
  - from `String` cashaddr address of user's address
  - value `String` BCH amount to send in satoshis
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
          value: "1000"
        }
        web4bch.bch.sendTransaction(txParams, (err, txid) => {
          if (err) {
            console.log('send err', err)
          } else {
            console.log('send success, transaction id:', txid)
          }
        })
      }

#### Demo

[Demo Page](https://bitcoin-com.github.io/badger-samples/send-bch.html)

[Demo Source](https://github.com/bitcoin-com/badger-samples/blob/master/send-bch.html)

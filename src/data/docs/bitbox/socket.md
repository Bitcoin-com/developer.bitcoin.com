---
title: Socket
icon: plug
ordinal: 19
---

### `constructor`

Create new Socket.

#### Arguments

1.  config `Object`: with properties:
    1.  restURL `string`: optional, Defaults to `https://rest.bitcoin.com`
    2.  callback `Function`: optional

#### Result

Socket `Socket`

#### Examples

      // instance of Socket
      let socket = new bitbox.Socket({callback: () => {console.log('connected')}, restURL: 'https://rest.bitcoin.com'})

### `listen`

Listen on a websocket to get real\-time data.

#### Arguments

1.  dataType `string`: type of data to return in real time. `transactions` or `blocks`

#### Result

data `Object`: data returned in real\-time over a websocket

#### Examples

      let socket = new bitbox.Socket({callback: () => {console.log('connected')}, restURL: 'https://rest.bitcoin.com'})
      socket.listen('transactions', (message) => {
        console.log(message)
      })
      // returns the following
      {
        "format": {
          "txid": "edbfdc5a149741009df15f8b518bdebc54261854fcdfefd7d8aa8a78b5e14250",
          "version": 2,
          "locktime": 0,
          "size": 225,
          "vsize": 225
        },
        "inputs": [
          {
            "txid": "92923f5048703bbf4cb78344d200935b37b88cfaa767635cf0c4275942c9b382",
            "n": 3,
            "script": "304502210099b59aaf9238612ad9ab706cb469dbd13662177e44cfdc5f29101e9e142ceb10022018061daf1127544f1b97817f2430b9f9c78efe54b51303c91c723807834e4ece41 025cc1f660956d4b924a0792b222ddd9b1742280c5e283281364a9b63123fe23e2",
            "sequence": 4294967295
          }
        ],
        "outputs": [
          {
            "satoshi": 6526,
            "value": "0.00006526",
            "n": 0,
            "scriptPubKey": {
              "asm": "OP_DUP OP_HASH160 670180972852c974359232baa64f4019f205bfbc OP_EQUALVERIFY OP_CHECKSIG",
              "hex": "76a914670180972852c974359232baa64f4019f205bfbc88ac",
              "type": "pubkeyhash",
              "addresses": [
                "1APeQ9A39esuwsPDogNZYpGS5CxC54m5CL"
              ]
            }
          },
          {
            "satoshi": 0,
            "value": "0.00000000",
            "n": 1,
            "scriptPubKey": {
              "asm": "OP_RETURN 73747265737374657374626974636f696e2e63617368",
              "hex": "6a1673747265737374657374626974636f696e2e63617368",
              "type": "nulldata",
              "addresses": []
            }
          }
        ]
      }


      let socket = new bitbox.Socket({callback: () => {console.log('connected')}, restURL: 'https://rest.bitcoin.com'})
      socket.listen('blocks', (message) => {
        console.log(message)
      })
      // returns the following
      {
        "transactions": 183,
        "totalBCHSent": 1057662477171,
        "reward": 1250000000,
        "prevHash": "cfac607ebae85629ede7d34f36064d24974f95c90b89c5000000000000000000",
        "id": "0d2d939b3793ff8b2e130fe1f5257abd7784bfe147009f000000000000000000",
        "hash": "0000000000000000009f0047e1bf8477bd7a25f5e10f132e8bff93379b932d0d",
        "merkleRoot": "ac040e9130a71647f29dc55355fbe8db8bb1a5f1ac86b7ee1be0ae8488dc407e",
        "version": 549453824,
        "time": 1558667998,
        "bits": 402882446,
        "nonce": 2478895818
      }

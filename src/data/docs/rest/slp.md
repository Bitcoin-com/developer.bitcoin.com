---
title: SLP
icon: coins
ordinal: 9
---

## List

List all SLP tokens

**URL** : `v2/slp/list`

**Method** : `GET`

**Auth required** : NO

#### Result

`Array` containing all SLP tokens

#### Examples

    curl -X GET "https://trest.bitcoin.com/v2/slp/list" -H "accept: */*"

    // returns
    [
       {
        "id": "24686f336975796253be67ab3d6b1b304905f0f5d81fa934c581aba4da606f38",
        "timestamp": "2019-02-05 10:17",
        "symbol": "TESTNET1",
        "name": "SLP SDK Testnet Token 1",
        "documentUri": "badger@bitcoin.com",
        "documentHash": "",
        "decimals": 8,
        "initialTokenQty": 1000
      },
      {
        "id": "78d57a82a0dd9930cc17843d9d06677f267777dd6b25055bad0ae43f1b884091",
        "timestamp": "2019-02-04 12:43",
        "symbol": "SLPSDK",
        "name": "Awesome SLP SDK Token",
        "documentUri": "badger@bitcoin.com",
        "documentHash": "",
        "decimals": 2,
        "initialTokenQty": 1000000
      }
    ]

## List single

List details about single SLP token by tokenId

**URL** : `v2/slp/list/{tokenId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  tokenId `String` required

#### Result

token `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/list/259908ae44f46ef585edef4bcc1e50dc06e4c391ac4be929fae27235b8158cf1" -H "accept: */*"

    // returns
    {
      "id": "259908ae44f46ef585edef4bcc1e50dc06e4c391ac4be929fae27235b8158cf1",
      "timestamp": "2018-10-11 02:39",
      "symbol": "BROC",
      "name": "Broccoli",
      "documentUri": "broccoli.cash",
      "documentHash": "",
      "decimals": 2,
      "initialTokenQty": 1000
    }

<!-- ## Convert address

Convert an address to cash, legacy and simpleledger format

**URL** : `v2/slp/address/convert/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `String` required. Can be in cash, legacy or simpleledger format

#### Result

conversion `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/address/convert/simpleledger:qz9tzs6d5097ejpg279rg0rnlhz546q4fsnck9wh5m" -H "accept: */*"

    // returns
    {
      "slpAddress": "simpleledger:qz9tzs6d5097ejpg279rg0rnlhz546q4fsnck9wh5m",
      "cashAddress": "bitcoincash:qz9tzs6d5097ejpg279rg0rnlhz546q4fslra7mh29",
      "legacyAddress": "1DeLbv5EMzLEFDvQ8wZiKeSuPGGtSSz5HP"
    } -->

## Validate Bulk

Validate multiple SLP transactions by txid.

**URL** : `v2/slp/validate`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  txids `Array` required

#### Result

valid `Array` of txid strings

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/slp/validateTxid" -H "accept: */*" -H "Content-Type: application/json" -d "{\"txids\":[\"88b121101d71b73599dfc7d79eead599031912b2c48298bf5c1f37f4dd743ffa\",\"fb0eeaa501a6e1acb721669c62a3f70741f48ae0fd7f4b8e1d72088785c51952\"]}""

    // returns
    [
      {
        "txid": "88b121101d71b73599dfc7d79eead599031912b2c48298bf5c1f37f4dd743ffa",
        "valid": true
      },
      {
        "txid": "fb0eeaa501a6e1acb721669c62a3f70741f48ae0fd7f4b8e1d72088785c51952",
        "valid": true
      }
    ]

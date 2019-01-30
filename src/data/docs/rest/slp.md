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

    curl -X GET "https://rest.bitcoin.com/v2/slp/list" -H "accept: */*"

    // returns
    [
      {
        "id": "545cba6f72a08cbcb08c7d4e8166267942e8cb9a611328805c62fa538e861ba4",
        "timestamp": "2018-08-14 13:42",
        "symbol": "",
        "name": "",
        "document": ""
      },
      {
        "id": "83bfe019fcf976142c55e7c0ad4a429f4be1bc2cb138bd8d0bab8dd4cd4758c4",
        "timestamp": "2018-08-14 13:57",
        "symbol": "",
        "name": "",
        "document": ""
      },
      {
        "id": "323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35",
        "timestamp": "2018-08-14 17:53",
        "symbol": "",
        "name": "",
        "document": ""
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
      "timestamp": "2018-10-11 00:39",
      "symbol": "BROC",
      "name": "Broccoli",
      "document": "broccoli.cash"
    }

## Convert address

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
    }

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

    curl -X POST "https://rest.bitcoin.com/v2/slp/validate" -H "accept: */*" -H "Content-Type: application/json" -d "{\"txids\":[\"a5f972572ee1753e2fd2457dd61ce5f40fa2f8a30173d417e49feef7542c96a1\",\"5165dc531aad05d1149bb0f0d9b7bda99c73e2f05e314bcfb5b4bb9ca5e1af5e\"]}"

    // returns
    []

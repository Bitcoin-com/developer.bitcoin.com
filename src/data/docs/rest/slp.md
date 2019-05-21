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

1.  tokenId `string` (required)

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

## List bulk

List details about several SLP tokens,e by tokenId

**URL** : `v2/slp/list`

**Method** : `POST`

**Auth required** : NO

#### BODY Parameters

1.  tokenIds `Array` of token ID strings (required)

#### Result

`Array` of token objects.

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/slp/list" -H "accept: */*" -H "Content-Type: application/json" -d "{\"tokenIds\":[\"259908ae44f46ef585edef4bcc1e50dc06e4c391ac4be929fae27235b8158cf1\",\"7dd083dbec32133c78afd17f2a7550516202c7e9bf98e570edd91d06aebb54ad\"]}"

    // returns
    [
      {
        "id": "259908ae44f46ef585edef4bcc1e50dc06e4c391ac4be929fae27235b8158cf1",
        "timestamp": "2018-10-11 02:39",
        "symbol": "BROC",
        "name": "Broccoli",
        "documentUri": "broccoli.cash",
        "documentHash": "",
        "decimals": 2,
        "initialTokenQty": 1000
      },
      {
        "id": "7dd083dbec32133c78afd17f2a7550516202c7e9bf98e570edd91d06aebb54ad",
        "timestamp": "2019-02-25 17:04",
        "symbol": "HN",
        "name": "Rambo Test Token",
        "documentUri": "test",
        "documentHash": "",
        "decimals": 2,
        "initialTokenQty": 8888
      }
    ]

<!-- ## Convert address

Convert an address to cash, legacy and simpleledger format

**URL** : `v2/slp/address/convert/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `string` required. Can be in cash, legacy or simpleledger format

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

1.  txids `Array` (required)

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

## Balances by tokenId

List all balances for tokenId

**URL** : `v2/slp/balancesForToken/:tokenId",`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  tokenId `string` (required)

#### Result

balances `Array`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/balancesForToken/df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb" -H "accept: */*"

    // returns
    [
      {
        "tokenId": "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb",
        "tokenBalance": 20,
        "slpAddress": 'simpleledger:qp4g0q97tq53pasnxk2rs570c6573qvylunsf5gy9e'
      },
      {
        "tokenId": "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb",
        "tokenBalance": 335.55,
        "slpAddress": 'simpleledger:qqcraw7q0ys3kg4z6f2zd267fhg2093c5c0spfk03f'
      }
    ]

## Token Stats

Stats for token by tokenId

**URL** : `v2/slp/tokenStats/:tokenId",`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  tokenId `string` (required)

#### Result

stats `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/tokenStats/df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb" -H "accept: */*"

    // returns
    {
      "tokenId": "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb",
      "documentUri": "",
      "symbol": "NAKAMOTO",
      "name": "NAKAMOTO",
      "decimals": 8,
      "txnsSinceGenesis": 367,
      "validUtxos": 248,
      "validAddresses": 195,
      "circulatingSupply": 20995990,
      "totalBurned": 4010,
      "totalMinted": 21000000,
      "satoshisLockedUp": 135408
    }

## Transactions

SLP Transactions by tokenId and address

**URL** : `v2/slp/transactions/:tokenId/:address",`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  tokenId `string` (required)
2.  address `string` (required)

#### Result

transactions `Array`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/transactions/495322b37d6b2eae81f045eda612b95870a0c2b6069c58f70cf8ef4e6a9fd43a/qrhvcy5xlegs858fjqf8ssl6a4f7wpstaqlsy4gusz" -H "accept: */*"

    // returns
    [
      {
        "txid": "27e27170b546f05b2af69d6eddff8834038facf5d81302e9e562df09a5c4445f",
        "tokenDetails": {
          "valid": true,
          "detail": {
            "decimals": null,
            "tokenIdHex": "495322b37d6b2eae81f045eda612b95870a0c2b6069c58f70cf8ef4e6a9fd43a",
            "timestamp": null,
            "transactionType": "SEND",
            "versionType": 1,
            "documentUri": null,
            "documentSha256Hex": null,
            "symbol": null,
            "name": null,
            "batonVout": null,
            "containsBaton": null,
            "genesisOrMintQuantity": null,
            "sendOutputs": [
              {
                "$numberDecimal": "0"
              },
              {
                "$numberDecimal": "25"
              },
              {
                "$numberDecimal": "77"
              }
            ]
          },
          "invalidReason": null,
          "schema_version": 30
        }
      }
    ]

## Create TokenType1

Create an SLP token class of TokenType1.

**URL** : `v2/slp/createTokenType1/:fundingAddress/:fundingWif/:tokenReceiverAddress/:batonReceiverAddress/:bchChangeReceiverAddress/:decimals/:name/:symbol/:documentUri/:documentHash/:initialTokenQty`

**Method** : `GET`

**Auth required** : NO

Note this endpoint is only live w/ a `NON_JS_FRAMEWORK` environment variable

#### URL Parameters

1.  `fundingAddress`: `string`. **required** slp address format
2.  `fundingWif`: `string`. **required** compressed WIF format. Available via `SLP.HDNode.toWIF`
3.  `tokenReceiverAddress` : `string`. **required** slp address format
4.  `batonReceiverAddress`: `string`. **required** slp address format. The address which has the baton has the ability to mint more tokens.
5.  `bchChangeReceiverAddress` : `string.` **required** cash address format
6.  `decimals`: `number`. **required** Number of decimal points for your token
7.  `name` : `string`. **required** Name of token. This cannot have any spaces. It must be URL encoded
8.  `symbol` : `string`. **required** Token symbol
9.  `documentUri` : `string`. **required** URI of token document
10. `documentHash` : `string`. **required** Hash of token document
11. `initialTokenQty` : `number`. **required** Initial token quantity

#### Result

txid `string`

#### Examples

    curl -X GET "http://localhost:3000/v2/slp/createTokenType1/slptest:qq5a73af60j6u6nhfwnyyq8ejc2cf3g2uq03en9tn6/cUbRd4Ubjej127coVq73jJaAn395xLS3buxfQZWqCzt5zDX5ko6a/slptest:qq5a73af60j6u6nhfwnyyq8ejc2cf3g2uq03en9tn6/slptest:qq5a73af60j6u6nhfwnyyq8ejc2cf3g2uq03en9tn6/bchtest:qq5a73af60j6u6nhfwnyyq8ejc2cf3g2uq597glup8/0/Burner%20Coins%20Rule/BURN/documentUri/1010101010101010101010101010101010101010101010101010101010101010/100000000" -H "accept: */*"

    // returns
    46572fd617d7f73985061f40539d2852a7cf71f0ee720d194f6a9e838cf39dd4

## Mint TokenType1

Mint an SLP token class by tokenId.

**URL** : `v2/slp/mintTokenType1/:fundingAddress/:fundingWif/:tokenReceiverAddress/:batonReceiverAddress/:bchChangeReceiverAddress/:tokenId/:additionalTokenQty`

**Method** : `GET`

**Auth required** : NO

Note this endpoint is only live w/ a `NON_JS_FRAMEWORK` environment variable

#### URL Parameters

1.  `fundingAddress`: `string`. **required** slp address format
2.  `fundingWif`: `string`. **required** compressed WIF format. Available via `SLP.HDNode.toWIF`
3.  `tokenReceiverAddress` : `string`. **required** slp address format
4.  `batonReceiverAddress`: `string`. **required** slp address format. The address which has the baton has the ability to mint more tokens.
5.  `bchChangeReceiverAddress` : `String.` **required** cash address format
6.  `tokenId`: `string`. **required** tokenId of token to mint more of
7.  `additionalTokenQty`: `number`. **required** Number of additional tokens to mint

#### Result

txid `string`

#### Examples

    curl -X GET "http://localhost:3000/v2/slp/mintTokenType1/qq5a73af60j6u6nhfwnyyq8ejc2cf3g2uq03en9tn6/cUbRd4Ubjej127coVq73jJaAn395xLS3buxfQZWqCzt5zDX5ko6a/qq5a73af60j6u6nhfwnyyq8ejc2cf3g2uq03en9tn6/qq5a73af60j6u6nhfwnyyq8ejc2cf3g2uq03en9tn6/bchtest:qq5a73af60j6u6nhfwnyyq8ejc2cf3g2uq597glup8/46572fd617d7f73985061f40539d2852a7cf71f0ee720d194f6a9e838cf39dd4/123" -H "accept: */*"

    // returns
    cc32021e0d5124ee57f409fb4d6e982d37d1bb25ab1a5a9c3901dce403f9eb7f

## Send TokenType1

Send an amount of tokens by tokenId.

**URL** : `v2/slp/sendTokenType1/:fundingAddress/:fundingWif/:tokenReceiverAddress/:bchChangeReceiverAddress/:tokenId/:amount",`

**Method** : `GET`

**Auth required** : NO

Note this endpoint is only live w/ a `NON_JS_FRAMEWORK` environment variable

#### URL Parameters

1.  `fundingAddress`: `string`. **required** slp address format
2.  `fundingWif`: `string`. **required** compressed WIF format. Available via `SLP.HDNode.toWIF`
3.  `tokenReceiverAddress` : `string` . **required** slp address format
4.  `bchChangeReceiverAddress`: `string` **required** cash address format
5.  `tokenId`: `string`. **required** tokenId of token to send
6.  `amount`: `number`. **required** Number of tokens to send

#### Result

txid `string`

#### Examples

    curl -X GET "http://localhost:3000/v2/slp/sendTokenType1/qq5a73af60j6u6nhfwnyyq8ejc2cf3g2uq03en9tn6/cUbRd4Ubjej127coVq73jJaAn395xLS3buxfQZWqCzt5zDX5ko6a/slptest:qry4ku0t2u7xypl9fqh3f2javgh5797lc5d9ftlw7h/bchtest:qq5a73af60j6u6nhfwnyyq8ejc2cf3g2uq597glup8/46572fd617d7f73985061f40539d2852a7cf71f0ee720d194f6a9e838cf39dd4/1" -H "accept: */*"

    // returns
    b428b862615b99b7529c90d4f53417a74a523288ed3015cc5251bac3818de358

## Burn TokenType1

Burn an amount of tokens by tokenId.

**URL** : `v2/slp/burnTokenType1/:fundingAddress/:fundingWif/:bchChangeReceiverAddress/:tokenId/:amount",`

**Method** : `GET`

**Auth required** : NO

Note this endpoint is only live w/ a `NON_JS_FRAMEWORK` environment variable

#### URL Parameters

1.  `fundingAddress`: `string`. **required** slp address format
2.  `fundingWif`: `string`. **required** compressed WIF format. Available via `SLP.HDNode.toWIF`
3.  `bchChangeReceiverAddress` : `String.` **required** cash address format
4.  `tokenId`: `string`. **required** tokenId of token to burn all of
5.  `amount`: `number`. **required** Amount of tokens to burn

#### Result

txid `string`

#### Examples

    curl -X GET "http://localhost:3000/v2/slp/burnTokenType1/qq5a73af60j6u6nhfwnyyq8ejc2cf3g2uq03en9tn6/cUbRd4Ubjej127coVq73jJaAn395xLS3buxfQZWqCzt5zDX5ko6a/bchtest:qq5a73af60j6u6nhfwnyyq8ejc2cf3g2uq597glup8/46572fd617d7f73985061f40539d2852a7cf71f0ee720d194f6a9e838cf39dd4/10" -H "accept: */*"

    // returns
    78098f87a37bd783577e703a7885d409a2600573435e8157d7887bf608c96a1c

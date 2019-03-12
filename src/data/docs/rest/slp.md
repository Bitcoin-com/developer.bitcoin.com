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

1.  tokenId `String` (required)

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

## Create TokenType1

Create an SLP token class of TokenType1.

**URL** : `v2/slp/createTokenType1/:fundingAddress/:fundingWif/:tokenReceiverAddress/:batonReceiverAddress/:bchChangeReceiverAddress/:decimals/:name/:symbol/:documentUri/:documentHash/:initialTokenQty`

**Method** : `GET`

**Auth required** : NO

Note this endpoint is only live w/ a `NON_JS_FRAMEWORK` environment variable

#### URL Parameters

1.  fundingAddress `String` (required)
2.  fundingWif `String` (required)
3.  tokenReceiverAddress `String` (required)
4.  batonReceiverAddress `String` (required)
5.  bchChangeReceiverAddress `String` (required)
6.  decimals `String` (required)
7.  name `String` (required). This cannot have any spaces. It must be URL encoded
8.  symbol `String` (required)
9.  documentUri `String` (required)
10. documentHash `String` (required)
11. initialTokenQty `String` (required)

#### Result

txid `String`

#### Examples

    curl -X GET "http://localhost:3000/v2/slp/createTokenType1/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/cMsGTGBgS4qsbPNVbp8fwgTCN6YAgjxY6VQrixDxPRZ5x92F5oc4/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/0/Burner%20Coins%20Rule/BURN/documentUri/1010101010101010101010101010101010101010101010101010101010101010/100000000" -H "accept: */*"

    // returns
    946e43c71ff8917687793897d3c4e8b96a12a4f83575dfb45cedd870a0a90c69

## Mint TokenType1

Mint an SLP token class by tokenId.

**URL** : `v2/slp/mintTokenType1/:fundingAddress/:fundingWif/:tokenReceiverAddress/:batonReceiverAddress/:bchChangeReceiverAddress/:tokenId/:additionalTokenQty`

**Method** : `GET`

**Auth required** : NO

Note this endpoint is only live w/ a `NON_JS_FRAMEWORK` environment variable

#### URL Parameters

1.  fundingAddress `String` (required)
2.  fundingWif `String` (required)
3.  tokenReceiverAddress `String` (required)
4.  batonReceiverAddress `String` (required)
5.  bchChangeReceiverAddress `String` (required)
6.  tokenId `String` (required)
7.  additionalTokenQty `String` (required)

#### Result

txid `String`

#### Examples

    curl -X GET "http://localhost:3000/v2/slp/mintTokenType1/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/cMsGTGBgS4qsbPNVbp8fwgTCN6YAgjxY6VQrixDxPRZ5x92F5oc4/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/946e43c71ff8917687793897d3c4e8b96a12a4f83575dfb45cedd870a0a90c69/123" -H "accept: */*"

    // returns
    5dc4ca831acd571963d767e296d84b92effd57c757aab8e39ed3bb59cb2b2e94

## Send TokenType1

Send an amount of tokens by tokenId.

**URL** : `v2/slp/sendTokenType1/:fundingAddress/:fundingWif/:tokenReceiverAddress/:bchChangeReceiverAddress/:tokenId/:amount",`

**Method** : `GET`

**Auth required** : NO

Note this endpoint is only live w/ a `NON_JS_FRAMEWORK` environment variable

#### URL Parameters

1.  fundingAddress `String` (required)
2.  fundingWif `String` (required)
3.  tokenReceiverAddress `String` (required)
4.  bchChangeReceiverAddress `String` (required)
5.  tokenId `String` (required)
6.  amount`String` (required)

#### Result

txid `String`

#### Examples

    curl -X GET "http://localhost:3000/v2/slp/sendTokenType1/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/cMsGTGBgS4qsbPNVbp8fwgTCN6YAgjxY6VQrixDxPRZ5x92F5oc4/bchtest:qza06mmt6zxfgq2yv6jxaq3juffhzvmv9cxayyqlfp/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/946e43c71ff8917687793897d3c4e8b96a12a4f83575dfb45cedd870a0a90c69/123" -H "accept: */*"

    // returns
    b76daf1f2627f253aecc09a19eafe8422d79e6b59b2536493e1025e92a4d75dd

## Burn TokenType1

Burn an amount of tokens by tokenId.

**URL** : `v2/slp/burnTokenType1/:fundingAddress/:fundingWif/:bchChangeReceiverAddress/:tokenId/:amount",`

**Method** : `GET`

**Auth required** : NO

Note this endpoint is only live w/ a `NON_JS_FRAMEWORK` environment variable

#### URL Parameters

1.  fundingAddress `String` (required)
2.  fundingWif `String` (required)
3.  bchChangeReceiverAddress `String` (required)
4.  tokenId `String` (required)
5.  amount`String` (required)

#### Result

txid `String`

#### Examples

    curl -X GET "http://localhost:3000/v2/slp/burnTokenType1/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/cMsGTGBgS4qsbPNVbp8fwgTCN6YAgjxY6VQrixDxPRZ5x92F5oc4/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/946e43c71ff8917687793897d3c4e8b96a12a4f83575dfb45cedd870a0a90c69/123" -H "accept: */*"

    // returns
    902b139b201940a5b726d4ef636a3b2225a64220fb150a6f5bde697180b6c758

## Burn All TokenType1

Burn all tokens by tokenId.

**URL** : `v2/slp/burnAllTokenType1/:fundingAddress/:fundingWif/:bchChangeReceiverAddress/:tokenId",`

**Method** : `GET`

**Auth required** : NO

Note this endpoint is only live w/ a `NON_JS_FRAMEWORK` environment variable

#### URL Parameters

1.  fundingAddress `String` (required)
2.  fundingWif `String` (required)
3.  bchChangeReceiverAddress `String` (required)
4.  tokenId `String` (required)

#### Result

txid `String`

#### Examples

    curl -X GET "http://localhost:3000/v2/slp/burnAllTokenType1/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/cMsGTGBgS4qsbPNVbp8fwgTCN6YAgjxY6VQrixDxPRZ5x92F5oc4/bchtest:qqm2nq9cv9gw66zn5xa0udpxnysknm2x4c95yw59pd/946e43c71ff8917687793897d3c4e8b96a12a4f83575dfb45cedd870a0a90c69" -H "accept: */*"

    // returns
    7e9ff2924355f890ac45151dbb9aca0802d2b84fd478cc35ad62474d12a93b6b

## Balances by tokenId

List all balances for tokenId

**URL** : `v2/slp/balancesForToken/:tokenId",`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  tokenId `String` (required)

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

1.  tokenId `String` (required)

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

1.  tokenId `String` (required)
2.  address `String` (required)

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

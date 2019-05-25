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

tokens `TokenInterface[]` containing all SLP tokens

#### Examples

    curl -X GET "https://trest.bitcoin.com/v2/slp/list" -H "accept: */*"

    // returns
    [
      {
        "decimals": 8,
        "timestamp": "2019-05-24 17:13:21",
        "timestamp_unix": 1558718001,
        "versionType": 1,
        "documentUri": "",
        "symbol": "CAR-CH",
        "name": "CaracasCash",
        "containsBaton": false,
        "id": "7380843cd1089a1a01783f86af37734dc99667a1cdc577391b5f6ea42fc1bfb4",
        "documentHash": null,
        "initialTokenQty": 21000000,
        "blockCreated": 583989,
        "blockLastActiveSend": 584020,
        "blockLastActiveMint": null,
        "txnsSinceGenesis": 2,
        "validAddresses": 2,
        "totalMinted": 21000000,
        "totalBurned": 0,
        "circulatingSupply": 21000000,
        "mintingBatonStatus": "NEVER_CREATED"
      },
      {
        "decimals": 0,
        "timestamp": "2019-05-21 11:33:07",
        "timestamp_unix": 1558438387,
        "versionType": 1,
        "documentUri": "developer.bitcoin.com",
        "symbol": "GABRIEL",
        "name": "SLP SDK Example",
        "containsBaton": true,
        "id": "9ba379fe8171176d4e7e6771d9a24cd0e044c7b788d5f86a3fdf80904832b2c0",
        "documentHash": "1010101010101010101010101010101010101010101010101010101010101010",
        "initialTokenQty": 100000000,
        "blockCreated": 583529,
        "blockLastActiveSend": 583529,
        "blockLastActiveMint": 583536,
        "txnsSinceGenesis": 6,
        "validAddresses": 2,
        "totalMinted": 100000256,
        "totalBurned": 10,
        "circulatingSupply": 100000246,
        "mintingBatonStatus": "ALIVE"
      }
    ]

## List single

List details about single SLP token by tokenId

**URL** : `v2/slp/list/{tokenId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  tokenId `string` **required**

#### Result

token `TokenInterface`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/list/9ba379fe8171176d4e7e6771d9a24cd0e044c7b788d5f86a3fdf80904832b2c0" -H "accept: */*"

    // returns
    {
      "decimals": 0,
      "timestamp": "2019-05-21 11:33:07",
      "timestamp_unix": 1558438387,
      "versionType": 1,
      "documentUri": "developer.bitcoin.com",
      "symbol": "GABRIEL",
      "name": "SLP SDK Example",
      "containsBaton": true,
      "id": "9ba379fe8171176d4e7e6771d9a24cd0e044c7b788d5f86a3fdf80904832b2c0",
      "documentHash": "1010101010101010101010101010101010101010101010101010101010101010",
      "initialTokenQty": 100000000,
      "blockCreated": 583529,
      "blockLastActiveSend": 583529,
      "blockLastActiveMint": 583536,
      "txnsSinceGenesis": 6,
      "validAddresses": 2,
      "totalMinted": 100000256,
      "totalBurned": 10,
      "circulatingSupply": 100000246,
      "mintingBatonStatus": "ALIVE"
    }

## List bulk

List details about several SLP tokens,e by tokenId

**URL** : `v2/slp/list`

**Method** : `POST`

**Auth required** : NO

#### BODY Parameters

1.  tokenIds `string[]` of token ID strings **required**

#### Result

`TokenInterface[]` of token objects.

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/slp/list" -H "accept: */*" -H "Content-Type: application/json" -d "{\"tokenIds\":[\"7380843cd1089a1a01783f86af37734dc99667a1cdc577391b5f6ea42fc1bfb4\",\"9ba379fe8171176d4e7e6771d9a24cd0e044c7b788d5f86a3fdf80904832b2c0\"]}"

    // returns
    [
      {
        "decimals": 8,
        "timestamp": "2019-05-24 17:13:21",
        "timestamp_unix": 1558718001,
        "versionType": 1,
        "documentUri": "",
        "symbol": "CAR-CH",
        "name": "CaracasCash",
        "containsBaton": false,
        "id": "7380843cd1089a1a01783f86af37734dc99667a1cdc577391b5f6ea42fc1bfb4",
        "documentHash": null,
        "initialTokenQty": 21000000,
        "blockCreated": 583989,
        "blockLastActiveSend": 584020,
        "blockLastActiveMint": null,
        "txnsSinceGenesis": 2,
        "validAddresses": 2,
        "totalMinted": 21000000,
        "totalBurned": 0,
        "circulatingSupply": 21000000,
        "mintingBatonStatus": "NEVER_CREATED"
      },
      {
        "decimals": 0,
        "timestamp": "2019-05-21 11:33:07",
        "timestamp_unix": 1558438387,
        "versionType": 1,
        "documentUri": "developer.bitcoin.com",
        "symbol": "GABRIEL",
        "name": "SLP SDK Example",
        "containsBaton": true,
        "id": "9ba379fe8171176d4e7e6771d9a24cd0e044c7b788d5f86a3fdf80904832b2c0",
        "documentHash": "1010101010101010101010101010101010101010101010101010101010101010",
        "initialTokenQty": 100000000,
        "blockCreated": 583529,
        "blockLastActiveSend": 583529,
        "blockLastActiveMint": 583536,
        "txnsSinceGenesis": 6,
        "validAddresses": 2,
        "totalMinted": 100000256,
        "totalBurned": 10,
        "circulatingSupply": 100000246,
        "mintingBatonStatus": "ALIVE"
      }
    ]

## Convert address single

Convert an address to cash, legacy and simpleledger format

**URL** : `v2/slp/convert/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `string` **required**. Can be in cash, legacy or simpleledger format

#### Result

conversion `ConvertResult`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/convert/simpleledger:qz9tzs6d5097ejpg279rg0rnlhz546q4fsnck9wh5m" -H "accept: */*"

    // returns
    {
      "slpAddress": "simpleledger:qz9tzs6d5097ejpg279rg0rnlhz546q4fsnck9wh5m",
      "cashAddress": "bitcoincash:qz9tzs6d5097ejpg279rg0rnlhz546q4fslra7mh29",
      "legacyAddress": "1DeLbv5EMzLEFDvQ8wZiKeSuPGGtSSz5HP"
    }

## Convert address bulk

Convert multiple addresses to cash, legacy and simpleledger format

**URL** : `v2/slp/convert`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  addresses `string[]` **required**. Can be in cash, legacy or simpleledger format

#### Result

conversion `ConvertResult[]`

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/slp/convert" -H "accept: */*" -H "Content-Type: application/json" -d "{\"addresses\":[\"simpleledger:qrxa0unrn67rtn85v7asfddhhth43ecnxua0antk2l\"]}"

    // returns
    [
      {
        "slpAddress": "simpleledger:qrxa0unrn67rtn85v7asfddhhth43ecnxua0antk2l",
        "cashAddress": "bitcoincash:qrxa0unrn67rtn85v7asfddhhth43ecnxu35kg7k5p",
        "legacyAddress": "1KmQDaJdUDwwEFRwVwGwTqJ9gqBzyGYzjY"
      }
    ]

## Validate Single

Validate single SLP transaction by txid.

**URL** : `v2/slp/validate/{txid}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  txid `string` **required**

#### Result

valid `ValidateTxidResult`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/validateTxid/f7e5199ef6669ad4d078093b3ad56e355b6ab84567e59ad0f08a5ad0244f783a" -H "accept: */*"

    // returns
    {
      "txid": "f7e5199ef6669ad4d078093b3ad56e355b6ab84567e59ad0f08a5ad0244f783a",
      "valid": false,
      "invalidReason": "SLP OP_RETURN parsing error (Bad OP_RETURN)."
    }

## Validate Bulk

Validate multiple SLP transactions by txid.

**URL** : `v2/slp/validate`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  txids `string[]` **required**

#### Result

valid `ValidateTxidResult[]`

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/slp/validateTxid" -H "accept: */*" -H "Content-Type: application/json" -d "{\"txids\":[\"f7e5199ef6669ad4d078093b3ad56e355b6ab84567e59ad0f08a5ad0244f783a\",\"fb0eeaa501a6e1acb721669c62a3f70741f48ae0fd7f4b8e1d72088785c51952\"]}"

    // returns
    [
      {
        "txid": "f7e5199ef6669ad4d078093b3ad56e355b6ab84567e59ad0f08a5ad0244f783a",
        "valid": false,
        "invalidReason":"SLP OP_RETURN parsing error (Bad OP_RETURN)."
      },
      {
        "txid": "fb0eeaa501a6e1acb721669c62a3f70741f48ae0fd7f4b8e1d72088785c51952",
        "valid": true
      }
    ]

## Balances by address

List all balances for address

**URL** : `v2/slp/balancesForAddress/:address",`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `string` **required**

#### Result

balances `BalancesForAddress[]`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/balancesForAddress/simpleledger:qz9tzs6d5097ejpg279rg0rnlhz546q4fsnck9wh5m" -H "accept: */*"

    // returns
    [
      {
        "tokenId": "7f8889682d57369ed0e32336f8b7e0ffec625a35cca183f4e81fde4e71a538a1",
        "balance": 433962,
        "slpAddress": "simpleledger:qz9tzs6d5097ejpg279rg0rnlhz546q4fsnck9wh5m",
        "decimalCount": 0
      }
    ]

## Balances by tokenId

List all balances for tokenId

**URL** : `v2/slp/balancesForToken/:tokenId",`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  tokenId `string` **required**

#### Result

balances `BalancesForToken[]`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/balancesForToken/9ba379fe8171176d4e7e6771d9a24cd0e044c7b788d5f86a3fdf80904832b2c0" -H "accept: */*"

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

## Balances for address by tokenId

List balance for address by tokenId

**URL** : `v2/slp/balance/:address/:tokenId",`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `string` **required**
1.  tokenId `string` **required**

#### Result

balance `BalanceForAddressByTokenId`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/balance/simpleledger:qrxa0unrn67rtn85v7asfddhhth43ecnxua0antk2l/9ba379fe8171176d4e7e6771d9a24cd0e044c7b788d5f86a3fdf80904832b2c0" -H "accept: */*"

    // returns
    {
      "tokenId": "9ba379fe8171176d4e7e6771d9a24cd0e044c7b788d5f86a3fdf80904832b2c0",
      "balance": 100000245
    }

## Token Stats

Stats for token by tokenId

**URL** : `v2/slp/tokenStats/:tokenId",`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  tokenId `string` **required**

#### Result

stats `TokenInterface`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/tokenStats/9ba379fe8171176d4e7e6771d9a24cd0e044c7b788d5f86a3fdf80904832b2c0" -H "accept: */*"

    // returns
    {
      "decimals": 0,
      "timestamp": "2019-05-21 11:33:07",
      "timestamp_unix": 1558438387,
      "versionType": 1,
      "documentUri": "developer.bitcoin.com",
      "symbol": "GABRIEL",
      "name": "SLP SDK Example",
      "containsBaton": true,
      "id": "9ba379fe8171176d4e7e6771d9a24cd0e044c7b788d5f86a3fdf80904832b2c0",
      "documentHash": "1010101010101010101010101010101010101010101010101010101010101010",
      "initialTokenQty": 100000000,
      "blockCreated": 583529,
      "blockLastActiveSend": 583529,
      "blockLastActiveMint": 583536,
      "txnsSinceGenesis": 6,
      "validAddresses": 2,
      "totalMinted": 100000256,
      "totalBurned": 10,
      "circulatingSupply": 100000246,
      "mintingBatonStatus": "ALIVE"
    }

## Transaction Details

SLP Transaction details by transaction Id

**URL** : `v2/slp/txDetails/:txid",`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  txidd `string` **required**

#### Result

txDetails `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/txDetails/8ab4ac5dea3f9024e3954ee5b61452955d659a34561f79ef62ac44e133d0980e" -H "accept: */*"

    // returns
    {
      "txid": "8ab4ac5dea3f9024e3954ee5b61452955d659a34561f79ef62ac44e133d0980e",
      "version": 2,
      "locktime": 0,
      "vin": [
        {
          "txid": "99721a9da3f8bffd6465707cf956d6280a7d139242edb74c0158e0d66097568b",
          "vout": 0,
          "sequence": 4294967295,
          "n": 0,
          "scriptSig": {
            "hex": "483045022100f59ab062beb612c49631bf5e214abe9a839637106a48d13b7cc5878b9dffd15e022011a872d53b1f7881464c39a27b9ad75dd2c348f1e5b726ece164d816a64370a541210242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd",
            "asm": "3045022100f59ab062beb612c49631bf5e214abe9a839637106a48d13b7cc5878b9dffd15e022011a872d53b1f7881464c39a27b9ad75dd2c348f1e5b726ece164d816a64370a5[ALL|FORKID] 0242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd"
          },
          "value": 12300,
          "legacyAddress": "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL",
          "cashAddress": "bitcoincash:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fgmc5skpja",
          "slpAddress": "simpleledger:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fghrltrpvr"
        },
        {
          "txid": "23cbcbbe3b38418e0ae2135c2dce05d0ec07ee24f1e4c4b73a45af72d3e25bb4",
          "vout": 3,
          "sequence": 4294967295,
          "n": 1,
          "scriptSig": {
            "hex": "47304402200233d4f348ae1629d868fae2047c77c5da8e52d42291b660fcd813012f76e627022027376e08e38bfbe0746c152fe9caf3a42579838953e166ad238363e594960ccd41210242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd",
            "asm": "304402200233d4f348ae1629d868fae2047c77c5da8e52d42291b660fcd813012f76e627022027376e08e38bfbe0746c152fe9caf3a42579838953e166ad238363e594960ccd[ALL|FORKID] 0242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd"
          },
          "value": 15986676,
          "legacyAddress": "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL",
          "cashAddress": "bitcoincash:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fgmc5skpja",
          "slpAddress": "simpleledger:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fghrltrpvr"
        },
        {
          "txid": "91bafd1d8ff36748804e98a17a9777017e0251fb77fcb0a29b3c6c20764bd674",
          "vout": 0,
          "sequence": 4294967295,
          "n": 2,
          "scriptSig": {
            "hex": "483045022100b907aca9e4be21bef149baa715e6826420f8886b00bca9a5d380a8243549d8cf02205938d363f581d4a20a5eeb2b7002c5aa118fceea58d4de58907ea21c1e6a088141210242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd",
            "asm": "3045022100b907aca9e4be21bef149baa715e6826420f8886b00bca9a5d380a8243549d8cf02205938d363f581d4a20a5eeb2b7002c5aa118fceea58d4de58907ea21c1e6a0881[ALL|FORKID] 0242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd"
          },
          "value": 10000,
          "legacyAddress": "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL",
          "cashAddress": "bitcoincash:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fgmc5skpja",
          "slpAddress": "simpleledger:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fghrltrpvr"
        },
        {
          "txid": "ccb182f945a2b3555d88c6ff0edaeaf4ef3ae6c5aa8650e7688f9b2ff376274a",
          "vout": 0,
          "sequence": 4294967295,
          "n": 3,
          "scriptSig": {
            "hex": "483045022100eac5b06854ccfe84f8e8155f23d64ce68f95c5f99fdc1ee058a5abd9edfeca2502200e42583ce43458ebccbca8cff772443116c1e2ac8912fc90abcc6efdcf24550241210242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd",
            "asm": "3045022100eac5b06854ccfe84f8e8155f23d64ce68f95c5f99fdc1ee058a5abd9edfeca2502200e42583ce43458ebccbca8cff772443116c1e2ac8912fc90abcc6efdcf245502[ALL|FORKID] 0242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd"
          },
          "value": 3210,
          "legacyAddress": "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL",
          "cashAddress": "bitcoincash:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fgmc5skpja",
          "slpAddress": "simpleledger:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fghrltrpvr"
        },
        {
          "txid": "23cbcbbe3b38418e0ae2135c2dce05d0ec07ee24f1e4c4b73a45af72d3e25bb4",
          "vout": 2,
          "sequence": 4294967295,
          "n": 4,
          "scriptSig": {
            "hex": "483045022100ef64c1ff60dda8ff30c5f5a760100fa1327e938a98970289fe91ada41bc10dc70220060204aa6391151bcc451901dc2c174ea07031071673279097f28ef4f19bef9d41210242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd",
            "asm": "3045022100ef64c1ff60dda8ff30c5f5a760100fa1327e938a98970289fe91ada41bc10dc70220060204aa6391151bcc451901dc2c174ea07031071673279097f28ef4f19bef9d[ALL|FORKID] 0242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd"
          },
          "value": 546,
          "legacyAddress": "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL",
          "cashAddress": "bitcoincash:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fgmc5skpja",
          "slpAddress": "simpleledger:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fghrltrpvr"
        }
      ],
      "vout": [
        {
          "value": "0.00000000",
          "n": 0,
          "scriptPubKey": {
            "hex": "6a04534c500001010453454e4420df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb080000000005f5e10008000001638de34bc0",
            "asm": "OP_RETURN 5262419 1 1145980243 df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb 0000000005f5e100 000001638de34bc0"
          },
          "spentTxId": null,
          "spentIndex": null,
          "spentHeight": null
        },
        {
          "value": "0.00000546",
          "n": 1,
          "scriptPubKey": {
            "hex": "76a914a8f9b1307fa412da6a909f08930e5a502d27a74a88ac",
            "asm": "OP_DUP OP_HASH160 a8f9b1307fa412da6a909f08930e5a502d27a74a OP_EQUALVERIFY OP_CHECKSIG",
            "addresses": [
              "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL"
            ],
            "type": "pubkeyhash",
            "cashAddrs": [
              "bitcoincash:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fgmc5skpja"
            ],
            "slpAddrs": [
              "simpleledger:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fghrltrpvr"
            ]
          },
          "spentTxId": "0a730a25a758af6a28605bf6e7f8e697739bbf442826082e3d348817691e406e",
          "spentIndex": 2,
          "spentHeight": 572220
        },
        {
          "value": "0.00000546",
          "n": 2,
          "scriptPubKey": {
            "hex": "76a914a8f9b1307fa412da6a909f08930e5a502d27a74a88ac",
            "asm": "OP_DUP OP_HASH160 a8f9b1307fa412da6a909f08930e5a502d27a74a OP_EQUALVERIFY OP_CHECKSIG",
            "addresses": [
              "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL"
            ],
            "type": "pubkeyhash",
            "cashAddrs": [
              "bitcoincash:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fgmc5skpja"
            ],
            "slpAddrs": [
              "simpleledger:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fghrltrpvr"
            ]
          },
          "spentTxId": "0a730a25a758af6a28605bf6e7f8e697739bbf442826082e3d348817691e406e",
          "spentIndex": 1,
          "spentHeight": 572220
        },
        {
          "value": "0.16010680",
          "n": 3,
          "scriptPubKey": {
            "hex": "76a914a8f9b1307fa412da6a909f08930e5a502d27a74a88ac",
            "asm": "OP_DUP OP_HASH160 a8f9b1307fa412da6a909f08930e5a502d27a74a OP_EQUALVERIFY OP_CHECKSIG",
            "addresses": [
              "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL"
            ],
            "type": "pubkeyhash",
            "cashAddrs": [
              "bitcoincash:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fgmc5skpja"
            ],
            "slpAddrs": [
              "simpleledger:qz50nvfs07jp9kn2jz0s3ycwtfgz6fa8fghrltrpvr"
            ]
          },
          "spentTxId": "0a730a25a758af6a28605bf6e7f8e697739bbf442826082e3d348817691e406e",
          "spentIndex": 0,
          "spentHeight": 572220
        }
      ],
      "blockhash": "000000000000000003600e20592475b15fafcfe1971859217fa67c6331af1144",
      "blockheight": 571897,
      "confirmations": 12176,
      "time": 1551459665,
      "blocktime": 1551459665,
      "valueOut": 0.16011772,
      "size": 924,
      "valueIn": 0.16012732,
      "fees": 0.0000096,
      "tokenInfo": {
        "versionType": 1,
        "transactionType": "SEND",
        "tokenIdHex": "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb",
        "sendOutputs": [
          "0",
          "100000000",
          "1527093873600"
        ]
      },
      "tokenIsValid": true
    }

## Transactions

SLP Transactions by tokenId and address

**URL** : `v2/slp/transactions/:tokenId/:address",`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  tokenId `string` **required**
2.  address `string` **required**

#### Result

transactions `Array`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/transactions/9ba379fe8171176d4e7e6771d9a24cd0e044c7b788d5f86a3fdf80904832b2c0/simpleledger:qrxa0unrn67rtn85v7asfddhhth43ecnxua0antk2l" -H "accept: */*"

    // returns
    [
      {
        "txid": "6f69a127738eab861b56e39137124ebcda84c82083879aea82dcd897643b8ee3",
        "tokenDetails": {
          "valid": true,
          "detail": {
            "decimals": 0,
            "tokenIdHex": "9ba379fe8171176d4e7e6771d9a24cd0e044c7b788d5f86a3fdf80904832b2c0",
            "transactionType": "MINT",
            "versionType": 1,
            "documentUri": "developer.bitcoin.com",
            "documentSha256Hex": "1010101010101010101010101010101010101010101010101010101010101010",
            "symbol": "GABRIEL",
            "name": "SLP SDK Example",
            "txnBatonVout": 2,
            "txnContainsBaton": true,
            "outputs": [
              {
                "address": "simpleledger:qrxa0unrn67rtn85v7asfddhhth43ecnxua0antk2l",
                "amount": "10"
              }
            ]
          },
          "invalidReason": null,
          "schema_version": 70
        }
      }
    ]

## Burn Total

input, output and burn total for slp transaction

**URL** : `v2/slp/burnTotal/:transactionId",`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  transactionId `string` **required**

#### Result

totals `BurnTotalResult`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/slp/burnTotal/c7078a6c7400518a513a0bde1f4158cf740d08d3b5bfb19aa7b6657e2f4160de" -H "accept: */*"

    // returns
    {
      "transactionId": "c7078a6c7400518a513a0bde1f4158cf740d08d3b5bfb19aa7b6657e2f4160de",
      "inputTotal": 100000100,
      "outputTotal": 100000000,
      "burnTotal": 100
    }

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

## Interfaces

### ValidateTxidResult

    {
      txid: string
      valid: boolean
      invalidReason?: string
    }

### TokenInterface

    {
      decimals: number
      timestamp: string
      timestamp_unix: number
      versionType: number
      documentUri: string
      symbol: string
      name: string
      containsBaton: boolean
      id: string
      documentHash: null | string
      initialTokenQty: number
      blockCreated: number
      blockLastActiveSend: number
      blockLastActiveMint: null | number
      txnsSinceGenesis: number
      validAddresses: number
      totalMinted: number
      totalBurned: number
      circulatingSupply: number
      mintingBatonStatus: string
    }

### BalancesForAddress

    {
      tokenId: string
      balance: number
      slpAddress: string
      decimalCount: number
    }

### BalancesForToken

    {
      tokenBalance: number
      slpAddress: string
      tokenId: string
    }

### BalanceForAddressByTokenId

    {
      tokenId: string
      balance: number
    }

### ConvertResult

    {
      slpAddress: string
      cashAddress: string
      legacyAddress: string
    }

### BurnTotalResult

    {
      transactionId: string
      inputTotal: number
      outputTota": number
      burnTotal: number
    }

---
title: Raw Transactions
icon: exchange
ordinal: 8
---

## Decode Single Raw Transaction

Return a JSON object representing the serialized, hex-encoded transaction.

**URL** : `v2/rawtransactions/decodeRawTransaction/{hex}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  hex encoded `String` (required)

#### Result

`Object` containing the decoded transaction data

#### Examples

    curl -X GET "https://bitcoin.com/v2/rawtransactions/decodeRawTransaction/02000000010e991f7ccec410f27d333f737f149b5d3be6728687da81072e638aed0063a176010000006b483045022100cd20443b0af090053450bc4ab00d563d4ac5955bb36e0135b00b8a96a19f233302205047f2c70a08c6ef4b76f2d198b33a31d17edfaa7e1e9e865894da0d396009354121024d4e7f522f67105b7bf5f9dbe557e7b2244613fdfcd6fe09304f93877328f6beffffffff02a0860100000000001976a9140ee020c07f39526ac5505c54fa1ab98490979b8388acb5f0f70b000000001976a9143a9b2b0c12fe722fcf653b6ef5dcc38732d6ff5188ac00000000" -H "accept: application/json"

    // returns
    {
      "txid": "5159ae0f5327294c16267ae4ddbdbbe167b8c57c1aed37c50ed7439aa573d66a",
      "hash": "5159ae0f5327294c16267ae4ddbdbbe167b8c57c1aed37c50ed7439aa573d66a",
      "size": 226,
      "version": 2,
      "locktime": 0,
      "vin": [
        {
          "txid": "76a16300ed8a632e0781da878672e63b5d9b147f733f337df210c4ce7c1f990e",
          "vout": 1,
          "scriptSig": {
            "asm": "3045022100cd20443b0af090053450bc4ab00d563d4ac5955bb36e0135b00b8a96a19f233302205047f2c70a08c6ef4b76f2d198b33a31d17edfaa7e1e9e865894da0d39600935[ALL|FORKID] 024d4e7f522f67105b7bf5f9dbe557e7b2244613fdfcd6fe09304f93877328f6be",
            "hex": "483045022100cd20443b0af090053450bc4ab00d563d4ac5955bb36e0135b00b8a96a19f233302205047f2c70a08c6ef4b76f2d198b33a31d17edfaa7e1e9e865894da0d396009354121024d4e7f522f67105b7bf5f9dbe557e7b2244613fdfcd6fe09304f93877328f6be"
          },
          "sequence": 4294967295
        }
      ],
      "vout": [
        {
          "value": 0.001,
          "n": 0,
          "scriptPubKey": {
            "asm": "OP_DUP OP_HASH160 0ee020c07f39526ac5505c54fa1ab98490979b83 OP_EQUALVERIFY OP_CHECKSIG",
            "hex": "76a9140ee020c07f39526ac5505c54fa1ab98490979b8388ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [
              "bchtest:qq8wqgxq0uu4y6k92pw9f7s6hxzfp9umsvtg39pzqf"
            ]
          }
        },
        {
          "value": 2.00798389,
          "n": 1,
          "scriptPubKey": {
            "asm": "OP_DUP OP_HASH160 3a9b2b0c12fe722fcf653b6ef5dcc38732d6ff51 OP_EQUALVERIFY OP_CHECKSIG",
            "hex": "76a9143a9b2b0c12fe722fcf653b6ef5dcc38732d6ff5188ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [
              "bchtest:qqafk2cvztl8yt70v5akaawucwrn94hl2yups7rzfn"
            ]
          }
        }
      ]
    }

## Decode Bulk Raw Transactions

Return bulk hex encoded transaction.

**URL** : `v2/rawtransactions/decodeRawTransaction`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  hexes `Array`

#### Result

decoded `Array` containing the decoded transaction data

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/rawtransactions/decodeRawTransaction" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"hexes\":[\"01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000\",\"01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000\"]}"

    // returns
    [
      {
        "txid": "d86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758",
        "hash": "d86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758",
        "size": 191,
        "version": 1,
        "locktime": 0,
        "vin": [
          {
            "txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
            "vout": 0,
            "scriptSig": {
              "asm": "30440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72[ALL] 03083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39",
              "hex": "4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39"
            },
            "sequence": 4294967295
          }
        ],
        "vout": [
          {
            "value": 12.5,
            "n": 0,
            "scriptPubKey": {
              "asm": "OP_DUP OP_HASH160 d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a51 OP_EQUALVERIFY OP_CHECKSIG",
              "hex": "76a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac",
              "reqSigs": 1,
              "type": "pubkeyhash",
              "addresses": [
                "bitcoincash:qrt7038qku825e7wl7wjsg73hwuldhu62yz9t0u9ng"
              ]
            }
          }
        ]
      },
      {
        "txid": "d86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758",
        "hash": "d86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758",
        "size": 191,
        "version": 1,
        "locktime": 0,
        "vin": [
          {
            "txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
            "vout": 0,
            "scriptSig": {
              "asm": "30440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72[ALL] 03083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39",
              "hex": "4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39"
            },
            "sequence": 4294967295
          }
        ],
        "vout": [
          {
            "value": 12.5,
            "n": 0,
            "scriptPubKey": {
              "asm": "OP_DUP OP_HASH160 d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a51 OP_EQUALVERIFY OP_CHECKSIG",
              "hex": "76a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac",
              "reqSigs": 1,
              "type": "pubkeyhash",
              "addresses": [
                "bitcoincash:qrt7038qku825e7wl7wjsg73hwuldhu62yz9t0u9ng"
              ]
            }
          }
        ]
      }
    ]

## Decode Single Script

Decode a single hex-encoded script.

**URL** : `v2/rawtransactions/decodeScript/{hex}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  hex encoded `String` (required)

#### Result

`Object` containing the decoded script data

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/rawtransactions/decodeScript/4830450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed592012102e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16" -H "accept: application/json"

    // returns
    {
      "asm": "30450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed59201 02e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16",
      "type": "nonstandard",
      "p2sh": "bitcoincash:pqwndulzwft8dlmqrteqyc9hf823xr3lcc7ypt74ts"
    }

## Bulk Decode Script

Decode an array of hex-encoded scripts.

**URL** : `v2/rawtransactions/decodeScript`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  hexes `Array` of encoded strings (required)

#### Result

`Array` of objects containing the decoded script data

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/rawtransactions/decodeScript" -H "accept: */*" -H "Content-Type: application/json" -d "{\"hexes\":[\"01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000\",\"01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000\"]}"

    // returns
    [
      {
        "asm": "0 0 0 59 OP_MIN OP_UNKNOWN OP_UNKNOWN OP_ROLL OP_ROT b27ac72c3e67768f617fc81bc3888a51323a OP_LESSTHAN OP_NOP9 OP_HASH256 1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26 OP_UNKNOWN OP_ADD OP_UNKNOWN OP_2SWAP 33 -8142088 10 24916 41ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9 OP_UNKNOWN OP_UNKNOWN OP_BOOLAND 1 OP_EQUALVERIFY OP_CHECKSIG 0 0 0 0",
        "type": "nonstandard",
        "p2sh": "bitcoincash:pp2jmzk695tg8dxnvxln5ppsrnggw6c8hg0sl8nrxf"
      },
      {
        "asm": "0 0 0 59 OP_MIN OP_UNKNOWN OP_UNKNOWN OP_ROLL OP_ROT b27ac72c3e67768f617fc81bc3888a51323a OP_LESSTHAN OP_NOP9 OP_HASH256 1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26 OP_UNKNOWN OP_ADD OP_UNKNOWN OP_2SWAP 33 -8142088 10 24916 41ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9 OP_UNKNOWN OP_UNKNOWN OP_BOOLAND 1 OP_EQUALVERIFY OP_CHECKSIG 0 0 0 0",
        "type": "nonstandard",
        "p2sh": "bitcoincash:pp2jmzk695tg8dxnvxln5ppsrnggw6c8hg0sl8nrxf"
      }
    ]

## Get Raw Transaction

return the raw transaction data. If verbose is 'true', returns an Object with information about 'txid'. If verbose is 'false' or omitted, returns a string that is serialized, hex-encoded data for 'txid'.

**URL** : `/rawtransactions/decodeRawTransaction/{hex}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  hex encoded txid `String` (required)

#### Query Parameters

1.  verbose `String` of value "true" optional. Default is false.

#### Result

`String` containing hex encoded transaction if _verbose_ is false. `Object` containing the decoded transaction data if _verbose_ is true.

#### Examples

    curl -X GET "https://bitcoin.com/v2/rawtransactions/getRawTransaction/40112ab9d2b5f98427839272d7a1e23dd2afc6c8355626f373e076c2ab5c2f72?verbose=true" -H "accept: application/json"

    // returns
    {
      "hex": "0100000001f94a8d3f0ff3391d6b574691df85b772a067789c625fcfddb062517faf81a056010000006a473044022065d3d111db75d01d001bbd411961759f7b2eacab379912c159208f8147e322ea02201fe597474710966b16ae97b0e0673d5ca66bfe8618f89addea833f6e87cf4e3641210289d92b4239c112e97db3aac9590681968bd00415e974dba04bc81cca96b8c7ecffffffff02d0070000000000001976a91432b57f34861bcbe33a701be9ac3a50288fbc0a3d88acc8777a1f000000001976a914b8e0a1c9040f8636a453ba077d7fa5f2318c7d0c88ac00000000",
      "txid": "40112ab9d2b5f98427839272d7a1e23dd2afc6c8355626f373e076c2ab5c2f72",
      "hash": "40112ab9d2b5f98427839272d7a1e23dd2afc6c8355626f373e076c2ab5c2f72",
      "size": 225,
      "version": 1,
      "locktime": 0,
      "vin": [
        {
          "txid": "56a081af7f5162b0ddcf5f629c7867a072b785df9146576b1d39f30f3f8d4af9",
          "vout": 1,
          "scriptSig": {
            "asm": "3044022065d3d111db75d01d001bbd411961759f7b2eacab379912c159208f8147e322ea02201fe597474710966b16ae97b0e0673d5ca66bfe8618f89addea833f6e87cf4e36[ALL|FORKID] 0289d92b4239c112e97db3aac9590681968bd00415e974dba04bc81cca96b8c7ec",
            "hex": "473044022065d3d111db75d01d001bbd411961759f7b2eacab379912c159208f8147e322ea02201fe597474710966b16ae97b0e0673d5ca66bfe8618f89addea833f6e87cf4e3641210289d92b4239c112e97db3aac9590681968bd00415e974dba04bc81cca96b8c7ec"
          },
          "sequence": 4294967295
        }
      ],
      "vout": [
        {
          "value": 0.00002,
          "n": 0,
          "scriptPubKey": {
            "asm": "OP_DUP OP_HASH160 32b57f34861bcbe33a701be9ac3a50288fbc0a3d OP_EQUALVERIFY OP_CHECKSIG",
            "hex": "76a91432b57f34861bcbe33a701be9ac3a50288fbc0a3d88ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [
              "bchtest:qqet2le5scduhce6wqd7ntp62q5gl0q285mw88lsca"
            ]
          }
        },
        {
          "value": 5.28119752,
          "n": 1,
          "scriptPubKey": {
            "asm": "OP_DUP OP_HASH160 b8e0a1c9040f8636a453ba077d7fa5f2318c7d0c OP_EQUALVERIFY OP_CHECKSIG",
            "hex": "76a914b8e0a1c9040f8636a453ba077d7fa5f2318c7d0c88ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [
              "bchtest:qzuwpgwfqs8cvd4y2waqwltl5herrrrapsujlsdcwf"
            ]
          }
        }
      ],
      "blockhash": "00000000002a7077295ec8d4f7afdace8d37d694384cc821e406834fe57aeaae",
      "confirmations": 718,
      "time": 1545086356,
      "blocktime": 1545086356
    }

## Send Single Raw Transaction

Send single raw transactions to network.

**URL** : `v2/rawtransactions/sendRawTransaction`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  hex `String`. (required)

#### Result

txids `String` containing the txid of the transaction

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/rawtransactions/sendRawTransaction/01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000" -H "accept: */*"

    // returns
    [
      "5159ae0f5327294c16267ae4ddbdbbe167b8c57c1aed37c50ed7439aa573d66a"
    ]

## Send Bulk Raw Transactions

Send bulk raw transactions to network.

**URL** : `v2/rawtransactions/sendRawTransaction`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  hexes `Array`. (required)

#### Result

txids `Array` containing the txids

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/rawtransactions/sendRawTransaction" -H "accept: */*" -H "Content-Type: application/json" -d "{\"hexes\":[\"01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000\",\"01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000\"]}"

    // returns
    [
      "5159ae0f5327294c16267ae4ddbdbbe167b8c57c1aed37c50ed7439aa573d66a"
    ]

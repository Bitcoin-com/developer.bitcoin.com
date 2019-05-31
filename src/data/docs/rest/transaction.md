---
title: Transaction
icon: exchange
ordinal: 9
---

## Transaction details single

Details about a transaction

**URL** : `v2/transaction/details/{txid}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  txid `string` required

#### Result

`Object` containing transaction data

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/transaction/details/fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33" -H "accept: application/json"

    // returns
    {
      "txid": "fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33",
      "version": 1,
      "locktime": 0,
      "vin": [
        {
          "coinbase": "04ffff001d02fd04",
          "sequence": 4294967295,
          "n": 0
        }
      ],
      "vout": [
        {
          "value": "50.00000000",
          "n": 0,
          "scriptPubKey": {
            "hex": "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
            "asm": "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
            "addresses": [
              "1BW18n7MfpU35q4MTBSk8pse3XzQF8XvzT"
            ],
            "type": "pubkeyhash"
          },
          "spentTxId": null,
          "spentIndex": null,
          "spentHeight": null
        }
      ],
      "blockhash": "00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09",
      "blockheight": 1000,
      "confirmations": 560841,
      "time": 1232346882,
      "blocktime": 1232346882,
      "isCoinBase": true,
      "valueOut": 50,
      "size": 135
    }

## Transaction details bulk

Bulk details about transactions

**URL** : `v2/transaction/details`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  txids `Array` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/transaction/details" -H "Content-Type: application/json" -d "{\"txids\":[\"a5f972572ee1753e2fd2457dd61ce5f40fa2f8a30173d417e49feef7542c96a1\",\"5165dc531aad05d1149bb0f0d9b7bda99c73e2f05e314bcfb5b4bb9ca5e1af5e\"]}"

    // returns
    [
      {
        "txid": "a5f972572ee1753e2fd2457dd61ce5f40fa2f8a30173d417e49feef7542c96a1",
        "version": 1,
        "locktime": 0,
        "vin": [
          {
            "txid": "5165dc531aad05d1149bb0f0d9b7bda99c73e2f05e314bcfb5b4bb9ca5e1af5e",
            "vout": 1,
            "sequence": 4294967295,
            "n": 0,
            "scriptSig": {
              "hex": "483045022100cf9869b1e8c5e5da7bb6753a92171ee17c2bb53a5ed1db25b0a056d9ad459e4e022067c47af184c110cf832fa2f86ce1eebf363eb72293cc450f7ae3d82aad9da22c41210299b1eedeb115b5880cd5e0df0717bd982748a8e003e34371dc36301e17ee0ed6",
              "asm": "3045022100cf9869b1e8c5e5da7bb6753a92171ee17c2bb53a5ed1db25b0a056d9ad459e4e022067c47af184c110cf832fa2f86ce1eebf363eb72293cc450f7ae3d82aad9da22c[ALL|FORKID] 0299b1eedeb115b5880cd5e0df0717bd982748a8e003e34371dc36301e17ee0ed6"
            },
            "value": 10000,
            "legacyAddress": "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W",
            "cashAddress": "bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c"
          }
        ],
        "vout": [
          {
            "value": "0.00009805",
            "n": 0,
            "scriptPubKey": {
              "hex": "76a914e46b114b3908efe7f18cd1435d2e2ffa16a936fd88ac",
              "asm": "OP_DUP OP_HASH160 e46b114b3908efe7f18cd1435d2e2ffa16a936fd OP_EQUALVERIFY OP_CHECKSIG",
              "addresses": [
                "1MpmKvSd23ti8v4M2q3YBvEsikyVUQu23R"
              ],
              "type": "pubkeyhash"
            },
            "spentTxId": "4a4dea4a10e0a6efcd0885a2a548f56390a2d7c2fd17ba45860bde593952b7fb",
            "spentIndex": 3,
            "spentHeight": 557520
          }
        ],
        "blockhash": "0000000000000000015a670527f131686736987bc3889bc44674795ed64ef40d",
        "blockheight": 557518,
        "confirmations": 4335,
        "time": 1542758880,
        "blocktime": 1542758880,
        "valueOut": 0.00009805,
        "size": 192,
        "valueIn": 0.0001,
        "fees": 0.00000195
      },
      {
        "txid": "5165dc531aad05d1149bb0f0d9b7bda99c73e2f05e314bcfb5b4bb9ca5e1af5e",
        "version": 1,
        "locktime": 0,
        "vin": [
          {
            "txid": "287494433cb225a988f07d1d937938f3bb6e34bcb447fef23e293ef6aa08a126",
            "vout": 1,
            "sequence": 4294967295,
            "n": 0,
            "scriptSig": {
              "hex": "483045022100d02c2248c5f3fdcffd0f90e371194e9f87d0e7034e286e267e18dfda25de123f022074cdb79a2224ae471a996ddb0d524d3470ea18f3a5d13031c1be249ae54843f1412103c9f617abf3e0f5663a3591581d9fbdd990e7ac30995f8739b006fee8f5b5e6cb",
              "asm": "3045022100d02c2248c5f3fdcffd0f90e371194e9f87d0e7034e286e267e18dfda25de123f022074cdb79a2224ae471a996ddb0d524d3470ea18f3a5d13031c1be249ae54843f1[ALL|FORKID] 03c9f617abf3e0f5663a3591581d9fbdd990e7ac30995f8739b006fee8f5b5e6cb"
            },
            "value": 42231,
            "legacyAddress": "1GnUsZgtRR3Wq6peptG823Sr3YNohPpNhb",
            "cashAddress": "bitcoincash:qzkj8hcfz4hzpc0wk8lj9mvflfv5vn070gp6t25sd8"
          }
        ],
        "vout": [
          {
            "value": "0.00031988",
            "n": 0,
            "scriptPubKey": {
              "hex": "76a91400d75d903c57e418e718a2dab998a441a7117e7888ac",
              "asm": "OP_DUP OP_HASH160 00d75d903c57e418e718a2dab998a441a7117e78 OP_EQUALVERIFY OP_CHECKSIG",
              "addresses": [
                "115SzregxVDqHDfMPtHjsqYfM8cbmfR4Ji"
              ],
              "type": "pubkeyhash"
            },
            "spentTxId": "28043a29f39dcf94c2496fd9e5e4ffcbf80af078ba41a3ca2a274a7a88168827",
            "spentIndex": 1,
            "spentHeight": 556837
          },
          {
            "value": "0.00010000",
            "n": 1,
            "scriptPubKey": {
              "hex": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac",
              "asm": "OP_DUP OP_HASH160 a0f531f4ff810a415580c12e54a7072946bb927e OP_EQUALVERIFY OP_CHECKSIG",
              "addresses": [
                "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W"
              ],
              "type": "pubkeyhash"
            },
            "spentTxId": "a5f972572ee1753e2fd2457dd61ce5f40fa2f8a30173d417e49feef7542c96a1",
            "spentIndex": 0,
            "spentHeight": 557518
          }
        ],
        "blockhash": "000000000000000000bdc52a11408781f1f41b744ee8e5c43df8cda242f09144",
        "blockheight": 556344,
        "confirmations": 5509,
        "time": 1542037792,
        "blocktime": 1542037792,
        "valueOut": 0.00041988,
        "size": 226,
        "valueIn": 0.00042231,
        "fees": 0.00000243
      }
    ]

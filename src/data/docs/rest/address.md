---
title: Address
icon: qrcode
ordinal: 1
---

## Address details single

Returns the details of an address including balance

**URL** : `v2/address/details/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `string` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/address/details/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: application/json"

    // returns
    {
      "addrStr": "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W",
      "balance": 0.01,
      "balanceSat": 1000000,
      "totalReceived": 0.05185868,
      "totalReceivedSat": 5185868,
      "totalSent": 0.04185868,
      "totalSentSat": 4185868,
      "unconfirmedBalance": 0,
      "unconfirmedBalanceSat": 0,
      "unconfirmedTxAppearances": 0,
      "txAppearances": 36,
      "transactions": [
        "ac444896b3e32d17824fa6573eed3b89768c5c9085b7a71f3ba88e9d5ba67355",
        "a5f972572ee1753e2fd2457dd61ce5f40fa2f8a30173d417e49feef7542c96a1",
        "81039b1d7b855b133f359f9dc65f776bd105650153a941675fedc504228ddbd3"
      ],
      "legacyAddress": "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W",
      "cashAddress": "bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c",
      "slpAddress":"simpleledger:qzs02v05l7qs5s24srqju498qu55dwuj0c20jv8m5x",
      "currentPage": 0,
      "pagesTotal": 1
    }

## Address details bulk

Returns the details of multiple addresses

**URL** : `v2/address/details`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  addresses `Array` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/address/details" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"addresses\":[\"bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c\",\"bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0\"]}"

    [
      {
        "balance": 0.05,
        "balanceSat": 5000000,
        "totalReceived": 0.09185868,
        "totalReceivedSat": 9185868,
        "totalSent": 0.04185868,
        "totalSentSat": 4185868,
        "unconfirmedBalance": 0,
        "unconfirmedBalanceSat": 0,
        "unconfirmedTxApperances": 0,
        "txApperances": 40,
        "transactions": [
          "41e9a118765ecf7a1ba4487c0863e23dba343cc5880381a72f0365ac2546c5fa",
          "2f902dec880568511cefa87b9dd761563edeba9c8ba784dc9fca2f7c8c4e6f97",
          "eea57285462dd70dadcd431fc814857b3f81fe4d0a059a8c02c12fd7d33c02d1",
          "282b3b296b6aed7122586ed69f7a57d35584eaf94a4d1b1ad7d1b05d36cb79d1",
          "ac444896b3e32d17824fa6573eed3b89768c5c9085b7a71f3ba88e9d5ba67355",
          "a5f972572ee1753e2fd2457dd61ce5f40fa2f8a30173d417e49feef7542c96a1",
          "5165dc531aad05d1149bb0f0d9b7bda99c73e2f05e314bcfb5b4bb9ca5e1af5e",
          "54edaa42ff3d6559884a84ebb9bf5ef255635902f5f23b4854245d6b093d41d4",
          "2b0825188e909410a20a6fbdc58ff5ccf368844273f93f551222c91e6d0fa888",
          "7a12ea2c83d0c8a5d0f643974b0f04bc19be185c9011ed8fc33255a61d3198bb"
        ],
        "legacyAddress": "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W",
        "cashAddress": "bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c",
        "slpAddress": "simpleledger:qzs02v05l7qs5s24srqju498qu55dwuj0c20jv8m5x",
        "currentPage": 0,
        "pagesTotal": 1
      },
      {
        "balance": 0.00582434,
        "balanceSat": 582434,
        "totalReceived": 2.1308325,
        "totalReceivedSat": 213083250,
        "totalSent": 2.12500816,
        "totalSentSat": 212500816,
        "unconfirmedBalance": 0,
        "unconfirmedBalanceSat": 0,
        "unconfirmedTxApperances": 0,
        "txApperances": 12,
        "transactions": [
          "c42f8f16d3baa2ee343ea89ef110dfe094992379d08edd30887b8ca7ee671c9a",
          "1afcc63b244182647909539ebe3f4a44b8ea4120a95edb8d9eebe5347b9491bb",
          "e4a0ac48ff3f42fc342717a2a3d34248e5e85bae79d59bd20e1b60e61b1c500f",
          "0f9b49cafeb9ae1d741cdb12137c92816aa8470944c270a78ba2e610bd59190d",
          "ceb0cab0e37b59caf3ca29e1a698d19ff47f2827dd09cb2f3b91b9100b1dad1c",
          "8bc2134c7e48e56e1769b3d7c4c1e3a0acc68e1e58160eee6fa67f3208c07262",
          "b3792d28377b975560e1b6f09e48aeff8438d4c6969ca578bd406393bd50bd7d",
          "ecc1b51bac767880382bf3190ff17abf78d0936843a022a943d871116ed50368",
          "9ea667bcfc9cd337bd6c5583d8094c1b1942bd2015d95b54189deac5070eeff0",
          "6960255abe64893073921e96bf3c053c82686e0fc22a565494fbe2a31e766975",
          "7e9aa7a74de2b30200a2d6fc748ff35a0c753221444194f720bb7f61ef1d9153",
          "eff00a9538487ff44243c75fb13de19b5783454c42c81b9aff9afbfd09cbaec3"
        ],
        "legacyAddress": "1PCBukyYULnmraUpMy2hW1Y1ngEQTN8DtF",
        "cashAddress": "bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0",
        "slpAddress": "simpleledger:qrehqueqhw629p6e57994436w730t4rzasly056h43",
        "currentPage": 0,
        "pagesTotal": 1
      }
    ]

## Address utxos single

Returns the list of utxo for an address

**URL** : `v2/address/utxo/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `string` required

#### Result

utxo `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/address/utxo/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: application/json"

    // returns
    {
      "utxos": [
        {
          "txid": "eea57285462dd70dadcd431fc814857b3f81fe4d0a059a8c02c12fd7d33c02d1",
          "vout": 0,
          "amount": 0.01,
          "satoshis": 1000000,
          "height": 566900,
          "confirmations": 760
        },
        {
          "txid": "282b3b296b6aed7122586ed69f7a57d35584eaf94a4d1b1ad7d1b05d36cb79d1",
          "vout": 0,
          "amount": 0.01,
          "satoshis": 1000000,
          "height": 563858,
          "confirmations": 3802
        },
        {
          "txid": "ac444896b3e32d17824fa6573eed3b89768c5c9085b7a71f3ba88e9d5ba67355",
          "vout": 13,
          "amount": 0.01,
          "satoshis": 1000000,
          "height": 558992,
          "confirmations": 8668
        }
      ],
      "legacyAddress": "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W",
      "cashAddress": "bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c",
      "slpAddress":"simpleledger:qzs02v05l7qs5s24srqju498qu55dwuj0c20jv8m5x",
      "scriptPubKey": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac",
      "asm": "OP_DUP OP_HASH160 a0f531f4ff810a415580c12e54a7072946bb927e OP_EQUALVERIFY OP_CHECKSIG"
    }

## Address utxos bulk

Returns the utxo of multiple addresses

**URL** : `v2/address/utxo`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  addresses `Array` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/address/utxo" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"addresses\":[\"bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c\",\"bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0\"]}"

    // returns
    [
      {
        "utxos": [
          {
            "txid": "eea57285462dd70dadcd431fc814857b3f81fe4d0a059a8c02c12fd7d33c02d1",
            "vout": 0,
            "amount": 0.01,
            "satoshis": 1000000,
            "height": 566900,
            "confirmations": 760
          },
          {
            "txid": "282b3b296b6aed7122586ed69f7a57d35584eaf94a4d1b1ad7d1b05d36cb79d1",
            "vout": 0,
            "amount": 0.01,
            "satoshis": 1000000,
            "height": 563858,
            "confirmations": 3802
          },
          {
            "txid": "ac444896b3e32d17824fa6573eed3b89768c5c9085b7a71f3ba88e9d5ba67355",
            "vout": 13,
            "amount": 0.01,
            "satoshis": 1000000,
            "height": 558992,
            "confirmations": 8668
          }
        ],
        "legacyAddress": "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W",
        "cashAddress": "bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c",
        "slpAddress": "simpleledger:qzs02v05l7qs5s24srqju498qu55dwuj0c20jv8m5x",
        "scriptPubKey": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac",
        "asm": "OP_DUP OP_HASH160 a0f531f4ff810a415580c12e54a7072946bb927e OP_EQUALVERIFY OP_CHECKSIG"
      },
      {
        "utxos": [
          {
            "txid": "1afcc63b244182647909539ebe3f4a44b8ea4120a95edb8d9eebe5347b9491bb",
            "vout": 1,
            "amount": 0.00531373,
            "satoshis": 531373,
            "height": 562106,
            "confirmations": 5554
          },
          {
            "txid": "b3792d28377b975560e1b6f09e48aeff8438d4c6969ca578bd406393bd50bd7d",
            "vout": 0,
            "amount": 0.00051061,
            "satoshis": 51061,
            "height": 560615,
            "confirmations": 7045
          }
        ],
        "legacyAddress": "1PCBukyYULnmraUpMy2hW1Y1ngEQTN8DtF",
        "cashAddress": "bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0",
        "slpAddress": "simpleledger:qrehqueqhw629p6e57994436w730t4rzasly056h43",
        "scriptPubKey": "76a914f3707320bbb4a28759a78a5ad63a77a2f5d462ec88ac",
        "asm": "OP_DUP OP_HASH160 f3707320bbb4a28759a78a5ad63a77a2f5d462ec OP_EQUALVERIFY OP_CHECKSIG"
      }
    ]

## Unconfirmed transactions single

Returns the list of unconfirmed transactions for an address

**URL** : `v2/address/unconfirmed/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `string` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/address/unconfirmed/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: application/json"


    {
      "utxos": [
        {
          "txid": "b3792d28377b975560e1b6f09e48aeff8438d4c6969ca578bd406393bd50bd7d",
          "vout": 0,
          "amount": 0.00051061,
          "satoshis": 51061,
          "height": 560615,
          "confirmations": 7045
        }
      ],
      "legacyAddress": "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W",
      "cashAddress": "bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c",
      "slpAddress": "simpleledger:qzs02v05l7qs5s24srqju498qu55dwuj0c20jv8m5x",
      "scriptPubKey": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac",
      "asm": "OP_DUP OP_HASH160 a0f531f4ff810a415580c12e54a7072946bb927e OP_EQUALVERIFY OP_CHECKSIG"
    }

## Unconfirmed transactions bulk

Returns the list of unconfirmed transactions for an array of addresses

**URL** : `v2/address/unconfirmed`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  addresses `Array` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/address/unconfirmed" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"addresses\":[\"bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c\",\"bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0\"]}"

    [
      {
        "utxos": [
          {
            "txid": "b3792d28377b975560e1b6f09e48aeff8438d4c6969ca578bd406393bd50bd7d",
            "vout": 0,
            "amount": 0.00051061,
            "satoshis": 51061,
            "height": 560615,
            "confirmations": 7045
          }
        ],
        "legacyAddress": "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W",
        "cashAddress": "bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c",
        "slpAddress": "simpleledger:qzs02v05l7qs5s24srqju498qu55dwuj0c20jv8m5x",
        "scriptPubKey": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac",
        "asm": "OP_DUP OP_HASH160 a0f531f4ff810a415580c12e54a7072946bb927e OP_EQUALVERIFY OP_CHECKSIG"
      },
      {
        "utxos": [
          {
            "txid": "ac444896b3e32d17824fa6573eed3b89768c5c9085b7a71f3ba88e9d5ba67355",
            "vout": 13,
            "amount": 0.01,
            "satoshis": 1000000,
            "height": 558992,
            "confirmations": 24514
          }
        ],
        "legacyAddress": "1PCBukyYULnmraUpMy2hW1Y1ngEQTN8DtF",
        "cashAddress": "bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0",
        "slpAddress": "simpleledger:qrehqueqhw629p6e57994436w730t4rzasly056h43",
        "scriptPubKey": "76a914f3707320bbb4a28759a78a5ad63a77a2f5d462ec88ac",
        "asm": "OP_DUP OP_HASH160 f3707320bbb4a28759a78a5ad63a77a2f5d462ec OP_EQUALVERIFY OP_CHECKSIG"
      }
    ]

## Transactions single

Returns the list of transactions for an address

**URL** : `v2/address/transactions/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `string` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/address/transactions/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: */*"

## Transactions bulk

Returns the list of transactions for an array of addresses.

**URL** : `v2/address/transactions`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  addresses `Array` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/address/transactions" -H "accept: */*" -H "Content-Type: application/json" -d "{\"addresses\":[\"bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c\",\"bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0\"]}"

## FromXPub

Return cash and legacy address from xpub and optional hdpath

**URL** : `v2/address/fromXPub/{xpub}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  xpub `string` required
2.  hdPath `string` optional. Defaults to '0'

#### Result

addresses `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/address/fromXPub/xpub661MyMwAqRbcG4CnhNYoK1r1TKLwQQ1UdC3LHoWFK61rsnzh7Hx35qQ9Z53ucYcE5WvA7GEDXhqqKjSY2e6Y8n7WNVLYHpXCuuX945VPuYn?hdPath=0%2F1%2F2%2F3%2F4%2F5" -H "accept: */*"

    // returns
    {
      "cashAddress": "bitcoincash:qquzx5j5d6u9pge0u7tcurhnk8te3xt0rqlessqhpw",
      "legacyAddress": "167q9vxiL43xkn3gHCMfg7UbriX1VfdfG5",
      "slpAddress": "simpleledger:qquzx5j5d6u9pge0u7tcurhnk8te3xt0rqnzmt4hls"
    }

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

1.  address `String` required

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

## Address utxos single

Returns the list of utxo for an address

**URL** : `v2/address/utxo/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `String` required

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
      "scriptPubKey": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac"
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
        "scriptPubKey": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac"
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
        "scriptPubKey": "76a914f3707320bbb4a28759a78a5ad63a77a2f5d462ec88ac"
      }
    ]

## Unconfirmed transactions single

Returns the list of unconfirmed transactions for an address

**URL** : `v2/address/unconfirmed/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `String` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/address/unconfirmed/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: application/json"

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

## Transactions single

Returns the list of transactions for an address

**URL** : `v2/address/transactions/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `String` required

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
      "legacyAddress": "167q9vxiL43xkn3gHCMfg7UbriX1VfdfG5"
    }

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
      "unconfirmedTxApperances": 0,
      "txApperances": 36,
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

array `Array` of JSON Objects

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/address/utxo/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: application/json"

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

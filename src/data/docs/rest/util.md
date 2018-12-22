---
title: Util
icon: cogs
ordinal: 10
---

## Validate Address Single

Return information about single bitcoin cash address.

**URL** : `v2/util/validateAddress/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `String` required

#### Result

`Object` containing address metadata

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/util/validateAddress/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: application/json"

    // returns
    {
      "isvalid": true,
      "address": "bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c",
      "scriptPubKey": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac",
      "ismine": false,
      "iswatchonly": false,
      "isscript": false
    }

## Validate Address Bulk

Return information about bulk bitcoin cash addresses.

**URL** : `v2/util/validateAddress`

**Method** : `POST`

**Auth required** : NO

#### URL Parameters

1.  addresses `Array` of Strings. Required

#### Result

validated: `Array` of Objects

#### Examples

    curl -X POST "http://localhost:3000/v2/util/validateAddress" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"addresses\":[\"bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c\",\"bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0\"]}"

    // returns
    [
      {
        "isvalid": true,
        "address": "bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c",
        "scriptPubKey": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac",
        "ismine": false,
        "iswatchonly": false,
        "isscript": false
      },
      {
        "isvalid": true,
        "address": "bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0",
        "scriptPubKey": "76a914f3707320bbb4a28759a78a5ad63a77a2f5d462ec88ac",
        "ismine": false,
        "iswatchonly": false,
        "isscript": false
      }
    ]

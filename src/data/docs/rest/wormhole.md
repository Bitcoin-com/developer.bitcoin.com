---
title: Wormhole
icon: coins
ordinal: 12
---

## Validate Address

Return information about the given bitcoin address.

**URL** : `v2/util/validateAddress/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `String` required

#### Result

array `Array` of JSON Objects

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

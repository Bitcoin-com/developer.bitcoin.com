---
title: Address
icon: qrcode
ordinal: 1
---

### `GET /address/details/{address}`

Address details single

#### Arguments

1.  address `String` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/address/details/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: application/json"
        // [ { propertyid: 1,
        //  balance: '100.00106300',
        //  reserved: '0.00000000' } ]

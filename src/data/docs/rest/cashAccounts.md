---
title: CashAccounts
icon: user-circle
ordinal: 4
---

## Account Lookup

Returns an object containing account info

**URL** : `v2/cashAccounts/lookup/{account}/{number}/{collision}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  account `string` **required**
2.  number `string` **required**
3.  collision `string` **number**

#### Result

accountInfo `CashAccountInterface`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/cashAccounts/lookup/cgcardona/122/6383276713" -H "accept: */*"

    // returns
    {
        "identifier": "cgcardona#122;",
        "information": {
            "emoji": "🍞",
            "name": "cgcardona",
            "number": 122,
            "collision": {
            "hash": "6383276713",
            "count": 0,
            "length": 0
            },
            "payment": [
            {
                "type": "Key Hash",
                "address": "bitcoincash:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqj64s9la9"
            }
            ]
        }
    }

## Interfaces

### CashAccountInterface

    {
        identifier: string
        information: {
            emoji: string
            name: string
            number: number
            collision: {
            hash: string
            }
            payment: string[]
        }
    }

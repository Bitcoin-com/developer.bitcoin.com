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
3.  collision `string` **optional**

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

## Account Check

Get multiple Cash Accounts block height and inclusion proof for independent verification

**URL** : `v2/cashAccounts/check/{account}/{number}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  account `string` **required**
2.  number `string` **required**

#### Result

accountLookup `CashAccountBatchResults`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/cashAccounts/check/cgcardona/122" -H "accept: */*"

    // returns
    {
        "identifier": "cgcardona#122",
        "block": 563742,
        "results": [
            {
            "transaction": "0100000001A8421264294082C08C0611E162BD49999443EF577C57923BD052F7202B09408E010000006A473044022039F4DD9AD6BC2C4E799D135BB68B5E05E71F83731EFC63260C7FB16F63BB842802203DEA9E82E97D28ADC9A9567E16762CF3663C24CE6A42AEDDC1E273E50B8CA9C941210202435C144A77C6ED76C3A74EE6006A9255B449F1B2F09FA2668027FEC106CFA1FFFFFFFF020000000000000000266A0401010101096367636172646F6E611501EF3C4F5745AFF901154F01509A8047AB0908A9008CD51100000000001976A914919908484336464C2A9938D24149A4177606340F88AC00000000",
            "inclusionProof": "0000C020C98F109DA027EB72472AC903F6E2BFA993D88724734B2C01000000000000000019213AEE113214AF03EEEE303F733708AD79F259A148F4A17C496302E1D093DF7D9D2E5C4CE10418F2AE48C41F000000067AA86CA831AB260AF59E0ED93305939D9A300BD66076EB18D155143E992950C33A46C140D7202C577D6C25DCD8F315D304285D8BD890C41925F00CC256C22CC69E1410317FD69D5A58F762EE26B469DC1909F2D0DE5E471B0AC09C686C41664585DF32ABA0EEAF50B6AB66010206DE24A5C576CBC331EF153507E9E20D1C18506E24DBEDB0A0B66705E10376CD19ADB4A605098058ACB805D24456CC004CCA78ABA3969F47284773B7809C81B93E2CCCC280218272164AE5D90245A629F6801802EB00"
            }
        ]
    }

## Reverse Lookup

Get Cash Accounts associated with the address provided.

**URL** : `v2/cashAccounts/reverseLookup/{account}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  account `string` **required**

#### Result

accountLookup `CashAccountReverseLookupResults`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/cashAccounts/reverselookup/bitcoincash:qr4aadjrpu73d2wxwkxkcrt6gqxgu6a7usxfm96fst" -H "accept: */*"

    // returns
    {
    "results": [
        {
            "accountEmoji": "☯",
            "nameText": "Jonathan",
            "accountNumber": 100,
            "accountHash": "5876958390",
            "accountCollisionLength": 0,
            "payloadType": 1,
            "payloadAddress": "bitcoincash:qr4aadjrpu73d2wxwkxkcrt6gqxgu6a7usxfm96fst"
        },
        {
            "accountEmoji": "🍭",
            "nameText": "ConfirmationTest",
            "accountNumber": 113,
            "accountHash": "4640561912",
            "accountCollisionLength": 0,
            "payloadType": 1,
            "payloadAddress": "bitcoincash:qr4aadjrpu73d2wxwkxkcrt6gqxgu6a7usxfm96fst"
        },
        {
            "accountEmoji": "🌽",
            "nameText": "Bob",
            "accountNumber": 4035,
            "accountHash": "7443382842",
            "accountCollisionLength": 0,
            "payloadType": 1,
            "payloadAddress": "bitcoincash:qr4aadjrpu73d2wxwkxkcrt6gqxgu6a7usxfm96fst"
        },
        {
            "accountEmoji": "🎀",
            "nameText": "qr4aadjrpu73d2wxwkxkcrt6gqxgu6a7usxfm96fst",
            "accountNumber": 7084,
            "accountHash": "4319915751",
            "accountCollisionLength": 0,
            "payloadType": 1,
            "payloadAddress": "bitcoincash:qr4aadjrpu73d2wxwkxkcrt6gqxgu6a7usxfm96fst"
        }
      ]
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

### CashAccountBatchResults

    {
        identifier: string
        block: number
        results: string[]
    }

### CashAccountReverseLookupResults

    {
      results: SingleCashAccountReverseLookupResult[]
    }

### SingleCashAccountReverseLookupResult

    {
        accountEmoji: any
        nameText: string
        accountNumber: number
        accountHash: string
        accountCollisionLength: number
        payloadType: number
        payloadAddress: string
    }

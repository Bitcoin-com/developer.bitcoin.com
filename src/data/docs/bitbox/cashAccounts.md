---
title: CashAccounts
icon: user-circle
ordinal: 7
---

### `lookup`

Returns an object containing account info

#### Arguments

1.  account `string`
2.  number `number`
3.  collision `number`

#### Result

cashAccount `CashAccountInterface`

#### Examples

    (async () => {
        try {
            let cashAccounts = await bitbox.CashAccounts.lookup("cgcardona", 122)
            console.log(cashAccounts)
        } catch (error) {
            console.log(error)
        }
    })()

    // returns
    {
        identifier: "cgcardona#122;",
        information: {
            emoji: "🍞",
            name: "cgcardona",
            number: 122,
            collision: {
            hash: "6383276713",
            count: 0,
            length: 0
            },
            payment: [
                {
                    type: "Key Hash",
                    address: "bitcoincash:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqj64s9la9"
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

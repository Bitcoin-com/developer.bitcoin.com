---
title: SlpTokenType1
icon: circle
ordinal: 7
---

### `lokadIdHex`

Return Lokad ID

#### Result

lokadId `String`: the lokad id

#### Examples

    SLP.SlpTokenType1.lokadIdHex()
    // 534c5000

### `buildGenesisOpReturn`

#### Arguments

1. ticker
2. name
3. documentUrl
4. documentHash
5. decimals
6. batonVout
7. initialQuantity

### `buildSendOpReturn`

#### Arguments

1. tokenIdHex
2. outputQtyArray

### `buildRawGenesisTx`

#### Arguments

1. config
2. type

### `buildRawSendTx`

#### Arguments

1. config
2. type

### `decodeTxOut`

#### Arguments

1. txOut

### `decodeMetadata`

#### Arguments

1. txDetails

### `calculateGenesisCost`

#### Arguments

1. genesisOpReturnLength
2. inputUtxoSize
3. batonAddress
4. bchChangeAddress
5. feeRate

### `calculateSendCost`

#### Arguments

1. sendOpReturnLength
2. inputUtxoSize
3. outputAddressArraySize
4. bchChangeAddress
5. feeRate

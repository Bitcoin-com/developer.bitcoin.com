---
title: Conversion
icon: exchange
ordinal: 6
---

### `toSLPAddress`

Convert cashAddr or legacyAddr to slpAddr

#### Arguments

1.  address `String` required: The address to convert

#### Result

address `String`: the address converted to slpAddr

#### Examples

    SLP.Conversion.toSLPAddress(
      "bitcoincash:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sgj0z0md6k"
    );
    // "simpleledger:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sg75f5wdyg"

    SLP.Conversion.toSLPAddress("1KgRZzxLUvZqL8EuufmdxqSjh3tgURwD6d");
    //"simpleledger:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sg75f5wdyg"

### `toCashAddress`

Convert slpAddr or legacyAddr to cashAddr

#### Arguments

1.  address `String` required: The address to convert

#### Result

address `String`: the address converted to cashAddr

#### Examples

    SLP.Conversion.toCashAddress(
      "simpleledger:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sg75f5wdyg"
    );
    // 'bitcoincash:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sgj0z0md6k'

    SLP.Conversion.toCashAddress("1KgRZzxLUvZqL8EuufmdxqSjh3tgURwD6d");
    // 'bitcoincash:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sgj0z0md6k'

### `toLegacyAddress`

Convert cashAddr or legacyAddr to legacyAddr

#### Arguments

1.  address `String` required: The address to convert

#### Result

address `String`: the address converted to legacyAddr

#### Examples

    SLP.Conversion.toLegacyAddress(
      "simpleledger:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sg75f5wdyg"
    );
    //'1KgRZzxLUvZqL8EuufmdxqSjh3tgURwD6d'

    SLP.Conversion.toLegacyAddress(
      "bitcoincash:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sgj0z0md6k"
    );
    // "1KgRZzxLUvZqL8EuufmdxqSjh3tgURwD6d"

---
title: Address
icon: qrcode
ordinal: 3
---

### `toLegacyAddress`

Converting cashaddr or slpaddr to legacy address format

#### Arguments

1.  address `string` cashaddr or slpaddr address to be converted

#### Result

legacyAddress `string` legacy base 58 check encoded address

#### Examples

      // mainnet cashaddr w/ prefix
      SLP.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
      // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

      // mainnet cashaddr w/ no prefix
      SLP.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
      // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

      // mainnet slpaddr w/ prefix
      SLP.Address.toLegacyAddress('simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
      // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

      // mainnet slpaddr w/ no prefix
      SLP.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
      // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

      // testnet cashaddr w/ prefix
      SLP.Address.toLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // mqc1tmwY2368LLGktnePzEyPAsgADxbksi

      // testnet cashaddr w/ no prefix
      SLP.Address.toLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // mqc1tmwY2368LLGktnePzEyPAsgADxbksi

      // testnet slpaddr w/ prefix
      SLP.Address.toLegacyAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // mqc1tmwY2368LLGktnePzEyPAsgADxbksi

      // testnet slpaddr w/ no prefix
      SLP.Address.toLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // mqc1tmwY2368LLGktnePzEyPAsgADxbksi

### `toCashAddress`

Converting legacy or slpaddr to cashAddress format

#### Arguments

1.  address `string` required: legacy or cashaddr address to be converted
2.  prefix `boolean` optional: include prefix
3.  regtest `boolean` optional: return regtest address

#### Result

cashAddress `string` cashAddr encoded address

#### Examples

      // mainnet legacy
      SLP.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
      // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

      // mainnet legacy return no prefix
      SLP.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
      // qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

      // mainnet slpaddr
      SLP.Address.toCashAddress('simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
      // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

      // mainnet slpaddr no prefix
      SLP.Address.toCashAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
      // qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

      // tesnet legacy
      SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
      // bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

      // testnet legacy return no prefix
      SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
      // qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

      // tesnet cashaddr
      SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
      // bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

      // testnet cashaddr no prefix
      SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
      // qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

### `toSLPAddress`

Converting legacy or cashaddr to slpAddress format

#### Arguments

1.  address `string` required: legacy or cashaddr address to be converted
2.  prefix `boolean` optional: include prefix
3.  regtest `boolean` optional: return regtest address

#### Result

slpAddress `string` slpAddr encoded address

#### Examples

      // mainnet legacy
      SLP.Address.toSLPAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
      // simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzd

      // mainnet legacy return no prefix
      SLP.Address.toSLPAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
      // qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

      // mainnet cashaddr
      SLP.Address.toSLPAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
      // simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp

      // mainnet slpaddr no prefix
      SLP.Address.toSLPAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
      // simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp

      // tesnet legacy
      SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
      // slptest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv

      // testnet legacy return no prefix
      SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
      // qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv

      // tesnet cashaddr
      SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
      // slptest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv

      // testnet cashaddr no prefix
      SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
      // qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv

### `isSLPAddress`

Detect if slpAddr encoded address

#### Arguments

1.  address `string`: address to determine

#### Result

isSLPAddress `boolean`: true/false if slpaddress

#### Examples

      // mainnet slpaddr
      SLP.Address.isSLPAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // true

      // mainnet w/ no slpaddr prefix
      SLP.Address.isSLPAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // true

      // mainnet legacy
      SLP.Address.isSLPAddress('18HEMuar5ZhXDFep1gEiY1eoPPcBLxfDxj')
      // false

      // testnet w/ slpaddr prefix
      SLP.Address.isSLPAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // true

      // testnet w/ no slpaddr prefix
      SLP.Address.isSLPAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // true

      // testnet legacy
      SLP.Address.isSLPAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // false

### `isMainnetAddress`

Detect if mainnet address

#### Arguments

1.  address `string`: address to determine

#### Result

isMainnetAddress `boolean`: true/false if mainnet address

#### Examples

      // mainnet cashaddr
      SLP.Address.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // mainnet cashaddr w/ no prefix
      SLP.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // mainnet slpaddr
      SLP.Address.isMainnetAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // true

      // mainnet slpaddr w/ no prefix
      SLP.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // true

      // mainnet legacy
      SLP.Address.isMainnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
      // true

      // testnet cashaddr
      SLP.Address.isMainnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // testnet w/ no cashaddr prefix
      SLP.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // testnet slpaddr
      SLP.Address.isMainnetAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // false

      // testnet w/ no slpaddr prefix
      SLP.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // false

      // testnet legacy
      SLP.Address.isMainnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // false

### `isTestnetAddress`

Detect if testnet address

#### Arguments

1.  addresss `string`: address to determine

#### Result

isTestnetAddresss `boolean`: true/false if is testnet address

#### Examples

      // cashaddr mainnet
      SLP.Address.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      //false

      // w/ no cashaddr prefix
      SLP.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // false

      // slpaddr mainnet
      SLP.Address.isTestnetAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      //false

      // w/ no slpaddr prefix
      SLP.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // false

      // legacy mainnet
      SLP.Address.isTestnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
      // false

      // cashaddr testnet
      SLP.Address.isTestnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // testnet w/ no cashaddr prefix
      SLP.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // slpaddr testnet
      SLP.Address.isTestnetAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // true

      // testnet w/ no slpaddr prefix
      SLP.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // true

      // testnet legacy
      SLP.Address.isTestnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true

### `isP2PKHAddress`

Detect if p2pkh address

#### Arguments

1.  address `string` address to determine

#### Result

isP2PKHAddress `boolean` true/false if is p2pkh address

#### Examples

      // mainnet cashaddr
      SLP.Address.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // mainnet w/ no cashaddr prefix
      SLP.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // mainnet slpaddr
      SLP.Address.isP2PKHAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // true

      // mainnet w/ no slpaddr prefix
      SLP.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // true

      // legacy
      SLP.Address.isP2PKHAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
      // true

      // cashaddr testnet
      SLP.Address.isP2PKHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // testnet w/ no cashaddr prefix
      SLP.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // slpaddr testnet
      SLP.Address.isP2PKHAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // true

      // testnet w/ no slpaddr prefix
      SLP.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // true

      // legacy testnet
      SLP.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true

### `isP2SHAddress`

Detect if p2sh address

#### arguments

1.  address `string` address to determine

#### Result

isP2SHAddress `boolean` true/false if is p2sh address

#### Examples

      // mainnet cashaddr
      SLP.Address.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // false

      // mainnet cashaddr w/ no prefix
      SLP.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // false

      // mainnet slpaddr
      SLP.Address.isP2SHAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // false

      // mainnet slpaddr w/ no prefix
      SLP.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // false

      // mainnet legacy
      SLP.Address.isP2SHAddress('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
      // false

      // cashaddr testnet
      SLP.Address.isP2SHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // cashaddr testnet w/ no prefix
      SLP.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // slpaddr testnet
      SLP.Address.isP2SHAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // false

      // slpaddr testnet w/ no prefix
      SLP.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // false

      // legacy testnet
      SLP.Address.isP2SHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // false

### `detectAddressFormat`

Detect address format

#### arguments

1.  address `string` address to determine format

#### Result

addressFormat `string` address format

#### Examples

      // mainnet cashaddr
      SLP.Address.detectAddressFormat('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // cashaddr

      // mainnet cashaddr w/ no prefix
      SLP.Address.detectAddressFormat('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // cashaddr

      // mainnet slpaddr
      SLP.Address.detectAddressFormat('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // slpaddr

      // mainnet slpaddr w/ no prefix
      SLP.Address.detectAddressFormat('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // slpaddr

      // mainnet legacy
      SLP.Address.detectAddressFormat('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
      // legacy

      // cashaddr testnet
      SLP.Address.detectAddressFormat('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // cashaddr

      // cashaddr testnet w/ no prefix
      SLP.Address.detectAddressFormat('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // cashaddr

      // slpaddr testnet
      SLP.Address.detectAddressFormat('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // slpaddr

      // slpaddr testnet w/ no prefix
      SLP.Address.detectAddressFormat('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // slpaddr

      // legacy testnet
      SLP.Address.detectAddressFormat('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // legacy

### `detectAddressNetwork`

Detect address network

#### arguments

1.  address `string` address to determine network

#### Result

addressNetwork `string` address network

#### Examples

      // mainnet cashaddr
      SLP.Address.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // mainnet

      // mainnet cashaddr w/ no prefix
      SLP.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // mainnet

      // mainnet slpaddr
      SLP.Address.detectAddressNetwork('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // mainnet

      // mainnet slpaddr w/ no prefix
      SLP.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
      // mainnet

      // mainnet legacy
      SLP.Address.detectAddressNetwork('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
      // mainnet

      // cashaddr testnet
      SLP.Address.detectAddressNetwork('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // testnet

      // cashaddr testnet w/ no prefix
      SLP.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // testnet

      // slpaddr testnet
      SLP.Address.detectAddressNetwork('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // testnet

      // slpaddr testnet w/ no prefix
      SLP.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
      // testnet

      // legacy testnet
      SLP.Address.detectAddressNetwork('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // testnet

### `detectAddressType`

Detect address network

#### arguments

1.  address `string` address to determine network

#### Result

addressNetwork `string` address network

#### Examples

      // mainet cashaddr
      SLP.Address.detectAddressType('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
      // p2pkh

      // mainet cashaddr w/ no prefix
      SLP.Address.detectAddressType('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
      // p2pkh

      // mainet slpaddr
      SLP.Address.detectAddressType('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w');
      // p2pkh

      // mainet slpaddr w/ no prefix
      SLP.Address.detectAddressType('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w');
      // p2pkh

      // mainet legacy
      SLP.Address.detectAddressType('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74');
      // p2pkh

      // cashaddr testnet
      SLP.Address.detectAddressType('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
      // p2pkh

      // cashaddr testnet w/ no prefix
      SLP.Address.detectAddressType('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
      // p2pkh

      // slpaddr testnet
      SLP.Address.detectAddressType('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse');
      // p2pkh

      // slpaddr testnet w/ no prefix
      SLP.Address.detectAddressType('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse');
      // p2pkh

      // legacy testnet
      SLP.Address.detectAddressType('mqc1tmwY2368LLGktnePzEyPAsgADxbksi');
      // p2pkh

### `details`

Return details about an address including balance.

#### Arguments

- addresses (required):
  - `string`: A single string containing a legacy, cash or slp address.
  - `Array` of strings: Array with maximum of 20 legacy, cash or slp addresses.

#### Result

- details:
  - `Object`: containing details about the single address.
  - `Array`: Array of Objects with details about addresses.

#### Examples

    (async () => {
      try {
        let details = await SLP.Address.details(['simpleledger:qpcxf2sv9hjw08nvpgffpamfus9nmksm3cmhle4tdu']);
        console.log(details)
      } catch(error) {
       console.error(error)
      }
    })()

    // [ { balance: 0,
    //     balanceSat: 0,
    //     totalReceived: 0.36781097,
    //     totalReceivedSat: 36781097,
    //     totalSent: 0.36781097,
    //     totalSentSat: 36781097,
    //     unconfirmedBalance: 0,
    //     unconfirmedBalanceSat: 0,
    //     unconfirmedTxApperances: 0,
    //     txApperances: 11,
    //     transactions:
    //      [ '11205c557af139f382c43f1f09f223cf28c64d939951fd569e5a30eee6178ccd',
    //        'ae05a78086b8d64db26d3047de3d6959a68f2a1ed3017ddf927e2c3b20a80b31',
    //        '7e0fc3cac7504d45b0f2ce68e807e592f0edf17914ab618a4cb4d93403d11c98',
    //        '60cb69f29c150378abe21d157858713f82c4e2122867597a2573474763a9e94e',
    //        'f737485aaee3c10b13013fa109bb6294b099246134ca9885f4cc332dbc6c9bb4',
    //        'decd5b9c0c959e4e543182093e8f7f8bc7a6ecd96a8a062daaeff3667f8feca7',
    //        '94e69a627a34ae27fca81d15fff4323a7ce1f7c275c7485762ce018221017632',
    //        'e67c70787af7f3506263c9eda007f3d2d24bd750ff95b5c50a120d9118dfd807',
    //        '8e5e00704a147d54028f94d52df7730e821b9c6cd4bd29494e5636f49c199d6a',
    //        '15102827c108566ea5daf725c09079c1a3f42ef99d1eb68ea8c584f7b16ab87a',
    //        'cc27be8846276612dfce5924b7be96556212f0f0e62bd17641732175edb9911e' ],
    //     legacyAddress: '1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA',
    //     cashAddress: 'bitcoincash:qpcxf2sv9hjw08nvpgffpamfus9nmksm3chv5zqtnz',
    //     currentPage: 0,
    //     pagesTotal: null } ]

### `utxo`

Return list of uxto for address

#### Arguments

- addresses (required):
  - `string`: A single string containing a legacy, cash or slp address.
  - `Array` of strings: Array with maximum of 20 legacy, cash or slp addresses.

#### Result

- utxo:
  - utxo `Object`: containing `utxo` array of utxos, plus `legacyAddress`,
    `cashAddress` and `scriptPubKey` properties.
  - utxos `Array`: Array of utxo Objects.

#### Examples

    (async () => {
      try {
        let utxo = await SLP.Address.utxo(['simpleledger:qpcxf2sv9hjw08nvpgffpamfus9nmksm3cmhle4tdu']);
        console.log(utxo);
      } catch(error) {
       console.error(error)
      }
    })()

    // {
    //   "utxos": [
    //     {
    //       "txid": "27ec8512c1a9ee9e9ae9b98eb60375f1d2bd60e2e76a1eff5a45afdbc517cf9c",
    //       "vout": 0,
    //       "amount": 0.001,
    //       "satoshis": 100000,
    //       "height": 560430,
    //       "confirmations": 5163
    //     },
    //     {
    //       "txid": "6e1ae1bf7db6de799ec1c05ab2816ac65549bd80141567af088e6f291385b07d",
    //       "vout": 0,
    //       "amount": 0.0013,
    //       "satoshis": 130000,
    //       "height": 560039,
    //       "confirmations": 5554
    //     }
    //   ],
    //   "legacyAddress": "1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA",
    //   "cashAddress": "bitcoincash:qpcxf2sv9hjw08nvpgffpamfus9nmksm3chv5zqtnz",
    //   "scriptPubKey": "76a914db6ea94fa26b7272dc5e1487c35f258391e0f38788ac"
    // }

### `unconfirmed`

Return list of unconfirmed transactions for address

#### Arguments

- addresses (required):
  - `string`: A single string containing a legacy, cash or slp address.
  - `Array` of strings: Array with maximum of 20 legacy, cash or slp addresses.

#### Result

- unconfirmed:
  - utxo `Object`: containing `utxo` array of utxos, plus `legacyAddress` and
    `cashAddress` properties.
  - utxos `Array`: Array of utxo Objects.

#### Examples

    (async () => {
      try {
        let unconfirmed = await SLP.Address.unconfirmed(['simpleledger:qpcxf2sv9hjw08nvpgffpamfus9nmksm3cmhle4tdu']);
        console.log(unconfirmed);
      } catch(error) {
       console.error(error)
      }
    })()

    // {
    //   "utxos": [
    //     {
    //       "address": "1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA",
    //       "txid": "5ddf277cecefab4bb75fb5d6ba21170cec756ef28a045cb4ec45ccffda28cdaf",
    //       "vout": 0,
    //       "scriptPubKey": "76a914bcbc83f8fadb704a6aeccf38079e428da445b11e88ac",
    //       "amount": 0.0001,
    //       "satoshis": 10000,
    //       "confirmations": 0,
    //       "ts": 1547670883
    //     }
    //   ],
    //   "legacyAddress": "1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA",
    //   "cashAddress": "simpleledger:qpcxf2sv9hjw08nvpgffpamfus9nmksm3cmhle4tdu"
    // }

### `transactions`

Returns decoded transactions for an address

#### Arguments

- addresses (required):
  - `string`: A single string containing a legacy, cash or slp address.
  - `Array` of strings: Array with maximum of 20 legacy, cash or slp addresses.

#### Result

- transaction:
  - `Object`: containing `txs` array of decoded transactions, plus `legacyAddress` and
    `cashAddress` properties.
  - `Array`: Array of txs Objects.

#### Examples

    (async () => {
      try {
        let transaction = await SLP.Address.transactions(['simpleledger:qz7teqlcltdhqjn2an8nspu7g2x6g3d3rcvucdqnuw']);
        console.log(transaction);
      } catch(error) {
       console.error(error)
      }
    })()

    // {
    //   "pagesTotal": 1,
    //   "txs": [
    //     {
    //       "txid": "5ddf277cecefab4bb75fb5d6ba21170cec756ef28a045cb4ec45ccffda28cdaf",
    //       "version": 2,
    //       "locktime": 0,
    //       "vin": [
    //         {
    //           "txid": "d0ff03c2429810991e8e23cfe2f253891eaae391bcbfd61706d340d9d649abea",
    //           "vout": 0,
    //           "sequence": 4294967295,
    //           "n": 0,
    //           "scriptSig": {
    //             "hex": "483045022100fc121a12774e7f212f42898ea123ecc03099dc610a48627649f58490f183027b0220113964a117dc5aaed7c76a569a287797ccffad192cc346114340e59a706a1cd841210242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd",
    //             "asm": "3045022100fc121a12774e7f212f42898ea123ecc03099dc610a48627649f58490f183027b0220113964a117dc5aaed7c76a569a287797ccffad192cc346114340e59a706a1cd8[ALL|FORKID] 0242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd"
    //           },
    //           "addr": "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL",
    //           "valueSat": 3466913,
    //           "value": 0.03466913,
    //           "doubleSpentTxID": null
    //         }
    //       ],
    //       "vout": [
    //         {
    //           "value": "0.00010000",
    //           "n": 0,
    //           "scriptPubKey": {
    //             "hex": "76a914bcbc83f8fadb704a6aeccf38079e428da445b11e88ac",
    //             "asm": "OP_DUP OP_HASH160 bcbc83f8fadb704a6aeccf38079e428da445b11e OP_EQUALVERIFY OP_CHECKSIG",
    //             "addresses": [
    //               "1JCwsMQtiV85fGjps4zXceaCCgxpQ1u84R"
    //             ],
    //             "type": "pubkeyhash"
    //           },
    //           "spentTxId": null,
    //           "spentIndex": null,
    //           "spentHeight": null
    //         },
    //         {
    //           "value": "0.03456687",
    //           "n": 1,
    //           "scriptPubKey": {
    //             "hex": "76a914a8f9b1307fa412da6a909f08930e5a502d27a74a88ac",
    //             "asm": "OP_DUP OP_HASH160 a8f9b1307fa412da6a909f08930e5a502d27a74a OP_EQUALVERIFY OP_CHECKSIG",
    //             "addresses": [
    //               "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL"
    //             ],
    //             "type": "pubkeyhash"
    //           },
    //           "spentTxId": null,
    //           "spentIndex": null,
    //           "spentHeight": null
    //         }
    //       ],
    //       "blockheight": -1,
    //       "confirmations": 0,
    //       "time": 1547674527,
    //       "valueOut": 0.03466687,
    //       "size": 226,
    //       "valueIn": 0.03466913,
    //       "fees": 0.00000226
    //     }
    //   ],
    //   "legacyAddress": "1JCwsMQtiV85fGjps4zXceaCCgxpQ1u84R",
    //   "cashAddress": "bitcoincash:qz7teqlcltdhqjn2an8nspu7g2x6g3d3rcq8nk4nzs",
    //   "currentPage": 0
    // }

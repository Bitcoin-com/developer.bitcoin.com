---
  title: Address
  icon: qrcode
  ordinal: 3
---

### `toLegacyAddress`

Converting cashaddr to legacy address format

#### Arguments

1.  address `String` cashaddr address to be converted

#### Result

legacyAddress `String` legacy base 58 check encoded address

#### Examples


      // mainnet w/ prefix
      BITBOX.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
      // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

      // mainnet w/ no prefix
      BITBOX.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
      // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

      // testnet w/ prefix
      BITBOX.Address.toLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // mqc1tmwY2368LLGktnePzEyPAsgADxbksi

      // testnet w/ no prefix
      BITBOX.Address.toLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // mqc1tmwY2368LLGktnePzEyPAsgADxbksi


### `toCashAddress`

Converting legacy to cashAddress format

#### Arguments

1.  address `String` required: legacy address to be converted
2.  prefix `Boolean` optional: include prefix

#### Result

cashAddress `String` cashAddr encoded address

#### Examples


      // mainnet
      BITBOX.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
      // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

      // mainnet no prefix
      BITBOX.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
      // qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

      // tesnet
      BITBOX.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
      // bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

      // testnet no prefix
      BITBOX.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
      // qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3


### `isLegacyAddress`

Detect if legacy base58check encoded address

#### Arguments

1.  address `String`: address to determine

#### Result

isLegacyAddress `Boolean`: true/false if legacy address

#### Examples


      // cashaddr
      BITBOX.Address.isLegacyAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // false

      // w/ no cashaddr prefix
      BITBOX.Address.isLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
      // false

      // legacy
      BITBOX.Address.isLegacyAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
      // true

      // testnet w/ cashaddr prefix
      BITBOX.Address.isLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // testnet w/ no cashaddr prefix
      BITBOX.Address.isLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // legacy testnet
      BITBOX.Address.isLegacyAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true


### `isCashAddress`

Detect if cashAddr encoded address

#### Arguments

1.  address `String`: address to determine

#### Result

isCashAddress `Boolean`: true/false if cashaddress

#### Examples


      // mainnet cashaddr
      BITBOX.Address.isCashAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // mainnet w/ no cashaddr prefix
      BITBOX.Address.isCashAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // mainnet legacy
      BITBOX.Address.isCashAddress('18HEMuar5ZhXDFep1gEiY1eoPPcBLxfDxj')
      // false

      // testnet w/ cashaddr prefix
      BITBOX.Address.isCashAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // testnet w/ no cashaddr prefix
      BITBOX.Address.isCashAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // testnet legacy
      BITBOX.Address.isCashAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // false


### `isMainnetAddress`

Detect if mainnet address

#### Arguments

1.  address `String`: address to determine

#### Result

isMainnetAddress `Boolean`: true/false if mainnet address

#### Examples


      // mainnet cashaddr
      BITBOX.Address.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // mainnet cashaddr w/ no prefix
      BITBOX.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // mainnet legacy
      BITBOX.Address.isMainnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
      // true

      // testnet cashaddr
      BITBOX.Address.isMainnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // testnet w/ no cashaddr prefix
      BITBOX.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // testnet legacy
      BITBOX.Address.isMainnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // false


### `isTestnetAddress`

Detect if testnet address

#### Arguments

1.  addresss `String`: address to determine

#### Result

isMainnetAddresss `Boolean`: true/false if is testnet address

#### Examples


      // cashaddr mainnet
      BITBOX.Address.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      //false

      // w/ no cashaddr prefix
      BITBOX.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // false

      // legacy mainnet
      BITBOX.Address.isTestnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
      // false

      // cashaddr testnet
      BITBOX.Address.isTestnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // testnet w/ no cashaddr prefix
      BITBOX.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // testnet legacy
      BITBOX.Address.isTestnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true


### `isP2PKHAddress`

Detect if p2pkh address

#### Arguments

1.  address `String` address to determine

#### Result

isP2PKHAddress `Boolean` true/false if is p2pkh address

#### Examples


      // cashaddr
      BITBOX.Address.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // w/ no cashaddr prefix
      BITBOX.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // legacy
      BITBOX.Address.isP2PKHAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
      // true

      // legacy testnet
      BITBOX.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true

      // testnet w/ no cashaddr prefix
      BITBOX.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // legacy testnet
      BITBOX.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true


### `isP2SHAddress`

Detect if p2sh address

#### arguments

1.  address `String` address to determine

#### Result

isP2SHAddress `Boolean` true/false if is p2sh address

#### Examples


      // cashaddr
      BITBOX.Address.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // false

      // cashaddr w/ no prefix
      BITBOX.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // false

      // legacy
      BITBOX.Address.isP2SHAddress('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
      // false

      // cashaddr testnet
      BITBOX.Address.isP2SHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // cashaddr testnet w/ no prefix
      BITBOX.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // legacy testnet
      BITBOX.Address.isP2SHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // false


### `detectAddressFormat`

Detect address format

#### arguments

1.  address `String` address to determine format

#### Result

addressFormat `String` address format

#### Examples


      // cashaddr
      BITBOX.Address.detectAddressFormat('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // cashaddr

      // cashaddr w/ no prefix
      BITBOX.Address.detectAddressFormat('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // cashaddr

      // legacy
      BITBOX.Address.detectAddressFormat('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
      // legacy

      // cashaddr testnet
      BITBOX.Address.detectAddressFormat('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // cashaddr

      // cashaddr testnet w/ no prefix
      BITBOX.Address.detectAddressFormat('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // cashaddr

      // legacy testnet
      BITBOX.Address.detectAddressFormat('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // legacy


### `detectAddressNetwork`

Detect address network

#### arguments

1.  address `String` address to determine network

#### Result

addressNetwork `String` address network

#### Examples


      // cashaddr
      BITBOX.Address.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // mainnet

      // cashaddr w/ no prefix
      BITBOX.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // mainnet

      // legacy
      BITBOX.Address.detectAddressNetwork('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
      // mainnet

      // cashaddr testnet
      BITBOX.Address.detectAddressNetwork('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // testnet

      // cashaddr testnet w/ no prefix
      BITBOX.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // testnet

      // legacy testnet
      BITBOX.Address.detectAddressNetwork('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // testnet


### `detectAddressType`

Detect address network

#### arguments

1.  address `String` address to determine network

#### Result

addressNetwork `String` address network

#### Examples


      // cashaddr
      BITBOX.Address.detectAddressType('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
      // p2pkh

      // cashaddr w/ no prefix
      BITBOX.Address.detectAddressType('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
      // p2pkh

      // legacy
      BITBOX.Address.detectAddressType('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74');
      // p2pkh

      // cashaddr testnet
      BITBOX.Address.detectAddressType('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
      // p2pkh

      // cashaddr testnet w/ no prefix
      BITBOX.Address.detectAddressType('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
      // p2pkh

      // legacy testnet
      BITBOX.Address.detectAddressType('mqc1tmwY2368LLGktnePzEyPAsgADxbksi');
      // p2pkh


### `fromXPub`

Generates an address for an extended public key (xpub)

#### Arguments

1.  xpub `String`: extended public key to be used
2.  path `String` `optional`: derivation path of external change address. Default is `0/0`

#### Result

changeAddress `String`: cashaddr encoded change address

#### Examples


      // generate 5 external change addresses for xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA
      let xpub = 'xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh
      // bitcoincash:qrr2suh9yjsrkl2qp3p967uhfg6u0r6xxsn9h5vuvr
      // bitcoincash:qpkfg4kck99wksyss6nvaqtafeahfnyrpsj0ed372t
      // bitcoincash:qppgmuuwy07g0x39sx2z0x2u8e34tvfdxvy0c2jvx7
      // bitcoincash:qryj8x4s7vfsc864jm0xaak9qfe8qgk245y9ska57l

      // generate 5 external change addresses for xpub6DLXtM9JjvtUTm6TngeSXZdeKfFqA1sLYoFQMTTXYYbwDw55eTy7uhconrzw8mW1zzmpMBYpQLpBPzRdSn9Hxrse5TTnpdtcoeXahkC6bPd
      let xpub = 'xpub6DLXtM9JjvtUTm6TngeSXZdeKfFqA1sLYoFQMTTXYYbwDw55eTy7uhconrzw8mW1zzmpMBYpQLpBPzRdSn9Hxrse5TTnpdtcoeXahkC6bPd';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qpm05nr0fmxmyhlz0qermkad0zvsfsqu6ckv6e5tzr
      // bitcoincash:qre28yd5msvsenn9qj5fwm3k3u00dty4ac739zhw2k
      // bitcoincash:qp0utfskvcnsy2whkurk25x247jcdmexqyekzury66
      // bitcoincash:qqzjwx6zdvhkwalzvnaprwk73me9szqvgspgu6shst
      // bitcoincash:qzpcg6atgg36vrkwvklw9325nqzdcxd8c5dl5l6k79

      // generate 5 external change addresses for xpub6DLXtM9JjvtUV1i6tBdQ6RCwYHoUjzK2GL1BmXf4TW8QbFGWueMJrwRUsZntEUBfpqJACiid1PEPNbDVTRZxyGKp5k8KsHVg27nDR1Makdh
      let xpub = 'xpub6DLXtM9JjvtUV1i6tBdQ6RCwYHoUjzK2GL1BmXf4TW8QbFGWueMJrwRUsZntEUBfpqJACiid1PEPNbDVTRZxyGKp5k8KsHVg27nDR1Makdh';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qrykz97x24tgz9nq29yyqcc98nqj8k2n45jg57manf
      // bitcoincash:qp8e7rrajx3wscqr6zfu3mvnlkmt0s4dhqldpqscym
      // bitcoincash:qrw6fhr6nl5lh9srh9a9sr890r3zzsgt7sqh7tkyve
      // bitcoincash:qqj9ctz9sex3xjapgm8hv5dkpfmf7aalrs2z2jprm2
      // bitcoincash:qzytws9yvyqgsx3smfyy3yaq5xw9jt0xsy7kpnqpth

      // generate 5 external change addresses for xpub6DLXtM9JjvtUa9tPGP5kYXnGGeo3dnBuhUZP7QmE97hKxM1EizDgFZgVe8M5Nv49z5ytpAnwwNcc16wChnecpj3KyFPkufbi9uZaj5ALCGm
      let xpub = 'xpub6DLXtM9JjvtUa9tPGP5kYXnGGeo3dnBuhUZP7QmE97hKxM1EizDgFZgVe8M5Nv49z5ytpAnwwNcc16wChnecpj3KyFPkufbi9uZaj5ALCGm';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qp9e7kd6pgy7pek2vemfspm6vc544xzm2yjfezst3q
      // bitcoincash:qqt9g8ggmd5kxccvuye0nv7enj6syqqxyymnrhgkep
      // bitcoincash:qqr8qf8qj7yxgtaydkt5xp0lw4fnu56jmy7q5k9sat
      // bitcoincash:qzaf69rhsnzfjtg0ydw2qlqeyhpnsfzz4ghr5jkrzy
      // bitcoincash:qrwjhc0dujvjtrl0e0zc8tkhwxfvljvamc6e0kcj3w

      // generate 5 external change addresses for xpub6DLXtM9JjvtUkiaWLnfiSHjW51vspUW7GDmkML17w2qoEeGztYYSmotgXJpwmoNCc6QbdCXWySEWki7jURV46hmN6MXwem1aNo3gxhkjJPj
      let xpub = 'xpub6DLXtM9JjvtUkiaWLnfiSHjW51vspUW7GDmkML17w2qoEeGztYYSmotgXJpwmoNCc6QbdCXWySEWki7jURV46hmN6MXwem1aNo3gxhkjJPj';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qzrfwca03gzgwgxsjcxfphuckztc9squ9vmws99sr7
      // bitcoincash:qrr0ykn2xwy80hl0p7vnm44l5sc43x5245nlrfc74c
      // bitcoincash:qr3zlplv2w0t3s92twldjk432f45agls0qj35tyqtc
      // bitcoincash:qqxf90phz7ysrj53tymq6qvmquk0kd04wvjf6s83nv
      // bitcoincash:qrygumzwu7anzppyzcraa2tal3vlzc7p3smyh5cdth


### `fromOutputScript`

Detect an addess from an OutputScript.

#### Arguments

1.  scriptPubKey`Buffer`: scriptPubKey

#### Result

changeAddress `String`: cashaddr encoded change address

#### Examples


      // generate 5 external change addresses for xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA
      let xpub = 'xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh
      // bitcoincash:qrr2suh9yjsrkl2qp3p967uhfg6u0r6xxsn9h5vuvr
      // bitcoincash:qpkfg4kck99wksyss6nvaqtafeahfnyrpsj0ed372t
      // bitcoincash:qppgmuuwy07g0x39sx2z0x2u8e34tvfdxvy0c2jvx7
      // bitcoincash:qryj8x4s7vfsc864jm0xaak9qfe8qgk245y9ska57l

      // generate 5 external change addresses for xpub6DLXtM9JjvtUTm6TngeSXZdeKfFqA1sLYoFQMTTXYYbwDw55eTy7uhconrzw8mW1zzmpMBYpQLpBPzRdSn9Hxrse5TTnpdtcoeXahkC6bPd
      let xpub = 'xpub6DLXtM9JjvtUTm6TngeSXZdeKfFqA1sLYoFQMTTXYYbwDw55eTy7uhconrzw8mW1zzmpMBYpQLpBPzRdSn9Hxrse5TTnpdtcoeXahkC6bPd';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qpm05nr0fmxmyhlz0qermkad0zvsfsqu6ckv6e5tzr
      // bitcoincash:qre28yd5msvsenn9qj5fwm3k3u00dty4ac739zhw2k
      // bitcoincash:qp0utfskvcnsy2whkurk25x247jcdmexqyekzury66
      // bitcoincash:qqzjwx6zdvhkwalzvnaprwk73me9szqvgspgu6shst
      // bitcoincash:qzpcg6atgg36vrkwvklw9325nqzdcxd8c5dl5l6k79

      // generate 5 external change addresses for xpub6DLXtM9JjvtUV1i6tBdQ6RCwYHoUjzK2GL1BmXf4TW8QbFGWueMJrwRUsZntEUBfpqJACiid1PEPNbDVTRZxyGKp5k8KsHVg27nDR1Makdh
      let xpub = 'xpub6DLXtM9JjvtUV1i6tBdQ6RCwYHoUjzK2GL1BmXf4TW8QbFGWueMJrwRUsZntEUBfpqJACiid1PEPNbDVTRZxyGKp5k8KsHVg27nDR1Makdh';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qrykz97x24tgz9nq29yyqcc98nqj8k2n45jg57manf
      // bitcoincash:qp8e7rrajx3wscqr6zfu3mvnlkmt0s4dhqldpqscym
      // bitcoincash:qrw6fhr6nl5lh9srh9a9sr890r3zzsgt7sqh7tkyve
      // bitcoincash:qqj9ctz9sex3xjapgm8hv5dkpfmf7aalrs2z2jprm2
      // bitcoincash:qzytws9yvyqgsx3smfyy3yaq5xw9jt0xsy7kpnqpth

      // generate 5 external change addresses for xpub6DLXtM9JjvtUa9tPGP5kYXnGGeo3dnBuhUZP7QmE97hKxM1EizDgFZgVe8M5Nv49z5ytpAnwwNcc16wChnecpj3KyFPkufbi9uZaj5ALCGm
      let xpub = 'xpub6DLXtM9JjvtUa9tPGP5kYXnGGeo3dnBuhUZP7QmE97hKxM1EizDgFZgVe8M5Nv49z5ytpAnwwNcc16wChnecpj3KyFPkufbi9uZaj5ALCGm';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qp9e7kd6pgy7pek2vemfspm6vc544xzm2yjfezst3q
      // bitcoincash:qqt9g8ggmd5kxccvuye0nv7enj6syqqxyymnrhgkep
      // bitcoincash:qqr8qf8qj7yxgtaydkt5xp0lw4fnu56jmy7q5k9sat
      // bitcoincash:qzaf69rhsnzfjtg0ydw2qlqeyhpnsfzz4ghr5jkrzy
      // bitcoincash:qrwjhc0dujvjtrl0e0zc8tkhwxfvljvamc6e0kcj3w

      // generate 5 external change addresses for xpub6DLXtM9JjvtUkiaWLnfiSHjW51vspUW7GDmkML17w2qoEeGztYYSmotgXJpwmoNCc6QbdCXWySEWki7jURV46hmN6MXwem1aNo3gxhkjJPj
      let xpub = 'xpub6DLXtM9JjvtUkiaWLnfiSHjW51vspUW7GDmkML17w2qoEeGztYYSmotgXJpwmoNCc6QbdCXWySEWki7jURV46hmN6MXwem1aNo3gxhkjJPj';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qzrfwca03gzgwgxsjcxfphuckztc9squ9vmws99sr7
      // bitcoincash:qrr0ykn2xwy80hl0p7vnm44l5sc43x5245nlrfc74c
      // bitcoincash:qr3zlplv2w0t3s92twldjk432f45agls0qj35tyqtc
      // bitcoincash:qqxf90phz7ysrj53tymq6qvmquk0kd04wvjf6s83nv
      // bitcoincash:qrygumzwu7anzppyzcraa2tal3vlzc7p3smyh5cdth


### `details`

Return details about an address including balance.

#### Arguments

1.  addresses `Array` required: Array with maximum of 20 legacy or cash addresses.

#### Result

details `Array`: Array of Objects w/ details about addresses including balance

#### Examples


    (async () => {
      try {
        let details = await BITBOX.Address.details(['1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA']);
        console.log(details)
      } catch(error) {
       console.error(error)
      }
    })()

    // [{
    //   "addrStr": "1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA",
    //   "balance": 0.36781097,
    //   "balanceSat": 36781097,
    //   "totalReceived": 0.36781097,
    //   "totalReceivedSat": 36781097,
    //   "totalSent": 0,
    //   "totalSentSat": 0,
    //   "unconfirmedBalance": 0,
    //   "unconfirmedBalanceSat": 0,
    //   "unconfirmedTxApperances": 0,
    //   "txApperances": 7,
    //   "transactions": [
    //     "f737485aaee3c10b13013fa109bb6294b099246134ca9885f4cc332dbc6c9bb4",
    //     "decd5b9c0c959e4e543182093e8f7f8bc7a6ecd96a8a062daaeff3667f8feca7",
    //     "94e69a627a34ae27fca81d15fff4323a7ce1f7c275c7485762ce018221017632",
    //     "e67c70787af7f3506263c9eda007f3d2d24bd750ff95b5c50a120d9118dfd807",
    //     "8e5e00704a147d54028f94d52df7730e821b9c6cd4bd29494e5636f49c199d6a",
    //     "15102827c108566ea5daf725c09079c1a3f42ef99d1eb68ea8c584f7b16ab87a",
    //     "cc27be8846276612dfce5924b7be96556212f0f0e62bd17641732175edb9911e"
    //   ]
    // }]

    (async () => {
      try {
        let details = await BITBOX.Address.details(['1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA', "bitcoincash:qp7ekaepv3wf2nq035hevcma4x9sxmp3w56048g6ra"]);
        console.log(details)
      } catch(error) {
       console.error(error)
      }
    })()

    // [ { balance: 0.36781097,
    //   balanceSat: 36781097,
    //   totalReceived: 0.36781097,
    //   totalReceivedSat: 36781097,
    //   totalSent: 0,
    //   totalSentSat: 0,
    //   unconfirmedBalance: 0,
    //   unconfirmedBalanceSat: 0,
    //   unconfirmedTxApperances: 0,
    //   txApperances: 7,
    //   transactions:
    //    [ 'f737485aaee3c10b13013fa109bb6294b099246134ca9885f4cc332dbc6c9bb4',
    //      'decd5b9c0c959e4e543182093e8f7f8bc7a6ecd96a8a062daaeff3667f8feca7',
    //      '94e69a627a34ae27fca81d15fff4323a7ce1f7c275c7485762ce018221017632',
    //      'e67c70787af7f3506263c9eda007f3d2d24bd750ff95b5c50a120d9118dfd807',
    //      '8e5e00704a147d54028f94d52df7730e821b9c6cd4bd29494e5636f49c199d6a',
    //      '15102827c108566ea5daf725c09079c1a3f42ef99d1eb68ea8c584f7b16ab87a',
    //      'cc27be8846276612dfce5924b7be96556212f0f0e62bd17641732175edb9911e' ],
    //   legacyAddress: '1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA',
    //   cashAddress: 'bitcoincash:qpcxf2sv9hjw08nvpgffpamfus9nmksm3chv5zqtnz' },
    // { balance: 0,
    //   balanceSat: 0,
    //   totalReceived: 0,
    //   totalReceivedSat: 0,
    //   totalSent: 0,
    //   totalSentSat: 0,
    //   unconfirmedBalance: 0,
    //   unconfirmedBalanceSat: 0,
    //   unconfirmedTxApperances: 0,
    //   txApperances: 0,
    //   transactions: [],
    //   legacyAddress: '1CT9huFgxMFveRvzZ7zPPJNoaMm2Fo64VH',
    //   cashAddress: 'bitcoincash:qp7ekaepv3wf2nq035hevcma4x9sxmp3w56048g6ra' } ]


### `utxo`

Return list of uxto for address

#### Arguments

1.  addresses `Array` required: Array with maximum of 20 legacy or cash addresses.

#### Result

utxo `Array`: Array of arrays with utxo for addresses

#### Examples


    (async () => {
      try {
        let utxo = await BITBOX.Address.utxo(['1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA']);
        console.log(utxo);
      } catch(error) {
       console.error(error)
      }
    })()

    // [[
    //   {
    //     "address": "1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA",
    //     "txid": "f737485aaee3c10b13013fa109bb6294b099246134ca9885f4cc332dbc6c9bb4",
    //     "vout": 0,
    //     "scriptPubKey": "76a9147064aa0c2de4e79e6c0a1290f769e40b3dda1b8e88ac",
    //     "amount": 0.299,
    //     "satoshis": 29900000,
    //     "height": 528796,
    //     "confirmations": 16
    //   },
    //   {
    //     "address": "1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA",
    //     "txid": "decd5b9c0c959e4e543182093e8f7f8bc7a6ecd96a8a062daaeff3667f8feca7",
    //     "vout": 0,
    //     "scriptPubKey": "76a9147064aa0c2de4e79e6c0a1290f769e40b3dda1b8e88ac",
    //     "amount": 0.04839108,
    //     "satoshis": 4839108,
    //     "height": 528573,
    //     "confirmations": 239
    //   }
    // ]]

    (async () => {
      try {
        let utxo = await BITBOX.Address.utxo(['1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA', "bitcoincash:qp7ekaepv3wf2nq035hevcma4x9sxmp3w56048g6ra"]);
        console.log(utxo);
      } catch(error) {
       console.error(error)
      }
    })()

    // [ [ { txid: 'f737485aaee3c10b13013fa109bb6294b099246134ca9885f4cc332dbc6c9bb4',
    //     vout: 0,
    //     scriptPubKey: '76a9147064aa0c2de4e79e6c0a1290f769e40b3dda1b8e88ac',
    //     amount: 0.299,
    //     satoshis: 29900000,
    //     height: 528796,
    //     confirmations: 478,
    //     legacyAddress: '1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA',
    //     cashAddress: 'bitcoincash:qpcxf2sv9hjw08nvpgffpamfus9nmksm3chv5zqtnz' },
    //   { txid: 'decd5b9c0c959e4e543182093e8f7f8bc7a6ecd96a8a062daaeff3667f8feca7',
    //     vout: 0,
    //     scriptPubKey: '76a9147064aa0c2de4e79e6c0a1290f769e40b3dda1b8e88ac',
    //     amount: 0.04839108,
    //     satoshis: 4839108,
    //     height: 528573,
    //     confirmations: 701,
    //     legacyAddress: '1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA',
    //     cashAddress: 'bitcoincash:qpcxf2sv9hjw08nvpgffpamfus9nmksm3chv5zqtnz' }],
    //     [] ]


### `unconfirmed`

Return list of unconfirmed transactions for address

#### Arguments

1.  addresses `Array` required: Array with maximum of 20 legacy or cash addresses.

#### Result

unconfirmed `Array`: Array of arrays with unconfirmed transactions for addresses

#### Examples


    (async () => {
      try {
        let unconfirmed = await BITBOX.Address.unconfirmed(['1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W']);
        console.log(unconfirmed);
      } catch(error) {
       console.error(error)
      }
    })()

    // [[
    //   {
    //     "txid": "e0aadd861a06993e39af932bb0b9ad69e7b37ef5843a13c6724789e1c94f3513",
    //     "vout": 1,
    //     "scriptPubKey": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac",
    //     "amount": 0.00008273,
    //     "satoshis": 8273,
    //     "confirmations": 0,
    //     "ts": 1526680569,
    //     "legacyAddress": "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W",
    //     "cashAddress": "bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c"
    //   }
    // ]];

    (async () => {
      try {
        let unconfirmed = await BITBOX.Address.unconfirmed(['1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W', "bitcoincash:qp7ekaepv3wf2nq035hevcma4x9sxmp3w56048g6ra"])
        console.log(unconfirmed);
      } catch(error) {
       console.error(error)
      }
    })()

    // [
    //   [
    //     {
    //       "txid": "e0aadd861a06993e39af932bb0b9ad69e7b37ef5843a13c6724789e1c94f3513",
    //       "vout": 1,
    //       "scriptPubKey": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac",
    //       "amount": 0.00008273,
    //       "satoshis": 8273,
    //       "confirmations": 0,
    //       "ts": 1526680569,
    //       "legacyAddress": "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W",
    //       "cashAddress": "bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c"
    //     }
    //   ],
    //   []
    // ];

---
title: HDNode
icon: code-branch
ordinal: 5
---

HDNode stands for Hierarchically Deterministic node which can be used to create a [HD wallet](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#hierarchical-deterministic-wallets-bip0032bip0044).

### `fromSeed`

Create HDNode from Seed Buffer.

#### Arguments

1.  rootSeed `Buffer`: root seed buffer
2.  network `string` **optional**: network. default: 'mainnet'

#### Result

HDNode HDNode

#### Examples

      // create mnemonic
      let mnemonic = SLP.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      SLP.HDNode.fromSeed(seedBuffer);

      // generate entropy
      let entropy = SLP.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = SLP.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      SLP.HDNode.fromSeed(seedBuffer);

### `derive`

Derive [non hardened](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#hardened-child-key-derivation) child HDNode

#### Arguments

1.  num `number`: number of child node. Ex: 0

#### Result

HDNode HDNode

#### Examples

      // create mnemonic
      let mnemonic = SLP.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // derive unhardened child HDNode
      SLP.HDNode.derive(hdNode, 0);

### `deriveHardened`

Derive [hardened](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#hardened-child-key-derivation) child HDNode

#### Arguments

1.  num `number`: number of child node. Ex: 0

#### Result

HDNode HDNode

#### Examples

      // create mnemonic
      let mnemonic = SLP.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // derive hardened child HDNode
      SLP.HDNode.deriveHardened(hdNode, 0);

### `derivePath`

Derive child HDNode from path

#### Arguments

1.  path `string`: path of child hd node. Ex: "m/44'/145'/0'"

#### Result

HDNode HDNode

#### Examples

      // create mnemonic
      let mnemonic = SLP.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // derive hardened child HDNode
      SLP.HDNode.derivePath(hdNode, "m/44'/145'/0'");

### `toLegacyAddress`

Get legacy address of HDNode

#### Arguments

1.  hdNode: HDNode

#### Result

legacyAddress `string`: legacy base58check encoded address of HDNode

#### Examples

      // create mnemonic
      let mnemonic = SLP.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // to legacy address
      SLP.HDNode.toLegacyAddress(hdNode);
      // 14apxtw2LDQmXWsS5k4JEhG93Jzjswhvma

      // generate entropy
      let entropy = SLP.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = SLP.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // to cash address
      SLP.HDNode.toLegacyAddress(hdNode);
      // 14mVsq3H5Ep2Jb6AqoKsmY1BFHKCBGPDLi

### `toCashAddress`

Get cash address of HDNode

#### Arguments

1.  hdNode: HDNode
2.  regtest `boolean` optional: return regtest address

#### Result

cashAddress `string`: cashaddr encoded address of HDNode

#### Examples

      // create mnemonic
      let mnemonic = SLP.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // to cash address
      SLP.HDNode.toCashAddress(hdNode);
      // bitcoincash:qqrz6kqw6nvhwgwrt4g7fggepvewtkr7nukkeqf4rw

      // generate entropy
      let entropy = SLP.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = SLP.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // to cash address
      SLP.HDNode.toCashAddress(hdNode);
      // bitcoincash:qq549jxsjv66kw0smdju4es2axnk7hhe9cquhjg4gt

### `toSLPAddress`

Get slp address of HDNode

#### Arguments

1.  hdNode: HDNode

#### Result

slpAddress `string`: slpaddr encoded address of HDNode

#### Examples

      // create mnemonic
      let mnemonic = SLP.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // to cash address
      SLP.HDNode.toSLPAddress(hdNode);
      // simpleledger:qpst7ganm0ucmj3yl7jxvdqrm7tg3zhveg89xjh25d

      // generate entropy
      let entropy = SLP.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = SLP.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // to cash address
      SLP.HDNode.toSLPAddress(hdNode);
      // simpleledger:qqxh2z2z397m4c6u9s5x6wjtku742q8rpvm6al2nrf

### `toWIF`

Get private key in wallet import format (WIF) of HDNode

#### Arguments

1.  hdNode: HDNode

#### Result

privateKeyWIF `string`: private key in wallet import format (WIF) of HDNode

#### Examples

      // create mnemonic
      let mnemonic = SLP.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // to WIF
      SLP.HDNode.toWIF(hdNode);
      // L5E8QjFnLukp8BuF4uu9gmvvSrbafioURGdBve5tA3Eq5ptzbMCJ

      // generate entropy
      let entropy = SLP.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = SLP.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // to WIF
      SLP.HDNode.toWIF(hdNode);
      // KwobPFhv3AuXc3ps6YtWfMVRpLBDBA7jnJddurfELTyTNcFhZYpJ

### `toXPub`

Get [extended](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#extended-keys) [public key](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#public-key-cryptography-and-cryptocurrency) of HDNode

#### Arguments

1.  hdNode: HDNode

#### Result

xpub `string`: extended public key of HDNode

#### Examples

      // create mnemonic
      let mnemonic = SLP.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // to extended public key
      SLP.HDNode.toXPub(hdNode);
      // xpub661MyMwAqRbcG4CnhNYoK1r1TKLwQQ1UdC3LHoWFK61rsnzh7Hx35qQ9Z53ucYcE5WvA7GEDXhqqKjSY2e6Y8n7WNVLYHpXCuuX945VPuYn

      // generate entropy
      let entropy = SLP.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = SLP.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // to extended public key
      SLP.HDNode.toXPub(hdNode);
      // xpub661MyMwAqRbcFuMLeHkSbTNwNHG9MQyrAZqV1Q4MEAsmj9MYa5sxg8WC2LKqW6EHviHVucBjWi1n38juZpDDeX3U6YrsMeACdcNSTHkM8BQ

### `toXPriv`

Get [extended](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#extended-keys) [private key](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#private-keys) of HDNode

#### Arguments

1.  hdNode: HDNode

#### Result

xpriv `string`: extended private key of HDNode

#### Examples

      // create mnemonic
      let mnemonic = SLP.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // to extended private key
      SLP.HDNode.toXPriv(hdNode);
      // xprv9s21ZrQH143K2eMCcbT4qwwRhw6qZaPaEDWB792bnrxQZPoP2JUk4kfEx9eeV1uGTAWAfCqYr4wDWo52qALiukizKwQzvEyNR1fWZJi97Kv

      // generate entropy
      let entropy = SLP.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = SLP.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // to extended private key
      SLP.HDNode.toXPriv(hdNode);
      // xprv9s21ZrQH143K2b5GPP6zHz22E6LeCgQXJtwNbC3MA3Kz7Se7tveKo96EhqwFtSkYWkyenVcMqM7uq35PcUNG8cUdpsJEgwKG3dvfP7TmL3v

### `toKeyPair`

Get the ECPair of an HDNode

#### Arguments

1.  hdNode: HDNode

#### Result

keyPair `ECPair`: ECPair of an HDNode

#### Examples

      // create mnemonic
      let mnemonic = SLP.Mnemonic.generate(128);
      // create root seed buffer from mnemonic
      let rootSeed= SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from root seed
      let hdNode = SLP.HDNode.fromSeed(rootSeed);
      // create public key buffer from HDNode
      SLP.HDNode.toKeyPair(hdNode);

      // generate entropy
      let entropy = SLP.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = SLP.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // create public key buffer from HDNode
      SLP.HDNode.toKeyPair(hdNode);
      //

### `toPublicKey`

Get the public key of an HDNode as a buffer

#### Arguments

1.  hdNode: HDNode

#### Result

publicKeyBuffer `Buffer`: public key of HDNode as a buffer

#### Examples

      // create mnemonic
      let mnemonic = SLP.Mnemonic.generate(128);
      // create root seed buffer from mnemonic
      let rootSeed= SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from root seed
      let hdNode = SLP.HDNode.fromSeed(rootSeed);
      // create public key buffer from HDNode
      SLP.HDNode.toPublicKey(hdNode);
      //

      // generate entropy
      let entropy = SLP.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = SLP.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = SLP.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = SLP.HDNode.fromSeed(seedBuffer);
      // create public key buffer from HDNode
      SLP.HDNode.toPublicKey(hdNode);
      //

### `toIdentifier`

hash160 of Node’s public key. The same value you would see in a scriptPubKey.

#### Arguments

1.  hdnode `HDNode`

#### Result

identifier `string`

#### Examples

      // mainnet
      let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
      let node = SLP.HDNode.fromXPub(xpub);
      SLP.HDNode.toIdentifier(node);
      //
      // the same as if we hash160ed it's publicKey
      let publicKeyBuffer = SLP.HDNode.toPublicKey(node);
      SLP.Crypto.hash160(publicKeyBuffer);
      //

      // testnet
      let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
      let node = SLP.HDNode.fromXPub(xpub);
      SLP.HDNode.toIdentifier(node);
      //
      // the same as if we hash160ed it's publicKey
      let publicKeyBuffer = SLP.HDNode.toPublicKey(node);
      SLP.Crypto.hash160(publicKeyBuffer);
      //

### `fromXPriv`

Generate HDNode from extended private key

#### Arguments

1.  xpriv: extended private key

#### Result

hdNode `HDNode`

#### Examples

      // mainnet xpriv
      SLP.HDNode.fromXPriv('xprv9s21ZrQH143K2b5GPP6zHz22E6LeCgQXJtwNbC3MA3Kz7Se7tveKo96EhqwFtSkYWkyenVcMqM7uq35PcUNG8cUdpsJEgwKG3dvfP7TmL3v');

      // testnet xpriv
      SLP.HDNode.fromXPriv('tprv8gQ3zr1F5pRHMebqqhorrorYNvUG3XkcZjSWVs2cEtRwwJy1TRhgRx4XcF8dYHM2eyTbTCcdKYNhqgyBQphxwRoVyVKr9zuyoA8WxNDRvom');

### `fromXPub`

Generate HDNode from extended public key

#### Arguments

1.  xpub: extended public key

#### Result

hdNode `HDNode`

#### Examples

      // mainnet xpub
      SLP.HDNode.fromXPub('xpub661MyMwAqRbcFuMLeHkSbTNwNHG9MQyrAZqV1Q4MEAsmj9MYa5sxg8WC2LKqW6EHviHVucBjWi1n38juZpDDeX3U6YrsMeACdcNSTHkM8BQ');

      // testnet xpub
      SLP.HDNode.fromXPub('tpubDD669G3VEC6xF7ddjMUTGDWewwzCCrwX933HnP4ufAELmoDn5pXGcSgPnLodjFvWQwRXkG94f77BatEDA8dfQ99yy97kRYynUpNLENEqTBo');

### `isPublic`

Check if an HDNode can only derive public keys and children

#### Arguments

1.  hdnode `HDNode`

#### Result

isPublic `boolean`

#### Examples

      // mainnet xpub
      let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
      let node = SLP.HDNode.fromXPub(xpub);
      SLP.HDNode.isPublic(node);
      // true

      // mainnet xpriv
      let xpriv = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
      let node = SLP.HDNode.fromXPriv(xpriv);
      SLP.HDNode.isPublic(node);
      // false

      // testnet xpub
      let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
      let node = SLP.HDNode.fromXPub(xpub);
      SLP.HDNode.isPublic(node);
      // true

      // testnet xpriv
      let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
      let node = SLP.HDNode.fromXPriv(xpriv);
      SLP.HDNode.isPublic(node);
      // false

### `isPrivate`

Check if an HDNode can derive both public and private keys and children

#### Arguments

1.  hdnode `HDNode`

#### Result

isPrivate `boolean`

#### Examples

      // mainnet xpub
      let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
      let node = SLP.HDNode.fromXPub(xpub);
      SLP.HDNode.isPrivate(node);
      // false

      // mainnet xpriv
      let xpriv = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
      let node = SLP.HDNode.fromXPriv(xpriv);
      SLP.HDNode.isPrivate(node);
      // true

      // testnet xpub
      let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
      let node = SLP.HDNode.fromXPub(xpub);
      SLP.HDNode.isPrivate(node);
      // false

      // testnet xpriv
      let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
      let node = SLP.HDNode.fromXPriv(xpriv);
      SLP.HDNode.isPrivate(node);
      // true

### `sign`

Sign 32 byte hash encoded as a buffer

#### Arguments

1.  hdnode `HDNode`
2.  buffer `Buffer`

#### Result

signature `Object`

#### Examples

      // mainnet xpriv
      let xpriv = 'xprv9z2uWrGjbYPxc728rvtMi4jt4SudRiSfYn6Tdif5XN17pJ1NTbHoHK6JePkPLY1NHXLaQcA6sWudpZDm7DwKhbsGQieAp9wx46Wbio4iXg9';
      // hdnode from xpriv
      let hdnode = SLP.HDNode.fromXPriv(xpriv);
      // 32 byte buffer
      let buf = Buffer.from(SLP.Crypto.sha256('EARTH'), 'hex');
      // sign
      SLP.HDNode.sign(hdnode, buf);

      // testnet xpriv
      let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
      // hdnode from xpriv
      let hdnode = SLP.HDNode.fromXPriv(xpriv);
      // 32 byte buffer
      let buf = Buffer.from(SLP.Crypto.sha256('EARTH'), 'hex');
      // sign
      SLP.HDNode.sign(hdnode, buf);

### `verify`

Verify signed 32 byte hash encoded as a buffer

#### Arguments

1.  hdnode `HDNode`
2.  buffer `Buffer`
3.  signature `Object`

#### Result

verified `boolean`

#### Examples

      // mainnet xprivs
      let xpriv1 = 'xprv9ys4cvcoU8RoqvzxGj886r4Ey3w1WfVNYH8sMnVPVzyQtaPPM6Q8pHm3D9WPWvEupGEgcJ1xLaGaZDcvKfoAurE2AzHRRRup5FuHzDr8n15';
      let xpriv2 = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
      // hdnodes from xprivs
      let hdnode1 = SLP.HDNode.fromXPriv(xpriv1);
      let hdnode2 = SLP.HDNode.fromXPriv(xpriv2);
      // 32 byte buffer
      let buf = Buffer.from(SLP.Crypto.sha256('EARTH'), 'hex');
      // sign
      let signature = SLP.HDNode.sign(hdnode1, buf);
      // verify
      SLP.HDNode.verify(hdnode1, buf, signature);
      // true
      SLP.HDNode.verify(hdnode2, buf, signature);
      // false

      // testnet xprivs
      let xpriv1 = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
      let xpriv2 = 'tprv8ggxJ8SG5EdqiM6Dn63QwHScQ7HS5hXqUMxSD1NEbDyPw6VtoUMFZBAohpTMsPz9cYbpHELmA4Zm79NKRvEvFdhWRX2bSmu7V7PiNb364nv';
      // hdnodes from xprivs
      let hdnode1 = SLP.HDNode.fromXPriv(xpriv1);
      let hdnode2 = SLP.HDNode.fromXPriv(xpriv2);
      // 32 byte buffer
      let buf = Buffer.from(SLP.Crypto.sha256('EARTH'), 'hex');
      // sign
      let signature = SLP.ECPair.sign(hdnode1, buf);
      // verify
      SLP.HDNode.verify(hdnode1, buf, signature);
      // true
      SLP.HDNode.verify(hdnode2, buf, signature);
      // false

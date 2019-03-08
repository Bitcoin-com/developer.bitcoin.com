---
title: HDNode
icon: code-branch
ordinal: 10
---

HDNode stands for Hierarchically Deterministic node which can be used to create a [HD wallet](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#hierarchical-deterministic-wallets-bip0032bip0044).

### `fromSeed`

Create HDNode from Seed Buffer.

#### Arguments

1.  rootSeed `Buffer`: root seed buffer
2.  network `String` **optional**: network. default: 'mainnet'

#### Result

HDNode HDNode

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      BITBOX.HDNode.fromSeed(seedBuffer);

      // generate entropy
      let entropy = BITBOX.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = BITBOX.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      BITBOX.HDNode.fromSeed(seedBuffer);

### `derive`

Derive [non hardened](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#hardened-child-key-derivation) child HDNode

#### Arguments

1.  num `number`: number of child node. Ex: 0

#### Result

HDNode HDNode

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // derive unhardened child HDNode
      BITBOX.HDNode.derive(hdNode, 0);

### `deriveHardened`

Derive [hardened](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#hardened-child-key-derivation) child HDNode

#### Arguments

1.  num `number`: number of child node. Ex: 0

#### Result

HDNode HDNode

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // derive hardened child HDNode
      BITBOX.HDNode.deriveHardened(hdNode, 0);

### `derivePath`

Derive child HDNode from path

#### Arguments

1.  path `string`: path of child hd node. Ex: "m/44'/145'/0'"

#### Result

HDNode HDNode

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // derive hardened child HDNode
      BITBOX.HDNode.derivePath(hdNode, "m/44'/145'/0'");

### `toLegacyAddress`

Get legacy address of HDNode

#### Arguments

1.  hdNode: HDNode

#### Result

legacyAddress `string`: legacy base58check encoded address of HDNode

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // to legacy address
      BITBOX.HDNode.toLegacyAddress(hdNode);
      // 14apxtw2LDQmXWsS5k4JEhG93Jzjswhvma

      // generate entropy
      let entropy = BITBOX.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = BITBOX.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // to cash address
      BITBOX.HDNode.toLegacyAddress(hdNode);
      // 14mVsq3H5Ep2Jb6AqoKsmY1BFHKCBGPDLi

### `toCashAddress`

Get cash address of HDNode

#### Arguments

1.  hdNode: HDNode
2.  regtest `Boolean` optional: return regtest address

#### Result

cashAddress `string`: cashaddr encoded address of HDNode

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // to cash address
      BITBOX.HDNode.toCashAddress(hdNode);
      // bitcoincash:qqrz6kqw6nvhwgwrt4g7fggepvewtkr7nukkeqf4rw

      // generate entropy
      let entropy = BITBOX.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = BITBOX.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // to cash address
      BITBOX.HDNode.toCashAddress(hdNode);
      // bitcoincash:qq549jxsjv66kw0smdju4es2axnk7hhe9cquhjg4gt

### `toWIF`

Get private key in wallet import format (WIF) of HDNode

#### Arguments

1.  hdNode: HDNode

#### Result

privateKeyWIF `string`: private key in wallet import format (WIF) of HDNode

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // to WIF
      BITBOX.HDNode.toWIF(hdNode);
      // L5E8QjFnLukp8BuF4uu9gmvvSrbafioURGdBve5tA3Eq5ptzbMCJ

      // generate entropy
      let entropy = BITBOX.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = BITBOX.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // to WIF
      BITBOX.HDNode.toWIF(hdNode);
      // KwobPFhv3AuXc3ps6YtWfMVRpLBDBA7jnJddurfELTyTNcFhZYpJ

### `toXPub`

Get [extended](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#extended-keys) [public key](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#public-key-cryptography-and-cryptocurrency) of HDNode

#### Arguments

1.  hdNode: HDNode

#### Result

xpub `string`: extended public key of HDNode

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // to extended public key
      BITBOX.HDNode.toXPub(hdNode);
      // xpub661MyMwAqRbcG4CnhNYoK1r1TKLwQQ1UdC3LHoWFK61rsnzh7Hx35qQ9Z53ucYcE5WvA7GEDXhqqKjSY2e6Y8n7WNVLYHpXCuuX945VPuYn

      // generate entropy
      let entropy = BITBOX.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = BITBOX.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // to extended public key
      BITBOX.HDNode.toXPub(hdNode);
      // xpub661MyMwAqRbcFuMLeHkSbTNwNHG9MQyrAZqV1Q4MEAsmj9MYa5sxg8WC2LKqW6EHviHVucBjWi1n38juZpDDeX3U6YrsMeACdcNSTHkM8BQ

### `toXPriv`

Get [extended](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#extended-keys) [private key](https://developer.bitcoin.com/mastering-bitcoin-cash/3-keys-addresses-wallets/#private-keys) of HDNode

#### Arguments

1.  hdNode: HDNode

#### Result

xpriv `string`: extended private key of HDNode

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // to extended private key
      BITBOX.HDNode.toXPriv(hdNode);
      // xprv9s21ZrQH143K2eMCcbT4qwwRhw6qZaPaEDWB792bnrxQZPoP2JUk4kfEx9eeV1uGTAWAfCqYr4wDWo52qALiukizKwQzvEyNR1fWZJi97Kv

      // generate entropy
      let entropy = BITBOX.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = BITBOX.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // to extended private key
      BITBOX.HDNode.toXPriv(hdNode);
      // xprv9s21ZrQH143K2b5GPP6zHz22E6LeCgQXJtwNbC3MA3Kz7Se7tveKo96EhqwFtSkYWkyenVcMqM7uq35PcUNG8cUdpsJEgwKG3dvfP7TmL3v

### `toKeyPair`

Get the ECPair of an HDNode

#### Arguments

1.  hdNode: HDNode

#### Result

keyPair `ECPair`: ECPair of an HDNode

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create root seed buffer from mnemonic
      let rootSeed= BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from root seed
      let hdNode = BITBOX.HDNode.fromSeed(rootSeed);
      // create public key buffer from HDNode
      BITBOX.HDNode.toKeyPair(hdNode);

      // generate entropy
      let entropy = BITBOX.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = BITBOX.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // create public key buffer from HDNode
      BITBOX.HDNode.toKeyPair(hdNode);
      //

### `toPublicKey`

Get the public key of an HDNode as a buffer

#### Arguments

1.  hdNode: HDNode

#### Result

publicKeyBuffer `Buffer`: public key of HDNode as a buffer

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create root seed buffer from mnemonic
      let rootSeed= BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from root seed
      let hdNode = BITBOX.HDNode.fromSeed(rootSeed);
      // create public key buffer from HDNode
      BITBOX.HDNode.toPublicKey(hdNode);
      //

      // generate entropy
      let entropy = BITBOX.Crypto.randomBytes(32);
      // create mnemonic from entropy
      let mnemonic = BITBOX.Mnemonic.fromEntropy(entropy);
      // create seed buffer from mnemonic
      let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create HDNode from seed buffer
      let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);
      // create public key buffer from HDNode
      BITBOX.HDNode.toPublicKey(hdNode);
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
      let node = BITBOX.HDNode.fromXPub(xpub);
      BITBOX.HDNode.toIdentifier(node);
      //
      // the same as if we hash160ed it's publicKey
      let publicKeyBuffer = BITBOX.HDNode.toPublicKey(node);
      BITBOX.Crypto.hash160(publicKeyBuffer);
      //

      // testnet
      let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
      let node = BITBOX.HDNode.fromXPub(xpub);
      BITBOX.HDNode.toIdentifier(node);
      //
      // the same as if we hash160ed it's publicKey
      let publicKeyBuffer = BITBOX.HDNode.toPublicKey(node);
      BITBOX.Crypto.hash160(publicKeyBuffer);
      //

### `fromXPriv`

Generate HDNode from extended private key

#### Arguments

1.  xpriv: extended private key

#### Result

hdNode `HDNode`

#### Examples

      // mainnet xpriv
      BITBOX.HDNode.fromXPriv('xprv9s21ZrQH143K2b5GPP6zHz22E6LeCgQXJtwNbC3MA3Kz7Se7tveKo96EhqwFtSkYWkyenVcMqM7uq35PcUNG8cUdpsJEgwKG3dvfP7TmL3v');

      // testnet xpriv
      BITBOX.HDNode.fromXPriv('tprv8gQ3zr1F5pRHMebqqhorrorYNvUG3XkcZjSWVs2cEtRwwJy1TRhgRx4XcF8dYHM2eyTbTCcdKYNhqgyBQphxwRoVyVKr9zuyoA8WxNDRvom');

### `fromXPub`

Generate HDNode from extended public key

#### Arguments

1.  xpub: extended public key

#### Result

hdNode `HDNode`

#### Examples

      // mainnet xpub
      BITBOX.HDNode.fromXPub('xpub661MyMwAqRbcFuMLeHkSbTNwNHG9MQyrAZqV1Q4MEAsmj9MYa5sxg8WC2LKqW6EHviHVucBjWi1n38juZpDDeX3U6YrsMeACdcNSTHkM8BQ');

      // testnet xpub
      BITBOX.HDNode.fromXPub('tpubDD669G3VEC6xF7ddjMUTGDWewwzCCrwX933HnP4ufAELmoDn5pXGcSgPnLodjFvWQwRXkG94f77BatEDA8dfQ99yy97kRYynUpNLENEqTBo');

### `isPublic`

Check if an HDNode can only derive public keys and children

#### Arguments

1.  hdnode `HDNode`

#### Result

isPublic `Boolean`

#### Examples

      // mainnet xpub
      let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
      let node = BITBOX.HDNode.fromXPub(xpub);
      BITBOX.HDNode.isPublic(node);
      // true

      // mainnet xpriv
      let xpriv = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
      let node = BITBOX.HDNode.fromXPriv(xpriv);
      BITBOX.HDNode.isPublic(node);
      // false

      // testnet xpub
      let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
      let node = BITBOX.HDNode.fromXPub(xpub);
      BITBOX.HDNode.isPublic(node);
      // true

      // testnet xpriv
      let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
      let node = BITBOX.HDNode.fromXPriv(xpriv);
      BITBOX.HDNode.isPublic(node);
      // false

### `isPrivate`

Check if an HDNode can derive both public and private keys and children

#### Arguments

1.  hdnode `HDNode`

#### Result

isPrivate `Boolean`

#### Examples

      // mainnet xpub
      let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
      let node = BITBOX.HDNode.fromXPub(xpub);
      BITBOX.HDNode.isPrivate(node);
      // false

      // mainnet xpriv
      let xpriv = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
      let node = BITBOX.HDNode.fromXPriv(xpriv);
      BITBOX.HDNode.isPrivate(node);
      // true

      // testnet xpub
      let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
      let node = BITBOX.HDNode.fromXPub(xpub);
      BITBOX.HDNode.isPrivate(node);
      // false

      // testnet xpriv
      let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
      let node = BITBOX.HDNode.fromXPriv(xpriv);
      BITBOX.HDNode.isPrivate(node);
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
      let hdnode = BITBOX.HDNode.fromXPriv(xpriv);
      // 32 byte buffer
      let buf = Buffer.from(BITBOX.Crypto.sha256('EARTH'), 'hex');
      // sign
      BITBOX.HDNode.sign(hdnode, buf);

      // testnet xpriv
      let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
      // hdnode from xpriv
      let hdnode = BITBOX.HDNode.fromXPriv(xpriv);
      // 32 byte buffer
      let buf = Buffer.from(BITBOX.Crypto.sha256('EARTH'), 'hex');
      // sign
      BITBOX.HDNode.sign(hdnode, buf);

### `verify`

Verify signed 32 byte hash encoded as a buffer

#### Arguments

1.  hdnode `HDNode`
2.  buffer `Buffer`
3.  signature `Object`

#### Result

verified `Boolean`

#### Examples

      // mainnet xprivs
      let xpriv1 = 'xprv9ys4cvcoU8RoqvzxGj886r4Ey3w1WfVNYH8sMnVPVzyQtaPPM6Q8pHm3D9WPWvEupGEgcJ1xLaGaZDcvKfoAurE2AzHRRRup5FuHzDr8n15';
      let xpriv2 = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
      // hdnodes from xprivs
      let hdnode1 = BITBOX.HDNode.fromXPriv(xpriv1);
      let hdnode2 = BITBOX.HDNode.fromXPriv(xpriv2);
      // 32 byte buffer
      let buf = Buffer.from(BITBOX.Crypto.sha256('EARTH'), 'hex');
      // sign
      let signature = BITBOX.HDNode.sign(hdnode1, buf);
      // verify
      BITBOX.HDNode.verify(hdnode1, buf, signature);
      // true
      BITBOX.HDNode.verify(hdnode2, buf, signature);
      // false

      // testnet xprivs
      let xpriv1 = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
      let xpriv2 = 'tprv8ggxJ8SG5EdqiM6Dn63QwHScQ7HS5hXqUMxSD1NEbDyPw6VtoUMFZBAohpTMsPz9cYbpHELmA4Zm79NKRvEvFdhWRX2bSmu7V7PiNb364nv';
      // hdnodes from xprivs
      let hdnode1 = BITBOX.HDNode.fromXPriv(xpriv1);
      let hdnode2 = BITBOX.HDNode.fromXPriv(xpriv2);
      // 32 byte buffer
      let buf = Buffer.from(BITBOX.Crypto.sha256('EARTH'), 'hex');
      // sign
      let signature = BITBOX.ECPair.sign(hdnode1, buf);
      // verify
      BITBOX.HDNode.verify(hdnode1, buf, signature);
      // true
      BITBOX.HDNode.verify(hdnode2, buf, signature);
      // false

### `createAccount`

Create [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#the-default-wallet-layout) account. Has `getChainAddress` and `nextChainAddress` helper methods.

#### Arguments

1.  hdNodes: Array of HDNodes

#### Result

account: `Object`

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create root seed buffer
      let rootSeedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create master hd node
      let masterHDNode = BITBOX.HDNode.fromSeed(rootSeedBuffer);
      // derive child node
      let childNode = masterHDNode.derivePath("m/44'/145'/0'/0");
      // create account
      let account = BITBOX.HDNode.createAccount([childNode]);

### `getChainAddress`

Returns the latest address from account

#### Arguments

1.  account: `Number`

#### Result

address: `String`

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create root seed buffer
      let rootSeedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create master hd node
      let masterHDNode = BITBOX.HDNode.fromSeed(rootSeedBuffer);
      // derive child node
      let childNode = masterHDNode.derivePath("m/44'/145'/0'/0");
      // create account
      let account = BITBOX.HDNode.createAccount([childNode]);
      account.getChainAddress(0)
      // 1EsibxXqzxzcor7eS34dSGrZp1kb3nQFFr

### `nextChainAddress`

Moves the most recent address forward for account

#### Arguments

1.  account: `Number`

#### Result

address: `String`

#### Examples

      // create mnemonic
      let mnemonic = BITBOX.Mnemonic.generate(128);
      // create root seed buffer
      let rootSeedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);
      // create master hd node
      let masterHDNode = BITBOX.HDNode.fromSeed(rootSeedBuffer);
      // derive child node
      let childNode = masterHDNode.derivePath("m/44'/145'/0'/0");
      // create account
      let account = BITBOX.HDNode.createAccount([childNode]);
      account.getChainAddress(0)
      // 1EsibxXqzxzcor7eS34dSGrZp1kb3nQFFr
      account.nextChainAddress(0)
      account.getChainAddress(0)
      // 1JBApcAMD3riimPxABg2pNvwLumP9DEpxD

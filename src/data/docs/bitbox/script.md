---
title: Script
icon: code
ordinal: 17
---

### `opcodes`

Script OP Codes

#### Result

opcodes `Object`

#### Examples

      // list all op codes
      bitbox.Script.opcodes;
      // { OP_FALSE: 0,
      //   OP_0: 0,
      //   OP_PUSHDATA1: 76,
      //   OP_PUSHDATA2: 77,
      //   OP_PUSHDATA4: 78,
      //   OP_1NEGATE: 79,
      //   OP_RESERVED: 80,
      //   OP_TRUE: 81,
      //   OP_1: 81,
      //   OP_2: 82,
      //   OP_3: 83,
      //   OP_4: 84,
      //   ...
      // }

      // get the op code for a word
      bitbox.Script.opcodes.OP_SPLIT
      // 127
      bitbox.Script.opcodes.OP_NUM2BIN
      // 128
      bitbox.Script.opcodes.OP_BIN2NUM
      // 129

### `encode`

Encode a Script buffer

#### Arguments

1.  scriptChunks `Array`

#### Result

buffer `Buffer`

#### Examples

      // encode P2PKH scriptSig to buffer
      let scriptSig = [
      Buffer.from('3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601', 'hex'),
      Buffer.from('02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex')
      ]
      bitbox.Script.encode(scriptSig);
      // <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

      // encode P2PKH scriptPubKey to buffer
      let scriptPubKey = [
      118,
      169,
      Buffer.from('24e9c07804d0ee7e5bda934e0a3ae8710fc007dd', 'hex'),
      136,
      172
      ];
      bitbox.Script.encode(scriptPubKey);
      // <Buffer 76 a9 14 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd 88 ac>

### `decode`

Decode a Script buffer.

#### Arguments

1.  buffer `Buffer`

#### Result

decodedScript `Array`

#### Examples

      // decode P2PKH scriptSig buffer
      let scriptSigBuffer = Buffer.from("483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb", 'hex');
      bitbox.Script.decode(scriptSigBuffer);
      // [ <Buffer 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 2b ... >, <Buffer 02 fb 72 1b 92 02 5e 77 5b 1b 84 77 4e 65 d5 68 d2 46 45 cb 63 32 75 f5 c2 6f 5c 31 01 b2 14 a8 fb> ]

      // decode P2PKH scriptPubKey buffer
      let scriptPubKeyBuffer = Buffer.from("76a91424e9c07804d0ee7e5bda934e0a3ae8710fc007dd88ac", 'hex');
      bitbox.Script.decode(scriptPubKeyBuffer);
      // [ 118,
      // 169,
      // <Buffer 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd>,
      // 136,
      // 172 ]

### `toASM`

Script buffer to ASM.

#### Arguments

1.  buffer `Buffer`

#### Result

asm `string`

#### Examples

      // P2PKH scriptSig
      let scriptSigBuffer = Buffer.from('483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex');
      bitbox.Script.toASM(scriptSigBuffer);
      // 3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb

      // P2PKH scriptPubKey
      let scriptBuffer = Buffer.from("76a914bee4182d9fbc8931a728410a0cd3e0f340f2995a88ac", 'hex');
      bitbox.Script.toASM(scriptBuffer);
      // OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG

### `fromASM`

Script ASM to buffer

#### Arguments

1.  asm `string`

#### Result

buffer `Buffer`

#### Examples

      // P2PKH scriptSig
      let scriptSigASM = "3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb";
      bitbox.Script.fromASM(scriptSigASM);
      // <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

      // P2PKH scriptPubKey
      let scriptPubKeyASM = "OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG";
      bitbox.Script.fromASM(scriptPubKeyASM);
      // <Buffer 76 a9 14 be e4 18 2d 9f bc 89 31 a7 28 41 0a 0c d3 e0 f3 40 f2 99 5a 88 ac>

### `encodeNullDataOutput`

nulldata output template: `` OP_RETURN `data` ``

#### Arguments

1.  data `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let data = "BCHForEveryone";
      let buf = bitbox.Script.nullData.output.encode(Buffer.from(data, 'ascii'));
      bitbox.Script.toASM(buf);
      // OP_RETURN 424348466f7245766572796f6e65

      let data = "Satoshi Nakamoto";
      let buf = bitbox.Script.nullData.output.encode(Buffer.from(data, 'ascii'));
      bitbox.Script.toASM(buf);
      // OP_RETURN 5361746f736869204e616b616d6f746

### `decodeNullDataOutput`

decode nulldata output

#### Arguments

1.  output `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '6a0e424348466f7245766572796f6e65';
      bitbox.Script.nullData.output.decode(Buffer.from(hex, 'hex')).toString('ascii');
      // BCHForEveryone

      let hex = '6a105361746f736869204e616b616d6f746f';
      bitbox.Script.nullData.output.decode(Buffer.from(hex, 'hex')).toString('ascii');
      // Satoshi Nakamoto

### `checkNullDataOutput`

check nulldata output format

#### Arguments

1.  output `Buffer`

#### Result

valid `boolean`

#### Examples

      let data = "BCHForEveryone";
      let buf = bitbox.Script.nullData.output.encode(Buffer.from(data, 'ascii'));
      bitbox.Script.nullData.output.check(buf);
      // true

      let data = "Satoshi Nakamoto";
      let buf = bitbox.Script.nullData.output.encode(Buffer.from(data, 'ascii'));
      bitbox.Script.nullData.output.check(buf);
      // true

### `encodeP2PKInput`

p2pk input template: `` `signature` ``

#### Arguments

1.  signature `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let signature = '304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
      let buf = bitbox.Script.pubKey.input.encode(Buffer.from(signature, 'hex'));
      bitbox.Script.toASM(buf);
      // 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801

### `decodeP2PKInput`

decode p2pk input

#### Arguments

1.  input `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '47304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
      bitbox.Script.pubKey.input.decode(Buffer.from(hex, 'hex'));
      // <Buffer 30 44 02 20 75 15 cf 14 7d 20 1f 41 10 92 e6 be 5a 64 a6 00 6f 93 08 fa d7 b2 a8 fd aa b2 2c d8 6c e7 64 c2 02 20 09 74 b8 ac a7 bf 51 db f5 41 50 d3 ... >

### `checkP2PKInput`

check p2pk input format

#### Arguments

1.  input `Buffer`

#### Result

valid `boolean`

#### Examples

      let signature = '304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
      let input = bitbox.Script.pubKey.input.encode(Buffer.from(signature, 'hex'));
      bitbox.Script.pubKey.input.check(input);
      // true

### `encodeP2PKOutput`

p2pk output template: `` `pubKey` OP_CHECKSIG ``

#### Arguments

1.  pubKey `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let pubKey = '02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b';
      let buf = bitbox.Script.pubKey.output.encode(Buffer.from(pubKey, 'hex'));
      bitbox.Script.toASM(buf)
      // 02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b OP_CHECKSIG

### `decodeP2PKOutput`

decode p2pk output

#### Arguments

1.  pubKey `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '2102d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126bac';
      bitbox.Script.pubKey.output.decode(Buffer.from(hex, 'hex'));
      // <Buffer 02 d3 05 77 2e 08 73 fb a6 c1 c7 ff 35 3c e3 74 23 33 16 eb 58 20 ac d7 ff 3d 7d 9b 82 d5 14 12 6b>

### `checkP2PKOutput`

check P2PK output format

#### Arguments

1.  output `Buffer`

#### Result

valid `boolean`

#### Examples

      // check p2pk output
      let pubKey = '02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b';
      let buf = bitbox.Script.pubKey.output.encode(Buffer.from(pubKey, 'hex'));
      bitbox.Script.pubKey.output.check(buf);
      // true

### `encodeP2PKHInput`

p2pkh input template: `` `signature` `pubKey` ``

#### Arguments

1.  signature `Buffer`
2.  pubKey `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let signature = '304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
      let pubKey = '02d9bb8da1de26d390b6f3dcb4e589857730536b646995fa948a8319ede2ca1c15';
      let buf = bitbox.Script.pubKeyHash.input.encode(Buffer.from(signature, 'hex'), Buffer.from(pubKey, 'hex'));
      bitbox.Script.toASM(buf);
      // 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 02d9bb8da1de26d390b6f3dcb4e589857730536b646995fa948a8319ede2ca1c15

### `decodeP2PKHInput`

decode p2pkh input

#### Arguments

1.  signature `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '47304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca28012102d9bb8da1de26d390b6f3dcb4e589857730536b646995fa948a8319ede2ca1c15';
      bitbox.Script.pubKeyHash.input.decode(Buffer.from(hex, 'hex'));
      // { signature:
      // <Buffer 30 44 02 20 75 15 cf 14 7d 20 1f 41 10 92 e6 be 5a 64 a6 00 6f 93 08 fa d7 b2 a8 fd aa b2 2c d8 6c e7 64 c2 02 20 09 74 b8 ac a7 bf 51 db f5 41 50 d3 ... >,
      // pubKey: <Buffer 02 d9 bb 8d a1 de 26 d3 90 b6 f3 dc b4 e5 89 85 77 30 53 6b 64 69 95 fa 94 8a 83 19 ed e2 ca 1c 15> }

### `checkP2PKHInput`

check P2PKH input format

#### Arguments

1.  input `Buffer`

#### Result

valid `boolean`

#### Examples

      // check p2pkh input
      let signature = '304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
      let pubKey = '02d9bb8da1de26d390b6f3dcb4e589857730536b646995fa948a8319ede2ca1c15';
      let buf = bitbox.Script.pubKeyHash.input.encode(Buffer.from(signature, 'hex'), Buffer.from(pubKey, 'hex'));
      bitbox.Script.pubKeyHash.input.check(buf);
      // true

### `encodeP2PKHOutput`

p2pkh output template: `` OP_DUP OP_HASH160 `pubKeyHash` OP_EQUALVERIFY OP_CHECKSIG ``

#### Arguments

1.  signature `Buffer`
2.  pubKey `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let node = bitbox.HDNode.fromXPriv('xprv9xoxVbZ7L8jmvKx7e1hgd7muo8H35ysTx1LCKFey5nVHUkHSPBxpzBzt2HVK16hu4m6oN5vfaCWSZQvqtDhfJTCY3t9ocp7H7zcTZ2fVRwL');
      let identifier = bitbox.HDNode.toIdentifier(node);
      let buf = bitbox.Script.pubKeyHash.output.encode(identifier);
      bitbox.Script.toASM(buf)
      // OP_DUP OP_HASH160 6ee7ded4f9d0deb6f4a63d68df5ccc4e41ad8967 OP_EQUALVERIFY OP_CHECKSIG

### `decodeP2PKHOutput`

decode p2pkh output

#### Arguments

1.  output `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '76a9146ee7ded4f9d0deb6f4a63d68df5ccc4e41ad896788ac';
      bitbox.Script.pubKeyHash.output.decode(Buffer.from(hex, 'hex'));
      // <Buffer 6e e7 de d4 f9 d0 de b6 f4 a6 3d 68 df 5c cc 4e 41 ad 89 67>

### `checkP2PKHOutput`

check P2PKH output format

#### Arguments

1.  output `Buffer`

#### Result

valid `boolean`

#### Examples

      // check p2pkh output
      let node = bitbox.HDNode.fromXPriv('xprv9xoxVbZ7L8jmvKx7e1hgd7muo8H35ysTx1LCKFey5nVHUkHSPBxpzBzt2HVK16hu4m6oN5vfaCWSZQvqtDhfJTCY3t9ocp7H7zcTZ2fVRwL');
      let identifier = bitbox.HDNode.toIdentifier(node);
      let buf = bitbox.Script.pubKeyHash.output.encode(identifier);
      bitbox.Script.pubKeyHash.output.check(buf);
      // true

### `encodeP2MSInput`

p2ms Input template: `OP_0 [signatures ...]`

#### Arguments

1.  signatures `Array`

#### Result

buffer `Buffer`

#### Examples

      let signatures = [
      "304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801",
      "3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501"
      ];
      let sigs = signatures.map((signature) => {
      return signature ? Buffer.from(signature, 'hex') : bitbox.Script.opcodes.OP_0
      })
      let buf = bitbox.Script.multisig.input.encode(sigs);
      bitbox.Script.toASM(buf);
      // OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d14050

### `decodeP2MSInput`

decode p2ms input

#### Arguments

1.  input `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '0047304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801483045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501';
      bitbox.Script.multisig.input.decode(Buffer.from(hex, 'hex'));
      // [ <Buffer 30 44 02 20 75 15 cf 14 7d 20 1f 41 10 92 e6 be 5a 64 a6 00 6f 93 08 fa d7 b2 a8 fd aa b2 2c d8 6c e7 64 c2 02 20 09 74 b8 ac a7 bf 51 db f5 41 50 d3 ... >,
      // <Buffer 30 45 02 21 00 ef 25 3c 1f aa 39 e6 51 15 87 25 19 e5 f0 a3 3b be cf 43 0c 0f 35 cf 56 2b ea bb ad 4d a2 4d 8d 02 20 17 42 be 8e e4 98 12 a7 3a de a3 ... > ]

### `checkP2MSInput`

check P2MS input format

#### Arguments

1.  input `Buffer`

#### Result

valid `boolean`

#### Examples

      let signatures = [
      "304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801",
      "3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501"
      ];
      let sigs = signatures.map((signature) => {
      return signature ? Buffer.from(signature, 'hex') : bitbox.Script.opcodes.OP_0
      })
      let buf = bitbox.Script.multisig.input.encode(sigs);
      bitbox.Script.multisig.input.check(buf);
      // true

### `encodeP2MSOutput`

p2ms Output template: `m [pubKeys ...] n OP_CHECKMULTISIG`

#### Arguments

1.  m `number`
2.  pubKeys `Array`

#### Result

buffer `Buffer`

#### Examples

      let arr = [
      "02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1",
      "0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a"
      ];
      let pubKeys = arr.map((p) => { return Buffer.from(p, 'hex') })
      let m = pubKeys.length
      let buf = bitbox.Script.multisig.output.encode(m, pubKeys);
      bitbox.Script.toASM(buf);
      // OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG

### `decodeP2MSOutput`

decode p2ms output

#### Arguments

1.  output `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae';
      bitbox.Script.multisig.output.decode(Buffer.from(hex, 'hex'));
      // { m: 2,
      // pubKeys: [ <Buffer 02 35 9c 6e 3f 04 ce fb f0 89 cf 1d 66 70 dc 47 c3 fb 4d f6 8e 2b ad 1f a5 a3 69 f9 ce 4b 42 bb d1>,
      // <Buffer 03 95 a9 d8 4d 47 d5 24 54 8f 79 f4 35 75 8c 01 fa ec 5d a2 b7 e5 51 d3 b8 c9 95 b7 e0 63 26 ae 4a> ] }

### `checkP2MSOutput`

check P2MS output format

#### Arguments

1.  input `Buffer`

#### Result

valid `boolean`

#### Examples

      let arr = [
      "02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1",
      "0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a"
      ];
      let pubKeys = arr.map((p) => { return Buffer.from(p, 'hex') })
      let m = pubKeys.length
      let buf = bitbox.Script.multisig.output.encode(m, pubKeys);
      bitbox.Script.multisig.output.check(buf);
      // true

### `encodeP2SHInput`

p2sh Input template: `` `scriptSig` `serialized scriptPubKey script` ``

#### Arguments

1.  redeemScriptSig `Buffer`
2.  redeemScript `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let redeemScriptSig = bitbox.Script.fromASM("OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501");
      let redeemScript = bitbox.Script.fromASM("OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG");
      let buf = bitbox.Script.scriptHash.input.encode(redeemScriptSig, redeemScript);
      bitbox.Script.toASM(buf)
      // OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501 522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae

### `decodeP2SHInput`

decode p2sh input

#### Arguments

1.  input `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '0047304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801483045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d14050147522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae';
      bitbox.Script.scriptHash.input.decode(Buffer.from(hex, 'hex'));
      // { redeemScript: <Buffer 52 21 02 35 9c 6e 3f 04 ce fb f0 89 cf 1d 66 70 dc 47 c3 fb 4d f6 8e 2b ad 1f a5 a3 69 f9 ce 4b 42 bb d1 21 03 95 a9 d8 4d 47 d5 24 54 8f 79 f4 35 75 ... >,
      // redeemScriptSig: <Buffer 00 47 30 44 02 20 75 15 cf 14 7d 20 1f 41 10 92 e6 be 5a 64 a6 00 6f 93 08 fa d7 b2 a8 fd aa b2 2c d8 6c e7 64 c2 02 20 09 74 b8 ac a7 bf 51 db f5 41 ... > }}

### `checkP2SHInput`

check P2SH input format

#### Arguments

1.  input `Buffer`

#### Result

valid `boolean`

#### Examples

      let redeemScriptSig = bitbox.Script.fromASM("OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501");
      let redeemScript = bitbox.Script.fromASM("OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG");
      let buf = bitbox.Script.scriptHash.input.encode(redeemScriptSig, redeemScript);
      bitbox.Script.scriptHash.input.check(buf);
      // true

### `encodeP2SHOutput`

p2sh Output template: `` OP_HASH160 `scriptHash` OP_EQUAL ``

#### Arguments

1.  scriptHash `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let redeemScript = bitbox.Script.fromASM("OP_DUP OP_HASH160 aa4d7985c57e011a8b3dd8e0e5a73aaef41629c5 OP_EQUALVERIFY OP_CHECKSIG");
      let scriptHash = bitbox.Crypto.hash160(redeemScript);
      let buf = bitbox.Script.scriptHash.output.encode(scriptHash);
      //
      bitbox.Script.toASM(buf)
      // OP_HASH160 1b61ebed0c2a16c699a99c3d5ef4d08de7fb1cb8 OP_EQUAL

### `decodeP2SHOutput`

decode p2sh output

#### Arguments

1.  output `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = 'a9141b61ebed0c2a16c699a99c3d5ef4d08de7fb1cb887';
      bitbox.Script.scriptHash.output.decode(Buffer.from(hex, 'hex'));
      //

### `checkP2SHOutput`

check P2SH output format

#### Arguments

1.  output `Buffer`

#### Result

valid `boolean`

#### Examples

      let redeemScript = bitbox.Script.fromASM("OP_DUP OP_HASH160 aa4d7985c57e011a8b3dd8e0e5a73aaef41629c5 OP_EQUALVERIFY OP_CHECKSIG");
      let scriptHash = bitbox.Crypto.hash160(redeemScript);
      let buf = bitbox.Script.scriptHash.output.encode(scriptHash);
      bitbox.Script.scriptHash.output.check(buf);
      // true

### `classifyInput`

Classify transaction input

#### Arguments

1.  input `Buffer`

#### Result

type `string`

#### Examples

      let pubkeyInput = "3045022100ba2c3b717e023966cb16df65ca83f77029e2a5b80c47c47b6956474ac9ff281302201d48ee3292439e284a6654a0e79ac2b8f7fff5c6b0d715260aa296501a239c6441";
      bitbox.Script.classifyInput(bitbox.Script.fromASM(pubkeyInput));
      // pubkey

      let pubkeyhashInput = "30440220280d4a9954c5afe24089bdd545466bd7a8caad8b295e30de9d3cb5e56fccf64e022036663b2c53b5fac674b4b935b53e2a4ea88dfc71c9b879870976d82887542ab441 02969479fa9bea3082697dce683ac05b13ae63016b41d5ca1a450ad40f6c543751";
      bitbox.Script.classifyInput(bitbox.Script.fromASM(pubkeyhashInput));
      // pubkeyhash

      let multisigInput = "OP_0 3045022100fe324541215798b2df68cbd44039615e23c506d4ec1a05572064392a98196b82022068c849fa6699206da2fc6d7848efc1d3804a5816d6293615fe34c1a7f34e1c2f01 3044022001ab168e80b863fdec694350b587339bb72a37108ac3c989849251444d13ebba02201811272023e3c1038478eb972a82d3ad431bfc2408e88e4da990f1a7ecbb263901 3045022100aaeb7204c17eee2f2c4ff1c9f8b39b79e75e7fbf33e92cc67ac51be8f15b75f90220659eee314a4943a6384d2b154fa5821ef7a084814d7ee2c6f9f7f0ffb53be34b01";
      bitbox.Script.classifyInput(bitbox.Script.fromASM(multisigInput));
      // multisig

      let scripthashInput = "OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501 522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae";
      bitbox.Script.classifyInput(bitbox.Script.fromASM(scripthashInput));
      // scripthash

### `classifyOutput`

Classify transaction output

#### Arguments

1.  output `Buffer`

#### Result

type `string`

#### Examples

      let nullDataOutput = "OP_RETURN 424348466f7245766572796f6e65";
      bitbox.Script.classifyOutput(bitbox.Script.fromASM(nullDataOutput));
      // nulldata

      let pubkeyOutput = "02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 OP_CHECKSIG";
      bitbox.Script.classifyOutput(bitbox.Script.fromASM(pubkeyOutput));
      // pubkey

      let pubkeyhashOutput = "OP_DUP OP_HASH160 aa4d7985c57e011a8b3dd8e0e5a73aaef41629c5 OP_EQUALVERIFY OP_CHECKSIG";
      bitbox.Script.classifyOutput(bitbox.Script.fromASM(pubkeyhashOutput));
      // pubkeyhash

      let multisigOutput = "OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG";
      bitbox.Script.classifyOutput(bitbox.Script.fromASM(multisigOutput));
      // multisig

      let scripthashOutput = "OP_HASH160 722ff0bc2c3f47b35c20df646c395594da24e90e OP_EQUAL";
      bitbox.Script.classifyOutput(bitbox.Script.fromASM(scripthashOutput));
      // scripthash

## Interfaces

### opcodes

    {
      OP_FALSE: 0
      OP_0: 0
      OP_PUSHDATA1: 76
      OP_PUSHDATA2: 77
      OP_PUSHDATA4: 78
      OP_1NEGATE: 79
      OP_RESERVED: 80
      OP_TRUE: 81
      OP_1: 81
      OP_2: 82
      OP_3: 83
      OP_4: 84
      OP_5: 85
      OP_6: 86
      OP_7: 87
      OP_8: 88
      OP_9: 89
      OP_10: 90
      OP_11: 91
      OP_12: 92
      OP_13: 93
      OP_14: 94
      OP_15: 95
      OP_16: 96

      OP_NOP: 97
      OP_VER: 98
      OP_IF: 99
      OP_NOTIF: 100
      OP_VERIF: 101
      OP_VERNOTIF: 102
      OP_ELSE: 103
      OP_ENDIF: 104
      OP_VERIFY: 105
      OP_RETURN: 106

      OP_TOALTSTACK: 107
      OP_FROMALTSTACK: 108
      OP_2DROP: 109
      OP_2DUP: 110
      OP_3DUP: 111
      OP_2OVER: 112
      OP_2ROT: 113
      OP_2SWAP: 114
      OP_IFDUP: 115
      OP_DEPTH: 116
      OP_DROP: 117
      OP_DUP: 118
      OP_NIP: 119
      OP_OVER: 120
      OP_PICK: 121
      OP_ROLL: 122
      OP_ROT: 123
      OP_SWAP: 124
      OP_TUCK: 125

      OP_CAT: 126

      OP_SPLIT: 127
      OP_NUM2BIN: 128
      OP_BIN2NUM: 129
      OP_SIZE: 130

      OP_INVERT: 131
      OP_AND: 132 // May 2018 reenabled
      OP_OR: 133 // May 2018 reenabled
      OP_XOR: 134 // May 2018 reenabled
      OP_EQUAL: 135
      OP_EQUALVERIFY: 136
      OP_RESERVED1: 137
      OP_RESERVED2: 138

      OP_1ADD: 139
      OP_1SUB: 140
      OP_2MUL: 141
      OP_2DIV: 142
      OP_NEGATE: 143
      OP_ABS: 144
      OP_NOT: 145
      OP_0NOTEQUAL: 146
      OP_ADD: 147
      OP_SUB: 148
      OP_MUL: 149
      OP_DIV: 150 // May 2018 reenabled
      OP_MOD: 151 // May 2018 reenabled
      OP_LSHIFT: 152
      OP_RSHIFT: 153

      OP_BOOLAND: 154
      OP_BOOLOR: 155
      OP_NUMEQUAL: 156
      OP_NUMEQUALVERIFY: 157
      OP_NUMNOTEQUAL: 158
      OP_LESSTHAN: 159
      OP_GREATERTHAN: 160
      OP_LESSTHANOREQUAL: 161
      OP_GREATERTHANOREQUAL: 162
      OP_MIN: 163
      OP_MAX: 164

      OP_WITHIN: 165

      OP_RIPEMD160: 166
      OP_SHA1: 167
      OP_SHA256: 168
      OP_HASH160: 169
      OP_HASH256: 170
      OP_CODESEPARATOR: 171
      OP_CHECKSIG: 172
      OP_CHECKSIGVERIFY: 173
      OP_CHECKMULTISIG: 174
      OP_CHECKMULTISIGVERIFY: 175

      OP_NOP1: 176

      OP_NOP2: 177
      OP_CHECKLOCKTIMEVERIFY: 177

      OP_NOP3: 178
      OP_CHECKSEQUENCEVERIFY: 178

      OP_NOP4: 179
      OP_NOP5: 180
      OP_NOP6: 181
      OP_NOP7: 182
      OP_NOP8: 183
      OP_NOP9: 184
      OP_NOP10: 185
      OP_CHECKDATASIG: 186
      OP_CHECKDATASIGVERIFY: 187

      OP_PUBKEYHASH: 253
      OP_PUBKEY: 254
      OP_INVALIDOPCODE: 255
    }

---
title: Memopress
author: Gabriel Cardona
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

[Memo](https://memo.cash/) and [BlockPress](https://www.blockpress.com/) are two very popular on-chain social networks. They use a clever `OP_RETURN` prefixed protocol to write your actions to the blockchain. Later clients can read that data from the chain and recreate your account’s actions. This represents a truly decentralized and censorship resistant social network and it’s only possible on Bitcoin Cash.

Today we’re excited to release [memopress](https://www.npmjs.com/package/memopress)—helper methods for reading/writing to the Bitcoin Cash blockchain per the Memo and BlockPress protocols.

## Usage

Memopress supports encoding and decoding payloads for 100% of each the [Memo](https://memo.cash/protocol) and [BlockPress](https://www.blockpress.com/developers/blockpress-protocol) protocols.

### Install

```bash
npm install memopress --save
```

### Require

```javascript
let memopress = require('memopress')
```

### Encode

#### Memo

```javascript
memopress.encode('0x6d01', 'nakamoto')
// <Buffer 6a 02 6d 01 08 6e 61 6b 61 6d 6f 74 6f>

memopress.encode('0x6d02', 'Hello BITBOX')
// <Buffer 6a 02 6d 02 0c 48 65 6c 6c 6f 20 42 49 54 42 4f 58>

memopress.encode('0x6d03', {
  txHash: '99c38277ce297711b78ff09aa6857417a3b8df1873987b2a17b44b27877972ab',
  message: 'Great!',
})
// <Buffer 6a 02 6d 03 20 ab 72 79 87 27 4b b4 17 2a 7b 98 73 18 df b8 a3 17 74 85 a6 9a f0 8f b7 11 77 29 ce 77 82 c3 99 06 47 72 65 61 74 21>

memopress.encode(
  '0x6d04',
  'c21cdbc06393e291fe325649a6b52409759c1abf98950165f818abd44812ce12'
)
// <Buffer 6a 02 6d 04 20 12 ce 12 48 d4 ab 18 f8 65 01 95 98 bf 1a 9c 75 09 24 b5 a6 49 56 32 fe 91 e2 93 63 c0 db 1c c2>

memopress.encode('0x6d05', 'This is my profile text')
// <Buffer 6a 02 6d 05 17 54 68 69 73 20 69 73 20 6d 79 20 70 72 6f 66 69 6c 65 20 74 65 78 74>

memopress.encode(
  '0x6d06',
  'bitcoincash:qzzsecxwv8gm34xmhh360ytuzeqxrja7zsnfvlg79m'
)
// <Buffer 6a 02 6d 06 36 62 69 74 63 6f 69 6e 63 61 73 68 3a 71 7a 7a 73 65 63 78 77 76 38 67 6d 33 34 78 6d 68 68 33 36 30 79 74 75 7a 65 71 78 72 6a 61 37 7a ... >

memopress.encode(
  '0x6d07',
  'bitcoincash:qzzsecxwv8gm34xmhh360ytuzeqxrja7zsnfvlg79m'
)
// <Buffer 6a 02 6d 07 36 62 69 74 63 6f 69 6e 63 61 73 68 3a 71 7a 7a 73 65 63 78 77 76 38 67 6d 33 34 78 6d 68 68 33 36 30 79 74 75 7a 65 71 78 72 6a 61 37 7a ... >

memopress.encode('0x6d0C', { topic: 'Crypto', message: 'BCH is Bitcoin' })
// <Buffer 6a 02 6d 0c 06 43 72 79 70 74 6f 0e 42 43 48 20 69 73 20 42 69 74 63 6f 69 6e>
```

#### BlockPress

```javascript
memopress.encode('0x8d01', 'nakamoto')
// <Buffer 6a 02 8d 01 08 6e 61 6b 61 6d 6f 74 6f>

memopress.encode('0x8d02', 'Hello BITBOX')
// <Buffer 6a 02 8d 02 0c 48 65 6c 6c 6f 20 42 49 54 42 4f 58>

memopress.encode('0x8d03', {
  txHash: '7fa9329e7a7613fd51c1990d959c42c2b077e9dd962c7c095e9b7d44fe568af2',
  message: 'Great!',
})
// <Buffer 6a 02 8d 03 20 7f a9 32 9e 7a 76 13 fd 51 c1 99 0d 95 9c 42 c2 b0 77 e9 dd 96 2c 7c 09 5e 9b 7d 44 fe 56 8a f2 06 47 72 65 61 74 21>

memopress.encode(
  '0x8d04',
  'c21cdbc06393e291fe325649a6b52409759c1abf98950165f818abd44812ce12'
)
// <Buffer 6a 02 8d 04 20 12 ce 12 48 d4 ab 18 f8 65 01 95 98 bf 1a 9c 75 09 24 b5 a6 49 56 32 fe 91 e2 93 63 c0 db 1c c2>

memopress.encode(
  '0x8d06',
  'bitcoincash:qzzsecxwv8gm34xmhh360ytuzeqxrja7zsnfvlg79m'
)
// <Buffer 6a 02 8d 06 36 62 69 74 63 6f 69 6e 63 61 73 68 3a 71 7a 7a 73 65 63 78 77 76 38 67 6d 33 34 78 6d 68 68 33 36 30 79 74 75 7a 65 71 78 72 6a 61 37 7a ... >

memopress.encode(
  '0x8d07',
  'bitcoincash:qzzsecxwv8gm34xmhh360ytuzeqxrja7zsnfvlg79m'
)
// <Buffer 6a 02 8d 07 36 62 69 74 63 6f 69 6e 63 61 73 68 3a 71 7a 7a 73 65 63 78 77 76 38 67 6d 33 34 78 6d 68 68 33 36 30 79 74 75 7a 65 71 78 72 6a 61 37 7a ... >

memopress.encode(
  '0x8d08',
  'https://ipfs.pics/ipfs/QmXaWRFhu6G6yCcy7dftsiehY8obJmX17hRtZr7BHyCbZC'
)
// <Buffer 6a 02 8d 08 45 68 74 74 70 73 3a 2f 2f 69 70 66 73 2e 70 69 63 73 2f 69 70 66 73 2f 51 6d 58 61 57 52 46 68 75 36 47 36 79 43 63 79 37 64 66 74 73 69 ... >

memopress.encode('0x8d09', {
  mediaType: '0x01',
  mediaPayload: 'https://bit.ly/2FYUrea',
  mediaText: 'shamone',
})
// <Buffer 6a 02 8d 09 00 16 68 74 74 70 73 3a 2f 2f 62 69 74 2e 6c 79 2f 32 46 59 55 72 65 61 07 73 68 61 6d 6f 6e 65>

memopress.encode(
  '0x8d10',
  'https://ipfs.pics/ipfs/QmXaWRFhu6G6yCcy7dftsiehY8obJmX17hRtZr7BHyCbZC'
)
// <Buffer 6a 02 8d 10 45 68 74 74 70 73 3a 2f 2f 69 70 66 73 2e 70 69 63 73 2f 69 70 66 73 2f 51 6d 58 61 57 52 46 68 75 36 47 36 79 43 63 79 37 64 66 74 73 69 ... >

memopress.encode('0x8d11', { community: 'Crypto', message: 'BCH is Bitcoin' })
// <Buffer 6a 02 8d 11 06 43 72 79 70 74 6f 0e 42 43 48 20 69 73 20 42 69 74 63 6f 69 6e>
```

### Decode

#### Memo

```javascript
memopress.decode('OP_RETURN 365 746573742032')
// { service: 'memo',
//   prefix: '0x6d01',
//   action: 'Set Name',
//   message: 'test 2' }

memopress.decode(
  'OP_RETURN 621 4c6f72656d20697073756d20646f6c6f722073697420616d65742c20636f6e73656374657475722061646970697363696e6720656c6974'
)
// { service: 'memo',
//   prefix: '0x6d02',
//   action: 'Post Memo',
//   message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }

memopress.decode(
  'OP_RETURN 877 fe32a4bc5a52ce9b861725462ad7d5d223d3554532eb172c7d29feca5722d44c 5468616e6b7320666f72207469707072626f7421'
)
// { service: 'memo',
//   prefix: '0x6d03',
//   action: 'Reply',
//   message: 'Thanks for tipprbot!' }

memopress.decode(
  'OP_RETURN 1133 1f1f63293441c673033f9112bab1b3071b2f06f68d3032a23ba9eda819694520'
)
// { service: 'memo',
//   prefix: '0x6d04',
//   action: 'Like',
//   message: '\u001f\u001fc)4AFs\u0003?\u0011\u0012:13\u0007\u001b/\u0006v\r02";)m(\u0019iE ' }

memopress.decode(
  'OP_RETURN 1389 566572696669636174696f6e3a2068747470733a2f2f747769747465722e636f6d2f6d656d6f6263682f7374617475732f393932303333363532373635373030303937'
)
// { service: 'memo',
//   prefix: '0x6d05',
//   action: 'Set Profile Text',
//   message: 'Verification: https://twitter.com/memobch/status/992033652765700097' }

memopress.decode('OP_RETURN 1645 fe686b9b2ab589a3cb3368d02211ca1a9b88aa42')
// { service: 'memo',
//   prefix: '0x6d06',
//   action: 'Follow',
//   message: '~hk\u001b*5\t#K3hP"\u0011J\u001a\u001b\b*B' }

memopress.decode('OP_RETURN 1901 fe686b9b2ab589a3cb3368d02211ca1a9b88aa42')
// { service: 'memo',
//   prefix: '0x6d07',
//   action: 'Unfollow',
//   message: '~hk\u001b*5\t#K3hP"\u0011J\u001a\u001b\b*B' }

memopress.decode(
  'OP_RETURN 3181 4c657427732074616c6b2061626f757420546563686e6f -10985456'
)
// { service: 'memo',
//   prefix: '0x6d0C',
//   action: 'Post Topic Message',
//   message: 'Let\'s talk about Techno' }
```

#### Block

```javascript
memopress.decode('OP_RETURN 397 6e616b616d6f746f')
// { service: 'blockpress',
//   prefix: '0x8d01',
//   action: 'Set Name',
//   message: 'nakamoto' }

memopress.decode('OP_RETURN 653 48656c6c6f20576f726c6421')
// { service: 'blockpress',
//   prefix: '0x8d02',
//   action: 'Create Text Post',
//   message: 'Hello World!' }

memopress.decode(
  'OP_RETURN 909 0ea5a448dbcf9fc0b05622341dfc59b90419fc9b0c0d6865ecaaed9031f14d17 546869732069732061206c6f6e67207265706c7920546869732069732061206c6f6e67207265706c7920313233'
)
// { service: 'blockpress',
//   prefix: '0x8d03',
//   action: 'Reply',
//   message: '\u000e%$H[O\u001f@0V"4\u001d|Y9\u0004\u0019|\u001b\f\rhel*m\u00101qM\u0017' }

memopress.decode(
  'OP_RETURN 1165 829f421e381e4b84e4f1ac4ac121767eeb41d4280c555dc4cb1ae952307ee78f'
)
// { service: 'blockpress',
//   prefix: '0x8d04',
//   action: 'Like',
//   message: '\u0002\u001fB\u001e8\u001eK\u0004dq,JA!v~kAT(\fU]DK\u001aiR0~g\u000f' }

memopress.decode(
  'OP_RETURN 1677 313551464a6a4752726a4a764a6f53796666596735476232795674374b425979676b'
)
// { service: 'blockpress',
//   prefix: '0x8d06',
//   action: 'Follow',
//   message: '15QFJjGRrjJvJoSyffYg5Gb2yVt7KBYygk' }

memopress.decode(
  'OP_RETURN 1933 313551464a6a4752726a4a764a6f53796666596735476232795674374b425979676b'
)
// { service: 'blockpress',
//   prefix: '0x8d07',
//   action: 'Unfollow',
//   message: '15QFJjGRrjJvJoSyffYg5Gb2yVt7KBYygk' }

memopress.decode(
  'OP_RETURN 2189 68747470733a2f2f697066732e706963732f697066732f516d5861575246687536473679436379376466747369656859386f624a6d5831376852745a723742487943625a43'
)
// { service: 'blockpress',
//   prefix: '0x8d08',
//   action: 'Set Profile Header',
//   message: 'https://ipfs.pics/ipfs/QmXaWRFhu6G6yCcy7dftsiehY8obJmX17hRtZr7BHyCbZC' }

memopress.decode(
  'OP_RETURN 2445 1 68747470733a2f2f6269742e6c792f32465955726561 4e65772023666561747572653a2023696d61676520706f737473206f6e20426c6f636b50726573732e20456e6a6f7921'
)
// { service: 'blockpress',
//   prefix: '0x8d09',
//   action: 'Create Media Post',
//   message: 'https://bit.ly/2FYUrea' }

memopress.decode(
  'OP_RETURN 4237 68747470733a2f2f692e696d6775722e636f6d2f4a306b5239506d2e6a7067'
)
// { service: 'blockpress',
//   prefix: '0x8d10',
//   action: 'Set Profile Avatar',
//   message: 'https://i.imgur.com/J0kR9Pm.jpg' }

memopress.decode(
  'OP_RETURN 4493 30324 4c6f73743a2054686520436f6d706c65746520436f6c6c656374696f6e202d20536561736f6e732031202d2036'
)
// { service: 'blockpress',
//   prefix: '0x8d11',
//   action: 'Create Post in Community',
//   message: 'Lost: The Complete Collection - Seasons 1 - 6' }
```

## Summary

Memo/BlockPress are innovative ideas that demonstrate features which exist on the Bitcoin Cash blockchain and nowhere else. As the Bitcoin Cash ecosystem continues to mature BITBOX will release open source tools which accelerate how quickly devs can adopt them.

### More Info

- [BITBOX](/bitbox)
- [memopress](https://github.com/Bitcoin-com/memopress)

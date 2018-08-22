---
  title: RawTransactions
  icon: exchange
  ordinal: 14
---

### `decodeRawTransaction`

Return an Array of JSON objects representing the serialized, hex\-encoded transactions.

#### Arguments

1.  hexstrings `Array` required: Array with maximum of 20 transaction hex strings.

#### Result

txs `Array`

#### Examples


      BITBOX.RawTransactions.decodeRawTransaction(['01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000']).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });

      // [{ txid: 'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
      // hash: 'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
      // size: 191,
      // version: 1,
      // locktime: 0,
      // vin:
      //  [ { txid: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
      //      vout: 0,
      //      scriptSig: [Object],
      //      sequence: 4294967295 } ],
      // vout: [ { value: 12.5, n: 0, scriptPubKey: [Object] } ] }]


### `decodeScript`

Decode an Array of hex\-encoded scripts.

#### Arguments

1.  hexstrings `Array` required: Array with maximum of 20 hex encoded scripts.

#### Result

decodedScripts `Array`

#### Examples


      BITBOX.RawTransactions.decodeScript(['4830450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed592012102e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16']).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });

      // [{ asm: '30450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed59201 02e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16',
      // type: 'nonstandard',
      // p2sh: 'bitcoincash:pqwndulzwft8dlmqrteqyc9hf823xr3lcc7ypt74ts' }]


### `getRawTransaction`

Return the raw transaction data. If verbose is 'true', returns an Object with information about 'txid'. If verbose is 'false' or omitted, returns a string that is serialized, hex\-encoded data for 'txid'.

#### Arguments

1.  txids `Array` required: Array with maximum of 20 transaction ids.
2.  verbose (Bool, optional, default=false): If false, return a string, otherwise return a json object

#### Examples


      BITBOX.RawTransactions.getRawTransaction(["0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098"]).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });

      // 01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000


### `sendRawTransaction`

Submits raw transaction (serialized, hex\-encoded) to local node and network. Also see createrawtransaction and signrawtransaction calls.

#### Arguments

1.  hexstrings `Array` required: Array of raw hex strings

#### Result

hex `Array` Array of txids

#### Examples


      // single tx
      BITBOX.RawTransactions.sendRawTransaction(["01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000"]).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
      // ['0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098']

      // multiple txs
      let hex1 = '020000000148735fcdac94c51459f7d8f787cf363c618125bc0f9092092ed2ebccd0f5557e0000000069463043021f4e3dd1fadb3e8fabdbd94b125d7e97932f72bb08118407e49cf505e7f5f63b022062eee3c5d94b4bc6b68ab0018876e9661b257f1e8487173876faccf7d3a2220541210313299e9ec7a9e62789094b850ab6f71df7c39af7c03568027c24d0bc9eda930dffffffff017b140000000000001976a914e11ed7fd6416d8f5c58a1cb3e1b0005c3cab092f88ac00000000';
      let hex2 = '0200000001a1b5849a5026642d5e28abdb4e98aa483adc20daab44c39e2f41acf72aa8c845000000006b483045022100994ab28c7df64852057c3ab965148ef2b5456233c12774087e88a62bbc27d4230220504d1096ac52915d32d2356ba5ae82f202543b88c24b4643800919e85da333984121039c48c06ce551810a2eeedf516c77995a922ca65c4e9e9a0a07288a6fae149eb2ffffffff013b1e0000000000001976a9140377597dd75d41398259c36d05a5a68ba0af782d88ac00000000';
      BITBOX.RawTransactions.sendRawTransaction([hex1, hex2]).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
      //  [ 'af9be699a4987286cbf8837d935f4f91b319271551163597e969bacc66b6565f', '6e841510f3e4c1a5fae618596241e8be12b1c24f73754f705f8973076afaa6fe' ]

---
title: Utils
icon: exchange
ordinal: 6
---

### `list`

List all tokens or list single token by id

#### Arguments

1.  id : `String` optional. The token id

#### Result

tokens : `Array` or `Object`. tokens or single token

#### Examples

##### List all tokens

    (async () => {
      try {
        let list = await SLP.Utils.list();
        console.log(list);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    [ { id: 'a72788409fa0ff38556e0d26d17edcc8e6ac04dcdc4904eeb5297c6096dc6e75',
      timestamp: '2019-02-10 03:24',
      symbol: 'C',
      name: 'Contract Name',
      documentUri: 'documentUri',
      documentHash:
       '1000000000000000000000000000000000000000000000000000000000000001',
      decimals: 1,
      initialTokenQty: 10 },
      { id: 'e6fe00fc1f53320b72bd5cbed76c0c82e5edfea1b6f9cb0f71bfb28c3b6211a8',
      timestamp: '2019-02-05 04:01',
      symbol: 'TESTNET3',
      name: 'SLP SDK Testnet Token 3',
      documentUri: 'badger@bitcoin.com',
      documentHash: '',
      decimals: 8,
      initialTokenQty: 100 }]

##### List single token

     (async () => {
        try {
          let list = await SLP.Utils.list(
            "b3f4f132dc3b9c8c96316346993a8d54d729715147b7b11aa6c8cd909e955313"
          );
          console.log(list);
        } catch (error) {
          console.error(error);
        }
      })();

      // returns
      { id: 'b3f4f132dc3b9c8c96316346993a8d54d729715147b7b11aa6c8cd909e955313',
        timestamp: '2019-01-30 21:56',
        symbol: 'SLPJS',
        name: 'Awesome SLPJS README Token',
        documentUri: 'info@simpleledger.io',
        documentHash: '',
        decimals: 2,
        initialTokenQty: 1000000 }

### `balancesForAddress`

Return all balances for an address

#### Arguments

1.  address : `String` required. The address in legacy, cash or slp address format

#### Result

balances : `Object`. The address's balances

#### Examples

    (async () => {
      try {
        let balances = await SLP.Utils.balancesForAddress('simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk');
        console.log(balances);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    // [ { tokenId:
    //      '968ff0cc4c93864001e03e9524e351250b94ec56150fa4897f65b0b6477d44d4',
    //     balance: '9980',
    //     decimalCount: 9 },
    //   { tokenId:
    //      'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
    //     balance: '617',
    //     decimalCount: 8 },
    //   { tokenId:
    //      'b96304d12f1bbc2196df582516410e55a9b34e13c7b4585bf5c1770af30d034f',
    //     balance: '1',
    //     decimalCount: 0 },
    //   { tokenId:
    //      'a436c8e1b6bee3d701c6044d190f76f774be83c36de8d34a988af4489e86dd37',
    //     balance: '776',
    //     decimalCount: 7 } ]

    // balances for Cash Address
    (async () => {
      try {
        let balances = await SLP.Utils.balancesForAddress('bitcoincash:qr4zg7xth86yzq94gl8jvnf5z4wuupzt3g4hl47n9y');
        console.log(balances);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    // [ { tokenId:
    // '467969e067f5612863d0bf2daaa70dede2c6be03abb6fd401c5ef6e1e1f1f5c5',
    // balance: '507',
    // decimalCount: 2 } ]

    // balances for Legacy Address
    (async () => {
      try {
        let balances = await SLP.Utils.balancesForAddress('1NM2ozrXVSnMRm66ua6aGeXgMsU7yqwqLS');
        console.log(balances);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    // [ { tokenId:
    // '467969e067f5612863d0bf2daaa70dede2c6be03abb6fd401c5ef6e1e1f1f5c5',
    // balance: '507',
    // decimalCount: 2 } ]

### `balance`

Return single balance for an address by token id

#### Arguments

1.  address : `String` required. The address in legacy, cash or slp address format
2.  id : `String` required. The token id

#### Result

balance : `Object`. the address's balance for single token

#### Examples

    // single balance for SLP Address
    (async () => {
      try {
        let balance = await SLP.Utils.balance(
          "simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk",
          "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
        );
        console.log(balance);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    // { tokenId:
    //   'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
    //   balance: '617',
    //   decimalCount: 8 }

    // single balance for Cash Address
    (async () => {
      try {
        let balance = await SLP.Utils.balance(
          "bitcoincash:qr5agtachyxvrwxu76vzszan5pnvuzy8dumh7ynrwg",
          "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
        );
        console.log(balance);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    // { tokenId:
    //   'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
    //   balance: '617',
    //   decimalCount: 8 }

    // single balance for Legacy Address
    (async () => {
      try {
        let balance = await SLP.Utils.balance(
          "1DwQqpWc8pzaRydCmiJsPdoqCzmjSQQbp8",
          "467969e067f5612863d0bf2daaa70dede2c6be03abb6fd401c5ef6e1e1f1f5c5"
        );
        console.log(balance);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    // { tokenId:
    //    '467969e067f5612863d0bf2daaa70dede2c6be03abb6fd401c5ef6e1e1f1f5c5',
    //   balance: '1234',
    //   decimalCount: 2 }

### `validateTxid`

Validate that txid is an SLP transaction

#### Arguments

1.  txid : `String` or `Array` required. The transaction id(s) to validate

#### Result

validated : `Array`

#### Examples

    // validate single SLP txid
    (async () => {
      try {
        let validated = await SLP.Utils.validateTxid(
          "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
        );
        console.log(validated);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    [ { txid:
     'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
    valid: true } ]

    // validate multiple SLP txids
    (async () => {
      try {
        let validated = await SLP.Utils.validateTxid([
          "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb",
          "00ea27261196a411776f81029c0ebe34362936b4a9847deb1f7a40a02b3a1476"
        ]);
        console.log(validated);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    [ { txid:
         'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
        valid: true },
      { txid:
         '00ea27261196a411776f81029c0ebe34362936b4a9847deb1f7a40a02b3a1476',
        valid: true } ]

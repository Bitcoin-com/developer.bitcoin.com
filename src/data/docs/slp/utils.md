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
    [ { id: '545cba6f72a08cbcb08c7d4e8166267942e8cb9a611328805c62fa538e861ba4',
     timestamp: '2018-08-14 13:42',
     symbol: '',
     name: '',
     document: '' },
    { id: '83bfe019fcf976142c55e7c0ad4a429f4be1bc2cb138bd8d0bab8dd4cd4758c4',
     timestamp: '2018-08-14 13:57',
     symbol: '',
     name: '',
     document: '' },
    { id: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
     timestamp: '2018-08-14 17:53',
     symbol: '',
     name: '',
     document: ' } ]

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
      // { id:
      //   'b3f4f132dc3b9c8c96316346993a8d54d729715147b7b11aa6c8cd909e955313',
      //   timestamp: '2019-01-30 20:56',
      //   symbol: 'SLPJS',
      //   name: 'Awesome SLPJS README Token',
      //   document: 'info@simpleledger.io'
      // }

### `balancesForAddress`

Return all balances for an address

#### Arguments

1.  address : `String` required. The address in legacy, cash or slp address format

#### Result

balances : `Object`. the address's balances

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
    // [
    //   { '968ff0cc4c93864001e03e9524e351250b94ec56150fa4897f65b0b6477d44d4': 9980000000000 },
    //   { df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb: 61700000000 },
    //   { b96304d12f1bbc2196df582516410e55a9b34e13c7b4585bf5c1770af30d034f: 1 },
    //   { a436c8e1b6bee3d701c6044d190f76f774be83c36de8d34a988af4489e86dd37: 7760000000 }
    // ]

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
    // [ { '467969e067f5612863d0bf2daaa70dede2c6be03abb6fd401c5ef6e1e1f1f5c5': 50700 } ]

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
    // [ { '467969e067f5612863d0bf2daaa70dede2c6be03abb6fd401c5ef6e1e1f1f5c5': 50700 } ]

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
    // 61700000000

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
    // 61700000000

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
    // 123400

### `validateTxid`

Validate that txid is an SLP transaction

#### Arguments

1.  txid : `String` required. The transaction id to validate
2.  network : `String` required. mainnet or testnet

#### Result

isValid : `Boolean`

#### Examples

    // validate SLP txid
    (async () => {
      try {
        let isValid = await SLP.Utils.validateTxid(
          "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb",
          "mainnet"
        );
        console.log(isValid);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    true

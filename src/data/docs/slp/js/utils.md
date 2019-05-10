---
title: Utils
icon: exchange
ordinal: 8
---

### `list`

List all tokens or list single token by id

#### Arguments

1.  id : `string` or `Array` optional. The token id(s)

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
    [ { decimals: 5,
      timestamp: '2019-04-20 05:03',
      versionType: 1,
      documentUri: 'developer.bitcoin.com',
      symbol: 'MYSTERY',
      name: 'Mystery',
      containsBaton: true,
      id:
       '10528f22fc20422f7c1075a87ed7270c0a17bc17ea79c6e2f426c6cc14bb25f2',
      documentHash:
       '1010101010101010101010101010101010101010101010101010101010101010',
      initialTokenQty: 500,
      blockCreated: 579041,
      blockLastActiveSend: null,
      blockLastActiveMint: null,
      txnsSinceGenesis: 1,
      validAddresses: 1,
      totalMinted: 500,
      totalBurned: 0,
      circulatingSupply: 500,
      mintingBatonStatus: 'ALIVE' },
      { decimals: 8,
      timestamp: '2019-04-20 04:54',
      versionType: 1,
      documentUri: 'developer.bitcoin.com',
      symbol: 'ENIGMA',
      name: 'Enigma',
      containsBaton: true,
      id:
      '113c55921fe29919ff84e53a6d5af39ed9d983a1c3b3000f27125688489935fa',
      documentHash:
      '1010101010101010101010101010101010101010101010101010101010101010',
      initialTokenQty: 1234,
      blockCreated: 579040,
      blockLastActiveSend: null,
      blockLastActiveMint: 579040,
      txnsSinceGenesis: 2,
      validAddresses: 2,
      totalMinted: 1334,
      totalBurned: 0,
      circulatingSupply: 1334,
      mintingBatonStatus: 'ALIVE' }
    ]

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
      { decimals: 8,
      timestamp: '2019-04-20 04:54',
      versionType: 1,
      documentUri: 'developer.bitcoin.com',
      symbol: 'ENIGMA',
      name: 'Enigma',
      containsBaton: true,
      id:
      '113c55921fe29919ff84e53a6d5af39ed9d983a1c3b3000f27125688489935fa',
      documentHash:
      '1010101010101010101010101010101010101010101010101010101010101010',
      initialTokenQty: 1234,
      blockCreated: 579040,
      blockLastActiveSend: null,
      blockLastActiveMint: 579040,
      txnsSinceGenesis: 2,
      validAddresses: 2,
      totalMinted: 1334,
      totalBurned: 0,
      circulatingSupply: 1334,
      mintingBatonStatus: 'ALIVE' }

##### List multiple tokens by tokenIds

     (async () => {
        try {
          let list = await SLP.Utils.list([
            "fa6c74c52450fc164e17402a46645ce494a8a8e93b1383fa27460086931ef59f",
            "38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0"
          ]);
          console.log(list);
        } catch (error) {
          console.error(error);
        }
      })();

      // returns
      [ { decimals: 0,
    timestamp: '2019-02-18 14:47',
    versionType: 1,
    documentUri: 'https://simpleledger.cash',
    symbol: 'SLP',
    name: 'Official SLP Token',
    containsBaton: true,
    id:
     'fa6c74c52450fc164e17402a46645ce494a8a8e93b1383fa27460086931ef59f',
    documentHash: null,
    initialTokenQty: 18446744073709552000,
    blockCreated: 570305,
    blockLastActiveSend: 580275,
    blockLastActiveMint: 575914,
    txnsSinceGenesis: 4537,
    validAddresses: 164,
    totalMinted: 19414628793626410000,
    totalBurned: 18446568350267302000,
    circulatingSupply: 968060443359109600,
    mintingBatonStatus: 'ALIVE' },
    { decimals: 8,
    timestamp: '2019-02-14 03:11',
    versionType: 1,
    documentUri: 'psfoundation.cash',
    symbol: 'PSF',
    name: 'Permissionless Software Foundation',
    containsBaton: true,
    id:
    '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
    documentHash: null,
    initialTokenQty: 19882.09163133,
    blockCreated: 569658,
    blockLastActiveSend: 580153,
    blockLastActiveMint: null,
    txnsSinceGenesis: 51,
    validAddresses: 9,
    totalMinted: 19882.09163133,
    totalBurned: 0.0534241,
    circulatingSupply: 19882.03820723,
    mintingBatonStatus: 'ALIVE' } ]

### `balancesForAddress`

Return all balances for an address

#### Arguments

1.  address : `string` required. The address in legacy, cash or slp address format

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
    //     slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
    //     decimalCount: 9 },
    //   { tokenId:
    //      'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
    //     balance: '617',
    //     slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
    //     decimalCount: 8 },
    //   { tokenId:
    //      'b96304d12f1bbc2196df582516410e55a9b34e13c7b4585bf5c1770af30d034f',
    //     balance: '1',
    //     slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
    //     decimalCount: 0 },
    //   { tokenId:
    //      'a436c8e1b6bee3d701c6044d190f76f774be83c36de8d34a988af4489e86dd37',
    //     balance: '776',
    //     slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
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

1.  address : `string` required. The address in legacy, cash or slp address format
2.  id : `string` required. The token id

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

1.  txid : `string` or `Array` required. The transaction id(s) to validate

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

### `balancesForToken`

List all balances for tokenId

#### Arguments

1.  tokenId: `string` required. The tokenId

#### Result

balances: `Array`

#### Examples

    (async () => {
      try {
        let balances = await SLP.Utils.balancesForToken(
          "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
        )
        console.log(balances)
      } catch (error) {
        console.error(error)
      }
    })()

    // returns
    [
      {
        tokenId: "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb",
        tokenBalance: 20,
        slpAddress: 'simpleledger:qp4g0q97tq53pasnxk2rs570c6573qvylunsf5gy9e'
      },
      {
        tokenId: "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb",
        tokenBalance: 335.55,
        slpAddress: 'simpleledger:qqcraw7q0ys3kg4z6f2zd267fhg2093c5c0spfk03f'
      }
    ]

### `tokenStats`

Stats for token by tokenId

#### Arguments

1.  tokenId: `string` required. The tokenId

#### Result

stats: `Object`

#### Examples

    (async () => {
      try {
        let stats = await SLP.Utils.tokenStats(
          "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
        )
        console.log(stats)
      } catch (error) {
        console.error(error)
      }
    })()

    // returns
    { tokenId:
      'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
      documentUri: '',
      symbol: 'NAKAMOTO',
      name: 'NAKAMOTO',
      decimals: 8,
      txnsSinceGenesis: 367,
      validUtxos: 248,
      validAddresses: 195,
      circulatingSupply: 20995990,
      totalBurned: 4010,
      totalMinted: 21000000,
      satoshisLockedUp: 135408
    }

### `transactions`

SLP Transactions by tokenId and address

#### Arguments

1.  tokenId: `string` required. The tokenId
2.  address: `string` required. The address

#### Result

transactions: `Array`

#### Examples

    (async () => {
      try {
        let transactions = await SLP.Utils.transactions(
          "495322b37d6b2eae81f045eda612b95870a0c2b6069c58f70cf8ef4e6a9fd43a",
          "qrhvcy5xlegs858fjqf8ssl6a4f7wpstaqlsy4gusz"
        )
        console.log(transactions)
      } catch (error) {
        console.error(error)
      }
    })()

    // returns
    [
      {
        "txid": "27e27170b546f05b2af69d6eddff8834038facf5d81302e9e562df09a5c4445f",
        "tokenDetails": {
          "valid": true,
          "detail": {
            "decimals": null,
            "tokenIdHex": "495322b37d6b2eae81f045eda612b95870a0c2b6069c58f70cf8ef4e6a9fd43a",
            "timestamp": null,
            "transactionType": "SEND",
            "versionType": 1,
            "documentUri": null,
            "documentSha256Hex": null,
            "symbol": null,
            "name": null,
            "batonVout": null,
            "containsBaton": null,
            "genesisOrMintQuantity": null,
            "sendOutputs": [
              {
                "$numberDecimal": "0"
              },
              {
                "$numberDecimal": "25"
              },
              {
                "$numberDecimal": "77"
              }
            ]
          },
          "invalidReason": null,
          "schema_version": 30
        }
      }
    ]

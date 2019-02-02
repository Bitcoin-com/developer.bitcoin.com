---
title: Utils
icon: exchange
ordinal: 6
---

### `list`

List all tokens or list single token by id

#### Arguments

1.  id `String` optional: The token id

#### Result

tokens `Array` or `Object`: tokens or single token

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

1.  address `String` required: The SLP Address

#### Result

balances `Object`: the address's balances

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
    { satoshis_available_bch: 11125547,
      satoshis_in_slp_baton: 0,
      satoshis_in_slp_token: 2184,
      satoshis_in_invalid_token_dag: 0,
      satoshis_in_invalid_baton_dag: 0,
      slpTokenBalances:
       { '968ff0cc4c93864001e03e9524e351250b94ec56150fa4897f65b0b6477d44d4': BigNumber { s: 1, e: 12, c: [Array] },
         df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb: BigNumber { s: 1, e: 10, c: [Array] },
         b96304d12f1bbc2196df582516410e55a9b34e13c7b4585bf5c1770af30d034f: BigNumber { s: 1, e: 0, c: [Array] },
         a436c8e1b6bee3d701c6044d190f76f774be83c36de8d34a988af4489e86dd37: BigNumber { s: 1, e: 9, c: [Array] } },
      slpTokenUtxos:
       { '968ff0cc4c93864001e03e9524e351250b94ec56150fa4897f65b0b6477d44d4': [ [Object] ],
         df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb: [ [Object] ],
         b96304d12f1bbc2196df582516410e55a9b34e13c7b4585bf5c1770af30d034f: [ [Object] ],
         a436c8e1b6bee3d701c6044d190f76f774be83c36de8d34a988af4489e86dd37: [ [Object] ] },
      slpBatonUtxos: {},
      nonSlpUtxos:
       [ { satoshis: 700000,
           txid:
            '5c8bf9f460ab65b7bb9a768d0c6e4c802bf7bb992329d4aae7bc9ccd463e90b9',
           amount: 0.007,
           confirmations: 63,
           height: 567900,
           vout: 0,
           cashAddress: 'bitcoincash:qr5agtachyxvrwxu76vzszan5pnvuzy8dumh7ynrwg',
           legacyAddress: '1NKNdfgPq1EApuNaf5mrNRUPbwVHQt3MeB',
           scriptPubKey: '76a914e9d42fb8b90cc1b8dcf698280bb3a066ce08876f88ac',
           tx: [Object],
           slpUtxoJudgement: 0 },
         { satoshis: 10425547,
           txid:
            '9c91a2d9c0f59a10a55cabea37ea1f41ecd6ffee56bca8f459e635d9832652f6',
           amount: 0.10425547,
           confirmations: 162,
           height: 567801,
           vout: 1,
           cashAddress: 'bitcoincash:qr5agtachyxvrwxu76vzszan5pnvuzy8dumh7ynrwg',
           legacyAddress: '1NKNdfgPq1EApuNaf5mrNRUPbwVHQt3MeB',
           scriptPubKey: '76a914e9d42fb8b90cc1b8dcf698280bb3a066ce08876f88ac',
           tx: [Object],
           slpUtxoJudgement: 0 } ],
      invalidTokenUtxos: [],
      invalidBatonUtxos: [] }

### `Balance`

Return single balance for an address by token id

#### Arguments

1.  address `String` required: The SLP Address
2.  id `String` required: The token id

#### Result

balance `Object`: the address's balance for single token

#### Examples

    (async () => {
      try {
        let balance = await SLP.Utils.balance(
          "simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk",
          "047918c612e94cce03876f1ad2bd6c9da43b586026811d9b0d02c3c3e910f972"
        );
        console.log(balance);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    BigNumber { s: 1, e: 10, c: [ 61700000000 ] }

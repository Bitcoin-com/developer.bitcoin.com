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

<!-- ### `balancesForAddress`

Return all balances for an address

#### Arguments

1.  address `String` required: The SLP Address

#### Result

balances `Object`: the address's balances

#### Examples

    (async () => {
      try {
        let balances = await SLP.Utils.balancesForAddress('simpleledger:qz9tzs6d5097ejpg279rg0rnlhz546q4fsnck9wh5m');
        console.log(balances);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    { satoshis_available: 1092,
      satoshis_locked_in_minting_baton: 0,
      satoshis_locked_in_token: 1092,
      '1cda254d0a995c713b7955298ed246822bee487458cd9747a91d9e81d9d28125': '995',
      '047918c612e94cce03876f1ad2bd6c9da43b586026811d9b0d02c3c3e910f972': '100',
      slpAddress: 'simpleledger:qz9tzs6d5097ejpg279rg0rnlhz546q4fsnck9wh5m',
      cashAddress: 'bitcoincash:qz9tzs6d5097ejpg279rg0rnlhz546q4fslra7mh29',
      legacyAddress: '1DeLbv5EMzLEFDvQ8wZiKeSuPGGtSSz5HP' }

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
          "simpleledger:qz9tzs6d5097ejpg279rg0rnlhz546q4fsnck9wh5m",
          "047918c612e94cce03876f1ad2bd6c9da43b586026811d9b0d02c3c3e910f972"
        );
        console.log(balance);
      } catch (error) {
        console.error(error);
      }
    })();

    // returns
    { id: '047918c612e94cce03876f1ad2bd6c9da43b586026811d9b0d02c3c3e910f972',
     timestamp: '2018-09-22 14:25',
     symbol: 'Ticker',
     name: 'Name',
     document: 'url',
     balance: '100',
     slpAddress: 'simpleledger:qz9tzs6d5097ejpg279rg0rnlhz546q4fsnck9wh5m',
     cashAddress: 'bitcoincash:qz9tzs6d5097ejpg279rg0rnlhz546q4fslra7mh29',
     legacyAddress: '1DeLbv5EMzLEFDvQ8wZiKeSuPGGtSSz5HP' } -->

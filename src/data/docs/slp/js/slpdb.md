---
title: SLPDB
icon: coins
ordinal: 7
---

### `get`

Get SLPDB data by `query`

#### Arguments

1.  query `any`: SLPDB Query

#### Result

result `any`: SLPDB Result

#### Examples

```javascript
;(async () => {
  let SLPSDK = require('slp-sdk')
  let SLP = new SLPSDK()
  let res = await SLP.SLPDB.get({
    v: 3,
    q: {
      db: ['t'],
      find: {},
      limit: 10,
    },
  })
  console.log(res)

  // returns
  //  { t:
  //  [ [Object],
  //    [Object],
  //    [Object],
  //    [Object],
  //    [Object],
  //    [Object],
  //    [Object],
  //    [Object],
  //    [Object],
  //    [Object] ] }

  console.log(res.t[0])

  // returns
  //
  // { _id: '5d43635f4760895f2a312f71',
  // schema_version: 71,
  // lastUpdatedBlock: 593917,
  // tokenDetails:
  //  { decimals: 0,
  //    tokenIdHex:
  //     'c586b4339dfe5f4c3b508a0c6db2531c64ff091065dc47c885291cad6aefbd45',
  //    timestamp: '2019-08-01 21:23:58',
  //    timestamp_unix: 1564694638,
  //    transactionType: 'GENESIS',
  //    versionType: 129,
  //    documentUri: '',
  //    documentSha256Hex: null,
  //    symbol: '',
  //    name: '',
  //    batonVout: null,
  //    containsBaton: false,
  //    genesisOrMintQuantity: '1',
  //    sendOutputs: null },
  // mintBatonUtxo: '',
  // tokenStats:
  //  { block_created: 593918,
  //    block_last_active_send: null,
  //    block_last_active_mint: null,
  //    qty_valid_txns_since_genesis: 1,
  //    qty_valid_token_utxos: 0,
  //    qty_valid_token_addresses: 0,
  //    qty_token_minted: '1',
  //    qty_token_burned: '1',
  //    qty_token_circulating_supply: '0',
  //    qty_satoshis_locked_up: 0,
  //    minting_baton_status: 'NEVER_CREATED' } }
})()
```

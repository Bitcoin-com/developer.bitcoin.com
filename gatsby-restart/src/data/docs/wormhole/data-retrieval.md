---
  title: DataRetrieval
  icon: database
  ordinal: 5
---

### `balancesForAddress`

Returns a list of all token balances for a given address.

#### Arguments

1.  address `String` required

#### Result

array `Array` of JSON Objects

#### Examples


    (async () => {
      let balances = await Wormhole.DataRetrieval.balancesForAddress("bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg");
      console.log(balances);
    })()

    // [ { propertyid: 1,
    //  balance: '100.00106300',
    //  reserved: '0.00000000' } ]


### `balancesForId`

Returns a list of token balances for a given currency or property identifier.

#### Arguments

1.  propertyId `Number` required: The property identifier

#### Result

array `Array` of JSON Objects

#### Examples


    (async () => {
      let balances = await Wormhole.DataRetrieval.balancesForId(108);
      console.log(balances);
    })()

    // [ { address: 'bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg',
    //     balance: '1496.0',
    //     reserved: '0.0' },
    //   { address: 'bchtest:qr4g79cjapp02s3zs59gtu3dxu7sgwvp8gmnh9rw97',
    //     balance: '3.0',
    //     reserved: '0.0' },
    //   { address: 'bchtest:qztr275nr423fd79ap4ewlewktawz6t7xux7gdlm0t',
    //     balance: '1.0',
    //     reserved: '0.0' } ]


### `balance`

Returns the token balance for a given address and property.

#### Arguments

1.  address `String` required: The address
2.  propertyId `Number` required: The property identifier

#### Result

obj `Object`

#### Examples


    (async () => {
      let balance = await Wormhole.DataRetrieval.balance("bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", 1);
      console.log(balance);
    })()

    // { balance: '100.00106300', reserved: '0.00000000' }


### `balancesHash`

Returns a hash of the balances for the property.

#### Arguments

1.  propertyId `Number` required: The property to hash balances for

#### Result

obj `Object`

#### Examples


    (async () => {
      let balancesHash = await Wormhole.DataRetrieval.balancesHash(31);
      console.log(balancesHash);
    })()

    // { block: 1250914,
    // blockhash: '000000000000001ad8258ac965843773d56a12979727245a910fb82f306b34e6',
    // propertyid: 31,
    // balanceshash: '55b852781b9995a44c939b64e441ae2724b96f99c8f4fb9a141cfc9842c4b0e3' }


### `crowdSale`

Returns information about a crowdsale.

#### Arguments

1.  propertyId `Number` required: The identifier of the crowdsale
2.  verbose `Boolean` optional: list crowdsale participants (default: false)

#### Result

obj `Object`

#### Examples


    (async () => {
      let crowdSale = await Wormhole.DataRetrieval.crowdSale(31, true);
      console.log(crowdSale);
    })()

    // { propertyid: 31,
    // name: 'qshuaifinalcrowsale',
    // active: false,
    // issuer: 'bchtest:qzk8qa7jp0w9cp7lxkghc6m0aqw3s9c7yg3s5v5m8n',
    // propertyiddesired: 1,
    // precision: '2',
    // tokensperunit: '10.00000000',
    // earlybonus: 10,
    // starttime: 1533020017,
    // deadline: 1533020340,
    // amountraised: '0.00000000',
    // tokensissued: '12345.12',
    // addedissuertokens: '0.00',
    // closedearly: false,
    // maxtokens: false }


### `currentConsensusHash`

Returns the consensus hash for all balances for the current block.

#### Result

obj `Object`

#### Examples


    (async () => {
      let currentConsensusHash = await Wormhole.DataRetrieval.currentConsensusHash();
      console.log(currentConsensusHash);
    })()

    // { block: 1250268,
    // blockhash: '00000000000002d60ea1e020b5da0732f7fab9330fe25137fc5b1eb0fb7269cf',
    // consensushash: 'b6af1e33348a01dbf32b554ab71b65f8b5ade6ea0d8fd5123c1b27da57a22fe5' }


### `feeShare`

Returns the percentage share of fees distribution applied to the wallet (default) or address (if supplied).

#### Arguments

1.  address `String` optional: retrieve the fee share for the supplied address
2.  ecosystem `Number` optional: the ecosystem to check the fee share (1 for main ecosystem, 2 for test ecosystem)

#### Result

array `Array` of JSON Objects

#### Examples


    (async () => {
      let feeShare = await Wormhole.DataRetrieval.feeShare("bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", 1);
      console.log(feeShare);
    })()

    // [ { address: 'bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg',
    // feeshare: '0.6912%' } ]


### `grants`

Returns information about granted and revoked units of managed tokens.

#### Arguments

1.  propertyId `Number` required: The identifier of the managed tokens to lookup

#### Result

obj `Object`

#### Examples


    (async () => {
      let grants = await Wormhole.DataRetrieval.grants(3);
      console.log(grants);
    })()

    // { propertyid: 3,
    // name: 'test_token1',
    // issuer: 'bchtest:qz04wg2jj75x34tge2v8w0l6r0repfcvcygv3t7sg5',
    // creationtxid: '1c3f95acbd6eb38e2a7c26b12dc9138b4523c355a20944874bdc3c82f4c5e4e1',
    // totaltokens: '90',
    // issuances:
    //  [ { txid: 'a1f2d0126a04296aad6f492a0ef8c1c1afb781efc6c5f37de105790a7debcf87',
    //      revoke: '10' },
    //    { txid: '6afffd7d14060b6e79c504c5f17596616eb99356b71d301b5b37df1df065b9a0',
    //      grant: '100' } ] }


### `info`

Returns various state information of the client and protocol.

#### Result

obj `Object`

#### Examples


    (async () => {
      let info = await Wormhole.DataRetrieval.info();
      console.log(info);
    })()

    // { wormholeversion_int: 4000,
    // wormholeversion: '0.0.4',
    // bitcoincoreversion: '0.17.2',
    // block: 1250914,
    // blocktime: 1533771773,
    // blocktransactions: 0,
    // totaltrades: 0,
    // totaltransactions: 784,
    // alerts: [] }


### `payload`

Get the payload for an Omni transaction.

#### Arguments

1.  txid `String` required: The hash of the transaction to retrieve payload

#### Result

obj `Object`

#### Examples


    (async () => {
      let payload = await Wormhole.DataRetrieval.payload("000000000000000000000000000000000000000000000000000000000000000");
      console.log(payload);
    })()


### `property`

Returns details for about the tokens or smart property to lookup.

#### Arguments

1.  propertyId `Number` required: The identifier of the tokens or property

#### Result

obj `Object`

#### Examples


    (async () => {
      let property = await Wormhole.DataRetrieval.property(3);
      console.log(property);
    })()

    // { propertyid: 3,
    // name: 'test_token1',
    // category: 'test managed token 0',
    // subcategory: 'test',
    // data: 'my data',
    // url: 'www.testmanagedtoken.com',
    // precision: 0,
    // issuer: 'bchtest:qz04wg2jj75x34tge2v8w0l6r0repfcvcygv3t7sg5',
    // creationtxid: '1c3f95acbd6eb38e2a7c26b12dc9138b4523c355a20944874bdc3c82f4c5e4e1',
    // fixedissuance: false,
    // managedissuance: true,
    // freezingenabled: false,
    // totaltokens: '90' }


### `seedBlocks`

Returns a list of blocks containing Omni transactions for use in seed block filtering.

#### Arguments

1.  startBlock `Number` required: The first block to look for Omni transactions (inclusive)
2.  endBlock `Number` required: The last block to look for Omni transactions (inclusive)

#### Result

obj `Object`

#### Examples


    (async () => {
      let seedBlocks = await Wormhole.DataRetrieval.seedBlocks(290000, 300000);
      console.log(seedBlocks);
    })()
    // []


### `STO`

Get information and recipients of a send\-to\-owners transaction.

#### Arguments

1.  txid `String` required: The hash of the transaction to lookup
2.  recipientFilter `String` required: A filter for recipients (wallet by default, '\*' for all)

#### Result

obj `Object`

#### Examples


    (async () => {
      let STO = await Wormhole.DataRetrieval.STO("000000000000000000000000000000000000000000000000000000000000000", "*");
      console.log(STO);
    })()
    // []


### `transaction`

Get detailed information about an Omni transaction.

#### Arguments

1.  txid `String` required: The hash of the transaction to lookup

#### Result

obj `Object`

#### Examples


    (async () => {
      let transaction = await Wormhole.DataRetrieval.transaction("000000000000000000000000000000000000000000000000000000000000000");
      console.log(transaction);
    })()


### `blockTransactions`

Lists all Omni transactions in a block.

#### Arguments

1.  index `Number` required: The block height or block index

#### Result

arr `Array` of strings

#### Examples


    (async () => {
      let blockTransactions = await Wormhole.DataRetrieval.blockTransactions("0000000000009ae2ee5d085a0f3d20c8ace0c742af60269f44fc3e3af354b5cb");
      console.log(blockTransactions);
    })()
    // []


### `pendingTransactions`

Returns a list of unconfirmed Omni transactions, pending in the memory pool.

#### Arguments

1.  address `Number` optional: Address filter (default: '' for no filter)

#### Result

arr `Array` of JSON objects

#### Examples


    (async () => {
      let pendingTransactions = await Wormhole.DataRetrieval.pendingTransactions();
      console.log(pendingTransactions);
    })()
    // []


### `properties`

Lists all tokens or smart properties.

#### Result

arr `Array` of JSON objects

#### Examples


    (async () => {
      let properties = await Wormhole.DataRetrieval.properties();
      console.log(properties);
    })()

    // [ { propertyid: 1,
    //   name: 'WHC',
    //   category: 'N/A',
    //   subcategory: 'N/A',
    //   data: 'WHC serve as the binding between Bitcoin cash, smart properties and contracts created on the Wormhole.',
    //   url: 'http://www.wormhole.cash',
    //   precision: 0 },
    // { propertyid: 3,
    //   name: 'test_token1',
    //   category: 'test managed token 0',
    //   subcategory: 'test',
    //   data: 'my data',
    //   url: 'www.testmanagedtoken.com',
    //   precision: 0 }]


### `transactions`

List wallet transactions, optionally filtered by an address and block boundaries.

#### Arguments

#### Result

arr `Array` of JSON objects

#### Examples


    (async () => {
      let transactions = await Wormhole.DataRetrieval.transactions();
      console.log(transactions);
    })()

    // [ { txid: '66e83012877ad9a69a1a61eaadcef2086c74de573fec7c0b54173ff138ab1262',
    //  fee: '2726',
    //  sendingaddress: 'bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg',
    //  referenceaddress: 'bchtest:qqqqqqqqqqqqqqqqqqqqqqqqqqqqqdmwgvnjkt8whc',
    //  ismine: true,
    //  version: 0,
    //  type_int: 68,
    //  type: 'Burn BCH Get WHC',
    //  propertyid: 1,
    //  precision: '0',
    //  mature: true,
    //  amount: '100.00106300',
    //  valid: true,
    //  blockhash: '0000000000009ae2ee5d085a0f3d20c8ace0c742af60269f44fc3e3af354b5cb',
    //  blocktime: 1533529072,
    //  positioninblock: 5,
    //  block: 1250422,
    //  confirmations: 498 } ]

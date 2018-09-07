---
  title: Blockchain
  icon: cubes
  ordinal: 6
---

### `getBestBlockHash`

Returns the hash of the best (tip) block in the longest blockchain.

#### Result

hex `String`: the block hash hex encoded

#### Examples


    (async () => {
      try {
        let getBestBlockHash = await BITBOX.Blockchain.getBestBlockHash();
        console.log(getBestBlockHash);
      } catch(error) {
       console.error(error)
      }
    })()
    // 241decef88889efac8e6ce428a8ac696fdde5972eceed97e1fb58d6106af31d5


### `getBlock`

If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block `hash`.

#### Arguments

1.  blockhash `String` required: The block hash
2.  verbose `Boolean` optional: true for a json object, false for the hex encoded data

#### Examples


    (async () => {
      try {
        let getBlock = await BITBOX.Blockchain.getBlock("00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09");
        console.log(getBlock);
      } catch(error) {
       console.error(error)
      }
    })()

    // { hash: '00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09',
    // confirmations: 528236,
    // size: 216,
    // height: 1000,
    // version: 1,
    // versionHex: '00000001',
    // merkleroot: 'fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33',
    // tx:
    //  [ 'fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33' ],
    // time: 1232346882,
    // mediantime: 1232344831,
    // nonce: 2595206198,
    // bits: '1d00ffff',
    // difficulty: 1,
    // chainwork: '000000000000000000000000000000000000000000000000000003e903e903e9',
    // previousblockhash: '0000000008e647742775a230787d66fdf92c46a48c896bfbc85cdc8acc67e87d',
    // nextblockhash: '00000000a2887344f8db859e372e7e4bc26b23b9de340f725afbf2edb265b4c6' }


### `getBlockchainInfo`

Returns an object containing various state info regarding blockchain processing.

#### Examples


    (async () => {
      try {
        let getBlockchainInfo = await BITBOX.Blockchain.getBlockchainInfo();
        console.log(getBlockchainInfo);
      } catch(error) {
       console.error(error)
      }
    })()

    // { chain: 'main',
    // blocks: 529235,
    // headers: 529235,
    // bestblockhash: '00000000000000000108641af52e01a447b1f9d801571f93a0f20a8cbf80c236',
    // difficulty: 702784497476.8376,
    // mediantime: 1525727823,
    // verificationprogress: 0.9999892037620548,
    // chainwork: '00000000000000000000000000000000000000000099f5e1cf7d4e462a493a51',
    // pruned: false,
    // softforks:
    //  [ { id: 'bip34', version: 2, reject: [Object] },
    //    { id: 'bip66', version: 3, reject: [Object] },
    //    { id: 'bip65', version: 4, reject: [Object] } ],
    // bip9_softforks:
    //  { csv:
    //     { status: 'active',
    //       startTime: 1462060800,
    //       timeout: 1493596800,
    //       since: 419328 } } }


### `getBlockCount`

Returns the number of blocks in the longest blockchain.

#### Result

n (numeric) The current block count

#### Examples


    (async () => {
      try {
        let getBlockCount = await BITBOX.Blockchain.getBlockCount();
        console.log(getBlockCount);
      } catch(error) {
       console.error(error)
      }
    })()
    // 529235


### `getBlockHash`

Returns hash of block in best-block-chain at height provided.

#### Arguments

1.  heights `Array` required: Array with maximum of 20 block heights.

#### Result

hash `string` The block hash

#### Examples


    (async () => {
      try {
        let getBlockHash = await BITBOX.Blockchain.getBlockHash([0]);
        console.log(getBlockHash);
      } catch(error) {
       console.error(error)
      }
    })()
    // [ '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f' ]


### `getBlockHeader`

If verbose is false, returns a string that is serialized, hex-encoded data for blockheader 'hash'. If verbose is true, returns an Object with information about blockheader `hash`.

#### Arguments

1.  hashes `Array` required: Array with maximum of 20 hashes.
2.  verbose `Boolean` optional: true for a json object, false for the hex encoded data. default=true

#### Examples


    (async () => {
      try {
        let getBlockHeader = await BITBOX.Blockchain.getBlockHeader(["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"]);
        console.log(getBlockHeader);
      } catch(error) {
       console.error(error)
      }
    })()

    // [{ hash: '00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09',
    // confirmations: 528236,
    // height: 1000,
    // version: 1,
    // versionHex: '00000001',
    // merkleroot: 'fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33',
    // time: 1232346882,
    // mediantime: 1232344831,
    // nonce: 2595206198,
    // bits: '1d00ffff',
    // difficulty: 1,
    // chainwork: '000000000000000000000000000000000000000000000000000003e903e903e9',
    // previousblockhash: '0000000008e647742775a230787d66fdf92c46a48c896bfbc85cdc8acc67e87d',
    // nextblockhash: '00000000a2887344f8db859e372e7e4bc26b23b9de340f725afbf2edb265b4c6' }]


### `getChainTips`

Return information about all known tips in the block tree, including the main chain as well as orphaned branches.

#### Examples


    (async () => {
      try {
        let getChainTips = await BITBOX.Blockchain.getChainTips();
        console.log(getChainTips);
      } catch(error) {
       console.error(error)
      }
    })()

    // [ { height: 529235,
    //   hash: '00000000000000000108641af52e01a447b1f9d801571f93a0f20a8cbf80c236',
    //   branchlen: 0,
    //   status: 'active' },
    // { height: 527442,
    //   hash: '0000000000000000014cbf7b7aa12e52dd97db4b1ba5f39dccae37773af9272e',
    //   branchlen: 1,
    //   status: 'invalid' },
    // { height: 526861,
    //   hash: '00000000000000000225b070818bbafd95842ecbd25edf39bff54a7aa5c8fd10',
    //   branchlen: 1,
    //   status: 'valid-headers' } ]


### `getDifficulty`

Returns the proof-of-work difficulty as a multiple of the minimum difficulty.

#### Result

n.nnn (numeric): the proof-of-work difficulty as a multiple of the minimum difficulty.

#### Examples


    (async () => {
      try {
        let getDifficulty = await BITBOX.Blockchain.getDifficulty();
        console.log(getDifficulty);
      } catch(error) {
       console.error(error)
      }
    })()

    // 702784497476.8376


### `getMempoolAncestors`

If txid is in the mempool, returns all in-mempool ancestors.

#### Arguments

1.  txids `Array` required: Array with maximum of 20 txids.
2.  verbose `Boolean` optional: True for a json object, false for array of transaction ids. default=false

#### Result

#### Examples


    (async () => {
      try {
        let getMempoolAncestors = await BITBOX.Blockchain.getMempoolAncestors(["fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33"]);
        console.log(getMempoolAncestors);
      } catch(error) {
       console.error(error)
      }
    })()


### `getMempoolDescendants`

If txid is in the mempool, returns all in-mempool descendants.

#### Arguments

1.  txids `Array` required: Array with maximum of 20 txids.
2.  verbose `Boolean` optional: True for a json object, false for array of transaction ids. default=false

#### Examples


    (async () => {
      try {
        let getMempoolDescendants = await BITBOX.Blockchain.getMempoolDescendants(["fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33"]);
        console.log(getMempoolDescendants);
      } catch(error) {
       console.error(error)
      }
    })()


### `getMempoolEntry`

Returns mempool data for given transaction

#### Arguments

1.  txids `Array` required: Array with maximum of 20 txids.

#### Examples


    (async () => {
      try {
        let getMempoolEntry = await BITBOX.Blockchain.getMempoolEntry(["fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33"]);
        console.log(getMempoolEntry);
      } catch(error) {
       console.error(error)
      }
    })()


### `getMempoolInfo`

Returns details on the active state of the TX memory pool.

#### Examples


    (async () => {
      try {
        let getMempoolInfo = await BITBOX.Blockchain.getMempoolInfo();
        console.log(getMempoolInfo);
      } catch(error) {
       console.error(error)
      }
    })()

    // { size: 257,
    // bytes: 98257,
    // usage: 365840,
    // maxmempool: 300000000,
    // mempoolminfee: 0 }


### `getRawMempool`

Returns all transaction ids in memory pool as a json array of string transaction ids.

#### Arguments

1.  verbose (boolean, optional, default=false): True for a json object, false for array of transaction ids

#### Examples


    (async () => {
      try {
        let getRawMempool = await BITBOX.Blockchain.getRawMempool(true);
        console.log(getRawMempool);
      } catch(error) {
       console.error(error)
      }
    })()

    // [  {'2ae541af20db6f2b50410f418af56e349d08877d685f6cf54df54658e892db7a':
    //  { size: 237,
    //    fee: 0.00000238,
    //    modifiedfee: 0.00000238,
    //    time: 1525732015,
    //    height: 529235,
    //    startingpriority: 0,
    //    currentpriority: 0,
    //    descendantcount: 10,
    //    descendantsize: 2376,
    //    descendantfees: 2380,
    //    ancestorcount: 3,
    //    ancestorsize: 712,
    //    ancestorfees: 714,
    //    depends:
    //     [ 'e25682caafc7000645d59f4c11d8d594b2943979b9d8fafb9f946e2b35c21b7e' ] },]


### `getTxOut`

Returns details about an unspent transaction output.

#### Arguments

1.  txid (string, required): The transaction id
2.  n (numeric, required): vout number
3.  include\_mempool (boolean, optional): Whether to include the mempool

#### Examples


    (async () => {
      try {
        let getTxOut = await BITBOX.Blockchain.getTxOut("e25682caafc7000645d59f4c11d8d594b2943979b9d8fafb9f946e2b35c21b7e", 1);
        console.log(getTxOut);
      } catch(error) {
       console.error(error)
      }
    })()

    // null


### `getTxOutProof`

Returns a hex-encoded proof that "txid" was included in a block.

#### Arguments

1.  txids `string` A json array of txids to filter \[ "txid" `string` A transaction hash ,... \]
2.  blockhash (string, optional) If specified, looks for txid in the block with this hash
3.  data `string`: A string that is a serialized, hex-encoded data for the proof.

#### Result

legacyAddress `string` legacy base 58 check encoded address

#### Examples


    (async () => {
      try {
        let getTxOutProof = await BITBOX.Blockchain.getTxOutProof(["e25682caafc7000645d59f4c11d8d594b2943979b9d8fafb9f946e2b35c21b7e", "d16662463fd98eb96c8f6898d58a4461ac3d0120f4d0aea601d72b37759f261c"]);
        console.log(getTxOutProof);
      } catch(error) {
       console.error(error)
      }
    })()

    // Not all transactions found in specified or retrieved block


### `preciousBlock`

Treats a block as if it were received before others with the same work. A later preciousblock call can override the effect of an earlier one. The effects of preciousblock are not retained across restarts.

#### Arguments

1.  blockhash (string, required): the hash of the block to mark as precious

#### Examples


    (async () => {
      try {
        let preciousBlock = await BITBOX.Blockchain.preciousBlock("00000000000000000108641af52e01a447b1f9d801571f93a0f20a8cbf80c236");
        console.log(preciousBlock);
      } catch(error) {
       console.error(error)
      }
    })()


### `pruneBlockchain`

#### Arguments

1.  height (numeric, required): The block height to prune up to. May be set to a discrete height, or a unix timestamp to prune blocks whose block time is at least 2 hours older than the provided timestamp.

#### Result

n (numeric): Height of the last block pruned.

#### Examples


    (async () => {
      try {
        let pruneBlockchain = await BITBOX.Blockchain.pruneBlockchain(1000);
        console.log(pruneBlockchain);
      } catch(error) {
       console.error(error)
      }
    })()


### `verifyChain`

Verifies blockchain database.

#### Arguments

1.  checklevel (numeric, optional, 0-4, default=3): How thorough the block verification is.
2.  nblocks (numeric, optional, default=6, 0=all): The number of blocks to check.

#### Result

true|false (boolean): Verified or not

#### Examples


    (async () => {
      try {
        let verifyChain = await BITBOX.Blockchain.verifyChain();
        console.log(verifyChain);
      } catch(error) {
       console.error(error)
      }
    })()
    // true


### `verifyTxOutProof`

Verifies that a proof points to a transaction in a block, returning the transaction it commits to and throwing an RPC error if the block is not in our best chain

#### Arguments

1.  proof (string, required): The hex-encoded proof generated by gettxoutproof

#### Result

\["txid"\] (array, strings): The txid(s) which the proof commits to, or empty array if the proof is invalid

#### Examples


    (async () => {
      try {
        let verifyTxOutProof = await BITBOX.Blockchain.verifyTxOutProof("proof");
        console.log(verifyTxOutProof);
      } catch(error) {
       console.error(error)
      }
    })()

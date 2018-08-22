---
  title: Mining
  icon: code-branch
  ordinal: 12
---

### `getMiningInfo`

Returns a json object containing mining\-related information.

#### Result


      {
      "blocks": nnn,             (numeric) The current block
      "currentblocksize": nnn,   (numeric) The last block size
      "currentblocktx": nnn,     (numeric) The last block transaction
      "difficulty": xxx.xxxxx    (numeric) The current difficulty
      "errors": "..."            (string) Current errors
      "networkhashps": nnn,      (numeric) The network hashes per second
      "pooledtx": n              (numeric) The size of the mempool
      "chain": "xxxx",           (string) current network name as defined in BIP70 (main, test, regtest)
      }


#### Examples


      BITBOX.Mining.getMiningInfo().then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `getNetworkHashps`

Returns the estimated network hashes per second based on the last n blocks. Pass in \[blocks\] to override # of blocks, \-1 specifies since last difficulty change. Pass in \[height\] to estimate the network speed at the time when a certain block was found.

#### Arguments

1.  nblocks (numeric, optional, default=120): The number of blocks, or \-1 for blocks since last difficulty change.
2.  height (numeric, optional, default=\-1): To estimate at the time of the given height.

#### Result

x (numeric): Hashes per second estimated

#### Examples


      BITBOX.Mining.getNetworkHashps().then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });

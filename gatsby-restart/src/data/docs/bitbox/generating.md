---
  title: Generating
  icon: buromobelexperte
  ordinal: 10
---

### `generateToAddress`

Mine blocks immediately to a specified address (before the RPC call returns)

#### Arguments

1.  nblocks `Number` required: How many blocks are generated immediately.
2.  address `String` required: The address to send the newly generated bitcoin to.
3.  maxtries `Number` optional: How many iterations to try (default = 1000000).

#### Result

\[ blockhashes \] `Array`: hashes of blocks generated

#### Examples


    (async () => {
      try {
        let generateToAddress = await BITBOX.Generating.generateToAddress(11, 'bitcoincash:qzhhrxcdlxdsw3xuw8nz3c4476fdz69uq5gewr0lxg');
        console.log(generateToAddress);
      }
      catch(error) {
       console.error(error)
      }
    })()

    // []

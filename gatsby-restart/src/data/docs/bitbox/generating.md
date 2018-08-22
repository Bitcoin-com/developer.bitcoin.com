---
  title: Generating
  icon: cubes
  ordinal: 10
---

### `generateToAddress`

Mine blocks immediately to a specified address (before the RPC call returns)

#### Arguments

1.  nblocks (numeric, required): How many blocks are generated immediately.
2.  address (string, required): The address to send the newly generated bitcoin to.
3.  maxtries (numeric, optional): How many iterations to try (default = 1000000).

#### Result

\[ blockhashes \] (array): hashes of blocks generated

#### Examples


      BITBOX.Generating.generateToAddress(11, 'bitcoincash:qzhhrxcdlxdsw3xuw8nz3c4476fdz69uq5gewr0lxg').then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });

      // []

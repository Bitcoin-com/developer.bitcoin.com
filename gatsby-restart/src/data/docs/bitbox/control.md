---
  title: Control
  icon: gamepad
  ordinal: 7
---

### `getInfo`

Returns an object containing various state info.

#### Examples


    (async () => {
      let getInfo = await BITBOX.Control.getInfo();
      console.log(getInfo);
    })()

    // { version: 170000,
    // protocolversion: 70015,
    // blocks: 529235,
    // timeoffset: 0,
    // connections: 35,
    // proxy: '',
    // difficulty: 702784497476.8376,
    // testnet: false,
    // paytxfee: 0,
    // relayfee: 0.00001,
    // errors: '' }


### `getMemoryInfo`

Returns an object containing information about memory usage.

#### Result

#### Examples


    (async () => {
      let getMemoryInfo = await BITBOX.Control.getMemoryInfo();
      console.log(getMemoryInfo);
    })()

    // { locked:
    //  { used: 0,
    //    free: 65536,
    //    total: 65536,
    //    locked: 65536,
    //    chunks_used: 0,
    //    chunks_free: 1 } }

---
title: Control
icon: gamepad
ordinal: 7
---

### `getInfo`

Returns an object containing various state info.

#### Examples

    (async () => {
      try {
        let getInfo = await BITBOX.Control.getInfo();
        console.log(getInfo);
      } catch(error) {
       console.error(error)
      }
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

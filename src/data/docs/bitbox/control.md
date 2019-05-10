---
title: Control
icon: gamepad
ordinal: 7
---

### `getInfo`

Returns an object containing various state info.

#### Result

info `Promise<NodeInfo>`

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

## Interfaces

### NodeInfo

    {
      version: number
      protocolversion: number
      blocks: number
      timeoffset: number
      connections: number
      proxy: string
      difficulty: number
      testnet: boolean
      paytxfee: number
      relayfee: number
      errors: string
    }

<!-- ### NodeMemoryInfo

    {
      locked: {
        used: number
        free: number
        total: number
        locked: number
        chunks_used: number
        chunks_free: number
      }
    } -->

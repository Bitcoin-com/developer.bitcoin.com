---
  title: Control
  icon: cubes
  ordinal: 7
---

### `getInfo`

Returns an object containing various state info.

#### Examples

```js
BITBOX.Control.getInfo().then((result) => {
console.log(result);
}, (err) => {
console.log(err);
});

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
```

### `getMemoryInfo`

Returns an object containing information about memory usage.

#### Result

#### Examples

```js
BITBOX.Control.getMemoryInfo().then((result) => {
console.log(result);
}, (err) => {
console.log(err);
});

// { locked:
//  { used: 0,
//    free: 65536,
//    total: 65536,
//    locked: 65536,
//    chunks_used: 0,
//    chunks_free: 1 } }
```

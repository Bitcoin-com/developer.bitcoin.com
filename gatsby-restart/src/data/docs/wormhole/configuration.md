---
  title: Configuration
  icon: cogs
  ordinal: 4
---

### `setAutoCommit`

Sets the global flag that determines whether transactions are automatically committed and broadcast.

#### Arguments

1.  flag `Boolean` required

#### Result

flag `boolean`

#### Examples


    (async () => {
      let config = await Wormhole.Configuration.autoCommit(true);
      console.log(config);
    })()

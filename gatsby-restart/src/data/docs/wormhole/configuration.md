---
  title: Configuration
  icon: home
  ordinal: 4
---

### `setAutoCommit`

Sets the global flag that determines whether transactions are automatically committed and broadcast.

#### Arguments

1.  flag (boolean, required)

#### Result

flag `boolean`

#### Examples


      Wormhole.Configuration.autoCommit(true).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });

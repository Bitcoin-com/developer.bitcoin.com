---
title: Console
icon: terminal
ordinal: 2
---

Launch a console w/ the entire SLP and BITBOX API available via a built in `SLP` object. Pass in an `--environment` flag to connect to environments defined in a local `slp.js`. By default `console` will connect to your `development` environment.

      $ slp console --environment production

Quickly test your ideas

      SLP.Address.toLegacyAddress('simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
      // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

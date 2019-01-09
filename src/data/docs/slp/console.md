---
title: Console
icon: terminal
ordinal: 2
---

Launch a console w/ the entire SLP RPC available via a built in `SLP` object. Pass in an `--environment` flag to connect to environments defined in a local `slp.js`. By default `console` will connect to your `development` environment.

      $ slp console --environment production

Quickly test your ideas

      SLP.Conversion.toCashAddress(
        "simpleledger:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sg75f5wdyg"
      );
      // 'bitcoincash:qrxwdlhfx5f4xsfnl0g887e5ccs5puy8sgj0z0md6k'

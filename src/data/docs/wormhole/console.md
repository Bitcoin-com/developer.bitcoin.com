---
title: Console
icon: terminal
ordinal: 2
---

Launch a console w/ the entire Wormhole RPC available via a built in `Wormhole` object. Pass in an `--environment` flag to connect to environments defined in a local `wormhole.js`. By default `console` will connect to your `development` environment.

$ Wormhole console \-\-environment production

> Wormhole.
> Wormhole.BITBOX Wormhole.Configuration Wormhole.DataRetrieval Wormhole.PayloadCreation Wormhole.RawTransactions Wormhole.restURL BITBOX.config

Quickly test your ideas

      > Wormhole.DataRetrieval.getInfo().then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });

      //  { wormholeversion_int: 4000,
      // wormholeversion: '0.0.4',
      // bitcoincoreversion: '0.17.2',
      // block: 1174964,
      // blocktime: 1508251193,
      // blocktransactions: 0,
      // totaltrades: 0,
      // totaltransactions: 0,
      // alerts: [] }

---
title: Console
icon: terminal
ordinal: 2
---

Launch a console w/ the entire Wormhole RPC available via a built in `Wormhole` object. Pass in an `--environment` flag to connect to environments defined in a local `wormhole.js`. By default `console` will connect to your `development` environment.

      $ wormhole console --environment production

Quickly test your ideas

      (async () => {
        try {
          let info = await Wormhole.DataRetrieval.info();
          console.log(info);
        } catch(error) {
          console.error(error)
        }
      })()

      // { wormholeversion_int: 10000000,
      // wormholeversion: '0.1.0',
      // bitcoincoreversion: '0.17.2',
      // block: 551902,
      // blocktime: 1539379265,
      // blocktransactions: 12,
      // totaltransactions: 3419,
      // alerts: [] }

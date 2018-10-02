---
title: New
icon: plus
ordinal: 1
---

Wormhole will generate a new app w/ empty `src/` and `test/` directories and a `wormhole.js` configured to connect to your wormholeREST instance.

    Usage: new [options] <name>
    Options:
    -s, --scaffold <scaffold>        The framework to use. Options include react, angular, node, next, and vue. (Default: react)
    -r, --restURL <restURL>          The rest URL to use. default: https://wormholerest.example.com/v1/
    -e, --environment <environment>  environment of your wormholeREST instance. Ex: production, staging. Default: development
    -h, --help                       output usage information

    $ wormhole new helloEARTH

### wormhole.js

Your `wormhole.js` file will contain the default settings to connect to wormholeRES T.

    exports.config = {
      networks: {
        development: {
          restURL: "https://trest.example.com/v1/"
        },
        production: {
          restURL: "https://rest.example.com/v1/"
        }
      }
    };

---
title: New
icon: plus
ordinal: 1
---

Wormhole will generate a new app w/ empty `src/` and `test/` directories and a `slp.js` configured to connect to [rest.bitcoin.com](https://rest.bitcoin.com/).

    Usage: new [options] <name>
    Options:
    -s, --scaffold <scaffold>        The framework to use. Options include react, angular, node, next, and vue. (Default: react)
    -r, --restURL <restURL>          The rest URL to use. default: https://rest.bitcoin.com/v1/
    -e, --environment <environment>  REST environment. Ex: production, staging. Default: development
    -h, --help                       output usage information

    $ slp new helloEARTH

### slp.js

Your `slp.js` file will contain the default settings to connect to REST.

    exports.config = {
      networks: {
        development: {
          restURL: "https://trest.bitcoin.com/v1/"
        },
        production: {
          restURL: "https://rest.bitcoin.com/v1/"
        }
      }
    };

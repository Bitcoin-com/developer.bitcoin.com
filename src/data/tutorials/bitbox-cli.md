---
title: bitbox-sdk
author: Gabriel Cardona
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

BITBOX aims to be the go-to toolset for $BCH developers. We want you to be able to run your code and tests against your BITBOX before deploying to live environments and aim for 100% Bitcoin Cash JSON RPC API coverage.

Today we’re happy to announce that `bitbox-sdk` has 100% of the Bitcoin ABC JSON RPC. You can now use `bitbox-sdk` to have your code interface directly w/ your live running Bitcoin ABC node. Here’s how that would look.

### Installation

First install `bitbox-sdk` via npm

```bash
npm install bitbox-sdk --global
```

This gives you access to the `bitbox` command line utility.

### Command line

You can now have `bitbox` stub out an app scaffold and configuration. Here we’ll have it create a new app and give it the user, password and host of our running Bitcoin ABC node and set the environment to `production`.

```bash
bitbox new myApp
```

This will create a scaffold directory structure for a new $BCH app along w/ a configuration file which looks like:

```json
networks: {
    development: {
        restURL: "https://rest.bitcoin.com/v1/"
    }
}
```

### Console

Now you can fire up `bitbox`’s console to send some commands to your running $BCH node.

```bash
bitbox console
```

This will load the console and create a `BITBOX` object w/ the entire $BCH JSON RPC available. That `BITBOX` object can send commands to the running Bitcoin ABC node that you configured in the previous step.

```bash
> BITBOX.Network.getNetworkInfo().then((result) => { console.log(result); }, (err) => { console.log(err); });

{ version: 160200,
    subversion: '/Bitcoin ABC:0.16.2(EB8.0)/',
    protocolversion: 70015,
    localservices: '0000000000000025',
    localrelay: true,
    timeoffset: 0,
    networkactive: true,
    connections: 15,
    networks: [
        {
            name: 'ipv4',
            limited: false,
            reachable: true,
            proxy: '',
            proxy_randomize_credentials: false
        },
        {
            name: 'ipv6',
            limited: false,
            reachable: true,
            proxy: '',
            proxy_randomize_credentials: false
        },
        {
            name: 'onion',
            limited: true,
            reachable: false,
            proxy: '',
            proxy_randomize_credentials: false
        }
    ],
    relayfee: 0.00001,
    incrementalfee: 0.00001,
    localaddresses: [
        { address: 'ip.address.of.abc.node', port: 8333, score: 1964 }
    ],
    warnings: ''
}
```

### Browser

You can also use `BITBOX` from the browser. First install `bitbox-sdk` locally w/ npm.

```bash
npm install bitbox-sdk --save
```

Next you need to `require` or `import` `BITBOXSDK` into your app depending on if your are transpiling ES6 or not. Once you `require` `BITBOXSDK` into your app you then create an instance of `BITBOX` and pass in a config object w/ the same values you used at the command line in the previous steps.

```javascript
let BITBOXSDK = require('bitbox-sdk/lib/bitbox-sdk').default
let BITBOX = new BITBOXSDK()

BITBOX.getnetworkinfo().then(
  result => {
    console.log(result)
  },
  err => {
    console.log(err)
  }
)
```

Again the entire Bitcoin Cash JSON RPC is available on the `BITBOX` object.

### Summary

BITBOX can now be used from the command line or the browser to send commands to the BCH network.

---
title: Multiple Environments
author: Gabriel Cardona
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

Imagine you have a $BCH app which you’d like to deploy. However before doing that it seems like you should test it. BITBOX console lets you quickly switch between sending commands to your local instance or your full node running on the cloud. That way you can test your code locally before deploying to a remote server w/ production running $BCH node.

### Create new app

Let’s say our newly created $BCH app is just a simple call to `getnetworkinfo` but of course it could be much more complex as `BITBOX` supports the entire $BCH RPC.

    BITBOX.Network.getnetworkinfo().then((result) => {
              console.log(result);
            }, (err) => {
              console.log(err);
            })

To test our code first stub out an app w/ production credentials

    bitbox new myApp --environment production --restURL example.com

Next open up the newly created `bitbox.js` file and add config for your local BITBOX.

    networks: {
              development: {
                restURL: "https://trest.bitcoin.com/v1/"
              },
              production: {
                restURL: "https://rest.bitcoin.com/v1/"
              }
            }

### Console

Now when you fire up your BITBOX console you can tell it which environment to connect to by passing `bitbox console` an `--environment` flag.

    bitbox console --environment development

            > BITBOX.Network.getNetworkInfo().then((result) => { console.log(result); }, (err) => { console.log(err); });

            { version: 130100,
              subversion: '/Bitcoin ABC:0.16.2(EB8.0)/',
              protocolversion: 70014,
              localservices: '000000000000000d',
              localrelay: true,
              timeoffset: -19,
              connections: 8,
              networks:
               [ { name: 'ipv4',
                   limited: false,
                   reachable: true,
                   proxy: '',
                   proxy_randomize_credentials: false },
                 { name: 'ipv6',
                   limited: false,
                   reachable: true,
                   proxy: '',
                   proxy_randomize_credentials: false },
                 { name: 'onion',
                   limited: true,
                   reachable: false,
                   proxy: '',
                   proxy_randomize_credentials: false } ],
              relayfee: 5000,
              localaddresses:
               [ { address: '0600:3c03::f03c:91ff:fe89:dfc4',
                   port: 8333,
                   score: 4 } ],
              warnings: '' }

### Summary

This is just a small example to show how BITBOX can accelerate your $BCH workflow. You can stub out an app scaffold w/ configuration for `development` and `production` environments. You have the full $BCH RPC available on the `BITBOX` object and you can quickly switch between sending commands to different environments.

---
title: Control
icon: gamepad
ordinal: 5
---

## Get Info

Returns an object containing various state info.

**URL** : `v2/control/getInfo`

**Method** : `GET`

**Auth required** : NO

#### Result

info `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/control/getInfo" -H "accept: application/json"

    // returns
    {
      "version": 180200,
      "protocolversion": 70015,
      "blocks": 561839,
      "timeoffset": 0,
      "connections": 12,
      "proxy": "",
      "difficulty": 245672545205.1297,
      "testnet": false,
      "paytxfee": 0,
      "relayfee": 0.00001,
      "errors": ""
    }

## Get Network Info

Returns an object containing various network info.

**URL** : `v2/control/getNetworkInfo`

**Method** : `GET`

**Auth required** : NO

#### Result

networkInfo `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/control/getNetworkInfo" -H "accept: application/json"

    // returns
    {
      "version": 190500,
      "subversion": "/Bitcoin ABC:0.19.5(EB32.0)/",
      "protocolversion": 70015,
      "localservices": "0000000000000425",
      "localrelay": true,
      "timeoffset": 0,
      "networkactive": true,
      "connections": 15,
      "networks": [
        {
          "name": "ipv4",
          "limited": false,
          "reachable": true,
          "proxy": "",
          "proxy_randomize_credentials": false
        },
        {
          "name": "ipv6",
          "limited": false,
          "reachable": true,
          "proxy": "",
          "proxy_randomize_credentials": false
        },
        {
          "name": "onion",
          "limited": true,
          "reachable": false,
          "proxy": "",
          "proxy_randomize_credentials": false
        }
      ],
      "relayfee": 0.00001,
      "excessutxocharge": 0,
      "warnings": "Warning: Unknown block versions being mined! It's possible unknown rules are in effect"
    }

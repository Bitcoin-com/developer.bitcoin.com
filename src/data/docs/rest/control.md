---
title: Control
icon: gamepad
ordinal: 4
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

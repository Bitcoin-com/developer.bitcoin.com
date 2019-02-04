---
title: SLP
icon: elipses
ordinal: 4
---

### `Constructor`

Create an instance of SLP SDK

#### Arguments

1.  config `Object` optional: configuration

##### Valid config properties

- `restURL`: `String`. By default SLP SDK will connect to https://rest.bitcoin.com/v2/

#### Result

SLP `SLP`: instance of SLP SDK

#### Examples

##### Create instance of SLP SDK

    let SLPSDK = require("slp-sdk/lib/SLP").default;
    let SLP = new SLPSDK({
      restURL: "https://trest.bitcoin.com/v2/"
    });

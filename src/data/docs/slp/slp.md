---
title: SLP
icon: elipses
ordinal: 4
---

### `Constructor`

Create an instance of SLP SDK

#### Arguments

1.  config `Object` optional: configuration

#### Result

SLP `SLP`: instance of SLP SDK

#### Examples

##### Create instance of SLP SDK

    let SLPSDK = require("slp-sdk/lib/SLP").default;
    let SLP = new SLPSDK({
      restURL: "https://rest.bitcoin.com/v1/"
    });

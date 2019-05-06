---
title: ECPair
icon: key
ordinal: 4
---

### `toSLPAddress`

Get slp address of ECPair

#### Arguments

1.  ecpair: `ECPair`

#### Result

slpAddress `string`: slpaddr encoded address of ECPair

#### Examples

      // create ecpair from wif
      let ecpair = SLP.ECPair.fromWIF('cUCSrdhu7mCzx4sWqL6irqzprkofxPmLHYgkSnG2WaWVqJDXtWRS')
      // to slp address
      SLP.ECPair.toSLPAddress(ecpair);
      // slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03

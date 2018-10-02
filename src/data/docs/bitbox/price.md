---
title: Price
icon: dollar-sign
ordinal: 13
---

### `current`

Return current price of BCH in multiple currencies

#### Arguments

1.  currency `String` optional: Defaults to all listed currencies

#### Result

price `Object | number`: Price of all listed currencies or price of single requested currencies

#### Examples

    (async () => {
      try {
        let current = await BITBOX.Price.current();
        console.log(current);
      } catch(error) {
       console.error(error)
      }
    })()

    // {
    //   USD: 867.86,
    //   GBP: 661.97,
    //   EUR: 744.83,
    //   CNY: 5818.31,
    //   PAB: 867.86,
    //   ARS: 23881.77,
    //   BOB: 6029.19,
    //   CLP: 567233.3,
    //   PEN: 2836.77,
    //   PYG: 4961524.18,
    //   UYU: 27161.48,
    //   VEF: 69342014,
    //   CRC: 491742.86,
    //   MXN: 16399.26,
    //   NGN: 313297.46,
    //   INR: 59392.82,
    //   RUB: 54372.12,
    //   AUD: 1175.32,
    //   BRL: 3330.68,
    //   CAD: 1146.01,
    //   ZAR: 11520,
    //   GHS: 4155.94,
    //   JPY: 98025.65,
    //   ILS: 3155.57,
    //   SAR: 3254.39,
    //   KRW: 979163.05,
    //   COP: 2509470.44,
    //   PHP: 46374.53,
    //   PLN: 3199.97
    // }

    (async () => {
      let current = await BITBOX.Price.current('usd');
      console.log(current);
    })()
    // 868.57

---
title: Extended Public Keys
author: Gabriel Cardona
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

Bitcoin Cash offers an unimaginably large number of addresses. This allows you to use a new address for every transaction which greatly increases your privacy. However most people keep their private keys offline in a hardware or paper wallet so it’s not convenient to generate new addresses for each transaction. Extended public keys (xpub) let you share or deploy only your xpub and applications can produce an infinite number of public keys and $BCH addresses, but can’t spend any of the $BCH sent to those addresses.

## fromXPub

`bitbox-sdk` now has an `Address.fromXPub` method which takes an `xpub` as a first argument and an `index` as an optional 2nd argument which defaults to “0/0”.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(
    BITBOX.Address.fromXPub(
      'xpub6Bs8HUjmkWC8F6yN6AB4t4npFg7R3EAnzY8yZKRMEiLdTr1PNFwhVSWSaUSkNs43pehV4dNvaQqUAUmAWQXATDQNb1S9EhH515BjyRz5ZNE',
      `${i}`
    )
  )
}
// bitcoincash:qrxrc8z2crecu54fvhl5ugku92rcyylqqgfydz48gm
// bitcoincash:qzvg5h97fg0l8a28hwf5ynmp9x3dwrm9ugkw2ngmt3
// bitcoincash:qz7gaqvu9crsrj6z70hhu5vd93h64rxcwqhuvgac8d
// bitcoincash:qzcru5knw8as09cwzp594ma2xv7yj8gl55f62vw3jg
// bitcoincash:qzxfk738ymn78wh4l9j830jf9qfe60rh0yd9plh38k
```

## Usage

This can be useful if you’re accepting donations on your website and want to generate a new address for each donation. Or if you’re a merchant and you want to create a new address for each transaction.

Write a script to generate the addresses 1 at a time and check the blockchain to see if each address has any inputs/outputs. If so then someone has already sent that address a donation so generate the next address and try again until you find an address with no transactions.

## Privacy

**Be aware** that if you use `BITBOX.Address.fromXPub` in the browser or share your `xpub` w/ anyone else they will be able to generate all your public keys and know exactly how much money has in total been sent to that `xpub`. They **cannot** spend any funds unless they also have the private keys.

As a matter of good practice you should keep your private keys in a hardware wallet or as a mnemonic on a paper wallet. You should be aware that using `xpub` comes w/ lessened privacy if you make your `xpub` known to anyone.

## Summary

Extended public keys make generating a new address for every transaction possible. `BITBOX.Address.fromXPub` makes it quick and easy for devs to have their apps create an infinite number of addresses for their users w/out needing to expose their users to loss via holding their private keys.

---
  title: Wallet
  icon: home
  ordinal: 9
---

### `newAddress`

Returns a new Bitcoin address for receiving payments

#### Result

address `String`: new cash address

#### Examples


    Wormhole.Wallet.newAddress().then((result) => {
    console.log(result);
    }, (err) => {
    console.log(err);
    });
    // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl


### `sendToAddress`

Send an amount to a given address.

#### Arguments

1.  address (string, required)
2.  amount (number, required)

#### Result

txid `String`: The transaction id.

#### Examples


    Wormhole.Wallet.sendToAddress('bitcoincash:qr8phzdujywdng73dxqu3w794tphq76gjgwy4r8agj', 6.11424169).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });

---
title: CashID
icon: user-circle
ordinal: 4
---

CashID is a protocol allowing authentication with a user's Bitcoin Cash wallet.
The specification is available on [gitlab](https://gitlab.com/cashid/protocol-specification).

#### Arguments

- account `String` cashaddr address of user's address
- cashIdRequest `String` Cash ID request URI
- `Callback` with error parameter

#### Result

`Failure` err will contain error details

#### Example

      if (typeof web4bch !== 'undefined') {
        web4bch = new Web4Bch(web4bch.currentProvider))

        var cashIdRequest = 'cashid:cashid.badgerwallet.cash/api/parse.php?x=678525554'

        web4bch.bch.sign(web4bch.bch.defaultAccount, cashIdRequest, function(err) {
          if (err) return

          console.log('CashID auth success')
        })
      }

#### Demo

[Demo Page](https://cashid.badgerwallet.cash/)

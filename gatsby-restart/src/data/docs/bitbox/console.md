---
  title: Console
  icon: terminal
  ordinal: 2
---

Launch a console w/ the entire Bitcoin Cash RPC available as well as dozens of helper methods via a built in `BITBOX` object. Pass in an `--environment` flag to connect to environments defined in a local `bitbox.js`. By default console will connect to your development environment.

```bash
$ bitbox console --environment production
> BITBOX.
BITBOX.Address               BITBOX.BitcoinCash           BITBOX.Block                 BITBOX.Blockchain            BITBOX.Control               BITBOX.Crypto                BITBOX.ECPair                BITBOX.Generating            BITBOX.restURL
BITBOX.HDNode                BITBOX.Mining                BITBOX.Mnemonic              BITBOX.Network               BITBOX.Price                 BITBOX.RawTransactions       BITBOX.Script                BITBOX.Socket
BITBOX.Transaction           BITBOX.TransactionBuilder    BITBOX.Util
```

### Quickly test your ideas


```javascript
bitbox console

> BITBOX.BitcoinCash.toSatoshi(9)
// 900000000

> BITBOX.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// create mnemonic
> let mnemonic = BITBOX.Mnemonic.generate(128);
// ancient slide suggest chaos vivid property trophy faith bamboo lunch save hint

// create seed buffer from mnemonic
> let seedBuffer = BITBOX.Mnemonic.toSeed(mnemonic);

// create HDNode from seed buffer
> let hdNode = BITBOX.HDNode.fromSeed(seedBuffer);

// derive hardened child HDNode
> let childNode = BITBOX.HDNode.derivePath(hdNode, "m/44'/145'/0'");
> BITBOX.HDNode.toXPriv(childNode)
// xprv9yHczLBaxwHo85o8mJVHSu1ghxEWM2QZcrvWFvHWXgkqfuqNz6EDNxv4wAPTBwX7nkrnBTPgdCZi7qyQAF72MF4KTq9UzzygDhvBajpwScs

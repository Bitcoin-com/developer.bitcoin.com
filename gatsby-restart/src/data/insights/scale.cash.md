---
title: Scale.cash
author: Gabriel Cardona
description: Pushing the limits
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

## Scale.cash

Bitcoin Cash is uniquely suited to be the business friendly blockchain. It has capacity and scale on demand while keeping fees consistently low. The recently announced [Stress Test Day](https://stresstestbitcoin.cash/) is a community driven effort to create 5 million on-chain transactions on Sept 1st with the aim of showing the world that Bitcoin Cash is ready for prime time.

[@SpendBCH_io](https://twitter.com/SpendBCH_io) created [Scale.cash](https://www.scale.cash), powered by [BITBOX](../bitbox.html), to allow anyone to be able to participate on Stress Test Day. You simply send some BCH to a newly generated address and scale.cash takes care of the rest. You can send tens of thousands of on-chain Bitcoin Cash Transactions per hour with no more effort than scanning a QR code.

[![Stresstest logo](../img/insights/scale-1.png)](https://stresstestbitcoin.cash)

[![scale.cash logo](../img/insights/scale-logo.png)](https://www.scale.cash)

---

### Usage

#### Create new wallet

SpendBCH deserves credit for making scale.cash extremely easy to use. The first time you show up simply click a 'Create New Wallet' button. This will create a new wallet which is local to your browser. This wallet is completely new and has never been seen or used by anyone before. It was created specifically for you to use for scale.cash.

![](../img/insights/scale-3.png)

After you click 'Create New Wallet', [Scale.cash](https://www.scale.cash) will create an address and QR code for you to deposit satoshis. Notice the prompt to save the following information:

- **WIF** A private key in wallet import format. Import your WIF to get back any dust or change after a stress test.
- **mnemonic** The seed phrase for all addresses generated during the test. Import your mnemonic to recover any lost funds from an incomplete stress test, such as if your browser crashed during a stress test.
- **message** The message included in every transaction you send.
- **signature** Proof that you sent these transactions for the stress test.

Your wallet is only ever accessed locally and all transactions are signed by your own computer, so it can be valuable to back that data up in some way.

![](../img/insights/scale-4.png)

---

#### Fund wallet

Download a [Bitcoin Cash Wallet](https://wallet.bitcoin.com/) and scan the QR code at scale.cash. Send the address between 15,000–1,300,000 satoshis—or at the time of this writing, between $0.08–$7.

In this example we're using the bitcoin.com mobile iOS wallet. We sent $1 and it created txid [1467afce1d35fa4ada2feaeb1beba0573971783e2d1af271e3d6e9a4c660afa1](https://explorer.bitcoin.com/bch/tx/1467afce1d35fa4ada2feaeb1beba0573971783e2d1af271e3d6e9a4c660afa1).

![bitcoin.com ios wallet shot 1](../img/insights/scale-5.png)

![bitcoin.com ios wallet shot 2](../img/insights/scale-6.png)

Once your funding transaction has been sent go back to scale.cash and click the 'Refresh Balance' button. This will check the blockchain for your balance and show it on screen. In this example we have 181,274 satoshis for this stress test.

![Refresh Balance 1](../img/insights/scale-7.png)

![Refresh Balance 2](../img/insights/scale-8.png)

Note that it shows how many transactions will be created. Also it gives you the option to donate any dust or change satoshis to [@eatBCH](https://twitter.com/eatBCH). At the bottom you'll see "Mempool Size" and "Your Total TX Sent." As your transactions are broadcast you'll see these numbers increase.

![Mempool Size](../img/insights/scale-9.png)

---

#### Launch Stress Test

We're ready to launch the stress test. Click the 'Start Stresstest' button to create the first 'fan out' transaction, called so because it fans out from 1 input to many outputs. Here you can see it's a 1-to-28 w/ txid [5730e2faf7e8c0dd6a6c58c77c7889315a83c2a7765f7bd56033ba37a504878a](https://explorer.bitcoin.com/bch/tx/5730e2faf7e8c0dd6a6c58c77c7889315a83c2a7765f7bd56033ba37a504878a)

![Start Stresstest](../img/insights/scale-10.png)

![fan out txid](../img/insights/scale-11.png)

**PLEASE BE AWARE that your fan-out transction requires 1 confirmation before the rest of your transactions will begin to broadcast**. After the fan out transaction gets confirmed in 1 block scale.cash will begin sending out transactions in batches of 20 at 500txs per minute.

![Waiting for txs to configm](../img/insights/scale-13.png)

You'll see the "Mempool Size" and "Your Total TX Sent" numbers climbing while scale.cash sends out txs. Each transaction will contain an `OP_RETURN` with `stresstestbitcoin.cash`.

![](../img/insights/scale-12.png)

Notice the last message, we still have 3 transactions remaining before the stress test can complete. The last few require one confirmation and will [consolidate the utxo back to a single output](https://explorer.bitcoin.com/bch/tx/2dd7613cd53dd1997e296691a01993af5b63edf8b7f4c9252e60d1a2cfc82df2) and (optionally) donate your dust and change to EatBCH. If the donation box is not checked, the remaining dust and change will be returned to your scale.cash wallet.

![](../img/insights/scale-14.png)

---

### BITBOX

Scale.cash is a great example of an app which is powered by [BITBOX](../bitbox.html). It was built from the ground up by leveraging [scaffolds](../tutorials/bitbox-scaffolds.html) which let you bootstrap a Bitcoin Cash app in under a minute in React, Angular, NextJS, VueJS and NodeJS.

    bitbox new scale.cash --scaffold react

![new BITBOX app](../img/insights/scale-15.png)

#### mnemonic

This creates a basic BIP44 wallet in a react app with BITBOX already bundled. The scale.cash codebase also shows how to [create a mnemonic](https://github.com/SpendBCH/bch-stresstest-web/blob/7e7300f192701bf256252c118fe8dd3d4d6d475b/src/stresstest-lib/wallet.js#L20).

    this.mnemonic = BITBOX.Mnemonic.generate(256)

Which can then be [stored and reloaded](https://github.com/SpendBCH/bch-stresstest-web/blob/a4b0f3493f467efc32ff9a3f03ca0ad96a6f87f8/src/App.js#L17) when your component mounts.

    componentDidMount() {
      // Import wallet if stored locally
      let mnemonic
      if (window.scaleCashSettings.isTestnet) {
        mnemonic = JSON.parse(localStorage.getItem('testnetMnemonic'))
      } else {
        mnemonic = JSON.parse(localStorage.getItem('mnemonic'))
      }
      if (mnemonic != null) {
        this.createWallet(mnemonic)
      }
    }

#### HDNode

It also shows how to create a root seed, BIP44 master HDNode, first external change node, privkeyWIF, ECPair, PubKey and [address in legacy and cash format](https://github.com/SpendBCH/bch-stresstest-web/blob/7e7300f192701bf256252c118fe8dd3d4d6d475b/src/stresstest-lib/wallet.js#L25-L34).

    let rootSeed = BITBOX.Mnemonic.toSeed(this.mnemonic)
    let masterHDNode = BITBOX.HDNode.fromSeed(rootSeed, window.scaleCashSettings.networkString)
    this.hdNode = BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'/0'")
    this.node0 = BITBOX.HDNode.derivePath(this.hdNode, "0/0")
    this.node0WIF = BITBOX.ECPair.toWIF(BITBOX.HDNode.toKeyPair(this.node0))

    let ecpair = BITBOX.ECPair.fromWIF(this.node0WIF)
    this.node0LegacyAddress = BITBOX.ECPair.toLegacyAddress(ecpair)
    this.node0CashAddress = BITBOX.ECPair.toCashAddress(ecpair)
    this.pubKey = Buffer(BITBOX.ECPair.toPublicKey(ecpair), 'hex')

#### REST

Scale.cash uses [bitcoin.com's REST API](https://rest.bitcoin.com) to send batch requests of tx [data to the blockchain](https://github.com/SpendBCH/bch-stresstest-web/blob/master/src/stresstest-lib/utils.js#L3-L9).

    if (window.scaleCashSettings.isTestnet) {
      BITBOX = new BITBOXCli({
        restURL: 'https://trest.bitcoin.com/v1/'
      })
    } else {
      BITBOX = new BITBOXCli();
    }

By default BITBOX will connect to a mainnet REST API. However, BITBOX also supports passing in a restURL parameter so you can use the bitcoin.com REST testnet or your own REST API.

#### Sign and verify message

Every newly created address in scale.cash signs the message `stresstestbitcoin.cash` with [it's private keys](https://github.com/SpendBCH/bch-stresstest-web/blob/7e7300f192701bf256252c118fe8dd3d4d6d475b/src/stresstest-lib/wallet.js#L43-L44).

    this.messageToSign = "stresstestbitcoin.cash";
    this.signature = BITBOX.BitcoinCash.signMessageWithPrivKey(this.node0WIF, this.messageToSign);

This is useful if you want to prove ownership of this address. You can share the **address**, **Message** and **Message Signature Proof** and using a tool like BITBOX GUI prove ownership.

![BITBOX GUI](../img/insights/scale-16.png)

Or you can verify ownership with `bitbox-cli`.

    BITBOX.BitcoinCash.verifyMessage('bitcoincash:qrxju3vcdctp8s9zx7224s2extas8gc2juyk5ayhyv', 'IEqQIvP0x1RP0GIFlWZonP7ObQQ2nWu8oATX5pq31ryTToDtrTgKb3JNZnAePcyZui7jgZt7oEzA7/q4FSlfL94=', 'stresstestbitcoin.cash')
    // true

#### Encode OP_RETURN

Scale.cash also [shows how](https://github.com/SpendBCH/bch-stresstest-web/blob/master/src/stresstest-lib/utils.js#L11-L12) to encode null data or `OP_RETURN` outputs.

    const opReturnTagText = "stresstestbitcoin.cash";
    const opReturnTagBuffer = BITBOX.Script.nullData.output.encode(Buffer.from(opReturnTagText, 'ascii'));

#### Transaction

Finally scale.cash [shows how](https://github.com/SpendBCH/bch-stresstest-web/blob/master/src/stresstest-lib/utils.js#L183) to create transactions with P2PKH inputs/outputs and an `OP_RETURN` output.

    let transactionBuilder = new BITBOX.TransactionBuilder(window.scaleCashSettings.networkString)
    transactionBuilder.addInput(wallet.txid, wallet.vout)
    transactionBuilder.addOutput(targetAddress, satoshisAfterFee)

    // write stresstestbitcoin.cash to the chain w/ OP_RETURN
    transactionBuilder.addOutput(opReturnTagBuffer, 0);

    let redeemScript
    transactionBuilder.sign(0, wallet.keyPair, redeemScript, transactionBuilder.hashTypes.SIGHASH_ALL, wallet.satoshis)

    let hex = transactionBuilder.build().toHex()

The code is [open source under the MIT license](https://github.com/SpendBCH/bch-stresstest-web) so check out all the great ways BITBOX is used or clone it to use as a starting point for your own app.

---

### Recoving Funds

If a problem occurs during a running stress test, funds can be recovered with the [Electron Cash wallet](https://electroncash.org/).

Start by clicking File -> New/Restore to launch the 'Install Wizard'. Name the wallet anything you like. Electron Cash suggested wallet_1 here. Click next to choose the wallet type.

![Fund recovery step 1](../img/insights/scale-recovery-1.png)

Select 'Standard wallet'. Click next to choose your restore option.

![Fund recovery step 2](../img/insights/scale-recovery-2.png)

Select 'I already have a seed'. The seed referred to here is your mnemonic saved from scale.cash. Click next.

![Fund recovery step 3](../img/insights/scale-recovery-3.png)

Paste your mnemonic from scale.cash into the textbox. Click options and ensure you check 'BIP39 seed' then click OK. If it does not say 'BIP39 (checksum: ok)' look for and fix any letters missing from the words.

![Fund recovery step 4](../img/insights/scale-recovery-4.png)

The default derivation is for Bitcoin Cash addresses. Click Next.

![Fund recovery step 5](../img/insights/scale-recovery-5.png)

Your scale.cash wallet should now be ready for use in Electron Cash. The History tab will show the transactions made by scale.cash. Now you can recover your coins with the Send tab.

![Fund recovery step 6](../img/insights/scale-recovery-6.png)

---

### Summary

Bitcoin Cash is uniquely suited to be the business friendly blockchain. It has capacity and scale on demand while keeping fees consistently low. SpendBCH created [scale.cash](https://www.scale.cash/), which leverages BITBOX SDK and REST, to give the community a very user friendly way to participate in the upcoming Stress Test Day.

Scale.cash is the perfect example of an app which was bootstrapped with BITBOX scaffolds and then built leveraging mnemonics, HDNodes, ECPairs, signing messages, creating transactions, writing to the blockchain with `OP_RETURN` and calling BITBOX REST.

[![](../img/insights/scale-logo.png)](https://www.scale.cash)

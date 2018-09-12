---
title: Utilities Part 2
author: Gabriel Cardona
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

[HD Wallets](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05.asciidoc) are at the heart of most Bitcoin Cash apps. Being able to quickly create them can let developers create more exciting $BCH apps quicker than ever. Today we’re releasing 7 new utility methods to let you quickly generate mnemonics, root seeds, master private keys, HD wallets and then to sign and verify messages w/ keys from that wallet.

## Mnemonic

    // Turn random bytes to mnemonic
            let entropy = BITBOX.Crypto.randomBytes(16);
            BITBOX.Mnemonic.fromEntropy(entropy);
            // talk able guilt away taxi opinion club pact together ribbon middle patch

            // Turn mnemonic to root seed
            BITBOX.Mnemonic.toSeed('enable stem left method one submit coach bid inspire cluster armed bracket');
            // <Buffer 0a fa b7 46 8f 0c df 79 0f 0e 44 37 45 0c 33 c3 c8 27 17 42 75 d6 13 02 c3 55 de ef 2e 69 57 e4 f5 dd 55 b6 a8 73 78 6d b8 09 36 75 af 4f 6b 2c 52 63 ... >

[More Info](bitbox/docs/mnemonic.html)

## HDNode

    // Create Master Private Key w/ rootSeed returned from BITBOX.Mnemonic.toSeed
            BITBOX.HDNode.fromSeed(rootSeed);
            // HDNode {
            //   keyPair:
            //    ECPair {
            //      d:
            //       BigInteger {
            //         '0': 16165580,
            //         '1': 1698946,
            //         '2': 60730916,
            //         '3': 61153040,
            //         '4': 43535631,
            //         '5': 50362316,
            //         '6': 59565996,
            //         '7': 31216958,
            //         '8': 59585223,
            //         '9': 2863301,
            //         '10': 0,
            //         t: 10,
            //         s: 0 },
            //      compressed: true,
            //      network:
            //       { messagePrefix: '\u0018Bitcoin Signed Message:\n',
            //         bech32: 'bc',
            //         bip32: [Object],
            //         pubKeyHash: 0,
            //         scriptHash: 5,
            //         wif: 128 } },
            //   chainCode: <Buffer 9e c5 3c 10 2c 6a ea b0 ff 1c d3 1e b4 1b b8 20 f9 dc 7a 32 08 fc 5a 18 ca 5f db ef 09 ea 4c f7>,
            //   depth: 0,
            //   index: 0,
            //   parentFingerprint: 0 }

[More Info](bitbox/docs/hdnode.html)

## HDNode

    // Create keypair from private key in wallet import format
            BITBOX.ECPair.fromWIF('KxYoF3rr34fxUtGwfeASBrz6AWLjJCMG5wniooriX8NvHucsTDFz');
            // ECPair {
            //   d:
            //    BigInteger {
            //      '0': 22234870,
            //      '1': 51704986,
            //      '2': 65514685,
            //      '3': 58120869,
            //      '4': 9188204,
            //      '5': 19136219,
            //      '6': 39908188,
            //      '7': 58691735,
            //      '8': 30573386,
            //      '9': 649733,
            //      t: 10,
            //      s: 0 },
            //   compressed: true,
            //   network:
            //    { messagePrefix: '\u0018Bitcoin Signed Message:\n',
            //      bech32: 'bc',
            //      bip32: { public: 76067358, private: 76066276 },
            //      pubKeyHash: 0,
            //      scriptHash: 5,
            //      wif: 128 } }

[More Info](bitbox/docs/ecpair.html)

## BitcoinCash

    BITBOX.BitcoinCash.signMessageWithPrivKey('KxtpRDUJDiutLaTV8Vuavhb6h7zq9YV9ZKA3dU79PCgYmNVmkkvS', "EARTH");
            // IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=

            BITBOX.BitcoinCash.verifyMessage('bitcoincash:qp2zvw3zpk5xx43w4tve7mtekd9kaxwj4uenq9eupv', 'IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=', 'EARTH')
            // true

[More Info](bitbox/docs/bitcoincash.html)

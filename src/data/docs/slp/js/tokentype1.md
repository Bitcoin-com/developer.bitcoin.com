---
title: TokenType1
icon: circle
ordinal: 9
---

### `create`

Create a new SLP Token of Type 1

#### Arguments

1.  createConfig `Object` required

##### Valid config properties

- `fundingAddress`: `string`. **required** slp address format
- `fundingWif`: `string`. **required** compressed WIF format. Available via `SLP.HDNode.toWIF`
- `tokenReceiverAddress` : `string`. **required** slp address format
- `bchChangeReceiverAddress` : `String.` **required** cash address format
- `batonReceiverAddress`: `string`. **optional** slp address format. The address which has the baton has the ability to mint more tokens.
- `decimals`: `number`. **required** Number of decimal points for your token
- `name` : `string`. **required** Name of token
- `symbol` : `string`. **required** Token symbol
- `documentUri` : `string`. **required** URI of token document
- `documentHash` : `string`. **required** Hash of token document
- `initialTokenQty` : `number`. **required** Initial token quantity

#### Result

tokenId `string`. The tokenId of your newly created token. This tokenId is the txid of the genesis tx. You will use this tokenId as your token's unique identifier and to mint future tokens

#### Examples

    (async function() {
      try {
        let token = await SLP.TokenType1.create({
          fundingAddress: "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03",
          fundingWif: "cUCSrdhu7mCzx4sWqL6irqzprkofxPmLHYgkSnG2WaWVqJDXtWRS",
          tokenReceiverAddress:
            "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03",
          bchChangeReceiverAddress:
            "bchtest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcmf0pnpav",
          batonReceiverAddress:
            "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03",
          decimals: 2,
          name: "Test SLP SDK Token",
          symbol: "GABRIEL",
          documentUri: "badger@bitcoin.com",
          documentHash: null,
          initialTokenQty: 1000
        });
        console.log(token);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    })();

    // returns
    // a3787d6b170707c59920486e9e03ea99f589fe4939454d36053d84dfc7388384

### `mint`

Mint additional tokens of Type 1

#### Arguments

1.  mintConfig `Object` required

##### Valid config properties

- `fundingAddress`: `string`. **required** slp address format
- `fundingWif`: `string`. **required** compressed WIF format. Available via `SLP.HDNode.toWIF`
- `tokenReceiverAddress` : `string`. **required** slp address format
- `bchChangeReceiverAddress` : `String.` **required** cash address format
- `batonReceiverAddress`: `string`. **optional** slp address format. The address which has the baton has the ability to mint more tokens.
- `tokenId`: `string`. **required** tokenId of token to mint more of
- `additionalTokenQty`: `number`. **required** Number of additional tokens to mint

#### Result

mintId `string`. The txid of the newly minted tokens

#### Examples

    (async function() {
      try {
        let mint = await SLP.TokenType1.mint({
          fundingAddress: "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03",
          fundingWif: "cUCSrdhu7mCzx4sWqL6irqzprkofxPmLHYgkSnG2WaWVqJDXtWRS",
          tokenReceiverAddress:
            "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03",
          batonReceiverAddress:
            "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03",
          bchChangeReceiverAddress:
            "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03",
          tokenId:
            "a3787d6b170707c59920486e9e03ea99f589fe4939454d36053d84dfc7388384",
          additionalTokenQty: 507
        });
        console.log(mint);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    })();

    // returns
    9d1595b34c488df7f26d39b5081e97c9939f4d8698ddbd86e5bbd3a54f95e96e

### `send`

Send tokens of Type 1. one-to-one, one-to-many, many-to-many and many-to-one token transactions supported

#### Arguments

1.  sendConfig `Object` required

##### Valid config properties

- `fundingAddress`: `string`. **required** slp address format
- `fundingWif`: `string`. **required** compressed WIF format. Available via `SLP.HDNode.toWIF`
- `tokenReceiverAddress` : `string` or `Array`. **required** slp address format
- `bchChangeReceiverAddress` : `string` or `Array`. **required** cash address format
- `tokenId`: `string`. **required** tokenId of token to send
- `amount`: `number`. **required** Number of tokens to send

#### Result

sendId `string`. The txid of your sent tokens

#### Examples

    // one-to-one
    (async function() {
      try {
        let send = await SLP.TokenType1.send({
          fundingAddress: "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03",
          fundingWif: "cUCSrdhu7mCzx4sWqL6irqzprkofxPmLHYgkSnG2WaWVqJDXtWRS",
          tokenReceiverAddress:
            "slptest:qrj9k49drcsk4al8wxn53hnkfvts6ew5jvv32952nh",
          bchChangeReceiverAddress:
            "bchtest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcmf0pnpav",
          tokenId:
            "a3787d6b170707c59920486e9e03ea99f589fe4939454d36053d84dfc7388384",
          amount: 1.01
        });
        console.log(send);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    })();
    // returns
    251eb8a71184251453eb373c8912c8afd67e6820de5679de91b930689e776be1

    // one-to-many
    (async function() {
      try {
        let send = await SLP.TokenType1.send({
          fundingAddress: "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03",
          fundingWif: "cUCSrdhu7mCzx4sWqL6irqzprkofxPmLHYgkSnG2WaWVqJDXtWRS",
          tokenReceiverAddress: [
            "slptest:qrj9k49drcsk4al8wxn53hnkfvts6ew5jvv32952nh",
            "slptest:qz7wjkg7s8e5khq2c6xeu6pcw28q4c0egglpawvw89",
            "slptest:qqwcgz4gl0sddcau57lygvycx7hgf2fjaylpalknp4",
            "slptest:qqvpqwvr9jpnhu0zq79th0fhtws9nhp5pyxnjjj2zx",
            "slptest:qrgcu3c2aqzp535s7cek5tdjgkpvh38dmg5h75q2c9",
            "slptest:qr0jjjjfatzg46adpa325grwdx39zfhdpgkxq2ejq9",
            "slptest:qppcj6hynmzx8nu0ewh7an454d3wt3ama5k7vua2nk",
            "slptest:qza6x2fef3jaxrr6vtkjkjsd8xcmwzaufqq66eur44",
            "slptest:qz9x0t4s5gzwtlgyx3avkq33ec2ph3g5tg0zws77qm",
            "slptest:qz4yf0k0z76wlmm4glvzrph2kld4h8y40ymn3wpaza",
            "slptest:qzxs4uqmjfrygkv0499ej0rvnqd6cj7y9yfsdwnnpk",
            "slptest:qqj98r7t8jalmepfc27776zvzdfwvxwhu58fsvqa7r",
            "slptest:qqrca59a98nxvq6zlqmzquerj5n68ntd3s5ac0elqg",
            "slptest:qpstysh49m30f2skd6hhjpr8wgp7jtxvqg27ww56up",
            "slptest:qqlesvq4ntx5day4fpunqewvlf7pdr9k2g424uvxj8",
            "slptest:qqez4680qx4rnpwm0xddwmd6v8dsr4x4rs9f2qmf8t",
            "slptest:qrfgwsahle0dfn7pd78rc6x496zgv96525nkr3agyg"
          ],
          bchChangeReceiverAddress:
            "bchtest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcmf0pnpav",
          tokenId:
            "a3787d6b170707c59920486e9e03ea99f589fe4939454d36053d84dfc7388384",
          amount: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17
          ]
        });
        console.log(send);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    })();
    // returns
    // 84a4b2a1ec002a769e5cf055a56f485a4652442b0bb8cae06f3ac4ee1ac6b49b

    // many-to-many
    (async function() {
      try {
        let send = await SLP.TokenType1.send({
          fundingAddress: [
            "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03",
            "slptest:qrj9k49drcsk4al8wxn53hnkfvts6ew5jvv32952nh"
          ],
          fundingWif: [
            "cUCSrdhu7mCzx4sWqL6irqzprkofxPmLHYgkSnG2WaWVqJDXtWRS",
            "cNVP2nTzUMFerfpjrTuDgoFGnKAfjZznKomknUVKQSdFHqK5cRc5"
          ],
          tokenReceiverAddress: [
            "qp8u8lsax86msxmvy236az4q2aq26pe2ng5dfkjsx2",
            "qqjdcjmqlenuas2qyj57n564s9rzushamcn9rg5ccl"
          ],
          bchChangeReceiverAddress:
            "bchtest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcmf0pnpav",
          tokenId:
            "47f4a3ecf16001d062852ecffac8d23cc2fce6816ea856b2ddc3638bae85cf98",
          amount: [1, 1]
        });
        console.log(send);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    })();
    // returns
    // c4b5b4c3536121f01705010ec7e4112ba05a45e151cc98a3e0378cd921a9f85f

    // many-to-one
    (async function() {
      try {
        let send = await SLP.TokenType1.send({
          fundingAddress: [
            "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03",
            "slptest:qrj9k49drcsk4al8wxn53hnkfvts6ew5jvv32952nh"
          ],
          fundingWif: [
            "cUCSrdhu7mCzx4sWqL6irqzprkofxPmLHYgkSnG2WaWVqJDXtWRS",
            "cNVP2nTzUMFerfpjrTuDgoFGnKAfjZznKomknUVKQSdFHqK5cRc5"
          ],
          tokenReceiverAddress: "qrrw0wkvyn4yrssprcqjrwthfz0e0edlmyj7gms7kj",
          bchChangeReceiverAddress:
            "bchtest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcmf0pnpav",
          tokenId:
            "47f4a3ecf16001d062852ecffac8d23cc2fce6816ea856b2ddc3638bae85cf98",
          amount: 12
        });
        console.log(send);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    })();
    // returns
    // d42b5e375025e4eece6437a060b7cc274bdc8143ccca51c290f2e76758c47a53

### `burn`

Burn an amount of tokens for an address by tokenId

**CAUTION: THIS WILL BURN AN AMOUNT OF YOUR TOKENS FOR A TOKENID. PLEASE USE WITH CARE**

#### Arguments

1.  burnConfig `Object` required

##### Valid config properties

- `fundingAddress`: `string`. **required** slp address format
- `fundingWif`: `string`. **required** compressed WIF format. Available via `SLP.HDNode.toWIF`
- `bchChangeReceiverAddress` : `String.` **required** cash address format
- `tokenId`: `string`. **required** tokenId of token to burn all of
- `amount`: `number`. **required** Amount of tokens to burn

#### Result

txid `string`. The txid of your burned tokens

#### Examples

    (async function() {
      try {
        let burn = await SLP.TokenType1.burn({
          fundingAddress: "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03",
          fundingWif: "cUCSrdhu7mCzx4sWqL6irqzprkofxPmLHYgkSnG2WaWVqJDXtWRS",
          tokenId:
            "a3787d6b170707c59920486e9e03ea99f589fe4939454d36053d84dfc7388384",
          amount: 5.99,
          bchChangeReceiverAddress:
            "slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03"
        });
        console.log(burn);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    })();

    // returns
    2c90f44dbb0a3257ded2c30d46d387490aee61eecd168534c8b645ffe21cbc50

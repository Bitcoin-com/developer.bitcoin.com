---
title: TokenType1
icon: circle
ordinal: 6
---

### `create`

Create a new SLP Token of Type 1

#### Arguments

1.  createConfig `Object` required

##### Valid config properties

- `fundingAddress`: `String`. **required** slp address format
- `fundingWif`: `String`. **required** compressed WIF format. Available via `SLP.HDNode.toWIF`
- `tokenReceiverAddress` : `String`. **required** slp address format
- `bchChangeReceiverAddress` : `String.` **required** cash or slp address format
- `batonReceiverAddress`: `String`. **optional** slp address format. The address which has the baton has the ability to mint more tokens.
- `decimals`: `Number`. **required** Number of decimal points for your token
- `name` : `String`. **required** Name of token
- `symbol` : `String`. **required** Token symbol
- `documentUri` : `String`. **required** URI of token document
- `documentHash` : `String`. **required** Hash of token document
- `initialTokenQty` : `Number`. **required** Initial token quantity

#### Result

tokenId `String`. The tokenId of your newly created token. This tokenId is the txid of the genesis tx. You will use this tokenId as your token's unique identifier and to mint future tokens

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

- `fundingAddress`: `String`. **required** slp address format
- `fundingWif`: `String`. **required** compressed WIF format. Available via `SLP.HDNode.toWIF`
- `tokenReceiverAddress` : `String`. **required** slp address format
- `bchChangeReceiverAddress` : `String.` **required** cash or slp address format
- `batonReceiverAddress`: `String`. **optional** slp address format. The address which has the baton has the ability to mint more tokens.
- `tokenId`: `String`. **required** tokenId of token to mint more of
- `additionalTokenQty`: `Number`. **required** Number of additional tokens to mint

#### Result

mintId `String`. The txid of the newly minted tokens

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

Send tokens of Type 1

#### Arguments

1.  sendConfig `Object` required

##### Valid config properties

- `fundingAddress`: `String`. **required** slp address format
- `fundingWif`: `String`. **required** compressed WIF format. Available via `SLP.HDNode.toWIF`
- `tokenReceiverAddress` : `String`. **required** slp address format
- `bchChangeReceiverAddress` : `String.` **required** cash or slp address format
- `tokenId`: `String`. **required** tokenId of token to send
- `amount`: `Number`. **required** Number of tokens to send

#### Result

sendId `String`. The txid of your sent tokens

#### Examples

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

### `burn`

Burn an amount of tokens for an address by tokenId

**CAUTION: THIS WILL BURN AN AMOUNT OF YOUR TOKENS FOR A TOKENID. PLEASE USE WITH CARE**

#### Arguments

1.  burnConfig `Object` required

##### Valid config properties

- `fundingAddress`: `String`. **required** slp address format
- `fundingWif`: `String`. **required** compressed WIF format. Available via `SLP.HDNode.toWIF`
- `bchChangeReceiverAddress` : `String.` **required** cash or slp address format
- `tokenId`: `String`. **required** tokenId of token to burn all of
- `amount`: `Number`. **required** Amount of tokens to burn

#### Result

txid `String`. The txid of your burned tokens

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

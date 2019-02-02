---
title: TokenType1
icon: circle
ordinal: 5
---

### `create`

Create a new SLP Token of Type 1

#### Arguments

1.  createConfig `Object` required

#### Result

tokenId `string`

#### Examples

    (async function() {
      let token = await SLP.SlpTokenType1.create({
        fundingAddress: "slptest:qpwyc9jnwckntlpuslg7ncmhe2n423304ueqcyw80l",
        fundingWif: "cVjzvdHGfQDtBEq7oddDRcpzpYuvNtPbWdi8tKQLcZae65G4zGgy",
        tokenReceiverAddress: "slptest:qpwyc9jnwckntlpuslg7ncmhe2n423304ueqcyw80l",
        batonReceiverAddress: "slptest:qpwyc9jnwckntlpuslg7ncmhe2n423304ueqcyw80l",
        bchChangeReceiverAddress:
          "slptest:qpwyc9jnwckntlpuslg7ncmhe2n423304ueqcyw80l",
        decimals: 2,
        name: "Awesome SLP SDK Token",
        ticker: "SLPSDK",
        documentUri: "badger@bitcoin.com",
        documentHash: null,
        initialTokenQty: 1000000
      })
      console.log(token)
    })()

    // returns
    [ 'c3bf908a9877f44e200ad931ee1836cc382d413c96085cd935e82aa43a321f44' ]

### `mint`

Mint additional tokens of Type 1

#### Arguments

1.  mintConfig `Object` required

#### Result

mintId `string`

#### Examples

    (async function() {
      let mint = await SLP.TokenType1.mint({
        fundingAddress: "slptest:qpwyc9jnwckntlpuslg7ncmhe2n423304ueqcyw80l",
        fundingWif: "cVjzvdHGfQDtBEq7oddDRcpzpYuvNtPbWdi8tKQLcZae65G4zGgy",
        tokenReceiverAddress: "slptest:qpwyc9jnwckntlpuslg7ncmhe2n423304ueqcyw80l",
        batonReceiverAddress: "slptest:qpwyc9jnwckntlpuslg7ncmhe2n423304ueqcyw80l",
        bchChangeReceiverAddress:
          "slptest:qpwyc9jnwckntlpuslg7ncmhe2n423304ueqcyw80l",
        tokenIdHexToMint:
          "a67e2abb2fcfaa605c6a3b0dfb642cc830b63138d85b5e95eee523fdbded4d74",
        additionalTokenQty: 1234
      })
      console.log(mint)
    })()

    // returns
    [ 'ec01483d599c187afecb6036568eb1d39523466c43b9b79c15aacb7d21a84a5d' ]

### `send`

Send tokens of Type 1

#### Arguments

1.  sendConfig `Object` required

#### Result

sendId `string`

#### Examples

    (async function() {
      let send = await SLP.TokenType1.send({
        fundingAddress: "slptest:qpwyc9jnwckntlpuslg7ncmhe2n423304ueqcyw80l",
        fundingWif: "cVjzvdHGfQDtBEq7oddDRcpzpYuvNtPbWdi8tKQLcZae65G4zGgy",
        tokenReceiverAddress: "slptest:qpwyc9jnwckntlpuslg7ncmhe2n423304ueqcyw80l",
        bchChangeReceiverAddress:
          "slptest:qpwyc9jnwckntlpuslg7ncmhe2n423304ueqcyw80l",
        tokenId: "a67e2abb2fcfaa605c6a3b0dfb642cc830b63138d85b5e95eee523fdbded4d74",
        sendAmount: 10
      })
      console.log(send)
    })()

    // returns
    [ '940acd3337c08f9a68d22f35cc1460630078563dd1917409dc3d0387879699f7' ]
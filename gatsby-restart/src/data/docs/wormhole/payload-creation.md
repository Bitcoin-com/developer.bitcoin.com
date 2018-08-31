---
  title: PayloadCreation
  icon: plus
  ordinal: 6
---

### `burnBCH`

Creates the payload to burn bch to get whc.

#### Result

payload `String`: the hex-encoded payload

#### Examples


    (async () => {
      try {
        let burnBCH = await Wormhole.PayloadCreation.burnBCH();
        console.log(burnBCH);
      }
      catch(error) {
        console.error(error)
      }
    })()
    // 00000044


### `changeIssuer`

Creates the payload to change the issuer on record of the given tokens.

#### Arguments

1.  propertyId `Number` required: The identifier of the tokens

#### Result

payload `String`: the hex-encoded payload

#### Examples


    (async () => {
      try {
        let changeIssuer = await Wormhole.PayloadCreation.changeIssuer(3);
        console.log(changeIssuer);
      }
      catch(error) {
        console.error(error)
      }
    })()
    // 0000004600000003


### `closeCrowdSale`

Creates the payload to manually close a crowdsale.

#### Arguments

1.  propertyId `Number` required: The identifier of the crowdsale to close

#### Result

payload `String`: the hex-encoded payload

#### Examples


    (async () => {
      try {
        let closeCrowdSale = await Wormhole.PayloadCreation.closeCrowdSale(70);
        console.log(closeCrowdSale);
      }
      catch(error) {
        console.error(error)
      }
    })()
    // 0000003500000046


### `grant`

Creates the payload to issue or grant new units of managed tokens.

#### Arguments

1.  propertyId `Number` required: The identifier of the tokens to grant
2.  amount `String` required: The amount of tokens to create
3.  memo `String` optional: A text note attached to this transaction (none by default)

#### Result

payload `String`: the hex-encoded payload

#### Examples


    (async () => {
      try {
        let grant = await Wormhole.PayloadCreation.grant(3, "7000");
        console.log(grant);
      }
      catch(error) {
        console.error(error)
      }
    })()
    // 00000037000000030000000000001b5800


### `crowdsale`

Creates the payload for a new tokens issuance with crowdsale.

#### Arguments

1.  ecosystem `String` required: The ecosystem to create the tokens in, must be 1
2.  propertyPrecision `Number` required: The precision of the tokens to create:\[0, 8\]
3.  previousId `Number` required: An identifier of a predecessor token (0 for new crowdsales)
4.  category `String` required: A category for the new tokens
5.  subcategory `String` required: A subcategory for the new tokens
6.  name `String` required: The name of the new tokens to create
7.  url `String` required: An URL for further information about the new tokens
8.  data `String` required: A description for the new tokens
9.  propertyIdDesired `Number` required: The identifier of a token eligible to participate in the crowdsale
10.  tokensPerUnit `String` required: The amount of tokens granted per unit invested in the crowdsale
11.  deadline `Number` required: The deadline of the crowdsale as Unix timestamp
12.  earlyBonus `Number` required: An early bird bonus for participants in percent per week
13.  undefine `Number` required: The value must be 0
14.  totalNumber `String` required: The number of tokens to create

#### Result

payload `String`: the hex-encoded payload

#### Examples


    (async () => {
      try {
        let crowdsale = await Wormhole.PayloadCreation.crowdsale(1, 1, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "www.example.com", "Quantum Miner Tokens", 1, "100", 1483228800, 30, 0, 192978657);
        console.log(crowdsale);
      }
      catch(error) {
        console.error(error)
      }
    })()
    // 0000003301000100000000436f6d70616e69657300426974636f696e204d696e696e67005175616e74756d204d696e6572007777772e6578616d706c652e636f6d005175616e74756d204d696e657220546f6b656e73000000000100000002540be40000000000586846801e0000000000730634ca


### `fixed`

Creates the payload for a new tokens issuance with fixed supply.

#### Arguments

1.  ecosystem `String` required: The ecosystem to create the tokens in, must be 1
2.  propertyPrecision `Number` required: The precision of the tokens to create:\[0, 8\]
3.  previousId `Number` required: An identifier of a predecessor token (0 for new crowdsales)
4.  category `String` required: A category for the new tokens)
5.  subcategory `String` required: A subcategory for the new tokens)
6.  name `String` required: The name of the new tokens to create
7.  url `String` required: An URL for further information about the new tokens)
8.  data `String` required: A description for the new tokens)
9.  amount `String` required: The number of tokens to create

#### Result

payload `String`: the hex-encoded payload

#### Examples


    (async () => {
      try {
        let fixed = await Wormhole.PayloadCreation.fixed(1, 1, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "www.example.com", "Quantum Miner Tokens", "1000000");
        console.log(fixed);
      }
      catch(error) {
        console.error(error)
      }
    })()

    // 0000003201000100000000436f6d70616e69657300426974636f696e204d696e696e67005175616e74756d204d696e6572007777772e6578616d706c652e636f6d005175616e74756d204d696e657220546f6b656e73000000000000989680


### `managed`

Creates the payload for a new tokens issuance with manageable supply.

#### Arguments

1.  ecosystem `String` required: The ecosystem to create the tokens in, must be 1
2.  propertyPrecision `Number` required: The precision of the tokens to create:\[0, 8\]
3.  previousId `Number` required: An identifier of a predecessor token (0 for new crowdsales)
4.  category `String` required: A category for the new tokens
5.  subcategory `String` required: A subcategory for the new tokens
6.  name `String` required: The name of the new tokens to create
7.  url `String` required: An URL for further information about the new tokens
8.  data `String` required: A description for the new tokens

#### Result

payload `String`: the hex-encoded payload

#### Examples


    (async () => {
      try {
        let managed = await Wormhole.PayloadCreation.managed(1, 1, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "www.example.com", "Quantum Miner Tokens");
        console.log(managed);
      }
      catch(error) {
        console.error(error)
      }
    })()

    // 0000003601000100000000436f6d70616e69657300426974636f696e204d696e696e67005175616e74756d204d696e6572007777772e6578616d706c652e636f6d005175616e74756d204d696e657220546f6b656e7300


### `participateCrowdSale`

Create the payload for a participate crowsale transaction

#### Arguments

1.  `String` required: The amount of WHC to particrowsale

#### Result

payload `String`: the hex-encoded payload

#### Examples


    (async () => {
      try {
        let participateCrowdSale = await Wormhole.PayloadCreation.participateCrowdSale("100.0");
        console.log(participateCrowdSale);
      }
      catch(error) {
        console.error(error)
      }
    })()

    // 000000010000000100000002540be400


### `revoke`

Creates the payload to revoke units of managed tokens.

#### Arguments

1.  propertyId `String` required: The identifier of the tokens to revoke
2.  amount `String` required: The amount of tokens to revoke
3.  memo `String` optional: A text note attached to this transaction (none by default)

#### Result

payload `String`: the hex-encoded payload

#### Examples


    (async () => {
      try {
        let revoke = await Wormhole.PayloadCreation.revoke(105, "100");
        console.log(revoke);
      }
      catch(error) {
        console.error(error)
      }
    })()


### `sendAll`

Create the payload for a send all transaction.

#### Arguments

1.  ecosystem `Number` required: The ecosystem of the tokens to send (1 for main ecosystem, 2 for test ecosystem)

#### Result

payload `String`: the hex-encoded payload

#### Examples


    (async () => {
      try {
        let sendAll = await Wormhole.PayloadCreation.sendAll(2, "100");
        console.log(sendAll);
      }
      catch(error) {
        console.error(error)
      }
    })()
    // 0000000402


### `simpleSend`

Create the payload for a simple send transaction.

#### Arguments

1.  propertyId `Number` required: The identifier of the tokens to send
2.  amount `String` required: The amount to send

#### Result

payload `String`: the hex-encoded payload

#### Examples


    (async () => {
      try {
        let simpleSend = await Wormhole.PayloadCreation.simpleSend(1, "100.0");
        console.log(simpleSend);
      }
      catch(error) {
        console.error(error)
      }
    })()
    // 000000000000000100000002540be400


### `STO`

Creates the payload for a send-to-owners transaction

#### Arguments

1.  propertyId `Number` required: The identifier of the tokens to distribute
2.  amount `String` required: The amount to distribute
3.  distributionProperty `Number` optional: The identifier of the property holders to distribute to

#### Result

payload `String`: the hex-encoded payload

#### Examples


    (async () => {
      try {
        let STO = await Wormhole.PayloadCreation.STO(3, "5000");
        console.log(STO);
      }
      catch(error) {
        console.error(error)
      }
    })()
    // 0000000300000003000000000000138800000003

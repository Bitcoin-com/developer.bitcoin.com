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
      } catch(error) {
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
      } catch(error) {
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
      } catch(error) {
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
      } catch(error) {
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
10. tokensPerUnit `String` required: The amount of tokens granted per unit invested in the crowdsale
11. deadline `Number` required: The deadline of the crowdsale as Unix timestamp
12. earlyBonus `Number` required: An early bird bonus for participants in percent per week
13. undefine `Number` required: The value must be 0
14. totalNumber `String` required: The number of tokens to create

#### Result

payload `String`: the hex-encoded payload

#### Examples

    (async () => {
      try {
        let crowdsale = await Wormhole.PayloadCreation.crowdsale(1, 1, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "www.example.com", "Quantum Miner Tokens", 1, "100", 1483228800, 30, 0, 192978657);
        console.log(crowdsale);
      } catch(error) {
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
      } catch(error) {
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
      } catch(error) {
        console.error(error)
      }
    })()

    // 0000003601000100000000436f6d70616e69657300426974636f696e204d696e696e67005175616e74756d204d696e6572007777772e6578616d706c652e636f6d005175616e74756d204d696e657220546f6b656e7300

### `participateCrowdSale`

Create the payload for a participate crowdsale transaction

#### Arguments

1.  `String` required: The amount of WHC to participateCrowdSale

#### Result

payload `String`: the hex-encoded payload

#### Examples

    (async () => {
      try {
        let participateCrowdSale = await Wormhole.PayloadCreation.participateCrowdSale("100.0");
        console.log(participateCrowdSale);
      } catch(error) {
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
      } catch(error) {
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
      } catch(error) {
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
      } catch(error) {
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
      } catch(error) {
        console.error(error)
      }
    })()
    // 0000000300000003000000000000138800000003

### `freeze`

Creates the payload to freeze an address for a centrally managed token.

#### Arguments

1.  toAddress `String` required: the address to freeze tokens for
2.  propertyId `Number` required: the property to freeze tokens for (must be managed type and have freezing option enabled)

#### Result

payload `String`: the hex-encoded payload

#### Examples

    (async () => {
      try {
        let freeze = await Wormhole.PayloadCreation.freeze("qqpj0yu8w9ukg7x4h83xx7a4nj8f7mssh5dgn6flfu", 3);
        console.log(freeze);
      } catch(error) {
        console.error(error)
      }
    })()
    // 0000000300000003000000000000138800000003

### `unfreeze`

Creates the payload to unfreeze an address for a centrally managed token.

#### Arguments

1.  toAddress `String` required: the address to unfreeze tokens for
2.  propertyId `Number` required: the property to unfreeze tokens for (must be managed type and have freezing option enabled)

#### Result

payload `String`: the hex-encoded payload

#### Examples

    (async () => {
      try {
        let unfreeze = await Wormhole.PayloadCreation.unfreeze("qqpj0yu8w9ukg7x4h83xx7a4nj8f7mssh5dgn6flfu", 3);
        console.log(unfreeze);
      } catch(error) {
        console.error(error)
      }
    })()
    // 0000000300000003000000000000138800000003

### `issueERC721Property`

Creates the payload to issue ERC721 property

#### Arguments

1. name `String` required: the name of created property
2. symbol `String` required: the symbol of created property
3. data `String` required: the Data of created property
4. url `String` required: the URL of created property
5. totalNumber `String` required: the number of token that created property will issued in the future

#### Result

payload `String`: the hex-encoded payload

#### Examples

    (async () => {
      try {
        let erc721Property = await Wormhol.PayloadCreation.issueERC721Property("0x01", "0x02", "0x03", "url");
        console.log(erc721Property);
      } catch(error) {
        console.error(error)
      }
    })()
    // 0000000300000003000000000000138800000003

### `issueERC721Token`

Creates the payload to issue ERC721 token

#### Arguments

1. propertyId `String` required: The ID of the special property that will be issued token
2. tokenId `String` required: The tokenID that will be issued, if you don't want to skip this parameter, wormhole system will automatic tokenID
3. attributes `String` required: The Attributes of the new created token
4. url `String` required: The URL of the new created token

#### Result

payload `String`: the hex-encoded payload

#### Examples

    (async () => {
      try {
        let erc721Token = await Wormhol.PayloadCreation.issueERC721Token("0x01", "0x02", "0x03", "url");
        console.log(erc721Token);
      } catch(error) {
        console.error(error)
      }
    })()
    // 0000000300000003000000000000138800000003

### `transferERC721Token`

Creates the payload to transfer ERC721 token

#### Arguments

1. owner `String` required: The ID of the special property that will be issued token
2. receiver `String` required: The ID of the special property that will be issued token
3. propertyId `String` required: The ID of the special property that will be issued token
4. tokenID `String` optional: The tokenId that will be transfer

#### Result

payload `String`: the hex-encoded payload

#### Examples

    (async () => {
      try {
        let transferERC721Token = await Wormhol.PayloadCreation.transferERC721Token( "qqzy3s0ueaxkf8hcffhtgkgew8c7f7g85um9a2g74r", "qqzy3s0ueaxkf8hcffhtgkgew8c7f7g85um9a2g74r", "0x01", "0x01");
        console.log(transferERC721Token);
      } catch(error) {
        console.error(error)
      }
    })()
    // 0000000300000003000000000000138800000003

### `destroyERC721Token`

Creates the payload to destroy ERC721 token

#### Arguments

1. propertyId `String` required: The token within the property that will be destroy
2. tokenID `String` optional: The tokenid that will be destroy

#### Result

payload `String`: the hex-encoded payload

#### Examples

    (async () => {
      try {
        let destroyERC721Token = await Wormhol.PayloadCreation.destroyERC721Token("0x01", "0x01");
        console.log(destroyERC721Token);
      } catch(error) {
        console.error(error)
      }
    })()
    // 0000000300000003000000000000138800000003

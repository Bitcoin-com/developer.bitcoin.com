---
  title: PayloadCreation
  icon: home
  ordinal: 6
---

### `burnBCH`

Creates the payload to burn bch to get whc.

#### Result

payload `String`: the hex\-encoded payload

#### Examples


      Wormhole.PayloadCreation.burnBCH().then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });
      // 00000044


### `changeIssuer`

Creates the payload to change the issuer on record of the given tokens.

#### Arguments

1.  propertyId (number, required) The identifier of the tokens

#### Result

payload `String`: the hex\-encoded payload

#### Examples


      Wormhole.PayloadCreation.changeIssuer(3).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });
      // 0000004600000003


### `closeCrowdSale`

Creates the payload to manually close a crowdsale.

#### Arguments

1.  propertyId (number, required) The identifier of the crowdsale to close

#### Result

payload `String`: the hex\-encoded payload

#### Examples


      Wormhole.PayloadCreation.closeCrowdSale(70).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });
      // 0000003500000046


### `grant`

Creates the payload to issue or grant new units of managed tokens.

#### Arguments

1.  propertyId (number, required) The identifier of the tokens to grant
2.  amount (string, required) The amount of tokens to create
3.  memo (string, optional) A text note attached to this transaction (none by default)

#### Result

payload `String`: the hex\-encoded payload

#### Examples


        Wormhole.PayloadCreation.grant(3, "7000").then((result) => {
        console.log(result);
        }, (err) => {
        console.log(err);
        });
        // 00000037000000030000000000001b5800


### `crowdsale`

Creates the payload for a new tokens issuance with crowdsale.

#### Arguments

1.  ecosystem (string, required) The ecosystem to create the tokens in, must be 1
2.  propertyPrecision (number, required) The precision of the tokens to create:\[0, 8\]
3.  previousId (number, required) An identifier of a predecessor token (0 for new crowdsales)
4.  category (string, required) A category for the new tokens
5.  subcategory (string, required) A subcategory for the new tokens
6.  name (string, required) The name of the new tokens to create
7.  url (string, required) An URL for further information about the new tokens
8.  data (string, required) A description for the new tokens
9.  propertyIdDesired (number, required) The identifier of a token eligible to participate in the crowdsale
10.  tokensPerUnit (string, required) The amount of tokens granted per unit invested in the crowdsale
11.  deadline (number, required) The deadline of the crowdsale as Unix timestamp
12.  earlyBonus (number, required) An early bird bonus for participants in percent per week
13.  undefine (number, required) The value must be 0
14.  totalNumber (string, required) The number of tokens to create

#### Result

payload `String`: the hex\-encoded payload

#### Examples


      Wormhole.PayloadCreation.crowdsale(1, 1, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "www.example.com", "Quantum Miner Tokens", 1, "100", 1483228800, 30, 0, 192978657).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });
      //  0000003301000100000000436f6d70616e69657300426974636f696e204d696e696e67005175616e74756d204d696e6572007777772e6578616d706c652e636f6d005175616e74756d204d696e657220546f6b656e73000000000100000002540be40000000000586846801e0000000000730634ca


### `fixed`

Creates the payload for a new tokens issuance with fixed supply.

#### Arguments

1.  ecosystem (string, required) The ecosystem to create the tokens in, must be 1
2.  propertyPrecision (number, required) The precision of the tokens to create:\[0, 8\]
3.  previousId (number, required) An identifier of a predecessor token (0 for new crowdsales)
4.  category (string, required) A category for the new tokens)
5.  subcategory (string, required) A subcategory for the new tokens)
6.  name (string, required) The name of the new tokens to create
7.  url (string, required) An URL for further information about the new tokens)
8.  data (string, required) A description for the new tokens)
9.  amount (string, required) The number of tokens to create

#### Result

payload `String`: the hex\-encoded payload

#### Examples


      Wormhole.PayloadCreation.fixed(1, 1, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "www.example.com", "Quantum Miner Tokens", "1000000").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });

      // 0000003201000100000000436f6d70616e69657300426974636f696e204d696e696e67005175616e74756d204d696e6572007777772e6578616d706c652e636f6d005175616e74756d204d696e657220546f6b656e73000000000000989680


### `managed`

Creates the payload for a new tokens issuance with manageable supply.

#### Arguments

1.  ecosystem (string, required) The ecosystem to create the tokens in, must be 1
2.  propertyPrecision (number, required) The precision of the tokens to create:\[0, 8\]
3.  previousId (number, required) An identifier of a predecessor token (0 for new crowdsales)
4.  category (string, required) A category for the new tokens
5.  subcategory (string, required) A subcategory for the new tokens
6.  name (string, required) The name of the new tokens to create
7.  url (string, required) An URL for further information about the new tokens
8.  data (string, required) A description for the new tokens

#### Result

payload `String`: the hex\-encoded payload

#### Examples


      Wormhole.PayloadCreation.managed(1, 1, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "www.example.com", "Quantum Miner Tokens").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });
      // 0000003601000100000000436f6d70616e69657300426974636f696e204d696e696e67005175616e74756d204d696e6572007777772e6578616d706c652e636f6d005175616e74756d204d696e657220546f6b656e7300


### `partiCrwoSale`

Create the payload for a participate crowsale transaction

#### Arguments

1.  amount (string, required) The amount of WHC to particrowsale

#### Result

payload `String`: the hex\-encoded payload

#### Examples


      Wormhole.PayloadCreation.partiCrwoSale("100.0").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });

      // 000000010000000100000002540be400


### `revoke`

Creates the payload to revoke units of managed tokens.

#### Arguments

1.  propertyId (number, required) The identifier of the tokens to revoke
2.  amount (string, required) The amount of tokens to revoke
3.  memo (string, optional) A text note attached to this transaction (none by default)

#### Result

payload `String`: the hex\-encoded payload

#### Examples


      Wormhole.PayloadCreation.revoke(1, "100").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `sendAll`

Create the payload for a send all transaction.

#### Arguments

1.  ecosystem (number, required) The ecosystem of the tokens to send (1 for main ecosystem, 2 for test ecosystem)

#### Result

payload `String`: the hex\-encoded payload

#### Examples


      Wormhole.PayloadCreation.sendAll(2, "100").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });
      // 0000000402


### `simpleSend`

Create the payload for a simple send transaction.

#### Arguments

1.  propertyId (number, required) The identifier of the tokens to send
2.  amount (string, required) The amount to send

#### Result

payload `String`: the hex\-encoded payload

#### Examples


      Wormhole.PayloadCreation.simpleSend(1, "100.0").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });
      // 000000000000000100000002540be400


### `STO`

Creates the payload for a send\-to\-owners transaction

#### Arguments

1.  propertyId (number, required) The identifier of the tokens to distribute
2.  amount (string, required) The amount to distribute
3.  distributionProperty (number, optional) The identifier of the property holders to distribute to

#### Result

payload `String`: the hex\-encoded payload

#### Examples


      Wormhole.PayloadCreation.STO(3, "5000").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });
      // 0000000300000003000000000000138800000003

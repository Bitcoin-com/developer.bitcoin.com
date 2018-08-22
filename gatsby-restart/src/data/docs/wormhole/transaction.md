---
  title: Transaction
  icon: bitcoin
  ordinal: 8
---

### `burnBCHGetWHC`

Burn BCH to get WHC

#### Arguments

1.  amount (string, required) The burn bch amount, required minimum amount is 1BCH
2.  redeemAddress (string, optional) The redeem bitcoin address

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


      Wormhole.Transaction.burnBCHGetWHC(1, "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `partiCrowSale`

Create and broadcast a participate crowsale transaction.

#### Arguments

1.  fromAddress (string, required) The address to send from
2.  toAddress (string, required) The address of the receiver
3.  amount (string, required) The amount of WHC to participate crowsale
4.  redeemAddress (string, optional) An address that can spend the transaction dust (sender by default)
5.  referenceAmount (string, optional) A bitcoin amount that is sent to the receiver (minimal by default)

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


        Wormhole.Transaction.partiCrowSale("bchtest:qq8k9aa764m2q7hruz45wddpn0r4e3ke8uvd9vlzv8", "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", "100.0").then((result) => {
        console.log(result);
        }, (err) => {
        console.log(err);
        });


### `send`

Create and broadcast a simple send transaction.

#### Arguments

1.  fromAddress (string, required) The address to send from
2.  toAddress (string, required) The address of the receiver
3.  propertyId (number, required) The identifier of the tokens to send
4.  amount (string, required) The amount to send
5.  redeemAddress (string, optional) An address that can spend the transaction dust (sender by default)
6.  referenceAmount (string, optional) A bitcoin amount that is sent to the receiver (minimal by default)

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


      Wormhole.Transaction.send("bchtest:qq8k9aa764m2q7hruz45wddpn0r4e3ke8uvd9vlzv8", "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", 1, "100.0").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `all`

Transfers all available tokens in the given ecosystem to the recipient.

#### Arguments

1.  fromAddress (string, required) The address to send from
2.  toAddress (string, required) The address of the receiver
3.  ecosystem (number, required) The ecosystem of the tokens to send (1 for main ecosystem, 2 for test ecosystem)
4.  redeemAddress (string, optional) An address that can spend the transaction dust (sender by default)
5.  referenceAmount (string, optional) A bitcoin amount that is sent to the receiver (minimal by default)

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


      Wormhole.Transaction.all("bchtest:qq8k9aa764m2q7hruz45wddpn0r4e3ke8uvd9vlzv8", "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", 2).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `changeIssuer`

Change the issuer on record of the given tokens.

#### Arguments

1.  fromAddress (string, required) The address to send from
2.  toAddress (string, required) The address of the receiver
3.  propertyId (number, required) The identifier of the tokens

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


      Wormhole.Transaction.changeIssuer("bchtest:qq8k9aa764m2q7hruz45wddpn0r4e3ke8uvd9vlzv8", "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", 3).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `closeCrowdSale`

Manually close a crowdsale.

#### Arguments

1.  fromAddress (string, required) The address associated with the crowdsale to close
2.  propertyId (number, required) The identifier of the crowdsale to close

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


      Wormhole.Transaction.closeCrowdSale("bchtest:qq8k9aa764m2q7hruz45wddpn0r4e3ke8uvd9vlzv8", 70).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `grant`

Issue or grant new units of managed tokens.

#### Arguments

1.  fromAddress (string, required) The address to send from
2.  toAddress (string, required) The receiver of the tokens (sender by default, can be '')
3.  propertyId (number, required) The identifier of the tokens to grant
4.  amount (string, required) The amount of tokens to create
5.  memo (string, optional) A text note attached to this transaction (none by default)

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


      Wormhole.Transaction.grant("bchtest:qq8k9aa764m2q7hruz45wddpn0r4e3ke8uvd9vlzv8", "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", 51, "7000").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `crowdSale`

Create new tokens as crowdsale.

#### Arguments

1.  fromAddress (string, required) The address to send from
2.  ecosystem (string, required) The ecosystem to create the tokens in, must be 1
3.  propertyPrecision (number, required) The precision of the tokens to create:\[0, 8\]
4.  previousId (number, required) An identifier of a predecessor token (0 for new crowdsales)
5.  category (string, required) A category for the new tokens
6.  subcategory (string, required) A subcategory for the new tokens
7.  name (string, required) The name of the new tokens to create
8.  url (string, required) An URL for further information about the new tokens
9.  data (string, required) A description for the new tokens
10.  propertyIdDesired (number, required) The identifier of a token eligible to participate in the crowdsale
11.  tokensPerUnit (string, required) The amount of tokens granted per unit invested in the crowdsale
12.  deadline (number, required) The deadline of the crowdsale as Unix timestamp
13.  earlyBonus (number, required) An early bird bonus for participants in percent per week
14.  undefine (number, required) The value must be 0
15.  totalNumber (string, required) The number of tokens to create

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


      Wormhole.Transaction.crowdSale("bchtest:qq8k9aa764m2q7hruz45wddpn0r4e3ke8uvd9vlzv8", 1, 1, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "www.example.com", "Quantum Miner Tokens", 1, "100", 1483228800, 30, 0, 77868698).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `fixed`

Create new tokens with fixed supply.

#### Arguments

1.  fromAddress (string, required) The address to send from
2.  ecosystem (string, required) The ecosystem to create the tokens in, must be 1
3.  propertyPrecision (number, required) The precision of the tokens to create:\[0, 8\]
4.  previousId (number, required) An identifier of a predecessor token (0 for new crowdsales)
5.  category (string, required) A category for the new tokens
6.  subcategory (string, required) A subcategory for the new tokens
7.  name (string, required) The name of the new tokens to create
8.  url (string, required) An URL for further information about the new tokens
9.  data (string, required) A description for the new tokens
10.  totalNumber (string, required) The number of tokens to create

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


      Wormhole.Transaction.fixed("bchtest:qq8k9aa764m2q7hruz45wddpn0r4e3ke8uvd9vlzv8", 1, 1, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "www.example.com", "Quantum Miner Tokens", "1000000").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `managed`

Create new tokens with manageable supply.

#### Arguments

1.  fromAddress (string, required) The address to send from
2.  ecosystem (string, required) The ecosystem to create the tokens in, must be 1
3.  propertyPrecision (number, required) The precision of the tokens to create:\[0, 8\]
4.  previousId (number, required) An identifier of a predecessor token (0 for new crowdsales)
5.  category (string, required) A category for the new tokens
6.  subcategory (string, required) A subcategory for the new tokens
7.  name (string, required) The name of the new tokens to create
8.  url (string, required) An URL for further information about the new tokens
9.  data (string, required) A description for the new tokens

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


      Wormhole.Transaction.managed("bchtest:qq8k9aa764m2q7hruz45wddpn0r4e3ke8uvd9vlzv8", 1, 1, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "www.example.com", "Quantum Miner Tokens").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `rawTx`

Broadcasts a raw Omni Layer transaction.

#### Arguments

1.  fromAddress (string, required) The address to send from
2.  rawTransaction (string, required) The hex\-encoded raw transaction
3.  referenceAddress (string, optional) A reference address (none by default)
4.  redeemAddress (string, optional) An address that can spent the transaction dust (sender by default)
5.  referenceAmount (string, optional) A bitcoin amount that is sent to the receiver (minimal by default)

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


      Wormhole.Transaction.rawTx("bchtest:qq8k9aa764m2q7hruz45wddpn0r4e3ke8uvd9vlzv8", "000000000000000100000000017d7840", "1EqTta1Rt8ixAA32DuC29oukbsSWU62qAV").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `revoke`

Revoke units of managed tokens.

#### Arguments

1.  fromAddress (string, required) The address to revoke the tokens from
2.  propertyId (number, required) The identifier of the tokens to revoke
3.  amount (string, required) The amount of tokens to revoke
4.  memo (string, optional) A text note attached to this transaction (none by default)

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


      Wormhole.Transaction.revoke("bchtest:qq8k9aa764m2q7hruz45wddpn0r4e3ke8uvd9vlzv8", 1, "100").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });


### `STO`

Create and broadcast a send\-to\-owners transaction.

#### Arguments

1.  fromAddress (string, required) The address to send from
2.  propertyId (number, required) The identifier of the tokens to distribute
3.  amount (string, required) The amount of tokens to distribute
4.  redeemAddress (string, optional) An address that can spend the transaction dust (sender by default)
5.  distributionProperty (number, optional) The identifier of the property holders to distribute to

#### Result

hash `String`: the hex\-encoded transaction hash

#### Examples


      Wormhole.Transaction.STO("bchtest:qq8k9aa764m2q7hruz45wddpn0r4e3ke8uvd9vlzv8", 51, "100").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });

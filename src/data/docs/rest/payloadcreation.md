---
title: Payload Creation
icon: plus
ordinal: 7
---

## Burn BCH

Creates the payload to burn bch to get whc.

**URL** : `v2/payloadCreation/burnBCH`

**Method** : `GET`

**Auth required** : NO

#### Result

burnBCH `String`

#### Examples

    curl -X GET "http://localhost:3000/v2/payloadCreation/burnBCH" -H "accept: _/_"

    // returns
    "00000044"

## Change Issuer

Creates the payload to change the issuer on record of the given tokens.

**URL** : `v2/payloadCreation/changeIssuer`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  propertyId `Number`. Required

#### Result

changeIssuer `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/changeIssuer" -H "accept: */*" -H "Content-Type: application/json" -d "{\"propertyId\":10}"

    // returns
    "000000460000000a"

## Close CrowdSale

Creates the payload to manually close a crowdsale.

**URL** : `v2/payloadCreation/closeCrowdSale`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  propertyId `Number`. Required

#### Result

closeCrowdSale `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/closeCrowdSale" -H "accept: */*" -H "Content-Type: application/json" -d "{\"propertyId\":10}"

    // returns
    "000000350000000a"

## Grant

Creates the payload to issue or grant new units of managed tokens.

**URL** : `v2/payloadCreation/grant`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  propertyId `Number`. Required
2.  amount `String`: Required
3.  memo `String`: Optional

#### Result

grant `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/grant" -H "accept: */*" -H "Content-Type: application/json" -d "{\"propertyId\":10,\"amount\":\"10\",\"memo\":\"\"}"

    // returns
    ""

## Crowdsale

Creates the payload for a new tokens issuance with crowdsale.

**URL** : `v2/payloadCreation/crowdsale`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  ecosystem `String`. Required
2.  propertyPrecision `Number`. Required
3.  previousId `Number`. Required
4.  category `String`. Required
5.  subcategory `String`. Required
6.  name `String`. Required
7.  url `String`. Required
8.  data `String`. Required
9.  propertyIdDesired `Number`. Required
10. tokensPerUnit `String`. Required
11. deadline `Number`. Required
12. earlyBonus `Number`. Required
13. totalNumber `String`. Required

#### Result

crowdsale `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/crowdsale" -H "accept: */*" -H "Content-Type: application/json" -d "{\"ecosystem\":\"1\",\"propertyPrecision\":1,\"previousId\":1,\"category\":\"Companies\",\"subcategory\":\"Bitcoin Mining\",\"name\":\"Quantum Miner\",\"url\":\"www.example.com\",\"data\":\"Quantum Miner Tokens\",\"propertyIdDesired\":1,\"tokensPerUnit\":\"100\",\"deadline\":1483228800,\"earlyBonus\":30,\"totalNumber\":\"192978657\"}"

    // returns
    "0000003301000100000001436f6d70616e69657300426974636f696e204d696e696e67005175616e74756d204d696e6572007777772e6578616d706c652e636f6d005175616e74756d204d696e657220546f6b656e73000000000100000002540be40000000000586846801e0000000000730634ca"

## Fixed

Creates the payload for a new tokens issuance with fixed supply.

**URL** : `v2/payloadCreation/fixed`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  ecosystem `String`. Required
2.  propertyPrecision `Number`. Required
3.  previousId `Number`. Required
4.  category `String`. Required
5.  subcategory `String`. Required
6.  name `String`. Required
7.  url `String`. Required
8.  data `String`. Required
9.  amount `String`. Required

#### Result

fixed `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/fixed" -H "accept: */*" -H "Content-Type: application/json" -d "{\"ecosystem\":\"1\",\"propertyPrecision\":1,\"previousId\":1,\"category\":\"Companies\",\"subcategory\":\"Bitcoin Mining\",\"name\":\"Quantum Miner\",\"url\":\"www.example.com\",\"data\":\"Quantum Miner Tokens\",\"amount\":\"100000\"}"

    // returns
    "0000003201000100000001436f6d70616e69657300426974636f696e204d696e696e67005175616e74756d204d696e6572007777772e6578616d706c652e636f6d005175616e74756d204d696e657220546f6b656e730000000000000f4240"

## Managed

Creates the payload for a new tokens issuance with manageable supply.

**URL** : `v2/payloadCreation/managed`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  ecosystem `String`. Required
2.  propertyPrecision `Number`. Required
3.  previousId `Number`. Required
4.  category `String`. Required
5.  subcategory `String`. Required
6.  name `String`. Required
7.  url `String`. Required
8.  data `String`. Required

#### Result

managed `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/managed" -H "accept: */*" -H "Content-Type: application/json" -d "{\"ecosystem\":\"1\",\"propertyPrecision\":1,\"previousId\":1,\"category\":\"Companies\",\"subcategory\":\"Bitcoin Mining\",\"name\":\"Quantum Miner\",\"url\":\"www.example.com\",\"data\":\"Quantum Miner Tokens\"}"

    // returns
    "0000003601000100000001436f6d70616e69657300426974636f696e204d696e696e67005175616e74756d204d696e6572007777772e6578616d706c652e636f6d005175616e74756d204d696e657220546f6b656e7300"

## Participate CrowdSale

Creates the payload for a new tokens issuance with manageable supply.

**URL** : `v2/payloadCreation/participateCrowdSale`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1. amount `String`. Required

#### Result

participateCrowdSale `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/participateCrowdSale" -H "accept: */*" -H "Content-Type: application/json" -d "{\"amount\":\"1\"}"

    // returns
    "00000001000000010000000005f5e100"

## Revoke

Creates the payload to revoke units of managed tokens.

**URL** : `v2/payloadCreation/revoke`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1. propertyId `Number`. Required
2. amount `String`. Required
3. memo `String`. Optional

#### Result

revoke `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/revoke" -H "accept: */*" -H "Content-Type: application/json" -d "{\"propertyId\":1,\"amount\":\"10\",\"memo\":\"\"}"

    // returns
    ""

## Send All

Create the payload for a send all transaction.

**URL** : `v2/payloadCreation/sendAll`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1. ecosystem `Number`. Required

#### Result

sendAll `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/sendAll" -H "accept: */*" -H "Content-Type: application/json" -d "{\"ecosystem\":1}"

    // returns
    "0000000401"

## Simple Send

Create the payload for a simple send transaction.

**URL** : `v2/payloadCreation/simpleSend`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1. propertyId `Number`. Required
2. amount `String`. Required

#### Result

simpleSend `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/simpleSend" -H "accept: */*" -H "Content-Type: application/json" -d "{\"propertyId\":1,\"amount\":\"10\"}"

    // returns
    "0000000000000001000000003b9aca00"

## STO

Creates the payload for a send-to-owners transaction

**URL** : `v2/payloadCreation/STO`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1. propertyId `Number`. Required
2. amount `String`. Required
3. distributionProperty `Number`. Required

#### Result

STO `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/STO" -H "accept: */*" -H "Content-Type: application/json" -d "{\"propertyId\":1,\"amount\":\"10\",\"distributionProperty\":1}"

    // returns
    "0000000300000001000000003b9aca0000000001"

## Freeze

Creates the payload for a freeze transaction

**URL** : `v2/payloadCreation/freeze`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1. toAddress `String`. Required
2. propertyId `Number`. Required

#### Result

freeze `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/freeze" -H "accept: */*" -H "Content-Type: application/json" -d "{\"toAddress\":\"bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c\",\"propertyId\":1}"

    // returns
    "0000000300000001000000003b9aca0000000001"

## Unfreeze

Creates the payload for an unfreeze transaction

**URL** : `v2/payloadCreation/unfreeze`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1. toAddress `String`. Required
2. propertyId `Number`. Required

#### Result

unfreeze `String`

#### Examples

    curl -X POST "http://localhost:3000/v2/payloadCreation/unfreeze" -H "accept: */*" -H "Content-Type: application/json" -d "{\"toAddress\":\"bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c\",\"propertyId\":1}"

    // returns
    "0000000300000001000000003b9aca0000000001"

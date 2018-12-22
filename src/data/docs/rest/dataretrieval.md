---
title: Data Retrieval
icon: database
ordinal: 5
---

## Single Balance

Returns the token balance for a given address and property.

**URL** : `v2/dataRetrieval/balance/{address}/{propertyId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `String` required
2.  propertyId `String` required

#### Result

balance `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/balance/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c/1" -H "accept: */*"

    // returns
    {
      "balance": "0.00000000",
      "reserved": "0.00000000"
    }

## All Balances

Returns a list of all token balances for a given address.

**URL** : `v2/dataRetrieval/balancesForAddress/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `String` required

#### Result

balances `Array` of JSON Objects

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/balancesForAddress/bitcoincash:qpew7vm9sdwdfeu3ag63rkt0r6ary3e2ny5p8lsfpn" -H "accept: */*"

    // returns
    [
      {
        "propertyid": 1,
        "balance": "32.00000000",
        "reserved": "0.00000000"
      },
      {
        "propertyid": 195,
        "balance": "877.00000000",
        "reserved": "0.00000000"
      },
      {
        "propertyid": 196,
        "balance": "681.00000000",
        "reserved": "0.00000000"
      }
    ]

## Balances for tokenId

Returns a list of token balances for a given currency or property identifier.

**URL** : `v2/dataRetrieval/balancesForId/{propertyId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  propertyId `String` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/balancesForId/1" -H "accept: */*"

    // returns
    [
      {
        "address": "bitcoincash:qrsqg55lszlsxgh7cm77rztwt5xhxkhpavjkj5tj55",
        "balance": "1.00000000",
        "reserved": "0.00000000"
      },
      {
        "address": "bitcoincash:qq7cwgufy4xf9smepclrfnfpcnujxxnsevmzm00426",
        "balance": "9.00000000",
        "reserved": "0.00000000"
      },
      {
        "address": "bitcoincash:qqxypg6xvv9tcftdq6r858ke3h9pjhhp4ylstwkt8s",
        "balance": "5.00000000",
        "reserved": "0.00000000"
      }
    ]

## Balances hash

Returns a hash of the balances for the property.

**URL** : `v2/dataRetrieval/balancesHash/{propertyId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  propertyId `String` required

#### Result

balancesHash `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/balancesHash/1" -H "accept: */*"

    // returns
    {
      "block": 561995,
      "blockhash": "000000000000000003b7a99ee50cdac88f7c7854601f3adf4c31fae3fad3b677",
      "propertyid": 1,
      "balanceshash": "9cccf482a64f3208cf5174775fb7739e9ff5c1471595cc9afd44ebc1b91a43e4"
    }

## CrowdSale

Returns information about a crowdsale.

**URL** : `v2/dataRetrieval/crowdSale/{propertyId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  propertyId `String`. Required
2.  verbose `Boolean`. Optional

#### Result

crowdSale `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/crowdSale/197?verbose=true" -H "accept: */*"

    // returns
    {
      "propertyid": 197,
      "name": "BCC",
      "active": true,
      "issuer": "bitcoincash:qpew7vm9sdwdfeu3ag63rkt0r6ary3e2ny5p8lsfpn",
      "propertyiddesired": 1,
      "precision": "8",
      "tokensperunit": "100.00000000",
      "earlybonus": 0,
      "starttime": 1538753170,
      "deadline": 1883228800,
      "amountraised": "1.00000000",
      "tokensissued": "12345.00000000",
      "addedissuertokens": "0.00000000",
      "participanttransactions": [
        {
          "txid": "1d81c6d8a8a250abab5f538c5dff9cc7dabaf62ab790a7d5993de133b3fbd73d",
          "amountsent": "1.00000000",
          "participanttokens": "100.00000000"
        }
      ]
    }

## Consensus Hash

Returns the consensus hash for all balances for the current block.

**URL** : `v2/dataRetrieval/currentConsensusHash`

**Method** : `GET`

**Auth required** : NO

#### Result

currentConsensusHash `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/currentConsensusHash" -H "accept: */*"

    // returns
    {
      "block": 561996,
      "blockhash": "00000000000000000056e9c77ea4d17675de9aff3a07224356ee86829a7c22f8",
      "consensushash": "04b2f547b390180641337fb9d234ff98618bc637082642abdf02b955665df0ec"
    }

## Grants

Returns information about granted and revoked units of managed tokens.

**URL** : `v2/dataRetrieval/grants/{propertyId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  propertyId `String`. Required

#### Result

grants `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/grants/196" -H "accept: */*"

    // returns
    {
      "propertyid": 196,
      "name": "QAM",
      "issuer": "bitcoincash:qq0j0nsc5mfvzhccawgkgv7g3umspezdvupfjg7ze3",
      "creationtxid": "983d9974348acb531463e2ad2eeb2124b80d22ef1aef3da0e9cbe65429e60ac5",
      "totaltokens": "1001312.00000000",
      "issuances": [
        {
          "txid": "724cf1d525ffcfdf702cd3ff8953e9b4fa7f893d31aefe5799e05bce91833947",
          "revoke": "33.00000000"
        },
        {
          "txid": "755143e27b2754f8499f25cf802c819f7970be0d76b5de20daa4a89997a3cddd",
          "grant": "1234.00000000"
        },
        {
          "txid": "bbda45af0ba57e28866995c67a53c225336fddd14eb3dc87f2f3500fd61c8585",
          "grant": "111.00000000"
        },
        {
          "txid": "e53a4c6f3010c032216bf685f88d2772ca4decb2771453c974fbb45e42d1a5b3",
          "grant": "1000000.00000000"
        }
      ]
    }

## Info

Returns various state information of the client and protocol.

**URL** : `v2/dataRetrieval/info`

**Method** : `GET`

**Auth required** : NO

#### Result

info `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/info" -H "accept: */*"

    // returns
    {
      "wormholeversion_int": 20001000,
      "wormholeversion": "0.2.1",
      "bitcoincoreversion": "0.18.2",
      "block": 561996,
      "blocktime": 1545498762,
      "blocktransactions": 1,
      "totaltransactions": 13568,
      "alerts": []
    }

## Payload

Get the payload for an Omni transaction.

**URL** : `v2/dataRetrieval/payload/{txid}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  txid `String`. Required

#### Result

payload `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/payload/bbda45af0ba57e28866995c67a53c225336fddd14eb3dc87f2f3500fd61c8585" -H "accept: */*"

    // returns
    {
      "payload": "00000037000000c400000002959c8f0000",
      "payloadsize": 17
    }

## Property

Returns details for about the tokens or smart property to lookup.

**URL** : `v2/dataRetrieval/property/{propertyId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  propertyId `String`. Required

#### Result

property `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/property/1" -H "accept: */*"

    // returns
    {
      "propertyid": 1,
      "name": "WHC",
      "category": "N/A",
      "subcategory": "N/A",
      "data": "WHC serve as the binding between Bitcoin cash, smart properties and contracts created on the Wormhole.",
      "url": "http://www.wormhole.cash",
      "precision": 8,
      "issuer": "bitcoincash:qqqqqqqqqqqqqqqqqqqqqqqqqqqqqu08dsyxz98whc",
      "creationtxid": "0000000000000000000000000000000000000000000000000000000000000000",
      "fixedissuance": false,
      "managedissuance": false,
      "totaltokens": "263582.41928300"
    }

## Seed Blocks

Returns a list of blocks containing Omni transactions for use in seed block filtering.

**URL** : `v2/dataRetrieval/seedBlocks/{startBlock}/{endBlock}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  startBlock `Number`. Required
2.  endBlock `Number`. Required

#### Result

seedBlocks `Array`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/seedBlocks/560000/560100" -H "accept: */*"

    // returns
    [
      560000,
      560001,
      560004,
      560010,
      560015,
      560016,
      560018,
      560021,
      560025,
      560037,
      560039,
      560040,
      560050,
      560052,
      560058,
      560059,
      560066,
      560069,
      560073,
      560075,
      560079,
      560080,
      560085,
      560086,
      560087,
      560090,
      560092,
      560098,
      560100
    ]

## Send To Owners

Get information and recipients of a send-to-owners transaction.

**URL** : `v2/dataRetrieval/STO/{txid}/{recipientFilter}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  txid `String`. Required
2.  recipientFilter `String`. Required

#### Result

STO `Object`

#### Examples

      curl -X GET "https://bitcoin.com/v2/dataRetrieval/STO/bbda45af0ba57e28866995c67a53c225336fddd14eb3dc87f2f3500fd61c8585/*" -H "accept: */*"

    // returns
    {
      "txid": "bbda45af0ba57e28866995c67a53c225336fddd14eb3dc87f2f3500fd61c8585",
      "fee": "500",
      "sendingaddress": "bitcoincash:qq0j0nsc5mfvzhccawgkgv7g3umspezdvupfjg7ze3",
      "referenceaddress": "bitcoincash:qq0j0nsc5mfvzhccawgkgv7g3umspezdvupfjg7ze3",
      "ismine": false,
      "version": 0,
      "type_int": 55,
      "type": "Grant Property Tokens",
      "propertyid": 196,
      "precision": "8",
      "amount": "111.00000000",
      "valid": true,
      "blockhash": "0000000000000000006631f3d3b24ece0f4077c144057a6a769a958f7b669276",
      "blocktime": 1538751306,
      "positioninblock": 13,
      "block": 550878,
      "confirmations": 11119
    }

## Transaction

Get detailed information about an Omni transaction.

**URL** : `v2/dataRetrieval/transaction/{txid}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  txid `String`. Required

#### Result

transaction `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/transaction/bbda45af0ba57e28866995c67a53c225336fddd14eb3dc87f2f3500fd61c8585" -H "accept: */*"

    // returns
    {
      "txid": "bbda45af0ba57e28866995c67a53c225336fddd14eb3dc87f2f3500fd61c8585",
      "fee": "500",
      "sendingaddress": "bitcoincash:qq0j0nsc5mfvzhccawgkgv7g3umspezdvupfjg7ze3",
      "referenceaddress": "bitcoincash:qq0j0nsc5mfvzhccawgkgv7g3umspezdvupfjg7ze3",
      "ismine": false,
      "version": 0,
      "type_int": 55,
      "type": "Grant Property Tokens",
      "propertyid": 196,
      "precision": "8",
      "amount": "111.00000000",
      "valid": true,
      "blockhash": "0000000000000000006631f3d3b24ece0f4077c144057a6a769a958f7b669276",
      "blocktime": 1538751306,
      "positioninblock": 13,
      "block": 550878,
      "confirmations": 11119
    }

## Block Transactions

Lists all Omni transactions in a block.

**URL** : `v2/dataRetrieval/blockTransactions/{index}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  index `Number`. Required

#### Result

blockTransactions `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/blockTransactions/560000" -H "accept: */*"

    // returns
    [
      "05decfb04945b2ee1ac77f961189276f7c315d96b50e6fc8ca9daf50ea63e253",
      "2ff770cc84144aece6cc725c1d8f10c660b89ce770bb941a1c03e1e7102c23f9"
    ]

## Pending Transactions

Returns a list of unconfirmed Omni transactions, pending in the memory pool.

**URL** : `v2/dataRetrieval/pendingTransactions/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `String`. Required

#### Result

pendingTransactions `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/pendingTransactions/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: */*"

    // returns
    [ ]

## Properties

Lists all tokens or smart properties.

**URL** : `v2/dataRetrieval/properties`

**Method** : `GET`

**Auth required** : NO

#### Result

properties `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/properties?address=%2A&count=10&skip=0&startBlock=0&endBlock=9999999" -H "accept: */*"

    // returns
    [
      {
        "propertyid": 1,
        "name": "WHC",
        "category": "N/A",
        "subcategory": "N/A",
        "data": "WHC serve as the binding between Bitcoin cash, smart properties and contracts created on the Wormhole.",
        "url": "http://www.wormhole.cash",
        "precision": 8
      },
      {
        "propertyid": 3,
        "name": "BFT",
        "category": "BitApp",
        "subcategory": "Blockchain",
        "data": "BitApp Founder Token",
        "url": "ht\ntps://www.bitapp.pro",
        "precision": 0
      },
      {
        "propertyid": 4,
        "name": "WHD",
        "category": "group",
        "subcategory": "coprenet",
        "data": "the mainnet token issued",
        "url": "www.wormhole.cash",
        "precision": 8
      }
    ]

## Frozen Balance

Returns the frozen token balance for a given address and property.

**URL** : `v2/dataRetrieval/frozenBalance/{address}/{propertyId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `String`. Required
2.  propertyId `Number`. Required

#### Result

frozenBalance `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/frozenBalance/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c/206" -H "accept: */*"

    // returns
    {
      "frozen": false,
      "balance": "0.00000000"
    }

## Frozen Balance For Address

Returns the frozen token balance for a given address and property.

**URL** : `v2/dataRetrieval/frozenBalanceForAddress/{address}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `String`. Required

#### Result

frozenBalance `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/frozenBalanceForAddress/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: */*"

    // returns
    [ ]

## Frozen Balance For Id

Returns the frozen token balance for a given property.

**URL** : `v2/dataRetrieval/frozenBalanceForId/{propertyId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  propertyId `Number`. Required

#### Result

frozenBalanceForId `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/frozenBalanceForId/206" -H "accept: _/_"

    // returns
    [ ]

## ERC721 Address Tokens

Returns details for about the tokens or smart property to lookup.

**URL** : `v2/dataRetrieval/ERC721AddressTokens/{address}/{propertyId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  address `String`. Required
2.  propertyId `String`. Required

#### Result

ERC721AddressTokens `Array`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/ERC721AddressTokens/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c/0x01" -H "accept: */*"

    // returns
    [ ]

## ERC721 Property Destroy Tokens

Returns details for about the destroy tokens to lookup.

**URL** : `v2/dataRetrieval/ERC721PropertyDestroyTokens/{propertyId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  propertyId `String`. Required

#### Result

ERC721PropertyDestroyTokens `Array`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/ERC721PropertyDestroyTokens/0x01" -H "accept: */*"

    // returns
    [ ]

## ERC721 Property News

Returns details for about the tokens or smart property to lookup.

**URL** : `v2/dataRetrieval/ERC721PropertyNews/{propertyId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  propertyId `String`. Required

#### Result

ERC721PropertyNews `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/ERC721PropertyNews/0x01" -H "accept: */*"

    // returns
    {
      "propertyid": "0000000000000000000000000000000000000000000000000000000000000001",
      "owner": "bitcoincash:qruxjk5tk4sc3gnkmk42wtsma4s47389ng6raxhqrp",
      "creationtxid": "bfcde0ae6c02b791fcdc4927185f9a60f31edadc49d6c40352431edd2f97b389",
      "creationblock": "0000000000000000010ada93b03c8133bd092758234ac6dff725b2643c7c8c9d",
      "name": "GBDCT",
      "symbol": "GBDCT",
      "data": "GBDCT",
      "propertyurl": "http://devcon.top",
      "totalTokenNumber": 1000000,
      "haveIssuedNumber": 74,
      "currentValidIssuedNumer": 74
    }

## ERC721 Token News

Returns details for about the tokens or smart property to lookup.

**URL** : `v2/dataRetrieval/ERC721TokenNews/{propertyId}/{tokenId}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  propertyId `String`. Required
2.  tokenId `String`. Required

#### Result

ERC721TokenNews `Object`

#### Examples

    curl -X GET "https://bitcoin.com/v2/dataRetrieval/ERC721TokenNews/0x02/0x01" -H "accept: */*"

    // returns
    {
      "propertyid": "0000000000000000000000000000000000000000000000000000000000000002",
      "tokenid": "0000000000000000000000000000000000000000000000000000000000000001",
      "owner": "bitcoincash:qqeuq3yxsr9rys39am985gcv7xg6hzzqqgu9x00ua2",
      "creationtxid": "d7bbcd55ce931abc3baeb3145b5c734e29ac5a84ce9dc6170a928ba47cd83b51",
      "creationblock": "0000000000000000008693d09ff12dd3e9a3df142e6c95a21f6db893af5732dc",
      "attribute": "0000000000000000000000000000000000000000000000000000000000000002",
      "tokenurl": "badgerwallet.cash"
    }

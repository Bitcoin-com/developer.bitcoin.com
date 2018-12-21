---
title: Raw Transactions
icon: exchange
ordinal: 8
---

## Decode Raw Transaction

Return a JSON object representing the serialized, hex-encoded transaction.

**URL** : `/rawtransactions/decodeRawTransaction/{hex}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  hex encoded `String` required

#### Result

`Object` containing the decoded transaction data

#### Examples

    curl -X GET "http://localhost:3000/v2/rawtransactions/decodeRawTransaction/02000000010e991f7ccec410f27d333f737f149b5d3be6728687da81072e638aed0063a176010000006b483045022100cd20443b0af090053450bc4ab00d563d4ac5955bb36e0135b00b8a96a19f233302205047f2c70a08c6ef4b76f2d198b33a31d17edfaa7e1e9e865894da0d396009354121024d4e7f522f67105b7bf5f9dbe557e7b2244613fdfcd6fe09304f93877328f6beffffffff02a0860100000000001976a9140ee020c07f39526ac5505c54fa1ab98490979b8388acb5f0f70b000000001976a9143a9b2b0c12fe722fcf653b6ef5dcc38732d6ff5188ac00000000" -H "accept: application/json"

    // returns
    {
      "txid": "5159ae0f5327294c16267ae4ddbdbbe167b8c57c1aed37c50ed7439aa573d66a",
      "hash": "5159ae0f5327294c16267ae4ddbdbbe167b8c57c1aed37c50ed7439aa573d66a",
      "size": 226,
      "version": 2,
      "locktime": 0,
      "vin": [
        {
          "txid": "76a16300ed8a632e0781da878672e63b5d9b147f733f337df210c4ce7c1f990e",
          "vout": 1,
          "scriptSig": {
            "asm": "3045022100cd20443b0af090053450bc4ab00d563d4ac5955bb36e0135b00b8a96a19f233302205047f2c70a08c6ef4b76f2d198b33a31d17edfaa7e1e9e865894da0d39600935[ALL|FORKID] 024d4e7f522f67105b7bf5f9dbe557e7b2244613fdfcd6fe09304f93877328f6be",
            "hex": "483045022100cd20443b0af090053450bc4ab00d563d4ac5955bb36e0135b00b8a96a19f233302205047f2c70a08c6ef4b76f2d198b33a31d17edfaa7e1e9e865894da0d396009354121024d4e7f522f67105b7bf5f9dbe557e7b2244613fdfcd6fe09304f93877328f6be"
          },
          "sequence": 4294967295
        }
      ],
      "vout": [
        {
          "value": 0.001,
          "n": 0,
          "scriptPubKey": {
            "asm": "OP_DUP OP_HASH160 0ee020c07f39526ac5505c54fa1ab98490979b83 OP_EQUALVERIFY OP_CHECKSIG",
            "hex": "76a9140ee020c07f39526ac5505c54fa1ab98490979b8388ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [
              "bchtest:qq8wqgxq0uu4y6k92pw9f7s6hxzfp9umsvtg39pzqf"
            ]
          }
        },
        {
          "value": 2.00798389,
          "n": 1,
          "scriptPubKey": {
            "asm": "OP_DUP OP_HASH160 3a9b2b0c12fe722fcf653b6ef5dcc38732d6ff51 OP_EQUALVERIFY OP_CHECKSIG",
            "hex": "76a9143a9b2b0c12fe722fcf653b6ef5dcc38732d6ff5188ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [
              "bchtest:qqafk2cvztl8yt70v5akaawucwrn94hl2yups7rzfn"
            ]
          }
        }
      ]
    }

## Decode Script

Decode a hex-encoded script.

**URL** : `/rawtransactions/decodeScript/{hex}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  hex encoded `String` required

#### Result

`Object` containing the decoded script data

#### Examples

    curl -X GET "http://localhost:3000/v2/rawtransactions/decodeScript/02000000012d2ec73b12ecb96fbf104fa0325e39bc4e49818709594ba2128635aedfb820a1010000006a47304402203c63866eab7ffca27ed6437a028de9b2cc83dd1ed96f0f496742cf70c6ca50b8022007f3c7fc8729f52d8d0e626c6328012691fa6b3a317c66408e2ccc84a6538e9741210360cfc66fdacb650bc4c83b4e351805181ee696b7d5ab4667c57b2786f51c413dffffffff036a929800000000001976a914eb4b180def88e3f5625b2d8ae2c098ff7d85f66488ac00000000000000006a6a4c67087768630000003201000800000000426974636f696e2e636f6d00426974636f696e20466978656420546f6b656e20546573740054535400646576656c6f7065722e626974636f696e2e636f6d004d616465207769746820424954424f5800000000174876e80022020000000000001976a914eb4b180def88e3f5625b2d8ae2c098ff7d85f66488ac00000000" -H "accept: application/json"

    // returns
    {
      "asm": "0 0 45 c73b12ecb96fbf104fa0325e39bc4e49818709594ba2128635aedfb820a1010000006a47304402203c63866eab7f OP_UNKNOWN OP_GREATERTHANOREQUAL OP_CAT OP_UNKNOWN 7a028de9b2cc83dd1ed96f0f496742cf70c6ca50b8022007f3c7fc8729f52d8d0e626c6328012691fa6b3a317c66408e2ccc84a6538e9741210360cfc66fdacb650bc4 OP_UNKNOWN 4e351805181ee696b7d5ab4667c57b2786f51c413dffffffff036a929800000000001976a914eb4b180def88e3f5625b2d8ae2c098ff7d85f66488 OP_CHECKSIG 0 0 0 0 0 0 0 0 OP_RETURN OP_RETURN 087768630000003201000800000000426974636f696e2e636f6d00426974636f696e20466978656420546f6b656e20546573740054535400646576656c6f7065722e626974636f696e2e636f6d004d616465207769746820424954424f5800000000174876e800 020000000000001976a914eb4b180def88e3f5625b2d8ae2c098ff7d85f66488ac00 0 0 0",
      "type": "nonstandard",
      "p2sh": "bchtest:pzmev6lerkdanw7skxuq7py8jypdqrvgp5k0twz0qn"
    }

## Get Raw Transaction

return the raw transaction data. If verbose is 'true', returns an Object with information about 'txid'. If verbose is 'false' or omitted, returns a string that is serialized, hex-encoded data for 'txid'.

**URL** : `/rawtransactions/decodeRawTransaction/{hex}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  hex encoded txid `String` required

#### Query Parameters

1.  verbose `String` of value "true" optional. Default is false.

#### Result

`String` containing hex encoded transaction if _verbose_ is false. `Object` containing the decoded transaction data if _verbose_ is true.

#### Examples

    curl -X GET "http://localhost:3000/v2/rawtransactions/getRawTransaction/40112ab9d2b5f98427839272d7a1e23dd2afc6c8355626f373e076c2ab5c2f72?verbose=true" -H "accept: application/json"

    // returns
    {
      "hex": "0100000001f94a8d3f0ff3391d6b574691df85b772a067789c625fcfddb062517faf81a056010000006a473044022065d3d111db75d01d001bbd411961759f7b2eacab379912c159208f8147e322ea02201fe597474710966b16ae97b0e0673d5ca66bfe8618f89addea833f6e87cf4e3641210289d92b4239c112e97db3aac9590681968bd00415e974dba04bc81cca96b8c7ecffffffff02d0070000000000001976a91432b57f34861bcbe33a701be9ac3a50288fbc0a3d88acc8777a1f000000001976a914b8e0a1c9040f8636a453ba077d7fa5f2318c7d0c88ac00000000",
      "txid": "40112ab9d2b5f98427839272d7a1e23dd2afc6c8355626f373e076c2ab5c2f72",
      "hash": "40112ab9d2b5f98427839272d7a1e23dd2afc6c8355626f373e076c2ab5c2f72",
      "size": 225,
      "version": 1,
      "locktime": 0,
      "vin": [
        {
          "txid": "56a081af7f5162b0ddcf5f629c7867a072b785df9146576b1d39f30f3f8d4af9",
          "vout": 1,
          "scriptSig": {
            "asm": "3044022065d3d111db75d01d001bbd411961759f7b2eacab379912c159208f8147e322ea02201fe597474710966b16ae97b0e0673d5ca66bfe8618f89addea833f6e87cf4e36[ALL|FORKID] 0289d92b4239c112e97db3aac9590681968bd00415e974dba04bc81cca96b8c7ec",
            "hex": "473044022065d3d111db75d01d001bbd411961759f7b2eacab379912c159208f8147e322ea02201fe597474710966b16ae97b0e0673d5ca66bfe8618f89addea833f6e87cf4e3641210289d92b4239c112e97db3aac9590681968bd00415e974dba04bc81cca96b8c7ec"
          },
          "sequence": 4294967295
        }
      ],
      "vout": [
        {
          "value": 0.00002,
          "n": 0,
          "scriptPubKey": {
            "asm": "OP_DUP OP_HASH160 32b57f34861bcbe33a701be9ac3a50288fbc0a3d OP_EQUALVERIFY OP_CHECKSIG",
            "hex": "76a91432b57f34861bcbe33a701be9ac3a50288fbc0a3d88ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [
              "bchtest:qqet2le5scduhce6wqd7ntp62q5gl0q285mw88lsca"
            ]
          }
        },
        {
          "value": 5.28119752,
          "n": 1,
          "scriptPubKey": {
            "asm": "OP_DUP OP_HASH160 b8e0a1c9040f8636a453ba077d7fa5f2318c7d0c OP_EQUALVERIFY OP_CHECKSIG",
            "hex": "76a914b8e0a1c9040f8636a453ba077d7fa5f2318c7d0c88ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [
              "bchtest:qzuwpgwfqs8cvd4y2waqwltl5herrrrapsujlsdcwf"
            ]
          }
        }
      ],
      "blockhash": "00000000002a7077295ec8d4f7afdace8d37d694384cc821e406834fe57aeaae",
      "confirmations": 718,
      "time": 1545086356,
      "blocktime": 1545086356
    }

## Decode Transaction

Decodes an Omni transaction.

**URL** : `/rawtransactions/decodeRawTransaction/{hex}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  hex encoded `String` of a Wormhole transaction required

#### Result

`Object` containing the decoded transaction data

#### Examples

    curl -X GET "http://localhost:3000/v2/rawtransactions/decodeTransaction/02000000016ad673a59a43d70ec537ed1a7cc5b867e1bbbddde47a26164c2927530fae5951010000006a47304402206754d05ef05760ef9eb6d5b80deb174864768876067a261617a69cdbb9295179022022e223153eec7c1b511a4de3e618b952d7d2df925f5f1f9e006193c1cf6f507c4121024d4e7f522f67105b7bf5f9dbe557e7b2244613fdfcd6fe09304f93877328f6beffffffff039fecf70b000000001976a9143a9b2b0c12fe722fcf653b6ef5dcc38732d6ff5188ac0000000000000000166a1408776863000000000000022c0000000005f5e10022020000000000001976a9140ee020c07f39526ac5505c54fa1ab98490979b8388ac00000000" -H "accept: */*"

    // returns
    {
      "txid": "762eef163b13f96273b9c1efa5cb8302caedc1ba77f682e06e9f655d19d107fd",
      "fee": "500",
      "sendingaddress": "bchtest:qqafk2cvztl8yt70v5akaawucwrn94hl2yups7rzfn",
      "referenceaddress": "bchtest:qq8wqgxq0uu4y6k92pw9f7s6hxzfp9umsvtg39pzqf",
      "ismine": false,
      "version": 0,
      "type_int": 0,
      "type": "Simple Send",
      "propertyid": 556,
      "precision": "8",
      "amount": "1.00000000",
      "valid": true,
      "blockhash": "00000000002a0249776b122b8a6dc7361cec117113b79e6ef446dcbc4bb8653f",
      "blocktime": 1545401226,
      "positioninblock": 124,
      "block": 1275232,
      "confirmations": 36
    }

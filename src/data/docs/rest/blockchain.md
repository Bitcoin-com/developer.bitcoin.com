---
title: Blockchain
icon: cubes
ordinal: 3
---

## Best Block Hash

Returns the hash of the best (tip) block in the longest blockchain.

**URL** : `v2/blockchain/getBestBlockHash`

**Method** : `GET`

**Auth required** : NO

#### Result

bestBlockHash `String`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/blockchain/getBestBlockHash" -H "accept: application/json"

    // returns
    "000000000000000003c46b408fb8e708b1ebb830bd082b497d86d5f1cd67d695"

## Blockchain Info

Returns an object containing various state info regarding blockchain processing.

**URL** : `v2/blockchain/getBlockchainInfo`

**Method** : `GET`

**Auth required** : NO

#### Result

blockchainInfo `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/blockchain/getBlockchainInfo" -H "accept: application/json"

    // returns
    {
      "chain": "main",
      "blocks": 561838,
      "headers": 561838,
      "bestblockhash": "000000000000000002307dd38cd01c7308b8febfcdf5772cf087b5bb023d55bc",
      "difficulty": 246585566638.1496,
      "mediantime": 1545402693,
      "verificationprogress": 0.999998831622689,
      "chainwork": "000000000000000000000000000000000000000000d8c09a8ab7262080266b3e",
      "pruned": false,
      "softforks": [
        {
          "id": "bip34",
          "version": 2,
          "reject": {
            "status": true
          }
        },
        {
          "id": "bip66",
          "version": 3,
          "reject": {
            "status": true
          }
        },
        {
          "id": "bip65",
          "version": 4,
          "reject": {
            "status": true
          }
        },
        {
          "id": "csv",
          "version": 5,
          "reject": {
            "status": true
          }
        }
      ]
    }

## Block Count

Returns the number of blocks in the longest blockchain.

**URL** : `v2/blockchain/getBlockCount`

**Method** : `GET`

**Auth required** : NO

#### Result

blockCount `String`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/blockchain/getBlockCount" -H "accept: application/json"

    // returns
    561838

## Block Header single

If verbose is false, returns a string that is serialized, hex-encoded data for blockheader 'hash'. If verbose is true, returns an Object with information about blockheader hash.

**URL** : `v2/blockchain/getBlockHeader/{hash}?verbose=`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1. hash `String` required
2. verbose `Boolean` optional

#### Result

blockHeader `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/blockchain/getBlockHeader/000000000000000005e14d3f9fdfb70745308706615cfa9edca4f4558332b201?verbose=true" -H "accept: application/json"

    // returns
    {
      "hash": "000000000000000005e14d3f9fdfb70745308706615cfa9edca4f4558332b201",
      "confirmations": 61839,
      "height": 500000,
      "version": 536870912,
      "versionHex": "20000000",
      "merkleroot": "4af279645e1b337e655ae3286fc2ca09f58eb01efa6ab27adedd1e9e6ec19091",
      "time": 1509343584,
      "mediantime": 1509336533,
      "nonce": 3604508752,
      "bits": "1809b91a",
      "difficulty": 113081236211.4533,
      "chainwork": "0000000000000000000000000000000000000000007ae48aca46e3b449ad9714",
      "previousblockhash": "0000000000000000043831d6ebb013716f0580287ee5e5687e27d0ed72e6e523",
      "nextblockhash": "00000000000000000568f0a96bf4348847bc84e455cbfec389f27311037a20f3"
    }

## Block Header Bulk

Returns an Array of Objects w/ block header info. This is a bulk request.

**URL** : `v2/blockchain/getBlockHeader`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1. hashes `Array` of Strings. Required
2. verbose `Boolean` optional

#### Result

blockHeaders `Array` of Objects

#### Examples

    curl -X POST "https://bitcoin.com/v2/blockchain/getBlockHeader" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"hashes\":[\"000000000000000005e14d3f9fdfb70745308706615cfa9edca4f4558332b201\",\"00000000000000000568f0a96bf4348847bc84e455cbfec389f27311037a20f3\"],\"verbose\":true}"

    // returns
    [
      {
        "hash": "000000000000000005e14d3f9fdfb70745308706615cfa9edca4f4558332b201",
        "confirmations": 61981,
        "height": 500000,
        "version": 536870912,
        "versionHex": "20000000",
        "merkleroot": "4af279645e1b337e655ae3286fc2ca09f58eb01efa6ab27adedd1e9e6ec19091",
        "time": 1509343584,
        "mediantime": 1509336533,
        "nonce": 3604508752,
        "bits": "1809b91a",
        "difficulty": 113081236211.4533,
        "chainwork": "0000000000000000000000000000000000000000007ae48aca46e3b449ad9714",
        "previousblockhash": "0000000000000000043831d6ebb013716f0580287ee5e5687e27d0ed72e6e523",
        "nextblockhash": "00000000000000000568f0a96bf4348847bc84e455cbfec389f27311037a20f3"
      },
      {
        "hash": "00000000000000000568f0a96bf4348847bc84e455cbfec389f27311037a20f3",
        "confirmations": 61980,
        "height": 500001,
        "version": 536870912,
        "versionHex": "20000000",
        "merkleroot": "01fcc7f4b25840459352005c77e7917bab20bddf1b398f4392e3a299851aa696",
        "time": 1509345037,
        "mediantime": 1509336585,
        "nonce": 2406916250,
        "bits": "1809b91a",
        "difficulty": 113081236211.4533,
        "chainwork": "0000000000000000000000000000000000000000007ae4a51e8bf2ecccf1d9a1",
        "previousblockhash": "000000000000000005e14d3f9fdfb70745308706615cfa9edca4f4558332b201",
        "nextblockhash": "00000000000000000797607b2b69d1561027dbaf28545a33d6ec3adb89f8e564"
      }
    ]

## Chain Tips

Return information about all known tips in the block tree, including the main chain as well as orphaned branches.

**URL** : `v2/blockchain/getChainTips`

**Method** : `GET`

**Auth required** : NO

#### Result

chainTips `Array` of Objects

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/blockchain/getChainTips" -H "accept: */*"

    // returns
    [
      {
        "height": 561838,
        "hash": "000000000000000002307dd38cd01c7308b8febfcdf5772cf087b5bb023d55bc",
        "branchlen": 0,
        "status": "active"
      },
      {
        "height": 561550,
        "hash": "000000000000000006f8616867009be766cd1c81e6b48eb68eec83db5322c1cc",
        "branchlen": 4784,
        "status": "headers-only"
      }
    ]

## Difficulty

Returns the proof-of-work difficulty as a multiple of the minimum difficulty.

**URL** : `v2/blockchain/getDifficulty`

**Method** : `GET`

**Auth required** : NO

#### Result

difficulty `Number`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/blockchain/getDifficulty" -H "accept: application/json"

    // returns
    246585566638.1496

## Mempool Entry Single

Returns mempool data for single transaction

**URL** : `v2/blockchain/getMempoolEntry/{txid}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1. txid `String` required

#### Result

mempoolEntry `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/blockchain/getMempoolEntry/fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33" -H "accept: */*"

    // returns
    {
      "error": "Transaction not in mempool"
    }

## Mempool Entry Bulk

Returns mempool data for multiple transactions

**URL** : `v2/blockchain/getMempoolEntry`

**Method** : `POST`

**Auth required** : NO

#### URL Parameters

1. txids `Array` of Strings. Required

#### Result

mempoolEntries `Array` of Objects

#### Examples

    curl -X POST "https://bitcoin.com/v2/blockchain/getMempoolEntry" -H "accept: */*" -H "Content-Type: application/json" -d "{\"txids\":[\"a5f972572ee1753e2fd2457dd61ce5f40fa2f8a30173d417e49feef7542c96a1\",\"5165dc531aad05d1149bb0f0d9b7bda99c73e2f05e314bcfb5b4bb9ca5e1af5e\"]}"

    // returns
    {
      "error": "Transaction not in mempool"
    }

## Mempool Info

Returns details on the active state of the TX memory pool.

**URL** : `v2/blockchain/getMempoolInfo`

**Method** : `GET`

**Auth required** : NO

#### Result

mempoolInfo `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/blockchain/getMempoolInfo" -H "accept: application/json"

    // returns
    {
      "size": 160,
      "bytes": 68200,
      "usage": 231376,
      "maxmempool": 300000000,
      "mempoolminfee": 0
    }

## Raw Mempool

Returns all transaction ids in memory pool as a json array of string transaction ids.

**URL** : `v2/blockchain/getRawMempool?verbose=`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1. verbose `Boolean` optional

#### Result

rawMempool `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/blockchain/getRawMempool?verbose=false" -H "accept: application/json"

    // returns
    [
      "37e0c80e2b345fe8e405ee9321b80a4afe0ca8fbf394e6a68db905d42895a603",
      "02b71b7c5d09891a21107085870fa4b1d6377e08ca64484860847bbe02fb984c",
      "2d4e7ff5dd6e5b047d83821def9056f9435a80627133e13254ffa7a105da038e",
      "a35032552cedcbf3eef687bbb40b739276ca296ef3e7ea7cc39117d78699577c",
      "7125439d61f87bfe499487f8a07deaf5b702e3bca38f298b95add86728ccf566",
      "2bb4c615d316bd5fe14bfec4a28c10ceb162fb16b87fca91d1ede16352492ba4",
      "523b32a463a6088b590e4cd479f767d815c1f406996c37e6996eab6f15f54c21",
      "7ab9c1b14073c0c11aded4a6518faf1ed2f2f2921e672bc080eec032b5fcbc1f",
      "cdcaf5f7090202adbf3b2dd250392a247c9e4726d164bca16f343640db790806",
      "83019aecde895fa6186db5b4e8992a38f9470c62b988615f1af1d8fa15e29412"
    ]

## Tx Out

Returns details about an unspent transaction output.

**URL** : `v2/blockchain/getTxOut/{txid}/{n}?mempool=`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1. txid `String` required
2. n `Number` required
3. mempool `Boolean` optional

#### Result

txOut `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/blockchain/getTxOut/fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33/0?mempool=false" -H "accept: */*"

    // returns
    {
      "bestblock": "000000000000000002307dd38cd01c7308b8febfcdf5772cf087b5bb023d55bc",
      "confirmations": 560839,
      "value": 50,
      "scriptPubKey": {
        "asm": "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
        "hex": "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
        "reqSigs": 1,
        "type": "pubkey",
        "addresses": [
          "bitcoincash:qpej6mkrwca4tvy2snq4crhrf88v4ljspysx0ueetk"
        ]
      },
      "coinbase": true
    }

## Tx Out Proof Single

Returns a hex-encoded proof that a single txid was included in a block.

**URL** : `v2/blockchain/getTxOutProof/{txid}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1. txid `String` required

#### Result

txOutProof `String`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/blockchain/getTxOutProof/fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33" -H "accept: */*"

    // returns
    "010000007de867cc8adc5cc8fb6b898ca4462cf9fd667d7830a275277447e60800000000338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe021f7449ffff001d36b4af9a0100000001338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe0101"

## Tx Out Proof Bulk

Returns a hex-encoded proof that multiple txids were included in a block.

**URL** : `v2/blockchain/getTxOutProof`

**Method** : `POST`

**Auth required** : NO

#### URL Parameters

1. txids `Array` of Strings. Required

#### Result

txOutProofs `Array` of Objects

#### Examples

    curl -X POST "https://bitcoin.com/v2/blockchain/getTxOutProof" -H "accept: */*" -H "Content-Type: application/json" -d "{\"txids\":[\"a5f972572ee1753e2fd2457dd61ce5f40fa2f8a30173d417e49feef7542c96a1\",\"5165dc531aad05d1149bb0f0d9b7bda99c73e2f05e314bcfb5b4bb9ca5e1af5e\"]}"

    // returns
    [
      {
        "a5f972572ee1753e2fd2457dd61ce5f40fa2f8a30173d417e49feef7542c96a1": "0000c02078af6bf4b1b989eb3266ae528f601cb3936ee08e2e5518010000000000000000c0caf2d5fc5d78c9ac04fa2dafdc3ea7bf4ebe77d52ae6fa20f87093bc2effa7e0a1f45b95d0011874d7dac22b000000060d97bf42acbb71f01e6c3533e73a65f3116d7324a1e2abcf8b13f7aee92fe6eca1962c54f7ee9fe417d47301a3f8a20ff4e51cd67d45d22f3e75e12e5772f9a524d3b28b22a7e0b1c41f93fd7457a6951b0e20388288ea51278b2a345dcbecabff6ce741b6fc67fc4b55cef5f9e649bfac15b2238434129c50b335276a4eee4352713e3801135f1542eba103a13b40ec0d1b3f94f301ab113cfa397532351271fd97bb7dc08e3a8aa09e9396e266ec632252f0f510c1658e1347e1c4b474a8ce02fd00"
      },
      {
        "5165dc531aad05d1149bb0f0d9b7bda99c73e2f05e314bcfb5b4bb9ca5e1af5e": "000000202cbe31a32f4ad5b42877a9ccf9ff6edb3f5ab29ff73ec9000000000000000000069061a8809fed6557fa87eeb5aa7ac9e6720dcb2e2f401b40b7d83be5b4cb4f20a1e95b8c8d01188ca7c098e20100000a3705adb29177f22766afb07d46eb1d3f16a68fdd01c1ede671fcb954899ffed4c161c0a33aa8f6e562e40b1e0124818663e063004720d8d7e9074808a1f16ca56ba218571cb8069bc45bc8c6496ad9611b35d412e2545211ba85438be487d6dc39cd0ae63a41be9a89c4ed823fa6eceb0ceffe13638defa01109a514e639b89e5eafe1a59cbbb4b5cf4b315ef0e2739ca9bdb7d9f0b09b14d105ad1a53dc655176895cacc3f897d5088b004113f886df266edd1ff797f4550885f32380c8fb575be00072239baa70ccf354882e8c50a1d01e81ab2c85146d9e8c3c75140eca2d9d5640af739a86047493e24b1393745914a75fdfe19f081626a5846353c67b45ccf2dd6a753ba118e89239b7916be2ee06e34dc85257228edeaaca06efa0a565580872eff1787360bdf7ff274bb49437bef6a368ab578e34b739ddcc16088a8603ad3700"
      }
    ]

## Verify Tx Out Proof Single

Verifies that a single proof points to a transaction in a block, returning the transaction it commits to and throwing an RPC error if the block is not in our best chain

**URL** : `v2/blockchain/verifyTxOutProof/{proof}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1. proof `String` required

#### Result

txOutProof `Array`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/blockchain/verifyTxOutProof/010000007de867cc8adc5cc8fb6b898ca4462cf9fd667d7830a275277447e60800000000338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe021f7449ffff001d36b4af9a0100000001338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe0101" -H "accept: */*"

    // returns
    [
      "fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33"
    ]

## Verify Tx Out Proof Bulk

Verifies that multiple proofs point to transactions in a block

**URL** : `v2/blockchain/verifyTxOutProof`

**Method** : `POST`

**Auth required** : NO

#### URL Parameters

1. proofs `Array` of Objects. Required

#### Result

txOutProofs `Array` of Objects

#### Examples

    curl -X POST "https://bitcoin.com/v2/blockchain/verifyTxOutProof" -H "accept: */*" -H "Content-Type: application/json" -d "{\"proofs\":[\"010000007de867cc8adc5cc8fb6b898ca4462cf9fd667d7830a275277447e60800000000338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe021f7449ffff001d36b4af9a0100000001338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe0101\",\"000000202cbe31a32f4ad5b42877a9ccf9ff6edb3f5ab29ff73ec9000000000000000000069061a8809fed6557fa87eeb5aa7ac9e6720dcb2e2f401b40b7d83be5b4cb4f20a1e95b8c8d01188ca7c098e20100000a3705adb29177f22766afb07d46eb1d3f16a68fdd01c1ede671fcb954899ffed4c161c0a33aa8f6e562e40b1e0124818663e063004720d8d7e9074808a1f16ca56ba218571cb8069bc45bc8c6496ad9611b35d412e2545211ba85438be487d6dc39cd0ae63a41be9a89c4ed823fa6eceb0ceffe13638defa01109a514e639b89e5eafe1a59cbbb4b5cf4b315ef0e2739ca9bdb7d9f0b09b14d105ad1a53dc655176895cacc3f897d5088b004113f886df266edd1ff797f4550885f32380c8fb575be00072239baa70ccf354882e8c50a1d01e81ab2c85146d9e8c3c75140eca2d9d5640af739a86047493e24b1393745914a75fdfe19f081626a5846353c67b45ccf2dd6a753ba118e89239b7916be2ee06e34dc85257228edeaaca06efa0a565580872eff1787360bdf7ff274bb49437bef6a368ab578e34b739ddcc16088a8603ad3700\"]}"

    // returns
    [
      {
        "010000007de867cc8adc5cc8fb6b898ca4462cf9fd667d7830a275277447e60800000000338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe021f7449ffff001d36b4af9a0100000001338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe0101": [
          "fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33"
        ]
      },
      {
        "000000202cbe31a32f4ad5b42877a9ccf9ff6edb3f5ab29ff73ec9000000000000000000069061a8809fed6557fa87eeb5aa7ac9e6720dcb2e2f401b40b7d83be5b4cb4f20a1e95b8c8d01188ca7c098e20100000a3705adb29177f22766afb07d46eb1d3f16a68fdd01c1ede671fcb954899ffed4c161c0a33aa8f6e562e40b1e0124818663e063004720d8d7e9074808a1f16ca56ba218571cb8069bc45bc8c6496ad9611b35d412e2545211ba85438be487d6dc39cd0ae63a41be9a89c4ed823fa6eceb0ceffe13638defa01109a514e639b89e5eafe1a59cbbb4b5cf4b315ef0e2739ca9bdb7d9f0b09b14d105ad1a53dc655176895cacc3f897d5088b004113f886df266edd1ff797f4550885f32380c8fb575be00072239baa70ccf354882e8c50a1d01e81ab2c85146d9e8c3c75140eca2d9d5640af739a86047493e24b1393745914a75fdfe19f081626a5846353c67b45ccf2dd6a753ba118e89239b7916be2ee06e34dc85257228edeaaca06efa0a565580872eff1787360bdf7ff274bb49437bef6a368ab578e34b739ddcc16088a8603ad3700": [
          "5165dc531aad05d1149bb0f0d9b7bda99c73e2f05e314bcfb5b4bb9ca5e1af5e"
        ]
      }
    ]

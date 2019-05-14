---
title: Block
icon: cube
ordinal: 2
---

## Details by hash

Details about a single block by hash

**URL** : `v2/block/detailsByHash/{hash}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  hash `string` required

#### Result

blockDetails `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/block/detailsByHash/000000000000000005e14d3f9fdfb70745308706615cfa9edca4f4558332b201" -H "accept: application/json"

    // returns
    {
      "hash": "000000000000000005e14d3f9fdfb70745308706615cfa9edca4f4558332b201",
      "size": 81577,
      "height": 500000,
      "version": 536870912,
      "merkleroot": "4af279645e1b337e655ae3286fc2ca09f58eb01efa6ab27adedd1e9e6ec19091",
      "tx": [
        "5ebaa53d24c8246c439ccd9f142cbe93fc59582e7013733954120e9baab201df",
        "bcf7ae875b585e00a61055372c1e99046b20f5fbfcd8659959afb6f428326bfa",
        "3f5a1badfe1beb42b650f325b20935f09f3ab43a3c473c5be18f58308fc7eff1",
        "8c8816bfc5abab335455bc5db507b4a28a2d722ce1f37a350530c2d8bb7a9b5b",
        "53e26861639478e0c287a3ed487be1220fbf7a65d9e50eb96c055be71bfc2338",
        "7157188ba241424c25585c53dd791308e00d06832edc85758905629973790e88",
        "77ff156a34019476f369e7e79da55e8a949c2420c7baa18dba7d7b369b117d3d",
        "77b80d1fafbaa9378efd62fa4788a8cab92ad2058f08b7b2770b50ae7dd0eb19",
        "ebdcc743204bf9e7ff922a8da5020e83421b9e437a27344d52b987f8aa9ae118"
      ],
      "time": 1509343584,
      "nonce": 3604508752,
      "bits": "1809b91a",
      "difficulty": 113081236211.45331,
      "chainwork": "0000000000000000000000000000000000000000007ae48aca46e3b449ad9714",
      "confirmations": 61838,
      "previousblockhash": "0000000000000000043831d6ebb013716f0580287ee5e5687e27d0ed72e6e523",
      "nextblockhash": "00000000000000000568f0a96bf4348847bc84e455cbfec389f27311037a20f3",
      "reward": 12.5,
      "isMainChain": true,
      "poolInfo": {
        "poolName": "ViaBTC",
        "url": "https://viabtc.com/"
      }
    }

## Details by hashes

Details about multiple blocks by hashes

**URL** : `v2/block/detailsByHash`

**Method** : `POST`

**Auth required** : NO

#### Body Parameters

1.  hashes `Array` of Strings. Required

#### Result

blocksDetails `Array` of Objects

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/v2/block/detailsByHash" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"hashes\":[\"0000000000000000040e83398a79a16390897f0d18c92bada6350a19a32ec984\",\"000000000000000005e14d3f9fdfb70745308706615cfa9edca4f4558332b201\"]}"

    // returns
    [
      {
        "hash": "0000000000000000040e83398a79a16390897f0d18c92bada6350a19a32ec984",
        "size": 83661,
        "height": 561979,
        "version": 545259520,
        "merkleroot": "1b255acc92b85e67a9bb69a03e3f1c9c2cb7dc89210b361dbfdaaea74c085408",
        "tx": [
          "1e05fda5ab4b0bcdbe5552b5361691b5386c8e29c55597928a0bcd81d5f45749",
          "00de4c487e83f7695c3554eeb66b83be188d3d3fed3dda6a69dcd57f6db564bb",
          "017f82476fa51e309051c4da67ee6fc7019f565d7c565d36b6e40b62f20acba0",
          "02d79579b2e35e77511b7410394fed1051188348f176cd90fcd0988c59d849e7",
          "03581307c6daaa92973bd771bfc7e1e4af43106c117ee780531cbf790dd4c538",
          "036d41d0fc541cddee3d777875a11fefead99b3b6f05d0a6b0b1583237ec831f",
          "040800e758226f6bee17000f8d2e0bad013cf4aa162e8cd46c818d11b5f25f31",
          "04d9536be5de4677ff4afbc85d31378542085fff22fd010b5a5541ab81700f93",
          "05d9aff8b41b6c152358edf5d6dc270c91a6de4c2f8863b22700ffcf05830cdd",
          "f7bf93fe229bdb276308b86e34288c5a7ec23d2305c79c5cef76a525230cd765",
          "f885b69e0193b76a59fe6abb88b28bb849ff6e33800537b31459568991a34dc8",
          "fe2ca4b83c7c065129cef4287af01acfdb1382ad7b5d1469c80b84b33dcb47ce"
        ],
        "time": 1545486697,
        "nonce": 130838817,
        "bits": "18045c8d",
        "difficulty": 252089458419.6593,
        "chainwork": "000000000000000000000000000000000000000000d8defbe32e659239ff26f4",
        "confirmations": 1,
        "previousblockhash": "0000000000000000013ca3c3aab79542b83c66aac7f844d37ba57e1ee9dddc65",
        "reward": 12.5,
        "isMainChain": true,
        "poolInfo": {
          "poolName": "BTC.TOP",
          "url": "http://btc.top/"
        }
      },
      {
        "hash": "000000000000000005e14d3f9fdfb70745308706615cfa9edca4f4558332b201",
        "size": 81577,
        "height": 500000,
        "version": 536870912,
        "merkleroot": "4af279645e1b337e655ae3286fc2ca09f58eb01efa6ab27adedd1e9e6ec19091",
        "tx": [
          "7157188ba241424c25585c53dd791308e00d06832edc85758905629973790e88",
          "77ff156a34019476f369e7e79da55e8a949c2420c7baa18dba7d7b369b117d3d",
          "77b80d1fafbaa9378efd62fa4788a8cab92ad2058f08b7b2770b50ae7dd0eb19",
          "dcc9bf793de94b02f29ed8b8e4383566b053b81414ad02aefd4ff9e4ae152269",
          "ead3a1f470511e71d1b98c43954346b360bb0823d022ea440138fb1a6edc8576",
          "5e4a2354b740b5b195808a1538e682443d7c72a8ff32370cf8adc0b63d725b18",
          "d7aa94a1015eb4549fcfe28d1ddfe6ced8c3bf256b00fa8b352fd542046ca2f9",
          "eaf852887b97152e7441e6f084c8ebf9214b2e9749d852c953a28c9cd302506a",
          "ebdcc743204bf9e7ff922a8da5020e83421b9e437a27344d52b987f8aa9ae118"
        ],
        "time": 1509343584,
        "nonce": 3604508752,
        "bits": "1809b91a",
        "difficulty": 113081236211.45331,
        "chainwork": "0000000000000000000000000000000000000000007ae48aca46e3b449ad9714",
        "confirmations": 61980,
        "previousblockhash": "0000000000000000043831d6ebb013716f0580287ee5e5687e27d0ed72e6e523",
        "nextblockhash": "00000000000000000568f0a96bf4348847bc84e455cbfec389f27311037a20f3",
        "reward": 12.5,
        "isMainChain": true,
        "poolInfo": {
          "poolName": "ViaBTC",
          "url": "https://viabtc.com/"
        }
      }
    ]

## Details by height

Details about a block by height

**URL** : `v2/block/detailsByHeight/{height}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  height `string` required

#### Result

blockDetails `Object`

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/block/detailsByHeight/500000" -H "accept: application/json"

    // returns
    {
      "hash": "000000000000000005e14d3f9fdfb70745308706615cfa9edca4f4558332b201",
      "size": 81577,
      "height": 500000,
      "version": 536870912,
      "merkleroot": "4af279645e1b337e655ae3286fc2ca09f58eb01efa6ab27adedd1e9e6ec19091",
      "tx": [
        "5ebaa53d24c8246c439ccd9f142cbe93fc59582e7013733954120e9baab201df",
        "bcf7ae875b585e00a61055372c1e99046b20f5fbfcd8659959afb6f428326bfa",
        "3f5a1badfe1beb42b650f325b20935f09f3ab43a3c473c5be18f58308fc7eff1",
        "8c8816bfc5abab335455bc5db507b4a28a2d722ce1f37a350530c2d8bb7a9b5b",
        "53e26861639478e0c287a3ed487be1220fbf7a65d9e50eb96c055be71bfc2338",
        "7157188ba241424c25585c53dd791308e00d06832edc85758905629973790e88",
        "77ff156a34019476f369e7e79da55e8a949c2420c7baa18dba7d7b369b117d3d",
        "2bb360883fcacb48508538f26c8c1830b24ce59fa607d171793ef5dd87e7d72b",
        "a98289497f20c05b109eaf12aa2507bde193e0609b7bd2ecdc26fdb725535803",
        "ebdcc743204bf9e7ff922a8da5020e83421b9e437a27344d52b987f8aa9ae118"
      ],
      "time": 1509343584,
      "nonce": 3604508752,
      "bits": "1809b91a",
      "difficulty": 113081236211.45331,
      "chainwork": "0000000000000000000000000000000000000000007ae48aca46e3b449ad9714",
      "confirmations": 61838,
      "previousblockhash": "0000000000000000043831d6ebb013716f0580287ee5e5687e27d0ed72e6e523",
      "nextblockhash": "00000000000000000568f0a96bf4348847bc84e455cbfec389f27311037a20f3",
      "reward": 12.5,
      "isMainChain": true,
      "poolInfo": {
        "poolName": "ViaBTC",
        "url": "https://viabtc.com/"
      }
    }

## Details by heights

Details about multiple blocks by heights

**URL** : `v2/block/detailsByHeight`

**Method** : `POST`

**Auth required** : NO

#### URL Parameters

1.  heights `Array` of Strings. Required

#### Result

blocksDetails `Array` of Objects

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/v2/block/detailsByHeight" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"heights\":[499000,500000]}"

    // returns
    [
      {
        "hash": "00000000000000000f7141eb79ea2bc62b6cccb4d870fea410be7f5ab2b4f571",
        "size": 458,
        "height": 499000,
        "version": 536870912,
        "merkleroot": "9ffce8fdbc140763f11dcadb1d3639042a95120bb42561811f2069405203d2e7",
        "tx": [
          "989d14c336a977fe4c022be25cab7ce67e885e21019c8e283702203bc9875e92",
          "fba87d044d76ba88168021c7f9ed5502920313dae573c2c08001cb39f46c64a5"
        ],
        "time": 1509171480,
        "nonce": 1320432960,
        "bits": "180fee29",
        "difficulty": 69019035780.6304,
        "chainwork": "0000000000000000000000000000000000000000007aa119a01fbe97be5073ed",
        "confirmations": 62980,
        "previousblockhash": "000000000000000003b42ae8da4d0ac98c44948e045a2a7a2b6c4a96ead5d5a9",
        "nextblockhash": "00000000000000000e37cfb288aec7e41cd50d4cc4ea5e5531a9d6e707f36dad",
        "reward": 12.5,
        "isMainChain": true,
        "poolInfo": {
          "poolName": "F2Pool",
          "url": "https://www.f2pool.com/"
        }
      },
      {
        "hash": "000000000000000005e14d3f9fdfb70745308706615cfa9edca4f4558332b201",
        "size": 81577,
        "height": 500000,
        "version": 536870912,
        "merkleroot": "4af279645e1b337e655ae3286fc2ca09f58eb01efa6ab27adedd1e9e6ec19091",
        "tx": [
          "5ebaa53d24c8246c439ccd9f142cbe93fc59582e7013733954120e9baab201df",
          "0fed6e943b64d5c0767d63b19db7f72b26cacee8ba12b355131ce74bde1d53c3",
          "2ee00836436c101ce6f6f9bb357c39e9a44944e0484d5183ab4e0c70e8222d62",
          "8ec040c54710494c1af109d3797cc4faae70c4501fc4dacfd6c8d57efef88567",
          "5571ce168d03bdee004bbbfd65f5a382be850f256a2ef1377250626efc171379",
          "6faeaf6d045385a96b0ffb89c7e083e3acfaec141b6d0b871bd7faf02ebd62be",
          "4fc6a86f806f39d92adaa6c8176708bcd2c740cf2aedc04bb533470ac9049c14",
          "ebdcc743204bf9e7ff922a8da5020e83421b9e437a27344d52b987f8aa9ae118"
        ],
        "time": 1509343584,
        "nonce": 3604508752,
        "bits": "1809b91a",
        "difficulty": 113081236211.45331,
        "chainwork": "0000000000000000000000000000000000000000007ae48aca46e3b449ad9714",
        "confirmations": 61980,
        "previousblockhash": "0000000000000000043831d6ebb013716f0580287ee5e5687e27d0ed72e6e523",
        "nextblockhash": "00000000000000000568f0a96bf4348847bc84e455cbfec389f27311037a20f3",
        "reward": 12.5,
        "isMainChain": true,
        "poolInfo": {
          "poolName": "ViaBTC",
          "url": "https://viabtc.com/"
        }
      }
    ]

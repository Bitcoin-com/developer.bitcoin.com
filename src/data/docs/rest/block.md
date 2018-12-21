---
title: Block
icon: cube
ordinal: 2
---

## Block details by hash

Details about a block by hash

**URL** : `v2/block/detailsByHash/{hash}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  hash `String` required

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
        "dcc9bf793de94b02f29ed8b8e4383566b053b81414ad02aefd4ff9e4ae152269",
        "ead3a1f470511e71d1b98c43954346b360bb0823d022ea440138fb1a6edc8576",
        "5e4a2354b740b5b195808a1538e682443d7c72a8ff32370cf8adc0b63d725b18",
        "d7aa94a1015eb4549fcfe28d1ddfe6ced8c3bf256b00fa8b352fd542046ca2f9",
        "eaf852887b97152e7441e6f084c8ebf9214b2e9749d852c953a28c9cd302506a",
        "9fc7b7ef39523d674ef47f2f72028c8f1b0a09cc9fa002585c0b6259493a7577",
        "474f0b1dd4cddffd31bd6375a10884b7a3afdd91692dc644963b147318858884",
        "2997cbcfdbe81cc346daed3869eb4722d594bc81f59e8b1f3f09b7ba6c487388",
        "4bf8cebb3f9356d6347f41cdf5b0adcc29c64dd3791cfa3ae41578cba2101f08",
        "0be69f658600ac6d6c3a2bc05bbf1d71bf1bc1bd9cd84e1188f64b76d2cb49da",
        "7bec4d589357cb13676c960fab9c91b1bb3e01cfedb2ee4760cf2a7bc9f691a9",
        "40a7b3cae510975693cae1c60e1027a8fde5cb1f8a408d8afb4e10a4b0e7af8f",
        "1265fcb88ca5638fec2fbd6257b17ece8887b8c74c6e0f10746733ed93e34fbf",
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

## Block details by height

Details about a block by height

**URL** : `v2/block/detailsByHeight/{height}`

**Method** : `GET`

**Auth required** : NO

#### URL Parameters

1.  height `String` required

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
        "77b80d1fafbaa9378efd62fa4788a8cab92ad2058f08b7b2770b50ae7dd0eb19",
        "dcc9bf793de94b02f29ed8b8e4383566b053b81414ad02aefd4ff9e4ae152269",
        "ead3a1f470511e71d1b98c43954346b360bb0823d022ea440138fb1a6edc8576",
        "5e4a2354b740b5b195808a1538e682443d7c72a8ff32370cf8adc0b63d725b18",
        "d7aa94a1015eb4549fcfe28d1ddfe6ced8c3bf256b00fa8b352fd542046ca2f9",
        "eaf852887b97152e7441e6f084c8ebf9214b2e9749d852c953a28c9cd302506a",
        "9fc7b7ef39523d674ef47f2f72028c8f1b0a09cc9fa002585c0b6259493a7577",
        "474f0b1dd4cddffd31bd6375a10884b7a3afdd91692dc644963b147318858884",
        "2997cbcfdbe81cc346daed3869eb4722d594bc81f59e8b1f3f09b7ba6c487388",
        "4bf8cebb3f9356d6347f41cdf5b0adcc29c64dd3791cfa3ae41578cba2101f08",
        "0be69f658600ac6d6c3a2bc05bbf1d71bf1bc1bd9cd84e1188f64b76d2cb49da",
        "7bec4d589357cb13676c960fab9c91b1bb3e01cfedb2ee4760cf2a7bc9f691a9",
        "40a7b3cae510975693cae1c60e1027a8fde5cb1f8a408d8afb4e10a4b0e7af8f",
        "1265fcb88ca5638fec2fbd6257b17ece8887b8c74c6e0f10746733ed93e34fbf",
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

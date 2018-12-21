---
title: Mining
icon: hdd
ordinal: 6
---

## Get Mining Info

Returns a json object containing mining-related information.

**URL** : `v2/mining/getMiningInfo`

**Method** : `GET`

**Auth required** : NO

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X GET "http://localhost:3000/v2/mining/getMiningInfo" -H "accept: application/json"

    // returns
    {
      "blocks": 561840,
      "currentblocksize": 0,
      "currentblocktx": 0,
      "difficulty": 243738776600.1426,
      "blockprioritypercentage": 5,
      "errors": "",
      "networkhashps": 1587730664538483000,
      "pooledtx": 112,
      "chain": "main"
    }

## Get Network Hashps

Returns the estimated network hashes per second based on the last n blocks. Pass in [blocks] to override # of blocks, -1 specifies since last difficulty change. Pass in [height] to estimate the network speed at the time when a certain block was found.

**URL** : `v2/mining/getNetworkHashps?nblocks=&height=`

**Method** : `GET`

**Auth required** : NO

#### Body Parameters

1.  nblocks `String` optional
2.  height `String` optional

#### Result

getworkHashps `Number`

#### Examples

    curl -X GET "http://localhost:3000/v2/mining/getNetworkHashps?nblocks=120&height=-1" -H "accept: application/json"

    // returns
    1587730664538483000

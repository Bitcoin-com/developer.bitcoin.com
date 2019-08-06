---
title: Socket
icon: plug
ordinal: 8
---

### `constructor`

Create new Socket.

#### Arguments

1.  config `Object`: with properties:
    1.  wsURL `string`: optional, Defaults to `wss://ws.bitcoin.com`
    2.  slpsocketURL `string`: optional
    3.  restURL `string`: optional
    4.  callback `Function`: optional

#### Result

Socket `Socket`

#### Examples

      // instance of Socket
      let socket = new SLP.Socket({callback: () => {console.log('connected')}, wsURL: 'wss://ws.bitcoin.com'})

### `listen`

Listen on a websocket to get real\-time data.

#### Arguments

1.  query `string | object`: type of data to return in real time. `transactions` or `blocks` are valid `string`s. Any SLPSocket `query` object is also valid
2.  callback `function`: function to be called which gets passed back `message` in real time.

#### Result

data `Object`: data returned in real\-time over a websocket

#### Examples

      let socket = new SLP.Socket({
        callback: () => {
          console.log("connected")
        },
        wsURL: "wss://ws.bitcoin.com"
      })
      socket.listen(
        {
          v: 3,
          q: { find: {} }
        },
        msg => {
          setTimeout(function() {
            socket.close(() => {
              console.log("closed")
            })
          }, 5000)
        }
      )
      // returns
      // {"type":"mempool","data":[{"_id":"5d49a5d1a5f7f174062c77d4","tx":{"h":"65c7fdb83416f7e5265a7c8f7bc91c4ff61846500f93eb6de4826f4383a32fea"},"in":[{"i":0,"b0":"MEQCIEd1aDojWA4Mn0+Ohe8u/xAIZLI3YSoCftPiL6nAYqvbAiAgJr0E1SDirrv1x3WVPfhxHES2pmw7BUv2Ce3Tt3mnKEE=","b1":"A4B14wuKtzl6/4UZZBlcV9JqpfAn2WTRXJj24FMdK0se","str":"304402204775683a23580e0c9f4f8e85ef2eff100864b237612a027ed3e22fa9c062abdb02202026bd04d520e2aebbf5c775953df8711c44b6a66c3b054bf609edd3b779a72841 038075e30b8ab7397aff851964195c57d26aa5f027d964d15c98f6e0531d2b4b1e","e":{"h":"2e18c90a40f82dc415f87709a8bfed549b068dfab0deec4d032d3d1b7d9178a8","i":2,"s":"RzBEAiBHdWg6I1gODJ9PjoXvLv8QCGSyN2EqAn7T4i+pwGKr2wIgICa9BNUg4q679cd1lT34cRxEtqZsOwVL9gnt07d5pyhBIQOAdeMLirc5ev+FGWQZXFfSaqXwJ9lk0VyY9uBTHStLHg==","a":"simpleledger:qzht6wanjrxqjp6qyla6t856mfhgktg3wcphvqpm6m"},"h0":"304402204775683a23580e0c9f4f8e85ef2eff100864b237612a027ed3e22fa9c062abdb02202026bd04d520e2aebbf5c775953df8711c44b6a66c3b054bf609edd3b779a72841","h1":"038075e30b8ab7397aff851964195c57d26aa5f027d964d15c98f6e0531d2b4b1e"},{"i":1,"b0":"MEQCIEI6fm5yuoLxhO8jSfHO4o3bsIDxA57hxnM47glyM7MCAiAod189/A11KbYunWRI60tSsdsrWRVgtD0zBFOsnk6GjEE=","b1":"ArKlVkqejzomjw/dFV0xhhbKwZkw2tEemC8+zbT+MZrt","str":"30440220423a7e6e72ba82f184ef2349f1cee28ddbb080f1039ee1c67338ee097233b302022028775f3dfc0d7529b62e9d6448eb4b52b1db2b591560b43d330453ac9e4e868c41 02b2a5564a9e8f3a268f0fdd155d318616cac19930dad11e982f3ecdb4fe319aed","e":{"h":"2e18c90a40f82dc415f87709a8bfed549b068dfab0deec4d032d3d1b7d9178a8","i":3,"s":"RzBEAiBCOn5ucrqC8YTvI0nxzuKN27CA8QOe4cZzOO4JcjOzAgIgKHdfPfwNdSm2Lp1kSOtLUrHbK1kVYLQ9MwRTrJ5OhoxBIQKypVZKno86Jo8P3RVdMYYWysGZMNrRHpgvPs20/jGa7Q==","a":"simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk"},"h0":"30440220423a7e6e72ba82f184ef2349f1cee28ddbb080f1039ee1c67338ee097233b302022028775f3dfc0d7529b62e9d6448eb4b52b1db2b591560b43d330453ac9e4e868c41","h1":"02b2a5564a9e8f3a268f0fdd155d318616cac19930dad11e982f3ecdb4fe319aed"}],"out":[{"i":0,"b0":{"op":106},"b1":"U0xQAA==","s1":"SLP\u0000","b2":"AQ==","s2":"\u0001","b3":"U0VORA==","s3":"SEND","b4":"A6rK4niocisDz7t1z4yivBgQ8J0X6Oa0hNpRNgpiA+Y=","s4":"\u0003���x�r+\u0003ϻuό��\u0018\u0010�\u0017�洄�Q6\nb\u0003�","b5":"AAAAAAAAA+g=","s5":"\u0000\u0000\u0000\u0000\u0000\u0000\u0003�","b6":"AAAAAAAPLrg=","s6":"\u0000\u0000\u0000\u0000\u0000\u000f.�","str":"OP_RETURN 534c5000 01 53454e44 03aacae278a8722b03cfbb75cf8ca2bc1810f09d17e8e6b484da51360a6203e6 00000000000003e8 00000000000f2eb8","e":{"v":0,"i":0,"s":"agRTTFAAAQEEU0VORCADqsrieKhyKwPPu3XPjKK8GBDwnRfo5rSE2lE2CmID5ggAAAAAAAAD6AgAAAAAAA8uuA=="},"h1":"534c5000","h2":"01","h3":"53454e44","h4":"03aacae278a8722b03cfbb75cf8ca2bc1810f09d17e8e6b484da51360a6203e6","h5":"00000000000003e8","h6":"00000000000f2eb8"},{"i":1,"b0":{"op":118},"b1":{"op":169},"b2":"BggP97JkHTbRBHn6zPUTLGcF5+w=","s2":"\u0006\b\u000f��d\u001d6�\u0004y���\u0013,g\u0005��","b3":{"op":136},"b4":{"op":172},"str":"OP_DUP OP_HASH160 06080ff7b2641d36d10479faccf5132c6705e7ec OP_EQUALVERIFY OP_CHECKSIG","e":{"v":546,"i":1,"s":"dqkUBggP97JkHTbRBHn6zPUTLGcF5+yIrA==","a":"simpleledger:qqrqsrlhkfjp6dk3q3ul4n84zvkxwp08as29vh52n0"},"h2":"06080ff7b2641d36d10479faccf5132c6705e7ec"},{"i":2,"b0":{"op":118},"b1":{"op":169},"b2":"rr07s5DMCQdAJ/ulnprabostEXY=","s2":"��;���\t\u0007@'�����n�-\u0011v","b3":{"op":136},"b4":{"op":172},"str":"OP_DUP OP_HASH160 aebd3bb390cc09074027fba59e9ada6e8b2d1176 OP_EQUALVERIFY OP_CHECKSIG","e":{"v":546,"i":2,"s":"dqkUrr07s5DMCQdAJ/ulnprabostEXaIrA==","a":"simpleledger:qzht6wanjrxqjp6qyla6t856mfhgktg3wcphvqpm6m"},"h2":"aebd3bb390cc09074027fba59e9ada6e8b2d1176"},{"i":3,"b0":{"op":118},"b1":{"op":169},"b2":"6dQvuLkMwbjc9pgoC7OgZs4Ih28=","s2":"��/��\f�����(\u000b��f�\b�o","b3":{"op":136},"b4":{"op":172},"str":"OP_DUP OP_HASH160 e9d42fb8b90cc1b8dcf698280bb3a066ce08876f OP_EQUALVERIFY OP_CHECKSIG","e":{"v":3995752,"i":3,"s":"dqkU6dQvuLkMwbjc9pgoC7OgZs4Ih2+IrA==","a":"simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk"},"h2":"e9d42fb8b90cc1b8dcf698280bb3a066ce08876f"}],"slp":{"valid":true,"detail":{"decimals":3,"tokenIdHex":"03aacae278a8722b03cfbb75cf8ca2bc1810f09d17e8e6b484da51360a6203e6","transactionType":"SEND","versionType":1,"documentUri":"gemstone.cash","documentSha256Hex":null,"symbol":"GEM","name":"gemstone","txnBatonVout":null,"txnContainsBaton":false,"outputs":[{"address":"simpleledger:qqrqsrlhkfjp6dk3q3ul4n84zvkxwp08as29vh52n0","amount":"1"},{"address":"simpleledger:qzht6wanjrxqjp6qyla6t856mfhgktg3wcphvqpm6m","amount":"995"}]},"invalidReason":null,"schema_version":71}}]}
      // closed

### `close`

Close websocket connection

#### Arguments

1.  callback `function` (optional): function to be called.

#### Examples

      let socket = new bitbox.Socket({callback: () => {console.log('connected')}, wsURL: 'wss://ws.bitcoin.com'})
      socket.listen('transactions', (message) => {
        socket.close(() => {
          console.log("closed")
        })
      })
      // returns the following
      // closed

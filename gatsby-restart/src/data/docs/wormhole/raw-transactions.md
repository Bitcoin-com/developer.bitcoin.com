---
  title: RawTransactions
  icon: home
  ordinal: 7
---

### `change`

Adds a change output to the transaction. The provided inputs are not added to the transaction, but only used to determine the change. It is assumed that the inputs were previously added, for example via "createrawtransaction".

Optionally a position can be provided, where the change output should be inserted, starting with 0. If the number of outputs is smaller than the position, then the change output is added to the end. Change outputs should be inserted before reference outputs, and as per default, the change output is added to the first position.

If the change amount would be considered as dust, then no change output is added.

#### Arguments

1.  rawTx (string, required) The raw transaction to extend
2.  prevTxs (string, required) A JSON array of transaction inputs
3.  destination (string, required) The destination for the change
4.  fee (number, required) the desired transaction fees
5.  position (number, optional) The position of the change output (default: first position)

#### Result

rawTx `String`: the hex\-encoded modified raw transaction

#### Examples


      Wormhole.RawTransactions.change("0100000001b15ee60431ef57ec682790dec5a3c0d83a0c360633ea8308fbf6d5fc10a779670400000000ffffffff025c0d00000000000047512102f3e471222bb57a7d416c82bf81c627bfcd2bdc47f36e763ae69935bba4601ece21021580b888ff56feb27f17f08802ebed26258c23697d6a462d43fc13b565fda2dd52aeaa0a0000000000001976a914946cb2e08075bcbaf157e47bcb67eb2b2339d24288ac00000000", [{"txid":"6779a710fcd5f6fb0883ea3306360c3ad8c0a3c5de902768ec57ef3104e65eb1","vout":4,"scriptPubKey":"76a9147b25205fd98d462880a3e5b0541235831ae959e588ac","value":0.00068257}], "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", 0.00003500, 1).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });
      // 0100000001b15ee60431ef57ec682790dec5a3c0d83a0c360633ea8308fbf6d5fc10a779670400000000ffffffff035c0d00000000000047512102f3e471222bb57a7d416c82bf81c627bfcd2bdc47f36e763ae69935bba4601ece21021580b888ff56feb27f17f08802ebed26258c23697d6a462d43fc13b565fda2dd52aeefe40000000000001976a9141522a025f2365eebee65cd8a8b8a38180dbcd59588acaa0a0000000000001976a914946cb2e08075bcbaf157e47bcb67eb2b2339d24288ac00000000


### `input`

Adds a transaction input to the transaction. If no raw transaction is provided, a new transaction is created.

#### Arguments

1.  rawTx (string, required) The raw transaction to extend
2.  txid (string, required) The hash of the input transaction
3.  n (number, required) The index of the transaction output used as input

#### Result

rawTx `String`: the hex\-encoded modified raw transaction

#### Examples


      Wormhole.RawTransactions.input("01000000000000000000", "b006729017df05eda586df9ad3f8ccfee5be340aadf88155b784d1fc0e8342ee", 0).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });
      // 0100000001ee42830efcd184b75581f8ad0a34bee5feccf8d39adf86a5ed05df17907206b00000000000ffffffff0000000000


### `opReturn`

Adds a payload with class C (op\-return) encoding to the transaction. If no raw transaction is provided, a new transaction is created. If the data encoding fails, then the transaction is not modified.

#### Arguments

1.  rawTx (string, required) The raw transaction to extend
2.  payload (string, required) The hex\-encoded payload to add

#### Result

rawTx `String`: the hex\-encoded modified raw transaction

#### Examples


      Wormhole.RawTransactions.opReturn("01000000000000000000", "00000000000000020000000006dac2c0").then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });
      // 0100000000010000000000000000166a140877686300000000000000020000000006dac2c000000000


### `reference`

Adds a reference output to the transaction. If no raw transaction is provided, a new transaction is created. The output value is set to at least the dust threshold.

#### Arguments

1.  rawTx (string, required) The raw transaction to extend
2.  destination (string, required) The reference address or destination
3.  amount (number, optional) The optional reference amount (minimal by default)

#### Result

rawTx `String`: the hex\-encoded modified raw transaction

#### Examples


      Wormhole.RawTransactions.reference("0100000001a7a9402ecd77f3c9f745793c9ec805bfa2e14b89877581c734c774864247e6f50400000000ffffffff03aa0a0000000000001976a9146d18edfe073d53f84dd491dae1379f8fb0dfe5d488ac5c0d0000000000004751210252ce4bdd3ce38b4ebbc5a6e1343608230da508ff12d23d85b58c964204c4cef3210294cc195fc096f87d0f813a337ae7e5f961b1c8a18f1f8604a909b3a5121f065b52aeaa0a0000000000001976a914946cb2e08075bcbaf157e47bcb67eb2b2339d24288ac00000000", "bchtest:qq2j9gp97gm9a6lwvhxc4zu28qvqm0x4j5e72v7ejg", 0.005).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });
      // 0100000001a7a9402ecd77f3c9f745793c9ec805bfa2e14b89877581c734c774864247e6f50400000000ffffffff04aa0a0000000000001976a9146d18edfe073d53f84dd491dae1379f8fb0dfe5d488ac5c0d0000000000004751210252ce4bdd3ce38b4ebbc5a6e1343608230da508ff12d23d85b58c964204c4cef3210294cc195fc096f87d0f813a337ae7e5f961b1c8a18f1f8604a909b3a5121f065b52aeaa0a0000000000001976a914946cb2e08075bcbaf157e47bcb67eb2b2339d24288ac20a10700000000001976a9141522a025f2365eebee65cd8a8b8a38180dbcd59588ac00000000


### `decodeTransaction`

Decodes an Omni transaction.

#### Arguments

1.  rawTx (string, required) The raw transaction to decode
2.  prevTxs (string, optional) A JSON array of transaction inputs (default: none)
3.  height (number, optional) The parsing block height (default: 0 for chain height)

#### Result

rawTx `String`: the hex\-encoded modified raw transaction

#### Examples


      Wormhole.RawTransactions.decodeTransaction("010000000163af14ce6d477e1c793507e32a5b7696288fa89705c0d02a3f66beb3c5b8afee0100000000ffffffff02ac020000000000004751210261ea979f6a06f9dafe00fb1263ea0aca959875a7073556a088cdfadcd494b3752102a3fd0a8a067e06941e066f78d930bfc47746f097fcd3f7ab27db8ddf37168b6b52ae22020000000000001976a914946cb2e08075bcbaf157e47bcb67eb2b2339d24288ac00000000", [{"txid":"eeafb8c5b3be663f2ad0c00597a88f2896765b2ae30735791c7e476dce14af63","vout":1,"scriptPubKey":"76a9149084c0bd89289bc025d0264f7f23148fb683d56c88ac","value":0.0001123}]).then((result) => {
      console.log(result);
      }, (err) => {
      console.log(err);
      });

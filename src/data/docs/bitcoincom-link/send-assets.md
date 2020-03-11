---
title: Send Assets
icon: exchange
ordinal: 2
---

# sendAssets

Allows for a simple send of assets from user to specified address. The use case is where another application would like to request payment from the user wallet directly, without alerting any 3rd party server (merchant server).

## Method Interface

```
function sendAssets(SendAssetsInput): Promise<SendAssetsOutput>
```

## Input arguments

```
interface SendAssetsInput {
  to: string; // Address of the receiver of the assets to be sent
  protocol: string; // BCH/SLP/BTC or any future protocol
  assetId?: string; // Optional in the case of BCH or BTC. Required in the case of SLP, and will be token id
  value: string; // The amount of coins or assets to be sent, in user readable decimal format (eg. "0.000123")
}
```

## Success return value

```
interface SendAssetsOutput {
  txid: string; // Transaction id of the sent assets
}
```

## Error return value

```
interface Error {
  type: string; // `NO_PROVIDER`|`PROTOCOL_ERROR`|`SEND_ERROR`|`MALFORMED_INPUT`|`CANCELED`
  description: string;
  data: string;
}
```

## Example

```
import bitcoincomLink from 'bitcoincom-link';

bitcoincomLink.sendAssets({
  to: 'bitcoincash:qrd9khmeg4nqag3h5gzu8vjt537pm7le85lcauzezc',
  protocol: 'BCH',
  value: '0.000123',
})
.then((data: SendAssetsOutput) => {
  const {
    txid,
  } = data;

  console.log('Completed transaction id: ' + txid);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case PROTOCOL_ERROR:
      console.log('The provided protocol is not supported by this wallet.');
      break;
    case SEND_ERROR:
      console.log('There was an error when broadcasting this transaction to the network.');
      break;
    case MALFORMED_INPUT:
      console.log('The input provided is not valid.');
      break;
    case CANCELED:
      console.log('The user has canceled this transaction request.');
      break;
  }
});
```

## Demo - Send BCH

<iframe height="575" style="width: 100%;" scrolling="no" title="Bitcoin.com Link - sendAssets - BCH" src="https://codepen.io/nickfujita/embed/yLNgXqx?height=265&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

## Demo - Send SLP Tokens

<iframe height="600" style="width: 100%;" scrolling="no" title="Bitcoin.com Link - sendAssets - SLP" src="https://codepen.io/nickfujita/embed/VwLPWVa?height=265&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

## Provider Request Handling

- Validate the input parameters to make sure that the address provided is valid, and that it matches the provided protocol.
- Present the request to the user, and allow them to pick from which of their accounts they would like to send the funds (for some wallets they may only have a single account)
- If the user accepts the transaction, sign & broadcast the transaction, then return the transaction id to the app.
  - The transaction does not have any input UTXO requirements, other than having enough funds to sucessfully match it's outputs
  - BCH/BTC transactions should have at least 1 UTXO output, for the specified input amount and specified address. Any additionaly UTXO outputs for the remaining input amounts are to be determined by the wallet provider, including the fee.
  - SLP transactions should conform with the [protocol spec](https://github.com/simpleledger/slp-specifications/blob/master/slp-token-type-1.md#send---spend-transaction)
- If the user rejects the transaction, communicate back to the app that the user canceled the request.

Example

```
{
  txid: '31065a7ab53d5fa8e66ef1680e51c8485953c77e069293889b06d2b0b4934205',
}
```

## Wallet Provider Support

| Provider                | Supported | Comments |
| ----------------------- | --------- | -------- |
| Badger Chrome Extension | ✅        |          |
| Badger Mobile           | ⛔️       |          |
| Bitcoin.com iOS         | ⛔️       |          |
| Bitcoin.com Android     | ⛔️       |          |

---
title: Create Token
icon: coins
ordinal: 4
---

# createToken

Creates a new SLP token, and mints the initial supply to specified wallet address.

## Method Interface

```
function createToken(CreateTokenInput): Promise<CreateTokenOutput>
```

## Input arguments

```
interface CreateTokenInput {
  name: string; // token name
  symbol: string; // token symbol
  decimals: number; // number of decimals
  initialSupply: number; // initial supply to send to receive address
  tokenReceiverAddress: string; // SLP formatted address to receive the initial token supply
  batonReceiverAddress?: string; // optional SLP formatted address which will have minting privledges for additional tokens
  documentUri?: string; // URI of document related to token
  documentHash?: string; // hash of document related to token
}
```

## Success return value

```
interface CreateTokenOutput {
  tokenId: string; // unique id for new token (also txid of token genesis tx)
}
```

## Error return value

```
interface Error {
  type: string; // `NO_PROVIDER`|`PROTOCOL_ERROR``|`MALFORMED_INPUT`|`CANCELED`
  description: string;
  data: string;
}
```

## Example

```
import bitcoincomLink from 'bitcoincom-link';

bitcoincomLink.createToken({
  name: 'World Hunger Token',
  symbol: 'WHT',
  decimals: 8,
  initialSupply: '1000000000',
  tokenReceiverAddress: 'simpleledger:qrw3pqgyjffxsv5qdj9n6zdpe70zqsegxcjyff6q8m',
})
.then((data: CreateTokenOutput) => {
  const {
    tokenId,
  } = data;

  console.log('Token id: ' + tokenId);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case PROTOCOL_ERROR:
      console.log('The provided protocol is not supported by this wallet.');
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

## Demo - Create new token

<iframe height="625" style="width: 100%;" scrolling="no" title="Bitcoin.com Link - createToken" src="https://codepen.io/nickfujita/embed/WNvOgGj?height=265&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

## Provider Request Handling

- Validate the input parameters to make sure that the SLP addresses provided are valid and match the SLP address scheme
- Present the request to the user, and allow them to pick from which of their accounts the BCH to mint the tokens will be sourced (for some wallets they may only have a single account)
- If the user accepts the transaction, sign & broadcast the transaction, then return the transaction id to the app.
  - SLP transactions should conform with the [protocol spec](https://github.com/simpleledger/slp-specifications/blob/master/slp-token-type-1.md#mint---extended-minting-transaction)
- If the user rejects the transaction, communicate back to the app that the user canceled the request.

Example

```
{
  tokenId: '31065a7ab53d5fa8e66ef1680e51c8485953c77e069293889b06d2b0b4934205',
}
```

## Wallet Provider Support

| Provider                | Supported | Comments                                                                                                                                                                                |
| ----------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Badger Chrome Extension | ⚠️        | When specifying a batonReceiverAddress, it currently acts as a boolean. If true, it will be issued on vout1 on the change address. Any BCH change will be placed on the mint baton UTXO |
| Badger Mobile           | ⛔️       |                                                                                                                                                                                         |
| Bitcoin.com iOS         | ⛔️       |                                                                                                                                                                                         |
| Bitcoin.com Android     | ⛔️       |                                                                                                                                                                                         |

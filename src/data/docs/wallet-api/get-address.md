---
title: Get Address
icon: bitcoin
ordinal: 1
---

# getAddress

Can be called to retreive a users BCH/SLP/BTC address.

The address returned by this method may not repreent all the funds in the users control, and calling the method multiple times could return different addresses, depending on the wallet provider.

## Method Interface

```
function getAddress(GetAccountInput): Promise<GetAccountOutput>
```

## Input arguments

```
interface GetAccountInput {
  protocol: string; // BCH/SLP/BTC or any future protocol
}
```

## Success return value

```
interface GetAccountOutput {
  address: string; // Address for the given protocol
  label?: string; // A label the users has set to identify their wallet
}
```

## Error return value

```
interface Error {
  type: string; // `NO_PROVIDER`|`CONNECTION_DENIED`
  description: string;
  data: string;
}
```

## Client Call Example

```
import bitcoinWalletApi from 'bitcoin-wallet-api';

bitcoinWalletApi.getAddress({
  protocol: 'BCH',
})
.then((data: GetAccountOutput) => {
  const {
    address,
    label,
  } = data;

  console.log('User address: ' + address);
  console.log('User address label (Optional): ' + label);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case CANCELED:
      console.log('The user has canceled this request.');
      break;
    case PROTOCOL_ERROR:
      console.log('The provided protocol is not supported by this wallet.');
      break;
  }
});
```

## Demo

<iframe height="475" style="width: 100%;" scrolling="no" title="Bitcoin Wallet API - getAddress" src="https://codepen.io/nicolasfujita/embed/xxGgrZm?height=265&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

## Provider Request Handling

Depending on the account structure of the wallet, user handling may be different. In all cases, the wallet MUST return an address & protocol, or an error message. Each wallet may choose to provide back a default address in all cases, while others with multiple accounts and HD keys, may prompt a user to select an account from which to provide a new address.

Example

```
{
  address: 'bitcoincash:qrd9khmeg4nqag3h5gzu8vjt537pm7le85lcauzezc',
  label: 'My Spending Wallet'
}
```

## Wallet Provider Support

| Provider                | Supported | Comments |
| ----------------------- | --------- | -------- |
| Badger Chrome Extension | ✅        |          |
| Badger Mobile           | ⛔️       |          |
| Bitcoin.com iOS         | ⛔️       |          |
| Bitcoin.com Android     | ⛔️       |          |

---
title: Pay Invoice
icon: invoice
ordinal: 3
---

# payInvoice

Provides an interface for an application to request payment of a BIP70 invoice to a users wallet.

## Method Interface

```
function payInvoice(PayInvoiceInput): Promise<PayInvoiceOutput>
```

## Input arguments

```
interface PayInvoiceInput {
  url: string; // Url to retrieve the BIP70 payment request from the merchant server
}
```

## Success return value

```
interface PayInvoiceOutput {
  memo: string; // Message from merchant server upon receiving payment
}
```

## Error return value

```
interface Error {
  type: string; // `NO_PROVIDER`|`PROTOCOL_ERROR`|`MERCHANT_ERROR`|`MALFORMED_INPUT`|`CANCELED`
  description: string;
  data: string;
}
```

## Example

```
import bitcoinWalletApi from 'bitcoin-wallet-api';

bitcoinWalletApi.payInvoice({
  url: 'bitcoincash:?r=https://bitpay.com/i/LHQmUTjzAcqX1NU47Nk1mJ',
})
.then((data: PayInvoiceOutput) => {
  const {
    memo,
  } = data;

  console.log('Payment processed memo from merchant server: ' + memo);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case PROTOCOL_ERROR:
      console.log('The provided protocol is not supported by this wallet.');
      break;
    case MERCHANT_ERROR:
      console.log('There was an error when sending this transaction to the merchant.');
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

## Provider Request Handling

- Fetch payment request from merchant server
- Present payment request information to user for approval
- Upon approval, submit transaction and send confirmation to merchant server
- Return payment confirmation memo from merchant server to connected application
- In the case there is an error in the

Example

```
{
  memo: 'Payment of 1 BTC for eleven tribbles accepted for processing.',
}
```

## Wallet Provider Support

| Provider                | Supported | Comments |
| ----------------------- | --------- | -------- |
| Badger Chrome Extension | ✅        |          |
| Badger Mobile           | ⛔️       |          |
| Bitcoin.com iOS         | ⛔️       |          |
| Bitcoin.com Android     | ⛔️       |          |

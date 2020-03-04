---
title: Get Wallet Status
icon: wallet
ordinal: 5
---

# getWalletProviderStatus

Provides information about the availability of any wallet provider in the current browser environment. When called, the package will check of any of the following wallet providers are currently connected: Badger, Android, iOS.

All providers will provided a status of either `AVAILABLE` or `NOT_AVAILABLE`, with the exception of Badger, which has a 3rd status `LOGGED_IN`.

In the case of a `LOGGED_IN` for Badger, this means that your app is in an evironment where the Badger wallet is present, and it is ready for your app to interact with it. If Badger has a status of `AVAILABLE`, your app can not yet interact with it, so please inform the user to log into their Badger wallet if this status is received.

Unlike other methods on the Wallet API, this is a synchronous method; directly returning the result.

## Method Interface

```
function getWalletProviderStatus(): GetWalletProviderStatusOutput
```

## Input arguments

N/A

## Return value

```
interface GetWalletProviderStatusOutput {
  badger: WalletProviderStatus;
  android: WalletProviderStatus;
  ios: WalletProviderStatus;
}

enum WalletProviderStatus {
  NOT_AVAILABLE,
  AVAILABLE,
  LOGGED_IN,
}
```

## Client Call Example

```
import bitcoinWalletApi from 'bitcoin-wallet-api';

const providerStatuses = bitcoinWalletApi.getWalletProviderStatus();
console.log('Provider statuses: ' + JSON.stringify(providerStatuses));
```

## Demo

<iframe height="325" style="width: 100%;" scrolling="no" title="Bitcoin Wallet API - getAdgetWalletProviderStatus" src="https://codepen.io/nickfujita/embed/PoqjdRW?height=265&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

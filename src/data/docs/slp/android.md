---
title: Android
icon: android
ordinal: 7
---

SLPWallet Android SDK

### Supported Android Versions

5.0+

#### Warning

On Android versions prior to Android 6.0 Marshmallow, disabling the secure lock screen (reconfiguring it to None, Swipe, or another mode which does not authenicate the user) will have the following conquences:

- Loss of the BCH and tokens held at the wallet address.
- Loss of access to the private key that controls the BCH and tokens held at the wallet address.

Tokens and any extra BCH at the wallet address can only be recovered if the mnemonic has been previously backed up.

### Initialization

```kotlin
import com.bitcoin.wallet

// Create a new wallet on mainnet, or load one previously created.
val slpWallet: SLPWallet = SLPWallet.loadOrCreate(context, Network.MAIN)


val slpWalletFromPhrase: SLPWallet = SLPWallet.fromMnemonic(
    context,
    Network.MAIN
    "rare genre crumble sport burger laugh lecture reject exhaust hello express pass"
    )

val wordList: List<String> = listof(
  "rare", "genre", "crumble", "sport", "burger", "laugh", "lecture", "reject", "exhaust", "hello", "express", "pass"
)
val slpWalletFromWordList: SLPWallet = SLPWallet.fromMnemonic(context, Network.MAIN, wordList)

// A wallet is created on mainnet if one does not exist already.
val existingSlpWallet: SLPWallet = SLPWallet.getInstance(context)
```

### Addresses + Mnemonic

The wallet reuses a single address, the first child from the HD derivation path m/'44/'245/0'/0.

```kotlin
slpWallet.cashAddress // bitcoincash:qr6wa5eemn0fl3vghvk5cr480s3fqtgnev6xdg39cq
slpWallet.slpAddress  // simpleledger:qr6wa5eemn0fl3vghvk5cr480s3fqtgnevkaxny9x7
slpWallet.mnemonic    // "rare", "genre", "crumble", "sport", "burger", "laugh", "lecture", "reject", "exhaust", "hello", "express", "pass"
```

### Token and BCH Balances

The balances, including both tokens and BCH are available as LiveData.

```kotlin

lateinit var balance: LiveData<List<BalanceInfo>>
private set

// ...

balances = slpWallet.balance
```

The BCH balance item has a `tokenId` of `""`

```kotlin
interface BalanceInfo {
    var tokenId: String
    var amount: BigDecimal
    var ticker: String?
    var name: String?
    var decimals: Int?
}
```

To refresh the current balance:

```kotlin
slpWallet.refreshBalance()
```

If the balance is already being refreshed, the call will be discarded and no work done.

### Send Token

```kotlin
val sendStarted: Boolean = slpWallet.sendToken(
  tokenId: "3257135d7Singlec351f8b2f46ab2b5e610620beb7a957f3885ce1787cffa90582f503m",
  toAddress: "simpleledger:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqsrzm5cny",
  numTokens: 134.12
  )
```

If a send is already underway, `sendToken()` will return `false` and the new request will be skipped. To determine whether a send is already being peformed, or find out if the last was successful, use `sendStatus`.

```kotlin
val sendStatus: LiveData<ProgressTask<String?>> = slpWallet.sendStatus
```

The status can be in one of four states:

```kotlin
enum class TaskStatus {
    IDLE,
    UNDERWAY,
    SUCCESS,
    ERROR
}
```

You can get additional information about the latest send attempt:

- The `SUCCESS` state provides the transaction ID as a `String`.
- The `ERROR` state provies an error message as a `String`.

Once a send has been completed, you can reset the status to `IDLE`:

```kotlin
slpWallet.clearSendStatus()
```

## UI

Some convenience methods are included to make it easier to display tokens in your UI.

### Blockies

To display a visual representation of the token as a blockie:

```kotlin
import com.bitcoin.wallet.blockieAddressFromTokenId
import com.luminiasoft.ethereum.blockiesandroid.BlockiesIdenticon

    holder.blockie.setAddress(blockieAddressFromTokenId(tokenId))
    holder.blockie.setCornerRadius(radius)
```

### Formatting Amounts

This will display the amount to the full number of decimal places permitted by the coin, preceded by the ticker.

```kotlin
import com.bitcoin.wallet.getTokenNumberFormat

val nf: NumberFormat = getTokenNumberFormat(decimals, ticker)
val text: String = nf.format(amount)   // "AAR 123.45"
```

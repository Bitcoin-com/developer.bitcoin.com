---
title: Android
icon: android
ordinal: 7
---

### Github repo

[slp-wallet-sdk-android](https://github.com/Bitcoin-com/slp-wallet-sdk-android)

### Supported Android Versions

5.0+

#### Warning

On Android versions prior to Android 6.0 Marshmallow, disabling the secure lock screen (reconfiguring it to None, Swipe, or another mode which does not authenicate the user) will have the following conquences:

- Loss of the BCH and tokens held at the wallet address.
- Loss of access to the private key that controls the BCH and tokens held at the wallet address.

Tokens and any extra BCH at the wallet address can only be recovered if the mnemonic has been previously backed up.

### Installation

#### Gradle

Add JitPack to the list of repositories in your top level `build.gradle` file for the project:

```groovy
allprojects {
    repositories {
        google()
        jcenter()
        maven { url 'https://jitpack.io' } // Add this repository
    }
}
```

In the module 'build.gradle' file, add the dependency:

```groovy
dependencies {
    // ...

    implementation 'com.github.Bitcoin-com:slp-wallet-sdk-android:0.4'
    implementation 'com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava'

}
```

Excluding guava is required to avoid conflicts.

##### Binary compatibility

In the current version of the SDK, some items need to be removed for binary compatibility.

Add these packaging options to your module `build.gradle`.

```groovy
android {
    // ...

    packagingOptions {
        exclude 'lib/x86_64/darwin/libscrypt.dylib'
        exclude 'lib/x86_64/freebsd/libscrypt.so'
        exclude 'lib/x86_64/linux/libscrypt.so'
    }
}
```

### Get Started

```kotlin
import com.bitcoin.slpwallet.SLPWallet

// Create a new wallet on mainnet, or load one previously created.
val slpWallet: SLPWallet = SLPWallet.loadOrCreate(context, Network.MAIN)

val slpWalletFromPhrase: SLPWallet = SLPWallet.fromMnemonic(
    context,
    Network.MAIN
    "rare genre crumble sport burger laugh lecture reject exhaust hello express pass"
    )

// A wallet is created on mainnet if one does not exist already.
val slpWallet: SLPWallet = SLPWallet.getInstance(context)
```

### Addresses + Mnemonic

The wallet resuses two addresses that shares mnemonic.

- The SLP address on m/44'/245'/0'/0/0.
- The BCH address on m/44'/145'/0'/0/0.

All BCH change will be sent to the BCH address while all token change is sent to the SLP address, separating the two if they were not already. This helps protect against accidental spending of BCH that contains SLP, by wallets are not aware of SLP, which would result in loss of coins.

```kotlin
slpWallet.mnemonic    // "rare", "genre", "crumble", "sport", "burger", "laugh", "lecture", "reject", "exhaust", "hello", "express", "pass"
slpWallet.slpAddress  // simpleledger:qr6wa5eemn0fl3vghvk5cr480s3fqtgnevkaxny9x7
slpWallet.bchAddress // bitcoincash:qr6wa5eemn0fl3vghvk5cr480s3fqtgnev6xdg39cq

```

#### Token and BCH Balances

The balances, including both tokens and BCH, are available as LiveData.

```kotlin
slpWallet.balance.observe(this, Observer { balanceList: List<BalanceInfo> ->
    var balances = ""
    for (balance in balanceList) {
        val nf = getTokenNumberFormat(balance.decimals, balance.ticker)
        balances += "${nf.format(balance.amount)}\n"
    }
    balancesText.text = balances
})
```

The BCH balance item has an emtpy `tokenId` of `""`.

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

### Send Token

```kotlin
private val compositeDisposable = CompositeDisposable()

// ...

val tokenId = "73bf34eb6cd6879fc75b0e91ad82ef61a6bf2f10adb38a067a25b30f9a644cea"
val amount = BigDecimal(1)
val toAddress = "simpleledger:qpfp0tfafxfq52mdpperlyschmmh6scfgse80v7a4p"

slpWallet.sendToken(tokenId, amount, toAddress)
    .subscribeOn(Schedulers.io())
    .subscribe(
        { txid: String ->
            Timber.d("sendToken() was successful, with txid: $txid")
        },
        { e: Throwable ->
            Timber.e("Error when sending. $e")
        }
    ).addTo(compositeDisposable)
```

The example above uses Rx, but the status of the send task is also available as LiveData:

```kotlin
slpWallet.sendStatus.observe(this, Observer { task: ProgressTask<String?> ->
    var sendStatus = ""
    when (task.status) {
        TaskStatus.IDLE -> {
            sendStatus = ""
        }
        TaskStatus.UNDERWAY -> {
            sendStatus = "Sending..."
        }
        TaskStatus.SUCCESS -> {
            sendStatus = "Sent tx ${task.result}"
        }
        TaskStatus.ERROR -> {
            sendStatus = "Error. ${task.message}"
        }
    }
    sendStatusText.text = sendStatus
})
```

Once a send has been completed, you can reset the status to `IDLE`:

```kotlin
slpWallet.clearSendStatus()
```

### UI

Some convenience methods are included to make it easier to display tokens in your UI.

#### Formatting Amounts

This will display the amount to the full number of decimal places permitted by the coin, preceded by the ticker.

```kotlin
import com.bitcoin.slpwallet.getTokenNumberFormat

val nf: NumberFormat = getTokenNumberFormat(decimals, ticker)
val text: String = nf.format(amount)   // "AAR 123.45"
```

### Logging

This library uses [Timber](https://github.com/JakeWharton/timber) for logging, but does not plant it's own tree. Plant a tree like this when your application starts to see the logs:

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    if (BuildConfig.DEBUG) {
        Timber.plant(Timber.DebugTree())
    }

    // ...
}
```

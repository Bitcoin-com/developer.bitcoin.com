---
title: iOS
icon: ios
ordinal: 8
---

### Github repo

[slp-wallet-sdk-ios](https://github.com/Bitcoin-com/slp-wallet-sdk-ios)

### Installation

#### CocoaPods

##### Podfile

```ruby
# Add our BitcoinKit fork that handles SLP address
source 'https://github.com/Bitcoin-com/CocoaPods.git'
source 'https://github.com/CocoaPods/Specs.git'

platform :ios, '10.0'

target 'SLPWalletTestApp' do
use_frameworks!

# Pods for SLPWalletTestApp
pod 'SLPWallet'

end
```

##### Commands

```bash
$ brew install autoconf automake // Required with BitcoinKit
$ brew install libtool // Required with BitcoinKit
$ pod install
```

##### Pod install issue

```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer/
```

#### Configuration

SLPWallet uses the Keychain to safely store the mnemonic seed phrase on your device. However, you need to create an entitlement file to allow the access to the Keychain. You can have a look at the sample project anytime you need to check the configuration [here.](./Sample/SLPWalletDemo/)

Under the hood, the SDK is using [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>keychain-access-groups</key>
	<array>
		<string>$(AppIdentifierPrefix)your.bundle.id</string>
	</array>
</dict>
</plist>
```

### Get Started

#### Setup URL + API Key (Not required :warning:, nice to have :dash:)

The SDK uses https://rest.bitcoin.com which by default is limited to up to 60 calls per minute per IP address. If you would like to increase your REST calls limit rate, please contact [Bitcoin.com's team](https://developer.bitcoin.com/rest/) to obtain an API key. You may configure the SDK to work with an API key or with your own REST API, as shown below:

Add your setup to your `AppDelegate.swift` as follows:

1. Add the following import statement:

```Swift
Import SLPWallet
```

2. Setup in the `application(_:didFinishLaunchingWithOptions:)`

```Swift
// Optional setup
SLPWalletConfig.setRestAPIKey("MY_API_KEY") // Optional
SLPWalletConfig.setRestURL("https://rest.bitcoin.com") // By default => https://rest.bitcoin.com
```

#### Creating new wallet with/without mnemonic

The wallet works with only 2 addresses, using:

- the SLP recommended path 44'/245'/0' + m/0/0 (handling tokens - bch with token + token change address)
- the BCH recommended path 44'/145'/0' + m/0/0 (handling gas - bch without token + bch change address)

However, both paths are scanned to get any bch or tokens available.

```swift
// Init 1
// Generate/Restore a wallet + Save/Get in Keychain
// If mnemonic in Keychain
// Restore wallet
// else
// Generate mnemonic
let wallet = try SLPWallet(.testnet) // .mainnet or .testnet

// Init 2
// Restore a wallet from Mnemonic + Save in Keychain
let wallet = try SLPWallet("My Mnemonic", network: .testnet) // .mainnet or .testnet

// Init 3
// Generate a wallet
// If force == true
//  Generate everytime a new wallet
// else
//  => Init 1
let wallet = try SLPWallet(.testnet, force: Bool)  // .mainnet or .testnet
```

#### Addresses + tokens

```swift
wallet.mnemonic // [String]
wallet.slpAddress // String
wallet.cashAddress // String
wallet.tokens // [String:SLPToken] Tokens are accessible after an initial fetch or if you have started the scheduler
```

#### Fetch my tokens

```swift
wallet
    .fetchTokens() // RxSwift => Single<[String:Token]>
    .subscribe(onSuccess: { tokens in
        // My tokens
        tokens.forEach({ tokenId, token in
            token.tokenId
            token.tokenName
            token.tokenTicker
            token.decimal
            token.getBalance()
            token.getGas()
        })
    }, onError: { error in
        // ...
    })
```

#### Send token

```swift
wallet
    .sendToken(tokenId, amount: amount, toAddress: toAddress) // toAddress can be a slp / cash address or legacy
    .subscribe(onSuccess: { txid in // RxSwift => Single<String>
        // ...
    }, onError: { error in
        // ...
    })
```

#### Auto update wallet/tokens (balances + gas)

```swift
// Start & Stop
wallet.scheduler.resume()
wallet.scheduler.suspend()

// Change the interval
wallet.schedulerInterval = 10 // in seconds (30 by default)
```

#### WalletDelegate called when :

- scheduler is started + token balance changed

```swift
class MyViewController: SLPWalletDelegate {


    override func viewDidLoad() {
        super.viewDidLoad()

        let wallet = ... // Setup a wallet
        wallet.delegate = self
    }

    func onUpdatedToken(_ token: SLPToken) {
        // My updated token
        token.tokenId
        token.tokenName
        token.tokenTicker
        token.decimal
        token.getBalance()
        token.getGas()
    }
}
```

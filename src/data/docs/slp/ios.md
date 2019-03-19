---
title: iOS
icon: ios
ordinal: 8
---

SLPWallet iOS SDK

## Installation

### CocoaPods

#### Podfile

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

#### Commands

```bash
$ brew install autoconf automake // Required with BitcoinKit
$ brew install libtool // Required with BitcoinKit
$ pod install
```

#### Pod install issue

```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer/
```

### Configuration

SLPWallet is using Keychain to store safely on your device the mnemonic seed phrase. However you need to create a entitlement file to allow the access to Keychain. You can have a look at the sample project anytime you need to check the configuration : ./Sample/SLPWalletTestApp/

Under the wood, the SDK is using [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess).

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

## Get Started

### Creating new wallet with/without mnemonic

The wallet is working with only 1 address using the SLP recommanded path 44'/245'/0' + m/0/0.

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

### Addresses + tokens

```swift
wallet.mnemonic // [String]
wallet.slpAddress // String
wallet.cashAddress // String
wallet.tokens // [String:SLPToken] Tokens accessible if you fetch it already once or you started the scheduler
```

### Fetch my tokens

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

### Send token

```swift
wallet
    .sendToken(tokenId, amount: amount, toAddress: toAddress) // toAddress can be a slp / cash address or legacy
    .subscribe(onSuccess: { txid in // RxSwift => Single<String>
        // ...
    }, onError: { error in
        // ...
    })
```

### Auto update wallet/tokens (balances + gas)

```swift
// Start & stop
wallet.scheduler.resume()
wallet.scheduler.suspend()

// Change the interval
wallet.schedulerInterval = 10 // in seconds
```

### WalletDelegate called when :

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

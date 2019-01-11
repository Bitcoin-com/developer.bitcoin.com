---
title: Badger Button
icon: file
ordinal: 5
---

### Bitcoin Cash

Use any button on a page to send BCH by adding the "badger-button" class and including the button.js script.

#### Arguments

- data-to `String` cashaddr address of BCH destination
- data-satoshis `String` BCH amount to send in satoshis
- data-success-callback `String` (Optional) Name of global scoped function to call on success

#### Result

`Success` data-success-callback will pass the transaction id as the first paramter

#### Example

      <html>
      <head>
          <script type="text/javascript" src="https://developer.bitcoin.com/badger/badgerButton-1.0.0.js"></script>
      </head>
      <body>
        <p>Tip with Badger Button</p>
        <p>
          <button
            class="badger-button"
            data-to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
            data-satoshis="10000"
          >
            Tip 10,000 Satoshis
          </button>
        </p>
      </body>
      </html>

#### Demo

[Demo Page](https://bitcoin-com.github.io/badger-samples/badger-button.html)

[Demo Source](https://github.com/Bitcoin-com/badger-samples/blob/master/badger-button.html)

### Tokens

Use any button on a page to send BCH by adding the "badger-button" class and including the button.js script.

#### Arguments

- data-to `String` cashaddr address of BCH destination
- data-token-protocol `String` The Token protocol
- data-token-id `String` The Token Id
- data-token-amount `String` (Required) The amount of tokens to send
- data-success-callback `String` (Optional) Name of global scoped function to call on success

#### Result

`Success` data-success-callback will pass the transaction id as the first paramter

#### Example

      <html>
      <head>
          <script type="text/javascript" src="https://developer.bitcoin.com/badger/badgerToken-1.0.0.js"></script>
      </head>
      <body>
        <p>Tip with Badger Button</p>
        <p>
          <button
            class="badger-button"
            data-to="simpleledger:qpyg4qntl3kg5ucsf6eqsrt8hr34h2wn9qsvu3wuwa"
            data-success-callback="badgerCallback"
            data-token-protocol="slp"
            data-token-id="df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
            data-token-amount="1"
          >
          Tip 1 $NAKAMOTO
          </button>
        </p>
      </body>
      </html>

#### Demo

[Demo Page](https://bitcoin-com.github.io/badger-samples/badger-token.html)

[Demo Source](https://github.com/Bitcoin-com/badger-samples/blob/master/badger-token.html)

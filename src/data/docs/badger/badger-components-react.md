---
title: Badger React
icon: react
ordinal: 6
---

A set of React components and helpers to integrate Bitcoin Cash (BCH) and the Badger wallet into your app with ease.

### Get Started

- [Badger Homepage](https://badger.bitcoin.com)
- [Component Showcase / Storybook](http://badger-storybook.surge.sh)
- [NPM page `badger-components-react`](https://www.npmjs.com/package/badger-components-react)

### Install Components

Start by installing the `badger-components-react` library and it's 3 peer dependencies, `react`, `react-dom` and `styled-components`

```bash
Install library
$ npm install --save badger-components-react

Install peerDependencies
$ npm install --save styled-components react react-dom
```

### Add to React Application

The library comes with some ready-to-use Badger components, `BadgerBadge` and `BadgerButton`, with more coming soon. These components are can be added quickly to any React projects. If you require a different solution then continue reading to learn how to create custom Badger integrations using `BadgerBase`.

```jsx
// eatBCH bitcoin cash address
const toAddress = 'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g'
// Random SLP address
const toSLPAddress = 'simpleledger:qq6qcjt6xlkeqzdwkhdvfyl2q2d2wafkgg8phzcqez'
// tokenId
const nakamotoID = 'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb'

{/* Price in fiat */}
<BadgerBadge to={toAddress} price={0.5} currency='USD' />
<BadgerButton to={toAddress} price={1} currency='JPY' />

{/* Price in bch */}
<BadgerBadge to={toAddress} amount={0.01} coinType='BCH' />
<BadgerButton to={toAddress} amount={0.0001} coinType='BCH' />

{/* Price in SLP tokens - NAKAMOTO in this example */}
<BadgerBadge to={toSLPAddress} amount={5.01} coinType='SLP' tokenId={nakamotoID} />
<BadgerButton to={toSLPAddress} amount={2.0001} coinType='SLP' tokenId={nakamotoID} />
```

### Base Props

These props are required or supported by all components which build upon `BadgerBase`.

<spacer></spacer>

- `to: BCH Address` - Required - Bitcoin Cash address to send BCH to
- `stepControlled` - Optional [`fresh`, `pending`, `complete`] - Control the payment step manually. Useful for payment systems where the transaction is validated by a payment server.
  <spacer></spacer>
- `currency: string` - Default `USD` - [ISO Country Code](https://en.wikipedia.org/wiki/ISO_4217) to charge in
- `price: number` - Optional - Price in chosen fiat currency, will be turned into the satoshis equivalent
  <spacer></spacer>
- `coinType: string` - `BCH` or `SLP` - Default `BCH`
- `tokenId: string` - tokenId of the SLP token to be used, required when coinType is SLP
- `amount: number` - Optional - Amount of BCH or SLP token
  <spacer></spacer>
- `opReturn: string[]` - Optional - OP_RETURN message when paid with Badger
- `showQR: boolean` - Optional - Show QR code if payment does not use OP_RETURN or SLP tokens
- `watchAddress` - Optional - Go to confirmed if address receives any payment, best if used with unique payment codes
  <spacer></spacer>
- `isRepeatable` - Optional - Payment can be done multiple times in a single visit
- `repeatTimeout` - Optional - How many milliseconds until button reverts to a fresh state
  <spacer></spacer>
- `successFn: Function` - Optional -Callback function when payment is successful
- `failFn: Function` - Optional - Callback function when payment fails or is cancelled

### BadgerButton

Simple Badger Button to display the price in local currency, bch or token amount, and have an optional message. Supports the following props

- [All props from Base Props](/badger/docs/badger-components-react/#base-props)
- `showAmount: boolean` Default `true` - Show the value in BCH Satoshis below the button
- `showBorder: boolean` - Default `false` - Border around button and text
- `text: string` - Optional - Text between the button and border

```jsx
<BadgerButton
  price={0.001}
  currency="USD"
  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
  isRepeatable={true}
  repeatTimeout={4000}
  watchAddress={true}
  text="Badger Pay"
  successFn={() => console.log('success example function called')}
  failFn={() => console.log('fail example function called')}
  showAmount={true}
  showBorder={false}
  showQR={true}
/>
```

<spacer></spacer>
<badger-button to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g" price="0.001" currency="USD" isrepeatable="true" repeattimeout="4000" watchaddress={true}></badger-button>

### BadgerBadge

A slightly larger display of payment details.  
Supports the following props.

- [All props from Base Props](/badger/docs/badger-components-react/#base-props)
- `showAmount: boolean` Default `true` - Show the value in BCH Satoshis below the button
- `showBrand: boolean` Default `true` - Show the branding text
- `showBorder: boolean` - Default `true` - Border around button and text
- `text: string` - Default `Payment Total` - Text between the button and border
- `tag: string` - Default `Badger Pay` - Text on the button

<spacer></spacer>
<badger-badge to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g" price="0.001" currency="USD" text="Badger Badger"></badger-button>

#### Code Examples

```js
import React from 'react'
import { BadgerButton, BadgerBadge } from 'badger-components-react'

const Example = props => {
  // eatBCH bitcoin cash address
  const toAddress = 'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g'

  // Random SLP address
  const toSLPAddress = 'simpleledger:qq6qcjt6xlkeqzdwkhdvfyl2q2d2wafkgg8phzcqez'

  // tokenId
  const nakamotoID =
    'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb'

  return (
    <>
      {/* Minimal Examples */}
      <BadgerBadge to={toAddress} price={0.5} currency="USD" />
      <BadgerButton to={toAddress} price={1} currency="JPY" />

      {/* Price in bch */}
      <BadgerBadge to={toAddress} amount={0.01} coinType="BCH" />
      <BadgerButton to={toAddress} amount={0.0001} coinType="BCH" />

      {/* Price in SLP tokens - NAKAMOTO in this example */}
      <BadgerBadge
        to={toSLPAddress}
        amount={5.01}
        coinType="SLP"
        tokenId={nakamotoID}
      />
      <BadgerButton
        to={toSLPAddress}
        amount={2.0001}
        coinType="SLP"
        tokenId={nakamotoID}
      />

      {/* More Complex Examples, pricing in fiat */}
      <BadgerBadge
        price={0.001} // Price in currency
        currency="CAD" // Currency to convert from
        to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g" // Payment address
        opReturn={['0x6d02', 'Hello badger-components-react']}
        tag="Badger Pay" // Text on button
        text="Payment Total" // Text at top of badge
        showBrand // Show link to badger website
        showAmount // Show BCH satoshi amount
        showQR // Intent to show QR if transaction is URI encodeable
        successFn={() => console.log('Payment success callback')}
        failFn={() => console.warn('Payment failed or cancelled callback')}
      />

      <BadgerButton
        price={0.003}
        currency="USD"
        to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
        opReturn={['0x6d02', 'Hello badger-components-react']}
        text="Badger Pay"
        showAmount
        showBorder
        showQR
        successFn={() => console.log('success example function called')}
        failFn={() => console.log('fail example function called')}
      />

      {/* Pricing in BCH */}
      <BadgerBadge
        amount={0.001} // Amount in crypto
        coinType="BCH" // Defaults to BCH
        to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g" // Payment address
        isRepeatable // Reset to fresh state after a few seconds
        repeatTimeout={4000} // time in ms to reset button after payment
        watchAddress // Watch all payments to address
      />
    </>
  )
}

export default Example
```

### Creating Custom Badger Integrations

The majority of the logic is handled by the Higher Order Component (HOC) `BadgerBase`. By wrapping your component with this HOC, it is very easy to create any Badger integration you want, and start using BCH and SLP tokens in your app.

Components wrapped in `BadgerBase` support the following props

- [All props from Base Props](/badger/docs/badger-components-react/#base-props)

<spacer></spacer>
And get the following props added to be used in the custom component

- `handleClick: Function` - Call this to start the Badger transaction
- `step: string` - State of the Badger transaction. One of `fresh`, `pending`, `complete`, `login`, `install`
- `coinSymbol` - `ticker` of the coin or token. For Bitcoin Cash this will be BCH, for DogeCash this is DOGE, etc.
- `coinName` - Full name of the coin or token. Bitcoin Cash for BCH, DogeCash for DOGE, etc
- `coinDecimals` - Maximum decimals for the coin or token. 8 for BCH, variable for SLP tokens

<spacer></spacer>
Like other components, components enhanced with BadgerBase are free to add any other props, and extend the functionality in new unique ways.

```js
import React from 'react'
import { BadgerBase, formatAmount } from 'badger-react-components'

import styled from 'styled-components'

const CoolButton = styled.button`
  background-color: rebeccapurple;
  color: lime;
  border-radius: 24px;
`

const MyButton extends React.Component {
  render() {
    // Props from higher order component
    const {handleClick, to, price, currency, amount, coinDecimals step} = this.props;
    return (
      <div>
        <h3>Donate {price}{currency} to {to}</h3>
        <h4>Satoshis: {formatAmount(amount, coinDecimals))}</h4>
        <CoolButton onClick={handleClick}>Pay with Badger</CoolButton>
      </div>
    )
  }
}

// Wrap with BadgerBase higher order component
export default BadgerBase(MyButton);
```

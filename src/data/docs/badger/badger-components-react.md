---
title: Badger React
icon: react
ordinal: 6
---

A set of React components and helpers to integrate Bitcoin Cash (BCH) and the Badger wallet into your app with ease.

### Get Started

- [Component Showcase](http://badger-storybook.surge.sh)
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

#### Base props

These props are required or supported by all components which build upon `BadgerBase`.

- `to: BCH Address` - Required - Bitcoin Cash address to send BCH to
- `price: number` - Optional - Price in chosen fiat currency, will be turned into the satoshis equivalent
- `amount: number` - Optional - Price in chosen ticker, currently only BCH
  <spacer></spacer>
- `currency: string` - Default `USD` - [ISO Country Code](https://en.wikipedia.org/wiki/ISO_4217) to charge in
- `ticker: string` - Default `BCH` - Ticker to send, currently only BCH
  <spacer></spacer>
- `opReturn: string[]` - Optional - OP_RETURN message when paid with Badger
- `isRepeatable` - Optional - Payment can be done multiple times in a single visit
- `repeatTimeout` - Optional - How many milliseconds until button reverts to a fresh state
- `watchAddress` - Optional - Go to confirmed if address receives any payment, best if used with unique payment codes
  <spacer></spacer>
- `successFn: Function` - Optional -Callback function when payment is successful
- `failFn: Function` - Optional - Callback function when payment fails or is cancelled

#### Badger Button

Simple Badger Button to display the price in local currency, satoshi amount, and have an optional message. Supports the following props

- All props from Base Props
- `showSatoshis: boolean` Default `true` - Show the value in BCH Satoshis below the button
- `showBorder: boolean` - Default `false` - Border around button and text
- `showQR: boolean` - Default `false` - Show a QR code attached to the button
- `text: string` - Optional - Text between the button and border

<spacer></spacer>
<badger-button to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g" price="0.001" currency="CAD" text="Badger Button"></badger-button>

#### Badger Badge

A slightly larger display of payment details.  
Supports the following props.

- All from Base Props
- `showSatoshis: boolean` Default `true` - Show the value in BCH Satoshis below the button
- `showBrand: boolean` Default `true` - Show the branding text
- `showBorder: boolean` - Default `true` - Border around button and text
- `showQR: boolean` - Default `true` - Show a QR code attached to the button
- `text: string` - Default `Payment Total` - Text between the button and border
- `tag: string` - Default `Badger Pay` - Text on the button

<spacer></spacer>
<badger-badge to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g" price="0.001" currency="USD" text="Badger Badger"></badger-button>

#### Price in fiat or BCH

Provide `price` for fiat, and `amount` for BCH

```jsx
// Price in fiat, currency defaults to USD
<BadgerBadge to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g" currency="CAD" price={0.01} />

// Price in BCH, ticker defaults to BCH
<BadgerBadge to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g" ticker="BCH" amount={0.001} />
```

#### Price in BCH

#### Code Examples

```js
import React from 'react'
import { BadgerButton, BadgerBadge } from 'badger-components-react'

const Example = props => {
  // EatBCH address for example purposes.
  const toAddress = 'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g'

  return (
    <>
      {/* Minimal Examples */}
      <BadgerBadge to={toAddress} price={0.5} currency={'USD'} />
      <BadgerButton to={toAddress} price={1} currency={'JPY'} />

      {/* More Complex Examples */}
      <BadgerBadge
        price={0.01} // Price in currency
        currency={'CAD'} // Currency to convert from
        to={'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g'} // Payment address
        opReturn={['0x6d02', 'Hello BadgerBadge!']}
        tag={'Badger Pay'} // Text on button
        text={'Payment Total'} // Text at top of badge
        showBrand={true} // Show link to badger website
        showSatoshis={true} // Show BCH satoshi amount
        successFn={() => console.log('Payment success callback')}
        failFn={() => console.warn('Payment failed or cancelled callback')}
      />

      <BadgerButton
        price={0.003}
        currency={'USD'}
        to={'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g'}
        opReturn={['0x6d02', 'Donated with Badger']}
        text={'Badger Pay'}
        showSatoshis={true}
        border={true}
        successFn={() => console.log('success example function called')}
        failFn={() => console.log('fail example function called')}
      />
    </>
  )
}

export default Example
```

### Creating Custom Badger Integrations

The library contains a Higher Order Component (HOC) `BadgerBase` which contains all of the required Badger interaction logic. This allows the creation of custom Badger integrations and components easily.

Components wrapped in `BadgerBase` support the following props

- `to: BCH Address` - Required - Bitcoin Cash address to send BCH to
- `price: number` - Optional - Price in chosen fiat currency, will be turned into the satoshis equivalent
- `amount: number` - Optional - Price in chosen ticker, currently only BCH
  <spacer></spacer>
- `currency: string` - Default `USD` - [ISO Country Code](https://en.wikipedia.org/wiki/ISO_4217) to charge in
- `ticker: string` - Default `BCH` - Ticker to send, currently only BCH
  <spacer></spacer>
- `opReturn: string[]` - Optional - OP_RETURN message when paid with Badger
- `isRepeatable` - Optional - Payment can be done multiple times in a single visit
- `repeatTimeout` - Optional - How many milliseconds until button reverts to a fresh state
- `watchAddress` - Optional - Go to confirmed if address receives any payment, best if used with unique payment codes
  <spacer></spacer>
- `successFn: Function` - Optional -Callback function when payment is successful
- `failFn: Function` - Optional - Callback function when payment fails or is cancelled

And get the following props added to them for use in the custom integration component

- `handleClick: Function` - Call this to start the Badger transaction
- `step: string` - State of the Badger transaction. One of `fresh`, `pending`, `complete`, `login`, `install`

```js
import React from 'react'
import { BadgerBase, formatSatoshis } from 'badger-react-components'

import styled from 'styled-components'

const CoolButton = styled.button`
  background-color: rebeccapurple;
  color: lime;
  border-radius: 24px;
`

const MyButton extends React.Component {
  render() {
    // Props from higher order component
    const {handleClick, to, price, currency, satoshis, step} = this.props;
    return (
      <div>
        <h3>Donate {price}{currency} to {to}</h3>
        <h4>Satoshis: {formatSatoshis(satoshiDisplay)}</h4>
        <CoolButton onClick={handleClick}>Custom button render</CoolButton>
      </div>
    )
  }
}

// Wrap with BadgerBase higher order component
export default BadgerBase(MyButton);
```

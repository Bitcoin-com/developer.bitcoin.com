---
title: Badger React
icon: react
ordinal: 6
---

A set of React components and helpers to integrate Bitcoin Cash (BCH) and the Badger wallet into your app with ease.

### Get Started

- [Homepage](https://badger.bitcoin.com)
- [Component Showcase](http://badger-storybook.surge.sh)
- [NPM page](https://www.npmjs.com/package/badger-components-react)

### Install Components

```bash
$ npm install --save badger-components-react
```

### Install Peer Dependencies

- `styled-components` ^4.0.0
  - `npm install --save styled-components`
- `react` && `react-dom` ^16.3.0
  - `npm install --save react react-dom`

### Add to React project

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

### Create a custom Badger Button

```js
import React from 'react'
import { BadgerBase } from 'badger-react-components'

import styled from 'styled-components'

const CoolButton = styled.button`
  background-color: rebeccapurple;
  color: lime;
  border-radius: 24px;
`

const MyButton extends React.Component {
  render() {
    // Props from higher order component
    const {handleClick, to, price, currency, satoshiDisplay, step} = this.props;
    return (
      <div>
        <h3>Donate {price}{currency} to {to}</h3>
        <h4>Satoshis: {satoshiDisplay}</h4>
        <CoolButton onClick={handleClick}>Custom looking button with render</CoolButton>
      </div>
    )
  }
}

// Wrap with BadgerBase higher order component
export default BadgerBase(MyButton);
```

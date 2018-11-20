// @flow

import React from 'react'

import HeaderBase from './headerBase'

const H1 = (props: any) => (
  <HeaderBase
    as="h1"
    fontSizeSmall={[16 * 3, 1.2]}
    fontSize={[18 * 3, 1.35]}
    {...props}
  />
)

export default H1

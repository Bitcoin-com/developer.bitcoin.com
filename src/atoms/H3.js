// @flow
import React from 'react'

import HeaderBase from './headerBase'

const H3 = (props: any) => (
  <HeaderBase
    as="h3"
    fontSizeSmall={[16 * 1.3125, 1.13636364]}
    fontSize={[18 * 1.3125, 1.25]}
    {...props}
  />
)

export default H3

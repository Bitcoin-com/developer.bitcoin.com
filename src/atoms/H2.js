// @flow
import React from 'react'

import HeaderBase from './headerBase'

const H2 = (props: any) => (
  <HeaderBase
    as="h2"
    fontSizeSmall={[26, 1.15384615]}
    fontSize={[36, 1.25]}
    {...props}
  />
)

export default H2

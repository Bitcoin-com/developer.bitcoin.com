// @flow

import * as React from 'react';

import './base.css';

type Props = {
  children: React.Node
}

const DefaultLayout = ({children}: Props) => (
  <div>
      {children}
  </div>
)

export default DefaultLayout
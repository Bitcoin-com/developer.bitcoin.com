// @flow

import * as React from 'react'
import styled from 'styled-components'

import { textBase } from 'atoms/Text'

const Wrapper = styled.div`
  ${textBase};
`
type Props = {
  children: React.Node,
  center?: boolean,
}

class Caption extends React.PureComponent<Props> {
  static defaultProps = {
    center: false,
  }

  render() {
    const { children, center } = this.props
    return (
      <Wrapper monospace center={center}>
        {children}
      </Wrapper>
    )
  }
}

export default Caption

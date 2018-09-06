// @flow

import * as React from 'react'
import styled from 'styled-components'

import Text, { textBase } from 'atoms/Text'

const Wrapper = styled.div`
  ${textBase};
`
type Props = {
  children: React.Node,
}

class Caption extends React.PureComponent<Props> {
  render() {
    const { children } = this.props
    return (
      <Wrapper monospace center>
        {children}
      </Wrapper>
    )
  }
}

export default Caption

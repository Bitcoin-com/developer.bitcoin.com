// @flow

import styled from 'styled-components'
import { textBase } from 'atoms/Text'

const Select = styled.select`
  ${textBase};
  background-color: ${props => props.theme.primaryMuted};
  border-color: ${props => props.theme.muted};
  cursor: pointer;
`

export default Select

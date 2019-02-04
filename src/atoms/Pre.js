// @flow

import styled from 'styled-components'
import { defaultProps } from 'recompose'

import { textBase } from 'atoms/Text'

const Pre = defaultProps({ monospace: true })(styled.span`
  ${textBase};
  font-size: inherit !important;
  display: inline;
  padding: 2px;
  background-color: ${props => props.theme.primaryMuted};
  color: ${props => props.theme.foreground};
  overflow-y: scroll;
  border-radius: 4px;
`)

export default Pre

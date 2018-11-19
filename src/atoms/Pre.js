// @flow

import styled from 'styled-components'
import { defaultProps } from 'recompose'

import { textBase } from 'atoms/Text'

const Pre = defaultProps({ monospace: true })(styled.span`
  ${textBase};
  font-size: inherit !important;
  display: inline;
  background-color: ${props => props.theme.primaryMuted};
  color: ${props => props.theme.foreground};
  overflow-y: scroll;
`)

export default Pre

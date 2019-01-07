// @flow

import styled from 'styled-components'
import { defaultProps } from 'recompose'

import { textBase } from 'atoms/Text'
import spacing from 'styles/spacing'

const Pre = defaultProps({ monospace: true })(styled.span`
  ${textBase};
  font-size: inherit !important;
  display: inline;
  padding: 3px;
  background-color: ${props => props.theme.primaryMuted};
  color: ${props => props.theme.foreground};
  overflow-y: scroll;
`)

export default Pre

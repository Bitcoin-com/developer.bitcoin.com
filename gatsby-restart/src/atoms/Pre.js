// @flow

import styled from 'styled-components'
import { defaultProps } from 'recompose'

import spacing from 'styles/spacing'
import { textBase } from 'atoms/Text'

const Pre = defaultProps({ monospace: true })(styled.span`
  ${textBase};
  font-size: inherit !important;
  display: inline;
  padding: 0 ${spacing.tiny};
  background-color: ${props => props.theme.primaryMuted};
  color: ${props => props.theme.foreground};
`)

export default Pre

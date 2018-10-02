// @flow

import styled from 'styled-components'
import spacing from 'styles/spacing'

import Li from './Li'

const Ol = styled.ol`
  margin: 0;
  padding-left: ${spacing.medium};
  word-break: break-word;
  display: grid;
  grid-gap: ${spacing.tiny};
  ${Li} {
  }
`

export default Ol

// @flow

import styled from 'styled-components'

const Well = styled.div`
  background-color: ${props => props.theme.primary100};
  min-height: 20px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.primary200};
  border-radius: 4px;
  white-space: pre-line;
`

export default Well

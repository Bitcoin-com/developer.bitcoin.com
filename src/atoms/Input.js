// @flow
import styled from 'styled-components'

const Input = styled.input`
  font-size: 18px;
  border: none;
  background: transparent;
  color: ${props => props.theme.foreground};
  border: 2px solid ${props => props.theme.backgroundMuted};
  outline: none;
  padding-top: 7px;
  padding-right: 7px;
  padding-bottom: 7px;
  padding-left: 7px;
  border-radius: 7px;
  ::placeholder {
    color: ${props => props.theme.backgroundMuted};
  }
`

export default Input

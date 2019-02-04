// @flow

import styled from 'styled-components'

const Button = styled.button`
  transition: all 0.15s;
  align-items: center;
  background-color: transparent;
  border-radius: ${props => (props.round ? '25px' : '3px')};
  border: 2px solid ${props => props.theme.primary500};
  color: ${props => props.theme.primary500};
  cursor: pointer;
  display: flex;
  font-weight: 800;
  padding: 0.65em 1.5em;
  touch-action: manipulation;
  width: fit-content;
  font-size: 16px;
  &:hover {
    background-color: ${props => props.theme.primary600};
    border-color: ${props => props.theme.primary600};
    color: ${props => props.theme.background};
  }
`

export default Button

// @flow

import styled from 'styled-components'

const Button = styled.button`
  align-items: center;
  background-color: ${props => props.theme.primary};
  border-radius: ${props => (props.round ? '32px' : '3px')};
  border: none;
  color: ${props => props.theme.background};
  cursor: pointer;
  display: flex;
  font-weight: 800;
  padding: 0.65em 1.5em;
  touch-action: manipulation;
  width: fit-content;
  font-size: 16px;
  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`

export default Button

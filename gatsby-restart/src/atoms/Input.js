// @flow
import styled from 'styled-components';

const Input = styled.input`
  font-size: 18px;
  border: none;
  background: transparent;
  color: ${props => props.theme.foreground};
  border: 2px solid ${props => props.theme.backgroundMuted};
  outline: none;
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  border-radius: 35px;
  width: ${props => props.fit ? 'fit-content': 'auto'};
  ::placeholder {
    color: ${props => props.theme.backgroundMuted};
  }
  `

  export default Input;
// @flow

import styled from 'styled-components'
import spacing from 'styles/spacing'

import Favicon from 'images/favicon.png'

import Li from './Li'

const Ul = styled.ul`
  margin: 0;
  padding-left: ${spacing.medium};
  word-break: break-word;
  display: grid;
  grid-gap: ${spacing.tiny};
  ${Li} {
    list-style: none;
    align-items: center;
    position: relative;
    &:before {
      position: absolute;
      top: 5px;
      left: -16px;
      content: '';
      display: inline-block;
      height: 10px;
      width: 10px;
      background-image: url(${Favicon});
      background-size: contain;
    }
  }
`

export default Ul

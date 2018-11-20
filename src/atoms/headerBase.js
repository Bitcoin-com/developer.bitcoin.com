// @flow
import styled from 'styled-components'

import { textBase } from './Text'
import media from '../styles/media'

const HeaderBase = styled.h1`
  ${textBase};
  font-size: 32px;
  font-size-adjust: 0.5;
  margin: 0;
  letter-spacing: ${props => (props.loose ? '2px' : '0px')};
  font-weight: ${props => (props.thin ? 400 : 700)};

  font-size: ${props => props.fontSizeSmall[0]}px;
  line-height: ${props => props.fontSizeSmall[1]}em;
  ${media.large`
    font-size: ${props => props.fontSize[0]}px;
    line-height: ${props => props.fontSize[1]}em;
    `};
`

export default HeaderBase

// @flow
import media from 'styles/media'

import HeaderBase from './headerBase'

const H4 = HeaderBase.withComponent('h4').extend`
    font-size: ${16*1.2}px
    line-height: 1.13636364em;
    font-weight: 600;
    ${media.large`
      font-size: ${18*1.2}px;
      line-height: 1.25em;
    `}
`

export default H4

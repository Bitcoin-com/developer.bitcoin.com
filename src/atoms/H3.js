// @flow
import media from 'styles/media'

import HeaderBase from './headerBase'

const H3 = HeaderBase.withComponent('h3').extend`
    font-size: ${16 * 1.3125}px
    line-height: 1.13636364em;
    font-weight: 600;
    ${media.large`
      font-size: ${18 * 1.3125}px;
      line-height: 1.25em;
    `}
`

export default H3

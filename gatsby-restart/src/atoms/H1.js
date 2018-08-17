// @flow
import media from 'styles/media'

import HeaderBase from './headerBase'

const H1 = HeaderBase.withComponent('h1').extend`
    font-size: ${16*3}px;
    line-height: 1.25em;
    ${media.large`
      font-size: ${16*3}px;
      line-height: 1.05em;
    `}
`

export default H1

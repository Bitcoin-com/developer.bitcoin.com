// @flow
import media from 'styles/media'

import HeaderBase from './headerBase'

const H2 = HeaderBase.withComponent('h2').extend`
    font-size: 26px;
    line-height: 1.15384615em;
    ${media.large`
      font-size: 36px;
      line-height: 1.25em;
    `}
`

export default H2

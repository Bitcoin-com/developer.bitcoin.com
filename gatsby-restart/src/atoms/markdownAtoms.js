// @flow
// Add Top margin to elements for use in markdown;

import styled from 'styled-components'

import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import Text from './Text'
import Ul from './Ul'
import Ol from './Ol'
import Img from './Img'

import spacing from 'styles/spacing'

const ThMd = styled.th`
  white-space: nowrap;
`
const H1Md = H1.extend`
  margin-top: ${spacing.medium};
`
const H2Md = H2.extend`
  margin-top: ${spacing.medium};
`

const H3Md = H3.extend`
  margin-top: ${spacing.medium};
`
const H4Md = H4.extend`
  margin-top: ${spacing.small};
`

const TextMd = Text.extend`
  margin-top: ${spacing.small};
`

const UlMd = Ul.extend`
  margin-top: ${spacing.medium};
  ${TextMd} {
    margin-top: 0;
  }
`

const OlMd = Ol.extend`
  margin-top: ${spacing.medium};
`

const ImgMd = Img.extend`
  margin-top: ${spacing.medium};
`

export { H1Md, H2Md, H3Md, H4Md, TextMd, UlMd, OlMd, ImgMd, ThMd }

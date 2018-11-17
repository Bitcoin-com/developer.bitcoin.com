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
  text-align: left;
`
const H1Md = styled(H1)`
  margin-top: ${spacing.medium};
`
const H2Md = styled(H2)`
  margin-top: ${spacing.medium};
`

const H3Md = styled(H3)`
  margin-top: ${spacing.medium};
`
const H4Md = styled(H4)`
  margin-top: ${spacing.small};
`

const TextMd = styled(Text)`
  margin-top: ${spacing.small};
`

const UlMd = styled(Ul)`
  margin-top: ${spacing.medium};
  ${TextMd} {
    margin-top: 0;
  }
`

const OlMd = styled(Ol)`
  margin-top: ${spacing.medium};
`

const ImgMd = styled(Img)`
  margin-top: ${spacing.medium};
`

export { H1Md, H2Md, H3Md, H4Md, TextMd, UlMd, OlMd, ImgMd, ThMd }

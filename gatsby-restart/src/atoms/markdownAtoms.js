// @flow
// Add the spacing and minor modifications to atoms for markdown use

import H2 from './H2';
import H3 from './H3';
import Text from './Text';
import spacing from 'styles/spacing';



const H2Md = H2.extend`
  margin-top: ${spacing.medium};
`

const H3Md = H3.extend`
  margin-top: ${spacing.small};
`

const TextMd = Text.extend`
  margin-top: ${spacing.tiny};
`

export  {
  H2Md,
  H3Md,
  TextMd
}
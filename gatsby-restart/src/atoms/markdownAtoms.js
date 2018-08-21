// @flow
// Add the spacing and minor modifications to atoms for markdown use

import H1 from './H1'
import H2 from './H2';
import H3 from './H3';
import H4 from './H4'
import Text from './Text';
import spacing from 'styles/spacing';


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
`;

const TextMd = Text.extend`
  margin-top: ${spacing.small};
`

export  {
  H1Md,
  H2Md,
  H3Md,
  H4Md,
  TextMd
}
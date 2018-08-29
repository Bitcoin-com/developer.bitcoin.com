// @flow
import * as React from 'react'

import Text from 'atoms/Text';
import { SmartLink} from 'atoms/StyledLink';

type Props = {};

class MasteringBitcoinCashAttribution extends React.PureComponent<Props> {
  render() {
    return (
      <Text size="tiny">
            The following is based on{' '}
            <SmartLink to="https://github.com/bitcoinbook/bitcoinbook">
              Mastering Bitcoin
            </SmartLink>{' '}
            by Andreas M. Antonopoulos{' '}
            <SmartLink to="https://github.com/bitcoinbook/bitcoinbook#mastering-bitcoin---first-edition">
              First Edition
            </SmartLink>{' '}
            which is licensed under{' '}
            <SmartLink to="https://creativecommons.org/licenses/by-sa/4.0/">
              Creative Commons Attribution-ShareAlike
            </SmartLink>
          </Text>
    )
  }
}

export default MasteringBitcoinCashAttribution;
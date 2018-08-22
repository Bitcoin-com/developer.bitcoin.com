// @flow

import styled from 'styled-components';
import spacing from 'styles/spacing';
import { textBase } from 'atoms/Text';

import { defaultProps } from 'recompose'

const Pre = defaultProps({monospace: true})(styled.span`
  ${textBase};
  font-size: inherit !important;
  display: inline;
  padding: 0 ${spacing.tiny};
  background-color: ${props => props.theme.primaryMuted};
  color: ${props => props.theme.foregroundMuted};
`);

export default Pre;
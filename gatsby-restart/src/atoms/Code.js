// @flow

// import Text from './Text';
import styled from 'styled-components';

import spacing from 'styles/spacing';

const Code = styled.code`
    padding: ${spacing.small};
    color: ${props => props.theme.foregroundMuted};
    background-color: ${props => props.theme.primaryMuted};
    margin: 0;
    font-size: 16px;
    border-radius: 5px;
`

export default Code;

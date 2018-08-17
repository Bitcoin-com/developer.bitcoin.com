// @flow

import Text from './Text';

const HeaderBase = Text.withComponent('h1').extend`
    color: ${props => props.theme.foregroundMuted};
    letter-spacing: ${props => props.loose ? '2px' : '0px'};
    font-weight: 700;
    margin: 0;
`;

export default HeaderBase;

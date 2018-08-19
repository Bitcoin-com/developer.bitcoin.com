// @flow
import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { solarizedlight } from 'react-syntax-highlighter/styles/prism'

// import Text from './Text';
import styled, {css} from 'styled-components';

import spacing from 'styles/spacing';

const StyledCode = styled.code`
    padding: ${spacing.small};
    
    background-color: ${props => props.theme.primaryMuted};
    margin: 0;
    font-size: 16px;
    border-radius: 5px;
    ${props => props.overflow === 'scroll-x'
        && css`
            overflow-x: auto;
        `}
`


type Props = {
    children: React.Node,
    language?: string
}
// const Code = ({children}: Props) => {
//     return (<pre style={{overflowX: 'scroll'}}>
//         <StyledCode>{children}</StyledCode>
//     </pre>)
// }

// Refer here for relevant props
// https://github.com/conorhastings/react-syntax-highlighter#props

const Code = ({children, language='javascript'}:Props) => {
    console.log('code')
    console.log(children)
    return (
        <SyntaxHighlighter language={language} style={solarizedlight}>
            {children}
        </SyntaxHighlighter>
    )
}
export default Code;

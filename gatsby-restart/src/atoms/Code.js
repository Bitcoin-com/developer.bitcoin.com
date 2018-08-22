// @flow
import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { solarizedlight } from 'react-syntax-highlighter/styles/prism'


type Props = {
  children: React.Node,
  fontSize?: number,
  language?: string,
}

// Refer here for relevant props
// https://github.com/conorhastings/react-syntax-highlighter#props
const Code = ({ children, fontSize, language = 'javascript' }: Props) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={solarizedlight}
      customStyle={fontSize ? { fontSize: 14}: { fontSize: 14}} // decide if size 14 is always good or not. this is wanted always or 
    >
      {children}
    </SyntaxHighlighter>
  )
}
export default Code

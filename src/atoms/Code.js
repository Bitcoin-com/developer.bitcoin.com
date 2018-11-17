// @flow
import * as React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import solarizedLight from 'react-syntax-highlighter/dist/styles/prism/solarizedlight'

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
      style={solarizedLight}
      customStyle={{ fontSize: 14, margin: 0 }}
    >
      {children}
    </SyntaxHighlighter>
  )
}
export default Code

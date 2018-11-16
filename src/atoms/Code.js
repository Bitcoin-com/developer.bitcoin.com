// @flow
import * as React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

// import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter/dist/prism-light";

// import js from 'react-syntax-highlighter/dist/languages/prism/javascript'
// import python from 'react-syntax-highlighter/dist/languages/prism/python'
// import bash from 'react-syntax-highlighter/dist/languages/prism/bash'

import { solarizedLight } from 'react-syntax-highlighter/dist/styles/prism/solarizedlight'

// SyntaxHighlighter.registerLanguage('javascript', js)
// SyntaxHighlighter.registerLanguage('python', python)
// SyntaxHighlighter.registerLanguage('bash', bash)

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
      customStyle={{ fontSize: 14 }} // decide if size 14 is always good or not. this is wanted always or
    >
      {children}
    </SyntaxHighlighter>
  )
}
export default Code

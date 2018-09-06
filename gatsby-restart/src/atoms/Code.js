// @flow
import * as React from 'react'

import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/prism-light'
import js from 'react-syntax-highlighter/languages/prism/javascript'
import bash from 'react-syntax-highlighter/languages/prism/bash'

import solarizedLight from 'react-syntax-highlighter/styles/prism/solarizedlight'

registerLanguage('javascript', js)
registerLanguage('bash', bash)

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
      customStyle={fontSize ? { fontSize: 14 } : { fontSize: 14 }} // decide if size 14 is always good or not. this is wanted always or
    >
      {children}
    </SyntaxHighlighter>
  )
}
export default Code

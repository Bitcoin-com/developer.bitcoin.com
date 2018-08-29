// @flow
import * as React  from 'react';

import { SmartLink } from 'atoms/StyledLink'
import { H1Md, H2Md, H3Md, H4Md, TextMd } from 'atoms/markdownAtoms'
import Ul from 'atoms/Ul'
import Code from 'atoms/Code'
import Pre from 'atoms/Pre'

type BasicProps = {
  children: React.Node
}
// Short use inline custom component, long use codeblock
const CodePreSplitter = ({ children }: BasicProps) => {
  if (children && children[0].length > 100) {
    return <Code fontSize={14}>{children}</Code>
  }
  return <Pre>{children}</Pre>
}

// Workaround as `CodePreSplitter` captures this case as well
const PrePassthrough = ({ children }: BasicProps) => <>{children}</>

export const standardTransforms = {
    p: TextMd,
    pre: PrePassthrough,
    code: CodePreSplitter,
    h1: H1Md,
    h2: H2Md,
    h3: H3Md,
    h4: H4Md,
    a: SmartLink,
    ul: Ul,
}
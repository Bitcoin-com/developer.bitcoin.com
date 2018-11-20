// @flow
import * as React from 'react'

import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props =>
    props.isActive
      ? props.theme.foreground
      : props.subtle
      ? props.theme.foreground
      : props.theme.primary};
  &:hover {
    color: ${props => props.theme.secondary};
  }
`
const StyledA = props => <StyledLink as="a" {...props} />

type Props = {
  children: React.Node,
  text?: string,
  to: string,
  href?: string,
}

class SmartLink extends React.PureComponent<Props> {
  render() {
    const { children, text, ...rest } = this.props
    const { to, href } = rest

    const patternInternal = /^\/(?!\/)/
    const patternStaticAsset = /\/static\//g

    const internal = patternInternal.test(to) || patternInternal.test(href)
    const isAsset = patternStaticAsset.test(href)

    if (isAsset || !internal) {
      return (
        <StyledA href={to || href} target="_blank" {...rest}>
          {text || children}
        </StyledA>
      )
    }

    // Use gatsby-link for internal/app pages, and <a> for external and assets
    return (
      <StyledLink to={to || href} {...rest}>
        {text || children}
      </StyledLink>
    )
  }
}
export { SmartLink }

export default StyledLink

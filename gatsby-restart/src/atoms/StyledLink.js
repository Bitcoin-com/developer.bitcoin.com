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

const StyledA = StyledLink.withComponent('a')

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

    const pattern = /^\/(?!\/)/

    const internal = pattern.test(to) || pattern.test(href)

    // Use gatsby-link for internal links, and <a> for others
    if (internal) {
      return (
        <StyledLink to={to || href} {...rest}>
          {text || children}
        </StyledLink>
      )
    }
    return (
      <StyledA href={to || href} target="_blank" {...rest}>
        {text || children}
      </StyledA>
    )
  }
}
export { SmartLink }

export default StyledLink

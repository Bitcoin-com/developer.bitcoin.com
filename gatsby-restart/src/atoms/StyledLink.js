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
  to: string,
}

class SmartLink extends React.PureComponent<Props> {
  render() {
    const { children, ...rest } = this.props
    const { to } = rest

    const internal = /^\/(?!\/)/.test(to)

    // Use gatsby-link for internal links, and <a> for others
    if (internal) {
      return (
        <StyledLink to={to} {...rest}>
          {children}
        </StyledLink>
      )
    }
    return (
      <StyledA href={to} target="_blank" {...rest}>
        {children}
      </StyledA>
    )
  }
}
export { SmartLink }

export default StyledLink

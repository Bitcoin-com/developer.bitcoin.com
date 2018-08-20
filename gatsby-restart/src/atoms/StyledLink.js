// @flow

import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.primary};
  &:hover {
    color: ${props => props.theme.secondary};
  }
`

export default StyledLink;
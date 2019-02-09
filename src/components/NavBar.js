// @flow

import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from 'components/Container'
import spacing from 'styles/spacing'

import { textBase } from 'atoms/Text'

const Main = styled.div`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.foreground};
  z-index: 999;
  padding: ${spacing.small2};
`

const NavLayout = styled.div`
  display: flex;
  flex-direction: row;
`

const NavItem = styled(Link)`
  ${textBase};
  color: ${props =>
    props.isActive ? props.theme.primary : props.theme.background};
  text-decoration: none;
  margin-right: ${spacing.medium};
  &:hover {
    color: ${props => props.theme.primary600};
  }
`

type Props = {
  pathname: string,
}

// TODO: Better method of this to not have false positives like /tutorials/wormhole-3 triggering 2 tabs active
const developBaseUrls = [
  '/develop',
  '/bitbox',
  '/gui',
  '/rest',
  '/slp',
  '/faucets',
  '/badger',
]
const learnBaseUrls = [
  '/learn',
  '/tutorials',
  '/insights',
  '/mastering-bitcoin-cash',
]

class NavBar extends React.PureComponent<Props> {
  render() {
    const { pathname } = this.props

    // final `//` is for SSR as it ads an extra `/` to path names
    const homeActive = pathname === '/' || pathname === '' || pathname === '//'
    const learnActive = learnBaseUrls.reduce(
      (prev, curr) => prev || pathname.includes(curr),
      false
    )
    const developActive = developBaseUrls.reduce(
      (prev, curr) => prev || pathname.includes(curr),
      false
    )
    const aboutActive = pathname.includes('/about')
    return (
      <Main>
        <Container>
          <NavLayout>
            <NavItem monospace to="/" isActive={homeActive}>
              Home
            </NavItem>
            <NavItem monospace to="/learn" isActive={learnActive}>
              Learn
            </NavItem>
            <NavItem
              monospace
              to="/develop"
              isActive={developActive && !learnActive}
            >
              Develop
            </NavItem>
            <NavItem monospace to="/about" isActive={aboutActive}>
              About
            </NavItem>
          </NavLayout>
        </Container>
      </Main>
    )
  }
}

export default NavBar

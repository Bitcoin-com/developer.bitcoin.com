// @flow

import React from 'react';
import styled from 'styled-components'
import {Link } from 'gatsby';

import Container from 'components/Container';
import spacing from 'styles/spacing';

import { textBase } from 'atoms/Text';

const Main = styled.div`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.foreground};
  z-index: 2;
  padding: ${spacing.small2};
`

const NavLayout = styled.div`
  display: flex;
  flex-direction: row;
`

const NavItem = styled(Link)`
  ${textBase};
  color: ${props => props.isActive ? props.theme.primary : props.theme.background};
  text-decoration: none;
  margin-right: ${spacing.medium};
  &:hover {
    color: ${props => props.theme.secondary};
  }
`

type Props = {
  pathname: string
};

const developBaseUrls = ['/develop', '/bitbox', '/wormhole', '/gui', '/rest'];

class NavBar extends React.PureComponent<Props> {
  render() {
    const { pathname } = this.props;

    // final `//` is for SSR as it ads an extra `/` to path names
    const homeActive = pathname === '/' || pathname==='' || pathname === '//';
    const learnActive = pathname.includes('/learn')
    const developActive = developBaseUrls.reduce((prev, curr) => prev || pathname.includes(curr), false);
    const aboutActive = pathname.includes('/about')
    return (
      <Main>
        <Container>
            <NavLayout>
              <NavItem monospace to='/' isActive={homeActive}>Home</NavItem>
              <NavItem monospace to='/learn' isActive={learnActive}>Learn</NavItem>
              <NavItem monospace to='/develop' isActive={developActive}>Develop</NavItem>
              <NavItem monospace to='/about' isActive={aboutActive}>About</NavItem>
            </NavLayout>
        </Container>
      </Main>
    )
  }

}

export default NavBar
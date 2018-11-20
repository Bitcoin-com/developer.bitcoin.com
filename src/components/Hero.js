// @flow

import * as React from 'react'
import styled from 'styled-components'

import spacing from 'styles/spacing'
import Container from 'components/Container'

const Main = styled.div`
  padding: ${spacing.medium};
  background: url(${props => props.backgroundImage}) no-repeat top center;
  background-size: cover;
  position: relative;
  background-color: ${props => props.theme.foreground};
  padding: ${spacing.large} 0;
`

const Flourish = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background: ${props => props.theme.primaryMuted};
  right: 0;
  bottom: -33px;
  z-index: -1;
  clip-path: polygon(70% 0, 100% 9%, 100% 86%, 73% 100%, 0 86%, 0 10%);
`
const Cover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(25, 25, 25, 0.75);
  z-index: 0;
`

const Content = styled(Container)`
  position: relative;
  z-index: 1;
`

type Props = {
  children: React.Node,
  image: string,
  className?: string,
}

class Hero extends React.PureComponent<Props> {
  render() {
    const { image, className } = this.props
    return (
      <Main backgroundImage={image} className={className}>
        <Cover />
        <Content>{this.props.children}</Content>
        <Flourish />
      </Main>
    )
  }
}

export default Hero

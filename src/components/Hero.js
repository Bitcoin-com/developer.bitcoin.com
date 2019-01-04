// @flow

import * as React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import spacing from 'styles/spacing'
import Container from 'components/Container'

const Main = styled.div`
  padding: ${spacing.medium};
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
  image: { childImageSharp: { fluid: any } },
}

class Hero extends React.PureComponent<Props> {
  render() {
    const { image } = this.props
    return (
      <Main>
        {image.childImageSharp && (
          <Img
            imgStyle={{ objectPosition: 'top center' }}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
            fluid={image.childImageSharp.fluid}
          />
        )}
        <Cover />
        <Content>{this.props.children}</Content>
        <Flourish />
      </Main>
    )
  }
}

export default Hero

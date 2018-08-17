// @flow

import * as React from 'react';
import styled from 'styled-components';

import spacing from 'styles/spacing';


const Main = styled.div`
  padding: ${spacing.large};
  background: url(${props => props.backgroundImage});
`

type Props = {
  children: React.Node,
  image: string
}

class Hero extends React.PureComponent<Props> {
  render() {
    const {image} = this.props;

    console.log('image')
    console.log(image);

    return (
      <Main backgroundImage={image}>
        Stuff in the Hero
        {this.props.children}
      </Main>
    )

  }
}


export default Hero;
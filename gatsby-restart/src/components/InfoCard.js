// @flow
import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

import H2 from 'atoms/H2'
import Text from 'atoms/Text'
import Button from 'atoms/Button'

import spacing from 'styles/spacing';


const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-gap: ${spacing.small};
  border: 1px solid ${props => props.theme.backgroundMuted};
  padding: ${spacing.small};
  border-radius: 15px;
`
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`
type Props = {
  title: string,
  text: string,
  to?: string,
  cta?: string,
  disabledcta?: string,
}
class InfoCard extends React.PureComponent<Props> {
  render() {
    const { title, text, to, cta, disabledcta} = this.props;
    return (
      <Main>
        <H2>{title}</H2>
        <Text>{text}</Text>
        <Right>
          {cta && <Link to={to}><Button round>{cta}</Button></Link>}
          {disabledcta && <Text muted2>{disabledcta}</Text>}
        </Right>
      </Main>
    )

  }
}

export default InfoCard
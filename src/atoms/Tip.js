// @flow

import * as React from 'react'
import styled, { css } from 'styled-components'

import H3 from 'atoms/H3'
import spacing from 'styles/spacing'

const Main = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  grid-template-columns: 1fr;
  grid-gap: ${spacing.tiny};
  border: 2px solid ${props => props.theme.primary};
  border-radius: 4px;
  padding: ${spacing.small};
  margin-top: ${spacing.medium};

  ${props =>
    props.nature === 'warning' &&
    css`
      border-color: ${props => props.theme.danger};
    `};
  ${props =>
    props.nature === 'note' &&
    css`
      border-color: ${props => props.theme.secondary};
    `};
`

const ContentHolder = styled.div``

type Props = {
  nature: string,
  children: React.Node,
}

class Tip extends React.PureComponent<Props> {
  static defaultProps = {
    nature: 'tip',
  }

  render() {
    const { nature, children } = this.props
    return (
      <Main nature={nature}>
        <H3 capitalize nature={nature}>
          {nature}
        </H3>
        <ContentHolder>{children}</ContentHolder>
      </Main>
    )
  }
}

export default Tip

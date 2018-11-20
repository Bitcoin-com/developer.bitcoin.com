// @flow
import React from 'react'
import styled from 'styled-components'
import { FaAngleRight } from 'react-icons/fa'

import StyledLink, { SmartLink } from 'atoms/StyledLink'
import H3 from 'atoms/H3'
import Text from 'atoms/Text'
import Button from 'atoms/Button'

import spacing from 'styles/spacing'

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-gap: ${spacing.small};
  border: 1px solid ${props => props.theme.primary200};
  box-shadow: 2px 1px 1px ${props => props.theme.primary100};
  padding: ${spacing.small};
  border-radius: 8px;
`
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`
type Props = {
  title: string,
  text: string,
  to: string,
  cta?: string,
  disabledcta?: string,
}
class InfoCard extends React.PureComponent<Props> {
  render() {
    const { title, text, to, cta, disabledcta } = this.props
    return (
      <Main>
        <SmartLink to={to} subtle>
          <H3>{title}</H3>
        </SmartLink>
        <Text muted>{text}</Text>
        <Right>
          {cta && (
            <StyledLink to={to}>
              <Button round>
                View <FaAngleRight />
              </Button>
            </StyledLink>
          )}
          {disabledcta && <Text muted2>{disabledcta}</Text>}
        </Right>
      </Main>
    )
  }
}

export default InfoCard

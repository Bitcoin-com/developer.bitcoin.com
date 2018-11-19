// @flow
import React from 'react'
import styled from 'styled-components'

import spacing from 'styles/spacing'
import Text from 'atoms/Text'

const BalanceGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: max-content;
`

const BalanceRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${spacing.large};
  justify-content: space-between;
  background-color: ${props => props.theme.primary100};
`
type Props = {
  title: string,
  data: {
    item: string,
    amount: number | string,
  }[],
}
const BalanceDisplay = (props: Props) => {
  const { title, data } = props
  console.log(data)
  return (
    <BalanceGrid>
      <Text bold center>
        {title}
      </Text>
      <BalanceRow>
        {data.map(val => (
          <div>
            <Text center>{val.item}</Text>
            <Text center>{Number(val.amount).toFixed(8)}</Text>
          </div>
        ))}
      </BalanceRow>
    </BalanceGrid>
  )
}

export default BalanceDisplay

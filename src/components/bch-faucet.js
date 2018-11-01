import React from 'react'
import styled from 'styled-components'

const Well = styled.p`
  background-color: #f5f5f5;
  min-height: 20px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
`

const WrapperDiv = styled.div`
  padding: 50px;
`

type Props = {}
class BchFaucet extends React.PureComponent<Props> {
  render() {
    const {} = this.props

    return (
      <WrapperDiv>
        <form>
          <div>
            <label for="bchAddr">BCH Testnet Address: </label>
            <input
              type="text"
              id="bchAddr"
              size="45"
              placeholder="bchtest:qqmd9unmhkpx4pkmr6fkrr8rm6y77vckjvqe8aey35"
            />
          </div>
        </form>

        <button type="button" onClick={this.requestBCH}>
          Get tBCH!
        </button>

        <Well>This is the output</Well>
      </WrapperDiv>
    )
  }

  requestBCH() {
    console.log(`hello`)
  }
}

export default BchFaucet

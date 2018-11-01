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
class BchFaucet extends React.PureComponent {
  // constructor to set state and bind "this"
  constructor(props) {
    super(props)
    this.state = {
      outputText: '',
      bchAddr: '',
    }
  }

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
              value={this.state.bchAddr}
              onChange={this.handleChange}
            />
          </div>
        </form>

        <button type="button" onClick={this.requestBCH}>
          Get tBCH!
        </button>

        <Well>{this.state.outputText}</Well>
      </WrapperDiv>
    )
  }

  handleChange = ({ target }) => {
    //console.log(`${JSON.stringify(target.value,null,2)}`)
    //const { bchAddr, value } = target;
    //console.log(`${JSON.stringify(target.value,null,2)}`)
    this.setState({ bchAddr: target.value })
  }

  requestBCH = () => {
    //console.log(`state.bchAddr: ${this.state.bchAddr}`)

    this.setState(prevState => ({
      //outputText: prevState.outputText+' abc '+this.state.bchAddr,
      outputText:
        prevState.outputText +
        `\nSending BCH to address ${this.state.bchAddr}...`,
    }))
  }
}

export default BchFaucet

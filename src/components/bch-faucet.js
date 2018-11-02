import React from 'react'
import styled from 'styled-components'

const SERVER = `https://faucet.christroutner.com`

const Well = styled.p`
  background-color: #f5f5f5;
  min-height: 20px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  white-space: pre-line;
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
        <h3>
          This is a <u>testnet</u> faucet Bitcoin Cash! It is built with{' '}
          <a href="https://developer.bitcoin.com/bitbox">
            BITBOX JavaScript SDK
          </a>{' '}
          and is funded by the{' '}
          <a href="https://www.bitcoin.com/bitcoin-mining">
            Bitcoin.com Mining Pool{' '}
          </a>
          . It currently gives out <u>0.1 BCH</u>.
        </h3>
        <p>
          <a href="https://github.com/Bitcoin-com/testnet-faucet">
            Fork the code on GitHub!
          </a>
        </p>

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

        <p>
          Please send your leftover testnet coins back to the faucet:
          <br />
          <i>bchtest:qqmd9unmhkpx4pkmr6fkrr8rm6y77vckjvqe8aey35</i>
        </p>
      </WrapperDiv>
    )
  }

  // Updates the state as the user updates the input form.
  handleChange = ({ target }) => {
    this.setState({ bchAddr: target.value })
  }

  requestBCH = async () => {
    try {
      //console.log(`state.bchAddr: ${this.state.bchAddr}`)

      this.wipeOutput()

      this.addOutput(`Sending request...`)

      if (this.state.bchAddr === '') {
        this.addOutput(`Error: BCH Address can not be blank`)
        return
      }

      const resp = await fetch(`${SERVER}/coins/${this.state.bchAddr}`)
      const body = await resp.json()
      console.log(`body: ${JSON.stringify(body, null, 2)}`)

      if (!body.success) {
        const message = body.message

        if (message === `Invalid BCH cash address.`)
          this.addOutput(`Error: Invalid BCH testnet address`)
        else
          this.addOutput(
            `Error: This BCH address has been used before, or you need to wait 24 hours to request from this IP address.`
          )

        return
      }

      this.addOutput(`Success: testnet BCH are on their way!`)
      //this.addOutput(`TXID: ${body.txid}`)
      this.addOutput(
        `TXID: <a href="https://www.blocktrail.com/tBCC/tx/${body.txid}">${
          body.txid
        }</a>`
      )
    } catch (err) {
      console.log(`Error in requestBCH: `, err)
    }
  }

  // Add another line to the output.
  addOutput = str => {
    this.setState(prevState => ({
      outputText: prevState.outputText + `\n${str}`,
    }))
  }

  // Clear the output.
  wipeOutput = () => {
    this.setState(prevState => ({
      outputText: '',
    }))
  }
}

export default BchFaucet

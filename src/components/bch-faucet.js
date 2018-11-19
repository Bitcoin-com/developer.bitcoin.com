// @flow

import 'isomorphic-fetch'
import React from 'react'
import styled from 'styled-components'

import Button from 'atoms/Button'
import StyledLink, { SmartLink } from 'atoms/StyledLink'
import H3 from 'atoms/H3'
import Text from 'atoms/Text'
import Input from 'atoms/Input'
import Well from 'atoms/Well'
import spacing from 'styles/spacing'

import FaucetBalanceDisplay from './FaucetBalanceDisplay'

const SERVER = `https://faucet.christroutner.com`

const WrapperDiv = styled.div`
  padding: 50px;
  display: grid;
  grid-gap: ${spacing.small};
`

const TxLink = styled.p`
  padding: 25px;
`

const AddressForm = styled.form`
  display: grid;
  grid-gap: ${spacing.small};
  grid-auto-columns: min-content;
`

type Props = {}
type State = {
  outputText: string, // Output of the Well.
  bchAddr: string, // bchAddress provided by user.
  linkAddr: string, // Link URL to block explorer.
  linkOn: boolean, // Toggles block explorer link.
  balance: number, // Initial balance before retreiving form server.
}

class BchFaucet extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      outputText: '',
      bchAddr: '',
      linkAddr: '#',
      linkOn: false,
      balance: 0,
    }
  }

  render() {
    const {} = this.props

    if (this.state.balance === 0) this.getBalance()

    return (
      <WrapperDiv>
        <H3>
          This is a <u>testnet</u> faucet for Bitcoin Cash! It is built with{' '}
          <StyledLink to="/bitbox">BITBOX JavaScript SDK</StyledLink>
          and is funded by the{' '}
          <SmartLink to="https://www.bitcoin.com/bitcoin-mining">
            Bitcoin.com Mining Pool
          </SmartLink>
          . It currently gives out <u>0.1 BCH</u>.
        </H3>

        <FaucetBalanceDisplay
          title="Current faucet balance"
          data={[{ item: 'BCH', amount: this.state.balance }]}
        />

        <Text>
          <SmartLink to="https://github.com/Bitcoin-com/testnet-faucet">
            Fork the code on GitHub!
          </SmartLink>
        </Text>

        <AddressForm>
          <Text for="bchAddr" as="label" bold>
            BCH Testnet Address
          </Text>
          <Input
            type="text"
            id="bchAddr"
            size="45"
            placeholder="bchtest:qqmd9unmhkpx4pkmr6fkrr8rm6y77vckjvqe8aey35"
            value={this.state.bchAddr}
            onChange={this.handleChange}
          />
          <Button type="button" onClick={this.requestBCH}>
            Get tBCH!
          </Button>
        </AddressForm>

        <Well>
          <Text>{this.state.outputText}</Text>
        </Well>

        {this.state.linkOn && (
          <TxLink>
            <SmartLink to={this.state.linkAddr}>
              View TX on Block Explorer
            </SmartLink>
          </TxLink>
        )}

        <Text>
          Please send your leftover testnet coins back to the faucet:
          <br />
          <i>bchtest:qqmd9unmhkpx4pkmr6fkrr8rm6y77vckjvqe8aey35</i>
        </Text>
      </WrapperDiv>
    )
  }

  // Updates the state as the user updates the input form.
  handleChange = ({ target }) => {
    this.setState({ bchAddr: target.value })
  }

  getBalance = async () => {
    const resp = await fetch(`${SERVER}/coins/`)
    const body = await resp.json()

    this.setState(prevState => ({
      balance: body.balance,
    }))
  }

  requestBCH = async () => {
    try {
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
      this.addOutput(`TXID: ${body.txid}`)

      // Show the link to the block explorer.
      this.showLink(body.txid)
    } catch (err) {
      console.log(`Error in requestBCH: `, err)
    }
  }

  showLink(txid) {
    this.setState(prevState => ({
      linkOn: true,
      linkAddr: `https://www.blocktrail.com/tBCC/tx/${txid}`,
    }))
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

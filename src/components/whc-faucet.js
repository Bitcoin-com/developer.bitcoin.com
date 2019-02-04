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

const SERVER = `https://faucet.bchtest.net`

const WrapperDiv = styled.div`
  padding-top: ${spacing.large};
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
  bchBalance: number, // Initial balance before retreiving form server.
  whcBalance: string, // Coming back as string from API.  Works, but should turn to number
}

class BchFaucet extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      outputText: '',
      bchAddr: '',
      linkAddr: '#',
      linkOn: false,
      bchBalance: 0,
      whcBalance: 0,
    }
  }

  render() {
    if (this.state.whcBalance === 0) this.getBalance()

    return (
      <WrapperDiv>
        <H3>
          This is a <u>testnet</u> faucet Wormhole coins! It is built with{' '}
          <StyledLink to="/bitbox">BITBOX JavaScript SDK</StyledLink> and is
          funded by the{' '}
          <SmartLink to="https://www.bitcoin.com/bitcoin-mining">
            Bitcoin.com Mining Pool
          </SmartLink>
          . It currently gives out <u>3 WHC</u>.
        </H3>

        <FaucetBalanceDisplay
          title="Current faucet balance"
          data={[
            { item: 'BCH', amount: this.state.bchBalance },
            { item: 'WHC', amount: this.state.whcBalance },
          ]}
        />

        <Text>
          <SmartLink to="https://github.com/Bitcoin-com/whc-faucet">
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
            size="60"
            placeholder="bchtest:qr8d0cp00a07gwf7ltg4ufu48a849j98x5dj7zk423"
            value={this.state.bchAddr}
            onChange={this.handleChange}
          />
          <Button type="button" onClick={this.requestWHC}>
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
          <i>bchtest:qr8d0cp00a07gwf7ltg4ufu48a849j98x5dj7zk423</i>
        </Text>
      </WrapperDiv>
    )
  }

  // Updates the state as the user updates the input form.
  handleChange = ({ target }) => {
    this.setState({ bchAddr: target.value })
  }

  // Retrieve the wallet balance from the server.
  getBalance = async () => {
    const resp = await fetch(`${SERVER}/tokens/`)
    const body = await resp.json()

    this.setState(prevState => ({
      bchBalance: body.bch,
      whcBalance: body.whc,
    }))
  }

  requestWHC = async () => {
    try {
      this.wipeOutput()
      this.addOutput(`Sending request...`)

      if (this.state.bchAddr === '') {
        this.addOutput(`Error: BCH Address can not be blank`)
        return
      }

      const resp = await fetch(`${SERVER}/tokens/${this.state.bchAddr}`)
      const body = await resp.json()

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

      this.addOutput(`Success: testnet WHC are on their way!`)
      this.addOutput(`TXID: ${body.txid}`)

      // Show the link to the block explorer.
      this.showLink(body.txid)
    } catch (err) {
      console.log(`Error in requestWHC: `, err)
    }
  }

  showLink(txid) {
    this.setState(prevState => ({
      linkOn: true,
      linkAddr: `https://www.blocktrail.com/tBCC/tx/${txid}`,
    }))
  }

  // Add another line to the output.
  addOutput = (str: string) => {
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

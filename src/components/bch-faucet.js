import React from 'react'

type Props = {}
class BchFaucet extends React.PureComponent<Props> {
  render() {
    const {} = this.props

    return (
      <div>
        <form>
          <div>
            <label for="bchAddr">BCH Testnet Address: </label>
            <input
              type="text"
              id="bchAddr"
              size="60"
              placeholder="bchtest:qqmd9unmhkpx4pkmr6fkrr8rm6y77vckjvqe8aey35"
            />
          </div>
        </form>

        <button type="button" onClick={this.requestBCH}>
          Get tBCH!
        </button>
      </div>
    )
  }

  requestBCH() {
    console.log(`hello`)
  }
}

export default BchFaucet

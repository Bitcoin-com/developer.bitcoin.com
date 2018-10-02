---
title: ERC20
icon: coins
ordinal: 6
---

### `config`

Set token and wallet info

#### Arguments

1.  token `Object` required
2.  wallet `Object` required

#### Examples

    (async () => {
      try {
        let t = {
          propertyid: 189,
          name: "SCT",
          category: "Services",
          subcategory: "Success Token",
          data: "Made with BITBOX",
          url: "www.success.cash",
          precision: 1,
          issuer: "bitcoincash:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqj64s9la9",
          creationtxid: "06e5d9b0ca1f667486e3fe5999f0264d9c6e171c62dd4bf020f16e3de77a5289",
          fixedissuance: false,
          managedissuance: true,
          freezingenabled: false,
          totaltokens: "985.0"
        };
        let w = {
          mnemonic: "",
          cashAddress: "",
          legacyAddress: ""
        };
        Wormhole.ERC20.config(t, w);
      } catch(error) {
        console.error(error)
      }
    })()

### `totalSupply`

Get the total token supply

#### Result

totalSupply `Number`

#### Examples

    (async () => {
      try {
        let totalSupply = await Wormhole.ERC20.totalSupply();
        console.log(totalSupply);
      } catch(error) {
        console.error(error)
      }
    })()
    // 985.0

### `balanceOf`

Get the account balance of another account with owner

#### Arguments

1.  owner `String` required

#### Result

balance `Number`

#### Examples

    (async () => {
      try {
        let balanceOf = await Wormhole.ERC20.balanceOf('bitcoincash:qpcdmw7dfumg6kns7ya8pzfrs7rnaplx95qqn7v5l3');
        console.log(balanceOf);
      } catch(error) {
        console.error(error)
      }
    })()
    // 1

### `transfer`

Send `value` amount of tokens to address `to`

#### Arguments

1.  to `String` required
2.  value `Number` required
3.  transferCallback `Function`. Arguments: from, to, value

#### Result

success `Boolean`

#### Examples

    (async () => {
      try {
        let transfer = Wormhole.ERC20.transfer('qpn2ushvrxt928sdhy69sfwkcq3spfh8ac8rwttdye', 1);
        console.log(transfer);
      } catch(error) {
        console.error(error)
      }
    })()
    // true

### `transferFrom`

Send `value` amount of tokens from address `from` to address `to`

#### Arguments

1.  from `HDNode` required
2.  to `String` required
3.  value `Number` required
4.  transferCallback `Function`. Arguments: from, to, value

#### Result

success `Boolean`

#### Examples

    (async () => {
      try {
        let transfer = Wormhole.ERC20.transferFrom(HDNode, 'qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqj64s9la9', 1);
        console.log(transfer);
      } catch(error) {
        console.error(error)
      }
    })()
    // true

### `approve`

Allow `spender` to withdraw from your account, multiple times, up to the `value` amount. If this function is called again it overwrites the current allowance with `value`

Currently a **NOOP**

#### Arguments

1.  spender `HDNode` required
2.  value `Number` required
3.  approvalCallback `Function`. Arguments: owner, spender, value

#### Result

success `Boolean`

### `allowance`

Returns the amount which `spender` is still allowed to withdraw from `owner`

Currently a **NOOP**

#### Arguments

1.  owner `HDNode` required
2.  spender `String` required
3.  approvalCallback `Function`. Arguments: owner, spender, value

#### Result

remaining `Number`

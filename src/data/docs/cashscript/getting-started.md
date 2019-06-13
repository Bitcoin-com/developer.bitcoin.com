---
title: Getting Started
icon: home
ordinal: 0
---

CashScript is a high level language enabling basic smart contract functionality on Bitcoin Cash. While these cash contracts are less powerful than Ethereum's smart contracts, CashScript was in many ways inspired by Ethereum's development ecosystem. Ethereum has always had one of the most accessible development ecosystems in terms of tooling, and with CashScript we want to bring that accessibility to Bitcoin Cash.

---

**Attention:** CashScript is in active development, and is currently in a `beta` phase. While CashScript is in `beta` stage, its APIs and usage is subject to change, so be sure to check the documentation. During the `beta` phase it is possible that the library still contains bugs, so for now the CashScript SDK can only be used on the `testnet` network.

### The CashScript Language

CashScript is a high-level language that allows you to write Cash Contracts in a straightforward and familiar way. It is inspired by Ethereum's Solidity, but it is not the same, and cash contracts work very differently from Ethereum's smart contracts. See the [Language Documentation](/cashscript/docs/language) for a full reference of the language.

### The CashScript Compiler

CashScript features a compiler as a standalone command line tool, called `cashc`. It can be installed through npm and used to compile `.cash` files into `.json` artifact files. These artifact files can be imported into the CashScript JavaScript SDK (or other SDKs in the future). Note that the CashScript SDK also has a fnuction to import and compile `.cash` files directly, so it is not required to use the `cashc` command line tool.

See the [cashc documentation](/cashscript/docs/cashc) for more information on the `cashc` command line tool.

#### Installation

```bash
npm install -g cashc
```

#### Usage

```bash
Usage: cashc [options] [source_file]

Options:
  --output, -o  Specify a file to output the generated artifact.
                                                             [string] [required]
  --help        Show help                                              [boolean]
  --version     Show version number                                    [boolean]
```

### The CashScript SDK

The main way to interact with cash contracts and integrate them into applications is using the CashScript SDK. This SDK allows you to compile `.cash` files or import `.json` artifact files, and convert them to `Contract` objects. These objects are used to create new contract instances. These instances are used to interact with the contracts using the functions that were implemented in the `.cash` file. For more information on the CashScript SDK, refer to the [full SDK documentation](/cashscript/docs/sdk).

**Note:** The CashScript officially only supports NodeJS, as it uses some NodeJS-specific functionality (fs, path). We are working on making the library compatible with the browser as well as NodeJS, but this is **currently not supported**.

#### Installation

```bash
npm install cashscript
```

#### Usage

```ts
import { Contract, ... } from 'cashscript';
```

```js
const { Contract, ... } = require('cashscript');
```

Using the CashScript SDK, you can import / compile existing cash contract files, create new instances of these contracts, and interact with these instances:

```ts
...
  // Compile the P2PKH Cash Contract
  const P2PKH: Contract = Contract.fromCashFile(path.join(__dirname, 'p2pkh.cash'), 'testnet');

  // Instantiate a new P2PKH contract with constructor arguments: { pkh: pkh }
  const instance: Instance = P2PKH.new(pkh);

  // Get contract balance & output address + balance
  const contractBalance: number = await instance.getBalance();
  console.log('contract address:', instance.address);
  console.log('contract balance:', contractBalance);

  // Call the spend function with the owner's signature
  // And use it to send 0. 000 100 00 BCH back to the contract's address
  const tx: TxnDetailsResult = await instance.functions.spend(pk, new Sig(keypair, 0x01))
    .send(instance.address, 10000);
  console.log('transaction details:', tx);
...
```

### Examples

If you want to see CashScript in action and check out its usage, there are several example contracts in the [CashScript repository](https://github.com/Bitcoin-com/cashscript/tree/master/examples). The `.cash` files contain example contracts, and the `.ts` files contain example usage of the CashScript SDK to interact with these contracts.

The "Hello World" of cash contracts is defining the P2PKH pattern inside a cash contract, which can be found under [`examples/p2pkh.cash`](https://github.com/Bitcoin-com/cashscript/tree/master/examples/p2pkh.cash). Its usage can be found under [`examples/p2pkh.ts`](https://github.com/Bitcoin-com/cashscript/tree/master/examples/p2pkh.ts).

#### Running the examples

To run the examples, clone the [CashScript repository](https://github.com/Bitcoin-com/cashscript) and navigate to the `examples/` directory. Since the examples depend on the SDK, be sure to run `npm install` inside the `examples/` directory, which installs all required packages.

```bash
git clone git@github.com:Bitcoin-com/cashscript.git
cd cashscript/examples
npm install
```

All `.ts` files in the examples directory can then be executed with `ts-node`.

```bash
npm install -g ts-node
ts-node p2pkh.ts
```

All `.js` files can be executed with `node`.

```bash
node p2pkh.js
```

---
  title: Getting Started
  icon: home
  ordinal: 0
---

## GUI Setup

## GUI Setup
## GUI Setup
### MacOS

Download the [app for MacOS](https://github.com/Bitcoin-com/bitbox-gui/releases/download/0.7.8/BITBOX-0.7.8.dmg). You can verify the files haven’t been tampered with by downloading them and running:

`
$ openssl sha -sha256 path/to/BITBOX-0.7.8.dmg
`

Verify the output matches the latest BITBOX release [checksum](https://github.com/Bitcoin-com/keys-n-hashes).

### Windows and  Linux

```bash
// Clone the git repo
$ git clone https://github.com/Bitcoin-com/bitbox-gui.git

// Install dependencies
$ cd bitbox-gui && npm install

// Build app
$ npm run build

// Launch app
$ npm start
```
<!-- 

## `Welcome to Bitbox`

### Dependencies 

#### NodeJS
`NodeJS` is a JavaScript runtime built on Chrome’s V8 engine. `npm` is the package manager for `NodeJS`

### MacOS and Linux

When installing on Unix platforms we recommend nvm the node version manager. 
Steps to setup

* Install nvm
  * `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
* Install Long Term Stable (LTS) release of NodeJS
  * `nvm ls-remote`
  * `nvm install 8.11.3`

### Windows
Install NodeJs with the official installer from [nodejs.org](https://nodejs.org). Install the recommended version.

To create a scaffold, Windows users also require git command line tool to be installed. You can get it from here. -->

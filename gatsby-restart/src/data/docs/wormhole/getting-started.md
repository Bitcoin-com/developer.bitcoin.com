---
  title: Getting Started
  icon: home
  ordinal: 0
---

## `Welcome to Wormhole`

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

To create a scaffold, Windows users also require git command line tool to be installed. You can get it from here.

### Command Line

`npm install bitbox-cli --global`  

To use inside a command line script or client/server app:

`npm install bitbox-cli --save`

### Usage
Use the scaffold generator, or manually import BITBOX into your code:

```javascript
let BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
let BITBOX = new BITBOXCli();

// alternative
import BITBOXCli from 'bitbox-cli/lib/bitbox-cli')
const BITBOX = new BITBOXCli();
```
                
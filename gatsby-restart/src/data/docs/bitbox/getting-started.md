---
  title: Getting Started
  icon: home
  ordinal: 0
---

## `Welcome to BITBOX`

### Dependencies

#### NodeJS
NodeJS is a JavaScript runtime built on Chrome’s V8 engine. `npm` is the package manager for NodeJS`

To install both use the official installer from [nodejs.org](https://nodejs.org). Install the recommended version.

### Command Line

To use commands like `new` and `console`:

`npm install bitbox-cli --global`

To use inside a command line script or client/server app:

`npm install bitbox-cli --save`

### Usage

Use the scaffold generator, or manually import BITBOX into your code:

```javascript
let BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
const BITBOX = new BITBOXCli();

// alternative
import * as BITBOXCli from 'bitbox-cli/lib/bitbox-cli';
const BITBOX = new BITBOXCli();
```

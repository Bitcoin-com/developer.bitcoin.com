---
title: Getting Started
icon: home
ordinal: 0
---

### Dependencies

#### NodeJS

NodeJS is a javascript runtime build on Chrome’s V8 engine. npm is the package manager for NodeJS.

Use the official installer from [nodejs.org](https://nodejs.org/). Install the one which says “Recommended for Most Users”

### Command Line

To use commands like `new` and `console`:

    npm install bitbox-cli --global

To use inside a command line script or client/server app:

    npm install bitbox-cli --save

### Usage

Use the [scaffold generator](./new.html), or manually import BITBOX into your code:

    let BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
    let BITBOX = new BITBOXCli();

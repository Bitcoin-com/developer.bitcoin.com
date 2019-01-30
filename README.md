# Developer.bitcoin.com

## Developer Tooling, Cloud, and Market

### BITBOX

Bitcoin.com’s developer plaform is based on the popular BITBOX javascript framework. Offering utility methods for Mnemonics, HDNodes, ECPairs, Crypto, Address conversion, Transactions and much more.

### REST

The BCH JSON RPC over HTTP including a fully documented and interactive GUI which developers can use to test their ideas and confirm their code is making proper API calls.

### Cloud

Blockchain-as-a-Service. Infrastructure to deploy and scale your apps. An ecosystem of add-ons for data, monitoring, logging, metrics, testing and more all built w/ BITBOX.

### Market

Paid downloads, streaming media, in-app purchases, tokens and more ways for you to monetize.

## Install / develop

Make sure that you have the Gatsby CLI program installed:

```sh
  npm install
  npm start
```

## Build / deploy

```sh
  npm run  build
  > deploy `/public` folder somewhere.
```

### Primary technologies

- Gatsby v2
- React
- Markdown
- graphql
- styled-components
- Love and care

# Content Contributing

## File structure

The site follows Gatsby V2 structure, please refer to the [Gatsby Docs](https://next.gatsbyjs.org/) for an overview.

### Data

Documentation, tutorial, insight, and mastering bitcoin cash chapters are all stored as `markdown` files. As such, these pages can all be created, removed, and edited by just editing the associated `.md` file.
These are found in `src/data`.

#### Custom markdown tags

We define some custom markdown takes to extend it's functionality.
All content nested in these custom components needs to be written as HTML.

##### tip

A bordered box used to render a `tip/info/warning` box.

usage

```
// Standard, "Tip"
<tip>Use a tip to display tips</tip>

// Standard, "Tip" with nested <i>
<tip>Use a tip to display tips <i>in italic</i></tip>

// Warning
<tip nature="warning">Use warnings to display warnings</tip>

// Note
<tip nature="note">Notes for extra info</tip>
>
```

##### image-caption

Caption below an image

usage

```
// Standard, "Tip"
[image text](/images/wow.png)
<image-caption>Use a tip to display tips</image-caption>

// Warning
<tip nature="warning">Use warnings to display warnings</tip>

// Note
<tip nature="note">Notes for extra info</tip>
```

##### anchor

Anchor to link to if the auto-generated header anchors aren't working

usage

```
// basic invisible anchor
<anchor name="link-to-me"></anchor>
```

##### spacer

Empty space until we can figure out a better solution

usage

```
// some extra spce
<spacer></spacer>
```

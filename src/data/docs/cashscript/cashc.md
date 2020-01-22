---
title: Cashc CLI
icon: terminal
ordinal: 1
---

`cashc` can be used to compile CashScript `.cash` files into `.json` artifact files. These artifacts can be imported and used by any of the CashScript SDKs, or other libraries / applications that use CashScript. Check out the [Language Documentation](/cashscript/docs/language) for a full overview of this Artifact format.

### Installation
You can use `npm` to install the `cashc` command line tool gloablly.

```bash
npm install -g cashc
```

### Usage
The `cashc` CLI tool can be used to compile `.cash` files to JSON artifact files.

```bash
Usage: cashc [options] [source_file]

Options:
  --output, -o  Specify a file to output the generated artifact.
                                                             [string] [required]
  --help        Show help                                              [boolean]
  --version     Show version number                                    [boolean]
```

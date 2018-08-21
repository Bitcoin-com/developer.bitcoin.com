---
  title: Paper
  icon: file
  ordinal: 4
---

Generate a `paper-wallet.html` w/ private key WIF and public address in cashaddr or legacy encoding. The paper wallet will also list the mnemonic and HD path. Generate the mnemonic in 8 languages including: english, chinese (simplified & traditional), french, italian, japanese, korean and spanish.

The privateKey/address pair are created from a fresh 32 byte mnemonic and derived as the first external change address from the following HD path: `m / 44’ / 145’ / 0’ / 0 / 0`.

### Usage
Create a paper wallet for easy and safe back up. Outputs `paper-wallet.html` which you can customize the look and then print.

```bash
paper [options]
  Options:
  -e, --encoding   The encoding to use. Options include "cashaddr" and "legacy". Default: "cashaddr"
  -l, --language   language of mnemonic. Options: chinese_simplified, chinese_traditional, english, french, italian, japanese, korean, spanish. Default: english
  -h, --help                 output usage information
  
$ bitbox paper
Creating english cashaddr paper wallet

$ bitbox paper -l korean -e legacy
Creating korean legacy paper wallet

```

### Example result
![image](/images/paper.png)
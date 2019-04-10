---
title: OpCodes
icon: code
ordinal: 13
---

### Constants

| Word         | Opcode | Hex       | Inputs    | Outputs       | Description                                                                                             |
| ------------ | ------ | --------- | --------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| OP_FALSE     | 0      | 0x00      | Nothing   | (empty value) | An empty array of bytes is pushed onto the stack. (This is not a no-op: an item is added to the stack.) |
| OP_0         | 0      | 0x00      | Nothing   | (empty value) | An empty array of bytes is pushed onto the stack. (This is not a no-op: an item is added to the stack.) |
| N/A          | 1-75   | 0x01-0x4b | (special) | data          | The next opcode bytes is data to be pushed onto the stack                                               |
| OP_PUSHDATA1 | 76     | 0x4c      | (special) | data          | The next byte contains the number of bytes to be pushed onto the stack.                                 |
| OP_PUSHDATA2 | 77     | 0x4d      | (special) | data          | The next two bytes contain the number of bytes to be pushed onto the stack in little endian order.      |
|              |
| OP_PUSHDATA4 | 78     | 0x4e      | (special) | data          | The next four bytes contain the number of bytes to be pushed onto the stack in little endian order.     |
| OP_1NEGATE   | 79     | 0x4f      | Nothing.  | -1            | The number -1 is pushed onto the stack.                                                                 |
| OP_TRUE      | 81     | 0x51      | Nothing.  |               | The number 1 is pushed onto the stack.                                                                  |
|              |
| OP_2-OP_16   | 82-96  | 0x52-0x60 | Nothing.  | 2-16          | The number in the word name (2-16) is pushed onto the stack.                                            |
|              |

### Flow control

"OP_NOP": 97,
"OP_IF": 99,
"OP_NOTIF": 100,
"OP_ELSE": 103,
"OP_ENDIF": 104,
"OP_VERIFY": 105,
"OP_RETURN": 106,

### Stack

"OP_TOALTSTACK": 107,
"OP_FROMALTSTACK": 108,
"OP_2DROP": 109,
"OP_2DUP": 110,
"OP_3DUP": 111,
"OP_2OVER": 112,
"OP_2ROT": 113,
"OP_2SWAP": 114,
"OP_IFDUP": 115,
"OP_DEPTH": 116,
"OP_DROP": 117,
"OP_DUP": 118,
"OP_NIP": 119,
"OP_OVER": 120,
"OP_PICK": 121,
"OP_ROLL": 122,
"OP_ROT": 123,
"OP_SWAP": 124,
"OP_TUCK": 125,

### Splice

"OP_CAT": 126,
"OP_SPLIT": 127,
"OP_NUM2BIN": 128,
"OP_BIN2NUM": 129,
"OP_SIZE": 130,

### Bitwise logic

"OP_INVERT": 131,
"OP_AND": 132,
"OP_OR": 133,
"OP_XOR": 134,
"OP_EQUAL": 135,
"OP_EQUALVERIFY": 136,

### Arithmetic

"OP_1ADD": 139,
"OP_1SUB": 140,
"OP_2MUL": 141,
"OP_2DIV": 142,
"OP_NEGATE": 143,
"OP_ABS": 144,
"OP_NOT": 145,
"OP_0NOTEQUAL": 146,
"OP_ADD": 147,
"OP_SUB": 148,
"OP_MUL": 149,
"OP_DIV": 150,
"OP_MOD": 151,
"OP_LSHIFT": 152,
"OP_RSHIFT": 153,
"OP_BOOLAND": 154,
"OP_BOOLOR": 155,
"OP_NUMEQUAL": 156,
"OP_NUMEQUALVERIFY": 157,
"OP_NUMNOTEQUAL": 158,
"OP_LESSTHAN": 159,
"OP_GREATERTHAN": 160,
"OP_LESSTHANOREQUAL": 161,
"OP_GREATERTHANOREQUAL": 162,
"OP_MIN": 163,
"OP_MAX": 164,
"OP_WITHIN": 165,

### Crypto

"OP_RIPEMD160": 166,
"OP_SHA1": 167,
"OP_SHA256": 168,
"OP_HASH160": 169,
"OP_HASH256": 170,
"OP_CODESEPARATOR": 171,
"OP_CHECKSIG": 172,
"OP_CHECKSIGVERIFY": 173,
"OP_CHECKMULTISIG": 174,
"OP_CHECKMULTISIGVERIFY": 175,
"OP_CHECKDATASIG": 186,
"OP_CHECKDATASIGVERIFY": 187,

### Locktime

"OP_NOP2": 177,
"OP_CHECKLOCKTIMEVERIFY": 177,
"OP_NOP3": 178,
"OP_CHECKSEQUENCEVERIFY": 178,

### Pseudo-words

"OP_PUBKEYHASH": 253,
"OP_PUBKEY": 254,
"OP_INVALIDOPCODE": 255

### Reserved words

"OP_RESERVED": 80,
"OP_VER": 98,
"OP_VERIF": 101,
"OP_VERNOTIF": 102,
"OP_RESERVED1": 137,
"OP_RESERVED2": 138,
"OP_NOP1": 176,
"OP_NOP4": 179,
"OP_NOP5": 180,
"OP_NOP6": 181,
"OP_NOP7": 182,
"OP_NOP8": 183,
"OP_NOP9": 184,
"OP_NOP10": 185,

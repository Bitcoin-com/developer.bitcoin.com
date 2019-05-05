---
title: Schnorr
icon: arrows-vertical
ordinal: 16
---

### `sign`

Sign a 32-byte message with the private key, returning a 64-byte signature.

#### Arguments

1.  privateKey `BigInteger`
2.  message `Buffer`

#### Result

signature `Buffer`

#### Examples

    const Buffer = require("safe-buffer").Buffer
    const BigInteger = require("bigi")

    // signing
    const privateKey = BigInteger.fromHex(
      "B7E151628AED2A6ABF7158809CF4F3C762E7160F38B4DA56A784D9045190CFEF"
    )
    const message = Buffer.from(
      "243F6A8885A308D313198A2E03707344A4093822299F31D0082EFA98EC4E6C89",
      "hex"
    )
    const createdSignature = BITBOX.Schnorr.sign(privateKey, message)
    console.log("The signature is: " + createdSignature.toString("hex"))
    // The signature is: 2a298dacae57395a15d0795ddbfd1dcb564da82b0f269bc70a74f8220429ba1d1e51a22ccec35599b8f266912281f8365ffc2d035a230434a1a64dc59f7013fd

### `verify`

Verify a 64-byte signature of a 32-byte message against the public key. Throws an `Error` if verification fails.

#### Arguments

1.  publicKey. `Buffer`
2.  message. `Buffer`
3.  signature. `Buffer`

#### Examples

    const Buffer = require("safe-buffer").Buffer
    const publicKey = Buffer.from(
      "02DFF1D77F2A671C5F36183726DB2341BE58FEAE1DA2DECED843240F7B502BA659",
      "hex"
    )
    const message = Buffer.from(
      "243F6A8885A308D313198A2E03707344A4093822299F31D0082EFA98EC4E6C89",
      "hex"
    )
    const signatureToVerify = Buffer.from(
      "2A298DACAE57395A15D0795DDBFD1DCB564DA82B0F269BC70A74F8220429BA1D1E51A22CCEC35599B8F266912281F8365FFC2D035A230434A1A64DC59F7013FD",
      "hex"
    )
    try {
      BITBOX.Schnorr.verify(publicKey, message, signatureToVerify)
      console.log("The signature is valid.")
    } catch (e) {
      console.error("The signature verification failed: " + e)
    }

### `batchVerify`

Verify a list of 64-byte signatures as a batch operation. Throws an `Error` if verification fails.

#### Arguments

1.  publicKeys. Array of `Buffer`s
2.  messages. Array of `Buffer`s
3.  signatures. Array of `Buffer`s

#### Examples

    const Buffer = require("safe-buffer").Buffer
    const publicKeys = [
      Buffer.from(
        "02DFF1D77F2A671C5F36183726DB2341BE58FEAE1DA2DECED843240F7B502BA659",
        "hex"
      ),
      Buffer.from(
        "03FAC2114C2FBB091527EB7C64ECB11F8021CB45E8E7809D3C0938E4B8C0E5F84B",
        "hex"
      ),
      Buffer.from(
        "026D7F1D87AB3BBC8BC01F95D9AECE1E659D6E33C880F8EFA65FACF83E698BBBF7",
        "hex"
      )
    ]
    const messages = [
      Buffer.from(
        "243F6A8885A308D313198A2E03707344A4093822299F31D0082EFA98EC4E6C89",
        "hex"
      ),
      Buffer.from(
        "5E2D58D8B3BCDF1ABADEC7829054F90DDA9805AAB56C77333024B9D0A508B75C",
        "hex"
      ),
      Buffer.from(
        "B2F0CD8ECB23C1710903F872C31B0FD37E15224AF457722A87C5E0C7F50FFFB3",
        "hex"
      )
    ]
    const signatures = [
      Buffer.from(
        "2A298DACAE57395A15D0795DDBFD1DCB564DA82B0F269BC70A74F8220429BA1D1E51A22CCEC35599B8F266912281F8365FFC2D035A230434A1A64DC59F7013FD",
        "hex"
      ),
      Buffer.from(
        "00DA9B08172A9B6F0466A2DEFD817F2D7AB437E0D253CB5395A963866B3574BE00880371D01766935B92D2AB4CD5C8A2A5837EC57FED7660773A05F0DE142380",
        "hex"
      ),
      Buffer.from(
        "68CA1CC46F291A385E7C255562068357F964532300BEADFFB72DD93668C0C1CAC8D26132EB3200B86D66DE9C661A464C6B2293BB9A9F5B966E53CA736C7E504F",
        "hex"
      )
    ]
    try {
      BITBOX.Schnorr.batchVerify(publicKeys, messages, signatures)
      console.log("The signatures are valid.")
    } catch (e) {
      console.error("The signature verification failed: " + e)
    }

### `nonInteractive`

Aggregates multiple signatures of different private keys over the same message into a single 64-byte signature using a scheme that is safe from rogue-key attacks.

This non-interactive scheme requires the knowledge of all private keys that are participating in the multi-signature creation.

#### Arguments

1.  privateKeys. Array of `BigInteger`s
2.  message `Buffer`

#### Result

aggregatedSignature `Buffer`

#### Examples

    const Buffer = require("safe-buffer").Buffer
    const BigInteger = require("bigi")

    const privateKey1 = BigInteger.fromHex(
      "B7E151628AED2A6ABF7158809CF4F3C762E7160F38B4DA56A784D9045190CFEF"
    )
    const privateKey2 = BigInteger.fromHex(
      "C90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B14E5C7"
    )
    const message = Buffer.from(
      "243F6A8885A308D313198A2E03707344A4093822299F31D0082EFA98EC4E6C89",
      "hex"
    )
    const aggregatedSignature = BITBOX.Schnorr.nonInteractive(
      [privateKey1, privateKey2],
      message
    )

    // verifying an aggregated signature
    const publicKey1 = Buffer.from(
      "02DFF1D77F2A671C5F36183726DB2341BE58FEAE1DA2DECED843240F7B502BA659",
      "hex"
    )
    const publicKey2 = Buffer.from(
      "03FAC2114C2FBB091527EB7C64ECB11F8021CB45E8E7809D3C0938E4B8C0E5F84B",
      "hex"
    )
    const X = BITBOX.Schnorr.pubKeyCombine([publicKey1, publicKey2])
    try {
      BITBOX.Schnorr.verify(X, message, aggregatedSignature)
      console.log("The signature is valid.")
    } catch (e) {
      console.error("The signature verification failed: " + e)
    }

### `computeEll`

Generate `ell` which is the hash over all public keys participating in a session.

#### Arguments

1.  publicKeys. Array of `BigInteger`s

#### Result

publicKeyHash `Buffer`

#### Examples

### `publicKeyCombine`

Creates the special rogue-key-resistant combined public key `P` by applying the MuSig coefficient to each public key `P_i` before adding them together.

#### Arguments

1.  publicKeys. Array of `Buffer`s
2.  publicKeyHash. `Buffer`

#### Result

X `Buffer`

#### Examples

### `sessionInitialize`

Creates a signing session. Each participant must create a session and must not share the content of the session apart from the commitment and later the nonce.

#### Arguments

1.  sessionId. `Buffer`
2.  privateKey. `BigInteger`
3.  message. `Buffer`
4.  pubKeyCombined. `Buffer`
5.  ell. `Buffer`
6.  idx. `number`

#### Result

session `Session`

#### Examples

### `sessionNonceCombine`

Combines multiple nonces `R_i` into the combined nonce `R`.

#### Arguments

1.  session. `Session`
2.  nonces. Array of `Buffer`s

#### Result

nonceCombined `Buffer`

#### Examples

### `partialSign`

Creates a partial signature `s_i` for a participant.

#### Arguments

1.  session. `Session`
2.  message. `Buffer`
3.  nonceCombined. `Buffer`
4.  publicKeyCombined. `Buffer`

#### Result

partialSignature `BigInteger`

#### Examples

### `partialSignatureVerify`

Verifies a partial signature `s_i` against the participant's public key `P_i`. Throws an `Error` if verification fails.

#### Arguments

1.  session. `Session`
2.  partialSig. `BigInteger`
3.  nonceCombined. `Buffer`
4.  idx. `number`
5.  publicKey. `Buffer`
6.  nonce. `Buffer`

#### Examples

### `partialSignaturesCombine`

Combines multiple partial signatures into a Schnorr signature `(s, R)` that can be verified against the combined public key `P`.

#### Arguments

1.  nonceCombined. `Buffer`
2.  partialSignatures. Array of `BigInteger`s

#### Result

signature `Buffer`

#### Examples

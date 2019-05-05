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

### `verify`

Verify a 64-byte signature of a 32-byte message against the public key. Throws an `Error` if verification fails.

#### Arguments

1.  publicKey. `Buffer`
2.  message. `Buffer`
3.  signature. `Buffer`

#### Examples

### `batchVerify`

Verify a list of 64-byte signatures as a batch operation. Throws an `Error` if verification fails.

#### Arguments

1.  publicKeys. Array of `Buffer`s
2.  messages. Array of `Buffer`s
3.  signatures. Array of `Buffer`s

#### Examples

### `nonInteractive`

Aggregates multiple signatures of different private keys over the same message into a single 64-byte signature using a scheme that is safe from rogue-key attacks.

This non-interactive scheme requires the knowledge of all private keys that are participating in the multi-signature creation.

#### Arguments

1.  privateKeys. Array of `BigInteger`s
2.  message `Buffer`

#### Result

aggregatedSignature `Buffer`

#### Examples

### `computeEll`

Generate `ell` which is the hash over all public keys participating in a session.

#### Arguments

1.  publicKeys. Array of `BigInteger`s

#### Result

publickKeyHash `Buffer`

#### Examples

### `pubKeyCombine`

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

### `partialSigVerify`

Verifies a partial signature `s_i` against the participant's public key `P_i`. Throws an `Error` if verification fails.

#### Arguments

1.  session. `Session`
2.  partialSig. `BigInteger`
3.  nonceCombined. `Buffer`
4.  idx. `number`
5.  publicKey. `Buffer`
6.  nonce. `Buffer`

#### Examples

### `partialSigCombine`

Combines multiple partial signatures into a Schnorr signature (s, R) that can be verified against the combined public key P.

#### Arguments

1.  nonceCombined. `Buffer`
2.  partialSigs. Array of `BigInteger`s

#### Result

signature `Buffer`

#### Examples

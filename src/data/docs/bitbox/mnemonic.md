---
title: Mnemonic
icon: elipses
ordinal: 4
---

### `generate`

Generate [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) mnemonic from entropy

#### Arguments

1.  randomBits `number`: number of random bits of entropy to use. The more bits the longer the mnemonic.
2.  mnemonic word list `array` `optional`: list of words to generate the mnemonic from

#### Result

mnemonic `string` a random mnemonic

#### Examples

      // generate 12 word mnemonic
      BITBOX.Mnemonic.generate(128);
      // boil lonely casino manage habit where total glory muffin name limit mansion

      // generate 15 word mnemonic
      BITBOX.Mnemonic.generate(160);
      // steak prevent estate save dance design close noise cheap season among train sleep ketchup gas

      // generate 18 word mnemonic
      BITBOX.Mnemonic.generate(192);
      // fever endorse purpose normal fashion desert blood robust prevent clean guard display raise virtual again unit banana rich

      // generate 21 word mnemonic
      BITBOX.Mnemonic.generate(224);
      // scan pink shock describe chicken edit budget exit camera morning awesome silk inner pair sea few flock walnut write mountain surface

      // generate 24 word mnemonic
      BITBOX.Mnemonic.generate(256);
      // disagree tide elbow citizen jazz cinnamon bridge certain april settle pact film always inmate border inform solution that submit produce cloth balcony upper maid

      // generate 12 french word mnemonic
      BITBOX.Mnemonic.generate(128, BITBOX.Mnemonic.wordLists().french);
      // annonce ampleur sanglier peser acheter cultiver abroger embellir résoudre dialogue grappin lanterne

### `fromEntropy`

Create mnemonic from entropy

#### Arguments

1.  randomBytes `Buffer`: buffer of random entropy. This entropy can be generated w/ BITBOX.Crypto.randomBytes.
2.  mnemonic word list `array` `optional`: list of words to generate the mnemonic from

#### Result

mnemonic `string` a random mnemonic

#### Examples

      // generate 16 bytes of entropy
      let entropy = BITBOX.Crypto.randomBytes(16);
      //
      // turn entropy to 12 word mnemonic
      BITBOX.Mnemonic.fromEntropy(entropy)
      // security question relief cruel nephew jump chest copper axis assist gift correct

      // generate 20 bytes of entropy
      let entropy = BITBOX.Crypto.randomBytes(20);
      //
      // turn entropy to 15 word mnemonic
      BITBOX.Mnemonic.fromEntropy(entropy)
      // impact hub pattern turkey cruel adult short moment make toe one actress roast yellow hurt

      // generate 24 bytes of entropy
      let entropy = BITBOX.Crypto.randomBytes(24);
      //
      // turn entropy to 18 word mnemonic
      BITBOX.Mnemonic.fromEntropy(entropy)
      // bid quantum chronic marriage swing affair record amateur enhance heart object mind spoon speak toast piece chef real

      // generate 28 bytes of entropy
      let entropy = BITBOX.Crypto.randomBytes(28);
      //
      // turn entropy to 21 word mnemonic
      BITBOX.Mnemonic.fromEntropy(entropy)
      // orchard rural giant okay tape pipe luggage clap bring wear ticket slot fiscal seminar crazy robot distance current dizzy swarm barrel

      // generate 32 bytes of entropy
      let entropy = BITBOX.Crypto.randomBytes(32);
      //
      // turn entropy to 24 word mnemonic
      BITBOX.Mnemonic.fromEntropy(entropy)
      // vibrant solution level obtain cheap damage october giant chalk cushion assist fossil spawn artist rice edit proof hotel process survey gas sausage mouse property

      // generate 16 bytes of entropy
      let entropy = BITBOX.Crypto.randomBytes(16);
      //
      // turn entropy to 12 japanese word mnemonic
      BITBOX.Mnemonic.fromEntropy(entropy.toString('hex'), BITBOX.Mnemonic.wordLists().japanese)
      // ぱそこん　にあう　にんめい　きどく　ちそう　せんきょ　かいが　きおく　いれる　いねむり　しいく　きかんしゃ

### `toEntropy`

Turn mnemonic to entropy

#### Arguments

1.  mnemonic `string`: a mnemonic to turn to entropy.
2.  mnemonic word list `array` `optional`: list of words the mnemonic was generated from

#### Result

entropy `Buffer` entropy encoded as buffer

#### Examples

      // turn 12 word mnemonic to entropy
      let mnemonic = 'security question relief cruel nephew jump chest copper axis assist gift correct';
      BITBOX.Mnemonic.toEntropy(mnemonic)
      //

      // turn 15 word mnemonic to entropy
      let mnemonic = 'impact hub pattern turkey cruel adult short moment make toe one actress roast yellow hurt';
      BITBOX.Mnemonic.toEntropy(mnemonic)
      //

      // turn 18 word mnemonic to entropy
      let mnemonic = 'bid quantum chronic marriage swing affair record amateur enhance heart object mind spoon speak toast piece chef real';
      BITBOX.Mnemonic.toEntropy(mnemonic)
      //

      // turn 21 word mnemonic to entropy
      let mnemonic = 'orchard rural giant okay tape pipe luggage clap bring wear ticket slot fiscal seminar crazy robot distance current dizzy swarm barrel';
      BITBOX.Mnemonic.toEntropy(mnemonic)
      //

      // turn 24 word mnemonic to entropy
      let mnemonic = 'vibrant solution level obtain cheap damage october giant chalk cushion assist fossil spawn artist rice edit proof hotel process survey gas sausage mouse property';
      BITBOX.Mnemonic.toEntropy(mnemonic)
      //

### `validate`

Validate mnemonic

#### Arguments

1.  mnemonic `string` mnemonic phrase
2.  mnemonic word list `array`: list of words the mnemonic was generated from

#### Result

valid `String`

#### Examples

      BITBOX.Mnemonic.validate('ca', BITBOX.Mnemonic.wordLists().english)
      // ca is not in wordlist, did you mean cabbage?

      BITBOX.Mnemonic.validate('boil lonely casino manage habit where total glory muffin name limit mansion', BITBOX.Mnemonic.wordLists().english)
      // Valid mnemonic

      BITBOX.Mnemonic.validate('boil lonely casino manage habit where total glory muffin name limit mansion boil lonely casino manage habit where total glory muffin name limit mansion', BITBOX.Mnemonic.wordLists().english)
      // Invalid mnemonic

### `toSeed`

Create root seed from mnemonic

#### Arguments

1.  mnemonic `String` mnemonic phrase
2.  passphrase `String` `optional`: passphrase. Defaults to ""

#### Result

rootSeed `Buffer`

#### Examples

      BITBOX.Mnemonic.toSeed('enable stem left method one submit coach bid inspire cluster armed bracket')
      //

      BITBOX.Mnemonic.toSeed('vendor talk alone sick balance tissue number armor frequent plug transfer chest', 'password');
      //

      BITBOX.Mnemonic.toSeed('idea relax weird defense body bronze champion ancient vocal peanut similar dose grit company peasant gate sunset deal library act include penalty annual main', '');
      //

      BITBOX.Mnemonic.toSeed('bus aware census desk orphan zebra fashion host try muscle pig close jealous slice elegant prison reject ship great program trumpet syrup tray remove', '');
      //

      BITBOX.Mnemonic.toSeed('frost deliver coin clutch upon round scene wonder various wise luggage country', 'yayayayay');
      //

### `wordLists`

Return mnemonic word lists

#### Result

wordlists `object` an object with wordlists in the following languages english (default), japanese, chinese simplified, chinese traditional, french, italian, japanese, korean, spanish

#### Examples

      BITBOX.Mnemonic.wordLists();
      // {
      //   EN: [],
      //   JA: [],
      //   chinese_simplified: [],
      //   chinese_traditional: [],
      //   english: [],
      //   french: [],
      //   italian: [],
      //   japanese: [],
      //   korean: [],
      //   spanish: []
      // }

### `toKeypairs`

Returns an array of privateKeyWIF/publicAddress pairs. It generates the addresses as the nth external change address of the first account from that mnemonic w/ this derivation path: `m/44’/145’/0’/0/n`

#### Arguments

1.  mnemonic `String`: mnemonic to use
2.  numberOfKeypairs `Number` `optional`: number of keypairs to return. Default is 1
3.  regtest `Boolean` optional: return regtest key pairs

#### Result

keypairs `Array` array of privateKeyWIF/publicAddress pairs

#### Examples

      // First create a mnemonic from 32 bytes of random entropy
      let entropy = BITBOX.Crypto.randomBytes(32);
      //
      let mnemonic = BITBOX.Mnemonic.fromEntropy(entropy);
      // symptom owner ridge follow buffalo choose stem depend million jar lemon claw color credit remove model pudding slot fiber west heavy ranch bird wet

      // Then call toKeypairs and pass in your mnemonic and how many keypairs you'd like
      BITBOX.Mnemonic.toKeypairs(mnemonic, 5)
      // [ { privateKeyWIF: 'Kz6b1TszeUGaypUpRCnfD2L17bQSW93o4j3VMpvT5e5BqaF9XkyP',
      // address: 'bitcoincash:qp8a4vzfk9kstwsl4ud4ym3z2tckdf7a4gfwkxvtfq' },
      // { privateKeyWIF: 'L5ZHQ2BdTQaTq2A8HNsdkHYKPLsfrHgvJyrVxHFFZyN9K3fmeoiG',
      // address: 'bitcoincash:qq5nxh27up6hcm0nn36lxtu7n8a7l6jsj52s8dvtex' },
      // { privateKeyWIF: 'KwyY3Z7STwbxnmQXe1vVmXhT8Y3W1BJQpRgteRhTWCyvvdro2j33',
      // address: 'bitcoincash:qzj9n9jmnmyeqfdc5k65kxta3c7ch0g3wudeyjeg3y' },
      // { privateKeyWIF: 'KxMG2mjL8DZQCaoXz8aFw5XYqguKiDHBb16JwDQMGa7ga7kfy9cE',
      // address: 'bitcoincash:qrhj0lesz6sn7l4hc5arh5tt8k583ahdaun6mcdjx8' },
      // { privateKeyWIF: 'Kz3qqJ8GFSSbDrBqtV7mfhBoDPkSmMKtp7Yk62psDgmRjyU8id8J',
      // address: 'bitcoincash:qp8xjllc75c2hgrpjy3f6kegtfqgmn72dqs0y20anv' } ]

### `findNearestWord`

Returns nearest matching word from provided word list

#### Arguments

1.  word `String`: mnemonic to use
2.  wordlist `Array`: wordlist to search

#### Result

word `String` nearest matching word from provided wordlist

#### Examples

      // english
      let word = 'ab';
      let wordlist = BITBOX.Mnemonic.wordLists().english;
      BITBOX.Mnemonic.findNearestWord(word, wordlist);
      // abandon

      // french
      let word = 'octu';
      let wordlist = BITBOX.Mnemonic.wordLists().french;
      BITBOX.Mnemonic.findNearestWord(word, wordlist);
      // octupler

      // spanish
      let word = 'foobaro';
      let wordlist = BITBOX.Mnemonic.wordLists().spanish;
      BITBOX.Mnemonic.findNearestWord(word, wordlist);
      // forro

      // italian
      let word = 'nv';
      let wordlist = BITBOX.Mnemonic.wordLists().italian;
      BITBOX.Mnemonic.findNearestWord(word, wordlist);
      // neve

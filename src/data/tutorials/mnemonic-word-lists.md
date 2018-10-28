---
title: Mmemonic Word Lists
author: Gabriel Cardona
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

Bitcoin Cash is meant for people all over EARTH. Most of those people don’t speak english. That’s why today we’re releasing `wordLists` so you can generate mnemonics in 8 different languages to help spread $BCH to people all over the planet.

## wordLists

[BITBOX.Mnemonic](/bitbox/docs/mnemonic/#validate) now has a [wordLists](/bitbox/docs/mnemonic/#wordlists) method which returns an object w/ the following keys:

```javascript
{
    chinese_simplified: [],
    chinese_traditional: [],
    english: [],
    french: [],
    italian: [],
    japanese: [],
    korean: [],
    spanish: []
}
```

Each of these keys contains an array w/ 2048 words in that language. 4 `BITBOX.Mnemonic` methods now accept that wordlist as their 2nd argument and will create and validate mnemonics in those languages.

The methods which now accepts a `wordslist` argument are

- [generate](/bitbox/docs/mnemonic/#generate)
- [fromEntropy](/bitbox/docs/mnemonic/#fromentropy)
- [toEntropy](/bitbox/docs/mnemonic/#toentropy)
- [validate](/bitbox/docs/mnemonic/#validate)

### Examples

#### Chinese simplified

```javascript
BITBOX.Mnemonic.generate(128, BITBOX.Mnemonic.wordLists().chinese_simplified)
// 南 英 钉 油 冷 馏 扶 搬 特 规 波 顺
```

#### Chinese traditional

```javascript
BITBOX.Mnemonic.generate(128, BITBOX.Mnemonic.wordLists().chinese_traditional)
// 蒸 融 陣 默 甲 蓋 躺 靈 原 富 恆 份
```

#### French

```javascript
BITBOX.Mnemonic.generate(128, BITBOX.Mnemonic.wordLists().french)
// annonce ampleur sanglier peser acheter cultiver abroger embellir résoudre dialogue grappin lanterne
```

#### Italian

```javascript
BITBOX.Mnemonic.generate(128, BITBOX.Mnemonic.wordLists().italian)
// raschiato comodo petalo lira ipotesi mondina scettro ritmico bacino abrasivo attrito eletto
```

#### Japanese

```javascript
BITBOX.Mnemonic.generate(128, BITBOX.Mnemonic.wordLists().japanese)
// かいが　こける　つねづね　けおりもの　けむり　せんろ　しゃくほう　けんみん　あわせる　ひつぎ　みてい　たいない
```

#### Korean

```javascript
BITBOX.Mnemonic.generate(128, BITBOX.Mnemonic.wordLists().korean)
// 회색 제공 적성 만일 당장 확인 사람 화장 숫자 여군 대도시 하순
```

#### Spanish

```javascript
BITBOX.Mnemonic.generate(128, BITBOX.Mnemonic.wordLists().spanish)
// combate hundir trauma edad élite medio grave pie aduana donar pimienta bodega
```

## BITBOX GUI

BITBOX GUI has also been updated to generate mnemonics in all of the above languages. There is now a language selector on the configuration screen. Select the language that you’d like to use and restart your BITBOX.

![](https://bigearth.github.io/bitblog/assets/language-select.png)

### Chinese simplified

![](https://bigearth.github.io/bitblog/assets/chinese-simplified.png)

### Chinese traditional

![](https://bigearth.github.io/bitblog/assets/chinese-traditional.png)

### French

![](https://bigearth.github.io/bitblog/assets/french.png)

### Italian

![](https://bigearth.github.io/bitblog/assets/italian.png)

### Japanese

![](https://bigearth.github.io/bitblog/assets/japanese.png)

### Korean

![](https://bigearth.github.io/bitblog/assets/korean.png)

### Spanish

![](https://bigearth.github.io/bitblog/assets/spanish.png)

## Summary

With `wordLists` it’s now easier than ever to generate mnemonics in languages other than english to help spread $BCH all over the EARTH.

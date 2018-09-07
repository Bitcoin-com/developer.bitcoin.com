---
title: What is Bitcoin Cash (BCH)
chapter: 1
updatedAt: 2018-07-06
---

## Introduction

Bitcoin Cash is a collection of concepts and technologies that form the basis of a digital money ecosystem. Units of currency called bitcoins are used to store and transmit value among participants in the Bitcoin Cash network. Bitcoin Cash users communicate with each other using the Bitcoin Cash protocol primarily via the Internet, although other transport networks can also be used. The Bitcoin Cash protocol stack, available as open source software, can be run on a wide range of computing devices, including laptops and smartphones, making the technology easily accessible.

Users can transfer bitcoins over the network to do just about anything that can be done with conventional currencies, including buy and sell goods, send money to people or organizations, or extend credit. Bitcoins can be purchased, sold, and exchanged for other currencies at specialized currency exchanges. Bitcoin Cash in a sense is the perfect form of money for the Internet because it is fast, secure, and borderless.

Unlike traditional currencies, bitcoins are entirely virtual. There are no physical coins or even digital coins per se. The coins are implied in transactions that transfer value from sender to recipient. Users of Bitcoin Cash own keys that allow them to prove ownership of transactions in the Bitcoin Cash network, unlocking the value to spend it and transfer it to a new recipient. Those keys are often stored in a digital wallet on each user’s computer. Possession of the key that unlocks a transaction is the only prerequisite to spending bitcoins, putting the control entirely in the hands of each user.

Bitcoin Cash is a distributed, peer-to-peer system. As such there is no "central" server or point of control. Bitcoins are created through a process called "mining," which involves competing to find solutions to a mathematical problem while processing Bitcoin Cash transactions. Any participant in the Bitcoin Cash network (i.e., anyone using a device running the full Bitcoin Cash protocol stack) may operate as a miner, using their computer’s processing power to verify and record transactions. Every 10 minutes on average, someone is able to validate the transactions of the past 10 minutes and is rewarded with brand new bitcoins. Essentially, Bitcoin Cash mining decentralizes the currency-issuance and clearing functions of a central bank and replaces the need for any central bank with this global competition.

The Bitcoin Cash protocol includes built-in algorithms that regulate the mining function across the network. The difficulty of the processing task that miners must perform—to successfully record a block of transactions for the Bitcoin Cash network—is adjusted dynamically so that, on average, someone succeeds every 10 minutes regardless of how many miners (and CPUs) are working on the task at any moment. The protocol also halves the rate at which new bitcoins are created every four years, and limits the total number of bitcoins that will be created to a fixed total of 21 million coins. The result is that the number of bitcoins in circulation closely follows an easily predictable curve that reaches 21 million by the year 2140. Due to Bitcoin Cash’s diminishing rate of issuance, over the long term, the Bitcoin Cash currency is deflationary. Furthermore, Bitcoin Cash cannot be inflated by "printing" new money above and beyond the expected issuance rate.

Behind the scenes, Bitcoin Cash is also the name of the protocol, a network, and a distributed computing innovation. The Bitcoin Cash currency is really only the first application of this invention. As a developer, I see Bitcoin Cash as akin to the Internet of money, a network for propagating value and securing the ownership of digital assets via distributed computation. There’s a lot more to Bitcoin Cash than first meets the eye.

In this chapter we’ll get started by explaining some of the main concepts and terms, getting the necessary software, and using Bitcoin Cash for simple transactions. In following chapters we’ll start unwrapping the layers of technology that make Bitcoin Cash possible and examine the inner workings of the Bitcoin Cash network and protocol.

### Digital Currencies Before Bitcoin Cash

The emergence of viable digital money is closely linked to developments in cryptography. This is not surprising when one considers the fundamental challenges involved with using bits to represent value that can be exchanged for goods and services. Two basic questions for anyone accepting digital money are:

1. Can I trust the money is authentic and not counterfeit?
2. Can I be sure that no one else can claim that this money belongs to them and not me? (Aka the “double-spend” problem.)

Issuers of paper money are constantly battling the counterfeiting problem by using increasingly sophisticated papers and printing technology. Physical money addresses the double-spend issue easily because the same paper note cannot be in two places at once. Of course, conventional money is also often stored and transmitted digitally. In these cases, the counterfeiting and double-spend issues are handled by clearing all electronic transactions through central authorities that have a global view of the currency in circulation. For digital money, which cannot take advantage of esoteric inks or holographic strips, cryptography provides the basis for trusting the legitimacy of a user’s claim to value. Specifically, cryptographic digital signatures enable a user to sign a digital asset or transaction proving the ownership of that asset. With the appropriate architecture, digital signatures also can be used to address the double-spend issue.

When cryptography started becoming more broadly available and understood in the late 1980s, many researchers began trying to use cryptography to build digital currencies. These early digital currency projects issued digital money, usually backed by a national currency or precious metal such as gold.

Although these earlier digital currencies worked, they were centralized and, as a result, they were easy to attack by governments and hackers. Early digital currencies used a central clearinghouse to settle all transactions at regular intervals, just like a traditional banking system. Unfortunately, in most cases these nascent digital currencies were targeted by worried governments and eventually litigated out of existence. Some failed in spectacular crashes when the parent company liquidated abruptly. To be robust against intervention by antagonists, whether legitimate governments or criminal elements, a decentralized digital currency was needed to avoid a single point of attack. Bitcoin Cash is such a system, completely decentralized by design, and free of any central authority or point of control that can be attacked or corrupted.

Bitcoin Cash represents the culmination of decades of research in cryptography and distributed systems and includes four key innovations brought together in a unique and powerful combination. Bitcoin Cash consists of:

- A decentralized peer-to-peer network (the Bitcoin Cash protocol)
- A public transaction ledger (the blockchain)
- A decentralized mathematical and deterministic currency issuance (distributed mining)
- A decentralized transaction verification system (transaction script)

## History of Bitcoin Cash

Bitcoin Cash was invented in 2008 with the publication of a paper titled ["Bitcoin: A Peer-to-Peer Electronic Cash System,"](https://bitcoin.com/bitcoin.pdf) written under the alias of Satoshi Nakamoto. Nakamoto combined several prior inventions such as b-money and HashCash to create a completely decentralized electronic cash system that does not rely on a central authority for currency issuance or settlement and validation of transactions. The key innovation was to use a distributed computation system (called a "proof-of-work" algorithm) to conduct a global "election" every 10 minutes, allowing the decentralized network to arrive at _consensus_ about the state of transactions. This elegantly solves the issue of double-spend where a single currency unit can be spent twice. Previously, the double-spend problem was a weakness of digital currency and was addressed by clearing all transactions through a central clearinghouse.

The bitcoin network started in 2009, based on a reference implementation published by Nakamoto and since revised by many other programmers. The distributed computation that provides security and resilience for bitcoin has increased exponentially, and now exceeds that combined processing capacity of the world’s top super-computers. Bitcoin Cash’s total market value is estimated at between 5 billion and 10 billion US dollars, depending on the bitcoin-to-dollar exchange rate. The largest transaction processed so far by the network was 150 million US dollars, transmitted instantly and processed without any fees.

Satoshi Nakamoto withdrew from the public in April of 2011, leaving the responsibility of developing the code and network to a thriving group of volunteers. The identity of the person or people behind bitcoin is still unknown. However, neither Satoshi Nakamoto nor anyone else exerts control over the bitcoin system, which operates based on fully transparent mathematical principles. The invention itself is groundbreaking and has already spawned new science in the fields of distributed computing, economics, and econometrics.

#### A Solution to a Distributed Computing Problem

Satoshi Nakamoto’s invention is also a practical solution to a previously unsolved problem in distributed computing, known as the "Byzantine Generals' Problem." Briefly, the problem consists of trying to agree on a course of action by exchanging information over an unreliable and potentially compromised network. Satoshi Nakamoto’s solution, which uses the concept of proof-of-work to achieve consensus without a central trusted authority, represents a breakthrough in distributed computing science and has wide applicability beyond currency. It can be used to achieve consensus on decentralized networks to prove the fairness of elections, lotteries, asset registries, digital notarization, and more.

### Bitcoin Cash Uses, Users, and Their Stories

Bitcoin Cash is a technology, but it expresses money that is fundamentally a language for exchanging value between people. Let’s look at the people who are using bitcoin and some of the most common uses of the currency and protocol through their stories. We will reuse these stories throughout the book to illustrate the real-life uses of digital money and how they are made possible by the various technologies that are part of bitcoin.

#### North American low-value retail

Alice lives in Northern California’s Bay Area. She has heard about bitcoin from her techie friends and wants to start using it. We will follow her story as she learns about bitcoin, acquires some, and then spends some of her bitcoin to buy a cup of coffee at Bob’s Cafe in Palo Alto. This story will introduce us to the software, the exchanges, and basic transactions from the perspective of a retail consumer.

#### North American high-value retail

Carol is an art gallery owner in San Francisco. She sells expensive paintings for bitcoin. This story will introduce the risks of a "51%" consensus attack for retailers of high-value items.

#### Offshore contract services

Bob, the cafe owner in Palo Alto, is building a new website. He has contracted with an Indian web developer, Gopesh, who lives in Bangalore, India. Gopesh has agreed to be paid in bitcoin. This story will examine the use of bitcoin for outsourcing, contract services, and international wire transfers.

#### Charitable donations

Eugenia is the director of a children’s charity in the Philippines. Recently she has discovered bitcoin and wants to use it to reach a whole new group of foreign and domestic donors to fundraise for her charity. She’s also investigating ways to use bitcoin to distribute funds quickly to areas of need. This story will show the use of bitcoin for global fundraising across currencies and borders and the use of an open ledger for transparency in charitable organizations.

#### Import/export

Mohammed is an electronics importer in Dubai. He’s trying to use bitcoin to buy electronics from the US and China for import into the UAE to accelerate the process of payments for imports. This story will show how bitcoin can be used for large business-to-business international payments tied to physical goods.

#### Mining for bitcoin

Jing is a computer engineering student in Shanghai. He has built a "mining" rig to mine for bitcoins, using his engineering skills to supplement his income. This story will examine the "industrial" base of bitcoin: the specialized equipment used to secure the bitcoin network and issue new currency.

Each of these stories is based on real people and real industries that are currently using bitcoin to create new markets, new industries, and innovative solutions to global economic issues.

## Getting Started

To join the bitcoin network and start using the currency, all a user has to do is download an application or use a web application. Because bitcoin is a standard, there are many implementations of the bitcoin client software. There is also a reference implementation, also known as the Satoshi client, which is managed as an open source project by a team of developers and is derived from the original implementation written by Satoshi Nakamoto.

The three main forms of bitcoin clients are:

### Full client

A full client, or "full node," is a client that stores the entire history of bitcoin transactions (every transaction by every user, ever), manages the users' wallets, and can initiate transactions directly on the bitcoin network. This is similar to a standalone email server, in that it handles all aspects of the protocol without relying on any other servers or third-party services.

### Lightweight client

A lightweight client stores the user’s wallet but relies on third-party–owned servers for access to the bitcoin transactions and network. The light client does not store a full copy of all transactions and therefore must trust the third-party servers for transaction validation. This is similar to a standalone email client that connects to a mail server for access to a mailbox, in that it relies on a third party for interactions with the network.

### Web client

Web clients are accessed through a web browser and store the user’s wallet on a server owned by a third party. This is similar to webmail in that it relies entirely on a third-party server.

## Mobile Bitcoin Cash

Mobile clients for smartphones, such as those based on the Android system, can either operate as full clients, lightweight clients, or web clients. Some mobile clients are synchronized with a web or desktop client, providing a multiplatform wallet across multiple devices but with a common source of funds.

The choice of bitcoin client depends on how much control the user wants over funds. A full client will offer the highest level of control and independence for the user, but in turn puts the burden of backups and security on the user. On the other end of the range of choices, a web client is the easiest to set up and use, but the trade-off with a web client is that counterparty risk is introduced because security and control is shared with the user and the owner of the web service. If a web-wallet service is compromised, as many have been, the users can lose all their funds. Conversely, if users have a full client without adequate backups, they might lose their funds through a computer mishap.

For the purposes of this book, we will be demonstrating the use of a variety of downloadable bitcoin clients, from the reference implementation (the Satoshi client) to web wallets. Some of the examples will require the use of the reference client, which, in addition to being a full client, also exposes APIs to the wallet, network, and transaction services. If you are planning to explore the programmatic interfaces into the bitcoin system, you will need the reference client.

#### Quick Start

Alice, who we introduced in [Bitcoin Cash Uses, Users, and Their Stories](#user-stories), is not a technical user and only recently heard about bitcoin from a friend. She starts her journey by visiting the website [bitcoin.com](http://www.bitcoin.com), where she finds a selection of wallets.

![Bitcoin.com's wallets](/images/mastering-bitcoin-cash/msbt_01_wallets.png)

Alice follows a link from the bitcoin.com site to download and install a wallet on her desktop. Bitcoin.com’s wallet is available for Windows, MacOS and Linux desktops as well as iOS and Android mobile devices.

<tip nature="warning">
  Bitcoin Cash wallets can often be protected by a password or passphrase. There are many bad actors attempting to break weak passwords, so take care to select one that cannot be easily broken. Use a combination of upper and lowercase characters, numbers, and symbols. Avoid personal information such as birth dates or names of sports teams. Avoid any words commonly found in dictionaries, in any language. If you can, use a password generator to create a completely random password that is at least 12 characters in length. Remember: Bitcoin Cash is money and can be instantly moved anywhere in the world. If it is not well protected, it can be easily stolen.
</tip>

Once Alice has downloaded and installed the Bitcoin.com wallet, she runs it and is greeted by a Welcome screen, as shown in [The Bitcoin.com wallet Welcome screen](#welcome).

<spacer></spacer>
![Welcome](/images/mastering-bitcoin-cash/msbt_01_welcome.png)
<image-caption>Figure 1. The Bitcoin.com wallet Welcome screen</image-caption>

The wallet automatically creates a new Bitcoin Cash address for Alice, which Alice can see by clicking the Receive tab shown in [Alice’s new Bitcoin Cash address, in the Receive tab of the Bitcoin.com wallet](#request).

<spacer></spacer>
![Receive](/images/mastering-bitcoin-cash/msbt_01_receive.png)
<image-caption>Figure 2. Alice’s new Bitcoin Cash address, in the Receive tab of the Bitcoin.com Wallet</image-caption>

The most important part of this screen is Alice’s _Bitcoin Cash address_. Like an email address, Alice can share this address and anyone can use it to send money directly to her new wallet. On the screen it appears as a long string of letters and numbers: bitcoincash:qp0fxfqz4hjw7jsghxjpthc04ukzjv324s956a6x46. Next to the wallet’s bitcoin address is a QR code, a form of barcode that contains the same information in a format that can be scanned by a smartphone camera. The QR code is the black-and-white square in the middle of the window. Alice can copy the Bitcoin Cash address or the QR code onto her clipboard by clicking either of each of them.

Alice can also print the QR code as a way to easily give her address to others without them having to type the long string of letters and numbers.

<tip>
  Bitcoin Cash addresses start with the letter <pre>q</pre> or <pre>p</pre>. Optionally they may begin with a <pre>bitcoincash:</pre> prefix. Like email addresses, they can be shared with other Bitcoin Cash users who can use them to send Bitcoin Cash directly to your wallet. Unlike email addresses, you can create new addresses as often as you like, all of which will direct funds to your wallet. A wallet is simply a collection of addresses and the keys that unlock the funds within. You can increase your privacy by using a different address for every transaction. There is practically no limit to the number of addresses a user can create.
</tip>

Alice is now ready to start using her new Bitcoin Cash wallet.

#### Getting Your First Bitcoin Cash

Bitcoin.com offers a faucet where you can get your first Bitcoin Cash for free. Go to [free.bitcoin.com](https://free.bitcoin.com/), sign in with your google account (to prevent abuse of the faucet) and enter your address and click “Receive Bitcoin Cash”.
<spacer></spacer>
![Faucet 1](/images/mastering-bitcoin-cash/msbt_01_faucet_1.png)
<image-caption>Nearly instantly you’ll see Bitcoin Cash arrive in your wallet</image-caption>
<spacer></spacer>
![Faucet 2](/images/mastering-bitcoin-cash/msbt_01_faucet_2.png)
<spacer></spacer>

There are five other methods for getting Bitcoin Cash as a new user:

- Buy from an exchange such as [Coinbase](http://coinbase.com/)
- Find a friend who has Bitcoin Cash and buy some from him directly. Many Bitcoin Cash users start this way.
- Use a classified service such as [localbitcoincash.org](https://www.localbitcoincash.org/) to find a seller in your area to buy Bitcoin Cash for cash in an in-person transaction.
- Sell a product or service for Bitcoin Cash. If you’re a programmer, sell your programming skills.
- Use a Bitcoin Cash ATM in your city. Find a Bitcoin Cash ATM close to you using an online map from [coinatmradar](https://coinatmradar.com/).

#### Sending and Receiving Bitcoin Cash

Alice has created her Bitcoin Cash wallet and she is now ready to receive funds. Her wallet application randomly generated a private key together with its corresponding bitcoin cash address. At this point, her Bitcoin Cash address is not known to the network or "registered" with any part of the Bitcoin Cash system. Her address is simply a number that corresponds to a key that she can use to control access to the funds. There is no account or association between that address and an account. Until the moment this address is referenced as the recipient of value in a transaction posted on the Bitcoin Cash ledger (the blockchain), it is simply part of the vast number of possible addresses that are "valid" in Bitcoin Cash. Once it has been associated with a transaction, it becomes part of the known addresses in the network and Alice can check its balance on the public ledger.

Alice meets her friend Joe, who introduced her to Bitcoin Cash, at a local restaurant so they can exchange some US dollars and put some Bitcoin Cash into her account. She has brought a printout of her address and the QR code as displayed in her bitcoin cash wallet. There is nothing sensitive, from a security perspective, about the Bitcoin Cash address. It can be posted anywhere without risking the security of her account.

Alice wants to convert just 10 US dollars into Bitcoin Cash, so as not to risk too much money on this new technology. She gives Joe a $10 bill and the printout of her address so that Joe can send her the equivalent amount of Bitcoin Cash.

Next, Joe has to figure out the exchange rate so that he can give the correct amount of Bitcoin Cash to Alice. There are hundreds of applications and websites that can provide the current market rate. We’ use the [Bitcoin.com Bitcoin Cash Converter](https://tools.bitcoin.com/bitcoin-cash-converter/) from Bitcoin.com.

![converter](/images/mastering-bitcoin-cash/msbt_01_converter.png)
<image-caption>Figure 3. Bitcoin Cash price converter from Bitcoin.com</image-caption>

Joe determines the price of bitcoin to be approximately 725 US dollars per Bitcoin Cash. At that rate he should give Alice 0.0138 Bitcoin Cash, in return for the 10 US dollars she gave him.

Once Joe has established a fair exchange price, he opens his mobile wallet application and selects to "send" bitcoin. Alice's wallet automatically generated a fresh receive address after her previous transaction. Joe scans the barcode with his smartphone camera so that he doesn’t have to type in Alice’s bitcoin address (bitcoincash:qqsrpw5n5qwqav285t09tcjxy0nyjyh9ls0tyfu9ym), which is quite long and difficult to type. The mobile wallet application fills in the bitcoin address and Joe can check that it scanned correctly by comparing a few digits from the address with the address on Alice's wallet.

Joe then enters the bitcoin value for the transaction, 0.0138 bitcoin. He carefully checks to make sure he has entered the correct amount, because he is about to transmit money and any mistake could be costly. Finally, he presses Send to transmit the transaction. Joe’s mobile bitcoin wallet constructs a transaction that assigns 0.0138 bitcoin to the address provided by Alice, sourcing the funds from Joe’s wallet and signing the transaction with Joe’s private keys. This tells the Bitcoin Cash network that Joe has authorized a transfer of value from one of his addresses to Alice’s new address. As the transaction is transmitted via the peer-to-peer protocol, it quickly propagates across the bitcoin cash network. In less than a second, most of the well-connected nodes in the network receive the transaction and see Alice’s address for the first time.

![bought](/images/mastering-bitcoin-cash/msbt_01_bought.png)

If Alice has a smartphone or laptop with her, she will also be able to see the transaction. The Bitcoin Cash ledger—a constantly growing file that records every Bitcoin Cash transaction that has ever occurred—is public, meaning that all she has to do is look up her own address and see if any funds have been sent to it. She can do this quite easily at the explorer.bitcoin.com/bch website by entering her address in the search box. The website will show her a [page](https://explorer.bitcoin.com/bch/address/13wCzsosQfVSt86RNT1tegUKFhxmnpzoxw) listing all the transactions to and from that address. If Alice is watching that page, it will update to show a new transaction transferring 0.10 bitcoin to her balance soon after Joe hits Send.

### Confirmations

At first, Alice’s address will show the transaction from Joe as "Unconfirmed." This means that the transaction has been propagated to the network but has not yet been included in the bitcoin transaction ledger, known as the blockchain. To be included, the transaction must be "picked up" by a miner and included in a block of transactions. Once a new block is created, in approximately 10 minutes, the transactions within the block will be accepted as "confirmed" by the network and can be spent. The transaction is seen by all instantly, but it is only "trusted" by all when it is included in a newly mined block.

Alice is now the proud owner of 0.0138 Bitcoin Cash that she can spend. In the next chapter we will look at her first purchase with Bitcoin Cash, and examine the underlying transaction and propagation technologies in more detail.

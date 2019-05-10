---
title: The Bitcoin Cash network
chapter: 5
---

### Peer-to-Peer Network Architecture

Bitcoin Cash is structured as a peer-to-peer network architecture on top of the Internet. The term peer-to-peer, or P2P, means that the computers that participate in the network are peers to each other, that they are all equal, that there are no "special" nodes, and that all nodes share the burden of providing network services. The network nodes interconnect in a mesh network with a "flat" topology. There is no server, no centralized service, and no hierarchy within the network. Nodes in a peer-to-peer network both provide and consume services at the same time with reciprocity acting as the incentive for participation. Peer-to-peer networks are inherently resilient, decentralized, and open. The preeminent example of a P2P network architecture was the early Internet itself, where nodes on the IP network were equal. Today’s Internet architecture is more hierarchical, but the Internet Protocol still retains its flat-topology essence. Beyond Bitcoin Cash, the largest and most successful application of P2P technologies is file sharing with Napster as the pioneer and BitTorrent as the most recent evolution of the architecture.

Bitcoin Cash’s P2P network architecture is much more than a topology choice. Bitcoin Cash is a peer-to-peer digital cash system by design, and the network architecture is both a reflection and a foundation of that core characteristic. Decentralization of control is a core design principle and that can only be achieved and maintained by a flat, decentralized P2P consensus network.

The term "Bitcoin Cash network" refers to the collection of nodes running the Bitcoin Cash P2P protocol. In addition to the Bitcoin Cash P2P protocol, there are other protocols such as Stratum, which are used for mining and lightweight or mobile wallets. These additional protocols are provided by gateway routing servers that access the Bitcoin Cash network using the Bitcoin Cash P2P protocol, and then extend that network to nodes running other protocols. For example, Stratum servers connect Stratum mining nodes via the Stratum protocol to the main Bitcoin Cash network and bridge the Stratum protocol to the Bitcoin Cash P2P protocol. We use the term "extended Bitcoin Cash network" to refer to the overall network that includes the Bitcoin Cash P2P protocol, pool-mining protocols, the Stratum protocol, and any other related protocols connecting the components of the Bitcoin Cash system.

### Nodes Types and Roles

Although nodes in the Bitcoin Cash P2P network are equal, they may take on different roles depending on the functionality they are supporting. A Bitcoin Cash node is a collection of functions: routing, the blockchain database, mining, and wallet services. A full node with all four of these functions is shown in [A Bitcoin Cash network node with all four functions: wallet, miner, full blockchain database, and network routing](#full_node_reference).

<anchor name="full_node_reference"></anchor>
<spacer></spacer>
![FullNodeReferenceClient_Small](/images/mastering-bitcoin-cash/msbt_0601.png)
<image-caption>Figure 1. A Bitcoin Cash network node with all four functions: wallet, miner, full blockchain database, and network routing</image-caption>
<spacer></spacer>

All nodes include the routing function to participate in the network and might include other functionality. All nodes validate and propagate transactions and blocks, and discover and maintain connections to peers. In the full-node example in [A Bitcoin Cash network node with all four functions: wallet, miner, full blockchain database, and network routing](#full_node_reference), the routing function is indicated by an orange circle named "Network Routing Node."

Some nodes, called full nodes, also maintain a complete and up-to-date copy of the blockchain. Full nodes can autonomously and authoritatively verify any transaction without external reference. Some nodes maintain only a subset of the blockchain and verify transactions using a method called _simplified payment verification_, or SPV. These nodes are known as SPV or lightweight nodes. In the full-node example in the figure, the full-node blockchain database function is indicated by a blue circle named "Full Blockchain." In [The extended Bitcoin Cash network showing various node types, gateways, and protocols](#bitcoin_network), SPV nodes are drawn without the blue circle, showing that they do not have a full copy of the blockchain.

Mining nodes compete to create new blocks by running specialized hardware to solve the proof-of-work algorithm. Some mining nodes are also full nodes, maintaining a full copy of the blockchain, while others are lightweight nodes participating in pool mining and depending on a pool server to maintain a full node. The mining function is shown in the full node as a black circle named "Miner."

User wallets might be part of a full node, as is usually the case with desktop Bitcoin Cash clients. Increasingly, many user wallets, especially those running on resource-constrained devices such as smartphones, are SPV nodes. The wallet function is shown in [A Bitcoin Cash network node with all four functions: wallet, miner, full blockchain database, and network routing](#full_node_reference) as a green circle named "Wallet".

In addition to the main node types on the Bitcoin Cash P2P protocol, there are servers and nodes running other protocols, such as specialized mining pool protocols and lightweight client-access protocols.

[Different types of nodes on the extended Bitcoin Cash network](#node_type_ledgend) shows the most common node types on the extended Bitcoin Cash network.

### The Extended Bitcoin Cash Network

The main Bitcoin Cash network, running the Bitcoin Cash P2P protocol, consists of thousands of listening nodes running various versions of the Bitcoin Cash client. A small percentage of the nodes on the Bitcoin Cash P2P network are also mining nodes, competing in the mining process, validating transactions, and creating new blocks. Various large companies interface with the Bitcoin Cash network by running full-node clients, with full copies of the blockchain and a network node, but without mining or wallet functions. These nodes act as network edge routers, allowing various other services (exchanges, wallets, block explorers, merchant payment processing) to be built on top.

The extended Bitcoin Cash network includes the network running the Bitcoin Cash P2P protocol, described earlier, as well as nodes running specialized protocols. Attached to the main Bitcoin Cash P2P network are a number of pool servers and protocol gateways that connect nodes running other protocols. These other protocol nodes are mostly pool mining nodes (see [\[ch8\]](#ch8)) and lightweight wallet clients, which do not carry a full copy of the blockchain.

[The extended Bitcoin Cash network showing various node types, gateways, and protocols](#bitcoin_network) shows the extended Bitcoin Cash network with the various types of nodes, gateway servers, edge routers, and wallet clients and the various protocols they use to connect to each other.

<anchor name="bitcoin_node_types"></anchor>
<spacer></spacer>
![BitcoinNodeTypes](/images//mastering-bitcoin-cash/msbt_0602.png)
<image-caption>Figure 2. Different types of nodes on the extended Bitcoin Cash network</image-caption>

<anchor name="bitcoin_network"></anchor>
<spacer></spacer>
![BitcoinNetwork](/images//mastering-bitcoin-cash/msbt_0603.png)
<image-caption>Figure 3. The extended Bitcoin Cash network showing various node types, gateways, and protocols</image-caption>
<spacer></spacer>

### Network Discovery

When a new node boots up, it must discover other Bitcoin Cash nodes on the network in order to participate. To start this process, a new node must discover at least one existing node on the network and connect to it. The geographic location of other nodes is irrelevant; the Bitcoin Cash network topology is not geographically defined. Therefore, any existing Bitcoin Cash nodes can be selected at random.

To connect to a known peer, nodes establish a TCP connection, usually to port 8333 (the port generally known as the one used by Bitcoin Cash), or an alternative port if one is provided. Upon establishing a connection, the node will start a "handshake" (see [The initial handshake between peers](#network_handshake)) by transmitting a version message, which contains basic identifying information, including:

**PROTOCOL_VERSION**  
A constant that defines the Bitcoin Cash P2P protocol version the client "speaks" (e.g., 70002)

**nLocalServices**  
A list of local services supported by the node, currently just NODE_NETWORK

**nTime**  
The current time

**addrYou**  
The IP address of the remote node as seen from this node

**addrMe**  
The IP address of the local node, as discovered by the local node

**subver**  
A sub-version showing the type of software running on this node (e.g., "/Bitcoin ABC:0.17.1(EB32.0)/")+

**BestHeight**  
The block height of this node’s blockchain

The peer node responds with verack to acknowledge and establish a connection, and optionally sends its own version message if it wishes to reciprocate the connection and connect back as a peer.

How does a new node find peers? The first method is to query DNS using a number of "DNS seeds," which are DNS servers that provide a list of IP addresses of Bitcoin Cash nodes. Some of those DNS seeds provide a static list of IP addresses of stable Bitcoin Cash listening nodes. Some of the DNS seeds are custom implementations of BIND (Berkeley Internet Name Daemon) that return a random subset from a list of Bitcoin Cash node addresses collected by a crawler or a long-running Bitcoin Cash node. The Bitcoin Cash client contains the names of five different DNS seeds. The diversity of ownership and diversity of implementation of the different DNS seeds offers a high level of reliability for the initial bootstrapping process. In the Bitcoin Cash client, the option to use the DNS seeds is controlled by the option switch -dnsseed (set to 1 by default, to use the DNS seed).

Alternatively, a bootstrapping node that knows nothing of the network must be given the IP address of at least one Bitcoin Cash node, after which it can establish connections through further introductions. The command-line argument -seednode can be used to connect to one node just for introductions, using it as a seed. After the initial seed node is used to form introductions, the client will disconnect from it and use the newly discovered peers.

<anchor name="network_handshake"></anchor>
<spacer></spacer>
![NetworkHandshake](/images/mastering-bitcoin-cash/msbt_0604.png)
<image-caption>Figure 4. The initial handshake between peers</image-caption>
<spacer></spacer>

Once one or more connections are established, the new node will send an addr message containing its own IP address to its neighbors. The neighbors will, in turn, forward the addr message to their neighbors, ensuring that the newly connected node becomes well known and better connected. Additionally, the newly connected node can send getaddr to the neighbors, asking them to return a list of IP addresses of other peers. That way, a node can find peers to connect to and advertise its existence on the network for other nodes to find it. [Address propagation and discovery](#address_propagation) shows the address discovery protocol.

<anchor name="address_propagation"></anchor>
<spacer></spacer>
![AddressPropagation](/images/mastering-bitcoin-cash/msbt_0605.png)
<image-caption>Figure 5. Address propagation and discovery</image-caption>
<spacer></spacer>

A node must connect to a few different peers in order to establish diverse paths into the Bitcoin Cash network. Paths are not reliable—nodes come and go—and so the node must continue to discover new nodes as it loses old connections as well as assist other nodes when they bootstrap. Only one connection is needed to bootstrap, because the first node can offer introductions to its peer nodes and those peers can offer further introductions. It’s also unnecessary and wasteful of network resources to connect to more than a handful of nodes. After bootstrapping, a node will remember its most recent successful peer connections, so that if it is rebooted it can quickly reestablish connections with its former peer network. If none of the former peers respond to its connection request, the node can use the seed nodes to bootstrap again.

With BITBOX you can list the peer connections with the command getpeerinfo:

```javascript
bitbox.Network.getPeerInfo().then(
  result => {
    console.log(result)
  },
  err => {
    console.log(err)
  }
)

// returns
;[
  {
    id: 99286,
    addr: '96.126.122.17:53402',
    addrlocal: '138.68.54.100:8333',
    services: '0000000000000025',
    relaytxes: true,
    lastsend: 1531631325,
    lastrecv: 1531631325,
    bytessent: 498405940,
    bytesrecv: 1813804,
    conntime: 1531630964,
    timeoffset: 0,
    pingtime: 1.456465,
    minping: 0.046046,
    pingwait: 0.661831,
    version: 70015,
    subver: '/Bitcoin ABC:0.17.1(EB32.0)/',
    inbound: true,
    addnode: false,
    startingheight: 40272,
    banscore: 0,
    synced_headers: -1,
    synced_blocks: -1,
    inflight: [],
    whitelisted: false,
    bytessent_per_msg: {
      addr: 30442,
      block: 498371828,
      feefilter: 32,
      getheaders: 1053,
      headers: 106,
      inv: 2004,
      ping: 128,
      pong: 128,
      sendcmpct: 33,
      sendheaders: 24,
      verack: 24,
      version: 138,
    },
    bytesrecv_per_msg: {
      addr: 1390,
      feefilter: 32,
      getaddr: 24,
      getdata: 1810862,
      getheaders: 1053,
      ping: 128,
      pong: 96,
      sendcmpct: 33,
      sendheaders: 24,
      verack: 24,
      version: 138,
    },
  },
]
```

To override the automatic management of peers and to specify a list of IP addresses, users can provide the option -connect=<IPAddress> and specify one or more IP addresses. If this option is used, the node will only connect to the selected IP addresses, instead of discovering and maintaining the peer connections automatically.

If there is no traffic on a connection, nodes will periodically send a message to maintain the connection. If a node has not communicated on a connection for more than 90 minutes, it is assumed to be disconnected and a new peer will be sought. Thus, the network dynamically adjusts to transient nodes and network problems, and can organically grow and shrink as needed without any central control.

### Full Nodes

Full nodes are nodes that maintain a full blockchain with all transactions. More accurately, they probably should be called "full blockchain nodes." In the early years of Bitcoin Cash, all nodes were full nodes and currently the Bitcoin Cash client is a full blockchain node. In the past two years, however, new forms of Bitcoin Cash clients have been introduced that do not maintain a full blockchain but run as lightweight clients. We’ll examine these in more detail in the next section.

Full blockchain nodes maintain a complete and up-to-date copy of the Bitcoin Cash blockchain with all the transactions, which they independently build and verify, starting with the very first block (genesis block) and building up to the latest known block in the network. A full blockchain node can independently and authoritatively verify any transaction without recourse or reliance on any other node or source of information. The full blockchain node relies on the network to receive updates about new blocks of transactions, which it then verifies and incorporates into its local copy of the blockchain.

Running a full blockchain node gives you the pure Bitcoin Cash experience: independent verification of all transactions without the need to rely on, or trust, any other systems. It’s easy to tell if you’re running a full node because it requires 100+ gigabytes of persistent storage (disk space) to store the full blockchain. If you need a lot of disk space and it takes two to three days to sync to the network, you are running a full node. That is the price of complete independence and freedom from central authority.

### Exchanging "Inventory"

The first thing a full node will do once it connects to peers is try to construct a complete blockchain. If it is a brand-new node and has no blockchain at all, it only knows one block, the genesis block, which is statically embedded in the client software. Starting with block #0 (the genesis block), the new node will have to download hundreds of thousands of blocks to synchronize with the network and re-establish the full blockchain.

The process of syncing the blockchain starts with the version message, because that contains BestHeight, a node’s current blockchain height (number of blocks). A node will see the version messages from its peers, know how many blocks they each have, and be able to compare to how many blocks it has in its own blockchain. Peered nodes will exchange a getblocks message that contains the hash (fingerprint) of the top block on their local blockchain. One of the peers will be able to identify the received hash as belonging to a block that is not at the top, but rather belongs to an older block, thus deducing that its own local blockchain is longer than its peer’s.

The peer that has the longer blockchain has more blocks than the other node and can identify which blocks the other node needs in order to "catch up." It will identify the first 500 blocks to share and transmit their hashes using an inv (inventory) message. The node missing these blocks will then retrieve them, by issuing a series of getdata messages requesting the full block data and identifying the requested blocks using the hashes from the inv message.

Let’s assume, for example, that a node only has the genesis block. It will then receive an inv message from its peers containing the hashes of the next 500 blocks in the chain. It will start requesting blocks from all of its connected peers, spreading the load and ensuring that it doesn’t overwhelm any peer with requests. The node keeps track of how many blocks are "in transit" per peer connection, meaning blocks that it has requested but not received, checking that it does not exceed a limit (MAX_BLOCKS_IN_TRANSIT_PER_PEER). This way, if it needs a lot of blocks, it will only request new ones as previous requests are fulfilled, allowing the peers to control the pace of updates and not overwhelming the network. As each block is received, it is added to the blockchain, as we will see in [The Blockchain](/mastering-bitcoin-cash/6-the-blockchain/). As the local blockchain is gradually built up, more blocks are requested and received, and the process continues until the node catches up to the rest of the network.

This process of comparing the local blockchain with the peers and retrieving any missing blocks happens any time a node goes offline for any period of time. Whether a node has been offline for a few minutes and is missing a few blocks, or a month and is missing a few thousand blocks, it starts by sending getblocks, gets an inv response, and starts downloading the missing blocks. [Node synchronizing the blockchain by retrieving blocks from a peer](#inventory_synchronization) shows the inventory and block propagation protocol.

### Simplified Payment Verification (SPV) Nodes

Not all nodes have the ability to store the full blockchain. Many Bitcoin Cash clients are designed to run on space- and power-constrained devices, such as smartphones, tablets, or embedded systems. For such devices, a _simplified payment verification_ (SPV) method is used to allow them to operate without storing the full blockchain. These types of clients are called SPV clients or lightweight clients. As Bitcoin Cash adoption surges, the SPV node is becoming the most common form of Bitcoin Cash node, especially for Bitcoin Cash wallets.

SPV nodes download only the block headers and do not download the transactions included in each block. The resulting chain of blocks, without transactions, is 1,000 times smaller than the full blockchain. SPV nodes cannot construct a full picture of all the UTXOs that are available for spending because they do not know about all the transactions on the network. SPV nodes verify transactions using a slightly different methodology that relies on peers to provide partial views of relevant parts of the blockchain on demand.

<anchor name="inventory_synchronization"></anchor>
<spacer></spacer>
![InventorySynchronization](/images/mastering-bitcoin-cash/msbt_0606.png)
<image-caption>Figure 6. Node synchronizing the blockchain by retrieving blocks from a peer</image-caption>
<spacer></spacer>

As an analogy, a full node is like a tourist in a strange city, equipped with a detailed map of every street and every address. By comparison, an SPV node is like a tourist in a strange city asking random strangers for turn-by-turn directions while knowing only one main avenue. Although both tourists can verify the existence of a street by visiting it, the tourist without a map doesn’t know what lies down any of the side streets and doesn’t know what other streets exist. Positioned in front of 23 Church Street, the tourist without a map cannot know if there are a dozen other "23 Church Street" addresses in the city and whether this is the right one. The mapless tourist’s best chance is to ask enough people and hope some of them are not trying to mug him.

Simplified payment verification verifies transactions by reference to their _depth_ in the blockchain instead of their _height_. Whereas a full blockchain node will construct a fully verified chain of thousands of blocks and transactions reaching down the blockchain (back in time) all the way to the genesis block, an SPV node will verify the chain of all blocks (but not all transactions) and link that chain to the transaction of interest.

For example, when examining a transaction in block 300,000, a full node links all 300,000 blocks down to the genesis block and builds a full database of UTXO, establishing the validity of the transaction by confirming that the UTXO remains unspent. An SPV node cannot validate whether the UTXO is unspent. Instead, the SPV node will establish a link between the transaction and the block that contains it, using a _merkle path_. Then, the SPV node waits until it sees the six blocks 300,001 through 300,006 piled on top of the block containing the transaction and verifies it by establishing its depth under blocks 300,006 to 300,001. The fact that other nodes on the network accepted block 300,000 and then did the necessary work to produce six more blocks on top of it is proof, by proxy, that the transaction was not a double-spend.

An SPV node cannot be persuaded that a transaction exists in a block when the transaction does not in fact exist. The SPV node establishes the existence of a transaction in a block by requesting a merkle path proof and by validating the proof of work in the chain of blocks. However, a transaction’s existence can be "hidden" from an SPV node. An SPV node can definitely prove that a transaction exists but cannot verify that a transaction, such as a double-spend of the same UTXO, doesn’t exist because it doesn’t have a record of all transactions. This vulnerability can be used in a denial-of-service attack or for a double-spending attack against SPV nodes. To defend against this, an SPV node needs to connect randomly to several nodes, to increase the probability that it is in contact with at least one honest node. This need to randomly connect means that SPV nodes also are vulnerable to network partitioning attacks or Sybil attacks, where they are connected to fake nodes or fake networks and do not have access to honest nodes or the real Bitcoin Cash network.

For most practical purposes, well-connected SPV nodes are secure enough, striking the right balance between resource needs, practicality, and security. For infallible security, however, nothing beats running a full blockchain node.

<tip>
  A full blockchain node verifies a transaction by checking the entire chain of thousands of blocks below it in order to guarantee that the UTXO is not spent, whereas an SPV node checks how deep the block is buried by a handful of blocks above it.
</tip>

To get the block headers, SPV nodes use a getheaders message instead of getblocks. The responding peer will send up to 2,000 block headers using a single headers message. The process is otherwise the same as that used by a full node to retrieve full blocks. SPV nodes also set a filter on the connection to peers, to filter the stream of future blocks and transactions sent by the peers. Any transactions of interest are retrieved using a getdata request. The peer generates a tx message containing the transactions, in response. [SPV node synchronizing the block headers](#spv_synchronization) shows the synchronization of block headers.

<anchor name="spv_synchronization"></anchor>
<spacer></spacer>
![SPVSynchronization](/images/mastering-bitcoin-cash/msbt_0607.png)
<image-caption>Figure 7. SPV node synchronizing the block headers</image-caption>
<spacer></spacer>

Because SPV nodes need to retrieve specific transactions in order to selectively verify them, they also create a privacy risk. Unlike full blockchain nodes, which collect all transactions within each block, the SPV node’s requests for specific data can inadvertently reveal the addresses in their wallet. For example, a third party monitoring a network could keep track of all the transactions requested by a wallet on an SPV node and use those to associate Bitcoin Cash addresses with the user of that wallet, destroying the user’s privacy.

Shortly after the introduction of SPV/lightweight nodes, the Bitcoin Cash developers added a feature called _bloom filters_ to address the privacy risks of SPV nodes. Bloom filters allow SPV nodes to receive a subset of the transactions without revealing precisely which addresses they are interested in, through a filtering mechanism that uses probabilities rather than fixed patterns.

### Bloom Filters

A bloom filter is a probabilistic search filter, a way to describe a desired pattern without specifying it exactly. Bloom filters offer an efficient way to express a search pattern while protecting privacy. They are used by SPV nodes to ask their peers for transactions matching a specific pattern, without revealing exactly which addresses they are searching for.

In our previous analogy, a tourist without a map is asking for directions to a specific address, "23 Church St." If she asks strangers for directions to this street, she inadvertently reveals her destination. A bloom filter is like asking, "Are there any streets in this neighborhood whose name ends in R-C-H?" A question like that reveals slightly less about the desired destination than asking for "23 Church St." Using this technique, a tourist could specify the desired address in more detail as "ending in U-R-C-H" or less detail as "ending in H." By varying the precision of the search, the tourist reveals more or less information, at the expense of getting more or less specific results. If she asks a less specific pattern, she gets a lot more possible addresses and better privacy, but many of the results are irrelevant. If she asks for a very specific pattern, she gets fewer results but loses privacy.

Bloom filters serve this function by allowing an SPV node to specify a search pattern for transactions that can be tuned toward precision or privacy. A more specific bloom filter will produce accurate results, but at the expense of revealing what addresses are used in the user’s wallet. A less specific bloom filter will produce more data about more transactions, many irrelevant to the node, but will allow the node to maintain better privacy.

An SPV node will initialize a bloom filter as "empty" and in that state the bloom filter will not match any patterns. The SPV node will then make a list of all the addresses in its wallet and create a search pattern matching the transaction output that corresponds to each address. Usually, the search pattern is a pay-to-public-key-hash script that is the expected locking script that will be present in any transaction paying to the public-key-hash (address). If the SPV node is tracking the balance of a P2SH address, the search pattern will be a pay-to-script-hash script, instead. The SPV node then adds each of the search patterns to the bloom filter, so that the bloom filter can recognize the search pattern if it is present in a transaction. Finally, the bloom filter is sent to the peer and the peer uses it to match transactions for transmission to the SPV node.

Bloom filters are implemented as a variable-size array of N binary digits (a bit field) and a variable number of M hash functions. The hash functions are designed to always produce an output that is between 1 and N, corresponding to the array of binary digits. The hash functions are generated deterministically, so that any node implementing a bloom filter will always use the same hash functions and get the same results for a specific input. By choosing different length (N) bloom filters and a different number (M) of hash functions, the bloom filter can be tuned, varying the level of accuracy and therefore privacy.

In [An example of a simplistic bloom filter, with a 16-bit field and three hash functions](#bloom1), we use a very small array of 16 bits and a set of three hash functions to demonstrate how bloom filters work.

<anchor name="bloom1"></anchor>
<spacer></spacer>
![Bloom1](/images/mastering-bitcoin-cash/msbt_0608.png)
<image-caption>Figure 8. An example of a simplistic bloom filter, with a 16-bit field and three hash functions</image-caption>
<spacer></spacer>

The bloom filter is initialized so that the array of bits is all zeros. To add a pattern to the bloom filter, the pattern is hashed by each hash function in turn. Applying the first hash function to the input results in a number between 1 and N. The corresponding bit in the array (indexed from 1 to N) is found and set to 1, thereby recording the output of the hash function. Then, the next hash function is used to set another bit and so on. Once all M hash functions have been applied, the search pattern will be "recorded" in the bloom filter as M bits that have been changed from 0 to 1.

[Adding a pattern "A" to our simple bloom filter](#bloom2) is an example of adding a pattern "A" to the simple bloom filter shown in [An example of a simplistic bloom filter, with a 16-bit field and three hash functions](#bloom1).

Adding a second pattern is as simple as repeating this process. The pattern is hashed by each hash function in turn and the result is recorded by setting the bits to 1. Note that as a bloom filter is filled with more patterns, a hash function result might coincide with a bit that is already set to 1, in which case the bit is not changed. In essence, as more patterns record on overlapping bits, the bloom filter starts to become saturated with more bits set to 1 and the accuracy of the filter decreases. This is why the filter is a probabilistic data structure—it gets less accurate as more patterns are added. The accuracy depends on the number of patterns added versus the size of the bit array (N) and number of hash functions (M). A larger bit array and more hash functions can record more patterns with higher accuracy. A smaller bit array or fewer hash functions will record fewer patterns and produce less accuracy.

<anchor name="bloom1"></anchor>
<spacer></spacer>
![Bloom2](/images/mastering-bitcoin-cash/msbt_0609.png)
<image-caption>Figure 9. Adding a pattern "A" to our simple bloom filter</image-caption>
<spacer></spacer>

[Adding a second pattern "B" to our simple bloom filter](#bloom3) is an example of adding a second pattern "B" to the simple bloom filter.

<anchor name="bloom3"></anchor>
<spacer></spacer>
![Bloom3](/images/mastering-bitcoin-cash/msbt_0610.png)
<image-caption>Figure 10. Adding a second pattern "B" to our simple bloom filter</image-caption>
<spacer></spacer>

To test if a pattern is part of a bloom filter, the pattern is hashed by each hash function and the resulting bit pattern is tested against the bit array. If all the bits indexed by the hash functions are set to 1, then the pattern is _probably_ recorded in the bloom filter. Because the bits may be set because of overlap from multiple patterns, the answer is not certain, but is rather probabilistic. In simple terms, a bloom filter positive match is a "Maybe, Yes."

[Testing the existence of pattern "X" in the bloom filter. The result is probabilistic positive match, meaning "Maybe."](#bloom4) is an example of testing the existence of pattern "X" in the simple bloom filter. The corresponding bits are set to 1, so the pattern is probably a match.

<anchor name="bloom4"></anchor>
<spacer></spacer>
![Bloom4](/images/mastering-bitcoin-cash/msbt_0611.png)
<image-caption>Figure 11. Testing the existence of pattern "X" in the bloom filter. The result is probabilistic positive match, meaning "Maybe."</image-caption>
<spacer></spacer>

On the contrary, if a pattern is tested against the bloom filter and any one of the bits is set to 0, this proves that the pattern was not recorded in the bloom filter. A negative result is not a probability, it is a certainty. In simple terms, a negative match on a bloom filter is a "Definitely Not!"

[Testing the existence of pattern "Y" in the bloom filter. The result is a definitive negative match, meaning "Definitely Not!"](#bloom5) is an example of testing the existence of pattern "Y" in the simple bloom filter. One of the corresponding bits is set to 0, so the pattern is definitely not a match.

<anchor name="bloom5"></anchor>
<spacer></spacer>
![msbt 0612](/images/mastering-bitcoin-cash/msbt_0612.png)
<image-caption>Figure 12. Testing the existence of pattern "Y" in the bloom filter. The result is a definitive negative match, meaning "Definitely Not!"</image-caption>
<spacer></spacer>

Bitcoin’s implementation of bloom filters is described in Bitcoin Improvement Proposal 37 ([BIP0037](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki)).

### Bloom Filters and Inventory Updates

Bloom filters are used to filter the transactions (and blocks containing them) that an SPV node receives from its peers. SPV nodes will create a filter that matches only the addresses held in the SPV node’s wallet. The SPV node will then send a filterload message to the peer, containing the bloom filter to use on the connection. After a filter is established, the peer will then test each transaction’s outputs against the bloom filter. Only transactions that match the filter are sent to the node.

In response to a getdata message from the node, peers will send a merkleblock message that contains only block headers for blocks matching the filter and a merkle path for each matching transaction. The peer will then also send tx messages containing the transactions matched by the filter.

The node setting the bloom filter can interactively add patterns to the filter by sending a filteradd message. To clear the bloom filter, the node can send a filterclear message. Because it is not possible to remove a pattern from a bloom filter, a node has to clear and resend a new bloom filter if a pattern is no longer desired.

### Transaction Pools

Almost every node on the Bitcoin Cash network maintains a temporary list of unconfirmed transactions called the _memory pool_, _mempool_, or _transaction pool_. Nodes use this pool to keep track of transactions that are known to the network but are not yet included in the blockchain. For example, a node that holds a user’s wallet will use the transaction pool to track incoming payments to the user’s wallet that have been received on the network but are not yet confirmed.

As transactions are received and verified, they are added to the transaction pool and relayed to the neighboring nodes to propagate on the network.

Some node implementations also maintain a separate pool of orphaned transactions. If a transaction’s inputs refer to a transaction that is not yet known, such as a missing parent, the orphan transaction will be stored temporarily in the orphan pool until the parent transaction arrives.

When a transaction is added to the transaction pool, the orphan pool is checked for any orphans that reference this transaction’s outputs (its children). Any matching orphans are then validated. If valid, they are removed from the orphan pool and added to the transaction pool, completing the chain that started with the parent transaction. In light of the newly added transaction, which is no longer an orphan, the process is repeated recursively looking for any further descendants, until no more descendants are found. Through this process, the arrival of a parent transaction triggers a cascade reconstruction of an entire chain of interdependent transactions by re-uniting the orphans with their parents all the way down the chain.

Both the transaction pool and orphan pool (where implemented) are stored in local memory and are not saved on persistent storage; rather, they are dynamically populated from incoming network messages. When a node starts, both pools are empty and are gradually populated with new transactions received on the network.

Some implementations of the Bitcoin Cash client also maintain a UTXO database or UTXO pool, which is the set of all unspent outputs on the blockchain. Although the name "UTXO pool" sounds similar to the transaction pool, it represents a different set of data. Unlike the transaction and orphan pools, the UTXO pool is not initialized empty but instead contains millions of entries of unspent transaction outputs, including some dating back to 2009. The UTXO pool may be housed in local memory or as an indexed database table on persistent storage.

Whereas the transaction and orphan pools represent a single node’s local perspective and might vary significantly from node to node depending upon when the node was started or restarted, the UTXO pool represents the emergent consensus of the network and therefore will vary little between nodes. Furthermore, the transaction and orphan pools only contain unconfirmed transactions, while the UTXO pool only contains confirmed outputs.

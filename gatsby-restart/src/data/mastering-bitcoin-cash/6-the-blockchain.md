---
  title: The blockchain
  chapter: 6
  updatedAt: 2018-07-06
---
The blockchain data structure is an ordered, back-linked list of blocks of transactions. The blockchain can be stored as a flat file, or in a simple database. The Bitcoin ABC client stores the blockchain metadata using Google’s LevelDB database. Blocks are linked 'back,' each referring to the previous block in the chain. The blockchain is often visualized as a vertical stack, with blocks layered on top of each other and the first block serving as the foundation of the stack. The visualization of blocks stacked on top of each other results in the use of terms such as 'height' to refer to the distance from the first block, and 'top' or 'tip' to refer to the most recently added block.
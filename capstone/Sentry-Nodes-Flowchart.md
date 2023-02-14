# Sentry Nodes Flowchart v1

The Sentry Nodes project consists of multiple NFT collections that all interact with several different contracts.

First, each NFT collection will be minted on the Stargaze blockchain.

My current understanding of an NFT project is that there is the NFT contract (which holds the NFT data) and the Minter contract (which users will interact with to mint the NFT).

I'm not sure if I need multiple minter contracts or just 1 minter contract, but I do know that I will need multiple NFT contracts.

So, we have multiple NFT contracts:

NFT contract 1
NFT contract 2
NFT contract 3

and the minter Contract

Minter contract

--

Then, there will be two other contracts:

Allocations Contract

and

Staking Contract

--

All Stars generated through the minting, trading, and other activities of the NFTs will flow to the **Allocations** contract.

The **Allocations** contract will receive all of these stars, and then send the stars to various entities **or** the **Staking** contract.

The **Staking** contract will then either Stake Stars, or move tokens to Osmosis.zone to trade for the following three tokens:

OSMO
ATOM
JUNO

Based on a variety of factors.

Here's an example.

=

11,776 Sentry Nodes NFTs are one of the collections in the Sentry Nodes project. Let's assume that the mint price is 200 Stars (approx $6 at the current price of Stars ~ $0.03).

The mint proceeds would yield ~ 2.3 million Stars.

The project grid is broken into four quadrants, each representing the pillars of the Cosmos Network:

1. Cosmos Hub
2. Osmosis Zone
3. Juno Network
4. Stargaze Zone

Mint proceeds will be allocated 25% to the following parties:

1. Cosmos Ecosystem (25%) -> split 4 ways.
2. Staking Contract (25%) -> split 4 ways.
3. NFT Holders (25%) -> split n ways where n represents number of holders of *all* NFTs minted from the Sentry Nodes project. This is discussed in more detail below.
4. Core contributors (25%) -> split n ways where n represnts the number of core contributors.

Anyways, back to the staking contract and hypothetical 2.3 million Stars. Round down to 2 million stars for simplicity.

Of the 2 million Stars, 500k is allocated by the **Allocator** contract to the **Staking** contract.

Then 25% (~125k) of the STARS are staked to the Stargaze blockchain, the other ~325k STARS are sent to Osmosis for further trading and staking.

1. 125k stars traded for OSMO, staked to Osmosis blockchain.
2. 125k stars traded for ATOM, staked to Cosmos Hub blockchain.
3. 125k stars traded for JUNO, staked to Juno Network blockchain.

*This will be an ongoing process - every epoch this will happen automatically based on the parameters in the Allocation and Staking contracts*

As the staking is occurring, staking rewards will accrue. The staking contract will redeem staking rewards at regular intervals, and then send those to the Allocator contract to further allocate those rewards recursively - same rules as above.

~

This is as much an experiment as it is fulfilling a need in the Cosmos Network. It presumably will increase security across the four pillars of the Network (more staked tokens), while rewarding NFT holders with both proceeds of mints, trades, "other nft activities", and staking rewards. Staking rewards will recursively flow back to the allocator to be re-allocated further to the recipients.

~

NFT holders will be able to vote on changes to the protocol. This is important, as eventually there may need to be tweaks to the allocator model, tweaks to the staking model, and perhaps a desire by the community to unstake some funds and move those funds to other blockchains to stake.

~

The governance aspect can be controlled via DAODAO. Thus a robust DAO must be created in order to manage the entire project efficiently and *always on chain*

~

One of the CORE GOALS of the project is to have everything occur on-chain in a decentralized manner, and for there to be absolute transparency regarding how the various contracts are performing. This will require a robust set of queries on a frequent basis in order to have a tracking dashboard that shows how the various account balances change over time.

~

After talking this through, the contracts now include:

multiple NFT contracts
single or multiple minting contracts (I don't know)
Allocator contract
Staking contract
Governance contract
Tracking contract

~

I think that for the capstone project, much of this can be pared down. The following NFT collections are planned for Sentry Nodes:

1. The Grid (1)
2. Quadrants (4)
3. Variants (23)
4. Cores (64)
5. Nodescapes (512)
6. Sentry Nodes (11,776)

Each Sentry Node has a specific location on "The Grid". The Grid is like the motherboard of a computer, it's the substrate on which all of the other structures are connected. The grid is divided into 4 quadrants.

Each quadrant contains 16 cores, for a total of 64 Cores. Each core contains a grid of 4 rows and 2 columns of Nodescapes. Each Nodescape contains 23 Sentry Nodes.

I haven't described variants yet. There are 23 sentry nodes within each Nodescape. Each Sentry Node will have a unique "variant" identifier. Each variant identifier shows up once per Nodescape, so there's approximately 512 sets of 23 unique variants. This will help with the generative art aspect of the project.

To be continued...
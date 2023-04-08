# Sentry Nodes
This project is currently under development.

The primary goal of this project is to release a bunch of nft art collections that
showcase the power of the Cosmos Network and really demonstrates some of the cool
features that come with having a network of interconnected application-specific-
blockchains.

This project is not close to being completed, but the general concept includes:

1. Multiple NFT collections, culminating in an interactive 11,776 grid of Sentry Node NFTs.
2. A set of smart contracts that manages these collections and showcases the power of the Cosmos Network.


## Starting point

The starting point of this project is a simple smart contract that does the following:

1. Receive funds
2. Split the funds
3. Disburse funds

### 1 The Contract Receives Funds

The smart contract is designed to accept funds from any source, including other contracts, individual users, or anyone who wants to use this contract. The instantiation message of the contract allows for a significant degree of configurability, providing a template instantiation message for developers to get started.

The template instantiation message will instantiate a contract that receives all minting and trading proceeds from the minting and trading of a specified Stargaze NFT collection. Once the funds are received, they are split into four equal parts:

- 25% to the creators of the NFTs
- 25% to the holders of the NFTs
- 25% to the Stargaze community wallet
- 25% to a staking contract

This flexible design enables a wide range of use cases and encourages project collaboration and community involvement.

### 2 The Contract Splits The Funds

Once the smart contract has received funds, it automatically splits the total amount into predefined proportions. These proportions could be determined based on the project's requirements, such as allocating a percentage for development, marketing, and community rewards.

### 3 The Contract Disburses the Funds

After splitting the funds, the smart contract disburses them to their respective recipients. For example, funds allocated for development are sent to the development team's wallet, while funds designated for marketing are sent to the marketing team's wallet.

As the project progresses, additional features, functionalities, and integrations will be developed to further demonstrate the capabilities of the Cosmos Network and enhance the overall user experience.

## Main Contract Types

At this point, the main contract types include:

1. **Minting contracts on the Stargaze blockchain:** These contracts will exist solely for the purpose of launching the NFT collections themselves. They will be simple contracts that are loaded onto the Stargaze blockchain, but they will have some unique instantiation features that lend themselves to more flexibility for the creators of a Stargaze NFT collection. Additionally, they will be designed with the primary feature of being exceptionally easy to plug into the other contracts in this system.

2. **Splitter contracts (likely on the Juno Network):** This is the starting point of the project. The initial goal is to successfully deploy a splitter contract that performs the simple task of receiving funds, splitting the funds 50/50, and sending funds to two different wallets. Once this has been successfully accomplished, the splitter contract will be iterated upon and additional features will be added.

3. **Staking contracts:** These contracts exist solely for the purposes of receiving funds from other contracts in the system and then staking those tokens that were received. There will be multiple staking contracts for each chain connected to the application. These contracts will also need to perform the actions of collecting the staking rewards, re-staking those rewards, and sending a portion of those staking rewards elsewhere. It is important to note that these staking contracts are like permanent plugs into their respective blockchains, where tokens will be staked never to be unstaked again. These staking contracts exist to always allocate a portion of staking rewards back into the application's flywheel system.

As the project progresses, additional features, functionalities, and integrations will be developed to further demonstrate the capabilities of the Cosmos Network and enhance the overall user experience.
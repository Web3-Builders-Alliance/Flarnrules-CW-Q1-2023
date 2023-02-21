# Code Journal 5 - Cluster 2 (week 2-3)

*Structure / architecture of tendermint BFT blockchains*
*because I can't figure out how to deploy on terra testnet*

This code journal consists of notes from the youtube video "Terra, a new platform for DeFi DApps with CosmWasm - Developer Workshop".  

This youtube video was recommended by Japarjam in response to my confusion regarding the deployment code challenge from Week 3.  

# Terra SDKs

There are two Terra SDKs - Jigu and TerraJS. This video covers Jigu. Jigu allows a developer to use Python to interact with an LCD connected to a terrad node. ~ faucet.terra.money  

# Smart Contract Architecture

Three entry points:

1. The "constructor" init() - MsgInstantiateContract

2. The handle method handl() - MsgExecuteContract

3. The querier query()

Workflow:  
![Uploading and Instantiating](https://github.com/flarnrules/images/blob/main/Uploading%20Code%20and%20Instantiating.png)

# What is CosmWasm

* Multi-Chain Smart contracting Solution
* Deep Cosmos SDK integration
* Security-First Design
* Uses Web Assembly VM

# History

* Cosmos Hackatom in Berlin, June 2019, created by Ethan Frey of Confio
* 0.6 release in January 2020

# How CosmWasm Works?

* Use wasmer.io to run the bytecode
* Precompiles Web Assembly to sandboxed native code
* Isolated memory space
* All CPU usage is gas metered
* Only access besides CPU and memory is via imports
    * read and write to a a subset of blockchain state
    * Query other modules
    * a few blockchain-specific APIs
* No network, no non-determinism, no jail-breaking

... The above is more "what Cosm Wasm does"

... I'm not sure this video is getting me what I need.

= = = = = = = = = = = = = = =

# Security First

* Actor model for dispatching messages: get a message, return a message.
* Built-in overflow checks
* Explicit, structured APIs to call functions
* Rust
* First-class test tooling (quick-check / fuzzing)

... I don't really know what a lot of the above means, but I do know that the actor model is a *very* important concept and a major difference between CosmWasm vs EVM based smart contracts. CosmWasm uses the "Actor Model" whereas Ethereum uses the "Account model".  

# Cosm Wasm Ties Deeply into Native Code

* Bank and staking models
* Built-in access to call/query other contracts

= = = = = = = = = = = =

This was interesting but didn't really move the needle for the deployment.

= = = = = = = = = = = =







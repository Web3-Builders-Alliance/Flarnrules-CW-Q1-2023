# Code 4 - Cluster 2 (week 2-3)

*My first smart contract deployment*

This code journal is going to document my experience with deploying a smart contract on the Terra testnet. 

## First, my setup:

* Machine(s) - Lenovo Yoga Laptop; and Custom Built Desktop PC, AMD CPU
* Operating System(s) - Windows 11, with WSL2 Ubuntu
* Terminal - Windows Terminal
* Shell - BASH
* Text Editor - Visual Studio Code
* Docker - 

## Next, languages / frameworks used:

* BASH CLI - for command line commands
* Mark-down (.md) - for notes
* Rust (.rs) - language to write the smart contract (https://doc.rust-lang.org/book/)
* Cargo - Rust's package manager (https://doc.rust-lang.org/cargo/)
* CosmWasm framework for smart contracts (https://github.com/CosmWasm)
* Terrad - CLI and daemon that connects and enables interaction with the Terra blockchain (https://github.com/terra-money/docs/tree/main/docs/develop/terrad)

## Requirements

1. Write a smart contract in Rust with the CosmWasm framework.
2. Use rust-optimizer to create optimized wasm file from my Rust smart contract. 
3. Install terrad, and configure
4. Use terrad to create a wallet, and fund with test coins
5. Deploy the contract to the terra "pisco-1" testnet
6. Interact with the contract

## 1 Write a smart contract in Rust with the Cosmwasm framework

First, we need to generate an empty repo with `cargo generate`.

For a minimal repo (basically empty file structure) we can run:

`cargo generate --git https://github.com/CosmWasm/cw-template.git --name PROJECT_NAME -d minimal=true`

Make sure to replace `PROJECT_NAME` with the project name of *your* project. In this case, I called my project `sender-contract`. I need to look into the naming conventions of CosmWasm smart contracts to get a better sense of good names. Here's a few contracts that have been deployed:

* 



CosmWasm smart contracts have the following file structure:




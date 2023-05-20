# Developer Log

This will log my notes as I attempt to accomplish an MVP for the WBA Cohort 2 capstone project.

## Requirements

The requirements from the web3builders.dev website include:

[ ] At a minimum a Proof of Concept, ideally a MVP close to ready.

That's really not as detailed as I was expecting. I'm going to write out some requirements that I'll try to hold myself to:

[x] Proof of Concept
[ ] A single functioning smart contract that shows the proof of concept in action, on a testnet
[ ] Docs for that smart contract and how to deploy
[ ] A video explaining the smart contract

## Timeline

**Due Date:** April 14, 2023

**Smart Contract:**

1. Developer environment created and project set up. 4/9
2. Smart contract written 4/12
3. Docs written 4/12
4. Video created 4/12

## Dev logs

**1 4/7/2023**
This is the first devlog in my attempt to build this smart contract MVP.
I notice that when I'm close to starting something, I tend to work around the edges.
I'm fairly comfortable describing what I need to do, but not great at diving in and doing it.
I wonder why that is?

Either way, I'm glad that I wrote the README.md tonight and I'm also glad that I got started
on setting up my developer environment. This is a good start. The next thing I need to do
is create a CosmWasm project with cargo and refamiliarize myself with the CosmWasm framework
since I haven't really looked at the docs or looked a contract in a few weeks.

It's amazing how fast can be unlearned in such a short amount of time. I think what I've
lost in knowledge though, I've gained in a renewed interest in continuing this project
and giving it my best shot to complete. I've also become quite a bit more proficient with
the tools, which is making the development experience a lot more enjoyable.

Last, I got back into animation, and have been using the pixel art animation app Aesprite
to create graphics. I will be using Aesprite a lot in the development of this project.

Things like:
- diagrams
- fun little drawings
- pseudo code
- other things I haven't yet thought of

Alright. It's 11:40pm, I don't think I have any more energy to continue this tonight.

Time to push my dev log to my remote repo so I can keep hacking away at this on my laptop tomorrow!

**2 4/9/2023**

Need to set up the developer environment. Firs start by opening up the CosmWasm bookmark in Google Chrome.

Wep pages include:

- Introduction - CosmWasm book: https://book.cosmwasm.com/
- The wasmswap-contracts repo on Art3miX's github: https://github.com/Art3miX/wasmswap-contracts/blob/main/scripts/add_liquidity.sh 
- The dao-contracts repo on DAO-DAO's github: https://github.com/Art3miX/wasmswap-contracts/blob/main/scripts/add_liquidity.sh
- The Terra Faucet set to the Pisco-1 testnet: https://faucet.terra.money/
- The cw-template repo on CosmWasm's github: https://github.com/CosmWasm/cw-template

The most useful bookmark here is the CosmWasm book for setting up the development environment.

Prerequirements include the Rust programming language.

Quick start with `wasmd`. I think I'm going to start here. I am going to create a "quick_start.md" file to document a walkthrough to get a project started, as this entire project is to be designed to be beginner friendly. The quick start will be a walkthrough for someone starting with basically a blank sheet.

verifying installation is important, so far it compiled and tests all passed.

next I need to verify that I can build some smart contracts.


**3 4/10/2023**
Late afternoon, trying to make a bit more progress. Let's pick up where we left off.

I was in the process of setting up the environment for wasmd. I need to got hough the Testnet setup, which is documented in the cosmwasm book here: https://book.cosmwasm.com/wasmd-quick-start/testnet.html

I'm a bit confused by the instructions:

1. Pick a testnet, doc recommend CosmWasm testnet malaga-420

2. Create a malaga.env file that sets the environment variables to the proper values. I'm not 100% sure where I should be running all of these export commands, or where I am suppose to create the `malaga.env` file so I'm going to ask ChatGPT to see if I can get some clarity. After asking ChatGPT, I have decided to create the malaga.env file in my home directory so I'll run the following commands:

`cd ~`
`touch malaga.env`
`code .`

And then copy paste the following lines in the malaga.env file:

```
export CHAIN_ID="malaga-420"
export TESTNET_NAME="malaga-420"
export FEE_DENOM="umlg"
export STAKE_DENOM="uand"
export BECH32_HRP="wasm"
export WASMD_VERSION="v0.27.0"
export CONFIG_DIR=".wasmd"
export BINARY="wasmd"

export GENESIS_URL="https://raw.githubusercontent.com/CosmWasm/testnets/master/malaga-420/config/genesis.json"

export RPC="https://rpc.malaga-420.cosmwasm.com:443"
export FAUCET="https://faucet.malaga-420.cosmwasm.com"

export COSMOVISOR_VERSION="v0.42.10"
export COSMOVISOR_HOME=/root/.wasmd
export COSMOVISOR_NAME=wasmd

export NODE=(--node $RPC)
export TXFLAG=($NODE --chain-id $CHAIN_ID --gas-prices 0.05umlg --gas auto --gas-adjustment 1.3)
```
Then I need to run `source malaga.env` to run all of the xport commands in the `malaga.env` file to set the environment variables in my *current* terminal session. **I wonder if this is needed evey time I work with a different blockchain. Something to try to commit to memory if so.**

3. Prepare the account. Need to add a new key to the `wasmd` config:

```
wasmd keys add wallet
- name: wallet
  type: local
  address: wasm1wukxp2kldxae36rgjz28umqtq792twtxdfe6ux
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A8pamTZH8x8+8UAFjndrvU4x7foJbCvcz78buyQ8q7+k"}'
  mnemonic: ""
  ```

  running `wasmd` in the sentry_nodes folder gives me a "command not found" error. That's not good. Okay looks like I need to be **in** the wasmd directory, which means I need to open up another terminal.

Ok even in the wasmd directory I get a "command not found". Somthing is wrong.

This quickstart is causing me some headaches, maybe I can just go to the official juno docs and use juno instead.

Juno testnet setup:

First, I know from another WBA classmate that the juno smart contract testing tool is fairly intuitive, so maybe the docs are better. I'm officially stuck after reading Juno docs, they just send me to book.cosmwasm.com

Let's look at what I did for the pisco-1 testnet.

**4 4/11/2023**

Got junod working thanks to some assistance from a fellow WBA member. Problem is that I can't figure out if its the right version of the Juno testnet that I'm connecting to. It doesn't really matter at this point, I just need to get started writing my contract.

I've started on some of the pseudo code:

funds -> splitter contract -> split funds -> recipients

As all CosmWasm smart contracts, there will be the following messages:

`instantiate`
The instantiate message needs to take in information like:
How many recipients
The addresses of each recipient
The split % for each recipient

`execute`
The execute messages will all happen automatically. Once
the contract is instantiated, the execute messages happen
based on either the passage of time, or the amount of funds
residing int he contract.

Based on my grasp of the contract mechanism, I think that this contract will only need to have one execute message called "split".

Split will execute every time a specific milestone is reached.
The parameters for the milestone will be determined based on
the user input when instantiating the contract.

`query`
Users should be able to query the contract to provide summary information:
- Total funds in the contract
- The number of recipients
- The addresses of the recipients
- The % allocation to each recpient

- The total amount of funds to ever be received by the contract
- The total amount of funds received by each of the recipients

There should be some more detailed queries as well:
- Daily funds received.
- Daily funds allocated by receipient
... and so on.

I'm going to paste all of this into GPT-4 and see what it spits out....

=

Okay not bad. First we need a couple of structs.

A struct for storing recipient info including the recipient address and assigned weight.

```rust
pub struct Recipient {
  pub address: Addr,
  pub weight: u32,
}
```

A struct for storing contract state, incluidng the recipients, the total weight (sum of all recipient weights), the next disbursement time, and the disbursement configuration parameters:

```rust
pub struct State {
  pub recipients: Vec<Recipient>,
  pub total_weight: u32,
  pub next_disbursement_time: u64,
  pub disbursement_interval_blocks: Option<u64>,
  pub disbursement_interval_days: Option<u64>,
  pub disbursement_amount_threshold: Option<Uint128>
}
```

An initiailiztion function:

``` rust
pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    msg: InstantiateMsg,
) -> Result<Response, ContractError> { /* Implementation */ }
```

An execute function:

``` rust
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, ContractError> { /* Implementation */ }
```

And last, a query function:

``` rust
pub fn query(
  deps: Deps,
  env: Env,
  msg: QueryMsg
) -> Result<Binary, ContractError> { /* Implementation */}
```

All three functions use The Actor Model, which is an important concept in CosmWasm and required for the contract to work, so that's pretty cool.

**5 - May 19, 2023**

Okay it's been a while since I've worked on this. I think I went through a serious bout of depression when I realized I really did not feel equipped to handle the complexities of building a smart contrac ton Cosmos.

I think one of the issues I ran into was that there seems to be an attitude that this stuff is "pretty easy" when it's actually pretty complex. I get that it's probably easy for a lot of people who have been steeped in this stuff for a long ass time, but for people who are new to the scene, it's pretty complex.

Anyways, I guess that's the point. It truly is complex! This requires a lot of knowledge and effort, so I can't just try for a little bit and expect big results. I need to actaully *work hard* which I'm not super great at. I'm good at *having fun while working*, so when I'm not having fun... I tend to quit pretty quickly. Anyways, I digress.

Super happy to be developing this project again. Quick change to the readme just now, I've made sure to name the project in the `README.md` file The Splitter Contract, because that's what this project is. It is not Sentry Nodes, just an important puzzle piece that will be used by Sentry Nodes.

I was coming here to find the diagram for the splitter contract, not actually write any code.




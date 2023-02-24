# Week 4 - Cluster 3 - Code Challenge

## Requirements

[] Create a contract that instantiates a cw20 token, and that mints an amount of cw20 token equal to the amount of native tokens that are sent to the contract. For example, if you send 100 uluna to the contract, the contract should mint you 100 tokens of the cw20 token you create. 

[] The contract should be migratable, and you should deploy this on testnet and run a migration on it. This requires the CW2 standard.

[] You should write tests (unit or integration) validating the actions on the first point. 

[] Optional: it should be possible to withdraw your original tokens by sending the LP tokens back to the contract.

## Links

##

name: test1
  type: local
  address: terra1alpwx047phjghyzzsnl85r3gyg0u67adlytpz4
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"ArjJNMOnQxrbZkGJSAaE4PgHcCUn0W37Ms4DlAWu/ZxN"}'
  mnemonic: ""


name: test2
  type: local
  address: terra1w2mp25v679253husuua244ck44e6cdyxq9x2z7
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"ApcPDuIQILfiPSt9/D+B/uzfrGAId/u1VLsDljKD60mw"}'
  mnemonic: ""

name: test3
  type: local
  address: terra13vg5uqz75nzamqw8u03qydvc6tgntcfqwd3afr
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A2ULirKgRDudpplI589W/ZbWEyeDTTuiZsuOzJzuKIQ8"}'
  mnemonic: ""




## Actions

### Create New minimal template called "wba-cw20-migration"

`cargo generate --git https://github.com/CosmWasm/cw-template.git --name wba-cw20-migration -d minimal=true`

### Copy CW20-base contract so I can optimize and load it to the testnet

This is basically the entire process that I completed for the previous code challenge. I'm going to try this one where I just clone it, instead of copy-pasting the contents of each .rs file

Step 1 - clone contract: 

## Steps

1. `cargo generate` new minimal template called "wba-cw20-migration"

2. clone the cw20 base contract and load it to a testnet.
  1. `git clone https://github.com/CosmWasm/cw-plus` // clone the repo
  2. `cd cw-plus/contracts/` // change directory to cw-plus/contracts
  3. `cp -R cw20-base ~/repos/Flarnrules-CW-Q1-2023/Cluster-3/code-challenges` // copy entire directory of `cw20-base` to my WBA directory.
  4. Need to update dependencies in Cargo.toml 
  5. `docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.11` // this optimizes the code to a wasm file (I don't understand most of this command, I just know what it does)

  *According to ChatGPT:* 
  
  >Overall, this command sets up a container with the necessary volume and cache mounts to build a .Rust project located in the current directory using the cosmwasm/rust-optimizer image. The rust-optimizer image includes various tools and dependencies necessary for building and optimizing Rust-based smart contracts, including the CosmWasm SDK.

  6. `terrad tx wasm store cw20_base.wasm --from test3 --gas-prices 0.25uluna --gas auto --gas-adjustment 1.3 --node https://terra-testnet-rpc.polkachu.com:443 --chain-id pisco-1 -y -b block` // this stores the contract on the blockchain. I need to do this to get a code_id. My code_id is "7852".

3. write code in "wba-cw20-migration" to do a bunch of tasks:
  1. instantiate cw20 token
  2. mint x number of those cw20 tokens
  3. send x number of those cw20 tokens to the contract

3. migrate the contract

4. withdraw the tokens


Compile cw-20 contract.

Pass to the chain.

##

Help:

go to any code that has liquidity pools, this does basically what we want to see.
https://github.com/Wasmswap/wasmswap-contracts
cw-injective  
white whale
terraswap
junoswap
wynndex

We only need 1 contract.

That contract needs to be able to instantiate a cw20 token.

We need the code-id of the token contract that can instantiate a cw20 token.

=
1. Find a code id.

OR

2. Compile your own and upload it, so you get a code id.
The code id - is important when it gets deployed on the testnet.

=
The way you interact with that other contract is with messages.
When you want to create the token - instantiate.
Then mint.
The burn, transfer.
Go back to Cluster2 slides.
Need to use Wasm messages to interact and send mint message, transfer message, send or burn message.
With the contract address, you need to save it on your contract - you need a reference to it to talk to the contract later that you instantite.
=
Once you instantiate the token, you need to store that address.
=
There are two ways to store.
=
Go back and watch the lesson with reply entrypoint.
=
Learn about the virus message.
=

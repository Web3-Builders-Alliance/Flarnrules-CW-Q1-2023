You need two actors, Sender and Receiver.

The Sender:
- Receives native tokens from anyone and forwards them to the Receiver.
- Stores how much tokens have been received/forwarded, which can be returned in a Query.

The Receiver:
- Stores the received tokens until the owner of the contract claims them.
- The owner can claim part of the tokens held by the Receiver, or all at once.

Optional:
- The Sender gets notified when the Receiver has transferred the funds.
- The Sender gets notified when the Receiver funds have been claimed by its owner.

Assume happy paths, though minor validations are expected. Pass any relevant information you need on the messages.

Additional Resources:
- cw-template: https://github.com/CosmWasm/cw-template
- cw-storage-plus: https://github.com/CosmWasm/cw-storage-plus
- cw-plus: https://github.com/CosmWasm/cw-plus

https://docs.terra.money/develop/terrad/install-terrad/

https://faucet.terra.money/

Docker Command for Rust Optimizer

docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.11

Run `go version` to verify I have go.

Installation of terrad:

Prerequisites

* [x] Golang v1.18 linux/amd64
* [x] Ensure `GOPATH` and `GOBIN` environment variables are set up correctly
* [x] Install build-essential -> THIS IS A MALICIOUS LINK

Install from source

`git clone https://github.com/terra-money/core`
`cd core`
`git checkout [latest version]`

- - - - - - - - - - - - - - - - - - - - - - - - - -

Thursday, Feb 16, 2023 - 

* I think I successfully installed the prerequistites and terrad
* I'm not sure what I'm supposed to do next.

# First try:

I attempted to just copy and paste the commands from Javier in the course-annoucement-links discord server, these are:

```
export CHAIN_ID="pisco-1"
export DENOM="uluna"
export BINARY="terrad"
export RPC="https://terra-testnet-rpc.polkachu.com:443"
export TXFLAG="--node $RPC --chain-id $CHAIN_ID --gas-prices 0.25$DENOM --gas auto --gas-adjustment 1.3 -y -b block --output json"
```

AND

```
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.11
```

First set of commands had no response... good?
Second set of commands, some stuff happened. Got error: could not find `Cargo.toml` in `/code` or any parent directory.

I ran the second set of commands in the `~/core` directory. Maybe I need to run that where my smart contract resides?

# Second try:

So first set of commands is to "deploy to pisco-1, terra's testnet."

The second set of commands is used to create the optimized wasm to deploy on chain.

I'm going to try running both sets of commands in my `sender-contract` directory.

Ran the *second* command first in the root directory of my contract.

```
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.11
```

Got a folder called artifacts, with my contract in it. The artifact version was called `receiver_contract.wasm` and was 122k in size, which seems correct given what Javier said that basically maximum size of a contract should be around 800k, a large contract is around 500k. This is an incredibly small contract so I expected it to be a bit smaller...

Now time to run the other command in my sender-contract root directory. I don't think this will work, I think I need to modify the command some way but I'm hella confused at this point. *scratch that*

I'm going to run the command in the newly generated `artifacts` directory. Here goes nothing....

```
export CHAIN_ID="pisco-1"
export DENOM="uluna"
export BINARY="terrad"
export RPC="https://terra-testnet-rpc.polkachu.com:443"
export TXFLAG="--node $RPC --chain-id $CHAIN_ID --gas-prices 0.25$DENOM --gas auto --gas-adjustment 1.3 -y -b block --output json"
```

Nothing happened. Gonna read through the Discord chat one last time and call it a night. Also going to ask a question about where to go / am I on the right track.

~ ~ ~ ~ ~

So I read through the Discord chat and it seems this is the point where I need to create a wallet and fund it with fake luna.

To do this, I need to use the following command `terrad keys add <name> [flags]`

## Test 1:
`terrad keys add test1 --dry-run`
The `--dry-run` flag performs the action but doesnt' add the key to local keystore.

* * * * * * * * *

**Result:**

name: test1
  type: local
  address: terra1ypetnu90y8ehe5358fdtkyxn7vu4aa0etajcm0
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Au3STiM8OTAKhaPL+6xi4glnsFbZDV9SpN/5YUS3sgbx"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

cluster like two since pill base situate piano refuse phrase tilt dentist canyon depart glide bridge amused cage minimum trim intact movie roof round

* * * * * * * * *

- - - - - - - - - - - - - - - - - - - - - - - - -

To summarize:

[x] Write a cosmwasm smart contract that compiles.

[x] Install terrad ~ some sort of framework for interacting with terra testnet

[x] Package up the cosmwasm smart contract into a file that can be deployed to the testnet
	[x] run `cargo wasm` for testing purposes
	[x] then run that big CLI command to build as a contract.wasm in $CODE

[] Create and fund a terra "pisco-1" wallet with fake luna
	[] create wallet
	[] fund wllet

[] Deploy the smart contract to the testnet

[] Interact with the contract.








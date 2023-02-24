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




## Actions

### Create New minimal template called "wba-cw20-migration"

`cargo generate --git https://github.com/CosmWasm/cw-template.git --name wba-cw20-migration -d minimal=true`

### 

## Steps

1. `cargo generate` new minimal template called "wba-cw20-migration"

2. clone the cw20 base contract and load it to a testnet.

3. write code in "wba-cw20-migration" to do a bunch fo tasks:
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

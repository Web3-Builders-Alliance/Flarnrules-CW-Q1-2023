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




##

`cargo generate --git https://github.com/CosmWasm/cw-template.git --name wba-cw20-migration -d minimal=true`

## Process

1. Create a workspace. Requires 2 contracts.

2. Fork base code for both contracts.

3. Clone both contracts into my new workspace.

4. Pick a testnet. Javier seems to like Luna, but what if we use Juno testnet?

5. 

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

# Steps to instantiate a contract on pisco-1 testnet

## Links required

* https://github.com/CosmWasm/cw-template
* https://github.com/CosmWasm/cw-plus
* https://github.com/CosmWasm/cw-plus/tree/main/contracts/cw1-whitelist
* https://docs.terra.money/develop/terrad/install-terrad/
* https://faucet.terra.money/


1. [x] Generate new project, start with cw-template https://github.com/CosmWasm/cw-template

    * Enter `cargo generate --git https://github.com/CosmWasm/cw-template.git --name PROJECT_NAME -d minimal=true` into terminal in my Cluster2/code-challenges directory
    * PROJECT_NAME -> whitelist_test_contract
    * `cargo generate --git https://github.com/CosmWasm/cw-template.git --name PROJECT_NAME -d minimal=true`

2. [x] Pick a sample contract from cw-plus https://github.com/CosmWasm/cw-plus

    * I picked cw1-whitelist https://github.com/CosmWasm/cw-plus/tree/main/contracts/cw1-whitelist

3. [x] Copy and paste the code from each of the src files into my src files.

    * contract.rs
    * error.rs
    * integration_tests.rs
    * lib.rs
    * msg.rs
    * state.rs

4. [x] Make sure Cargo.toml is configured correctly

    * Need to check dependencies, cw1, cw2, etc.

5. [x] Make sure that the contract compiles

    * run `cargo run` in the root directory of the project, in this case ~/../whitelist_test_contract

6. [x] Create optimized wasm file

    * run `docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.11`

    * This should create an `artifacts` directory in the root directory of the project

7. [x] Install necessary blockchain code to interact with desired blockchain

    * First, you need to install the tools to interact with your choice of blockchain
    * In this case, I am using a terra testnet pisco-1, so we need the Terrad tool.
    * This can be installed following the steps at https://docs.terra.money/develop/terrad/install-terrad/
    * Check you installed it correctly with the command `terrad version --long`

8. [x] Create a testnet wallet and fund it with test tokens:

    * run the command `terrad keys add <wallet name>`
    * we can create a new wallet: test3
    * go to a faucet to fund that wallet, by pasting the public key in the address bar https://faucet.terra.money/
    **name:** test3
    **address:** terra13vg5uqz75nzamqw8u03qydvc6tgntcfqwd3afr
    **mnemonic:** guard cage little attract thing toast debate couch replace chest hawk post acoustic lesson coconut story clerk rally hockey pipe into hungry match maple
    **pubkey:** '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A2ULirKgRDudpplI589W/ZbWEyeDTTuiZsuOzJzuKIQ8"}'


9. [] Upload the contract to a testnet

    * Use the `terrad tx wasm store` command
    * make sure to run this from the root directory of the contract
    * My previous attempt worked with the below command:
    * `terrad tx wasm store ./artifacts/test_cw1_whitelist.wasm --from test3 $TXFLAG -y -b block`
    * Big block of text printed to the terimal is good, if you get an error... need to do some debugging.
    * Keep getting error... I'm stuck here.
    * current error: `Error: post failed: Post "http://localhost:26657": dial tcp 127.0.0.1:26657: connect: connection refused`
    * I'm going to do code journal 6 about this error.
    * The code id is important. In this case it was `xxxx`

10. [] Instantiate the contract

    * This is more complex. We need to run a lengthy command with lots of flags to correctly instantiate the contract.
    * I have not successfully done this.
    * Here's the command for another contract I tried - the contract that I wrote in response to the code challenge. This contract steals heavily from the work of WBA cadets Ganz and Ben.
    * `terrad tx wasm instantiate 7659 "'{}'" --from test1 --label WBA_test_token_sender --node https://terra-testnet-rpc.polkachu.com:443 --chain-id pisco-1 --gas-prices 0.25uluna --gas auto --gas-adjustment 1.3 -y -b block --output json --admin "terra1alpwx047phjghyzzsnl85r3gyg0u67adlytpz4`
    * This command threw an error: `payload msg: invalid`
    * My contract didn't have anything written for the `InstantiateMsg` message in `msg.rs`
    * This time I'm just using a standard whitelist contract to see if I can get past this step.

BONUS 11. [] Use the contract

    * Not really there yet.


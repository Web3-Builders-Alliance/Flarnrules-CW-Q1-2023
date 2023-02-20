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

*I dont think I can do anything with this, so I'm redoing test1 without the `--dry-run` flag*

* * * * * * * * *

name: test1
  type: local
  address: terra1alpwx047phjghyzzsnl85r3gyg0u67adlytpz4
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"ArjJNMOnQxrbZkGJSAaE4PgHcCUn0W37Ms4DlAWu/ZxN"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

left ensure midnight leader afraid ill depend lab unhappy sugar gallery decrease case scorpion mammal salt notice deliver become useful valley umbrella wagon salad

I also created a **test2** wallet

test2
name: test2
  type: local
  address: terra1w2mp25v679253husuua244ck44e6cdyxq9x2z7
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"ApcPDuIQILfiPSt9/D+B/uzfrGAId/u1VLsDljKD60mw"}'
  mnemonic: ""

insect slide candy state adjust traffic ceiling senior hover cat fat reunion boat effort tomorrow token radar palace emotion siege nerve peasant super ready

= = = = = = = = = = = = = = = = = = = = = = = = =

To upload the contract, I ran the following command from my ~/repos/Flarnrules-CW-Q1-2023/Cluster-2/code-challenges/sender-contract directory:

`terrad tx wasm store ./artifacts/receiver_contract.wasm --from test1 $TXFLAG -y -b block`

the `test1` is the name of the first wallet I created with terrad. The terminal printed this huge output:

```
gas estimate: 1174243
{"height":"4250265","txhash":"3732A3BB81452B716FB26B848272D2BDB6B8AD152E364B06B26051A01525EB75","codespace":"","code":0,"data":"0A250A1E2F636F736D7761736D2E7761736D2E76312E4D736753746F7265436F6465120308EB3B","raw_log":"[{\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmwasm.wasm.v1.MsgStoreCode\"},{\"key\":\"module\",\"value\":\"wasm\"},{\"key\":\"sender\",\"value\":\"terra1alpwx047phjghyzzsnl85r3gyg0u67adlytpz4\"}]},{\"type\":\"store_code\",\"attributes\":[{\"key\":\"code_id\",\"value\":\"7659\"}]}]}]","logs":[{"msg_index":0,"log":"","events":[{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgStoreCode"},{"key":"module","value":"wasm"},{"key":"sender","value":"terra1alpwx047phjghyzzsnl85r3gyg0u67adlytpz4"}]},{"type":"store_code","attributes":[{"key":"code_id","value":"7659"}]}]}],"info":"","gas_wanted":"1174243","gas_used":"917497","tx":null,"timestamp":"","events":[{"type":"coin_spent","attributes":[{"key":"c3BlbmRlcg==","value":"dGVycmExYWxwd3gwNDdwaGpnaHl6enNubDg1cjNneWcwdTY3YWRseXRwejQ=","index":true},{"key":"YW1vdW50","value":"MjkzNTYxdWx1bmE=","index":true}]},{"type":"coin_received","attributes":[{"key":"cmVjZWl2ZXI=","value":"dGVycmExN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxrYWVxZmE=","index":true},{"key":"YW1vdW50","value":"MjkzNTYxdWx1bmE=","index":true}]},{"type":"transfer","attributes":[{"key":"cmVjaXBpZW50","value":"dGVycmExN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxrYWVxZmE=","index":true},{"key":"c2VuZGVy","value":"dGVycmExYWxwd3gwNDdwaGpnaHl6enNubDg1cjNneWcwdTY3YWRseXRwejQ=","index":true},{"key":"YW1vdW50","value":"MjkzNTYxdWx1bmE=","index":true}]},{"type":"message","attributes":[{"key":"c2VuZGVy","value":"dGVycmExYWxwd3gwNDdwaGpnaHl6enNubDg1cjNneWcwdTY3YWRseXRwejQ=","index":true}]},{"type":"tx","attributes":[{"key":"ZmVl","value":"MjkzNTYxdWx1bmE=","index":true},{"key":"ZmVlX3BheWVy","value":"dGVycmExYWxwd3gwNDdwaGpnaHl6enNubDg1cjNneWcwdTY3YWRseXRwejQ=","index":true}]},{"type":"tx","attributes":[{"key":"YWNjX3NlcQ==","value":"dGVycmExYWxwd3gwNDdwaGpnaHl6enNubDg1cjNneWcwdTY3YWRseXRwejQvMA==","index":true}]},{"type":"tx","attributes":[{"key":"c2lnbmF0dXJl","value":"cWp1L1ZMSXcrSS8xaGUrMmNta1A5dittWHdHUWVvMEtPREdFNm1MczROTnJtNHpvSWNWQmViUEZ1OFFSSDFZT2w0SGdGV0xwK3BvZ2t5MitNd1VQL3c9PQ==","index":true}]},{"type":"message","attributes":[{"key":"YWN0aW9u","value":"L2Nvc213YXNtLndhc20udjEuTXNnU3RvcmVDb2Rl","index":true}]},{"type":"message","attributes":[{"key":"bW9kdWxl","value":"d2FzbQ==","index":true},{"key":"c2VuZGVy","value":"dGVycmExYWxwd3gwNDdwaGpnaHl6enNubDg1cjNneWcwdTY3YWRseXRwejQ=","index":true}]},{"type":"store_code","attributes":[{"key":"Y29kZV9pZA==","value":"NzY1OQ==","index":true}]}]}
```

I think my contract is on the blockchain now. According to the cosmwasm book (which is not finished, and I would be interested in assisting with readability and user friendliness... there's some stuff that's kind of poorly explained in there), I next need to instantiate the contract to create it's new instance.

I need to search through this massive output to find the `code_id` which I think is `7659`. I think this means that there have been 7,658 contracts uploaded before this one to this testnet.

With the `code_id` I should be able to instantiate my contract. I need to run the following command:

```
terrad tx wasm instantiate 7659 \
  '{ "admin": "terra1alpwx047phjghyzzsnl85r3gyg0u67adlytpz4", "members": [] }' \
  --from wallet --label "Group" --no-admin $TXFLAG -y
```

This didn't work. I got an error: `wallet.info: key not found`

- - - 

Okay here's a solution. At ~48 minutes into last Wednesday's class, Javier gave some instructions:

1. Have terrad
2. Have a wallet added to your denom `terrad keys add <name>` for testing purposes just generate a random one. This instruction was not clear. `terrad <keys> add <name>`
3. terrad tx wasm insantiate <code_id>"{}" --from<wallet> --label"label" --node --gas-adjustment 1.3 -y-b block --output json --admin "juno1...". Then talked about creating scripts. Bruh this is impossible to follow.


- - -

That stuff above is way to disjointed for me to make any progress....

The command that I am stuck on currently is the instantiate command.

terrad says:

terrad tx wasm instantiate [code_id_int64] [json_encoded_init_args] --label [text] --admin [address,optional] --amount [coins,optional] [flags]

let's break this down.

1. **terrad tx wasm instantiate** : this is the start of the command, just need to write it out
2. **[code_id_int64]** : I'm pretty certain this is the code_id I located earlier, in this case *7659*
3. **[json_encoded_init_args]** : I don't really understand this one.
4. **--label [text]** : I don't understand this one.
5. **--admin [address,optional]** : This is *not* the public key that loaded the contract
6. **--amount [coins,optional]** : I'll get back to this
7. **[flags]** : There's a ton of flags. I need to figure out which ones I need.

I need to figure out 3, 4, 5, 6 and 7.

[] Item 3 - json_encoded_init_args
[] Item 4 - --label [text]
[] Item 5 - admin [address,optional]
[] Item 6 - amount [coins,optional]
[] Item 7 - flags

Cluster 2 slides seem to indicate a different order of items in the instantiate command.

`junod tx wasm instantiate <code_id> "'{}'" --from <wallet> --label "label" --node <rpc_endpoint> --chain-id uni-5 --gas-prices 0.25ujuno --gas auto --gas-adjustment 1.3 -y -b block --output json --admin "juno1…"`

1 is <chain tool name> tx wasm instantiate 

2 <code_id>

3. just says "'{}'"   <<<<<<< wtf.......

4. --from <wallet>

5. --label "label"

6. -node <rpc_endpoint>

7. --chain-id <chain-id>

8. --gas-prices 0.25<denom>

9. --gas auto

10. --gas-adjustment 1.3 -y -b block --output json 

11. --admin "admin address"

= = = =

Let's try the above command:

`terrad tx wasm instantiate 7659 "'{}'" --from test1 --label WBA_test_token_sender --node https://terra-testnet-rpc.polkachu.com:443 --chain-id pisco-1 --gas-prices 0.25uluna --gas auto --gas-adjustment 1.3 -y -b block --output json --admin "terra1alpwx047phjghyzzsnl85r3gyg0u67adlytpz4"`

- - - - - - - - - - - - - - - - - - - - - - - - -

To summarize:

[x] Write a cosmwasm smart contract that compiles.

[x] Install terrad ~ some sort of framework for interacting with terra testnet

[x] Package up the cosmwasm smart contract into a file that can be deployed to the testnet
	[x] run `cargo wasm` for testing purposes
	[x] then run that big CLI command to build as a contract.wasm in $CODE

[x] Create and fund a terra "pisco-1" wallet with fake luna
	[x] create wallet (created test1 and test2, run `terrad keys list` to see)
	[x] fund wllet

[] Deploy the smart contract to the testnet

[] Interact with the contract.








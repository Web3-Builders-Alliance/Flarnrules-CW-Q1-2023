# Code Journal 6 - Cluster 2 (week 2-3)

*Investigate Terrad code loading error*

My attempt to load the contract with the following command:  

`terrad tx wasm store ./artifacts/test_cw1_whitelist.wasm --from test3 $TXFLAG -y -b block`

Gave me the following error:

`Error: post failed: Post "http://localhost:26657": dial tcp 127.0.0.1:26657: connect: connection refused`

Let's break this down:

1. Post "http://localhost:26657": dial tcp 127.0.0.1:26657

I am seemingly tring to connect to a node at `localhost:26657`

Maybe I should try to fix this command? Let's investigate the "store" command.

= = = = = = =

so first... the command starts with:

`terrad tx`

Running `terrad tx -h` in my termimal tells me that:

**Usage:**
- terrad tx [flags]
- terrad tx [command]

**Available commands:**
- authz
- ...
- wasm <- here we are

So actually, we are looking at a subcommand of the subcommand to terrad tx.

1. terrad
2. tx
3. wasm <- need to look this up

Running `terrad tx wasm -h` tells me that:

**Usage:**
- terrad tx wasm [flags]
- terrad tx wasm [command]

**Available commands:**
- clear-contract-admin
- ...
- store <--- here we are, lets look up this next

Running `terrad tx wasm store -h` tells me that:

**Usage:**
- terrad tx wasm store [wasm file] [flags]

**Flags Used:**
1. `--from string` :Name or address of private key with which to sign. *I got this figured out*
2. `$txflag` :I don't even see this anywhere??? *Let's just get rid of it.*
3. `-y` :Skip tx broadcasting prompt confirmation. *Let's keep this.*
4. `-b block` :Transaction broadcasting mode (sync|async|block) (default "sync"). *Why deviate from sync?*

**Additiona Flags to Consider:**
1. `--node string` :<host>:<port> to tendermint rpc interface for this chain. Maybe we use *https://terra-testnet-rpc.polkachu.com:443*
2. `--chain-id string` : The network chain ID. *In this case that would be 'pisco-1'?*


**Let's build a new command**

## Attempt

I will run the following command:  
`terrad tx wasm store test_cw1_whitelist.wasm --from test3 --node https://terra-testnet-rpc.polkachu.com:443 --chain-id pisco-1 -y -b block`

At this directory:  
`~/repos/Flarnrules-CW-Q1-2023/Cluster-2/code-challenges/test-cw1-whitelist/artifacts$`

Result:  
```
code: 13
codespace: sdk
data: ""
events: []
gas_used: "3429"
gas_wanted: "200000"
height: "0"
info: ""
logs: []
raw_log: 'insufficient fees; got:  required: 30000uluna: insufficient fee'
timestamp: ""
tx: null
txhash: 45FDC08B674F0C568F7B318859D9404450BC2BDB06ACAF53975EFF622DE747BE
```
Okay! Getting somewhere.

Looks like I need more gas. Will need to add some more flags. Let's just add the `--gas auto` flag.

## Attempt 2

I will run the following command:  
`terrad tx wasm store test_cw1_whitelist.wasm --from test3 --gas auto --node https://terra-testnet-rpc.polkachu.com:443 --chain-id pisco-1 -y -b block`

At this directory:  
`~/repos/Flarnrules-CW-Q1-2023/Cluster-2/code-challenges/test-cw1-whitelist/artifacts$`

Result:
```
gas estimate: 1196704
code: 13
codespace: sdk
data: ""
events: []
gas_used: "3429"
gas_wanted: "1196704"
height: "0"
info: ""
logs: []
raw_log: 'insufficient fees; got:  required: 179506uluna: insufficient fee'
timestamp: ""
tx: null
txhash: 56575A80A9FEB1BA188CE082D02CD9C22E17314B9B3D555A963BE7B9EF552AB4
```
Okay I need fees, I need more gas... --gas auto flag does nothing.

## Attempt 3

I will run the following command:  
`terrad tx wasm store test_cw1_whitelist.wasm --from test3 --gas 1500000 --fees 200000uluna --node https://terra-testnet-rpc.polkachu.com:443 --chain-id pisco-1 -y -b block`

At this directory:  
`~/repos/Flarnrules-CW-Q1-2023/Cluster-2/code-challenges/test-cw1-whitelist/artifacts$`

Result:
```
code: 13
codespace: sdk
data: ""
events: []
gas_used: "3429"
gas_wanted: "1500000"
height: "0"
info: ""
logs: []
raw_log: 'insufficient fees; got: 200000uluna required: 225000uluna: insufficient
  fee'
timestamp: ""
tx: null
txhash: 0982BB23D9D0C8FB4139D63A14A714A2EFBDB2432EC50E3EB1EDE8A013F630F4
```

Okay, what the hell, how do I pay more gas? Also, the fee increased to 225000 resulting in an insufficient fee. That's absurd.

# Attempt 4

Time to steal some of the stuff from the instantiate command.

I will run the following command:  
`terrad tx wasm store test_cw1_whitelist.wasm --from test3 --gas-prices 0.25uluna --gas auto --gas-adjustment 1.3 --node https://terra-testnet-rpc.polkachu.com:443 --chain-id pisco-1 -y -b block`

At this directory:  
`~/repos/Flarnrules-CW-Q1-2023/Cluster-2/code-challenges/test-cw1-whitelist/artifacts$`

Result:
```
gas estimate: 1555871
code: 0
codespace: ""
data: 0A250A1E2F636F736D7761736D2E7761736D2E76312E4D736753746F7265436F6465120308C03C
events:
- attributes:
  - index: true
    key: c3BlbmRlcg==
    value: dGVycmExM3ZnNXVxejc1bnphbXF3OHUwM3F5ZHZjNnRnbnRjZnF3ZDNhZnI=
  - index: true
    key: YW1vdW50
    value: Mzg4OTY4dWx1bmE=
  type: coin_spent
- attributes:
  - index: true
    key: cmVjZWl2ZXI=
    value: dGVycmExN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxrYWVxZmE=
  - index: true
    key: YW1vdW50
    value: Mzg4OTY4dWx1bmE=
  type: coin_received
- attributes:
  - index: true
    key: cmVjaXBpZW50
    value: dGVycmExN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxrYWVxZmE=
  - index: true
    key: c2VuZGVy
    value: dGVycmExM3ZnNXVxejc1bnphbXF3OHUwM3F5ZHZjNnRnbnRjZnF3ZDNhZnI=
  - index: true
    key: YW1vdW50
    value: Mzg4OTY4dWx1bmE=
  type: transfer
- attributes:
  - index: true
    key: c2VuZGVy
    value: dGVycmExM3ZnNXVxejc1bnphbXF3OHUwM3F5ZHZjNnRnbnRjZnF3ZDNhZnI=
  type: message
- attributes:
  - index: true
    key: ZmVl
    value: Mzg4OTY4dWx1bmE=
  - index: true
    key: ZmVlX3BheWVy
    value: dGVycmExM3ZnNXVxejc1bnphbXF3OHUwM3F5ZHZjNnRnbnRjZnF3ZDNhZnI=
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: dGVycmExM3ZnNXVxejc1bnphbXF3OHUwM3F5ZHZjNnRnbnRjZnF3ZDNhZnIvMA==
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: MHdsd1I2b1VlKzUyVGY5OVc3dm5taWtJbzNqRDd3eVRVdFQ2aEJBbGszbDFTRHpNdldpRGRFSzFlOWExenM5YUtJb2hPZXBFeisvakNJUmZMRlJxMWc9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: L2Nvc213YXNtLndhc20udjEuTXNnU3RvcmVDb2Rl
  type: message
- attributes:
  - index: true
    key: bW9kdWxl
    value: d2FzbQ==
  - index: true
    key: c2VuZGVy
    value: dGVycmExM3ZnNXVxejc1bnphbXF3OHUwM3F5ZHZjNnRnbnRjZnF3ZDNhZnI=
  type: message
- attributes:
  - index: true
    key: Y29kZV9pZA==
    value: Nzc0NA==
  type: store_code
gas_used: "1211060"
gas_wanted: "1555871"
height: "4275325"
info: ""
logs:
- events:
  - attributes:
    - key: action
      value: /cosmwasm.wasm.v1.MsgStoreCode
    - key: module
      value: wasm
    - key: sender
      value: terra13vg5uqz75nzamqw8u03qydvc6tgntcfqwd3afr
    type: message
  - attributes:
    - key: code_id
      value: "7744"
    type: store_code
  log: ""
  msg_index: 0
raw_log: '[{"events":[{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgStoreCode"},{"key":"module","value":"wasm"},{"key":"sender","value":"terra13vg5uqz75nzamqw8u03qydvc6tgntcfqwd3afr"}]},{"type":"store_code","attributes":[{"key":"code_id","value":"7744"}]}]}]'
timestamp: ""
tx: null
txhash: D4C88D7623B6CD7911F9171FD89B4411079042049E92CAD1EF2BB4AFCC71F8BB
```
Okay! I think I just did the thing.  
Now I need to figure out what to do next. I can see the code_id is 7744, so there's been like 100 contracts loaded since I successfully loaded my other contract last night. Interesting. Would be cool to keep track of this. I wonder if there's a way to listen in on the blockchain or query the chain to see how frequently contracts get loaded and instantiated.

Time to do the next step!!!!!!!

# Instantiate the Contract

## Attempt 1-100

I will run the following command:
`terrad tx wasm instantiate 7744 '{"admins": ["terra13vg5uqz75nzamqw8u03qydvc6tgntcfqwd3afr"], "mutable": true}' --label WBA_test_cw1_whitelist --admin terra13vg5uqz75nzamqw8u03qydvc6tgntcfqwd3afr --from test3 --node https://terra-testnet-rpc.polkachu.com:443 --chain-id pisco-1 --gas-prices 0.25uluna --gas auto --gas-adjustment 1.3 -y -b block --output json `

At this directory:  
`~/repos/Flarnrules-CW-Q1-2023/Cluster-2/code-challenges/test-cw1-whitelist/artifacts$`

Result: `Error: payload msg: invalid`

Okay.. still stuck after rewriting the JSON encoded init arguments. I need help again.

## Attempt 100

It worked!

```
gas estimate: 192531
{"height":"4276021","txhash":"F4CE7D332BA9FC790BAB814BB229470C718C379AE970C6871E2441D740AC9B2D","codespace":"","code":0,"data":"0A6E0A282F636F736D7761736D2E7761736D2E76312E4D7367496E7374616E7469617465436F6E747261637412420A407465727261317430306D3566306E6672713776663976356E7832333961663472726C647579653839743479387A303374713578307678716D337339377638326B","raw_log":"[{\"events\":[{\"type\":\"instantiate\",\"attributes\":[{\"key\":\"_contract_address\",\"value\":\"terra1t00m5f0nfrq7vf9v5nx239af4rrlduye89t4y8z03tq5x0vxqm3s97v82k\"},{\"key\":\"code_id\",\"value\":\"7744\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmwasm.wasm.v1.MsgInstantiateContract\"},{\"key\":\"module\",\"value\":\"wasm\"},{\"key\":\"sender\",\"value\":\"terra13vg5uqz75nzamqw8u03qydvc6tgntcfqwd3afr\"}]}]}]","logs":[{"msg_index":0,"log":"","events":[{"type":"instantiate","attributes":[{"key":"_contract_address","value":"terra1t00m5f0nfrq7vf9v5nx239af4rrlduye89t4y8z03tq5x0vxqm3s97v82k"},{"key":"code_id","value":"7744"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgInstantiateContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"terra13vg5uqz75nzamqw8u03qydvc6tgntcfqwd3afr"}]}]}],"info":"","gas_wanted":"192531","gas_used":"162536","tx":null,"timestamp":"","events":[{"type":"coin_spent","attributes":[{"key":"c3BlbmRlcg==","value":"dGVycmExM3ZnNXVxejc1bnphbXF3OHUwM3F5ZHZjNnRnbnRjZnF3ZDNhZnI=","index":true},{"key":"YW1vdW50","value":"NDgxMzN1bHVuYQ==","index":true}]},{"type":"coin_received","attributes":[{"key":"cmVjZWl2ZXI=","value":"dGVycmExN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxrYWVxZmE=","index":true},{"key":"YW1vdW50","value":"NDgxMzN1bHVuYQ==","index":true}]},{"type":"transfer","attributes":[{"key":"cmVjaXBpZW50","value":"dGVycmExN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxrYWVxZmE=","index":true},{"key":"c2VuZGVy","value":"dGVycmExM3ZnNXVxejc1bnphbXF3OHUwM3F5ZHZjNnRnbnRjZnF3ZDNhZnI=","index":true},{"key":"YW1vdW50","value":"NDgxMzN1bHVuYQ==","index":true}]},{"type":"message","attributes":[{"key":"c2VuZGVy","value":"dGVycmExM3ZnNXVxejc1bnphbXF3OHUwM3F5ZHZjNnRnbnRjZnF3ZDNhZnI=","index":true}]},{"type":"tx","attributes":[{"key":"ZmVl","value":"NDgxMzN1bHVuYQ==","index":true},{"key":"ZmVlX3BheWVy","value":"dGVycmExM3ZnNXVxejc1bnphbXF3OHUwM3F5ZHZjNnRnbnRjZnF3ZDNhZnI=","index":true}]},{"type":"tx","attributes":[{"key":"YWNjX3NlcQ==","value":"dGVycmExM3ZnNXVxejc1bnphbXF3OHUwM3F5ZHZjNnRnbnRjZnF3ZDNhZnIvMQ==","index":true}]},{"type":"tx","attributes":[{"key":"c2lnbmF0dXJl","value":"Wjh4c0lhQWFwRWxQN2Z3YXBOQzNvNHB2aGF3THNwK2xGUDZMMFJwaU9wZ2xyK3pQa0VDV283clJHUkFnMEJrY0VzZ2lWaW54SldwQjJBcWUxT0RyUVE9PQ==","index":true}]},{"type":"message","attributes":[{"key":"YWN0aW9u","value":"L2Nvc213YXNtLndhc20udjEuTXNnSW5zdGFudGlhdGVDb250cmFjdA==","index":true}]},{"type":"message","attributes":[{"key":"bW9kdWxl","value":"d2FzbQ==","index":true},{"key":"c2VuZGVy","value":"dGVycmExM3ZnNXVxejc1bnphbXF3OHUwM3F5ZHZjNnRnbnRjZnF3ZDNhZnI=","index":true}]},{"type":"instantiate","attributes":[{"key":"X2NvbnRyYWN0X2FkZHJlc3M=","value":"dGVycmExdDAwbTVmMG5mcnE3dmY5djVueDIzOWFmNHJybGR1eWU4OXQ0eTh6MDN0cTV4MHZ4cW0zczk3djgyaw==","index":true},{"key":"Y29kZV9pZA==","value":"Nzc0NA==","index":true}]}]}
```

Not sure what to do next...
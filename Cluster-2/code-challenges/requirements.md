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

* [] Golang v1.18 linux/amd64
* [] Ensure `GOPATH` and `GOBIN` environment variables are set up correctly
* [] Install build-essential -> THIS IS A MALICIOUS LINK

Install from source

`git clone https://github.com/terra-money/core`
`cd core`
`git checkout [latest version]`



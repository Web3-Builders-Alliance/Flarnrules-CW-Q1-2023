# CosmWasm Quick Start

If you are reading this you probably have some concept of blockchains, cryptocurrencies, the cosmos network, and CosmWasm. You probably have a general idea of the Inter-Blockchain Communication Protocol (IBC) and other concepts related to messages between blockchains.

# Steps

1. Setting up the development environment
2. Testnet setup

## 1 Setting up the develpment environment

To follow the quick start, you will need the following:

1. The Rust Programming Language
2. The Go Programming Language
3. wasmd
4. Docker


You will need to install the Rust programming language on your machine.

You will need the Wasmrust compiler backend installed in order to build Wasm binaries.
`rustup target add wasm32-unknown-unknown`

Let's break down this command:

- rustup --
- target --
- add --
- wasm32-unknown-unknown --

You will need to install wasmd, which requires the Go programming language.

To install wasmd run the following commands:

`git clone github@github.com:CosmWasm/wasmd.git` // Clones the wasmd github repo
`cd ./wasmd` // change directory into the new repo ./wasmd
`make install` // installs wasmd



## 2 Testnet setup

We will be using the CosmWasm test net malaga-420, which is the generic CosmWasm test net.

The command line tool `wasmd` is configured via environment variables, so we need to set up a `malaga.env` file that sets the proper values. This step is already going to lose a bunch of people unfamiliar with this process, as it lost me the first couple of times I tried to do this.

Let's break this up into multiple sub-steps.

- **2.1:** Create a `malaga.env` file

## 3 


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

Quick start with `wasmd`. I think I'm going to start here.


# Code Journal 5 - Cluster 2 (week 2-3)

*Structure / architecture of tendermint BFT blockchains*
*because I can't figure out how to deploy on terra testnet*

This code journal consists of notes from the youtube video "Terra, a new platform for DeFi DApps with CosmWasm - Developer Workshop".  

This youtube video was recommended by Japarjam in response to my confusion regarding the deployment code challenge from Week 3.  

# Terra SDKs

There are two Terra SDKs - Jigu and TerraJS. This video covers Jigu. Jigu allows a developer to use Python to interact with an LCD connected to a terrad node. ~ faucet.terra.money  

# Smart Contract Architecture

Three entry points:

1. The "constructor" init() - MsgInstantiateContract

2. The handle method handl() - MsgExecuteContract

3. The querier query()

Workflow:  
![Uploading and Instantiating](https://github.com/flarnrules/images/blob/main/Uploading%20Code%20and%20Instantiating.png)





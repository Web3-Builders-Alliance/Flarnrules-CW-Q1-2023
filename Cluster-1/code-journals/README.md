Code Journals - Cluster 1
=
I will be looking at the CW-20 base contract from the collection of contracts in the official cw-plus repo maintained by the CosmWasm org.
=
These contracts are all located here:
https://github.com/CosmWasm/cw-plus/tree/main/contracts
=
The contract cw20-base is a basic implementation of a cw20 contract implementing the CW20 spec. Let's dive into the CW20 spec to better understand what we mean by that.
=

CW20 is a specification for fungible tokens based on CosmWasm.
This is loosely based on Ethereum's ERC20 token design.

=
There are 5 main sections of the README.md file for cw20. The specification is split into multiple sections. A contract does not need to implement all of the sections, but it must implement the base section:
 - Base, Allowances, Mintable, Enumerable, Marketing

=
Base
=
All amounts are handled as uint128. There are no decimals, this is handled bu UI.
=

The contract consists of the following main components:
- Messages
- Queries
- 

=
Messages
=
There are three Messages:
1 - Transfer{recipient, amount}
2 - Send{contract, amount, msg}
3 - Burn{amount}
#Code Journals - Cluster 1

I will be looking at the CW-20 base contract from the collection of contracts in the official **cw-plus** repo that exists in the CosmWasm organization.
=
The contracts for the **cw-plus** repo are all located here:
https://github.com/CosmWasm/cw-plus/tree/main/contracts
=
The contract cw20-base is a basic implementation of a cw20 contract implementing the CW20 spec. Let's dive into the CW20 spec to better understand what we mean by that.
=

CW20 is a specification for fungible tokens based on CosmWasm.
This is loosely based on Ethereum's ERC20 token design.

=
The CW20 specification is split into 5 sections. A contract does not need to implement all of the sections, but it must implement the base section:
 - Base, Allowances, Mintable, Enumerable, Marketing

=
##Base

All amounts are handled as uint128. There are no decimals, this is handled by user interface implementation. This means that the quantities of tokens are much larger than the quantities that a user will see. This is something I didn't realize, I would like to understand why it was implemented like this.
=

The base contract consists of the following main components:
- Messages
- Queries
- Receiver

=
Messages
=
There are three Messages:
1 - Transfer{recipient, amount}
2 - Send{contract, amount, msg}
3 - Burn{amount}
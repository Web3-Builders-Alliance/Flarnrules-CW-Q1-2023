/*

Cluster 2 Code Challenge

Need two actors: Sender and Receiver.

The Sender:
- Receives native tokens from anyone and forwards them to the Receiver.
- An address that can take any generic token and forward to the Receiver.
- Stores how many tokens have been received/forwarded.
- A Query can return the total tokens received/forwarded.
- Save to state the info.funds that have been received/forwarded

The Receiver:
- Stores the received tokens until the owner of the contract claims them.
- Can accept any generic type, found in info,funds
- The owner can claim part of the tokens held by the Receiver, or all of them at once.
- Owner is the admin of the contract and can claim from the receiver.

Optional:
- The Sender is notified when Reciever transfers funds.
- The Sender is notified when the funds are claimed by the owner.

Resources:

- cw-template: https://github.com/CosmWasm/cw-template
- cw-storage-plus: https://github.com/CosmWasm/cw-storage-plus
- cw-plus: https://github.com/CosmWasm/cw-plus


*/

// import coin
use cosmwasm_std::Coin;
use cw_storage_plus::Item;

pub const TOKENS_SENT: Item<Coin> = Item::new("tokens_sent");
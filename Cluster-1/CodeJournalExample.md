use cosmwasm_std::Uint128;		    //You can comment on the side, like this
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use cw20::{Cw20ReceiveMsg, Denom};
pub use cw_controllers::ClaimsResponse;
use cw_utils::Duration;

#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct InstantiateMsg {
    /// denom of the token to stake
    pub denom: Denom,
    pub tokens_per_weight: Uint128,
    pub min_bond: Uint128,
    pub unbonding_period: Duration,

    // admin can only add/remove hooks, not change other parameters
    pub admin: Option<String>,
}


//YOU CAN ALSO BOLD/ CAPS AND COMMENT ABOVE A SECTION LIKE THIS. 


#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    /// Bond will bond all staking tokens sent with the message and update membership weight
    Bond {},
    /// Unbond will start the unbonding process for the given number of tokens.
    /// The sender immediately loses weight from these tokens, and can claim them
    /// back to his wallet after `unbonding_period`
    Unbond { tokens: Uint128 },
    /// Claim is used to claim your native tokens that you previously "unbonded"
    /// after the contract-defined waiting period (eg. 1 week)
    Claim {},

    /    Hooks {},


Adding Additional Questions
Copy the questions below and provide the answer for each Code Journal you complete.
1)  What are the concepts (borrowing, ownership, vectors etc)
    The Concepts in the Code are… they...
2) What is the organization?
    The code is organized...
3) What is the contract doing? What is the mechanism? 
    The contract is a staking contract and the mechanism…

4) How could it be better? More efficient? Safer? 
    The code could be safer and better if...
use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::Coin;

#[derive()]
#[cw_serde]
pub struct InstantiateMsg {
    
}

#[cw_serde]
pub enum ExecuteMsg {
    ForwardTokens { forward_to_addr: String },

}

#[cw_serde]
#[derive(QueryResponses)]
pub enum QueryMsg {
    #[returns(GetTokensRecievedResponse)]
    TokensReceived { tokens: Coin },

    #[returns(GetTokensClaimedResponse)]
    TokensClaimed { tokens: Coin },
}

#[cw_serde]
pub struct GetTokensClaimedResponse {
    tokens: Coin,
}

#[cw_serde]
pub struct GetTokensRecievedResponse {
    tokens: Coin,
}
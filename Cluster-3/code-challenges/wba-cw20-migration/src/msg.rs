use cosmwasm_schema::{cw_serde, QueryResponses};

#[cw_serde]
pub struct InstantiateMsg {

}

#[cw_serde]
pub enum ExecuteMsg {
    AcceptMint {
        // allow a user to send uluna to this contract, send message to CW20 contract and mint corresponding amount of CW20 tokens.
        denom
        amount 
        validate is luna
        store in variable (received)
        create submessage
            mint and transfer to the cw20-contract
            tell cw20-contract to mint (received) and send to address

    }
}

#[cw_serde]
#[derive(QueryResponses)]
pub enum QueryMsg {}

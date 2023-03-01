use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use cosmwasm_std::{Addr, Decimal, Uint128};
use cw20::Denom;
use cw_storage_plus::Item;

pub const WBA_CHALLENGE_TOKEN: Item<Addr> = Item::new("wba_challenge_token");

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Token {
    pub reserve: Uint128,
    pub denom: Denom,
}

pub const TOKEN1: Item<Token> = Item::new("token1");

pub const OWNER: Item<Option<Addr>> = Item::new("owner");


# Tests

A smart contract is not complete without tests.

We looked at DAO DAO's external contracts to evaluate tests.

We looked at the `cw-token-swap` tests.rs file.

The `cw-token-swap` tests.rs file starts  by pulling in the dependencies:
`cosmwasm_std`
`cw20::Cw20Coin`
`cw_multi_test`

And then pulls in our own crates:
`contract`
`msg`
`state`

Then it defines a couple constants:
`DAO1`
`DAO2`

These constants represent some mock actors to test out the contract.

```rust
use cosmwasm_std::{
    testing::{mock_dependencies, mock_env},
    to_binary, Addr, Coin, Empty, Uint128,
};
use cw20::Cw20Coin;
use cw_multi_test::{App, BankSudo, Contract, ContractWrapper, Executor, SudoMsg};

use crate::{
    contract::{migrate, CONTRACT_NAME, CONTRACT_VERSION},
    msg::{
        Counterparty, ExecuteMsg, InstantiateMsg, MigrateMsg, QueryMsg, StatusResponse, TokenInfo,
    },
    state::{CheckedCounterparty, CheckedTokenInfo},
    ContractError,
};

const DAO1: &str = "dao1";
const DAO2: &str = "dao2";
```

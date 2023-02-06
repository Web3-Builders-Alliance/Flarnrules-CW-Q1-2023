# Code Journal 3 for Cluster 1
WBA Q1 2023
---
In this code journal, I will be looking at the **contracts.rs** file from CW20 base to see if I can find all of the messages described in code journal 2.
---
First, **contract.rs** from the CW20 base contract is a hefty sized file. Over 2,200 lines of code in this one file, so my initial guess is that the CW20 base includes all messages and queres, and a whole bunch of tests. Lets find all the messages.
---
lines 1-31 pull in all the crates and constants.

```
{
#[cfg(not(feature = "library"))]
use cosmwasm_std::entry_point;
use cosmwasm_std::Order::Ascending;
use cosmwasm_std::{
    to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdError, StdResult, Uint128,
};

use cw2::set_contract_version;
use cw20::{
    BalanceResponse, Cw20Coin, Cw20ReceiveMsg, DownloadLogoResponse, EmbeddedLogo, Logo, LogoInfo,
    MarketingInfoResponse, MinterResponse, TokenInfoResponse,
};
use cw_utils::ensure_from_older_version;

use crate::allowances::{
    execute_burn_from, execute_decrease_allowance, execute_increase_allowance, execute_send_from,
    execute_transfer_from, query_allowance,
};
use crate::enumerable::{query_all_accounts, query_owner_allowances, query_spender_allowances};
use crate::error::ContractError;
use crate::msg::{ExecuteMsg, InstantiateMsg, MigrateMsg, QueryMsg};
use crate::state::{
    MinterData, TokenInfo, ALLOWANCES, ALLOWANCES_SPENDER, BALANCES, LOGO, MARKETING_INFO,
    TOKEN_INFO,
};
}
```
No messages in this top section, just a lot of 'use' expressions to pull all of the dependencies into the contract.rs file.

Following this section, which I think is called "the preamble" there are 3 "verify" functions:
1. **verify_xml_logo**
```
{
    fn verify_xml_logo(logo: &[u8]) -> Result<(), ContractError> {
    verify_xml_preamble(logo)?;

    if logo.len() > LOGO_SIZE_CAP {
        Err(ContractError::LogoTooBig {})
    } else {
        Ok(())
    }
}
}
```
2. **verify_png_logo**
```
{
    fn verify_png_logo(logo: &[u8]) -> Result<(), ContractError> {
    const HEADER: [u8; 8] = [0x89, b'P', b'N', b'G', 0x0d, 0x0a, 0x1a, 0x0a];
    if logo.len() > LOGO_SIZE_CAP {
        Err(ContractError::LogoTooBig {})
    } else if !logo.starts_with(&HEADER) {
        Err(ContractError::InvalidPngHeader {})
    } else {
        Ok(())
    }
}
}
```

3. **fn verify_logo**
```
{
    fn verify_logo(logo: &Logo) -> Result<(), ContractError> {
    match logo {
        Logo::Embedded(EmbeddedLogo::Svg(logo)) => verify_xml_logo(logo),
        Logo::Embedded(EmbeddedLogo::Png(logo)) => verify_png_logo(logo),
        Logo::Url(_) => Ok(()), // Any reasonable url validation would be regex based, probably not worth it
    }
}
}
```
After all of these logo verifications, we get to the `instantiate` function, on line 95. `instantiate` is a special function that is only used once in a contract.

After the `instantiate` function, we see the `create_accounts` function on line 159.

Then `validate_accounts` on line 175. Then we see a line of `execute` functions, which all incorporate some messages.

There's the following `execute` functions in order:
1. `execute` : all 12 messages are available inside this function
2. `execute_transfer` : no messages appear in this function
3. `execute_burn` : no messages appear in this function
4. `execute_mint` : no messages appear in this function
5. `execute_send` : msg appears
6. `execute_update_minter` : no msg
7. `execute_update_marketing` : no msg
8. `execute_upload_logo` : no msg

An after 8 - `execute_upload_logo` the queries begin on line 523 of the contract.rs contract. Queries continue through line 603, and then there's another function called `migrate`. Then tests from line 622 through line 2256.
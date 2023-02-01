Class 1 - 2023-01-31

Intro to rust.

Javier M was the primary presenter.
Devon Martens was the back-up presenter.
Max Lareau participated.

Discuss Ownership Model, benefits of Rust.

Ownership Rules:
- each value in Rust has an owner 
- There can only be one owner at a time
- Makes writing in memory thread safe
- When the owner goes out of scope, the value will be dropped

References & Borrowing:
- References allow you to refer to some value without owning it 
- Use ampersand (&) to reference a value 
- Immutable by default
- Can't borrow as mutable more than once at a time 

Most smart contract attack vectors in Solidity are due to "re-entrancy"
related to memory. Smart Contracts work with the actor model, to be discussed later.

What's the difference between CONST and Let?
- why not just have CONST be immutable and let be mutable?

Let is used to create a or reassign a variable. When you don't specify the mut keyword it becomes a value.

CONST, however, compiles and makes it a constant size. You also cannot use CONST inside functions (needs to double check).

==

Structs:
- These are custom data types
- Kind of like objects from object oriented programming

A User Struct:
`struct User {
    active:bool,
    username: String,
    email: String,
    sign_in_count: u64
}`

A CW20Coin Struct:
`pub struct InstantiateMsg {
    pub name: String,
    pub symbol: String,
    pub decimals: u8,
    pub initial_balances: Vec<Cw20Coin>,
    pub mint: Option<MinterResponse>,
    pub marketing: Option<InstantiateMarketingInfo>,
}`

==
20 minutes in.
==
More to come.
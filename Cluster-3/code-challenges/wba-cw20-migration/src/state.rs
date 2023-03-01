use cw_storage::Item;
use cosmwasm_std::

// constant state item to hold the hard-coded contract address
pub const CW20_ADDRESS: Item<CW20Address> = Item::new("terra1n6ktwxmyr48rackdv4xapvggc4kg0rrvyc4ufhd543mx96knnh4sf78tsy");

// structure to hold the address of our contract
pub struct CW20Address {
    address: Addr
}
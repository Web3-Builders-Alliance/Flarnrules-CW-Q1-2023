# Notes from Wednesdayd March 1, 2023

Discussed some defi concepts:

Liquidity bonding curve.  

Stablecoins.

https://docs.astroport.fi/docs/learn/astro-pools/constant-product-pools
https://github.com/Terran-One/cw-simulate
https://miguelmota.com/blog/understanding-stableswap-curve/

# Astroport Example

astroport-core

Contracts:

factory
pair
pair_stable
pair_astro_xastro
pair_stable_bluna
periphery
router <-- Start Here
token
tokenomics
whitelist

## Router Contract

Want to swap two assets but don't have those two tokens in a pool.

We have 2 pools: luna - ust | atom - ust

We want to swap luna for atom directly.

luna -> ust -> atom (this is "routing")

The router contract is a helper that lets you chain these kind of transactions.

## Factory Contract

A factory in software engineering - creates an object.

It is a design pattern that creates something (objects, contracts, structs)

Astroport factory produces pools / pairs.

# Pair contract

Instantiates the pool.

Minter is the same address as the pair contract itself. 

There's no cap because people can add to the pool at will, you have no idea how many tokens will be added.





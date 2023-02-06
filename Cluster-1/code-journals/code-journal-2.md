# Code Journal 2 for Cluster 1
WBA Q1 2023
---
In code journal 1, we looked at the general structure of the CW20 base contract. We saw that there were 7 .rs files inside the CW20 base contract, and that the base contract has 3 components (are these *types*?):

1. Messages
2. Queries
3. Receiver

The CW20 contract also has some optional sections besides the base contract. These include: **Allowances**, **Mintable**, **Enumerable**, and **Marketing**

---
## Goal of Code Journal 2
In this code journal, the goal will be to outline the types of messages that are required and optional in the CW20 spec.

Messages include: 

`Transfer, Send, Burn, IncreaseAllowance, DecreaseAllowance, TransferFrom, SendFrom, BurnFrom, Mint, UpdateMinter, UploadLogo, UpdateMarketing`

There are 12 different message types. Some are required to be implemented by the CW20 spec, and some are optional.

1. Transfer
*Part of Base contract,* **required**
`Transfer{recipient, amount}`
This message moves `amount` tokens from the `info.sender` account to the `recipient` account. If the recipient is a contract, the message does not trigger any actions on the recipient.

Attributes emmitted:
*I don't fully understand this concept*
|**Key**|**Value**|
|"action"|"transfer"|
|"from"|sender|
|"to"|recipient|
|"amount"|amount|

2. Send
*part of Base contract,* **required**
`Send{contract, amount, msg}`
This message moves `amount` tokens from the `info.sender` account to the `contract` account. The `contract` account must have implemented the `Receiver` intereface. `msg` is passed to the recipient contract, along with amount.

3. Burn
*part of Base contract,* **required**
`Burn{amount}`
Remove `amount` tokens from the balance of `info.sender` and reduce the `total_supply` by the same amount.

4. IncreaseAllowance
*part of the Allowances section*, **not required**
`IncreaseAllowance{spender, amount, expires}`

5. DecreaseAllowance
*part of the Allowances section*, **not required**
`DecreaseAllowance{spender, amount, expires}`

6. TransferFrom
*part of the Allowances section*, **not required**
`TransferFrom{owner, recipient, amount}`

7. SendFrom
*part of the Allowances section*, **not required**
`SendFrom{owner, contract, amount msg}`

8. BurnFrom
*part of the Allowances section*, **not required**
`BurnFrom{owner, amount}`

9. Mint
*part of the Mintable section*, **not required**
`Mint{recipient, amount}`

10. UpdateMinter
*part of the Mintable section*, **not required**
`UpdateMinter { new_minter: Option<string> }`

11. UploadLogo{url | embedded}
*part of the Marketing section*, **not required**
`UploadLogo{url | embedded}`

12. UpdateMarketing
*part of the Marketing section*, **not required**
`UpdateMarketing{project, description, marketing}`
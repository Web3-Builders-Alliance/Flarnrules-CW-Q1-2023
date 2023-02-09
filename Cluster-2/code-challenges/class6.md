You need two actors, Sender and Receiver.

The Sender:
- Receives native tokens from anyone and forwards them to the Receiver.
- Stores how much tokens have been received/forwarded, which can be returned in a Query.

The Receiver:
- Stores the received tokens until the owner of the contract claims them.
- The owner can claim part of the tokens held by the Receiver, or all at once.

Optional:
- The Sender gets notified when the Receiver has transferred the funds.
# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Ria Singhania *A17331656*

## Answers to Parts 2 and 3: ##
1. No, because the "message" figure probably involved multiple components working together. An example of this is UI for message input, backend logic for delivery, API/Database sotrage, and notification to reciever. This requires end-to-end testing. Unit testing is for isolated functions and this is testing a full feature. 
2. Yes, because this is a good case for a unit test. The "max message length" rule is enforced by a specific function which can be tested in isolation. We can test it with different lengths: `message length < 80` , `message length = 80` , `message length > 80`. This allows for a test ot run wich doesn't need the whole app to run.

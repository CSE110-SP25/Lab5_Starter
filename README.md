# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
Nilay Bhoot, Travis Huang

1. No, I would not use a unit test to test the "message" feature of a messaging application. The "message" feature typically involves multiple components working together, like the UI input, database storage, and notifications for example. Unit tests only cover isolated functions, so they would not be able to assess whether the message was successfully sent and received through the system since it involves various functions working together and not just one. 
2. Yes, I would use a unit test to test the "max message length" feature of a messaging application. The "max message length" feature check is a single function and it can be tested in isolation. Therefore, it is a good choice to use for a unit test.
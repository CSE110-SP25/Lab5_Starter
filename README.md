# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

[Here](https://b2bomber2.github.io/Lab5_Starter/expose.html) is the GitHub page for expose.html. 
[Here](https://b2bomber2.github.io/Lab5_Starter/explore.html) is the GitHub page for explore.html. 

Ferrari Guan

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

- No, I would not use a single unit test for it. I would need to test if the message shows up. Then, I need to test network connectivity. Then, I need to test if the recipient has recieved it. Lastly, I need to test the security and speed of it. 

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

- Yes, I would use a unit test to test it. The max message length has a strict yes or no answer. If the max message length has not been met, the user should be able to input more text. If the max message length has been met, the user should not be able to input more text. 
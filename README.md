# Lab 5 - Starter

## Members for the lab: <br>
- George Minasyan 
- Ali Farahbakhsh 

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
Yes, for this we can simply use our messaging function and try to send a message to another test user and check to make sure the message text is as expected in the unit test. Since we are bassically testing an API call, unit tests would be able to test this easily.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

No, while we can use unit tests to make sure our server returns an error if the message is more than 80 characters, we cannot check to make sure that when the user is typing they can't write more than 80 characters because unit tests can't test user interface stuff. With these unit tests its very hard to make sure user can't actaully type more than 80 characters. 

=======
## Expose and Explore
[Expose Page](https://invertedvoice.github.io/Lab5_Starter/expose.html) <br>
[Explore Page](https://invertedvoice.github.io/Lab5_Starter/explore.html) <br>

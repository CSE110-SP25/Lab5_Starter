# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Giana Gesmundo (I worked alone) <br> <br>

[https://ggesm.github.io/Lab5_Starter/expose.html](https://ggesm.github.io/Lab5_Starter/expose.html)

[https://ggesm.github.io/Lab5_Starter/explore.html](https://ggesm.github.io/Lab5_Starter/expose.html) <br> <br>

**1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.** <br>
No, a unit test is not best choice to test the whole "message" feature. The "message" feature includes writing, sending, and possily delivering a message to another user, which involves many parts working together. Unit tests are meant for checking small parts of code in isolation. <br> <br>

**2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.** <br>
Yes, you would use a unit test to test the "max message length" feature. This rule is a simple piece of logic checking that the message is no longer than 80 characters. You can easily test this small part of the code on its own using a unit test. <br>

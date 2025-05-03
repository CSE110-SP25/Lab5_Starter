# Lab 5 - Starter
Kevin Lee

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Answer: No, I would not use a unit test for "message" feature. The reason why I won't use the unit test is that usually "message" features are not working only by one function or a file, it usually works together with complicated connection between function and files. Unit tests are meant to test small and simple code, not about the connection between the code. 

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?

Answer: Yes, I would use a unit test for "max message length" feature. Unlike the previous problem, "max message length" is a small, self-contained piece of logic that can be tested with a unit test. For example I can construct a unit test, checking whether the input function correctly prevents from typing beyond the max_message_length.
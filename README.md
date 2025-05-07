# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
Aniruddha Dasu
1. No, I would not use a unit test to test the entire "message" feature because it involves multiple components such as sending, receiving, and possibly storing messages — which depend on external systems like a database or network. Unit tests are meant for isolated, low-level logic. Testing this feature would be better suited to integration or end-to-end tests that can simulate and verify the interaction between different parts of the application.

2. Yes, I would use a unit test to test the "max message length" feature because it is a small, isolated piece of logic that checks whether a string exceeds a certain length. It doesn’t depend on external systems, and its behavior can be easily and reliably tested with specific input/output cases.
# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

**Parwiz Khan**  
**Gaurav Nair**

---

### 1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not?

No, not really. A unit test is good for small pieces of logic, but messaging involves a lot—network, UI, user states. That’s better tested with integration or end-to-end tests. A unit test can’t catch if the message gets delivered properly.

---

### 2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?

Yes, definitely. The max length check is just logic—it’s a small, clear rule: “stop at 80 characters.” Perfect for a unit test. You can test short, long, and exact-length messages fast without needing real users or servers.

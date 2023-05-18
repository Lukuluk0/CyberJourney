# **IDOR**

---

IDOR stands for **Insecure Direct Object Reference** and is a type of access control vulnerability.

---

## **Encoded IDs**

![](images/IDOR.png)

---

## **ID**

If the Id cannot be detected using the above methods, an excellent method of IDOR detection is to create two accounts and swap the Id numbers between them.

If you can view the other users' content using their Id number while still being logged in with a different account (or not logged in at all), you've found a valid IDOR vulnerability.

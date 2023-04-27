# **Web Application Security**

---

## **Introduction**

A web application is like a “program” that we can use without installation

The idea of a web application is that it is a program running on a remote server.

---

## **Security Risks**

There are a few main categories of common attacks against web applications. Consider the following steps and related attacks.

- Log in at the website: The attacker can try to discover the password by trying many words.(brute force)

- Search for the product: The attacker can attempt to breach the system by adding specific characters and codes to the search term.

- Provide payment details: The attacker would check if the payment details are sent in cleartext or using weak encryption.

### **Identification and Authentication Failure**

Identification refers to the ability to identify a user uniquely.

In contrast, authentication refers to the ability to prove that the user is whom they claims to be.

Example weaknesses include:

- Allowing the attacker to use brute force

- Allowing the user to choose a weak password

- Storing the users’ passwords in plain text.

### **Broken Access Control**

Access control ensures that each user can only access files related to their role or work.

Example vulnerabilities related to access control include:

- Failing to apply the principle of the least privilege and giving users more access permissions than they need.

- Being able to view or modify someone else’s account by using its unique identifier.

- Being able to browse pages that require authentication (logging in) as an unauthenticated user.

### **Injection**

An injection attack refers to a vulnerability in the web application where the user can insert malicious code as part of their input. One cause of this vulnerability is the lack of proper validation and sanitization of the user’s input.

### **Cryptographic Failures**

This category refers to the failures related to cryptography.

Examples of cryptographic failures include:

- Sending sensitive data in clear text, for example, using HTTP instead of HTTPS.

- Relying on a weak cryptographic algorithm.

- Using default or weak keys for cryptographic functions.

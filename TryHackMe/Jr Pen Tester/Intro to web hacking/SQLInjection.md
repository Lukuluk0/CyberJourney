# **SQL Injection**

---

## **Intro**

SQL (Structured Query Language) Injection is an attack on a web application database server that causes malicious queries to be executed.

SQL Injection is when user-provided data gets included in the SQL query.

There are 3 types in total :

1. In-Band
2. Blind
3. Out Of Band

---

## **In-Band**

In-Band just refers to the same method of communication being used to exploit the vulnerability and also receive the results.

### **Error-Based SQL Injection**

Bbtaining information about the database structure as error messages from the database are printed directly to the browser screen. This can often be used to enumerate a whole database.

### **Union-Based SQL Injection**

This type of Injection utilises the SQL UNION operator alongside a SELECT statement to return additional results to the page.

---

## **Blind SQLi**

### **Authentication Bypass**

In this instance, we aren't that interested in retrieving data from the database; We just want to get past the login.

Login forms that are connected to a database of users are often developed in such a way that the web application isn't interested in the content of the username and password but more whether the two make a matching pair in the users table.

### **Boolean Based**

Boolean based SQL Injection refers to the response we receive back from our injection attempts which could be a true/false, yes/no, on/off, 1/0 or any response which can only ever have two outcomes.

That outcome confirms to us that our SQL Injection payload was either successful or not.

### **Time-Based**

No visual indicator of your queries being wrong or right this time.

Instead, your indicator of a correct query is based on the time the query takes to complete.

The SLEEP() method will only ever get executed upon a successful UNION SELECT statement.

---

## **Out-of-Band SQLi**

An Out-Of-Band attack is classified by having two different communication channels, one to launch the attack and the other to gather the results. For example, the attack channel could be a web request, and the data gathering channel could be monitoring HTTP/DNS requests made to a service you control.

1. An attacker makes a request to a website vulnerable to SQL Injection with an injection payload.

2. The Website makes an SQL query to the database which also passes the hacker's payload.

3. The payload contains a request which forces an HTTP request back to the hacker's machine containing data from the database.

---

## **Remediation**

### **Prepared Statements (With Parameterized Queries)**

In a prepared query, the first thing a developer writes is the SQL query and then any user inputs are added as a parameter afterwards.

### **Input Validation**

Employing an allow list can restrict input to only certain strings, or a string replacement method in the programming language can filter the characters you wish to allow or disallow.

### **Escaping User Input**

Escaping user input is the method of prepending a backslash (\\) to these characters, which then causes them to be parsed just as a regular string and not a special character.

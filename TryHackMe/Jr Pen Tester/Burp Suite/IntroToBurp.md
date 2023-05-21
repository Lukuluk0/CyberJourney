# **Burp Suite**

---

## **What is Burp Suite**

Burp Suite is a framework written in Java that aims to provide a one-stop-shop for web application penetration testing.

At the simplest level, Burp can capture and manipulate all of the traffic between an attacker and a webserver: this is the core of the framework.

This ability to intercept, view, and modify web requests prior to them being sent to the target server (or, in some cases, the responses before they are received by our browser), makes Burp Suite perfect for any kind of manual web app testing.

---

## **Features**

| Feature | Desc |
| ------- | ---- |
|Proxy|intercept and modify requests/responses when interacting with web applications.|
|Repeater|Capture, modify, then resend the same request numerous times. |
|Intruder|Spray an endpoint with requests. Used for bruteforce attacks or to fuzz endpoints.|
|Decoder|Whilst there are other services available to do the same job, doing this directly within Burp Suite can be very efficient.|
|Comparer|compare two pieces of data at either word or byte level|
|Sequencer|assessing the randomness of tokens such as session cookie values or other supposedly random generated data.|

---

FoxyProxy

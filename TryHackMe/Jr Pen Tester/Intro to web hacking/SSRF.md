# **SSRF**

---

## **Introduction**

**S**erver-**S**ide **R**equest **F**orgery

It's a vulnerability that allows a malicious user to cause the webserver to make an additional or edited HTTP request to the resource of the attacker's choosing.

Types of SSRF:

1. Regular : data is returned
2. Blind : data isn't returned

---

## **Finding SSRF**

Search for full URL in parameter in adress bar.

A partial URL such as just the hostname

only the path of the URL

If working with a blind SSRFuse an external HTTP logging tool to monitor requests

---

## **Defeating SSRF Defenses**

### **Deny List**

Attackers can bypass a Deny List by using alternative localhost references such as 0, 0.0.0.0, 0000, 127.1, 127.*.*.*, 2130706433, 017700000001 or subdomains that have a DNS record which resolves to the IP Address 127.0.0.1 such as 127.0.0.1.nip.io.

In a cloud environment 169.254.169.254 contains metadata for the deployed cloud server

An attacker can bypass this by registering a subdomain on their own domain with a DNS record that points to the IP Address 169.254.169.254.

### **Allow List**

An attacker could quickly circumvent this rule by creating a subdomain on an attacker's domain name.

### **Open Redirect**

An open redirect is an endpoint on the server where the website visitor gets automatically redirected to another website address.

# **Subdomain Enumeration**

---

## **Introduction**

Subdomain enumeration is the process of finding valid subdomains for a domain, but why do we do this?

We do this to expand our attack surface to try and discover more potential points of vulnerability.

---

## **OSINT**

### **TLS/SSL**

When an SSL/TLS (Secure Sockets Layer/Transport Layer Security) certificate is created for a domain by a CA (Certificate Authority), CA's take part in what's called "Certificate Transparency (CT) logs".

These are publicly accessible logs of every SSL/TLS certificate created for a domain name.

[crt.sh](https://crt.sh) and [this website](https://ui.ctsearch.entrust.com/ui/ctsearchui) offer a searchable database of certificates that shows current and historical results.

### **Search Engines**

Using advanced search methods on websites like Google, such as the site: filter, can narrow the search results. For example, `-site:www.domain.com site:*.domain.com`

Only contain results leading to the domain name domain.com but exclude any links to www.domain.com; therefore, it shows us only subdomain names belonging to domain.com.

### **Sublist3r**

To speed up the process of OSINT subdomain discovery, we can automate the above methods with the help of tools like [Sublist3r](https://github.com/aboul3la/Sublist3r)

---

## **DNS Bruteforce**

Bruteforce DNS (Domain Name System) enumeration is the method of trying tens, hundreds, thousands or even millions of different possible subdomains from a pre-defined list of commonly used subdomains.

`dnsrecon`

`dnsrecon -d student-review.com -D mieux.txt -t std --xml dnsrecon.xml`

---

## **Virtual Hosts**

Some subdomains aren't always hosted in publically accessible DNS results, such as development versions of a web application or administration portals

The DNS record could be kept on a private DNS server or recorded on the developer's machines in their /etc/hosts file (or c:\windows\system32\drivers\etc\hosts file for Windows users) which maps domain names to IP addresses.

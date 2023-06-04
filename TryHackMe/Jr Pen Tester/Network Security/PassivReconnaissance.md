# **Passive Recon**

---

## **Intro**

We divide reconnaissance into:

- Passive Reconnaissance (Disrcete)
- Active Reconnaissance (Not So Discrete)

---

## **WHOIS**

 we can learn:

- Registrar: Via which registrar was the domain name registered?

- Contact info of registrant: Name, organization, address, phone, among other things. (unless made hidden via a privacy service)

- Creation, update, and expiration dates: When was the domain name first registered? When was it last updated? And when does it need to be renewed?

- Name Server: Which server to ask to resolve the domain name?

---

## **nslookup & dig**

### **nslookup**

Find the IP address of a domain name using `nslookup`

you can change the query type to :

- A
- AAAA
- TXT
- CNAME
- MX
- SOA
- TXT

```bash
nslookup OPTIONS DOMAIN_NAME SERVER
```

Exemple : `nslookup -q=TXT student-review.com 1.1.1.1`

### **dig**

 ```bash
 dig @SERVER DOMAIN_NAME TYPE
 ```

Advanced DNS queries and additional functionality, you can use dig, the acronym for “Domain Information Groper”

---

## **Aditional tools**

1. DNSdumpster
2. Shodan.io

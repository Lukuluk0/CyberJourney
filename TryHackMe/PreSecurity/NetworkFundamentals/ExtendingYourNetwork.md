# **Extending Your Network**

---

## **Introduction to Port Forwarding**

Port forwarding is an essential component in connecting applications and services to the Internet.

Without port forwarding, applications and services such as web servers are only available to devices within the same direct network.

![](images/portforwarding.png)

---

## **Firewalls 101**

A firewall is a device within a network responsible for determining what traffic is allowed to enter and exit.

Think of a firewall as border security for a network. An administrator can configure a firewall based on numerous factors such as:

- Where the traffic is coming from?
- Where is the traffic going to?
- What port is the traffic for?
- What protocol is the traffic using?

Firewalls come in all shapes and sizes. From dedicated pieces of hardware to residential routers or software

| Firewall Category | Description |
| ----------------- | ----------- |
| Stateful          |Rather than inspecting an individual packet, this firewall determines the behaviour of a device based upon the entire connection.</br></br>This firewall type consumes many resources in comparison to stateless firewalls as the decision making is dynamic. For example, a firewall could allow the first parts of a TCP handshake that would later fail. </br></br>If a connection from a host is bad, it will block the entire device.|
| Stateless         |This firewall type uses a static set of rules to determine whether or not individual packets are acceptable or not.</br></br>Whilst these firewalls use much fewer resources than alternatives, they are much dumber. For example, these firewalls are only effective as the rules that are defined within them.</br></br>However, these firewalls are great when receiving large amounts of traffic from a set of hosts|

---

## **VPN Basics**

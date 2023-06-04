# **Active Reconnaissance**

---

## **Ping**

The primary purpose of ping is to check whether you can reach the remote system and that the remote system can reach you back.

```bash
ping IP
```

---

## **traceroute**

The `traceroute` command traces the route taken by the packets from your system to another host.

The purpose of a traceroute is to xof the routers or hops that a packet traverses as it goes from your system to a target host.

```bash
traceroute DOMAIN/IP
```

---

## **telnet**

communicate with a remote system via a command-line interface (CLI).

Knowing that telnet client relies on the TCP protocol, you can use Telnet to connect to any service and grab its banner.

Using ``telnet 10.10.89.156 PORT``, you can connect to any service running on TCP and even exchange a few messages unless it uses encryption.

---

## **netcat**

Netcat supports both TCP and UDP protocols.

It can function as a client that connects to a listening port; alternatively, it can act as a server that listens on a port of your choice.

Hence, it is a convenient tool that you can use as a simple client or server over TCP or UDP.

Exemple of commands :

```bash
nc IP PORT
nc -vnlp PORT
```

The first command connects to a listening port the second one opens a listening port.

# **Packets Ans Frames**

---

## Introduction

Packets and frames are small pieces of data that, when forming together, make a larger piece of information or message.

A frame is at layer 2 - the data link layer, meaning there is no such information as IP addresses.

This process is called encapsulation.

At this stage, it's safe to assume that when we are talking about anything IP addresses, we are talking about packets.

Packets are an efficient way of communicating data across networked devices such as those explained in Task 1

Because this data is exchanged in small pieces, there is less chance of bottlenecking occurring across a network than large messages being sent at once.

A packet using the Internet protocol will have a set of headers that contain additional pieces of information to the data that is being sent across a network.

Some notable headers include:

| Header              | Description                                                                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Time to Live        | expiry timer for the packet to not clog up your network                                                                                             |
| Checksum            | integrity checking for protocols such as TCP/IP. If any data is changed, this value will be different from what was expected and therefore corrupt. |
| Source Address      | The IP address of the device that the packet is being sent from                                                                                     |
| Destination Address | The device's IP address the packet is being sent to                                                                                                 |

---

## **TCP/IP**

***TCP*** (Transmission Control Protocol) is another one of these rules used in networking.

| Layer             |
| ----------------- |
| Application       |
| Transport         |
| Internet          |
| Network Interface |

Very similar to how the OSI model works, information is added to each layer of the TCP model as the piece of data (or packet) traverses it

TCP is ***connection-based***.

TCP packets contain various sections of information known as headers that are added from encapsulation.

Let's explain some of the crucial headers in the table below:

| Header                 | Description                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Source Port            | Port opened by the sender to send the TCP packet from. This value is chosen randomly (from 0-65535 ports)                       |
| Destination Port       | Port number that an application or service is running on the remote host (the one receiving data) (*not random*)                |
| Source IP              | IP address of the device that is sending the packet.                                                                            |
| Destination IP         | IP address of the device that the packet is destined for                                                                        |
| Sequence Number        | When a connection occurs, the first piece of data transmitted is given a random number.                                         |
| Acknowledgement Number | After a piece of data has been given a sequence number, the number for the next piece of data will have the sequence number + 1 |
| Checksum               | This value is what gives TCP integrity. A mathematical calculation is made where the output is remembered.                      |
| Data                   | This header is where the data, i.e. bytes of a file that is being transmitted, is stored.                                       |
| Flag                   | How the packet should be handled by either device during the handshake process.                                                 |

Three-way handshake:

| Step | Message | Description                                                                                                                   |
| ---- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 1    | SYN     | Used to initiate a connection and synchronise the two devices together                                                        |
| 2    | SYN/ACK | Sent by the receiving device to acknowledge the synchronisation                                                               |
| 3    | ACK     | Acknowledge that a series of messages/packets have been successfully received                                                 |
| 4    | DATA    | Once a connection has been established, data (such as bytes of a file) is sent via the "DATA" message.                        |
| 5    | FIN     | Used to cleanly (properly) close the connection                                                                               |
| #    | RST     | This packet abruptly ends all communication. This is the last resort and indicates there was some problem during the process. |

<div style="text-align:center"><strong>TCP Handshake</strong></div>

<div style="text-align:center"><img src='images/tcphandshake.png'></div>

### **TCP Closing a Connection**

TCP will close a connection once a device has determined that the other device has successfully received all of the data.

It is best practice to close TCP connections as soon as possible.

To initiate the closure of a TCP connection, the device will send a "FIN" packet to the other device.

---

## **UDP/IP**

The User Datagram Protocol (UDP) is another protocol that is used to communicate data between devices.

UDP is a stateless protocol that doesn't require a constant connection between the two devices for data to be sent.

No synchronisation needed.

UDP is used in situations where applications can tolerate data being lost.

No regard for whether or not data is received, and there are no safeguards such as those offered by TCP, such as data integrity.

UDP Headers:

| Header              | Descritpion |
| ------------------- | ----------- |
| Time to Live (TTL)  |This field sets an expiry timer for the packet|
| Source Address      |IP address of the device that the packet is being sent from, so that data knows where to return to.|
| Destination Address |IP address the packet is being sent to so that data knows where to travel next.|
| Source Port         |Port opened by the sender to send the TCP packet from. This value is chosen randomly (from 0-65535 ports)|
| Destination Port    |Port number that an application or service is running on the remote host (the one receiving data) *(not random)*|
| Data                |This header is where the data, i.e. bytes of a file that is being transmitted, is stored.|

<div style="text-align:center"><strong>UDP Connection</strong></div>

<div style="text-align:center"><img src='images/UDPdiagram.png'></div>

---

## **Ports 101**

Ports are an essential point in which data can be exchanged.

Networking devices use ports to enforce strict rules when communicating with one another.

When a connection has been established, any data sent or received by a device will be sent through these ports.

In computing, ports are a numerical value between **0 and 65535** (65,535).

Any port that is within 0 and 1024 (1,024) is known as a common port. Let's explore some of these other protocols below:

| Protocol                                 | Port Number | Description                                                                                                                                                                                                                                                 |
|------------------------------------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| File Transfer Protocol (FTP)             | 21          | This protocol is used by a file-sharing application built on a client-server model, meaning you can download files from a central location.                                                                                                                   |
| Secure Shell (SSH)                       | 22          | This protocol is used to securely login to systems via a text-based interface for management.                                                                                                                                                                |
| HyperText Transfer Protocol (HTTP)       | 80          | This protocol powers the World Wide Web (WWW)! Your browser uses this to download text, images and videos of web pages.                                                                                                                                      |
| HyperText Transfer Protocol Secure (HTTPS)| 443         | This protocol does the exact same as above; however, securely using encryption.                                                                                                                                                                             |
| Server Message Block (SMB)               | 445         | This protocol is similar to the File Transfer Protocol (FTP); however, as well as files, SMB allows you to share devices like printers.                                                                                                                      |
| Remote Desktop Protocol (RDP)            | 3389        | This protocol is a secure means of logging in to a system using a visual desktop interface (as opposed to the text-based limitations of the SSH protocol).                                                                                                   |

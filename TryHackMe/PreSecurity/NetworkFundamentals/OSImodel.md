# **OSI Model**

---

## **Introduction**

The ***OSI*** model (or **O**pen **S**ystems **I**nterconnection Model) is an absolute fundamental model used in networking.

This critical model provides a framework dictating how all networked devices will send, receive and interpret data.

The OSI model consists of seven layers

| Layer           |
| :-------------- |
| 7. Application  |
| 6. Presentation |
| 5. Session      |
| 4. Transport    |
| 3. Network      |
| 2. Data Link    |
| 1. Physical     |

---

## **7. Application**

The application layer is the layer in which protocols and rules are in place to determine how the user should interact with data sent or received.

---

## **6. Presentation**

Layer 6 of the OSI model is the layer in which standardisation starts to take place.

This layer acts as a translator for data to and from the application layer.

Security features such as data encryption (like HTTPS when visiting a secure site) occur at this layer.

---

## **5. Session**

Once data has been correctly translated or formatted from the presentation layer, the session layer will begin to create a connection to the other computer that the data is destined for.

The session layer (layer 5) synchronises the two computers to ensure that they are on the same page before data is sent and received.

Once these checks are in place, the session layer will begin to divide up the data sent into smaller chunks of data and begin to send these chunks **(packets)** one at a time.

Sessions are unique — meaning that data cannot travel over different sessions

---

## **4. Transport**

Layer 4 of the OSI model plays a vital part in transmitting data across a network.

It follows one of two different protocols that are decided based upon several factors:

- TCP
- UDP

### **TCP**

| Adventages                                     | Disadvantages                                                                                                             |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Guarantees the accuracy of data.               | Requires a reliable connection between the two devices.                                                                   |
| Synchronizes 2 devices(no floods)              | Slow connection can bottleneck another device as the connection will be reserved on the receiving computer the whole time |
| Performs a lot more processes for reliability. | TCP is significantly slower than UDP                                                                                      |

TCP is used for situations where data has to be accurate and complete.

### **UDP**

| Adventages                                                           | Disadventages                                              |
| -------------------------------------------------------------------- | ---------------------------------------------------------- |
| UDP is much faster than TCP.                                         | UDP doesn't care if the data is received.                  |
| UDP leaves the application layer decide how quickly packets are sent | It is quite flexible to software developers in this sense. |
| UDP does not reserve a continuous connection                         | This means that unstable connections                       |

UDP is useful in situations where there are small pieces of data being sent.

For example, protocols like ARP or DHCP.

---

## **3. Network**

The Network layer is where the magic of routing & re-assembly of data takes place.

Firstly, routing simply determines the most optimal path in which these chunks of data should be sent.

Some protocols at this layer determine exactly what is the "optimal" path that data should take to reach a device **OSPF** (**O**pen **S**hortest **P**ath **F**irst) and **RIP** (**R**outing **I**nformation **P**rotocol)

The factors that decide what route is taken is decided by the following:

- What path is the shortest?
- What path is the most reliable?
- Which path has the faster physical connection?

At this layer, everything is dealt with via IP addresses.

Devices such as routers capable of delivering packets using IP addresses are known as Layer 3 devices

---

## **2. Data Link**

The data link layer focuses on the **physical addressing** of the transmission.

It receives a packet from the network layer (including the IP address for the remote computer) and adds in the physical MAC address of the receiving endpoint.

Inside every network-enabled computer is a Network Interface Card (NIC) which comes with a unique MAC address to identify it.

---

## **1. Physical**

This layer references the physical components of the hardware used in networking and is the lowest layer that you will find. Devices use electrical signals to transfer data between each other in a binary numbering system.

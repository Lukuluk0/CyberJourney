# **Command Injection**

---

## **Introduction**

Command injection is the abuse of an application's behaviour to execute commands on the operating system, using the same privileges that the application on a device is running with.

A command injection vulnerability is also known as a "Remote Code Execution" (**RCE**) because an attacker can trick the application into executing a series of payloads that they provide, without direct access to the machine itself

Command Injection can be detected in mostly one of two ways:

1. Blind command injection
2. Verbose command injection

| Method  | Desc                                                                 |
| ------- | -------------------------------------------------------------------- |
| Blind   | No direct output from the application when testing payloads          |
| Verbose | direct feedback from the application once you have tested a payload. |

### **Detecting Blind Command Injection**

For this type of command injection, we will need to use payloads that will cause some time delay.

Another method of detecting blind command injection is by forcing some output.

This can be done by using redirection operators such as >.

The `curl` command is a great way to test for command injection.

This is because you are able to use curl to deliver data to and from an application in your payload.

### **Useful payloads**

#### **Linux**

| Payload | Description                                                    |
| ------- | -------------------------------------------------------------- |
| whoami  | See what user the application is running under.                |
| ls      | Find files such as configuration files, environment files      |
| ping    | This command will invoke the application to hang.              |
| sleep   | same as ping                                                   |
| nc      | Netcat: Spawn a reverse shell onto the vulnerable application. |

#### **Windows**

| Payload | Description                                               |
| ------- | --------------------------------------------------------- |
| whoami  | See what user the application is running under.           |
| dir     | Find files such as configuration files, environment files |
| ping    | This command will invoke the application to hang.         |
| timeout | same as ping                                              |

---

## **Remediating**

### **Vulnerable Functions**

Functions take input such as a string or user data and will execute whatever is provided on the system.

Any application that uses these functions without proper checks will be vulnerable to command injection.

### **Input sanitisation**

Applications will employ numerous techniques in filtering and sanitising data that is taken from a  user's input.

These filters will restrict you to specific payloads; however, we can abuse the logic behind an application to bypass these filters.

[Github cheat sheet](https://github.com/payloadbox/command-injection-payload-list)

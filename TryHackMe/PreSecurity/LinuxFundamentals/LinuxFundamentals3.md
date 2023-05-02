# **Linux Fundamentals**

---

## **Terminal Text Editors**

### **Nano**

It is easy to get started with Nano! To create or edit a file using nano, we simply use nano filename -- replacing "filename" with the name of the file you wish to edit.

Nano has a few features that are easy to remember & covers the most general things you would want out of a text editor, including:

- Searching for text
- Copying and Pasting
- Jumping to a line number
- Finding out what line number you are on

### **VIM**

VIM is a much more advanced text editor.

Whilst you're not expected to know all advanced features, it's helpful to mention it for powering up your Linux skills.

Some of VIM's benefits, albeit taking a much longer time to become familiar with, includes:

- Customisable - you can modify the keyboard shortcuts to be of your choosing
- Syntax Highlighting - this is useful if you are writing or maintaining code, making it a popular choice for software developers
- VIM works on all terminals where nano may not be installed

---

## **General/Useful utilities**

### **Dowloading Files**

We're going to cover the use of `wget`

This command allows us to download files from the web via HTTP -- as if you were accessing the file in your browser

for instance

```bash
wget https://assets.tryhackme.com/additional/linux-fundamentals/part3/myfile.txt
```

### **Transferring Files From Your Host - SCP (SSH)**

Secure copy, or SCP, is just that -- a means of securely copying files.

This command allows you to transfer files between two computers using the SSH protocol.

for exemple:

```bash
scp important.txt ubuntu@192.168.1.30:/home/ubuntu/transferred.txt
```

### **Serving Files From Your Host - WEB**

You can use this command `python3 -m  http.server` to host a web server where we will be able to `wget` data

If you host a server on a remote computer you can `wget` it's data to yours!

---

## **Processes 101**

Processes are the programs that are running on your machine.

### **Viewing Processes**

Using the `ps` command.

To see the processes run by other users and those that don't run from a session we need to run `ps aux`.

Also `top` is a great command

It  used to show the Linux processes. It provides a dynamic real-time view of the running system.

### **Managing Processes**

Some of the signals that we can send to a process when it is killed:

- SIGTERM - Kill the process, but allow it to do some cleanup tasks beforehand
- SIGKILL - Kill the process - doesn't do any cleanup after the fact
- SIGSTOP - Stop/suspend a process

### **How do Processes Start?**

The Operating System (OS) uses namespaces to ultimately split up the resources available on the computer to (such as CPU, RAM and priority) processes.

The process with an ID of 0 is a process that is started when the system boots.

This process is the system's init on Ubuntu, such as systemd

Any program or piece of software that we want to start will start as what's known as a child process of systemd.

### **Getting Processes/Services to Start on Boot**

Some applications can be started on the boot of the system that we own.

Enter the use of `systemctl` -- this command allows us to interact with the systemd process/daemon. `systemctl` is an easy to use command that takes the following formatting: `systemctl [option] [service]`

### **An Introduction to Backgrounding and Foregrounding in Linux**

Processes can run in two states: In the background and in the foreground.

#### **Backgrounding a process**

Adding the `&` operator to the command, we're instead just given the ID of the echo process rather than the actual output -- as it is running in the background.

Also you can background a running process using `Ctrl + Z`

#### **Foregrounding a process**

We can use `fg` to bring this back to focus

---

## **Users may want to schedule a certain action or task to take place after the system has booted**

A crontab is simply a special file with formatting that is recognised by the cron process to execute each line step-by-step. Crontabs require 6 specific values:

| Value | Description                               |
| ----- | ----------------------------------------- |
| MIN   | What minute to execute at                 |
| HOUR  | What hour to execute at                   |
| DOM   | What day of the month to execute at       |
| MON   | What month of the year to execute at      |
| DOW   | What day of the week to execute at        |
| CMD   | The actual command that will be executed. |

Crontabs can be edited by using `crontab -e`, where you can select an editor (such as Nano) to edit your crontab.

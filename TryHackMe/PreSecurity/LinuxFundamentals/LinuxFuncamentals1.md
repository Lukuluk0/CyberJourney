# **Linux Fundamentals**

- Running your very first commands in an interactive Linux machine in your browser
- Teaching you some essential commands used to interact with the file system
- Introduce you to how users and groups work on Linux (and what this means for us as penetration testers)

The name "Linux" is actually an umbrella term for multiple OS's that are based on UNIX (another operating system).

Thanks to UNIX being open-source, variants of Linux comes in all shapes and sizes - suited best for what the system is being used for.

| Command | Description                                      |
| ------- | ------------------------------------------------ |
| echo    | Output any text that we provide.                 |
| whoami  | Find out what user we're currently logged in as! |

---

## **Interacting With the Filesystem**

| Command | Description             |
| ------- | ----------------------- |
| ls      | listing                 |
| cd      | change directory        |
| cat     | concatenate             |
| pwd     | print working directory |
| wc      | line count of a file    |

### **Find**

```bash
find -name *.txt
```

This will output the path to the file looked for.

### **Grep**

We can use grep to search the entire contents of a file for any entries of the value that we are searching for.

```bash
grep '<text>' <folder>
```

---

## **Shell Operators**

| Symbol / Operator | Description                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| &                 | This operator allows you to run commands in the background of your terminal.                                                                     |
| &&                | This operator allows you to combine multiple commands together in one line of your terminal.                                                     |
| >                 | This operator is a redirector - meaning that we can take the output from a command (such as using cat to output a file) and direct it elsewhere. |
| >>                | This operator does the same function of the > operator but appends the output rather than replacing (meaning nothing is overwritten).            |

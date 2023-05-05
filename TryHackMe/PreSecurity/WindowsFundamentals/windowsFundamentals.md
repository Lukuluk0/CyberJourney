# **Windows Fundamentals**

---

## **File system**

The file system used in modern versions of Windows is the **New Technology File System** or simply NTFS.

NTFS is known as a journaling file system.

In case of a failure, the file system can automatically repair the folders/files on disk using information stored in a log file.

On NTFS volumes, you can set permissions that grant or deny access to files and folders.

The permissions are:

- Full control
- Modify
- Read & Execute
- List folder contents
- Read
- Write

![](images/ntfs-permissions1.png)

Another feature of NTFS is Alternate Data Streams (ADS).

Alternate Data Streams (ADS) is a file attribute specific to Windows NTFS (New Technology File System).

---

## **Windows/System32 Folders**

The Windows folder (C:\Windows) is traditionally known as the folder which contains the Windows operating system.

The system  environment variable for the Windows directory is `%windir%.`

The System32 folder holds the important files that are critical for the operating system.

---

## **User Accounts, Profiles, and Permissions**

Right-click on the Start Menu and click Run. Type `lusrmgr.msc`

To protect the local user with such privileges, Microsoft introduced User Account Control (UAC).

---

## **MSconfig**

The System Configuration utility (MSConfig) is for advanced troubleshooting, and its main purpose is to help diagnose startup issues.

### **Tools**

Some tools that can be found in the tools menu:

- `useraccountcontrolsettings.exe`: The UAC settings can be changed or even turned off entirely
- `compmgmt`: The Computer Management utility has three primary sections: System Tools, Storage, and Services and Applications.
  - System tool: Event Viewer
- `msinfo32`: This tool gathers information about your computer and displays a comprehensive view of your hardware, system components, and software environment, which you can use to diagnose computer issues.
- `resmon`: Resource Monitor displays per-process and aggregate CPU, memory, disk, and network usage information, in addition to providing details about which processes are using individual file handles and modules
- `cmd`: Common commands :
  - `net`
  - `netstat`
  - `ipconfig`
  - `hostname`
  - `/?`
- `regedit`

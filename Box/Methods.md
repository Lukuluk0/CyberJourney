# **Methods**

---

## **RDP**

### **3389 ms-wbt-server**

se connecter sans password(default credentials):

```bash
xfreerdp /u:administrator /v:[IP]:[PORT]
```

---

## **HTTP**

### **80**

gobuster ne pas oublier de cherher les fichier avec une terminaison speciales par exemples les PHP

```bash
gobuster dir -x php -u [URL/IP] -w [wordlist path]
```

#### **Default Nginx Credentials**

admin:admin

---

## **rsync**

### **873**

no credentials needed for anonymous auth

list files

```bash
rsync --list-only rsync://[IP]:[PORT]
```

get a file

```bash
rsync -aP [source] [destination]
rsync -aP rsync://10.129.228.37:873/public .
```

---

## **DB**

### **redis**

se connecter a redis

```bash
redis-cli
```

### **MongoDB**

connect remotely version >=6.0 `mongosh`

below `mongo`


```bash
mongosh [IP]:[PORT]
```

default tram

```bash
show dbs                #show db
use [dbname]            #use specific db
show collections        #show collections(tables)
db.[collection].find()  # lists all
```

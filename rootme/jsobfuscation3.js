

function dechiffre(pass_enc) {
    var pass = "FAUX PASSWORD HAHA";
    var MDP_786OsErtk12 = pass_enc.split(','); // tableau avec 55,56,54,79,115,69,114,116,107,49,50 = "786OsErtk12"
    var tab2 = pass.split(','); // tableau avec 70,65,85,88,32,80,65,83,83,87,79,82,68,32,72,65,72,65 = "FAUX PASSWORD HAHA"


    var i, j, Jbis, l = 0, taille18, o, p = "";
    i = 0;
    j = MDP_786OsErtk12.length; // j = 11


    Jbis = j;
    taille18 = tab2.length;
    for (i = 0; i < taille18; i++) { //la boucle tourne 6 fois

        o = MDP_786OsErtk12[i - l];
        p += String.fromCharCode((o = tab2[i])); // a ce moment p = "FAUX P"
        if (i == 5) break;

    }

    // a ce moment p = "FAUX P"

    for (i = 0; i < taille18; i++) {
        o = MDP_786OsErtk12[i - l];
        if (i > 5 && i < Jbis - 1)
            p += String.fromCharCode((o = tab2[i]));
    }
    p += String.fromCharCode('A');
    pass = p;

    return pass;
}
String["fromCharCode"](dechiffre("786OsErtk12")); // 55,56,54,79,115,69,114,116,107,49,50

h = window.prompt('Entrez le mot de passe / Enter password');
alert(dechiffre(h));
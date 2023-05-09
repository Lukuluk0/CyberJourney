

pass = unescape("unescape%28%22String.fromCharCode%2528104%252C68%252C117%252C102%252C106%252C100%252C107%252C105%252C49%252C53%252C54%2529%22%29");

//console.log(pass)

let clear_pass = unescape("104 %2C 68 %2C 117 %2C 102 %2C 106 %2C 100 %2C 107 %2C 105 %2C 49 %2C 53 %2C 54")

let tab = clear_pass.split(" , ")

let mdp = ""

for (let i = 0; i < tab.length;i++){
    mdp += String.fromCharCode(tab[i])
}

console.log(mdp)
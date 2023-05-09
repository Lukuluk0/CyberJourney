
pass = '%63%70%61%73%62%69%65%6e%64%75%72%70%61%73%73%77%6f%72%64'

pass2 = []

//console.log(pass.split("%"))

const mdp = pass.split("%")

console.log('teste')

for (let i = 0; i< mdp.length; i++){
    pass2.push(String.fromCharCode(parseInt(mdp[i], 16)))
}

pass2.splice(0, 1)

let mdp_clair = ""

for (let i = 0; i< pass2.length; i++){
    mdp_clair += pass2[i]
}

console.log(mdp_clair)
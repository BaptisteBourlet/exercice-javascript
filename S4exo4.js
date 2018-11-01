//exo4
/*Dans le fichier HTML fourni, mettre les bordures des inputs en rouge si les mots de passe sont différents. Sinon les mettre en vert.*/
let mdp = document.getElementById("motdepasse");
let confirm = document.getElementById("confirmation");
verif = () => {
if (mdp.value == confirm.value) {
    mdp.style.border = '10px solid green';
    confirm.style.border = '10px solid green';
} else {
    confirm.style.border = '10px solid red';
    mdp.style.border = '10px solid red';
}
}

    
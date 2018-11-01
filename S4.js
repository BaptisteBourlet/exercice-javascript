//exo 1
/*Dans le fichier HTML fourni, au survol de l'image ajouter une bordure de 3px rouge et la retirer quand la souris ne la survole plus.
*/
let image = document.getElementById("image1");
image.onmouseover = function () {mouseover()};
image.onmouseout = function () {mouseout()};

let mouseover = () => {
image.style.border = '#00F 10px solid'
}
let mouseout = () => {
    image.style.border = `0`
}

// exo 2
/*Dans le fichier HTML fourni, faire afficher ou masquer le texte en fonction de l'ancre.*/
function afficher() {
    document.getElementById('texte').style.display = 'block';
}

function masquer() {
    document.getElementById('texte').style.display = 'none';
}

//exo 3
/*
Dans le fichier HTML fourni, changer la couleur du texte en fonction du bouton choisi. */
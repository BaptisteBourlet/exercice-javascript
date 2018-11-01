//exo 1
/*let img = document.getElementById("image1")
img.onmouseover = function() {mouseOver()};
img.onmouseout = function() {mouseOut()};
function mouseOver() {
img.src= "image1_2.jpg";
}
function mouseOut() {
img.src="image1.jpg";
}*/

//exo 2
/*Dans le fichier HTML fourni, afficher une boite de dialogue avec le message :
"Merci de votre participation" quand le champ de saisie perd le focus.*/
const nom = document.getElementById('nom');
nom.addEventListener("change", function() {
alert('Merci de votre participation!');
});

//exo 3
/*Dans le fichier HTML fourni, afficher une boite de dialogue avec la valeur du champ dès que l'on appuie sur le clavier.*/
let text = document.getElementById("name");
text.oninput = () => {input()};

let input = () => {
    alert(text.value)
}

//exo 4
/*Dans le fichier HTML fourni, faire que le bouton RAZ efface les données des champs du formulaire.*/
let suppressionSurname = document.getElementById("surname");
let suppressionPrenom = document.getElementById("prenom");
let suppressionVille = document.getElementById("ville");

let raz = () => {
    suppressionPrenom.value=("");
    suppressionSurname.value=("");
    suppressionVille.value=("");
}

//exo 5 et 6
/*Dans le fichier HTML fourni, faire comme dans l'exercice 1 mais avec 5 images.
Bonus Ne faire qu'une seule fonction JavaScript pour cet exercice.*/
for (let i=1; i<6; i++){
    let image =`image${i}`;
    const img = document.getElementById(image);
    
    img.addEventListener("mouseenter", function(){
    img.setAttribute('src', `${image}.png`);
    });
    
    img.addEventListener("mouseleave", function(){
    img.setAttribute('src', `${image}.jpg`);
    });
    }
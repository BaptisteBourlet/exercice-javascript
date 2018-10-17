//batbatou vs js, round 2 !!!
//exo 1
let ex1 = "on est vendredi et je suis déterr yaaaaaaah"
console.log(ex1)

//exo 2
alert('Bourlet\nBaptiste\nCharleroi');

//exo 3
("Bonjour","mets ton prénom vil gredin!");

//exo 4
function myFunction(){
    let a
    a = document.getElementById("nom").value;
    let b
    b = document.getElementById("prenom").value;
    let c
    c= document.getElementById("ville").value;
    alert("Ton nom est " + a + "\nTon prénom est " + b + "\nEt tu habites à " + c)
}

//exo 5
mycalcul = () => {
let premierNbre
premierNbre = document.getElementById("premier_nombre").value;
let secondNbre
secondNbre = document.getElementById("deuxieme_nombre").value;
alert(parseInt(premierNbre)*secondNbre);
}
//exo 6
mycalculs = () => {
    let premierNombre
    premierNombre = document.getElementById("premierNombre").value;
    let secondNombre
    secondNombre = document.getElementById("deuxiemeNombre").value;
    alert(parseInt(premierNombre)/secondNombre);
    }
//exo 7
/*Demander à l’utilisateur sa pointure et son année de naissance. Créer une fonction qui fait les calculs suivants :
Multiplier la pointure par 2
Ajouter 5 au résultat
Multiplier le tout par 50
Soustraire l’année de naissance
Ajouter au tout 1766
La fonction doit retourner le résultat. Tester avec votre date de naissance et votre pointure. 
Attention : n'utiliser une seule variable « resultat ».*/

let pointure = prompt("Quelle est votre pointure");
    pointure=((pointure*2)+5)*50;
let annéeDeNaissance = prompt("Quelle est votre date de naissance");
let résultat = (pointure-annéeDeNaissance)+1766;
    document.write(résultat);

//exo 8
let âge = prompt("quel est ton âge");
    if (âge>=50) {
        alert("Tu commences à te faire vieux mon pote");
    } 
    else if (âge>=18){
        alert("Vive l'alcool!!")
    } else {
        alert("T'inquiète t'es encore large");
    }
alert("coucou");
var age = 23;
var ageMax = 100;
var denrée = "Chips";
var denréeConso = 0.2;
var resteDeMaVie = (ageMax - age)*365*denréeConso;
console.log(resteDeMaVie + "kg de " + (denrée));
var langue = "es";
var message = "Bonjour tout le monde";
var message2 = "Hello world";
var message3 = "Hola, Mundo";
if (langue == "fr") {
    console.log(message);
} else if (langue == "en") {
    console.log(message2);
} else if (langue == "es") {
    console.log(message3);
} else {
    console.log("quedal mon pote");
}
//Crée une variable qui contient un score
//Crée une variable qui contiendra le resultat
//Faire des conditions pour pour etablir les rang selon le score
//Vous avez le rang A si vous avez un score égal ou supérieur a 90
//Vous avez le rang B si vous avez un score inférieur a 90
//Vous avez le rang C si vous avez un score inférieur ou égal a 50

let rankBoss = "You're the king of the world";
let rankNoobies = "it's not too bad, you're just a little noob :p";
let rankNooob = "sorry my friend, try an other game because i can't help you haha";
let score = 20;
if (score > 90) {
    console.log(rankBoss);
} else if (score <= 50) {
    console.log(rankNoobies);
} else if (score <= 90) {
    console.log(rankNooob);
} else {
    console.log("What the fuck is that !!!");
}
console.log(score);

/*Crée une variable contenant un mot au singulier
crée une variable qui contient le nombre dont tu en dispose
crée une variable qui contiendra le résultat
Faire une condition pour savoir si il faut rajouter un "s" ou pas
Le résultat doit être par exemple : "Je possède 4 pommes"*/
const phrase = "je possède "
let mot = " pomme";
let numberOfMot = 2;
let pluriel = "s";
if (numberOfMot > 1) {
     pluriel = "s";
     console.log(phrase + (numberOfMot)+(mot)+(pluriel));
} else {
    pluriel = "";
    console.log(phrase + (numberOfMot)+(mot)+(pluriel));
}

/*Déclarez les variables suivantes :

Fonction qui fait des soustractions
Fonction qui fait des division
Fonction qui fait des multiplications
Fonction qui fait des calcule de pourcentages ( 2 arguments: valeur et pourcentage ) par exemple : "50% de 10 = 5";
Faire un fonction qui fait des calcules de vitesse (2 arguments : distance, temps en heure)
Le résultat doit être par exemple : '50km/h'*/
let soustractions = function (a, b) {
return a - b;
}
let division = function (a,b) {
    return a/b;
}
let multiplication = function (a,b) {
    return a*b;
}
let pourcentage = function (a,b) {
    return (a/100)*b;
}
let vitesse = function (a,b) {
    return a/b;
}
let result = soustractions (45, 42);
console.log(result);
let resulta = division (45, 9);
console.log(resulta);
let resultat = multiplication (10, 42);
console.log(resultat);
let resultats = pourcentage (10, 50);
console.log(resultats+"%");
let resultates = vitesse (150, 3);
console.log(resultates+"Km/h");

/*Ecrivez une boucle qui va itérer de 0 à 20.
Pour chaque itération , il va vérifier si le nombre actuel est pair ou impair
afficher dans la console par exemple : " 2 est pair "*/
for (let i = 0; i <=20; i++) {
    if (Number.isInteger(i/2)){
        console.log(i+" est pair");
    } else {
        console.log(i+" est impair");
    }
}

/*Écrire une boucle qui va itérer de 0 à 10
Pour chaque itération de la boucle, il va multiplier le nombre de 9
afficher dans la console le résultat par exemple : " 2 * 9 = 18".
*/
for (let i = 0; i <=10; i++) {
    console.log(i*9);
}

/*Écrire une boucle qui va itérer de 0 à 100
Écrire une fonction qui va retourner des grades selon les scores reçu
si le score au dessus de 90 le grade est A
si le score au dessus de 80 le grade est B
si le score au dessus de 70 le grade est C
si le score au dessus de 65 le grade est D
si le score n'entre pas dans ces catégories le grade est F
afficher dans la console le résultat par exemple : "Pour 82 points vous avez le grade B".*/ 
    
let i = Math.floor(Math.random() *101 );    
    if (i > 90) {
        console.log("Pour votre score " + (i) + " vous obtenez le rang A");
    }
    else if (i>80){
        console.log("Pour votre score " + (i) + " vous obtenez le rang B");
        }
    else if (i>70) {
        console.log("Pour votre score " + (i) + " vous obtenez le rang c");
    }
    else if (i>65) {
        console.log("Pour votre score " + (i) + " vous obtenez le rang D");
    }
    else {
        console.log("Pour votre score " + (i) + " vous obtenez le rang F")
    }


/*Écrire une boucle qui va dessiner dans la console (ligne par ligne) le résulat suivant
	*  
	* *  
	* * *  
	* * * *  
    * * * * **/
let star ="*";
for (let x = 0; x <20; x++) {
    console.log(star);
    star = star+"*";  
}

/*crée un tableau qui contient les valeurs suivantes : 1, 2, 3, 4, 5, 6, 7, 8, 9
faire une boucle qui permet d'additioner toutes ces valeurs*/
let chiffre = [1,2,3,4,5,6,7,8,9];
let somme =0;
chiffre.forEach(function(chiffre) {
    somme += chiffre
    console.log(somme);
});
console.log(somme);



/*crée un tableau qui contetient 3 nom d'acteurs
Pour chaque acteur, afficher dans la console par exemple : "Le numero 1 est Stalone"
Bonus:transformer en : "Le premier est Stalone", Le deuxième est Cruiz", etc...*/
let actors = ["Le numero 1 est Stalone", "Le numero 2 est Clara Morgane", "Le numero 3 est Louis de Funès"];
let delet = actors.shift();
let ajout =actors.unshift("The best is stalone");
console.log(actors[0]);
/*crée un tableau qui contetient les valeurs suivantes : "Mario", "Luigi", "Peach"
dupliquer le tableau et y ajouter "Bowser"*/
let Nintendo = ["Mario","Luigi","Peach"];
let copy = Nintendo.slice();
let ajouts = copy.push("Bowser");
console.log(copy[3]);

/*Info : le nombre d'essais est illimité

Créer un tableau pour contenir les lettres du mot : 'B','O','N','J','O','U','R',

Créer un autre tableau pour mettre les lettres devinées : '','','','','','','_'

Écrivez une fonction appelée "guessLetter" cette fonction va

Itérer à travers les lettres
Voir si la lettre deviné se trouve dans le mot
Si oui changer le tableau des lettres deviné pour ajouter la nouvelle lettre
Afficher dans la console les lettre devinés
Le jeu doit savoir quand la partie est finie et féliciter le joueur
Bonus: Se rapprocher du vrais pendu :

Gardez en mémoire toutes les lettres devinées (bonnes et mauvaises) et seulement laisser l'utilisateur deviner une lettre une fois.
Si une lettre est entrée deux fois, ne rien faire.
compter le nombre de tentatives ratés*/

let pendu = ["B","O","N","J","O","U","R"];
let lettresDevinées = ["","","","","","",""];
for (let i = 0; i < pendu.length; i++) {
    let guessLetter = prompt("Entrez une lettre");

    console.log(guessLetter)
    if (guessLetter==pendu[i]) {
        lettresDevinées[i]=guessLetter
        console.log(lettresDevinées)
    }
}




/*if (guessLetter = "B") {
    lettresDevinées.splice(0, 1, "B");
}
else if (guessLetter = "O") {
    lettresDevinées.splice(1, 1, "O");
}
else if (guessLetter = "N") {
    lettresDevinées.splice(2, 1, "N");
}
else if (guessLetter = "J") {
    lettresDevinées.splice(3, 1, "J");
}
else if (guessLetter = "O") {
    lettresDevinées.splice(4, 1, "O");
}
else if (guessLetter = "U") {
    lettresDevinées.splice(5, 1, "U");
}
else if (guessLetter = "R") {
    lettresDevinées.splice(6, 1, "R");
}*/
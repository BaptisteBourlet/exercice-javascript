//exo 1
/*Créer un bouton "Calculer la surface d'un rectangle".
 Faites en sorte que lorsqu'on clique sur le bouton, la fonction surfaceRectagle() se lance. 
 Cette fonction va demander la saisie d'une largeur, d'une longueur et afficher la surface du rectangle correspondant.

Créer ensuite un nouveau bouton "Calculer le périmètre d'un rectangle". 
Faites en sorte que lorsqu'on clique sur le bouton, la fonction periRectangle() se lance. 
Cette fonction va demander la saisie d'une largeur, d'une longueur et afficher le périmètre du rectangle.

Pour l'affichage des résultats, pensez à mettre du texte pour qu'on sache à quoi se réfère les réponses finales !*/
surfaceRectagle = () => {
    let longueur
    longueur = document.getElementById("longueur").value;
    let largeur
    largeur = document.getElementById("largeur").value;
    let surfaceRectangle
    surfaceRectangle = parseInt(longueur*largeur);
    alert("sa surface est de "+(surfaceRectangle));
}

periRectangle = () => {
    let longueur
    longueur = document.getElementById("longueur").value;
    let largeur
    largeur = document.getElementById("largeur").value;
    let perimRectangle
    perimRectangle = (Number(longueur)+Number(largeur))*2;
    alert("son périmètre est de "+(perimRectangle));
}

// exo 2
/*Créer une fonction qui :

demande la saisie d'un rayon;
retourne la surface du cercle de ce rayon. Afficher ensuite le résultat de l'appel à cette fonction en cliquant sur un bouton.
*/
surfaceCercle = () => {
    let rayon 
    rayon = document.getElementById("rayon").value;
    let surface
    surface = Math.PI*(Math.pow(rayon, 2));
    alert(surface);
}

//exo3
/*Créez deux variables globales a et b, initialisées respectivement à 3 et à 2.
Créez une fonction triple prenant un argument x et renvoyant le résultat de la multiplication de x par 3
Créez une fonction affiche, appelée au clic sur un bouton, 
qui affiche dans des boîtes d'alerte successivement le résultat de triple appliquée à a, puis à b.*/
let a = 3;
let b = 2;
triple = (x) => {
    return x * 3; 
}

affiche = () => {
    alert("Le triple de a = " + triple(a));
    alert("Le triple de b = " + triple(b));
}

//exo 4
/*Créez un tableau nommé tab dont le premier élément est -2, le deuxième 1 et le troisième 4
Créez une fonction additionne prenant un argument x et renvoyant le résultat de l'addition de x à 2
Créez une fonction affiche, appelée au clic sur un bouton, qui affiche dans des boîtes d'alerte 
successivement le résultat de additionne appliqué au premier élément, puis au dernier élément du tableau 
(en utilisant la propriété length).*/
let tab = [-2, 1, 4];
tab.length

additione = (x) => {
    return x + 2
}

afficheMoi = () => {
    alert("-2 +2 = " + additione(tab[0]));
    alert("4 +2 = " + additione(tab[2]));
}

//exo 5
/*b est toujours initialisée à 2 Quel est le résultat des opérations suivantes ?
a=b++;
a=++b;
a=b--;
a=--b;
a+=b++;
a=1; a+=++b;
a=1; a-=b++;
a=1; a-=++b;
a=1; a+=b--;
a=1; a+=--b;
Pour chacune des opérations, afficher l'opération effectuée, la valeur de a après l'opération et la valeur de b après l'opération.*/
a=0;
a=b++;
console.log(a);//2
a=++b;
console.log(a);//4
a=b--;
console.log(a);//4
a=--b;
console.log(a);//2
a+=b++;
console.log(a);//4
a=1; a+=++b;
console.log(a);//5
a=1; a-=b++;
console.log(a);//-3
a=1; a-=++b;
console.log(a);//-5
a=1; a+=b--;
console.log(a);//7
a=1; a+=--b;
console.log(a);//5

//exo 6
/*Créez un tableau nommé tab dont le premier élément est -2, le deuxième 1 et le troisième 4
Créez une fonction soustrait prenant un argument x et renvoyant le résultat de la soustraction de x-2 si x est positif ou nul, 
la chaîne de caractères "Nombre négatif!" sinon.
Créez une fonction affiche, appelée au clic sur le bouton, 
qui affiche dans des boîtes d'alerte successivement le résultat de soustrait appliqué au premier élément, 
puis au dernier élément du tableau (en utilisant la propriété length).*/
soustrait = (x) => {
    if (x>=0) {
    return x - 2
    } else {
    return "Nombre négatif"
    }
}

afficheMoiDonc = () => {
    alert("-2 -2 = " + soustrait(tab[0]));
    alert("4 -2 = " + soustrait(tab[2]));
}

//exo 7
/*Créer un bouton. Au click de ce bouton, lancer la fonction faireChoix().

Cette fonction demande à l'utilisateur au moyen d'un prompt() de choisir entre 1, 2 ou 3.

s'il choisit 1, on affiche avec une boîte d'alerte "1. Merci"
s'il choisit 2, on affiche avec une boîte d'alerte "2. Bonjour"
s'il choisit 3, on affiche avec une boîte d'alerte "3. Au revoir"
s'il choisit autre chose, on affiche avec une boîte d'alerte "Pardon, que voulez-vous ?"
*/

faireChoix = () => {
    let c = prompt("Choisissez entre les chiffres 1, 2 et 3","alors ? 1, 2 ou 3 ?");
    switch (c) {
        case c='1':
        alert("Merci");
        break;
        case c='2':
        alert("Bonjour");
        break;
        case c='3':
        alert("Au revoir");
        break;
        default : 
        alert("Pardon, que voulez-vous ?")
    }
}

//exo 8
/*Créer un bouton. Au click de ce bouton, lancer la fonction jourDeLaSemaine(). 
Cette fonction détermine le jour de la semaine et affiche selon le cas dimanche, lundi, mardi... etc. jusqu'à samedi.*/
jourDeLaSemaine = () => {
    let d = new Date();
    let weekday = d.getDay();
    switch (weekday) {
        case 0:
        alert("on est dimanche, remets-toi d'hier");
        break;
        case 1:
        alert("on est lundi, Bonne merde");
        break;
        case 2:
        alert("on est mardi");
        break;
        case 3:
        alert("on est mercredi");
        break;
        case 4:
        alert("on est jeudi");
        break;
        case 5:
        alert("on est vendredi, repos");
        break;
        case 6:
        alert("on est samedi, alcool, drogue et sexe !!");
        break;
        default:
        alert(d);
    }
}

//exo 9
/*Créer un bouton.
Au click de ce bouton, lancer la fonction testWhile. 
Cette fonction demande à l'utilisateur de saisir une chaîne de caractères contenant la lettre p, et le redemande tant que 
l'utilisateur ne l'a pas fait.
Il affiche ensuite la chaîne saisie entre guillemets.*/
testWhile = () => {
    do { phrase = prompt("Inserez une phrase avec un p");
    } while (phrase.indexOf("p") == -1);
  alert(phrase);
}

//exo 10
/*Créer un bouton. Au click de ce bouton, lancer la fonction somme. 
Cette fonction demande trois fois à l'utilisateur de saisir un nombre et affiche ensuite la somme de ces trois nombres.
*/
function somme(){
    let i;
    let resultat = 0;
    for(i=0; i<3; i++){
    let a = prompt('Entrez un nombre : ');
    resultat += Number(a);
    }
    alert(resultat);
    }

//exo 11
/*Créer un bouton. Au click de ce bouton, lancer la fonction calculMoyenne.
Cette fonction va calculer la moyenne des nombres entrés au clavier :
demande à l'utilisateur d'entrer un nombre entier.
si l'utilisateur entre autre chose qu'un nombre entier, un message d'alerte signale l'erreur et ensuite, la fonction redemande à l'utilisateur 
d'entrer un nombre entier.
tant que le nombre entré est positif ou nul, la fonction mémorise ce nombre et l'additionne aux autres nombres précédemment entrés.
si le nombre est négatif, alors la fonction calcule la moyenne de tous les nombres entrés en divisant la somme totale par le nombre de valeurs entrées.
la fonction affiche le nombre de valeurs entrées
la fonction affiche la moyenne*/


//exo 12
/*Créer un bouton. Au click de ce bouton, on lance la fonction conversionTemperature.
L'utilisateur choisit d'abord dans le menu affiché quel type de conversion il souhaite, 
il indique son choix en indiquant le numéro correspondant dans le menu au moyen d'un prompt javascript
Ensuite, un second prompt va lui demander la température à convertir et afficher le résultat dans une boîte d'alerte.
Le menu :
Fin du programme
De Celsius vers Fahrenheit1
De Celsius vers Kelvin2
De Fahrenheit vers Celsius3
De Fahrenheit vers Kelvin4
De Kelvin vers Celsius5
De Kelvin vers Fahrenheit6
Pour calculer la conversion, utilisez les formules suivantes :
[°F] = ([°C] x 9/5) + 32
[K] = [°C] + 273,15
[°C] = ([°F] - 32) / (9/5)
[K] = (([°F] - 32) x (5/9)) + 273,15
[°C] = [K] - 273,15
[°F] = ([K] x 9/5) - 459,67
où [K] représente la température en kelvin
où [°F] représente la température en degrés Fahrenheit
où [°C] représente la température en degrés Celsius
Exemples de valeurs à tester :
0 K = -273,15 °C = -459,67 °F
283,15 K = 10 °C = 50 °F
273,15 K = 0 °C = 32 °F
373,15 K = 100 °C = 212 °F
233,15 K = -40 °C = -40 °F*/
conversionTemperature = () => {
    let numChoisi = prompt("Tapes 1 pour Celsius => Fahrenheit\nTapes 2 pour Celsius => Kelvin\nTapes 3 pour Fahrenheit => Celsius\nTapes 4 pour Fahrenheit => Kelvin\nTapes 5 pour Kelvin => Celsius\nTapes 6 pour Kelvin => Fahrenheit")
    let nombreAConvertir
    switch (numChoisi) {
    case numChoisi = '1':
        nombreAConvertir = prompt("Température en Celsius","25");
        alert(parseInt(nombreAConvertir*(9/5))+32);
    break;
    case numChoisi = '2': 
        nombreAConvertir = prompt("Température en celsius","22");
        alert(parseInt(nombreAConvertir)+273.15);
    break;
    case numChoisi = '3':
        nombreAConvertir = prompt("Température en Fahrenheit","32");
        alert(parseInt((nombreAConvertir - 32) / (9/5)));
    break;
    case numChoisi = '4':
        nombreAConvertir = prompt("Température en Fahrenheit","32");
        alert(parseInt((nombreAConvertir - 32) * (5/9)) + 273.15);
    break;
    case numChoisi = '5':
        nombreAConvertir = prompt("Température en Kelvin", "273.15");
        alert(Number(nombreAConvertir-273.15));
    break;
    case numChoisi = '6':
        nombreAConvertir = prompt("Température en Kelvin","273.15");
        alert(Number((nombreAConvertir * (9/5))-459.67));
    break;
    default:
    alert("C'est pas un nombre ça !!");
    }
}

//exo 13
/*L'IMC ou Indice de Masse Corporelle est utilisé pour évaluer les risques sur la santé liés au surpoids chez l'adulte. 
Il se calcule en divisant le poids exprimé en kg par le carré de la taille exprimée en mètre.
Par exemple :
- Une personne pesant 95 kg et mesurant 1,81 m a un IMC de 95/(1.81*1.81)= environ 29,0
- Une personne pesant 48 kg et mesurant 1,69 m a un IMC de 48/(1.69*1.69)= environ 16,8
- Une personne pesant 61 kg et mesurant 1,57 m a un IMC de 61/(1.57*1.57)= environ 24,7
En fonction de la valeur obtenue, on peut estimer la corpulence de la manière suivante :
- moins de 16,5 : dénutrition ou famine
- 16,5 <= IMC < 18,5 : maigreur
- 18,5 <= IMC < 25 : corpulence normale
- 25 <= IMC < 30 : surpoids
- 30 <= IMC < 35 : obésité modérée
- 35 <= IMC < 40 : obésité sévère
- plus de 40 : obésité morbide
Créer un bouton. Au click de ce bouton, lancer la fonction calculIMC.
Cette fonction va demander le poids et la taille, calculer l'IMC, ensuite l'afficher avec 2 décimales et 
enfin afficher un message disant dans quelle catégorie de corpulence on se situe.*/
calculIMC = () => {
    let poids
    poids = prompt("Quelle votre poids en kg ?","ex : 82.68");
    let taille
    taille = prompt("Quelle est votre taile en mètre ?","ex : 1.90");
    let balbal = Number(poids/(taille*taille));
    let votreIMC = balbal.toFixed(2);
        if (votreIMC < 16.5) {
            alert("Votre IMC est "+ votreIMC +"\nEt celle-çi vous place dans la catégorie : dénutrition ou famine");
        }
        else if (votreIMC < 18.5) {
            alert("Votre IMC est "+ votreIMC +"\nEt celle-çi vous place dans la catégorie : maigreur");
        }
        else if (votreIMC < 25) {
            alert("Votre IMC est "+ votreIMC +"\nEt celle-çi vous place dans la catégorie : corpulance normale");
        }
        else if (votreIMC < 30) {
            alert("Votre IMC est "+ votreIMC +"\nEt celle-çi vous place dans la catégorie : surpoids");
        }
        else if (votreIMC < 35){
            alert("Votre IMC est "+ votreIMC +"\nEt celle-çi vous place dans la catégorie : obésité modérée");
        }
        else if (votreIMC < 40) {
            alert("Votre IMC est "+ votreIMC +"\nEt celle-çi vous place dans la catégorie : obésité sévère");
        }
        else if (votreIMC > 40) {
            alert("Votre IMC est "+ votreIMC +"\nEt celle-çi vous place dans la catégorie : obésité morbide");
        }
        else {
            alert("Tu n'as pas respecté les consignes !");
    }
}
/*Crée un tableau avec des objets à vendre (épée, hache, sceptre, etc.)

Caractéristique de chaque objet :

title (string)
physic (int)
magic (int)
minLevel (int)
available (boolean)
Manipulation :

faire une fonction pour afficher tout les objets
faire une fonction pour afficher les objets disponibles
faire une fonction pour afficher les objets dont le niveau minimum est de 10
*/


shop = {"items_to_sell" : [
    {"name": "épée de la mort qui tue","physics" : 10, "magic" : 15, "minLevel" : 12, "dispo" : true},
    {"name": "hache qui déglingue", "physics" : 10, "magic" : 10, "minLevel" : 10, "dispo" : true},
    {"name": "bouclier anti-zombies", "physics" : 10, "magic" : 11, "minLevel" : 10, "dispo" : false},
    {"name": "sceptre magique", "physics" : 10, "magic" : 13, "minLevel" : 10, "dispo" : true},
    {"name": "armure qui brille", "physics" : 8, "magic" : 10, "minLevel" : 10, "dispo" : true},
    {"name": "armure qui brille pas mais qui est plus badass", "physics" : 20 , "magic" : 10 , "minLevel" : 15, "dispo" : true},
    {"name": "potion de vie", "physics" : 10, "magic" : 7, "minLevel" : 10, "dispo" : false},
]};

let shoping = () => {
    let disponible;
    for (let i in shop.items_to_sell) {
    disponible = shop.items_to_sell[i].dispo;
    if (disponible==true) {
        console.log(shop.items_to_sell[i]);
    }
    }
    }
    //shoping();
let level = () => {
    let niveau;
    for (let i in shop.items_to_sell) {
        niveau = shop.items_to_sell[i].minLevel;
        if (niveau > 10) {
            console.log(shop.items_to_sell[i]);
        }
        }
        }
level()
  /*
  Crée un objet "Character" qui contient les informations suivantes :
name (string)

age (numero)

items_to_give (tableau)

afficher chaque information sur une ligne séparés dans la console (for in)

faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement*/
let nbrADeviner
let itemRecu = [];
Character = {"name" : "maxime", "age" : 25, "items_to_give" : ["épée", "hache", "arc", "bouclier"]};
for (x in Character) {
    console.log(Character [x]);
}
getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }
  nbrADeviner = getRandomArbitrary(0, 3);


    selectObj = () => {
        return console.log(Character.items_to_give[nbrADeviner])
    }
    selectObj()

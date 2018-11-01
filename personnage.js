/*crée un objet "mainCharacter" qui possède le propriétés suivantes :
name (string)
level (int)
life (int)
weapon (object)
attack (function)
l'objet "weapon" possède les propriétés suivantes :
name (string)
damage (int)
Appeler la fonction "attack" du personnage
la fonction doit retourner : (le nom du personnage) attaque avec l'arme (nom de l'arme) les dégâts sont 
(niveau du personnage multiplié par le damage de l'arme)
*/

mainCharacter = {"name" : "Raph", "level" : 2, "life" : 100, }, weapon = {"name" : "bibite flingueuse", "damage" : 5};

dommage_totaux = () => {
    return (weapon.damage) * (mainCharacter.level);
}

attack = () => {
    return (mainCharacter.name) + (" lance l'attaque ") + (weapon.name) + (" et te retire : ") + (dommage_totaux()) + (" PV");
}


console.log(attack())

/*crée un objet "character" qui possèe le propriétés suivantes :
name (string)
level (int)
life (int)
weapon (object)
attack (function)
receiveDamage (function)
l'objet "weapon" possèe les propriétés suivantes :
name (string)
damage (int)
crée un objet "opponentCharacter" a partir de character

crée un objet "mainCharacter" a partir de character

Appeler la fonction "attack" de "mainCharacter" afin qu'il attaque "opponentCharacter"

la fonction doit afficher dans la console (ligne par ligne)
(le nom du personnage) attaque (nom de l'adversaire)
avec l'arme (nom de l'arme)
et lui inflige (niveau du personnage multiplié par le damage de l'arme) de dégats
(nom de l'adversaire) a maintenant (life de l'adversaire) de vie*/

Character = {"name" : "Nathan", "level" : 2, "life" : 75, }, weapons = {"name" : "kekette de compette", "damage" : 5}
dommage_totaux = () => {
    return (weapons.damage) * (Character.level);
}

attacks = () => {
    return (Character.name) + (" lance l'attaque ") + (weapons.name) + (" et te retire : ") + (dommage_totaux()) + (" PV");
}
console.log(attacks());
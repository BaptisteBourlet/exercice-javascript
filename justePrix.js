let message1 = "c'est moins";
let message2 = "C'est plus";
let message3 = "GG mec t'as trouvé en "
let nbrEssai;
let nbrADeviner;
getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }
  nbrADeviner = getRandomArbitrary(20, 80);
  console.log(nbrADeviner);
 
justePrix = () => {
    let cannette = prompt("Entrez un nombre entre 20 et 80 please");
    let i;
    for (i = 0; i < 8; i++) {
    if (cannette < nbrADeviner) {
        alert(message2);
        cannette = prompt("Entrez un nombre entre 20 et 80 please");
    } else if (cannette > nbrADeviner){
        alert(message1);
        cannette = prompt("Entrez un nombre entre 20 et 80 please");
    } else if (cannette == nbrADeviner){
        nbrEssai = i + 1;
        alert(message3 + nbrEssai + " coups");
        break;
    } else {
        alert("tg baltringue");
    }
}
}
justePrix();
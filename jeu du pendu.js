    let tab = ["B", "O", "N", "J", "O", "U", "R"];
    let goodAnswer = ["", "", "", "", "", "", ""];
    
    
    let guessLetter = () => {
        let essai = prompt("Entrez une lettre svp");
        let goodEssai = essai.toUpperCase();
        if (tab.includes(goodEssai) == false) {

            console.log("erreur");
        }
        for (let i = 0; i <= tab.length; i++) {
            
            
            if (tab[i] == goodEssai) {
                goodAnswer[i] = goodEssai;
                console.log("Bravo", goodAnswer);
            } 
    
        }
        
            if (goodAnswer.indexOf("") >= 0) {
                guessLetter();
            }
            else {
                alert("Gagné!");
            }
        
    };

    guessLetter();
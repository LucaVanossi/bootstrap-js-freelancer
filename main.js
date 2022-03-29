/* - Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, 
fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.*/

function calcoloTotale() {

    const costosviluppoBackEnd = 20.5;
    const costosviluppoFrontEnd = 15.3;
    const costoprojectAnalist = 33.6;
    
    let Sconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
    alert(Sconti);
    
    let ore = document.getElementById("Hours").value;
    ore = parseInt(ore);
    alert(ore);
    
    let lavoro = document.getElementById("ToF").value; 
    alert(lavoro);
    
    let valoreSconto = controlloSconto(Sconti);
    
    alert(valoreSconto);

    let valore , valoreTotale;
    switch (lavoro) {
        case "Backend Development":
            valore = (ore * costosviluppoBackEnd);
            valoreTotale = valore - (valore * valoreSconto);
            break;
        case "Frontend Development": 
            valore = ore * costosviluppoFrontEnd;
            valoreTotale = valore - (valore * valoreSconto);
            break;
        case "Project Analisys":
            valore = ore * costoprojectAnalist;
            valoreTotale = valore - (valore * valoreSconto);
            break;
      
    }
    
    valoreTotale = valoreTotale.toFixed(2);
    alert("totale " + valoreTotale);
    
    document.getElementById("TotaleCalcolato").innerHTML = "Il totale è : " + valoreTotale + "\u20AC";
    
    }

    function controlloSconto(lista) { 
        let discount = document.getElementById("discount").value; //codice sconto
        discount = discount.toUpperCase();
        alert(discount);
        let valoreSconto = 0;
        for (let i = 0; i < lista.length; i++){
            if (discount == lista[i]) { 
                valoreSconto = 0.25;
                break;
            } 
        }
        return valoreSconto;
        
    }
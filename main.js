/* - Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, 
fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.*/

const TypeofWork = document.getElementById ("TypeofWork");

const HoursRequested = document.getElementById ("HoursRequested");

const DiscountCode = document.getElementById ("DiscountCode");

let Conto =0;

const element = document.getElementById("Send");
element.addEventListener("click", CalcoloPrezzo);

function CalcoloPrezzo () {
if (TypeofWork=="Backend Development") {
    Conto=(HoursRequested*20.5);
} else if (TypeofWork=="Frontend Development") {
    Conto=(HoursRequested*15.3);
} else (TypeofWork=="Project Analisys") 
    Conto=(HoursRequested*33.6);
    return (Conto);
    
} document.getElementById("PrezzoFinale").innerHTML = Conto;


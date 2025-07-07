/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60 */


// varibile chilometri in cui bisogna inserire i km che il passeggero vuole percorrere, tramite prompt
const chilometri = Number(prompt('Inserisci il numero di chilometri da percorrere'));
console.log(chilometri);

//variabile eta, sempre tramite prompt
const eta = Number(prompt('Inserisci la tua età'))
console.log(eta);

//creare nuova variabile, prezzo, calcolare il prezzo del biglietto, facendo variabile chilometri*0,21
let prezzo = chilometri * 0.21;
console.log(prezzo);

//verificare se c'è da applicare la scontistica, if var eta<18 prezzo= prezzo- (prezzo*0,2)
// if var eta>=65 prezzo=prezzo-(prezzo*0,4)
//far comparire il prezzo finale

let prezzo_finale = ''; 
if (eta < 18) {
    prezzo_finale = (prezzo - (prezzo * 0.2)).toFixed(2);
    console.log( `Il prezzo finale è di: ${prezzo_finale} € `) ;
} else if (eta >= 65) {
    prezzo_finale = (prezzo - (prezzo * 0.4)).toFixed(2);
    console.log( `Il prezzo finale è di: ${prezzo_finale} € `) ;
} else {
    prezzo_finale = prezzo.toFixed(2);
    console.log( `Il prezzo finale è di: ${prezzo_finale} € `) ;
}
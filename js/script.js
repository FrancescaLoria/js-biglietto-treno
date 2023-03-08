// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca

// CHIEDIAMO ALL'UTENTE IL NUMERO DI CHILOMETRI CHE VUOLE PERCORRERE.
const userKilometres = prompt("Quanti chilometri vuoi percorrere?");
console.log(userKilometres);

// CHIEDIAMO ALL'UTENTE QUANTI ANNI HA.
const userAge = prompt("Quanti anni hai?");
console.log(userAge);

// SULLE BASI DELLA PRIMA DOMANDA CALCOLIAMO IL PREZZO INTERO DEL BIGLIETTO
const priceForKm = 0.21;
const totalPrice = userKilometres * priceForKm;
console.log(totalPrice);

// SULLA BASE DELL'ETA' DEL NOSTRO UTENTE CALCOLIAMO LO SCONTO
let discount = 0;
if (userAge < 18) {
  discount = 20;
} else if (userAge > 65) {
  discount = 40;
}

const finalPrice = totalPrice - totalPrice * (discount / 100);
console.log(finalPrice.toFixed(2));

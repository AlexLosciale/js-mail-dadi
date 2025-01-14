/**
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

/*
1-CREARE UN NUMERO RANDOMICO DA 1 A 6 
  1.2-CREARLO PER 2 PERSONE (PC/PERSONA)
2-INSERIRE IL RILSTATO IN UN IF, COSI DA STABILIRE IL VINCITORE DEL GIOCO
3-STAMPARE IL RISULTATO 
*/

let NunberPc = Math.floor(Math.random() * 6);
let NumberPippo = Math.floor(Math.random() * 6);

console.log(NunberPc);
console.log(NumberPippo);

if (NunberPc > NumberPippo) {
    console.log("Il Pc vince");
} else if (NunberPc < NumberPippo) {
    console.log("Pippo vince");
} else {
    console.log("Vincono entrambi");
} 
    



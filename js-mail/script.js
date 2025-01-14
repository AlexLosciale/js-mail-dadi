/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email
*/

/**
 1-CREARE UN ARREY CON ALCUNE EMAIL
 2-CREARE UN PROMPT DOVE FARE INSERIRE EMAIL ALL'UTENTE
 3-CONTROLLARE CON UN CICLO SE EMAIL INSERITA E PRESENTE NELLA LISTA ARREY
 4-STAMPARE IL RISULTATO IN BASE ALL'ESITO DEL CONTROLLO 
*/

const email = [
    'pippo@gmail.com',
    'topolino@gmail.com',
    'paperino@gmail.com',
    'pluto@gmail.com',
];

console.log(email);

let emailPippo = prompt("Inserisci la tua email:");

let found = false;

for (let index = 0; index < email.length; index++) {
    if (emailPippo === email[index]) {
        found = true;
        break;
    }
}

if (found) {
    console.log("SEI STATO INVITATO ALLA FESTA");
} else {
    console.log("NON SEI NELLA LISTE DEGLI INVITATI");
}

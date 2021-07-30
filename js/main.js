// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var utente = {
    nome : 'edoardo',
    cognome : 'ercolino',
    eta : 26
};

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(var key in utente) {
    console.log(utente[key]);
};
// Creare un array di oggetti di studenti.
var studenti = 
[
    {
        nome : 'alberto',
        cognome : 'rossi'
    },
    {
        nome : 'dario',
        cognome : 'gialli'
    },
    {
        nome : 'federico',
        cognome : 'verdi'
    },
    {
        nome : 'elena',
        cognome : 'bianchi'
    },
];
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for(var key in studenti) {
    console.log(studenti[key])
}
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var utente = {
    nome : 'edoardo',
    cognome : 'ercolino',
    eta : 26
};

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(var key in utente) {
    console.log(key + ' : ' + utente[key]);
};

// Creare un array di oggetti di studenti.
var studenti = 
[
    {
        nome : 'alberto',
        cognome : 'rossi',
        eta : 22
    },
    {
        nome : 'dario',
        cognome : 'gialli',
        eta : 29

    },
    {
        nome : 'federico',
        cognome : 'verdi',
        eta : 30
    },
    {
        nome : 'elena',
        cognome : 'bianchi',
        eta : 20
    }
];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for(let i = 0; i < studenti.length; i++) {
    var studente = studenti[i];
    console.log(studente.nome, studente.cognome);
};

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovoAlunno = {};
nuovoAlunno.nome = prompt('inserisci un nome');
nuovoAlunno.cognome = prompt('inserisci un cognome');
nuovoAlunno.eta = parseInt(prompt('inserisci l\'età'));
console.log(nuovoAlunno);
studenti.push(nuovoAlunno);
console.log(studenti);





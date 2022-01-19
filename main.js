//comandi per creare password automatica

//Prompt per inserire il nome
let nome= prompt ('inserisci il tuo nome');

//Prompt per inserire il cognome
let cognome= prompt ('Inserisci il tuo cognome');

//Prompt per inserire il colore preferito
let colorePreferito=prompt ('Inserisci il tuo colore preferito');

document.getElementById('password').innerHTML = nome + cognome + colorePreferito + "21"


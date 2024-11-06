/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
//Parto da una stringa e mi restituisce una stringa

const saluto = (nome) => {
    const date = new Date();
    const ora = date.getHours;
    let result = '';

    if (ora <= 13) {
        result += 'Buongiorno'
    } else if (ora <= 17) {
        result += 'Buon pomeriggio'
    } else {
        result += 'Buonasera'
    }
     return result += ` ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
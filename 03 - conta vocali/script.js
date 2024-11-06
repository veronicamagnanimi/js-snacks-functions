/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * @param {string} 
 * @return {array} 
 */

function vocali(stringa) {
    const listaVocali = ['a', 'e', 'i', 'o', 'u'];
    let conteggio = [];
    let variabile;
    let array = stringa.split("");

    for(let i = 0; i < array.length; i++) {
        variabile = array[i];

        if(listaVocali.includes(variabile)) {
            conteggio.push(variabile);
        }
    }
    return conteggio;
}

// Invoca la funzione qui e stampa il risultato in console

let result = conteggio(word);
console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
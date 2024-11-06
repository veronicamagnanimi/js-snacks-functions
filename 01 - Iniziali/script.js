/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * 
 * @param {string} array 
 * @return {string} 
 */

function initials(array) {
    const addInitials = [];  
    for (let i = 0; i < array.length; i++) {
      addInitials.push(array[i][0]); 
    }
    return addInitials; 
}

// Invoca la funzione qui e stampa il risultato in console

const addInitials = initials(names);
console.log(addInitials);  

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
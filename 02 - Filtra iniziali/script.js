/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const filterLetter = "A";
// Dichiara la funzione qui.
/**
 * 
 * @param {array} 
 * @param {string} 
 * @return {array} 
 */

const firstLetter = (nomi, lettere) => {
   let arrayFilter = [];

   for(let i = 0; i < lettere.length; i++) {
    curItem = lettere[i];

   if(nomi === curItem.charAt(0)) {
        arrayFilter.push(curItem);
    }
   }
   
   return arrayFilter;
}


 

// Invoca la funzione qui e stampa il risultato in console

let result = firstLetter(filterLetter, names);
console.log(result);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
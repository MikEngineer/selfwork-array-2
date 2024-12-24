// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:  

// Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori = [3, 5, 2]

// Variante:
//   Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.

let numbers = [3, 6, 1, 8, 2, 7, 4, 9, 5];

let somma = numbers.reduce((acc, n)=> acc + n);
let media = somma / numbers.length;

let minori = [];
for (let i = 0; i <= numbers.length; i++){
    if(numbers[i] < media){
        minori.push(numbers[i]);
    }
}

let maggiori = [];
for (let i = 0; i <= numbers.length; i++){
    if(numbers[i] > media){
        maggiori.push(numbers[i]);
    }
}

console.log(`Media = ${media}, valori minori = [${minori}]. I numeri minori della media sono ${minori.length} mentre i numeri maggiori della media sono ${maggiori.length} (ovvero [${maggiori}]).`)



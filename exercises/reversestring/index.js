// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//mia
/* function reverse(str) {
    let currentVerse = str.split("");
    let reversed = [];
    for(let i = currentVerse.length-1; i >= 0; i-- ){
        reversed.push(currentVerse[i]);
    }
    return reversed.join("")
} */

//come la mia ma con FOR OF
/* function reverse(str) {
    let reversed = '';
    for (let carattere of str){
        reversed = carattere + reversed;
    }
    return reversed;
} */

//alternativa più semplice
/* function reverse(str) {
    return str
    .split("")
    .reverse()
    .join("");
} */

//più complessa con reduce()
function reverse(str) {
    return str.split('').reduce((reversed, carattere) => carattere + reversed, '');
}
module.exports = reverse;

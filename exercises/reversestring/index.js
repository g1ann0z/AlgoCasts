// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let currentVerse = str.split("");
    let reversed = [];
    for(let i = currentVerse.length-1; i >= 0; i-- ){
        reversed.push(currentVerse[i]);
    }
    return reversed.join("")
}



module.exports = reverse;

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let splitString = [];
    splitString = str.split('');

    for (let i = 0; i < splitString.length; i++){
        if (i == 0){
            let tempFirstLetter = splitString[i].toUpperCase();
            splitString[i] = tempFirstLetter;
        } else if (splitString[i] === ' '){
            let tempLetter = splitString[i + 1].toUpperCase();
            splitString[i + 1] = tempLetter;
        }
    }
    return splitString.join('');
}

module.exports = capitalize;

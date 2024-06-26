// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const strLower = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for(let char = 0; char < strLower.length; char++){
        if (vowels.includes(strLower[char])){
            count++;
        }
    }
    return count;
}

module.exports = vowels;

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//easymode
/* function anagrams(stringA, stringB) {
    if (stringA.length !== stringB.length){
        return false;
    }
    let orderedStringA = stringA.split('').sort().join('');
    let orderedStringB = stringB.split('').sort().join('');
    if (orderedStringA === orderedStringB){
        return true;
    }
    return false;
} */

//test con mapping delle lettere
function anagrams(stringA, stringB) {
    if (stringA.length !== stringB.length){
        return false;
    }
    let orderedStringA = stringA.replace(/[^\w]/g, "").toLowerCase(); //rimuove tutti i caratteri non parole della stringa a livello globale e li sostituisce con "" 
    let orderedStringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    let objStringA = {};
    let objStringB = {};

    for(let charA of orderedStringA){
        if(objStringA[charA]){
            objStringA[charA]++;
        } else {
            objStringA[charA] = 1;
        }
    }
    

    for(let charB of orderedStringB){
        if(objStringB[charB]){
            objStringB[charB]++;
        } else {
            objStringB[charB] = 1;
        }
    }
    
    let check = true;
    
    for(let char in objStringA){
        if (objStringA[char] !== objStringB[char]){
            check = false;
        }
        }
    return check;
}

module.exports = anagrams;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



/* function maxChar(str) {
    let strToObj = {};
    for (const char of str) {
        if (!strToObj[char]){
            strToObj[char] = 1;
        } else {
            strToObj[char]++;
        }
    }
    let maxValue = 0;
    let maxChar = '';

    for (let value in strToObj){
        if (strToObj[value] > maxValue){
            maxValue = strToObj[value];
            maxChar = value;
        }
    }
    
    return maxChar;

} */

function maxChar(str) {
    let stringMap = {};
    for (let char of str) {
        if (stringMap[char]) {
            stringMap[char]++;
        } else {
            stringMap[char] = 1;
        }
    }
    let maxKey;
    let maxValue = 0;

    for (let key in stringMap) {
        if (stringMap[key] > maxValue) {
            maxValue = stringMap[key];
            maxKey = key;
        }

    }
    return maxKey;


}


module.exports = maxChar;

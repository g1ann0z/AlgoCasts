// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//iterativa più veloce, complessità lineare nhh
/* function fib(n) {
    let arrayFib = [];
    for(let i = 0; i <= n; i++){
        if (i < 2){
            arrayFib[i] = i;
        } else {
            arrayFib[i] = arrayFib[i - 2] + arrayFib [i - 1];
        }
    }
    return arrayFib[n];
} */

//ricorsiva piu lenta, tempo esponenziale 2 ^ n
function fib(n) {
    if (n < 2){
        return n;
    } else {
        return fib(n - 2) + fib(n - 1);
    }
}

module.exports = fib;

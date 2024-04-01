// The function should in
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
// The array filter method filters and gives us the specific prime numbers we wanted
function filterPrimes(arr) {
    return arr.filter(isPrime);
}
// Output should be : [2, 3, 5, 7]
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  

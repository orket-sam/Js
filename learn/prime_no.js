

function checkPrime(x) {
    var isPrime = true;
    for (var i = 2; i < x; ++i) {
        if (x % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}


function listOfPrimeNumbers(range) {
    var result = [];
    for (var i = 2; i < range; i++) {
        if (checkPrime(i)) {
            result.push(i)
        }
    }
    console.log(result)

}


listOfPrimeNumbers(100)
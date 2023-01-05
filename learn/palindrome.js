

function palindromeChecker(words) {
    var flag;
    for (var i = 0; i < words.length; i++) {
        var reverseIndex = words.length - 1 - i;
        if (words[i] != words[reverseIndex]) {
            flag = false
            break
        } else {
            flag = true;
        }
    }
    return flag;
}

console.log(palindromeChecker('i'));
console.log(__filename)
console.log(__dirname)
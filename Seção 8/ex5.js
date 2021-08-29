function maiorOuIgual(...args) {
    if (args[0] >= args[1]) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(5, 1))
console.log(maiorOuIgual(1, 5))
console.log(maiorOuIgual(0, '0'))
console.log(maiorOuIgual(0, 0))

function foo(vetor, inteiro) {
    return vetor.map(item => item * inteiro)
}

function bar(vetor, inteiro) {
    return vetor.map(item => item > 5 ? item * inteiro : null /* ou 0 */)
}

console.log(foo([1, 2, 3], 4))
console.log(bar([4, 8, 6], 9))

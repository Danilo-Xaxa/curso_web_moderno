function simboloMais(vezes) {
    let x = ''
    for (let i = 0; i < vezes; i++) {
        x = x.concat('+')
    }
    return x
}

console.log(simboloMais(4))
console.log(simboloMais(2))

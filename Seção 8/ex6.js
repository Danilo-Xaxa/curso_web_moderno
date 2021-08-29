function inverso(valor) {
    if (typeof valor === 'boolean') {
        return !valor
    } else if (typeof valor === 'number') {
        return -valor
    }
    else {
        return 'Passe como parâmetro um valor Boolean ou Number'
    }
}

console.log(inverso(true))
console.log(inverso('6'))
console.log(inverso(-2000))
console.log(inverso("aaa"))

function dinheirar(num) {
    valorEmReais = num.toFixed(2).toString().replace('.', ',')
    return `R$ ${valorEmReais}`
}

console.log(dinheirar(0.1 + 0.2))
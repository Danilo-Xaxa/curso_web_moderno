Array.prototype.reduce2 = function(callback, valorInicial) {
    let subtotal, indiceInicial

    if (valorInicial === undefined) {
        subtotal = this[0]
        indiceInicial = 1
    } else {
        subtotal = valorInicial
        indiceInicial = 0
    }

    /* solução do professor:
    const indiceInicial = valorInicial ? 0 : 1
    let subtotal = valorInicial || this[0]
    */

    for (let i = indiceInicial; i < this.length; i++) {
        subtotal = callback(subtotal, this[i], i, this)
    }

    return subtotal
}



const produtos = [
    { produto: "Ovo da Páscoa", preco: 391.23 },
    { produto: "Caneta", preco: 5.87 },
]

const precos = produtos.map(produto => produto.preco)

const somaPrecos = precos.reduce2(function(acumulador, atual) {
    return acumulador + atual
}, 20)

console.log(somaPrecos)



let nums = [10, 2, 5, 1]

const numsSubtraidos = nums.reduce2(function(acumulador, atual) {
    return acumulador - atual
})

console.log(numsSubtraidos)

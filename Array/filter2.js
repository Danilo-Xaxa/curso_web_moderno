Array.prototype.filter2 = function(callback) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produtos = [
    { produto: "Ovo da Páscoa", preco: 391.23 },
    { produto: "Caneta", preco: 5.87 },
]

const produtosCaros = produtos.filter2(function(item) {
    return item.preco > 100
})

console.log(produtosCaros)

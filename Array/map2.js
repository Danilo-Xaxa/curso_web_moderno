function map2(callback) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}

Array.prototype.map2 = map2

const carrinho = [
    '{ "nome": "Danilo", "preco": 3.85 }',
    '{ "nome": "Kim Jong-Un", "preco": 7.50 }',
]

const arrayPrecos = carrinho.map2(function(item) {
    return JSON.parse(item).preco
})

console.log(arrayPrecos)

/* SOLUÇÃO DO PROFESSOR:
const paraObjeto = json => JSON.parse(json)
const apenasPreco = objeto => objeto.preco
const arrayPrecos = carrinho.map(paraObjeto).map(apenasPreco)
*/

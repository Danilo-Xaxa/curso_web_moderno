function precoTotal(arranjo) {
    const precos = arranjo.map(item => item.preco)
    return precos.reduce(function(acumulador, atual) {
        return acumulador + atual
    })
}

console.log(precoTotal([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))

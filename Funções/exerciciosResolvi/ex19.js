const elação = (codigo, qtd) => {
    switch (codigo) {
        case 100:
            return `PREÇO: ${3 * qtd}`
        case 200:
            return `PREÇO: ${4 * qtd}`
        case 300:
            return `PREÇO: ${5.5 * qtd}`
        case 400:
            return `PREÇO: ${7.5 * qtd}`
        case 500:
            return `PREÇO: ${3.5 * qtd}`
        case 600:
            return `PREÇO: ${2.8 * qtd}`
        default:
            return 'PRODUTO NÃO EXISTENTE'
    }
}

console.log(elação(200, 2))
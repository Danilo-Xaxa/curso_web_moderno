function removerPropriedade(objeto, propriedade) {
    const copia = {...objeto}
    delete copia[propriedade]
    return copia
}

console.log(removerPropriedade({ a: 10, b: 20 }, 'a'))

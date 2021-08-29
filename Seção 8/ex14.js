function objetoParaMatriz(objeto) {
    let arrayMae = []
    for (let i in objeto) {
        arrayMae.push([i, objeto[i]])
    }
    return arrayMae
}

const objetoExemplo = {
    nome: 'Danilo',
    idade: 18
}

console.log(objetoParaMatriz(objetoExemplo))

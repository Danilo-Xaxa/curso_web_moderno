function somaArray(arranjo) {
    return arranjo.reduce(function(acumulador, atual) {
        return acumulador + atual
    })
}

console.log(somaArray([15, 15, 15, 15]))

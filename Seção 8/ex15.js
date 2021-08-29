function receberSomenteOsParesDeIndicesPares(arranjo) {
    return arranjo.filter(function(item) {
        return item % 2 == 0 && arranjo.indexOf(item) % 2 == 0
    })
}

console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

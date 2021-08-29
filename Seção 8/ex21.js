function menor(arranjo) {
    let menor = arranjo[0]
    arranjo.forEach(function(item) {
        if (item < menor) {
            menor = item
        }
    })
    return menor
}

console.log(menor([5, 1, 8, 2, 9, -15]))
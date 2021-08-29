function filtrarNumeros(arranjo) {
    return arranjo.filter(function(item) {
        return typeof item === 'number'
    })
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))

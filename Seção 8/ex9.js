function repetir(elemento, repetições) {
    let arranjo = []
    for (let i = 0; i < repetições; i++) {
        arranjo.push(elemento)
    }
    return arranjo
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))

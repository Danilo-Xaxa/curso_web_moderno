function potenciacao(base, expoente) {
    let resultado = 1
    for (let i = 0; i < expoente; i++) {
        resultado *= base
    }
    return resultado
    // ou return base**expoente ou return Math.pow(base, expoente)
}

console.log(potenciacao(5, 5))

function getPrimeiroEUltimoElem(vetor) {
    const ultimaPosicao = vetor.length - 1
    return [vetor[0], vetor[ultimaPosicao]]
}

console.log(getPrimeiroEUltimoElem([7, 14, "olá"]))
console.log(getPrimeiroEUltimoElem([-100, "aplicativo", 16]))

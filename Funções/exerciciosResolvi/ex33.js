let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (vetor1, vetor2) {
    resultado = vetor1
    for (let i in vetor2) {
        resultado.push(vetor2[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble))
const a = (vetor) => {
    let qtdNegativos = 0

    for (let i in vetor) {
        if (vetor[i] < 0) {
            qtdNegativos++
        }
    }
    
    return `${qtdNegativos} números negativos encontrados.`
}

console.log(a([10, 5, -7, 3, -1, 3, -11, -20, 6, 9]))
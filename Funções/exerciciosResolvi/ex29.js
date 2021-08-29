const atação = (vetor) => {
    let dentro = 0
    let fora = 0

    for (let i in vetor) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    }
    
    return `${dentro} dentro do intervalo. ${fora} fora do intervalo.`
}

console.log(atação([7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]))
// QUE GAMBIARRA FEIA DA DESGRAÇA

function trocarVetores(vetor1, vetor2) {
    console.log(vetor1)
    console.log(vetor2)
    console.log()

    for (let i in vetor1) {
        vetor2.push(vetor1[i])
    }
    console.log(vetor1)
    console.log(vetor2)
    console.log()

    vetor1 = []
    for (i = 0; i < vetor2.length / 2; i++) {
        vetor1[i] = vetor2[i]
    }
    console.log(vetor1)
    console.log(vetor2)
    console.log()

    for (i = 0; i < vetor2.length / 2; i++) {
        vetor2[i] = vetor2[i + vetor2.length / 2]
    }
    console.log(vetor1)
    console.log(vetor2)
    console.log()

    for (i = 0; i <= vetor2.length / 2; i++) {
        vetor2.pop()
    }
    console.log(vetor1)
    console.log(vetor2)
    console.log()
}

trocarVetores([1, 2, 3], [4, 5, 6])

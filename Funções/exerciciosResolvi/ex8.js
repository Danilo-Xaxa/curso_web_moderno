function basquete(jogosString) {
    let jogosArray = jogosString.split(', ').map(Number)

    let maior = jogosArray[0]
    let menor = jogosArray[0]
    let posicaoMenor = 0
    let quebrasRecorde = 0

    for (let i in jogosArray) {
        if (jogosArray[i] > maior) {
            maior = jogosArray[i]
            quebrasRecorde++
        }
        if (jogosArray[i] < menor) {
            menor = jogosArray[i]
            posicaoMenor = i
        }
    }
    return [quebrasRecorde, Number(posicaoMenor) + 1]
}

console.log(basquete('30, 40, 20, 4, 51, 25, 42, 38, 56, 0'))

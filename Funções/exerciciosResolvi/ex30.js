function maiorMenor(lista) {
    let maior = lista[0]
    let menor = lista[0]

    for (let i in lista) {
        if (lista[i] > maior) {
            maior = lista[i]
        } else if (lista[i] < menor) {
            menor = lista[i]
        }
    }

    return `MAIOR: ${maior}. MENOR: ${menor}.`
}

console.log(maiorMenor([10, 5, 7, 3, 1, 3, 11, 20, 6, 9]))

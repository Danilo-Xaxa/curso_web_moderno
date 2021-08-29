const ituição = (valor, taxa = 5, mes) => {
    if (mes > 0 && mes < 13) {
        return jurosCompostos(valor, taxa, mes - 1)
    } else {
        return 'ERRO. Digite um mês de 1 a 12'
    }
}

function jurosCompostos(capitalInicial, taxa, tempo) {
    taxa /= 100
    let montante = capitalInicial * (1 + taxa) ** tempo
    return montante
}

console.log(ituição(100, 5, 4))

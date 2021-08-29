function jurosSimples(capitalInicial, taxa, tempo) {
    taxa = taxa / 100
    let montante = capitalInicial + (capitalInicial * taxa * tempo)
    return montante
}

function jurosCompostos(capitalInicial, taxa, tempo) {
    taxa = taxa / 100
    let montante = capitalInicial * (1 + taxa) ** tempo
    return montante
}

// Ex: 100 reais de capital inicial, 10 porcento de taxa ao mês e 2 meses de tempo

console.log(jurosSimples(11400, 2.3333, 2).toFixed(2))
console.log(jurosCompostos(100, 10, 2).toFixed(2))

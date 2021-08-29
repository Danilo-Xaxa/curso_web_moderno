function calcularMediaPonderada(codigo, tresNotas) {
    tresNotas.sort()
    let mediaPonderada = ((tresNotas[0] * 3) + (tresNotas[1] * 3) + (tresNotas[2] * 4)) / 10

    console.log(`
    Código do aluno: ${codigo}
    Notas: ${tresNotas}
    Média ponderada: ${mediaPonderada}
    Situação: ${mediaPonderada > 5 ? 'APROVADO' : 'REPROVADO'}
    `)
}

calcularMediaPonderada(123, [2.8, 6, 3.5])

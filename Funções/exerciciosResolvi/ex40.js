const erminei = notas => {
    let nota
    for (let i in notas) {
        nota = notas[i]
        if (nota >= 9 && nota <= 10) {
            console.log(`${nota}: CONCEITO A`)
        } else if (nota >= 7) {
            console.log(`${nota}: CONCEITO B`)
        } else if (nota >= 5) {
            console.log(`${nota}: CONCEITO C`)
        } else if (nota >= 0) {
            console.log(`${nota}: CONCEITO D`)
        } else {
            console.log('ERRO. DIGITE UMA NOTA VÁLIDA')
        }
    }
}

erminei([10, 13, 9, 8.2, 2.5, 7.7, 6.8])

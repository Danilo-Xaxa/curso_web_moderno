function revenda(tipo) {
    switch (tipo) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'Certeza que não quer um hatch?'
        default:
            return `Não vendemos ${tipo}s aqui.`
    }
}

console.log(revenda('hatch'))

console.log(revenda('caminhonete'))

console.log(revenda('navio'))
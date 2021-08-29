const ipado = (plano, salario) => {
    switch (plano) {
        case 'A':
            return salario + (salario / 100 * 10)
        case 'B':
            return salario + (salario / 100 * 15)
        case 'C':
            return salario + (salario / 100 * 20)
        default:
            return 'ERRO. Digite um plano válido (A, B ou C)'
    }
}

console.log(ipado('C', 100))
function calculadora(valor1, valor2, operador) {
    switch (operador) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'OPERADOR INVÁLIDO'
    }
}

console.log(calculadora(3, 4, '*'))
function triangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log('EQUILÁTERO')
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log('ISÓCELES')
    } else {
        console.log('ESCALENO')
    }
}

triangulo(4, 4, 4)
triangulo(9, 9, 9)
triangulo(4, 2, 4)
triangulo(4, 4, 2)
triangulo(2, 4, 4)
triangulo(6, 8, 2)
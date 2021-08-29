function multiplicar(num1, num2) {
    let subtotal = 0
    for (let i = 0; i < num2; i++) {
        subtotal += num1
    }
    return subtotal
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))

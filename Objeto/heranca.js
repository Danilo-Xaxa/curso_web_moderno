const carro = {
    motorLigado: true,
    velMax: 100,
}

const fusquinha = {
    __proto__: carro,
    modelo: 'D80',
    velMax: 60
}

console.log()

console.log(Object.prototype)
console.log(Object.__proto__)
console.log(Object.prototype.__proto__)
console.log(Object.__proto__.prototype)

console.log()

console.log(fusquinha.__proto__)
console.log(fusquinha.__proto__.__proto__)
console.log(fusquinha.prototype)

console.log()
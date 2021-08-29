function foo(arr, qtd) { // essa função filtra com base na qtd de dígitos do item
    return arr.filter(elem => String(elem).length == qtd)
}

console.log(foo([38, 2, 365, 10, 125, 11], 2))
console.log(foo([5, 9, 1, 125, 11], 1))

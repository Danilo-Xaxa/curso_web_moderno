function maiorQueDez(valor) {
    return valor > 10 // repare que o valor retornado é um true ou um false, e não o número testado
}

let filtrado = [12, 5, 8, 130, 44].filter(maiorQueDez);
console.log(filtrado) // [ 12, 130, 44 ]
function estaEntre(numero, minimo, maximo, inclusivo) {
    if (inclusivo === true && (numero == minimo || numero == maximo)) {
        return true
    } else if (numero > minimo && numero < maximo) {
        return true
    } else {
        return false
    }
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(3, 150, 3, true))

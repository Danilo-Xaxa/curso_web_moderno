function diaUtil(dia) {
    switch (dia) {
        case 1:
            return "DIA NAO UTIL"
        case 2: case 3: case 4: case 5: case 6:
            return "DIA UTIL"
        case 7:
            return "DIA NAO UTIL"
        default:
            return "DIA INVALIDO"
    }
}

console.log(diaUtil(4))
console.log(diaUtil(1))
console.log(diaUtil(7))
console.log(diaUtil(8))
console.log(diaUtil(6))

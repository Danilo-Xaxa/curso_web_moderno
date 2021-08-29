const ância = (arranjo) => {
    let pares = 0
    let impares = 0

    for (let i in arranjo) {
        if (arranjo[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    
    return `${pares} pares encontrados. ${impares} impares encontrados.`
}

console.log(ância([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
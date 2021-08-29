const rutor = (alturas, taxasCrescimento) => {
    alturas.sort()

    if (seTemMenor(alturas)) {
        let criançaUm = alturas[0]
        let criançaDois = alturas[1]
        let contadorAnos = 0
        if (taxasCrescimento[0] > taxasCrescimento[1]) {
            while (criançaUm < criançaDois) {
                criançaUm += (criançaUm * (taxasCrescimento[0] / 100))
                criançaDois += (criançaDois * (taxasCrescimento[1] / 100))
                contadorAnos++
            }
            return `LEVOU ${contadorAnos} ANOS PARA A CRIANÇA MAIS BAIXA ULTRAPASSAR A CRIANÇA MAIS ALTA`
        } else {
            return 'A TAXA DE CRESCIMENTO É MAIOR NA CRIANÇA MAIS ALTA'
        }
    } else {
        return 'AS DUAS CRIANÇAS TEM A MESMA ALTURA'
    }
}


function seTemMenor(alturas) {
    if (alturas[0] !== alturas[1]) {
        return true
    } else {
        return false
    }
}

console.log(rutor([130, 150], [4, 2]))
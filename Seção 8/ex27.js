function inverterObj(objeto) {
    const novoObjeto = {}
    for (let i in objeto) {
        Object.defineProperty(novoObjeto, objeto[i], {
            value: i, 
            enumerable: true
        })
    }
    return novoObjeto
}


const objExemplo = { 'Danilo': 1, 'Larissa': 2 }
console.log(inverterObj(objExemplo))

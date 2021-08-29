let removerVogais = str => {
    let novaStr = ''
    for (let i in str) {
        // trabalho inverso (gambiarra?)
        if ('aAeEiIoOuU'.indexOf(str[i]) === -1) {
            novaStr += str[i]
        }
    }
    return novaStr
}

console.log(removerVogais('Fundamentos'))

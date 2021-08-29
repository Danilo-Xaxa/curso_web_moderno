String.prototype.count = function(char) {
    let cont = 0
    for (let i in this) {
        if (this[i] === char) {
            cont++
        }
    }
    return cont
}

function contarPalavras(str) {
    return /[a-z]/i.test(str) ? str.count(' ') + 1 : 0
}

console.log(contarPalavras('Sou uma frase'))
String.prototype.count = function(char) {
    let cont = 0
    for (let i in this) {
        if (this[i] === char) {
            cont++
        }
    }
    return cont
}

const ipado = (char, str) => {
    return str.count(char)
}

console.log(ipado("r", "A sorte favorece os audazes"))
console.log(ipado("c", "Conhece-te a ti mesmo"))

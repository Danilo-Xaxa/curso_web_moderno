const arranjo = ['Danilo', 'Icaro', 'Sullivan', 'Shirlei']

const printarValores = valor => {
    console.log(valor)
}

// não usar arrow function nesse caso (forEach2 é uma função com callback)
function forEach2(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

Array.prototype.forEach2 = forEach2

arranjo.forEach2(printarValores)

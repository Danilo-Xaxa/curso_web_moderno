const arranjo = ['Danilo', 'Icaro', 'Sullivan', 'Shirlei']

const printarValores = valor => {
    console.log(valor)
}

function forEach2(callback) {
    for (let i in this) {
        callback(this[i], i, this)
    }
}

Object.defineProperty(Array.prototype, 'forEach2', {
    enumerable: false,
    value: forEach2,
})

arranjo.forEach2(printarValores)

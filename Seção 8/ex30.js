Array.prototype.media = function() {
    return this.reduce((acumulador, atual) => acumulador + atual) / this.length
}

function receberMelhorEstudante(obj) {
    let nome = 0
    let media = 0
    for (let i in obj) {
        if (obj[i].media() > media) {
            media = obj[i].media()
            nome = i
        }
    }
    return { nome, media }
}

const objExemplo = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}

console.log(receberMelhorEstudante(objExemplo))

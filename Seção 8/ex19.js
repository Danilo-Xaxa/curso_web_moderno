const calcularMedia = vetor => vetor.reduce((acumulador, atual) => acumulador + atual) / vetor.length

console.log(calcularMedia([1, 2, 3, 4, 5]))
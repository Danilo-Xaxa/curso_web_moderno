const alunos = [
    { nome: 'Danilo', nota: 7.3 },
    { nome: 'Icaro', nota: 4.7 },
    { nome: 'Shirlei', nota: 2.8 },
    { nome: 'Sullivan', nota: 9.0 }
]

const notas = alunos.map(aluno => aluno.nota)

const somaNotas = notas.reduce(function(acumulador, atual) {
    return acumulador + atual
}/*, valorInicial */) // o valor inicial é um parâmetro opcional

console.log(somaNotas)
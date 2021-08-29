const alunos = [
    { nome: 'Danilo', nota: 7.3, bolsista: true },
    { nome: 'Icaro', nota: 4.7, bolsista: false },
    { nome: 'Shirlei', nota: 2.8, bolsista: true },
]
// só os valores true e false que dizem se o aluno é bolsista ou não
const foo = alunos.map(aluno => aluno.bolsista)
// todos os alunos são bolsistas? (nesse caso, false)
const bar = foo.reduce((acumulador, atual) => acumulador && atual)
// algum dos alunos é bolsista? (nesse caso, true)
const baz = foo.reduce((acumulador, atual) => acumulador || atual)
console.log(foo)
console.log(bar)
console.log(baz)
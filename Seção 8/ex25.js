function buscarPalavrasSemelhantes(palavra, arranjo) {
    const res = arranjo.filter(item => item.startsWith(palavra)) // será que não era isso?
    console.log(res)
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])

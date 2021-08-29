function PA(n, a1, r) {
    let progressao = []
    let termo = a1
    for (let cont = 0; cont < n; cont++) {
        progressao.push(termo)
        termo += r
    }
    return progressao
}

function PG(n, a1, r) {
    let progressao = []
    let termo = a1
    for (let cont = 0; cont < n; cont++) {
        progressao.push(termo)
        termo *= r
    }
    return progressao
}

console.log(PA(5, 2, 3))
console.log(PG(3, 6, 2))
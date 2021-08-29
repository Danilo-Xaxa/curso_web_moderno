function funcaoDaSorte(palpite) {
    // não lembro como se gera um randint
    let sorteado = String(Math.random())[2] // gambiarration (to sem net po)
    if (sorteado == palpite) {
        console.log(`Parabéns! O número sorteado foi realmente ${sorteado}`)
    } else {
        console.log(`Que pena! O número sorteado foi ${sorteado}`)
    }
}

funcaoDaSorte(6) // 1 a 9

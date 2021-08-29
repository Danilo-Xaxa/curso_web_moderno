function contador(valor) {
    let cedulas = {
        cem: 0,
        cinquenta: 0,
        dez: 0,
        cinco: 0,
        um: 0
    }

    while (valor > 0) {
        if (valor >= 100) {
            valor -= 100
            cedulas.cem++
        } else if (valor >= 50) {
            valor -= 50
            cedulas.cinquenta++            
        } else if (valor >= 10) {
            valor -= 10
            cedulas.dez++
        } else if (valor >= 5) {
            valor -= 5
            cedulas.cinco++
        } else if (valor >= 1) {
            valor -= 1
            cedulas.um++
        }
    }

    for (let item in cedulas) {
        if (cedulas[item] > 0) {
            console.log(`${cedulas[item]} nota(s) de ${item}`)
        }
    }
}

contador(289)

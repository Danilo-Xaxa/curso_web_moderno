function maior(arr) {
    let maior = arr[0]
    arr.forEach(item => {
        if (item > maior) {
            maior = item
        }
    })
    return maior
}

function segundoMaior(arr) {
    let arrSemMaior = arr.filter(item => item !== maior(arr))
    return maior(arrSemMaior)
}

console.log(segundoMaior([8, 4, 5, 6]))

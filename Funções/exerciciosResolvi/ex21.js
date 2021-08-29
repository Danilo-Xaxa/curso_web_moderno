const antine = (idade) => {
    if (idade <= 10) {
        return 100 + 80
    } else if (idade <= 30) {
        return 100 + 50
    } else if (idade <= 60) {
        return 100 + 95
    } else {
        return 100 + 130
    }
}

console.log(antine(24))

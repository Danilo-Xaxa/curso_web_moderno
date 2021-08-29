function mediaAritmetica(nums) {
    let soma = 0
    let qtd = 0

    for (let i in nums) {
        soma += nums[i]
        qtd++
    }

    return soma / qtd
    return nums.reduce((a, b) => (a + b)) / nums.length // 1 linha só
}

console.log(mediaAritmetica([1, 2, 3, 4, 5]))
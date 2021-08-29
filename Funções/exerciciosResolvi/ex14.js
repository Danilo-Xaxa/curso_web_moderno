function frutaria(fruta) {
    switch (fruta) {
        case 'maçã':
            return 'Não vendemos maçã aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwi'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'ERRO. Digite uma fruta válida'
    }
}
// metodos recursivos (o metodo chama ele mesmo)

function loopRecursivo(list: any[], index: number) {
    if (list.length == index) return // condicao de parada do recursivo
    console.log(list[index]);
    loopRecursivo(list, index + 1)
}

loopRecursivo(['banana', 'maca', 'uva', 'pera'], 0)

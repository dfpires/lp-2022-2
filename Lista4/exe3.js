function principal(){
    let produtos = []
    let estoque = []
    // entrada de dados
    for(let i=0;i<10;i++){
        produtos.push(Number(prompt(`Informe código do produto`)))
        estoque.push(Number(prompt(`Informe qtde em estoque de ${produtos[i]}`)))
    }
    let cliente = Number(prompt(`Informe cliente`))
    do {
        // o que será comprado?
        let cod = Number(prompt(`Informe produto para compra`))
        let qtde = Number(prompt(`Informe qtde da compra`))
        // verifica se produto existe
        let achou = false
        for(let i=0;i<produtos.length;i++){
            if (produtos[i] == cod){
                // achamos o produto
                achou = true
                // verificamos estoque
                if (estoque[i] >= qtde){
                    // tem estoque suficiente
                    estoque[i] = estoque[i] - qtde // atualiza estoque
                }
                else {
                    console.log(`Estoque insuficiente`)
                }
            }
        }
        if (!achou){
            console.log(`Produto não encontrado`)
        }
        cliente = Number(prompt(`Informe novo cliente. Digite 0 para encerrar`))
    }
    while (cliente != 0)
    console.log(produtos)
    console.log(estoque)
}
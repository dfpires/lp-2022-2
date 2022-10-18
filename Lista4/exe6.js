function principal(){
    // declara os vetores
    let nomes = []
    let vendas = []
    let comissoes = []
    // entrada de dados
    for(let i=0;i<10;i++){
        nomes.push(prompt(`Informe o nome do vendedor ${i+1}`))
        vendas.push(Number(prompt(`Informe o total de vendas do vendedor ${nomes[i]}`)))
        comissoes.push(Number(prompt(`Informe a comissão do vendedor ${nomes[i]}`)))
    }
    // calcular os valores a receber
    // calcula o total de vendas
    let receber = []
    let total = 0
    for(let i=0;i<10;i++){
        receber.push((vendas[i]*comissoes[i]) / 100)
        total += vendas[i]
    }
    // calcular menor e maior valor a receber, e quem receberá
    let maiorValor = receber[0]
    let nomeMaiorValor = nomes[0]
    let menorValor = receber[0]
    let nomeMenorValor = nomes[0]

    for(let i=1;i<10;i++){
        if (receber[i] > maiorValor){
            maiorValor = receber[i]
            nomeMaiorValor = nomes[i]
        }
        if (receber[i] < menorValor){
            menorValor = receber[i]
            nomeMenorValor = nomes[i]
        }
    }
    // apresentação dos resultados
    for(let i=0;i<10;i++){
        console.log(`O vendedor ${nomes[i]} receberá ${receber[i]}`)
    }
    console.log(`Total de vendas ${total}`)
    console.log(`Maior valor a receber ${maiorValor} recebido por ${nomeMaiorValor}`)
    console.log(`Menor valor a receber ${menorValor} recebido por ${nomeMenorValor}`)
}
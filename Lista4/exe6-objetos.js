function principal(){
    // declara os vetores
    let vetor = []
    // entrada de dados
    for(let i=0;i<10;i++){
        // cria o objeto
        let objVendedor = {
            nome: prompt(`Informe o nome do vendedor ${i+1}`),
            vendas: Number(prompt(`Informe o total de vendas do vendedor `)),
            comissao: Number(prompt(`Informe a comissão do vendedor`)),
            receber: 0
        }
        // adiciona objeto no vetor
        vetor.push(objVendedor)
    }
    // calcular os valores a receber
    // calcula o total de vendas
    let total = 0
    for(let i=0;i<10;i++){
        vetor[i].receber = (vetor[i].vendas*vetor[i].comissao) / 100
        total += vetor[i].vendas
    }
    // calcular menor e maior valor a receber, e quem receberá
    let maiorValor = vetor[0].receber
    let nomeMaiorValor = vetor[0].nome
    let menorValor = vetor[0].receber
    let nomeMenorValor = vetor[0].nome

    for(let i=1;i<10;i++){
        if (vetor[i].receber > maiorValor){
            maiorValor = vetor[i].receber
            nomeMaiorValor = vetor[i].nome
        }
        if (vetor[i].receber < menorValor){
            menorValor = vetor[i].receber
            nomeMenorValor = vetor[i].nome
        }
    }
    // apresentação dos resultados
    for(let i=0;i<10;i++){
        console.log(`O vendedor ${vetor[i].nome} receberá ${vetor[i].receber}`)
    }
    console.log(`Total de vendas ${total}`)
    console.log(`Maior valor a receber ${maiorValor} recebido por ${nomeMaiorValor}`)
    console.log(`Menor valor a receber ${menorValor} recebido por ${nomeMenorValor}`)
}
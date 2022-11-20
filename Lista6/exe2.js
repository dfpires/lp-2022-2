function principal(){
    let matriz = []
    leitura(matriz)
    console.log(`Qtde entre 12 e 20 ${contaIntervalo(matriz)}`)
    console.log(`Média dos elementos pares ${mediaPares(matriz)}`)
}
function leitura(matriz){
    for(let i=0;i<2;i++){
        matriz[i] = []
        for(let j=0;j<4;j++){
            matriz[i][j] = parseInt(Math.random() * 30)
        }
    }
}
function contaIntervalo(matriz){
    let conta = 0
    let vetor = []
    for(let i=0;i<2;i++){
        for(let j=0;j<4;j++){
            if (matriz[i][j] >= 12 && matriz[i][j] <= 20){
                conta++
                vetor.push(matriz[i][j])    
            }
        }
    }
    console.log(vetor)
    return conta
}
function mediaPares(matriz){
    let soma = 0
    let conta = 0
    for(let i=0;i<2;i++){
        for(let j=0;j<4;j++){
            if (matriz[i][j] % 2 == 0){
                soma += matriz[i][j]
                conta++
            }
        }
    } 
    return (soma/conta)
}
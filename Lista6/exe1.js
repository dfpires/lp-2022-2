function principal(){
    let matriz = []
    leitura(matriz)
    console.log(matriz)
    console.log(`Qtde de elementos entre 15 e 20 ${contaIntervalo(matriz)}`)
}
function leitura(matriz){
    for(let i=0;i<3;i++){
        matriz[i] = [] // cria um vetor na posição i de matriz
        for(let j=0;j<5;j++){
            matriz[i][j] = parseInt(Math.random() * 30)
        }
    }
}
function contaIntervalo(matriz){
    let conta = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
            if (matriz[i][j] >= 15 && matriz[i][j] <= 20) {
                conta++
            }
        }
    }
    return conta
}
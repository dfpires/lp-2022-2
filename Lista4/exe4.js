function principal(){
    // entrada de dados
    let vetor = []
    for(let i=0;i<10;i++){
        vetor.push(Number(prompt(`Informe o número ${i+1}`)))
    }
    // encontrar as posições com número 30
    let posicao = []
    for(let i=0;i<10;i++){
        if (vetor[i] == 30){ // verifica se na posição i do vetor tem o 30
            posicao.push(i) // insere em posicao a posição i
        }
    }
    if (posicao.length == 0){
        console.log(`Nenhum número 30 foi encontrado`)
    }
    else {
        console.log(`Posições ${posicao}`)
    }
}
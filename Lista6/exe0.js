
function principal(){
    let matriz = [] // declaração de matriz
    leitura(matriz)
    console.log(matriz)
    calculaMedia(matriz)
}

function leitura(matriz){

    for(let i=0;i<5;i++){
        matriz[i] = [] // criando um vetor em cada posição da matriz
        alert(`Informe as notas do aluno ${i + 1}`)
        for(let j=0;j<3;j++){
            matriz[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }
    
}

function calculaMedia(matriz){
    let soma 
    for(let i=0; i < matriz.length;i++){
        soma  = 0 // zera a soma pois é um outro aluno
        for(let j=0;j<matriz[i].length;j++){
            soma += matriz[i][j]
        }
        // encerraram as notas
        console.log(`A média do aluno ${i+1} é ${soma / matriz[i].length}`)
    }
}
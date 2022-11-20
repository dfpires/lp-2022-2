function principal(){
    let matriz = []
    let vetor = []
    leitura(matriz, vetor)
    media(matriz, vetor)
    mediaClasse(matriz)
}
function leitura(matriz, vetor){
    for(let i=0;i<5;i++){ // 5 alunos
        vetor.push(prompt(`Informe nome do aluno`))
        matriz[i] = []
        for(let j=0;j<2;j++){ // 2 notas
            // usuário não entra com os dados
            // estamos gerando valores randômicos / aleatórios
            // gera números entre 0 e 10
            matriz[i][j] = parseInt(Math.random()*10)
        }
    }
}
function media(matriz, vetor){
    let soma
    for(let i=0;i<5;i++){ // para cada aluno
        soma = 0
        for(let j=0;j<2;j++){ // para cada nota
            soma += matriz[i][j]           
        }
        console.log(`O aluno ${vetor[i]} teve média ${soma/2}`)
        if (soma/2 >= 6){
            console.log(` e foi Aprovado`)
        }              
        else if (soma/2 >= 3){
            console.log(` e ficou de Exame`)
        }
        else {
            console.log(` e foi Reprovado`)
        }
    }
}
function mediaClasse(matriz){
    let soma = 0
    for(let i=0;i<5;i++){ // 5 alunos
        for(let j=0;j<2;j++){ // 2 notas
            soma += matriz[i][j]
        }
    }
    return soma / 10
}
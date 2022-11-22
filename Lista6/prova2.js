function principal(){
    let vet = []
    let mat = []
    cadastrar(vet, mat)
    mediaNotas(vet, mat)
    menorNota(vet, mat)
}
function cadastrar(vet, mat){
    for(let i=0;i<4;i++){
        vet.push(prompt(`Informe o nome do carro`))
        mat = []
        for(let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe nota`))
        }
    }
}
function mediaNotas(vet, mat){
    let soma
    for(let i=0;i<4;i++){
        soma =0
        for(let j=0;j<5;j++){
            soma += mat[i][j]
        }
        console.log(`A médias de notas do carro ${vet[i]} é ${soma/5}`)
    }
}
function menorNota(vet, mat){
    let menorNota
    let nomeMenorNota
    for(let j=0;j<5;j++){
        menorNota = mat[0][j]
        for(let i=0;i<4;i++){
            if (mat[i][j] < menorNota){
                menorNota = mat[i][j] // guarda a nota
                nomeMenorNota = vet[i] // guarda nome
            }
        }
        console.log(`Na avaliação ${j} a menor nota é do ${nomeMenorNota}`)
    }
}
function menorAvaliacao(mat){
    let menorAval = 1000 // guarda a menor média de avaliações
    let soma
    let aval = 0
    for(let j=0;j<5;j++){ // para cada avaliação
        soma = 0 // vamos somar todas as avaliação
        for(let i=0;i<4;i++){
            soma += mat[i][j]
        }
        if (soma/4 < menorAval){ // verifica se a média é a menor
            menorAval = soma/4 // atualizar menor avaliação
            aval = j // guarda a avaliação com menor média
        }
    }
    console.log(`A avaliação ${aval} teve menor média`)
}
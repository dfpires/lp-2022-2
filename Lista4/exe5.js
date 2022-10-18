function principal(){
    let logica = []
    let linguagem = []
    for(let i=0;i<10;i++){
        logica.push(Number(prompt(`Informe aluno que faz Lógica ${i+1}`)))
    }
    for(let i=0;i<8;i++){
        linguagem.push(Number(prompt(`Informe aluno que faz Linguagem ${i+1}`)))
    }

    let juntas = []
    for(let i=0;i<10;i++){ // para cada aluno que faz lógica
        for(let j=0;j<8;j++){ // para cada aluno que faz linguagem
            if (logica[i] == linguagem[j]){
                juntas.push(logica[i]) // adiciona no vetor
            }
        }
    }
    if (juntas.length == 0){
        console.log(`Não existem alunos que fazem as duas disciplinas`)       
    }
    else {
        console.log(`Alunos que fazem as duas disciplinas ${juntas}`)
    }
}
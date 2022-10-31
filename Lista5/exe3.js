function principal(){
    let vetor = []
    for(let i=0;i<5;i++){ // entrada de dados
        // cria objeto
        let objHabitante = {
            sexo: prompt(`Digite F para feminino e M para masculino`).toUpperCase(),
            altura: Number(prompt(`Digite sua altura`)),
            idade: Number(prompt(`Digite sua idade`)),
            olhos: prompt(`Digite cor dos olhos: A - Azul, V - Verde, C - Castanho`).toUpperCase()
        }
        // adiciona no vetor
        vetor.push(objHabitante)
    }
    // processamento
    // calcular a média de idade das pessoas ...
    let somaIdade = 0
    let contaIdade = 0
    for(let i=0;i<5;i++){
        if ((vetor[i].olhos == 'C') && (vetor[i].altura > 1.60)){
            somaIdade += vetor[i].idade
            contaIdade++
        }
    }
    console.log(`A média é ${somaIdade/contaIdade}`)
    // a maior idade entre os habitantes
    let maiorIdade = vetor[0].idade
    for(let i=1;i<5;i++){
        if (vetor[i].idade > maiorIdade){
            maiorIdade = vetor[i].idade
        }
    }
    console.log(`Maior idade ${maiorIdade}`)
    // a quantidade de habitantes do sexo feminino ...
    let qtdeFeminino = 0
    for(let i=0;i<5;i++){
        if (vetor[i].sexo == 'F') {
            if (((vetor[i].idade >= 20) && (vetor[i].idade <= 45)) || 
                (vetor[i].olhos == 'V') && (vetor[i].altura < 1.70)){
                    qtdeFeminino++
            }
        }
    }
    console.log(`Qtde de habitantes femininos ... ${qtdeFeminino}`)
    // o percentual de homens
    let qtdeHomens = 0
    for(let i=0;i<5;i++){
        if (vetor[i].sexo == 'M'){
            qtdeHomens++
        }
    }
    console.log(` % de homens ${(qtdeHomens/5)*100}`)
}
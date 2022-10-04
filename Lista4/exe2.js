function principal() {
    let vetor = [] // declara o vetor idades 
    // entrada de dados
    for (let i = 0; i < 7; i++) {
        vetor.push(Number(prompt(`Informe número ${i+1}`)))
    }
    // processamento
    let multiplos2 = [] //  cria vetor
    let multiplos3 = [] //  cria vetor
    let multiplos23 = [] //  cria vetor
    for (let i = 0; i < 7; i++) {
        if (vetor[i] % 2 == 0) {
            multiplos2.push(vetor[i])
        } 
        if (vetor[i] % 3 == 0) {
            multiplos3.push(vetor[i])
        }
        if (vetor[i] % 2 == 0 && vetor[i] % 3 == 0){
            multiplos23.push(vetor[i])
        }
    }
    // saída
    console.log(`Os números múltiplos de 2 são ${multiplos2}`)
    console.log(`Os números múltiplos de 3 são ${multiplos3}`)
    console.log(`Os números múltiplos de 2 e 3 são ${multiplos23}`)
}
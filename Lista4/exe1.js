function principal() {
    let idades = [] // declara o vetor idades
        // entrada de dados
    for (let i = 0; i < 7; i++) {
        idades.push(Number(prompt(`Informe idade ${i+1}`)))
    }
    // processamento
    let pares = [] //  cria vetor
    let impares = [] // cria vetor
    for (let i = 0; i < 7; i++) {
        if (idades[i] % 2 == 0) {
            pares.push(idades[i])
        } else {
            impares.push(idades[i])
        }
    }
    // saída
    console.log(`Os números pares são ${pares}`)
    console.log(`Qtde números pares ${pares.length}`)
    console.log(`Os números ímpares são ${impares}`)
    console.log(`Qtde números ímpares ${impares.length}`)

}
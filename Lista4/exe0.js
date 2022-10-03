function principal() {
    let idades = [] // declara o vetor idades
        // entrada de dados
    for (let i = 0; i < 7; i++) {
        idades.push(Number(prompt(`Informe idade ${i+1}`)))
    }
    // processamento
    let pares = []
    for (let i = 0; i < 7; i++) {
        if (idades[i] % 2 == 0) {
            pares.push(idades[i])
        }
    }
    // saída
    alert(pares)
}
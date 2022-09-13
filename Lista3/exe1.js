function calcular() {
    for (let j = 1; j <= 5; j++) {
        // entrada de dados
        let A = Number(prompt(`Informe primeiro número`))
        let B = Number(prompt(`Informe segundo número`))
        let C = Number(prompt(`Informe terceiro número`))
        let D = Number(prompt(`Informe quarto número`))
        console.log(`Ordem lida ${A} - ${B} - ${C} - ${D}`)
            // ordenação
        for (let i = 1; i <= 3; i++) {
            if (A > B) {
                let aux = A
                A = B
                B = aux
            }
            if (B > C) {
                let aux = B
                B = C
                C = aux
            }
            if (C > D) {
                let aux = C
                C = D
                D = aux
            }
        }
        // mostra o resultado
        console.log(`Crescente ${A} - ${B} - ${C} - ${D}`)
        console.log(`Decrescente ${D} - ${C} - ${B} - ${A}`)
    }
}
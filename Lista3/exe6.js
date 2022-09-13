function principal() {
    let codigo, valor
    let totalVista = 0,
        totalPrazo = 0,
        primeiraParcela
    for (let i = 1; i <= 5; i++) {
        codigo =
            prompt(`Informe v para a vista e p para a prazo`).toLowerCase()
        valor = Number(prompt(`Informe valor da compra`))
        if (codigo == 'v') {
            totalVista += valor
        } else if (codigo == 'p') {
            totalPrazo += valor
        }
    }
    console.log(`Total a vista ${totalVista}`)
    console.log(`Total a prazo ${totalPrazo}`)
    console.log(`Total ${totalVista + totalPrazo}`)
    console.log(`Primeira parcela ${totalPrazo / 3}`)
}
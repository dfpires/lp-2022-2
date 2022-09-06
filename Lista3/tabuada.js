function calcula(){
    // tabuada do 5
    // com estrutura de repetição - while
    let numero = 1
    while (numero <= 10){
        let contador = 0
        while (contador <=10){
            console.log(`${numero} x ${contador} = ${numero*contador}`)
            contador++
        }
        numero++
    }
}

function calculaMedia(){
    let altura
    let contador = 1
    let acumula = 0 // neutro para soma
    while (contador <= 10) {
        altura = Number(prompt(`Informe a altura`))
        acumula = acumula + altura // somando as alturas
        contador++
    }
    console.log(`A média das alturas é ${(acumula/(contador-1)).toFixed(2)}`)
}
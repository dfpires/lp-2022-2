function calcular() {
    // recupera o valor da altura digitado pelo usuário na caixa de texto
    let altura = document.getElementById("altura").value
    // recupera o valor do peso digitado pelo usuário na caixa de texto
    let peso = document.getElementById("peso").value
    // calcula o imc
    let imc = peso / (altura * altura)
    // mostra o resultado
    //alert(`O valor do imc é de ${imc.toFixed(2)}`) // template string
    document.getElementById("imc").innerHTML = 
                `O valor do imc é de ${imc.toFixed(2)}`
}
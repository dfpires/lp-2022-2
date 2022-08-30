function calcular()
    {
        //recupera o valor digitado pelo usuario na caixa de texto
        let altura = document.getElementById("altura").value
        //recupera o valor digitado pelo usuario na caixa de texto
        let peso = document.getElementById("peso").value
        //calculo imc
        let imc = peso / Math.pow(altura, 2)
        //mostra o resultado
        //alert(`O valor do imc é de ${imc.toFixed(2)}`)  //a crase ao contrario é uma template string para juntar valores
        document.getElementById("imc").innerHTML = `O valor do imc é de ${imc.toFixed(2)}`
        // classifica o imc
        let classificacao
        if (imc < 18.5){
            classificacao = "Magreza"
        }
        else if (imc <= 24.9 ) {
            classificacao = "Normal"
        }   
        else if (imc <= 29.9) {
            classificacao = "Sobrepeso"
        }
        else if (imc <= 34.9){
            classificacao = "Obesidade grau I"
        }
        else if (imc <= 39.9){
            classificacao = "Obesidade grau II"
        }
        else {
            classificacao = "Obesidade grau III"
        }
        document.getElementById("classificacao").innerHTML = 
        `A classificação do imc é ${classificacao}`
    }
    
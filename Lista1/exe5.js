function calcular()
    {
        //recupera o valor digitado pelo usuario na caixa de texto
        // converte texto em número
        let preco = Number(document.getElementById("preco").value)
        //recupera o valor digitado pelo usuario na caixa de texto
     
        //calculo novo preço
        let novo  = preco - ((preco*10)/100)
        //mostra o resultado
        //alert(`O valor do imc é de ${imc.toFixed(2)}`)  //a crase ao contrario é uma template string para juntar valores
        document.getElementById("novo").innerHTML = ` O novo preço é de ${novo.toFixed(2)}`
    }
    
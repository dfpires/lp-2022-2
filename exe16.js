function calcular()
    {
        //recupera o valor digitado pelo usuario na caixa de texto
        // converte texto em número
        let c1 = Number(document.getElementById("c1").value)
        //recupera o valor digitado pelo usuario na caixa de texto
        let c2 = Number(document.getElementById("c2").value)
        //calculo hipotenusa
        // sqrt = raiz quadrada
        let hipotenusa = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2))
        
        //mostra o resultado
        //alert(`O valor do imc é de ${imc.toFixed(2)}`)  
        //a crase ao contrario é uma template string para juntar valores
        document.getElementById("hipotenusa").innerHTML = 
        ` A hipotenusa é de ${hipotenusa.toFixed(2)}`
    }
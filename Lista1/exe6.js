function calcular()
    {
        //recupera o valor digitado pelo usuario na caixa de texto
        // converte texto em número
        let fixo = Number(document.getElementById("fixo").value)
        //recupera o valor digitado pelo usuario na caixa de texto
        let vendas = Number(document.getElementById("vendas").value)
        //calculo novo preço
        let comissao  = (vendas*4)/100
        let final = fixo + comissao
        //mostra o resultado
        //alert(`O valor do imc é de ${imc.toFixed(2)}`)  //a crase ao contrario é uma template string para juntar valores
        document.getElementById("comissao").innerHTML = ` O valor da comissão é de ${comissao.toFixed(2)}`
        document.getElementById("final").innerHTML = ` O salário final é de ${final.toFixed(2)}`      
    }
function calcular()
    {
        //recupera o valor digitado pelo usuario na caixa de texto
        // converte texto em número
        let raio = Number(document.getElementById("raio").value)
    
        //calculo novo preço
        let comprimento  = 2 * Math.PI * raio
        let area = Math.PI * Math.pow(raio, 2)
        let volume = 3/4 * Math.PI * Math.pow(raio, 3)
        //mostra o resultado
        //alert(`O valor do imc é de ${imc.toFixed(2)}`)  //a crase ao contrario é uma template string para juntar valores
        document.getElementById("comprimento").innerHTML = ` O comprimento é de ${comprimento.toFixed(2)}`
        document.getElementById("area").innerHTML = ` A área é de ${area.toFixed(2)}`
        document.getElementById("area").innerHTML = ` O vulume é de ${volume.toFixed(2)}`      
    }
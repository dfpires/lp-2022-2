function calcular(){

    let tipo = Number(document.getElementById("tipo").value)
    let valor = Number(document.getElementById("valor").value)

    let descricao
    let corrigido
    let erro = false

    switch(tipo){
        case 1: descricao = "Poupança"
                corrigido = valor + (valor*3) / 100
                break
        case 2: descricao = "Renda Fixa"
                corrigido = valor + (valor*4) / 100
                break
        default: erro = true
    }
    if (erro){
        document.getElementById("resultado").innerHTML = "Erro na escolha"
    }
    else {
        document.getElementById("resultado").innerHTML = `A ${descricao} teve valor corrigido de ${corrigido}`
    }
}
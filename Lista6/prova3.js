function principal(){
    let pessoas = []
    let imoveis = []
    cadastraPessoas(pessoas)
    cadastraImoveis(imoveis, pessoas)
}
function cadastraPessoas(pessoas){
    for(let i=0;i<10;i++){
        let obj = {
            rg: prompt(`Informe rg`),
            cpf: prompt(`Informe cpf`),
            nome: prompt(`Informe nome`)
        }
        pessoas.push(obj)
    }
}
function cadastraImoveis(imoveis, pessoas){
    for(let i=0;i<10;i++){
        let obj = {
            codigo: Number(prompt(`Informe rg`)),
            endereco: prompt(`Informe cpf`),
            tamanho: Number(prompt(`Informe tamanho`)),
            tipo: prompt(`Informe tipo`),
            valor: Number(prompt(`Informe valor`)),
            cpfDono: prompt(`Informe CPF do dono`)
        }
        let achei = false
        for(let a=0;a<10;a++){
            if (pessoas[a].cpf == obj.cpfDono){
                achei = true
                break // pára de procurar
            }
        }
        if (achei){
            imoveis.push(obj)
        }
        else {
            console.log(`Pessoa não encontrada, tente novamente`)
            i--
        }
    }
}
function valorTotal(imoveis, pessoas){
    let cpfUsuario = prompt(`Informe CPF`)
    let soma = 0
    let nome
    for(let i=0;i<10;i++){
        if (imoveis[i].cpf == cpfUsuario){
            soma += imoveis[i].valor
            
        }
    }
    for(let i=0;i<10;i++){
        if (pessoas[i].cpf == cpfUsuario){
            nome = pessoas[i].nome
        }
    }
    console.log(`Nome ${nome} tem ${soma}`)
}

function maisCaro(imoveis){
    let maiorValor = imoveis[0].valor
    let cpf
    for(let i=0;i<10;i++){
        if (imoveis[i].valor > maiorValor){
            maiorValor = imoveis[i].valor
            cpf = imoveis[i].cpf
        }
    }
    console.log(`CPF ${cpf} com maior valor ${maiorValor}`)
}

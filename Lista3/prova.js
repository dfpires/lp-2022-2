function prova1() {
    let opcao
    let qtdeTeams = 0
    let qtdePapel = 0
    let qtdeWhatsApp = 0
    let qtdeEmail = 0
    let qtdeTantoFaz = 0
    do {
        opcao = Number(prompt(`1.Teams \n 2.Papel \n 3.WhatsApp \n 4.Email \n 5. Tanto faz \n 0. Sair`))
        switch (opcao) {
            case 0:
                alert(`Programa será encerrado`)
                break
            case 1:
                qtdeTeams++
                break
            case 2:
                qtdePapel++
                break
            case 3:
                qtdeWhatsApp++
                break
            case 4:
                qtdeEmail++
                break
            case 5:
                qtdeTantoFaz++
                break
            default:
                alert(`Opção inválida`)
        }
    }
    while (opcao != 0)
    alert(`Teams: ${qtdeTeams} Papel: ${qtdePapel} WhatsApp: ${qtdeWhatsApp} Email: ${qtdeEmail} Tanto faz: ${qtdeTantoFaz}`)
        // calcula total de votos
    let total = qtdeEmail + qtdePapel + qtdeTantoFaz + qtdeTeams + qtdeWhatsApp
    alert(` % de Tanto Faz ${(qtdeTantoFaz/total)*100}`)

    // ordenação
    let primeiro = qtdeTeams
    let quemPrimeiro = "Teams"
    let segundo = qtdePapel
    let quemSegundo = "Papel"
    let terceiro = qtdeWhatsApp
    let quemTerceiro = "WhatsApp"
    let quarto = qtdeEmail
    let quemQuarto = "Email"
    let quinto = qtdeTantoFaz
    let quemQuinto = "Tanto Faz"
    for (let cont = 1; cont < 5; cont++) {
        let aux
        if (primeiro > segundo) {
            aux = primeiro
            primeiro = segundo
            segundo = aux
            aux = quemPrimeiro
            quemPrimeiro = quemSegundo
            quemSegundo = aux
        }
        if (segundo > terceiro) {
            // fazer
        }
        if (terceiro > quarto) {
            // fazer
        }
        if (quarto > quinto) {
            // fazer
        }
    }
    alert(`Ordem crescente: ${quemPrimeiro}: ${primeiro} ${quemSegundo}: ${segundo} ${quemTerceiro}: ${terceiro} ${quemQuarto}: ${quarto} ${quemQuinto}: ${quinto}`)
}

function prova2() {
    let metragem = Number(document.getElementById("metragem").value)
    let garagem = Number(document.getElementById("garagem").value)
    let andar = Number(document.getElementById("andar").value)
    let posicao = document.getElementById("posicao").value.toUpperCase()
    let total = 0
    let erro = false
    if (metragem >= 0 && metragem < 80) {
        switch (garagem) {
            case 1:
                total = 300000
                break
            case 2:
                total = 320000
                break
            case 3:
                total = 340000
                break
            default:
                erro = true
        }
    } else if (metragem >= 80 && metragem <= 120) {
        switch (garagem) {
            case 1:
                total = 400000
                break
            case 2:
                total = 420000
                break
            case 3:
                total = 440000
                break
            default:
                erro = true
        }
    } else if (metragem > 120) {
        switch (garagem) {
            case 1:
                total = 500000
                break
            case 2:
                total = 520000
                break
            case 3:
                total = 540000
                break
            default:
                erro = true
        }
    } else {
        erro = true
    }

    if (erro) {
        console.log(`Problema na entrade de dados`)
    } else {
        let acrescimoAndar = 0
        switch (andar) {
            case 1:
                acrescimoAndar = 10000
                break
            case 2:
                acrescimoAndar = 20000
                break
            case 3:
                acrescimoAndar = 30000
                break
            default:
                console.log(`Não será computador andar`)
        }
        let acrescimoPosicao = 0
        if (posicao == 'M') {
            acrescimoPosicao = (total * 5) / 100
        } else if (posicao == 'T') {
            acrescimoPosicao = (total * 8) / 100
        }
    }
    console.log(`Valor total: ${total + acrescimoAndar + acrescimoPosicao}`)
}
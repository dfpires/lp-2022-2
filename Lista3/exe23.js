function principal() {
    let opcao
    let salario
    do {
        opcao = Number(prompt(`Informe \n 1. Novo salário \n 2.Férias \n 3. Décimo Terceiro \n 4. Sair`))
        switch (opcao) {
            case 1:
                let novo
                salario = Number(prompt(`Informe salário`))
                if (salario >= 0 && salario < 2100) {
                    novo = salario + salario * 15 / 100
                } else if (salario >= 2100 && salario <= 6000) {
                    novo = salario + salario * 10 / 100
                } else if (salario > 6000) {
                    novo = salario + salario * 5 / 100
                } else {
                    alert(`Salário informado não pode ser negativo`)
                    break
                }
                alert(`Novo salário ${novo}`)
                break
            case 2:
                let ferias
                salario = Number(prompt(`Informe salário`))
                if (salario >= 0) {
                    ferias = salario + (salario / 3)
                    alert(`Salário das férias ${ferias}`)
                } else {
                    alert(`Salário informado não pode ser negativo`)
                }
                break
            case 3:
                salario = Number(prompt(`Informe salário`))
                if (salario >= 0) {
                    let meses = Number(prompt(`Meses trabalhos no ano`))
                    if (meses >= 0 && meses <= 12) {
                        let decimoTerceiro = (salario * (meses / 12))
                        alert(`Valor do décimo terceiro ${decimoTerceiro}`)
                    } else {
                        alert(`Meses nãom pode ser negativo nem > 12`)
                    }
                } else {
                    alert(`Salário negativo`)
                }
                break
            case 4:
                alert(`Obrigado por utilizar nosso sistema`)
                break
            default:
                alert(`Opção inválida, tente novamente`)
        }
    }
    while (opcao != 4)
}
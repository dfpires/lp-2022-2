function principal(){
    let vetor = []
    entrada(vetor)
    calculaMediaSalarial(vetor)
    let mediaFilhos = calculaMediaFilhos(vetor)
    console.log(`Média de filhos é ${mediaFilhos}`)
    calculaMaiorSalario(vetor)
    calcularPercentualMulheres(vetor)
}
// fatec representa vetor
// quando altera fatec está alterando vetor
function entrada(fatec){ 
    for(let i=0;i<5;i++){
        let objHab = {
            salario: Number(prompt(`Informe salário`)),
            idade: Number(prompt(`Informe idade`)),
            filhos: Number(prompt(`Informe filhos`)),
            sexo: prompt(`Informe sexo: M ou F`).toUpperCase()
        }
        fatec.push(objHab)
    }
}
function calculaMediaSalarial(franca){
    let soma = 0
    for(let i=0;i<franca.length;i++){
        soma += franca[i].salario
    }
    console.log(`A média é ${soma/franca.length}`)
}

function calculaMediaFilhos(vetor){
    let soma = 0
    for(let i=0;i<vetor.length;i++){
        soma += vetor[i].filhos
    }
    return soma / vetor.length // retornamos o resultado
}

function calculaMaiorSalario(vetor){
    let maior = vetor[0].salario
    for(let i=1;i<vetor.length;i++){
        if (vetor[i].salario > maior){
            maior = vetor[i].salario
        }
    }
    console.log(`Maior salário ${maior}`)
}

function calcularPercentualMulheres(vetor){
    let conta = 0
    for(let i=0;i<vetor.length;i++){
        if (vetor[i].sexo == 'F' && vetor[i].salario > 1000){
            conta++
        } 
    }
    console.log(`Percentual de mulheres com salario > 1000 é 
                ${(conta/vetor.length)*100}`)
}
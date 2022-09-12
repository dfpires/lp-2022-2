function calcularExe3() {
    let idade
    let f1 = 0;
    let f2 = 0;
    let f3 = 0,
        f4 = 0,
        f5 = 0

    for (let i = 0; i < 8; i++) {
        idade = Number(prompt(`Informe a idade ${i}`))
        if (idade >= 0 && idade <= 15) {
            f1++
        } else if (idade > 15 && idade <= 30) {
            f2++
        } else if (idade > 30 && idade <= 45) {
            f3++
        } else if (idade > 45 && idade <= 60) {
            f4++
        } else if (idade > 60) {
            f5++
        } else {
            alert('Valor negativo, tente novamente')
            console.log('Valor negativo, tente novamente')
            i-- // desconsidera o valor negativo
        }
    }
    // verificou toda a entrada
    document.getElementById("exe3").innerHTML =
        `Faixa 1: ${f1} Faixa 2: ${f2} Faixa 3: ${f3} 
         Faixa 4 ${f4} Faixa 5 ${f5} % Faixa 1: ${f1/8*100}
         % Faixa 5: ${f5/8*100}`
}
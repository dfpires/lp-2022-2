function  calcular(){

    let angulo = Number(document.getElementById("angulo").value)
    let catetoAdjacente = Number(document.getElementById("catetoAdjacente").value)

    // cosseno(angulo) = catetoAdjacente / hipotenusa
    // hipotenusa = catetoAdjacente / cosseno(angulo)
    let hipotenusa = catetoAdjacente / Math.cos(angulo)
    document.getElementById("resultado").innerHTML =  hipotenusa
}
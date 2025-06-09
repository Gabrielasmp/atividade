function somarValores(){
  let valor1 = Number(document.querySelector('#valor1').value)
  let valor2 = Number(document.querySelector('#valor2').value)
  let soma = valor1+valor2
    document.querySelector('#resultado').innerHTML = soma
}
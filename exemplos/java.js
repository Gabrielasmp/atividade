//let nome = "Gabriela"
//alert("oi" + nome)

//let nome = prompt("Digite seu nome: ")
//alert("Olá "+nome+" tudo bem?")


let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
let nota3 = Number(prompt("Digite a terceira nota:"))
 
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 6){
  alert("Sua nota foi " +media+ " Aprovado")
}
 else {
  alert("Sua nota foi " +media+ " Reprovado")
 }
//document.getElementById('exemplo')/*pegando o ID*/

//document.getElementsByClassName('lista')/*pagando a classe*/

//document.getElementsByTagName('button')/*pegando a tag*/

/*querySelector pega tudo*/
document.querySelector('#exemplo').innerText = "Hoje é terça-feira"
document.querySelector('button').innerHTML = "<h1>Amanhã tem jogo</h1>"
document.querySelector('.lista').textContent = "Hoje é quarta"

document.querySelector('input').value /*pegando valor de um input*/
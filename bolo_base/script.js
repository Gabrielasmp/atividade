/*Criar uma função em que eu mando elemento el e basicamente ele faz o comando querySelector pra mim */
const c = (el) => document.querySelector(el)

cakeJson.map((item,index) =>{
    /*aqui vamos dar um clone node no cake item que está dentro do HTML e para eu clonar o cakeitem eu vou usar o clonenode*/
    let cakeitem = document.querySelector('.models .cake-item').cloneNode(true)

    /*preencher as informações em cake item e adicionar na tela (a listagem de bolos) está em class="cakearea"*/
    document.querySelector('.cake-area').append(cakeitem)
})

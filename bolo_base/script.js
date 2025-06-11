// Função para selecionar um único elemento
const c = (el) => document.querySelector(el)

// Função para selecionar múltiplos elementos
const cs = (el) => document.querySelectorAll(el)

// Loop para percorrer os itens do JSON
cakeJson.map((item, index) => {
    // Clonando o modelo do item do bolo
    let cakeitem = document.querySelector('.models .cake-item').cloneNode(true)

    // Setando o data-key para identificar o item
    cakeitem.setAttribute('data-key', index)

    // Inserindo dados no item clonado
    cakeitem.querySelector('.cake-item--name').innerHTML = item.name
    cakeitem.querySelector('.cake-item--desc').innerHTML = item.description
    cakeitem.querySelector('.cake-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    cakeitem.querySelector('.cake-item--img img').src = item.img

    // Adicionando evento de clique no link
    cakeitem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()

        // Pegando o índice do item clicado
        let key = e.target.closest('.cake-item').getAttribute('data-key');

        // Preenchendo o modal com as informações do item clicado
        c('.cakeInfo h1').innerHTML = cakeJson[key].name
        c('.cakeInfo--desc').innerHTML = cakeJson[key].description
        c('.cakeInfo--actualPrice').innerHTML = `R$ ${cakeJson[key].price.toFixed(2)}`
        c('.cakeBig img').src = cakeJson[key].img

        // Limpando seleção anterior de tamanho
        c('.cakeInfo--size.selected').classList.remove('selected')

        // Preenchendo os tamanhos e adicionando seleção ao primeiro 
        cs('.cakeInfo--size').forEach((size, sizeIndex) => {
            size.querySelector('span').innerHTML = cakeJson[key].sizes[sizeIndex]
            // Seleciona o primeiro tamanho como padrão
            if (sizeIndex === 0) {
                size.classList.add('selected')
            }

            function closeModal(){
                c('.cakeWindowArea').style.opacity = 0 //fica inv
                setTimeout(()=> {
                c('.cakeWindowArea').style.display = none //fecha o modal
                },500)
                cs('.cakeInfo--cancelButton, .cakeInfo--cancelMobileButton').forEach((item)=>{
                    item.addEventListener('click',closeModal)})
            }

        // Função para fechar o modal
            function closeModal() {
            c('.cakeWindowArea').style.opacity = 0; // Deixa invisível
            setTimeout(() => {
            c('.cakeWindowArea').style.display = 'none' // Esconde o modal
             }, 500)
            }
        // Adiciona os eventos de clique uma única vez
            cs('.cakeInfo--cancelButton, .cakeInfo--cancelMobileButton').forEach((item) => {
             item.addEventListener('click', closeModal)
            })

        // Evento para selecionar tamanho
            size.addEventListener('click', () => {
                c('.cakeInfo--size.selected').classList.remove('selected')
                size.classList.add('selected')
            })
        })

        // Exibindo o modal com animação
        c('.cakeWindowArea').style.display = 'flex'
        setTimeout(() => {
            c('.cakeWindowArea').style.opacity = 1
        }, 200)
    })

    // Adicionando o item à área de listagem
    document.querySelector('.cake-area').append(cakeitem)
})





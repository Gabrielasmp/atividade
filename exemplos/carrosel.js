let time = 2000 //tempo de rotacão
let currentImageIndex = 0 //primeira imagem é zero
let images = document.getElementById('#slider img') // 
let max = images.length //tamanho da imagens

function nextImage(){ //vai puxar a proxima imagem
    images[currentImageIndex].classlist.remove("selected")
    //remove a classe do elemento atual, para as outras imagens irem adicionando
    currentImageIndex++ //incrementar as imagens
    if(currentImageIndex >= max){
        currentImageIndex = 0
        images[currentImageIndex].classlist.add("selected")
    }





}
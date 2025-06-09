function darkMode(){
    document.body.classList.toggle('dark')
    
}
function darkMode() {
    const body = document.body
    const button = document.querySelector('button')
 
    body.classList.toggle('dark')
 
   
    if (body.classList.contains('dark')) {
        button.textContent = '☀️Modo Claro'
    } else {
        button.textContent = '🌔Modo Escuro'
    }
}
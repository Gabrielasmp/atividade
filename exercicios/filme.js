const trailerBtn = document.getElementById('vela_button')
const modal = document.querySelector('.modal')
const btnFechar = document.querySelector('.btnFechar')
 
trailerBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    modal.style.display = 'flex'
})
 
btnFechar.addEventListener('click', () => {
    modal.style.display = 'none'
})
 
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'
    }
})
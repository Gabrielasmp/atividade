const paragrafo = document.querySelector('h1');
const botaoEsconder = document.querySelectorAll('button')[0];
const botaoMostrar = document.querySelectorAll('button')[1];

// Evento para esconder
botaoEsconder.addEventListener('click', () => {
    paragrafo.style.display = 'none';
});

// Evento para mostrar
botaoMostrar.addEventListener('click', () => {
    paragrafo.style.display = 'block';
})
function mostrarValores() {
    let idade = parseInt(document.querySelector('#t3').value);
    let mensagem = '';

    if (isNaN(idade)) {
        mensagem = 'Por favor, digite uma idade válida.';
    } else if (idade >= 16) {
        mensagem = 'Você pode votar!';
    } else {
        mensagem = 'Você ainda não pode votar.';
    }

    document.querySelector('#resultado').innerHTML = mensagem;
}



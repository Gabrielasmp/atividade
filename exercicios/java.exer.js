function mostrarValores() {
    let t1 = document.querySelector('#t1').value;
    let t2 = document.querySelector('#t2').value
    let t3 = document.querySelector('#t3').value
 
    let resultado = `
    Seu filme favorito é  ${t1}
    Você ama ouvir ${t2}
    Seu jogo favorito é ${t3}
    `
 
    document.querySelector('#resultado').innerHTML = resultado;
  }
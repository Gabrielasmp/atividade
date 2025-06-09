function calcularDesconto() {
    const preco = parseFloat(document.getElementById('preco').value);
    const desconto = parseFloat(document.getElementById('desconto').value);
    
    if (isNaN(preco) || isNaN(desconto)) {
      document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
      return;
    }

    const valorDesconto = (preco * desconto) / 100;
    const precoFinal = preco - valorDesconto;

    document.getElementById('resultado').innerText = 
      `Desconto: R$ ${valorDesconto.toFixed(2)} | Preço com desconto: R$ ${precoFinal.toFixed(2)}`;
  }
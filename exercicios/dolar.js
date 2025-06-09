function converter() {
    const cotacao = 5.69; 
    const valorDolar = parseFloat(document.getElementById("dolar").value);

    if (!isNaN(valorDolar)) {
        const valorReal = valorDolar * cotacao;
        document.getElementById("resultado").innerText = 
            `Valor em reais: R$ ${valorReal.toFixed(2)}`;
    } else {
        document.getElementById("resultado").innerText = 
            "Por favor, insira um valor válido.";
    }
}

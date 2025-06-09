function mudarCor() {
    let valor = document.querySelector("select").value;
    let quadrado = document.getElementById("quadrado");
    
    // Verifica o valor selecionado e altera a cor do quadrado
    if (valor === "#6930c3") {
        quadrado.style.backgroundColor = "#6930c3"; //  Púrpura Amêndoa
    } else if (valor === "#56cfe1") {
        quadrado.style.backgroundColor = "#56cfe1"; // Azul Céu Vivo
    } else if (valor === "#80ffdb") {
        quadrado.style.backgroundColor = "#80ffdb"; // Verde Menta
    } else {
        quadrado.style.backgroundColor = "lightgray"; // Cor padrão
    }
}
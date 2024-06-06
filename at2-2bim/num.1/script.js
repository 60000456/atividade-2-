function calcular() {
    // Obter o valor da cotação do dólar
    const cotacao = parseFloat(document.getElementById('cotacao').value);

    // Calcular os novos valores
    const valor1 = cotacao * 1.01;
    const valor2 = cotacao * 1.02;
    const valor5 = cotacao * 1.05;
    const valor10 = cotacao * 1.10;

    // Exibir os resultados
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Se a cotação subir 1%: R$ ${valor1.toFixed(2)}</p>
        <p>Se a cotação subir 2%: R$ ${valor2.toFixed(2)}</p>
        <p>Se a cotação subir 5%: R$ ${valor5.toFixed(2)}</p>
        <p>Se a cotação subir 10%: R$ ${valor10.toFixed(2)}</p>
    `;
}
function calcularPedido() {
    // Obtendo os valores dos sabores e da quantidade de refrigerantes
    var sabor1 = document.getElementById("sabor1").value;
    var sabor2 = document.getElementById("sabor2").value;
    var sabor3 = document.getElementById("sabor3").value;
    var sabor4 = document.getElementById("sabor4").value;
    var refrigerantes = parseInt(document.getElementById("refrigerantes").value);

    // Calculando o valor total
    var precoPizza = 12.00;
    var precoRefrigerante = 7.00;
    var total = (4 * precoPizza) + (refrigerantes * precoRefrigerante);

    // Exibindo os sabores e o valor total
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>Resumo do Pedido</h2>
                           <p>Sabores Escolhidos:</p>
                           <ul>
                               <li>${sabor1}</li>
                               <li>${sabor2}</li>
                               <li>${sabor3}</li>
                               <li>${sabor4}</li>
                           </ul>
                           <p>Quantidade de Refrigerantes: ${refrigerantes}</p>
                           <p><strong>Valor Total: R$ ${total.toFixed(2)}</strong></p>`;
}
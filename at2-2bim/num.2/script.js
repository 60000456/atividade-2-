function calcular() {
    var numPessoas = document.getElementById('numPessoas').value;
    if (numPessoas < 1) {
        alert('Por favor, insira um número válido de pessoas.');
        return;
    }
    var ovos = numPessoas * 2;
    var queijo = numPessoas * 50;

    var resultado = `Para ${numPessoas} pessoa(s), você precisará de ${ovos} ovos e ${queijo} gramas de queijo.`;
    document.getElementById('result').innerText = resultado;
}
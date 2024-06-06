function compareNumbers() {
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);
    const result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = 'Por favor, insira dois números válidos.';
        return;
    }

    if (num1 > num2) {
        result.textContent = 'O primeiro número é maior que o segundo.';
    } else if (num1 < num2) {
        result.textContent = 'O primeiro número é menor que o segundo.';
    } else {
        result.textContent = 'Os dois números são iguais.';
    }
}
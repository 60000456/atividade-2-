function calculate() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira dois números inteiros.');
        return;
    }

    const sum = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Divisão por zero não é permitida';

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Soma: ${sum}</p>
        <p>Subtração: ${subtraction}</p>
        <p>Multiplicação: ${multiplication}</p>
        <p>Divisão: ${division}</p>
    `;
}
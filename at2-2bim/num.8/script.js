function checkParity() {
    const number = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    if (number === '') {
        resultDiv.textContent = 'Por favor, digite um número.';
        return;
    }
    const num = parseInt(number, 10);
    if (isNaN(num)) {
        resultDiv.textContent = 'Por favor, digite um número válido.';
        return;
    }
    if (num % 2 === 0) {
        resultDiv.textContent = `${num} é Par.`;
    } else {
        resultDiv.textContent = `${num} é Ímpar.`;
    }
}
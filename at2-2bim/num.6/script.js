function verificarNota() {
    var nota = parseFloat(document.getElementById('nota').value);
    var resultado = document.getElementById('resultado');
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
        resultado.textContent = 'Por favor, insira uma nota válida entre 0 e 10.';
        return;
    }

    if (nota >= 6) {
        resultado.textContent = 'Aprovado';
    } else if (nota > 4) {
        resultado.textContent = 'Precisa fazer prova substitutiva';
    } else {
        resultado.textContent = 'Reprovado';
    }
}
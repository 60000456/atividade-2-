function calcularTurmas() {
    // Obtém os valores dos inputs
    const numAlunos = parseInt(document.getElementById('numAlunos').value);
    const numTurmas = parseInt(document.getElementById('numTurmas').value);

    // Valida os valores
    if (isNaN(numAlunos) || isNaN(numTurmas) || numAlunos <= 0 || numTurmas <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Calcula a quantidade de alunos por turma e os alunos sem turma
    const alunosPorTurma = Math.floor(numAlunos / numTurmas);
    const alunosSemTurma = numAlunos % numTurmas;

    // Exibe o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Alunos por turma: ${alunosPorTurma}</p>
        <p>Alunos sem turma: ${alunosSemTurma}</p>
    `;
}
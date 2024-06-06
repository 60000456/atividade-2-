function calcular() {
    const valorVendido = parseFloat(document.getElementById('valorVendido').value);
    const meta = parseFloat(document.getElementById('meta').value);
    const metaMinima = parseFloat(document.getElementById('metaMinima').value);

    if (isNaN(valorVendido) || isNaN(meta) || isNaN(metaMinima)) {
        document.getElementById('result').innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    const percentualMeta = (valorVendido / meta) * 100;
    const percentualMetaMinima = (valorVendido / metaMinima) * 100;

    let resultado = "";
    
    if (valorVendido >= meta) {
        resultado = "Meta atingida!";
    } else if (valorVendido >= metaMinima) {
        resultado = "Meta mínima atingida!";
    } else {
        resultado = "Nenhuma meta atingida.";
    }

    document.getElementById('result').innerHTML = `
        <p>${resultado}</p>
        <p>Percentual de Atingimento da Meta: ${percentualMeta.toFixed(2)}%</p>
        <p>Percentual de Atingimento da Meta Mínima: ${percentualMetaMinima.toFixed(2)}%</p>
    `;
}
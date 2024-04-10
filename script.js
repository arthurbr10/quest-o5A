function calcularDiferenca() {
    let dataAtual = new Date();
    let dataDigitada;
    let dataFormatada;
    let resultado = document.getElementById('resultado');

    do {
        dataDigitada = prompt("Digite a data no formato dd/mm/aaaa:");
        if (!dataDigitada) {
            alert("Data não informada. Por favor, tente novamente.");
            return;
        }

        let partesData = dataDigitada.split('/');
        if (partesData.length !== 3) {
            alert("Formato de data inválido. Por favor, tente novamente.");
            continue;
        }

        let dia = parseInt(partesData[0], 10);
        let mes = parseInt(partesData[1], 10) - 1; // Os meses em JavaScript começam em 0
        let ano = parseInt(partesData[2], 10);

        if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
            alert("Formato de data inválido. Por favor, tente novamente.");
            continue;
        }

        dataFormatada = new Date(ano, mes, dia);
        if (dataFormatada.getFullYear() !== ano || dataFormatada.getMonth() !== mes || dataFormatada.getDate() !== dia) {
            alert("Formato de data inválido. Por favor, tente novamente.");
            continue;
        }
    } while (!dataFormatada);

    let diferencaEmMilisegundos = dataFormatada - dataAtual;
    let diferencaEmDias = Math.floor(diferencaEmMilisegundos / (1000 * 60 * 60 * 24));
    let diferencaEmMeses = Math.floor(diferencaEmDias / 30.44);
    let diferencaEmAnos = Math.floor(diferencaEmMeses / 12);

    resultado.innerHTML = `Faltam aproximadamente ${diferencaEmDias} dias, ${diferencaEmMeses} meses e ${diferencaEmAnos} anos para a data ${dataDigitada}.`;
}
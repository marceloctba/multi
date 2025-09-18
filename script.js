// Tabela de correlação entre prefixo e UOR
let prefixosUOR = {
    1604: 8988,
    1779: 9817,
    1769: 9795,
    1856: 10291,
    2414: 11815,
    2434: 11869,
    2565: 12201,
    2579: 12248,
    2609: 12322,
    3081: 14217,
    3149: 14486,
    3221: 14747,
    3222: 14748,
    3320: 15167,
    3322: 15177,
    3333: 15239,
    3336: 15245,
    3344: 15259,
    3347: 15266,
    3348: 15267,
    3357: 15279,
    3358: 15280,
    3359: 15281,
    3360: 15282,
    3362: 15289,
    3369: 15303,
    3370: 15304,
    3371: 15305,
    3382: 15343,
    3388: 15362,
    3392: 15371,
    3394: 15379,
    3398: 15393,
    3399: 15394,
    3402: 15399,
    3404: 15403,
    3406: 15406,
    3407: 15407,
    3409: 15412,
    3412: 15420,
    3414: 15429,
    3415: 15430,
    3418: 15436,
    3420: 15439,
    3422: 15447,
    3425: 15457,
    3428: 15464,
    3429: 15465,
    3431: 15467,
    3433: 15472,
    3437: 15478,
    3455: 15529,
    3734: 16679,
    3852: 22118,
    4044: 22122,
    4072: 22123,
    4090: 22125,
    4121: 22127,
    4202: 22129,
    4205: 22130,
    4248: 22586,
    4361: 23218,
    4478: 24991,
    5068: 530743,
    5111: 347022,
    5117: 347023,
    5116: 347024,
    5122: 347026,
    5113: 347028,
    5121: 347031,
    9003: 460064,
    9081: 487466,
    9082: 487467,
    9439: 529372,
    9440: 529373,
    9442: 529374,
    9443: 529375,
    9444: 529412,
    9441: 529376,
    9438: 529405,
    9435: 529406,
    9446: 529407,
    9447: 529408,
    9434: 529409,
    9448: 529410,
    9437: 529411,
    9445: 529414,
    9449: 529415,
    9436: 529416
};

// Aplica máscara ao campo de protocolo
function mascaraProtocolo(input) {
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1.$2');
    input.value = value;
}

// Busca a UOR correspondente ao prefixo na lista
function buscarUOR() {
    let prefixo = document.getElementById('prefixo').value;
    let protocolo = document.getElementById('protocolo').value.replace(/\D/g, ''); // Remove os pontos para buscar no array
    let resultadoUor = prefixosUOR[prefixo];
    let anoAtual = new Date().getFullYear();

    // Gera o link de avaliação
    let linkAvaliacao = 'https://app.uop.bb.com.br/app/avaliacao/formulario/gsv_web/' + anoAtual + '/' + resultadoUor + '/' + protocolo;

    // Gera href com o link ou retorna a mensagem de erro
    if (resultadoUor) {
        document.getElementById('avaliacaoLink').href = linkAvaliacao;
        document.getElementById('avaliacaoLink').innerText = linkAvaliacao;
        copyToClipboard(linkAvaliacao);
        alert("Link copiado para a área de transferência!");
    } else {
        document.getElementById('avaliacaoLink').removeAttribute('href');
        document.getElementById('avaliacaoLink').innerText = 'UOR do prefixo informado não localizado.';
    }
}

// Função para copiar texto para a área de transferência
function copyToClipboard(text) {
    // Cria um elemento de entrada temporário
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);

    // Seleciona e copia o texto para a área de transferência
    tempInput.select();
    document.execCommand("copy");

    // Remove o elemento temporário
    document.body.removeChild(tempInput);
}

// Limpa campos
window.addEventListener('load', () => {
  document.getElementById('protocolo').value = '';
  document.getElementById('prefixo').value = '';
  document.getElementById('avaliacaoLink').innerText = '';
  document.getElementById('avaliacaoLink').removeAttribute('href');
});



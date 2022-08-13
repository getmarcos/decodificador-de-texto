function valorDigitado() {
    return input.value;
}

function valorResultado() {
    return output.value;
}

function mostraResultado() {
    telaSemResultado.style.display = 'none';
    telaResultado.style.display = 'block'
}

function criptografar() {
    var input = valorDigitado();
    var novaString = '';

    if (input == '') {
        alert('Digite uma palavra ou frase')
    } else {
        for (var i = 0; i < input.length; i++) {
            if (input[i] == 'a') {
                novaString += 'ai';
            } else if (input[i] == 'e') {
                novaString += 'enter';
            } else if (input[i] == 'i') {
                novaString += 'imes';
            } else if (input[i] == 'o') {
                novaString += 'ober';
            } else if (input[i] == 'u') {
                novaString += 'ufat';
            } else {
                novaString += input[i];
            }
        }
        output.value = novaString;

        mostraResultado();
    }
}

function descriptografar() {
    var novaString = '';

    if (input.value == "" && output.value != "") {
        novaString = valorResultado;
    } else {
        novaString = valorDigitado();
    }

    novaString = novaString.replaceAll('ai', 'a');
    novaString = novaString.replaceAll('enter', 'e');
    novaString = novaString.replaceAll('imes', 'i');
    novaString = novaString.replaceAll('ober', 'o');
    novaString = novaString.replaceAll('ufat', 'u');

    mostraResultado();

    output.value = novaString;
}

function copiar() {
    var copiarTexto = document.getElementById("output");
    copiarTexto.select();
    document.execCommand("copy");
}

var input = document.getElementById('input');
var output = document.getElementById('output');

var telaResultado = document.getElementById('encriptado');
telaResultado.style.display = 'none';
var telaSemResultado = document.getElementById('sem-resultado');

var botaoCriptografar = document.getElementById('criptografar');
botaoCriptografar.onclick = criptografar;

var botaoDescriptografar = document.getElementById('descriptografar');
botaoDescriptografar.onclick = descriptografar;

var botaoCopiar = document.getElementById('botao-output');
botaoCopiar.onclick = copiar;
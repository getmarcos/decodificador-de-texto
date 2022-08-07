function botaoCriptografar() {
    mostraTextoEncriptado();

    var input = document.getElementById("input");
    var output = document.getElementById("output");

    var texto = input.value;
    var novaString = "";

    if (input.value == '') {
        output.value = 'Huum! Não encontrei nenhum texto para encriptografar.'
    } else {
        output.value = trocaLetras(texto);
    }
}

function trocaLetras(valorDeEntrada) {
    var novaString = "";
    for (var i = 0; i < valorDeEntrada.length; i++) {
        if (valorDeEntrada[i] == 'a') {
            novaString += 'ai';
        } else if (valorDeEntrada[i] == 'e') {
            novaString += 'enter';
        } else if (valorDeEntrada[i] == 'i') {
            novaString += 'imes';
        } else if (valorDeEntrada[i] == 'o') {
            novaString += 'ober';
        } else if (valorDeEntrada[i] == 'u') {
            novaString += 'ufat';
        } else {
            novaString += valorDeEntrada[i];
        }
    }
    return novaString;
}

function botaoDescriptografar() {
    mostraTextoEncriptado();

    var input = document.getElementById("input");
    var output = document.getElementById("output");

    var texto = "";
    var novaString = "";

    if (input.value == "" && output.value != "") {
        texto = output.value;
    } else {
        texto = input.value;
    }

    novaString = texto.replaceAll('ai', 'a');
    novaString = novaString.replaceAll('enter', 'e');
    novaString = novaString.replaceAll('imes', 'i');
    novaString = novaString.replaceAll('ober', 'o');
    novaString = novaString.replaceAll('ufat', 'u');

    output.value = novaString;
}

function mostraTextoEncriptado() {
    document.getElementById("sem-resultado").style.display = "none";
    document.getElementById("encriptado").style.display = "block";
}

function ocultarTextoEncriptado() {
    document.getElementById("encriptado").style.display = "none";
}

function copiar() {
    var copiarTexto = document.getElementById("output");
    copiarTexto.select();
    document.execCommand("copy");
}

ocultarTextoEncriptado();
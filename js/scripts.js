function pesquisa()
{
    alert("Botão de Pesquisa em Manutenção");
}

function mediaaritmetica(){
    var valor1 = +document.getElementById("aritmeticaum").value;
    var valor2 = +document.getElementById("aritmeticadois").value;
    var valor3 = +document.getElementById("aritmeticatres").value;
    var media = (valor1 + valor2 + valor3)/3;
    document.getElementById("aritmeticatotal").value = media;
}
function mediaaritmeticavarios(){
    var media_arit = +prompt("De quantos valores serão tirado a média?");
    var media = 0;
    vetor = new Array(media_arit);
    for(var i = 0; i<vetor.length; i++){
        vetor[i] = +prompt("Qual o valor do (" + (i+1) + "°)?");
        var media = media + vetor[i];
    }
    media = media/media_arit;
    alert("Todos valores informados são:" + vetor + "\nE a média deles é: " + media);
}

function soma(){
    var soma = parseInt(+document.getElementById("calcum").value) + parseInt(+document.getElementById("calcdois").value);
    document.getElementById("calcresultado").value = soma;
}

function subtracao(){
    var subtracao = parseInt(+document.getElementById("calcum").value) - parseInt(+document.getElementById("calcdois").value);
    document.getElementById("calcresultado").value = subtracao;
}

function multiplicacao(){
    var multiplicacao = parseFloat(+document.getElementById("calcum").value) * parseFloat(+document.getElementById("calcdois").value);
    document.getElementById("calcresultado").value = multiplicacao;
}

function divisao(){
    var divisao = parseFloat(+document.getElementById("calcum").value) / parseFloat(+document.getElementById("calcdois").value);
    if(divisao == "Infinity"){document.getElementById("calcresultado").value = "Impossivel obter divisão por 0.";}
    else{document.getElementById("calcresultado").value = divisao;}
    
}


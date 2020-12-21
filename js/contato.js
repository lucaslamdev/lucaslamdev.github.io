//Este link da API Webhook é o qual imprime no Discord meu, sei que não está seguro, mas é a maneira mais pratica para fazer esse teste q me lembrei sem um codigo rodando back-end.
//Esse bot caso tenha problema de alguem capturar a url, a falha de segurança terá como unico problema flood(Envio de muitas mensagens e pouco tempo) no discord!

function contato(){
    var request = new XMLHttpRequest();
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    request.open("POST", "https://discord.com/api/webhooks/788972452729847839/LbOZLL9lzHjW0t9gXC-8MNWEWm3H13FchM25DeWEYDNsS_NIEOCdrj_0-x40_nnL3NT1");
    request.setRequestHeader('Content-type', 'application/json');
    var escritas = {
        author: {
            name: nome
          },
          title: email ,
          description: mensagem,
          color: 65535
    
    }
  
    var params = {
        embeds: [escritas]
    }
  
    request.send(JSON.stringify(params));
    document.getElementById("contato").innerHTML = "Mensagem enviada com sucesso! Todos dados estarão disponivel como não tem back-end no discord abaixo através de webhook(API).";
}
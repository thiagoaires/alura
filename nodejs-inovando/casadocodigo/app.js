let express = require('express');
let app = express();
let porta = 3000;

let cospeHtml = function(conteudo){
    return `<html><body>${conteudo}</body></html>`;
}

app.get('/produtos', function(req, res){
    res.send(cospeHtml('<h1>pagina de produtos</h1>'));
})

app.listen(porta, function(){
    console.log(`Servidor rodando na porta ${porta}`);
});
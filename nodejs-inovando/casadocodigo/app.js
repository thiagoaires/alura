var app = require('./config/express')();
let rotasProdutos = require('./app/routes/produtos')(app);


let porta = 3000;



app.listen(porta, function(){

    console.log(`Servidor rodando na porta ${porta}`);
});
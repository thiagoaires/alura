let app = require('./config/express')();
let porta = 3000;
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.set('io',io);

http.listen(porta, function(){

    console.log(`Servidor rodando na porta ${porta}`);
});